import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

// Same caching approach as the Home page — avoids a live R2 round-trip on every visitor.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EFFORT was founded in 1999 on the premise that development in India can take place only in proportion to the development of agriculture. Meet our leadership team and 27-year journey.",
  alternates: { canonical: "https://www.effortindia.org/about" },
};

export default async function AboutPage() {
  const objects = await listR2Objects("website/about/hero/");
  const sortedKeys = objects
    .filter((o) => o.Key)
    .map((o) => o.Key!)
    .sort((a, b) => (a < b ? -1 : 1));
  const initialHeroImageUrl = sortedKeys.length > 0 ? publicUrlFor(sortedKeys[0]) : null;

  return <AboutClient initialHeroImageUrl={initialHeroImageUrl} />;
}
