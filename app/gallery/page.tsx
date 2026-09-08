import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Field Photo Gallery & Project Albums | EFFORT NGO",
  description:
    "Explore authentic, verified photographs from EFFORT's rural field operations across 9 Indian states. Documenting sustainable agriculture, watershed structures, farmer training, and women's cooperatives.",
  keywords: [
    "EFFORT NGO Photo Gallery",
    "Rural India Field Photos",
    "Sustainable Agriculture Photographs",
    "Watershed Projects Photos Andhra Pradesh",
    "Farmer Training Field Photos",
    "NGO Work Photos India",
  ],
  alternates: {
    canonical: "https://www.effortindia.org/gallery",
  },
  openGraph: {
    title: "Field Photo Gallery & Project Albums | EFFORT NGO",
    description:
      "Authentic, verified field photography from 27+ years of community development and agriculture initiatives across India.",
    url: "https://www.effortindia.org/gallery",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
