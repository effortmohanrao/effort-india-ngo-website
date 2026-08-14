import { S3Client, PutObjectCommand, DeleteObjectCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME!;
const PUBLIC_URL = process.env.R2_PUBLIC_URL!;

// Uploads a file (image, video, or PDF) to R2. `key` is the path/filename inside the bucket,
// e.g. "programs/chilli-ipm/hero.jpg" or "documents/annual-report-2025.pdf".
export async function uploadToR2(key: string, body: Buffer | Uint8Array, contentType: string) {
  await r2.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  return publicUrlFor(key);
}

export async function deleteFromR2(key: string) {
  await r2.send(new DeleteObjectCommand({ Bucket: BUCKET, Key: key }));
}

export async function listR2Objects(prefix?: string) {
  const result = await r2.send(new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix }));
  return result.Contents ?? [];
}

// Generates a temporary signed URL for uploading directly from the browser/Android app
// without exposing the R2 secret key to the client. Expires in `expiresInSeconds` (default 5 min).
export async function getUploadUrl(key: string, contentType: string, expiresInSeconds = 300) {
  const command = new PutObjectCommand({ Bucket: BUCKET, Key: key, ContentType: contentType });
  return getSignedUrl(r2, command, { expiresIn: expiresInSeconds });
}

export function publicUrlFor(key: string) {
  return `${PUBLIC_URL}/${key}`;
}
