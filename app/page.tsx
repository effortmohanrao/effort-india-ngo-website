import type { Metadata } from "next";
import HomePage, { type HomeMedia } from "@/components/home/HomePage";
import { listR2Objects, publicUrlFor } from "@/lib/r2";
import { partnerCategories } from "@/lib/partners";
import { homeTestimonials, homeFocusAreas, homeFeaturedProjects } from "@/components/home/homeData";

// Cache the rendered page for 60s so visitors get an instant response instead of waiting on
// Cloudflare R2 for every request. New images in R2 still appear within a minute.
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: { canonical: "https://www.effortindia.org" },
};

// The nth image (by key order, default first) inside website/{prefix}/ — null when there is none.
async function firstImage(prefix: string, minBytes = 0, nth = 0): Promise<string | null> {
  try {
    const objects = await listR2Objects(`website/${prefix}/`);
    const keys = objects
      .filter((o) => o.Key && (o.Size ?? 0) >= minBytes)
      .map((o) => o.Key!)
      .sort((a, b) => (a < b ? -1 : 1));
    return keys[nth] ? publicUrlFor(keys[nth]) : null;
  } catch {
    return null;
  }
}

async function loadMedia(): Promise<HomeMedia> {
  const partners = partnerCategories.flatMap((c) => c.partners).filter((p) => p.slug);

  const [hero, about, focus, projects, testimonials, logos] = await Promise.all([
    firstImage("homepage/hero-section"),
    firstImage("programs/category-covers/agriculture", 0, 5),
    Promise.all(homeFocusAreas.map((f) => firstImage(`programs/category-covers/${f.coverSlug}`))),
    Promise.all(homeFeaturedProjects.map((p) => firstImage(`programs/ongoing/${p.photoFolder}`))),
    // Skip placeholder-sized files (a few testimonial "photos" are 2–3 KB blanks).
    Promise.all(homeTestimonials.map((t) => firstImage(`homepage/testimonials/${t.slug}`, 8000))),
    Promise.all(partners.map((p) => firstImage(`about/partner-logos/${p.slug}`))),
  ]);

  return {
    hero,
    about,
    focus,
    projects,
    testimonials,
    partners: partners
      .map((p, i) => ({ name: p.name, logo: logos[i] }))
      .filter((p): p is { name: string; logo: string } => !!p.logo),
  };
}

export default async function Home() {
  const media = await loadMedia();
  return <HomePage media={media} />;
}
