import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import { uploadToR2 } from "@/lib/r2";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!isValidSessionValue(session)) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  const prefix = form.get("prefix");

  if (!(file instanceof File) || typeof prefix !== "string" || !prefix) {
    return NextResponse.json({ error: "Missing file or prefix" }, { status: 400 });
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const key = `website/${prefix}/${Date.now()}-${safeName}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const url = await uploadToR2(key, bytes, file.type || "application/octet-stream");

  return NextResponse.json({ key, url });
}
