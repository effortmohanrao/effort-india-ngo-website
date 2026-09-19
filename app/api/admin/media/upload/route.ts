import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, isValidSessionValue } from "@/app/lib/adminSession";
import sharp from "sharp";
import { uploadToR2 } from "@/lib/r2";

const MAX_EDGE = 2400; // px — plenty for full-width banners, keeps files light
const OPTIMISE_ABOVE = 400 * 1024; // bytes

// Shrinks big JPEG/PNG/WebP uploads so pages load fast. Logos and small images are left untouched,
// and if optimising somehow makes the file bigger we keep the original.
async function optimise(bytes: Uint8Array, type: string): Promise<Uint8Array> {
  if (bytes.byteLength < OPTIMISE_ABOVE) return bytes;
  if (!["image/jpeg", "image/png", "image/webp"].includes(type)) return bytes;
  try {
    let img = sharp(bytes).rotate().resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true });
    img = type === "image/jpeg" ? img.jpeg({ quality: 82, mozjpeg: true }) : type === "image/webp" ? img.webp({ quality: 82 }) : img.png({ compressionLevel: 9 });
    const out = new Uint8Array(await img.toBuffer());
    return out.byteLength < bytes.byteLength ? out : bytes;
  } catch {
    return bytes;
  }
}

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  if (!(await isValidSessionValue(session))) {
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
  const bytes = await optimise(new Uint8Array(await file.arrayBuffer()), file.type);

  const url = await uploadToR2(key, bytes, file.type || "application/octet-stream");

  return NextResponse.json({ key, url });
}
