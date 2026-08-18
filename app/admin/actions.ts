"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_COOKIE_NAME,
  PENDING_TOTP_COOKIE_NAME,
  checkCredentials,
  createSessionValue,
  createPendingTotpValue,
  verifyPendingTotpValue,
  verifyTotpForUser,
} from "@/app/lib/adminSession";

export type LoginState = { error?: string } | undefined;

async function setSessionCookie(username: string) {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, createSessionValue(username), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function loginAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const username = String(formData.get("username") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const { ok, totpEnabled } = await checkCredentials(username, password);
  if (!ok) {
    return { error: "Incorrect username or password." };
  }

  if (totpEnabled) {
    const cookieStore = await cookies();
    cookieStore.set(PENDING_TOTP_COOKIE_NAME, createPendingTotpValue(username), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 5,
    });
    redirect("/admin/login/verify");
  }

  await setSessionCookie(username);
  redirect("/admin");
}

export async function verifyTotpAction(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const cookieStore = await cookies();
  const pending = cookieStore.get(PENDING_TOTP_COOKIE_NAME)?.value;
  const username = verifyPendingTotpValue(pending);

  if (!username) {
    redirect("/admin/login");
  }

  const code = String(formData.get("code") ?? "");
  const ok = await verifyTotpForUser(username, code);
  if (!ok) {
    return { error: "Incorrect or expired code. Check your authenticator app and try again." };
  }

  cookieStore.delete(PENDING_TOTP_COOKIE_NAME);
  await setSessionCookie(username);
  redirect("/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_COOKIE_NAME);
  cookieStore.delete(PENDING_TOTP_COOKIE_NAME);
  redirect("/admin/login");
}
