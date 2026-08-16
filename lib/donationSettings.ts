import { getR2Text, uploadToR2 } from "@/lib/r2";

const SETTINGS_KEY = "config/donation-settings.json";

export type BankAccount = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  ifsc: string;
  branch: string;
  swiftCode?: string;
};

export type DonationSettings = {
  upiId: string;
  domesticBank: BankAccount;
  fcraBank: BankAccount;
  receiptEmail: string;
  updatedAt: string;
};

// Seeded with EFFORT's real, verified account details. upiId and swiftCode are left blank
// until an admin fills them in — never guess or fabricate financial identifiers.
export const defaultDonationSettings: DonationSettings = {
  upiId: "",
  domesticBank: {
    bankName: "Union Bank of India",
    accountName: "EFFORT",
    accountNumber: "138710100008276",
    ifsc: "UBIN0813877",
    branch: "Martur, Prakasam District, Andhra Pradesh",
  },
  fcraBank: {
    bankName: "State Bank of India",
    accountName: "EFFORT",
    accountNumber: "40102285992",
    ifsc: "SBIN0000691",
    branch: "New Delhi Main Branch, 11 Sansad Marg (Parliament Street), New Delhi 110001",
    swiftCode: "SBININBB104",
  },
  receiptEmail: "effortap@gmail.com",
  updatedAt: "",
};

export async function getDonationSettings(): Promise<DonationSettings> {
  const text = await getR2Text(SETTINGS_KEY);
  if (!text) return defaultDonationSettings;
  try {
    const saved = JSON.parse(text);
    return {
      ...defaultDonationSettings,
      ...saved,
      domesticBank: { ...defaultDonationSettings.domesticBank, ...saved.domesticBank },
      fcraBank: { ...defaultDonationSettings.fcraBank, ...saved.fcraBank },
    };
  } catch {
    return defaultDonationSettings;
  }
}

export async function saveDonationSettings(settings: DonationSettings) {
  const body = JSON.stringify({ ...settings, updatedAt: new Date().toISOString() }, null, 2);
  await uploadToR2(SETTINGS_KEY, Buffer.from(body, "utf-8"), "application/json");
}
