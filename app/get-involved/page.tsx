import type { Metadata } from "next";
import GetInvolvedClient from "@/components/GetInvolvedClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Get Involved, CSR Partnerships & Volunteering | EFFORT NGO",
  description:
    "Partner with EFFORT for corporate CSR alliances, institutional funding grants, community volunteering, and internships. Fully certified with Section 80G, 12A, FCRA, and NITI Aayog DARPAN compliance.",
  keywords: [
    "CSR Partnerships NGO India",
    "Volunteer with NGO India",
    "Corporate CSR Partner Andhra Pradesh",
    "NGO Volunteering Agriculture",
    "MoU Institutional Partnerships NGO",
    "EFFORT Get Involved",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/get-involved",
  },
  openGraph: {
    title: "Get Involved, CSR Partnerships & Volunteering | EFFORT NGO",
    description:
      "Collaborate with EFFORT through CSR partnerships, institutional alliances, and volunteer initiatives across rural India.",
    url: "https://www.effortindia.org/get-involved",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

// Curated field photos (the same set the About hero uses) for the hero and the form panel.
async function fieldPhotos(): Promise<string[]> {
  try {
    const objs = await listR2Objects("website/about/hero/");
    const keys = objs.map((o) => o.Key).filter((k): k is string => !!k).sort();
    // lead with a different photo than the About page does
    return [...keys.slice(1), ...keys.slice(0, 1)].map(publicUrlFor);
  } catch {
    return [];
  }
}

export default async function GetInvolvedPage() {
  return <GetInvolvedClient photos={await fieldPhotos()} />;
}
