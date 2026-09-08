import type { Metadata } from "next";
import ProgramsClient from "@/components/ProgramsClient";

export const metadata: Metadata = {
  title: "Our Programs & 80 Projects | EFFORT NGO Sustainable Agriculture",
  description:
    "Explore EFFORT's 80 completed and ongoing projects across 4 core domains: Sustainable Agriculture, Natural Resource Management (NRM), Community Health, and Child & Women Development.",
  keywords: [
    "EFFORT Programs",
    "Sustainable Agriculture Projects India",
    "Watershed Development NABARD",
    "Carbon Sequestration Varaha",
    "Organic Farming Andhra Pradesh",
    "Community Health NGO India",
    "Rural Livelihoods Projects",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/programs",
  },
  openGraph: {
    title: "Our Programs & 80 Projects | EFFORT NGO Sustainable Agriculture",
    description:
      "80 completed and ongoing field initiatives empowering rural communities across 9 Indian states.",
    url: "https://www.effortindia.org/programs",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
