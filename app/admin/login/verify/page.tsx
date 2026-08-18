import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PENDING_TOTP_COOKIE_NAME, verifyPendingTotpValue } from "@/app/lib/adminSession";
import TotpVerifyForm from "@/components/admin/TotpVerifyForm";

export default async function AdminTotpVerifyPage() {
  const cookieStore = await cookies();
  const pending = cookieStore.get(PENDING_TOTP_COOKIE_NAME)?.value;

  if (!verifyPendingTotpValue(pending)) {
    redirect("/admin/login");
  }

  return <TotpVerifyForm />;
}
