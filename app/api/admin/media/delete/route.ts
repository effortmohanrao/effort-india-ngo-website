import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import { deleteFromR2 } from "@/lib/r2";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidSessionValue(session))) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { key } = await req.json();
  if (typeof key !== "string" || !key.startsWith("website/")) {
    return NextResponse.json({ error: "Invalid key" }, { status: 400 });
  }

  await deleteFromR2(key);
  return NextResponse.json({ ok: true });
}
