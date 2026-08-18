import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import { listR2Objects, deleteFromR2, copyInR2 } from "@/lib/r2";

// Sets an already-uploaded gallery photo as a project's cover by copying it (not re-uploading)
// into the cover slot, replacing whatever was there before. No duplicate storage.
export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidSessionValue(session))) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { sourceKey, coverPrefix } = await req.json();
  if (typeof sourceKey !== "string" || !sourceKey.startsWith("website/")) {
    return NextResponse.json({ error: "Invalid sourceKey" }, { status: 400 });
  }
  if (typeof coverPrefix !== "string" || !coverPrefix) {
    return NextResponse.json({ error: "Invalid coverPrefix" }, { status: 400 });
  }

  const existing = await listR2Objects(`website/${coverPrefix}/`);
  await Promise.all(existing.filter((o) => o.Key).map((o) => deleteFromR2(o.Key!)));

  const filename = sourceKey.split("/").pop();
  const destKey = `website/${coverPrefix}/${Date.now()}-${filename}`;
  const url = await copyInR2(sourceKey, destKey);

  return NextResponse.json({ key: destKey, url });
}
