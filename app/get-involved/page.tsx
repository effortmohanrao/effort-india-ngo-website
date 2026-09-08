import type { Metadata } from "next";
import GetInvolvedClient from "@/components/GetInvolvedClient";

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

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
}
