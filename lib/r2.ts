import { S3Client, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";

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

export async function listR2Objects(prefix?: string) {
  const result = await r2.send(new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix }));
  return result.Contents ?? [];
}

export function publicUrlFor(key: string) {
  return `${PUBLIC_URL}/${key}`;
}

// Reads a small text/JSON object from R2. Returns null if the key doesn't exist yet
// (e.g. settings that haven't been saved by an admin for the first time).
export async function getR2Text(key: string): Promise<string | null> {
  try {
    const result = await r2.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
    const body = await result.Body?.transformToString();
    return body ?? null;
  } catch (err: unknown) {
    const code = (err as { name?: string; $metadata?: { httpStatusCode?: number } })?.name;
    const status = (err as { $metadata?: { httpStatusCode?: number } })?.$metadata?.httpStatusCode;
    if (code === "NoSuchKey" || status === 404) return null;
    throw err;
  }
}
