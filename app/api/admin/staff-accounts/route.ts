import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue, getSessionUsername } from "@/app/lib/adminSession";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { hashPassword } from "@/lib/passwordHash";

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
  const { data, error } = await supabase
    .from("admin_users")
    .select("username, display_name, created_at, last_login_at")
    .order("created_at", { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ accounts: data ?? [], currentUsername: username });
}

export async function POST(req: NextRequest) {
  const username = await requireSession();
  if (!username) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { username: newUsername, password, displayName } = await req.json();
  if (typeof newUsername !== "string" || !newUsername.trim() || typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ error: "Username is required and password must be at least 8 characters." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("admin_users").insert({
    username: newUsername.trim(),
    password_hash: hashPassword(password),
    display_name: typeof displayName === "string" && displayName.trim() ? displayName.trim() : null,
  });

  if (error) {
    if (error.code === "23505") return NextResponse.json({ error: "That username is already taken." }, { status: 409 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const username = await requireSession();
  if (!username) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { username: targetUsername } = await req.json();
  if (typeof targetUsername !== "string" || !targetUsername) {
    return NextResponse.json({ error: "Invalid username" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { count } = await supabase.from("admin_users").select("*", { count: "exact", head: true });
  if ((count ?? 0) <= 1) {
    return NextResponse.json({ error: "Cannot remove the last remaining admin account." }, { status: 400 });
  }

  const { error } = await supabase.from("admin_users").delete().eq("username", targetUsername);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
