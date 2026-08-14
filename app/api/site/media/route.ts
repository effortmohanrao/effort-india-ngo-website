import { NextRequest, NextResponse } from "next/server";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

// Public, read-only. Lists whatever images currently exist under website/{prefix}/ in R2.
// Used by the live site to render whatever an admin has uploaded — no database involved,
// the R2 folder itself is the source of truth.
export async function GET(req: NextRequest) {
  const prefix = req.nextUrl.searchParams.get("prefix");
  if (!prefix) {
    return NextResponse.json({ error: "Missing prefix" }, { status: 400 });
  }

  const objects = await listR2Objects(`website/${prefix}/`);
  const images = objects
    .filter((o) => o.Key)
    .sort((a, b) => (a.Key! < b.Key! ? -1 : 1))
    .map((o) => ({ key: o.Key!, url: publicUrlFor(o.Key!) }));

  return NextResponse.json({ images });
}
