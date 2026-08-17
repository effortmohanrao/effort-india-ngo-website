import HomeClient from "@/components/HomeClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

// Caches the rendered page for 60s so most visitors get an instant response instead of
// waiting on a live Cloudflare R2 round-trip on every single request. An admin's new upload
// still appears within a minute — no manual cache-clear needed.
export const revalidate = 60;

export default async function Home() {
  const objects = await listR2Objects("website/homepage/hero-section/");
  const sortedKeys = objects
    .filter((o) => o.Key)
    .map((o) => o.Key!)
    .sort((a, b) => (a < b ? -1 : 1));
  const initialHeroImageUrl = sortedKeys.length > 0 ? publicUrlFor(sortedKeys[0]) : null;

  return <HomeClient initialHeroImageUrl={initialHeroImageUrl} />;
}
