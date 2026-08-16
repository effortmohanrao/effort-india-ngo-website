import { NextResponse } from "next/server";
import { getTeamSettings } from "@/lib/teamSettings";

// Public, read-only. The About page reads each team member's social links from here.
export async function GET() {
  const settings = await getTeamSettings();
  return NextResponse.json(settings);
}
