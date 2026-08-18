import { createHmac, timingSafeEqual } from "crypto";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { verifyPassword } from "@/lib/passwordHash";

export const ADMIN_COOKIE_NAME = "effort_admin_session";

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export async function checkCredentials(username: string, password: string): Promise<boolean> {
  if (!username || !password) return false;

  const supabase = getSupabaseAdmin();
  const { data } = await supabase
    .from("admin_users")
    .select("password_hash")
    .eq("username", username)
    .maybeSingle();

  if (!data) return false;
  const ok = verifyPassword(password, data.password_hash);
  if (ok) {
    await supabase.from("admin_users").update({ last_login_at: new Date().toISOString() }).eq("username", username);
  }
  return ok;
}

export function createSessionValue(username: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }
  return `${username}.${sign(username, secret)}`;
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
