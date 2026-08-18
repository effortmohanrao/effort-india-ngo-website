import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import { saveDonationSettings, type DonationSettings } from "@/lib/donationSettings";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidSessionValue(session))) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = (await req.json()) as DonationSettings;
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await saveDonationSettings(body);
  return NextResponse.json({ ok: true });
}
