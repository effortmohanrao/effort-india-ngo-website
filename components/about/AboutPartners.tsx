import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Globe2, Landmark, Sparkles } from "lucide-react";
import { partnerCategories } from "@/lib/partners";
import Reveal from "@/components/home/Reveal";

const zoneIcons = [Globe2, Building2, Landmark];

// `logos` maps partner slug → logo URL (R2 website/about/partner-logos/{slug}/), looked up on the server.
export default function AboutPartners({ logos, effortLogo }: { logos: Record<string, string>; effortLogo: string | null }) {
  return (
    <section id="partners" data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0] scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 lux-guilloche" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[50vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.14),transparent_65%)] lux-drift-b" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5a12]">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Trusted Worldwide
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-[1.1] [text-wrap:balance]">
            Organizations That <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Believe In Our Mission</span>
          </h2>
          <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
            A growing trust network of international, corporate, and government partners powering our work.
          </p>
        </Reveal>

        {/* EFFORT at the centre of the network */}
        <Reveal delay={100} className="mt-10 flex justify-center">
          <div className="relative">
            <span aria-hidden className="absolute -inset-5 rounded-full border border-dashed border-amber-500/40 lux-spin" style={{ animationDuration: "30s" }} />
            <span aria-hidden className="absolute -inset-10 rounded-full border border-[#e5d7b0]" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-3 ring-4 ring-amber-400/80 shadow-[0_20px_45px_-15px_rgba(212,160,23,0.7)] flex items-center justify-center overflow-hidden">
              {effortLogo ? (
                <Image src={effortLogo} alt="EFFORT NGO official logo" fill sizes="128px" className="object-contain p-3" />
              ) : (
                <span className="text-2xl font-extrabold text-[#0b5d3f]">EFFORT</span>
              )}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-12">
          {partnerCategories.map((zone, zi) => {
            const ZoneIcon = zoneIcons[zi] ?? Globe2;
            return (
              <div key={zone.title}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b3d2a] to-[#062619] flex items-center justify-center shrink-0">
                    <ZoneIcon className="w-5 h-5 text-amber-300" />
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#14120c]">{zone.title}</h3>
                  <span className="h-px flex-1 bg-[#e5d7b0]" />
                  <span className="shrink-0 rounded-full bg-[#062619] text-amber-200 px-3 py-1 text-xs font-extrabold">{zone.partners.length} Partners</span>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                  {zone.partners.map((p, i) => {
                    const logo = p.slug ? logos[p.slug] : undefined;
                    return (
                      <Reveal as="li" key={p.name} delay={i * 50}>
                        <div title={p.name} className="group h-full rounded-2xl bg-white border border-[#efe2bd] p-4 flex flex-col items-center justify-center gap-3 min-h-36 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_22px_45px_-28px_rgba(90,61,0,0.6)] transition-all duration-300">
                          {logo ? (
                            <span className="relative block w-full h-16">
                              <Image src={logo} alt={p.name} fill sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw" className="object-contain group-hover:scale-105 transition-transform duration-300" />
                            </span>
                          ) : (
                            <span className="text-sm font-extrabold text-[#062619] text-center leading-snug">{p.name}</span>
                          )}
                          <span className="text-xs font-semibold text-[#6b6047] text-center leading-tight">{p.name}</span>
                        </div>
                      </Reveal>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/get-involved"
            className="lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold px-8 py-4 shadow-[0_14px_30px_-10px_rgba(6,38,25,0.7)] hover:-translate-y-0.5 transition-transform"
          >
            Become Our Partner <ArrowRight className="w-4 h-4 text-amber-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
