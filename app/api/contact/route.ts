import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

type FormType = "contact" | "careers" | "get-involved";

interface FormPayload {
  formType: FormType;
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

const VALID_FORM_TYPES: FormType[] = ["contact", "careers", "get-involved"];

export async function POST(request: Request) {
  let payload: FormPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.formType || !VALID_FORM_TYPES.includes(payload.formType)) {
    return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  }
  if (!payload.name || !payload.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  // Submissions go straight to the admin panel (Form Submissions tab) — no email is sent.
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("form_submissions").insert({
      form_type: payload.formType,
      name: String(payload.name),
      email: String(payload.email),
      data: payload,
    });
    if (error) throw error;
  } catch (err) {
    console.error("Failed to save form submission:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
