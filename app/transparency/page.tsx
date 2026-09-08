import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Transparency, Statutory Filings & Governance | EFFORT NGO",
  description:
    "Official statutory filings, Section 80G, 12A, FCRA approvals, NITI Aayog DARPAN credentials, and financial audit transparency for EFFORT (A Society for the Development of Agriculture and Youth).",
  alternates: {
    canonical: "https://www.effortindia.org/transparency",
  },
};

export default function TransparencyPage() {
  redirect("/#trust-section");
}
