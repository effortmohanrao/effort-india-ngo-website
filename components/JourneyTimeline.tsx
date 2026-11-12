"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2, Crown, Flame, Globe2, Landmark, MapPin, Network, Rocket, Users } from "lucide-react";

type JourneyChapter = {
  id: string; // R2 folder: website/about/journey/{id}/
  era: string;
  shortTitle: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  desc: string;
  marks: string[];
  icon: typeof Flame;
  stats: { label: string; value: string }[];
};

const chapters: JourneyChapter[] = [
  {
    id: "1999",
    era: "1999",
    shortTitle: "Origin",
    indexLabel: "01",
    title: "The Beginning",
    subtitle: "Where rooted belief began in 10 villages",
    desc: "EFFORT was founded in 1999 around the core conviction that agricultural development is central to poverty eradication, food security, demand generation, and overall development. The journey began in 10 pioneer villages in Prakasam District, Andhra Pradesh.",
    marks: [
      "Founded on agricultural empowerment as the path to food security",
      "Pioneer field roots in 10 villages, Prakasam District",
      "Community participation, livelihoods, and demand generation",
    ],
    icon: Flame,
    stats: [
      { label: "Villages", value: "10" },
      { label: "Farmers", value: "Founding" },
      { label: "Footprint", value: "1 District" },
    ],
  },
  {
    id: "2000-2009",
    era: "2000–2009",
    shortTitle: "Foundation",
    indexLabel: "02",
    title: "Building the Foundation",
    subtitle: "10 → 50 villages & 20,000 farmers",
    desc: "EFFORT expanded its grassroots work from 10 to 50 villages across Prakasam and Guntur districts, reaching 20,000 farmers. Facilitated sustainable agriculture, women and child development projects with structural support from government agencies.",
    marks: [
      "Geographic expansion: 10 → 50 villages (Prakasam & Guntur)",
      "20,000 farmers integrated into sustainable agriculture",
      "Government-backed women and child development projects",
    ],
    icon: Network,
    stats: [
      { label: "Villages", value: "50" },
      { label: "Farmers", value: "20,000" },
      { label: "Footprint", value: "2 Districts" },
    ],
  },
  {
    id: "2009-2016",
    era: "2009–2016",
    shortTitle: "Expansion",
    indexLabel: "03",
    title: "The Expansion Engine",
    subtitle: "405 villages across 6 districts & 16 grassroots NGOs",
    desc: "EFFORT recorded massive growth, expanding from 50 to 405 villages across 6 districts of Andhra Pradesh. Reached 1,50,000 small and marginal farmers and landless agricultural labourers, with a focus on natural resource management, while providing technical support to 16 partner grassroots NGOs.",
    marks: [
      "50 → 405 villages across 6 districts of Andhra Pradesh",
      "1,50,000 small/marginal farmers and landless labourers",
      "Technical support to 16 partner NGOs in NRM",
    ],
    icon: Rocket,
    stats: [
      { label: "Villages", value: "405" },
      { label: "Farmers", value: "1.50 Lakh" },
      { label: "Footprint", value: "6 Districts" },
    ],
  },
  {
    id: "2016-2022",
    era: "2016–2022",
    shortTitle: "Transform",
    indexLabel: "04",
    title: "Multi-State Transformation",
    subtitle: "From 1 state to 6 Indian states & 2 lakh farm families",
    desc: "A remarkable milestone phase: EFFORT transformed from a single-state organization into a 6-state multi-regional entity, empowering 2 lakh farm families. Built strategic alliances with international funding agencies, corporate CSR partners, government departments, and CBBOs.",
    marks: [
      "Expanded from 1 state → 6 Indian states",
      "2,00,000 farm families empowered across regions",
      "Alliances with international agencies, CSR, government & CBBOs",
    ],
    icon: Crown,
    stats: [
      { label: "States", value: "6" },
      { label: "Families", value: "2.00 Lakh" },
      { label: "Footprint", value: "Multi-state" },
    ],
  },
  {
    id: "2022-2025",
    era: "2022–2025",
    shortTitle: "Pan-India",
    indexLabel: "05",
    title: "National Expansion & PAN-India Footprint",
    subtitle: "9 states, 1,859 villages & 2.50 lakh farm families",
    desc: "EFFORT became a PAN-India organization working across 9 Indian states (both Southern and Northern), covering 2.50 Lakh farm families in 1,859 villages with sustainable agriculture, community collectives, and natural resource management.",
    marks: [
      "PAN-India footprint: 9 Indian states (Southern & Northern)",
      "2,50,000 farm families actively covered",
      "Field impact in 1,859 villages with grassroots resilience",
    ],
    icon: Globe2,
    stats: [
      { label: "Villages", value: "1,859" },
      { label: "Families", value: "2.50 Lakh" },
      { label: "Footprint", value: "9 States" },
    ],
  },
];

