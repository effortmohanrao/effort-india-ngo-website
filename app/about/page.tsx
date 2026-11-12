import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";
import { programAlbums } from "@/lib/programAlbums";

// Same caching approach as the Home page — avoids a live R2 round-trip on every visitor.
export const revalidate = 60;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EFFORT was founded in 1999 on the premise that development in India can take place only in proportion to the development of agriculture. Meet our leadership team and 27-year journey.",
  alternates: { canonical: "https://www.effortindia.org/about" },
};

async function listKeys(prefix: string): Promise<string[]> {
  try {
    const objects = await listR2Objects(prefix);
    return objects
      .filter((o) => o.Key)
      .map((o) => o.Key!)
      .sort((a, b) => (a < b ? -1 : 1));
  } catch {
    return [];
  }
}

// website/{base}/{folder}/{file} → { folder: url of its first file }
function firstPerFolder(keys: string[], base: string): Record<string, string> {
  const depth = base.split("/").length; // index of the folder segment
  const out: Record<string, string> = {};
  for (const key of keys) {
    const folder = key.split("/")[depth];
    if (folder && !out[folder]) out[folder] = publicUrlFor(key);
  }
  return out;
}

export default async function AboutPage() {
  // Looked up on the server so the photos start loading with the page instead of after it.
  const [heroKeys, journeyKeys, visionKeys, missionKeys, directorKeys, awardKeys, partnerKeys, logoKeys, albumKeys] = await Promise.all([
    listKeys("website/about/hero/"),
    listKeys("website/about/journey/"),
    listKeys("website/about/vision/"),
    listKeys("website/about/mission/"),
    listKeys("website/about/team/jv-mohan-rao/"),
    listKeys("website/about/awards/"),
    listKeys("website/about/partner-logos/"),
    listKeys("website/logo/"),
    // first two real photos of every program album, reused from the Gallery page
    Promise.all(programAlbums.map((a) => listKeys(`website/programs/${a.status}/${a.folder}/`).then((k) => k.slice(0, 2)))),
  ]);

  const partnerLogos = firstPerFolder(partnerKeys, "website/about/partner-logos");
  const effortLogo = logoKeys[0] ? publicUrlFor(logoKeys[0]) : null;
  const galleryPhotos = albumKeys.flat().map((key) => ({ key, url: publicUrlFor(key) }));

  const heroImages = heroKeys.map((key) => ({ key, url: publicUrlFor(key) }));
  const journeyImages = firstPerFolder(journeyKeys, "website/about/journey");

  const visionMissionImages: Record<string, string> = {};
  if (visionKeys[0]) visionMissionImages.vision = publicUrlFor(visionKeys[0]);
  if (missionKeys[0]) visionMissionImages.mission = publicUrlFor(missionKeys[0]);

  const directorPhoto = directorKeys[0] ? publicUrlFor(directorKeys[0]) : null;

  // awards live in website/about/awards/{1..4}/
  const awardImages: Record<number, string> = {};
  for (const [id, url] of Object.entries(firstPerFolder(awardKeys, "website/about/awards"))) awardImages[Number(id)] = url;

  return (
    <AboutClient
      heroImages={heroImages}
      journeyImages={journeyImages}
      visionMissionImages={visionMissionImages}
      directorPhoto={directorPhoto}
      awardImages={awardImages}
      partnerLogos={partnerLogos}
      effortLogo={effortLogo}
      galleryPhotos={galleryPhotos}
    />
  );
}
