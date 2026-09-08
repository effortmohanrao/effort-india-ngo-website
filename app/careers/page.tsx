import type { Metadata } from "next";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers & Field Opportunities | Join EFFORT NGO",
  description:
    "Explore meaningful career, internship, and field execution opportunities at EFFORT NGO. Join a passionate team working across 1,909 villages in sustainable agriculture, natural resource management, and rural livelihoods.",
  keywords: [
    "NGO Jobs India",
    "Careers in Sustainable Agriculture",
    "Rural Development Jobs Andhra Pradesh",
    "Social Work Jobs India",
    "EFFORT NGO Careers",
    "NGO Internships India",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/careers",
  },
  openGraph: {
    title: "Careers & Field Opportunities | Join EFFORT NGO",
    description:
      "Join our mission empowering smallholder farmers and rural communities across India. Explore current career openings and internships.",
    url: "https://www.effortindia.org/careers",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
