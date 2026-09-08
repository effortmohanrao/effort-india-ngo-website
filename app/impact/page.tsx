import type { Metadata } from "next";
import ImpactClient from "@/components/ImpactClient";

export const metadata: Metadata = {
  title: "Our Field Impact & Reach | EFFORT NGO Across 9 States",
  description:
    "Documented field impact of EFFORT: 27+ years, 1,909 villages, and 2.50+ Lakh farm families empowered across 9 Indian states in sustainable agriculture, natural resource management, and women's SHGs.",
  keywords: [
    "EFFORT Impact",
    "Sustainable Agriculture Impact India",
    "Watershed Development Andhra Pradesh",
    "Rural Empowerment 1909 Villages",
    "FPO Promotion Impact India",
    "Soil Carbon Credits Varaha",
    "Rural Livelihoods NGO India",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/impact",
  },
  openGraph: {
    title: "Our Field Impact & Reach | EFFORT NGO Across 9 States",
    description:
      "27+ years of proven impact empowering 2.50+ Lakh farm families across 1,909 villages in 9 Indian states.",
    url: "https://www.effortindia.org/impact",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

export default function ImpactPage() {
  return <ImpactClient />;
}
