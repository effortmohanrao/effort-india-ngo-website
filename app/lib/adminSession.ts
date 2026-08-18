import { createHmac, timingSafeEqual } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { verifyPassword } from "@/lib/passwordHash";
import { verifyTotpCode } from "@/lib/totp";

export const ADMIN_COOKIE_NAME = "effort_admin_session";
export const PENDING_TOTP_COOKIE_NAME = "effort_admin_2fa_pending";
const PENDING_TOTP_TTL_MS = 5 * 60 * 1000;

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

function requireSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return secret;
}

// Step 1 of login: username + password. Returns whether that account also
// requires a TOTP code, so the caller knows whether to finish login now or
// send the user to the verify-code step first.
export async function checkCredentials(
  username: string,
  password: string
): Promise<{ ok: boolean; totpEnabled: boolean }> {
  if (!username || !password) return { ok: false, totpEnabled: false };

  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("admin_users")
    .select("password_hash, totp_enabled")
    .eq("username", username)
    .maybeSingle();

  if (!data) return { ok: false, totpEnabled: false };
  const ok = verifyPassword(password, data.password_hash);
  if (ok && !data.totp_enabled) {
    // Only stamp last_login_at here when no 2FA step remains; when 2FA is
    // required it's stamped after the code is verified instead.
    await supabase.from("admin_users").update({ last_login_at: new Date().toISOString() }).eq("username", username);
  }
  return { ok, totpEnabled: ok && !!data.totp_enabled };
}

// Step 2 of login (only when the account has 2FA enabled): the 6-digit code.
export async function verifyTotpForUser(username: string, code: string): Promise<boolean> {
  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("admin_users")
    .select("totp_secret, totp_enabled")
    .eq("username", username)
    .maybeSingle();

  if (!data || !data.totp_enabled || !data.totp_secret) return false;
  const ok = verifyTotpCode(data.totp_secret, code);
  if (ok) {
    await supabase.from("admin_users").update({ last_login_at: new Date().toISOString() }).eq("username", username);
  }
  return ok;
}

export function createSessionValue(username: string) {
  return `${username}.${sign(username, requireSecret())}`;
}

// Verifies the cookie's signature (only our server could have produced it, minted
// at login after a real password check) AND that the username it names still has
// an admin_users row — so renaming/removing an account invalidates old sessions
// for it immediately, on the very next request, not just after the cookie expires.
export async function isValidSessionValue(value: string | undefined | null): Promise<boolean> {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!value || !secret) return false;

  const dotIndex = value.indexOf(".");
  if (dotIndex === -1) return false;
  const username = value.slice(0, dotIndex);
  const signature = value.slice(dotIndex + 1);
  if (!username || !signature) return false;

  const expected = sign(username, secret);
  if (!safeEqual(signature, expected)) return false;

  const supabase = getSupabaseAdmin();
  const { data } = await supabase.from("admin_users").select("username").eq("username", username).maybeSingle();
  return !!data;
}

export function getSessionUsername(value: string | undefined | null): string | null {
  if (!value) return null;
  const dotIndex = value.indexOf(".");
  if (dotIndex === -1) return null;
  return value.slice(0, dotIndex) || null;
}

// Short-lived cookie proving "this username just passed the password check" —
// issued after step 1 of login when 2FA is required, consumed by step 2.
// Uses "|" as the field separator (encodeURIComponent escapes any literal "|"
// inside the username) so a username containing "." or "|" can't corrupt parsing.
export function createPendingTotpValue(username: string): string {
  const secret = requireSecret();
  const timestamp = Date.now().toString();
  const signature = sign(`2fa:${username}:${timestamp}`, secret);
  return `${encodeURIComponent(username)}|${timestamp}|${signature}`;
}

export function verifyPendingTotpValue(value: string | undefined | null): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!value || !secret) return null;

  const parts = value.split("|");
  if (parts.length !== 3) return null;
  const [encodedUsername, timestamp, signature] = parts;
  if (!encodedUsername || !timestamp || !signature) return null;

  let username: string;
  try {
    username = decodeURIComponent(encodedUsername);
  } catch {
    return null;
  }

  const expected = sign(`2fa:${username}:${timestamp}`, secret);
  if (!safeEqual(signature, expected)) return null;

  const age = Date.now() - Number(timestamp);
  if (!Number.isFinite(age) || age < 0 || age > PENDING_TOTP_TTL_MS) return null;

  return username;
}
