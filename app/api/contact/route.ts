import { NextResponse } from "next/server";

const NOTIFY_EMAIL = "effortap@gmail.com";
const FROM_EMAIL = "EFFORT Website <onboarding@resend.dev>";

type FormType = "contact" | "careers" | "get-involved";

interface FormPayload {
  formType: FormType;
  name?: string;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

const FORM_SUBJECTS: Record<FormType, string> = {
  contact: "New Contact Form Enquiry",
  careers: "New Careers Application",
  "get-involved": "New Get Involved Enquiry",
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  department: "Department",
  subject: "Subject",
  message: "Message",
  college: "College / Institution",
  role: "Role",
  portfolio: "Portfolio / LinkedIn",
  statement: "Statement",
  organization: "Organization",
  pathway: "Pathway",
  sector: "Sector",
  location: "Location",
  skills: "Selected Skills",
};

function buildEmailHtml(payload: FormPayload) {
  const rows = Object.entries(payload)
    .filter(([key]) => key !== "formType")
    .map(([key, value]) => {
      const label = FIELD_LABELS[key] ?? key;
      const displayValue = Array.isArray(value) ? value.join(", ") : String(value ?? "");
      if (!displayValue) return "";
      return `<tr><td style="padding:6px 12px;font-weight:700;color:#7c4a03;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 12px;color:#221c0c;">${displayValue.replace(/\n/g, "<br/>")}</td></tr>`;
    })
    .join("");

  return `<div style="font-family:sans-serif;max-width:560px;">
    <h2 style="color:#221c0c;">${FORM_SUBJECTS[payload.formType]}</h2>
    <table style="border-collapse:collapse;width:100%;">${rows}</table>
    <p style="color:#8a7a5c;font-size:12px;margin-top:20px;">Submitted from the EFFORT website form.</p>
  </div>`;
}

export async function POST(request: Request) {
  let payload: FormPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.formType || !FORM_SUBJECTS[payload.formType]) {
    return NextResponse.json({ error: "Invalid form type." }, { status: 400 });
  }
  if (!payload.name || !payload.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email sending is not configured yet. Please try again later or email us directly." },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: String(payload.email),
      subject: `${FORM_SUBJECTS[payload.formType]} — ${payload.name}`,
      html: buildEmailHtml(payload),
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend API error:", errText);
    return NextResponse.json({ error: "Failed to send. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
