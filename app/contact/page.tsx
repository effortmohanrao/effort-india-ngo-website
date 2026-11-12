import type { Metadata } from "next";
import ContactClient from "@/components/ContactClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Contact EFFORT NGO | Martur Headquarters & State Offices",
  description:
    "Get in touch with EFFORT (A Society for the Development of Agriculture and Youth). Central Office in Martur, Bapatla District, Andhra Pradesh. Donor relations, CSR partnerships, and general inquiries.",
  keywords: [
    "Contact EFFORT NGO",
    "EFFORT Martur Address",
    "EFFORT NGO Phone Number",
    "NGO Andhra Pradesh Contact",
    "CSR Partner Contact India",
    "EFFORT Headquarters Bapatla",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/contact",
  },
  openGraph: {
    title: "Contact EFFORT NGO | Martur Headquarters & State Offices",
    description:
      "Official contact details, office locations, and communication channels for EFFORT NGO.",
    url: "https://www.effortindia.org/contact",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

async function heroPhoto(): Promise<string | null> {
  try {
    const objs = await listR2Objects("website/about/hero/");
    const keys = objs.map((o) => o.Key).filter((k): k is string => !!k).sort();
    return keys[2] ? publicUrlFor(keys[2]) : keys[0] ? publicUrlFor(keys[0]) : null;
  } catch {
    return null;
  }
}

export default async function ContactPage() {
  return <ContactClient photo={await heroPhoto()} />;
}
