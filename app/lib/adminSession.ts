import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE_NAME = "effort_admin_session";

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function checkCredentials(username: string, password: string) {
  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;
  if (!validUsername || !validPassword) return false;
  return safeEqual(username, validUsername) && safeEqual(password, validPassword);
}

export function createSessionValue() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const username = process.env.ADMIN_USERNAME;
  if (!secret || !username) {
    throw new Error("ADMIN_SESSION_SECRET / ADMIN_USERNAME are not set");
  }
  return `${username}.${sign(username, secret)}`;
}

export function isValidSessionValue(value: string | undefined | null) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  const validUsername = process.env.ADMIN_USERNAME;
  if (!value || !secret || !validUsername) return false;

  const dotIndex = value.indexOf(".");
  if (dotIndex === -1) return false;
  const username = value.slice(0, dotIndex);
  const signature = value.slice(dotIndex + 1);
  if (!username || !signature) return false;

  const expected = sign(username, secret);
  return safeEqual(signature, expected) && safeEqual(username, validUsername);
}
