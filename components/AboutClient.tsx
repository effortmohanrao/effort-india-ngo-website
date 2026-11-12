import AboutHero from "@/components/about/AboutHero";
import JourneyTimeline from "@/components/JourneyTimeline";
import Effort20Roadmap from "@/components/Effort20Roadmap";
import VisionMission from "@/components/about/VisionMission";
import CoreValues from "@/components/about/CoreValues";
import Leadership from "@/components/about/Leadership";
import WorkingPhilosophy from "@/components/about/WorkingPhilosophy";
import AboutPartners from "@/components/about/AboutPartners";
import AboutGallery from "@/components/about/AboutGallery";
import AboutFinale from "@/components/about/AboutFinale";

// About page: each section is its own component. All photos are looked up on the server
// (app/about/page.tsx) and passed down, so they start loading with the page.
export default function AboutClient({
  heroImages,
  journeyImages,
  visionMissionImages,
  directorPhoto,
  awardImages,
  partnerLogos,
  effortLogo,
  galleryPhotos,
}: {
  heroImages: { key: string; url: string }[];
  journeyImages: Record<string, string>;
  visionMissionImages: Record<string, string>;
  directorPhoto: string | null;
  awardImages: Record<number, string>;
  partnerLogos: Record<string, string>;
  effortLogo: string | null;
  galleryPhotos: { key: string; url: string }[];
}) {
  return (
    <div className="bg-[#fbf8f0] text-slate-800 min-h-screen pt-12 relative overflow-x-clip">
      <AboutHero images={heroImages} />
      <JourneyTimeline images={journeyImages} />
      <Effort20Roadmap />
      <VisionMission images={visionMissionImages} />
      <CoreValues />
      <Leadership directorPhoto={directorPhoto} awardImages={awardImages} />
      <WorkingPhilosophy />
      <AboutPartners logos={partnerLogos} effortLogo={effortLogo} />
      <AboutGallery photos={galleryPhotos} />
      <AboutFinale />
    </div>
  );
}
