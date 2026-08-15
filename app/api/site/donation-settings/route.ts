import { NextResponse } from "next/server";
import { getDonationSettings } from "@/lib/donationSettings";

// Public, read-only. The live donate modal reads current bank/UPI details from here.
export async function GET() {
  const settings = await getDonationSettings();
  return NextResponse.json(settings);
}
