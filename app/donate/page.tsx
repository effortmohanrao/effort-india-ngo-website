import type { Metadata } from "next";
import DonateClient from "@/components/DonateClient";

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

export default function DonatePage() {
  return <DonateClient />;
}
