import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import QRCode from "qrcode";
import { ADMIN_COOKIE_NAME, isValidSessionValue, getSessionUsername } from "@/app/lib/adminSession";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { generateTotpSecret, buildOtpauthUrl, verifyTotpCode } from "@/lib/totp";

async function requireSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidSessionValue(session))) return null;
  return getSessionUsername(session);
}

export async function GET() {
  const username = await requireSession();
  if (!username) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const supabase = getSupabaseAdmin();
  const { data } = await supabase.from("admin_users").select("totp_enabled").eq("username", username).maybeSingle();
  return NextResponse.json({ enabled: !!data?.totp_enabled });
}

export async function POST(req: NextRequest) {
  const username = await requireSession();
  if (!username) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const body = await req.json();
  const action = body?.action;
  const supabase = getSupabaseAdmin();

  if (action === "start") {
    const secret = generateTotpSecret();
    const { error } = await supabase.from("admin_users").update({ totp_secret: secret, totp_enabled: false }).eq("username", username);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    const otpauthUrl = buildOtpauthUrl(username, secret);
    const qrDataUrl = await QRCode.toDataURL(otpauthUrl, { margin: 1, width: 240 });
    return NextResponse.json({ secret, otpauthUrl, qrDataUrl });
  }

  if (action === "confirm") {
    const code = String(body?.code ?? "");
    const { data } = await supabase.from("admin_users").select("totp_secret").eq("username", username).maybeSingle();
    if (!data?.totp_secret) return NextResponse.json({ error: "Start setup first." }, { status: 400 });

    if (!verifyTotpCode(data.totp_secret, code)) {
      return NextResponse.json({ error: "Incorrect code. Check your authenticator app and try again." }, { status: 400 });
    }

    const { error } = await supabase.from("admin_users").update({ totp_enabled: true }).eq("username", username);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  if (action === "disable") {
    const { error } = await supabase
      .from("admin_users")
      .update({ totp_enabled: false, totp_secret: null })
      .eq("username", username);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
