import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

async function requireSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return isValidSessionValue(session);
}

export async function GET() {
  if (!(await requireSession())) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("form_submissions")
    .select("id, form_type, name, email, data, is_read, created_at")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ submissions: data ?? [] });
}

export async function PATCH(req: NextRequest) {
  if (!(await requireSession())) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { id, is_read } = await req.json();
  if (typeof id !== "string" || typeof is_read !== "boolean") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("form_submissions").update({ is_read }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!(await requireSession())) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

  const { id } = await req.json();
  if (typeof id !== "string") return NextResponse.json({ error: "Invalid id" }, { status: 400 });

  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("form_submissions").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
