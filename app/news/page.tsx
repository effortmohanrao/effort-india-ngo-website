import type { Metadata } from "next";
import NewsClient from "@/components/NewsClient";

export const metadata: Metadata = {
  title: "News, Field Dispatches & Milestone Updates | EFFORT NGO",
  description:
    "Latest field stories, project milestones, and rural development updates from EFFORT NGO. Direct Seeded Rice (DSR) innovations, RO water plants, FPO growth, and community transformation in India.",
  keywords: [
    "EFFORT NGO News",
    "Rural Development Stories India",
    "Sustainable Agriculture News Andhra Pradesh",
    "Direct Seeded Rice DSR Prakasam",
    "Farmer Producer Organizations FPO News",
    "NGO Field Updates India",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/news",
  },
  openGraph: {
    title: "News, Field Dispatches & Milestone Updates | EFFORT NGO",
    description:
      "Latest field reports and stories of change from 27+ years of sustainable agriculture and rural empowerment.",
    url: "https://www.effortindia.org/news",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

export default function NewsPage() {
  return <NewsClient />;
}
