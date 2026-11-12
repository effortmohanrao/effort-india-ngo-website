import type { Metadata } from "next";
import HomePage, { type HomeMedia } from "@/components/home/HomePage";
import { listR2Objects, publicUrlFor } from "@/lib/r2";
import { partnershipSlides, voiceStories } from "@/components/home/homeData";

// Cache the rendered page for 60s so visitors get an instant response instead of waiting on
// Cloudflare R2 for every request. New images in R2 still appear within a minute.
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: { canonical: "https://www.effortindia.org" },
};

// First image (by key order) inside website/{prefix}/ — null when the folder is empty.
async function firstImage(prefix: string): Promise<string | null> {
  try {
    const objects = await listR2Objects(`website/${prefix}/`);
    const keys = objects
      .filter((o) => o.Key)
      .map((o) => o.Key!)
      .sort((a, b) => (a < b ? -1 : 1));
    return keys[0] ? publicUrlFor(keys[0]) : null;
  } catch {
    return null;
  }
}

async function loadMedia(): Promise<HomeMedia> {
  const [hero, partnerships, testimonials] = await Promise.all([
    firstImage("homepage/hero-section"),
    Promise.all(partnershipSlides.map((s) => firstImage(`homepage/partnerships/${s.slug}`))),
    Promise.all(voiceStories.map((s) => firstImage(`homepage/testimonials/${s.slug}`))),
  ]);
  return { hero, partnerships, testimonials };
}

export default async function Home() {
  const media = await loadMedia();
  return <HomePage media={media} />;
}
