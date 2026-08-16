import HomeClient from "@/components/HomeClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

export default async function Home() {
  const objects = await listR2Objects("website/homepage/hero-section/");
  const sortedKeys = objects
    .filter((o) => o.Key)
    .map((o) => o.Key!)
    .sort((a, b) => (a < b ? -1 : 1));
  const initialHeroImageUrl = sortedKeys.length > 0 ? publicUrlFor(sortedKeys[0]) : null;

  return <HomeClient initialHeroImageUrl={initialHeroImageUrl} />;
}
