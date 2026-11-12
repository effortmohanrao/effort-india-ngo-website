import type { Metadata } from "next";
import DonateClient from "@/components/DonateClient";
import { getDonationSettings } from "@/lib/donationSettings";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Donate to EFFORT | 80G Tax-Exempt Non-Profit Donation",
  description:
    "Support rural livelihoods, sustainable agriculture, watershed conservation, and community empowerment. All contributions are 100% tax-exempt under Section 80G of the Income Tax Act with FCRA compliance.",
  keywords: [
    "Donate to NGO India",
    "80G Tax Exemption Donation",
    "EFFORT NGO Donation",
    "Support Indian Farmers",
    "Rural Development Donation India",
    "CSR Donation India",
    "Donate Watershed Project",
    "Section 80G NGO Andhra Pradesh",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/donate",
  },
  openGraph: {
    title: "Donate to EFFORT | 80G Tax-Exempt Non-Profit Donation",
    description:
      "Support rural livelihoods, sustainable agriculture, and community empowerment. All contributions are 100% tax-exempt under Section 80G.",
    url: "https://www.effortindia.org/donate",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

async function firstUrl(prefix: string): Promise<string | null> {
  try {
    const objs = await listR2Objects(`website/${prefix}/`);
    const key = objs.map((o) => o.Key).filter((k): k is string => !!k).sort()[0];
    return key ? publicUrlFor(key) : null;
  } catch {
    return null;
  }
}

export default async function DonatePage() {
  // Everything the page needs is looked up on the server, so bank details render instantly
  // (no "loading" spinner) and the page makes no extra API calls in the browser.
  const [settings, qrUrl, unionLogo, sbiLogo, photo] = await Promise.all([
    getDonationSettings().catch(() => null),
    firstUrl("donation-qr"),
    firstUrl("bank-logos/union-bank"),
    firstUrl("bank-logos/sbi"),
    firstUrl("about/hero"),
  ]);
  return <DonateClient settings={settings} qrUrl={qrUrl} unionLogo={unionLogo} sbiLogo={sbiLogo} photo={photo} />;
}