const STAT_ICONS = [Landmark, Users, MapPin];

function Stats({ c, compact }: { c: JourneyChapter; compact?: boolean }) {
  return (
    <dl className="grid grid-cols-3 gap-2 sm:gap-3">
      {c.stats.map((s, i) => {
        const Icon = STAT_ICONS[i] ?? Landmark;
        return (
          <div key={s.label} className={`rounded-xl border border-white/10 bg-white/[0.05] text-center ${compact ? "px-1.5 py-2.5" : "px-2 py-3 sm:p-4"}`}>
            <Icon className="mx-auto w-4 h-4 text-amber-300/80" />
            <dd className="mt-1 text-sm min-[360px]:text-base sm:text-lg font-extrabold text-white leading-tight break-words">{s.value}</dd>
            <dt className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-100/55">{s.label}</dt>
          </div>
        );
      })}
    </dl>
  );
}

function Marks({ c }: { c: JourneyChapter }) {
  return (
    <ul className="space-y-2.5">
      {c.marks.map((m) => (
        <li key={m} className="flex items-start gap-2.5 text-sm text-emerald-50/80 leading-relaxed">
          <CheckCircle2 className="w-5 h-5 text-amber-300 shrink-0" /> {m}
        </li>
      ))}
    </ul>
  );
}

