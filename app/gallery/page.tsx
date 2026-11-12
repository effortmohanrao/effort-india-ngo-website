import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";
import { programAlbums } from "@/lib/programAlbums";

// Albums are listed on the server and cached for a minute, so the page arrives with its covers
// instead of fetching 26 lists from the browser after load.
export const revalidate = 60;

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

export default async function GalleryPage() {
  const entries = await Promise.all(
    programAlbums.map(async (a) => {
      try {
        const objs = await listR2Objects(`website/programs/${a.status}/${a.folder}/`);
        const keys = objs.map((o) => o.Key).filter((k): k is string => !!k).sort();
        return [a.folder, { coverUrl: keys[0] ? publicUrlFor(keys[0]) : null, count: keys.length }] as const;
      } catch {
        return [a.folder, { coverUrl: null, count: 0 }] as const;
      }
    })
  );
  return <GalleryClient live={Object.fromEntries(entries)} />;
}