// `images` maps chapter id → photo URL; looked up on the server by app/about/page.tsx.
export default function JourneyTimeline({ images }: { images: Record<string, string> }) {
  const [active, setActive] = useState(0); // desktop: chapter nearest the middle of the screen
  const [mActive, setMActive] = useState(0); // phone: card in view inside the slider
  const blockRefs = useRef<(HTMLElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const chipRowRef = useRef<HTMLDivElement>(null);

  // Desktop scroll story: whichever chapter crosses the middle band of the screen becomes active.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    blockRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Phone slider: native scroll-snap; we only *read* which card is in view.
  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setMActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root, threshold: 0.6 }
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Keep the active year chip visible in the chip row (scrolls only that row, never the page).
  useEffect(() => {
    const row = chipRowRef.current;
    const chip = row?.children[mActive] as HTMLElement | undefined;
    if (!row || !chip || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: chip.offsetLeft - row.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [mActive]);

  const goToCard = (i: number) => {
    const slider = sliderRef.current;
    const card = cardRefs.current[i];
    if (slider && card) slider.scrollTo({ left: card.offsetLeft - slider.offsetLeft - 16, behavior: "smooth" });
  };

  const c = chapters[active];

  return (
    <section id="journey" data-keep-motion className="relative isolate overflow-clip bg-[#03140d] text-white scroll-mt-24">
      {/* Night-field atmosphere: contour lines + gold horizon glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08] bg-[repeating-radial-gradient(circle_at_20%_110%,#f7d774_0_1px,transparent_1px_34px)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-48 left-1/2 -translate-x-1/2 w-[140vw] max-w-[1600px] aspect-[3/1] -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,23,0.22),transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[50vw] aspect-square -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(16,185,129,0.14),transparent_65%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-amber-200">
            Our Journey Since 1999
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
            Twenty-seven years, <span className="lux-gold-text">written across the field</span>
          </h2>
          <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg max-w-2xl">
            Five chapters of growth — from 10 villages in Prakasam District to 1,909 villages across 10 Indian states. Scroll the path. Each station is a decade of work.
          </p>
        </div>

        {/* ================= DESKTOP: sticky photo + scrolling story ================= */}
        <div className="hidden lg:grid grid-cols-12 gap-14 mt-16">
          {/* Sticky photo panel */}
          <div className="col-span-5">
            <div className="sticky top-28">
              <div className="relative rounded-[30px] p-[1.5px] bg-gradient-to-br from-[#fff3c4] via-[#a1781e] to-[#f7d774] shadow-[0_40px_90px_-35px_rgba(0,0,0,0.9)]">
                <div className="relative h-[min(64vh,560px)] rounded-[29px] overflow-hidden bg-[#062619]">
                  {chapters.map((ch, i) =>
                    images[ch.id] ? (
                      <div key={ch.id} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}>
                        <Image
                          src={images[ch.id]}
                          alt={`${ch.era} — ${ch.title}`}
                          fill
                          sizes="40vw"
                          className={`object-cover transition-transform ease-out ${i === active ? "scale-110 duration-[7000ms]" : "scale-100 duration-0"}`}
                        />
                      </div>
                    ) : null
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03140d] via-[#03140d]/30 to-transparent" />
                  <div key={c.id} className="absolute left-7 right-7 bottom-7">
                    <p className="lux-rise text-xs font-bold uppercase tracking-[0.3em] text-amber-200">
                      Chapter {c.indexLabel} · {c.shortTitle}
                    </p>
                    <p className="lux-rise mt-1 text-7xl font-extrabold tracking-tight leading-none pb-1" style={{ animationDelay: "80ms" }}>
                      <span className="lux-gold-text">{c.era}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Growth meter */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-100/50">
                  <span>1999</span>
                  <span className="text-amber-300 tabular-nums">{c.indexLabel} / 05</span>
                  <span>2025</span>
                </div>
                <div className="mt-2 grid grid-cols-5 gap-1.5">
                  {chapters.map((ch, i) => (
                    <span key={ch.id} className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-[#10b981] to-[#f7d774] transition-transform duration-700 origin-left"
                        style={{ transform: `scaleX(${i <= active ? 1 : 0})` }}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling chapters on a gold path */}
          <ol className="col-span-7 relative">
            <span aria-hidden className="absolute left-[27px] top-2 bottom-2 w-[2px] bg-white/10" />
            <span
              aria-hidden
              className="absolute left-[27px] top-2 w-[2px] bg-gradient-to-b from-[#10b981] via-[#d4a017] to-[#f7d774] shadow-[0_0_14px_rgba(247,215,116,0.7)] transition-[height] duration-700"
              style={{ height: `calc(${(active / (chapters.length - 1)) * 100}% - 16px)` }}
            />
            {chapters.map((ch, i) => {
              const Icon = ch.icon;
              const on = i === active;
              const reached = i <= active;
              return (
                <li
                  key={ch.id}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  data-index={i}
                  className={`relative pl-20 min-h-[68vh] flex flex-col justify-center transition-opacity duration-500 ${on ? "opacity-100" : "opacity-35"}`}
                >
                  <span
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                      on
                        ? "bg-gradient-to-br from-[#fff3c4] via-[#f7d774] to-[#b8860b] shadow-[0_0_0_6px_rgba(247,215,116,0.15),0_14px_30px_-8px_rgba(212,160,23,0.9)] scale-110"
                        : reached
                          ? "bg-[#0b3d2a] border border-amber-300/50"
                          : "bg-[#062619] border border-white/15"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${on ? "text-[#062619]" : "text-amber-300/80"}`} />
                  </span>
                  <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-amber-300">
                    {ch.era} <span className="text-emerald-100/40">· Chapter {ch.indexLabel}</span>
                  </p>
                  <h3 className="mt-2 text-3xl xl:text-4xl font-extrabold leading-tight">{ch.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-amber-200/90">{ch.subtitle}</p>
                  <p className="mt-4 text-base text-emerald-50/75 leading-relaxed">{ch.desc}</p>
                  <div className="mt-5">
                    <Marks c={ch} />
                  </div>
                  <div className="mt-6 max-w-lg">
                    <Stats c={ch} />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ================= PHONE & TABLET: native swipe cards ================= */}
        <div className="lg:hidden mt-10">
          <div ref={chipRowRef} className="-mx-4 px-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {chapters.map((ch, i) => (
              <button
                key={ch.id}
                type="button"
                onClick={() => goToCard(i)}
                aria-label={`${ch.era}: ${ch.title}`}
                aria-current={i === mActive ? "step" : undefined}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold border transition-colors cursor-pointer ${
                  i === mActive
                    ? "bg-gradient-to-r from-[#f7d774] to-[#d4a017] text-[#062619] border-transparent"
                    : "border-white/20 text-emerald-50/80 bg-white/5"
                }`}
              >
                {ch.era}
              </button>
            ))}
          </div>

          <div
            ref={sliderRef}
            className="mt-5 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {chapters.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <article
                  key={ch.id}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="snap-start shrink-0 w-[88%] sm:w-[70%] rounded-[24px] p-[1.5px] bg-gradient-to-br from-[#f7d774]/80 via-white/10 to-[#b8860b]/70"
                >
                  <div className="h-full rounded-[23px] bg-[#062619] overflow-hidden flex flex-col">
                    <div className="relative aspect-[16/10] bg-[#0b3d2a]">
                      {images[ch.id] && <Image src={images[ch.id]} alt={`${ch.era} — ${ch.title}`} fill sizes="(min-width: 640px) 70vw, 88vw" className="object-cover" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#062619] via-[#062619]/20 to-transparent" />
                      <span className="absolute top-3 left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#f7d774] to-[#b8860b] flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-[#062619]" />
                      </span>
                      <div className="absolute left-4 bottom-3">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-200">Chapter {ch.indexLabel} · {ch.shortTitle}</p>
                        <p className="text-4xl font-extrabold leading-none lux-gold-text pb-1">{ch.era}</p>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-4 flex-1">
                      <div>
                        <h3 className="text-xl font-extrabold leading-tight">{ch.title}</h3>
                        <p className="mt-1 text-sm font-semibold text-amber-200/90">{ch.subtitle}</p>
                      </div>
                      <p className="text-sm text-emerald-50/75 leading-relaxed">{ch.desc}</p>
                      <Marks c={ch} />
                      <div className="mt-auto">
                        <Stats c={ch} compact />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-extrabold tabular-nums text-amber-300">
              {chapters[mActive].indexLabel} <span className="text-emerald-100/40">/ 05</span>
            </span>
            <div className="flex-1 grid grid-cols-5 gap-1.5">
              {chapters.map((ch, i) => (
                <span key={ch.id} className={`h-1.5 rounded-full transition-colors duration-300 ${i <= mActive ? "bg-gradient-to-r from-[#10b981] to-[#f7d774]" : "bg-white/10"}`} />
              ))}
            </div>
            <span className="text-xs text-emerald-100/50">Swipe →</span>
          </div>
        </div>

        {/* The path continues */}
        <a
          href="#roadmap"
          className="group mt-12 lg:mt-6 flex items-center justify-between gap-4 rounded-2xl border border-amber-300/30 bg-white/[0.04] px-5 py-4 hover:border-amber-300/70 hover:bg-white/[0.07] transition-colors"
        >
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-300">The path continues</p>
            <p className="mt-0.5 text-sm font-bold text-emerald-50/70">EFFORT 2.0 · 2026 → 2030</p>
          </div>
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f7d774] to-[#d4a017] flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
            <ArrowDown className="w-4 h-4 text-[#062619]" />
          </span>
        </a>
      </div>
    </section>
  );
}
