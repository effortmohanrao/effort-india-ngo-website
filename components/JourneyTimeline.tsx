"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Flame,
  Network,
  Rocket,
  Crown,
  Globe2,
  Sprout,
  MapPin,
  Users,
  Landmark,
} from "lucide-react";

type JourneyChapter = {
  id: string;
  era: string;
  pin: string;
  shortTitle: string;
  indexLabel: string;
  title: string;
  subtitle: string;
  desc: string;
  marks: string[];
  accent: string;
  icon: typeof Flame;
  image: string;
  stats: { label: string; value: string }[];
};

const chapters: JourneyChapter[] = [
  {
    id: "1999",
    era: "1999",
    pin: "1999",
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
    accent: "#b45309",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Villages", value: "10" },
      { label: "Farmers", value: "Founding" },
      { label: "Footprint", value: "1 District" },
    ],
  },
  {
    id: "2000-2009",
    era: "2000–2009",
    pin: "2000",
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
    accent: "#c2410c",
    icon: Network,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Villages", value: "50" },
      { label: "Farmers", value: "20,000" },
      { label: "Footprint", value: "2 Districts" },
    ],
  },
  {
    id: "2009-2016",
    era: "2009–2016",
    pin: "2009",
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
    accent: "#0f766e",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Villages", value: "405" },
      { label: "Farmers", value: "1.50 Lakh" },
      { label: "Footprint", value: "6 Districts" },
    ],
  },
  {
    id: "2016-2022",
    era: "2016–2022",
    pin: "2016",
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
    accent: "#047857",
    icon: Crown,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "States", value: "6" },
      { label: "Families", value: "2.00 Lakh" },
      { label: "Footprint", value: "Multi-state" },
    ],
  },
  {
    id: "2022-2025",
    era: "2022–2025",
    pin: "2022",
    shortTitle: "Pan-India",
    indexLabel: "05",
    title: "The Pan-India Era",
    subtitle: "10 states, 1,909 villages & 2.67 lakh farm families",
    desc: "EFFORT established itself as a national PAN-India organization, working across 10 Indian states and reaching 2.67 lakh farm families in 1,909 villages with sustainable agriculture, women-led MACS cooperatives, and watershed development.",
    marks: [
      "National footprint: 10 Indian states & 1,909 villages",
      "2,67,000 farm families actively reached",
      "Sustainable agriculture, FPOs and watershed networks",
    ],
    accent: "#a16207",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200",
    stats: [
      { label: "Villages", value: "1,909" },
      { label: "Families", value: "2.67 Lakh" },
      { label: "Footprint", value: "10 States" },
    ],
  },
];

const STAT_ICONS = [Landmark, Users, MapPin];

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const idleTimer = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const reduceMotion = useRef(false);

  const pauseForInteraction = useCallback((sticky = false) => {
    setPaused(true);
    if (idleTimer.current) window.clearTimeout(idleTimer.current);
    idleTimer.current = null;
    if (!sticky) {
      idleTimer.current = window.setTimeout(() => setPaused(false), 9000);
    }
  }, []);

  const goTo = useCallback((index: number) => {
    const next = (index + chapters.length) % chapters.length;
    const card = cardRefs.current[next];
    const track = trackRef.current;
    if (!card || !track) return;
    pauseForInteraction();
    const target = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
    track.scrollTo({ left: target, behavior: reduceMotion.current ? "auto" : "smooth" });
    setActive(next);
  }, [pauseForInteraction]);

  useEffect(() => {
    reduceMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setHeaderVisible(true), 80);
    return () => {
      clearTimeout(t);
      if (idleTimer.current) window.clearTimeout(idleTimer.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setScrollPct(max > 0 ? track.scrollLeft / max : 0);

      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let best = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < best) {
          best = dist;
          nearest = i;
        }
      });
      setActive((prev) => (prev === nearest ? prev : nearest));
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    return () => track.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const max = track.scrollWidth - track.clientWidth;
      const goingRight = e.deltaY > 0;
      const atEnd = track.scrollLeft >= max - 2;
      const atStart = track.scrollLeft <= 2;
      if ((goingRight && atEnd) || (!goingRight && atStart)) return;
      e.preventDefault();
      track.scrollLeft += e.deltaY * 1.2;
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    if (!inView || paused || reduceMotion.current) return;
    const id = window.setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % chapters.length;
        const card = cardRefs.current[next];
        const track = trackRef.current;
        if (card && track) {
          const target = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2;
          track.scrollTo({ left: target, behavior: "smooth" });
        }
        return next;
      });
    }, 6500);
    return () => window.clearInterval(id);
  }, [inView, paused]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || e.pointerType === "touch") return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    pauseForInteraction();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !drag.current.active) return;
    drag.current.active = false;
    try {
      track.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const activeChapter = chapters[active];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden py-16 lg:py-24 text-[#1c1910]"
      style={{
        background:
          "radial-gradient(ellipse at 12% 0%, rgba(15,107,76,0.08), transparent 42%), radial-gradient(ellipse at 88% 100%, rgba(180,83,9,0.07), transparent 46%), linear-gradient(180deg, #f7f3ea 0%, #efe6d4 100%)",
      }}
      onMouseEnter={() => pauseForInteraction(true)}
      onMouseLeave={() => {
        if (idleTimer.current) window.clearTimeout(idleTimer.current);
        idleTimer.current = null;
        setPaused(false);
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(28,25,16,0.035) 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(28,25,16,0.035) 48px)",
        }}
      />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-700/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-emerald-800 flex items-center gap-3">
            <span className="inline-block w-10 h-[2px] bg-emerald-700" />
            Our Journey Since 1999
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight leading-[1.12] mt-3 max-w-3xl">
            Twenty-seven years,
            <br className="hidden sm:block" /> written across the field
          </h2>
          <p className="text-[#5c5346] text-sm sm:text-base leading-relaxed mt-3 max-w-2xl">
            Five chapters of growth — from 10 villages in Prakasam District to 1,909 villages across 10 Indian states. Scroll the path. Each station is a decade of work.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeChapter.stats.map((stat, i) => {
              const Icon = STAT_ICONS[i] ?? Landmark;
              return (
                <div
                  key={`${activeChapter.id}-${stat.label}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-[#1c1910]/10 pl-2 pr-3 py-1.5 shadow-[0_8px_20px_-14px_rgba(28,25,16,0.4)]"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${activeChapter.accent}18`, color: activeChapter.accent }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-black leading-none" style={{ color: activeChapter.accent }}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#7a7164]">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Equal-column icon stations — line always meets icon centers */}
        <nav className="mt-8 sm:mt-10 rounded-[28px] bg-white/70 border border-[#1c1910]/10 px-2 sm:px-4 py-4 sm:py-5 shadow-[0_18px_40px_-28px_rgba(28,25,16,0.35)]" aria-label="Journey chapters">
          <ol className="grid grid-cols-5 list-none m-0 p-0">
            {chapters.map((chapter, idx) => {
              const Icon = chapter.icon;
              const isActive = idx === active;
              const reached = idx <= active;
              const passed = idx < active;
              return (
                <li key={chapter.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => goTo(idx)}
                    className="group w-full flex flex-col items-center cursor-pointer"
                    aria-label={`Go to ${chapter.era}: ${chapter.title}`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span className="relative w-full h-11 sm:h-14 flex items-center justify-center">
                      {idx > 0 && (
                        <span
                          className="absolute left-0 right-1/2 top-1/2 -translate-y-1/2 h-[3px] rounded-full"
                          style={{ backgroundColor: reached ? chapter.accent : "#d6d0c4" }}
                        />
                      )}
                      {idx < chapters.length - 1 && (
                        <span
                          className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-[3px] rounded-full"
                          style={{ backgroundColor: passed ? chapters[idx + 1].accent : "#d6d0c4" }}
                        />
                      )}
                      <span
                        className={`relative z-10 flex items-center justify-center rounded-full border-2 border-white shadow-[0_8px_18px_-8px_rgba(28,25,16,0.45)] transition-all duration-300 ${
                          isActive
                            ? "w-11 h-11 sm:w-14 sm:h-14 animate-effort-journey-node"
                            : "w-9 h-9 sm:w-12 sm:h-12 group-hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: reached ? chapter.accent : "#f4efe3",
                          color: reached ? "#fff" : "#8a8072",
                          boxShadow: isActive ? `0 10px 22px -8px ${chapter.accent}` : undefined,
                        }}
                      >
                        <Icon className={isActive ? "w-5 h-5 sm:w-6 sm:h-6" : "w-4 h-4 sm:w-5 sm:h-5"} />
                      </span>
                    </span>

                    <span
                      className={`mt-2 text-[10px] sm:text-xs font-black tabular-nums tracking-tight ${
                        isActive ? "text-[#1c1910]" : "text-[#8a8072]"
                      }`}
                    >
                      <span className="sm:hidden">{chapter.pin}</span>
                      <span className="hidden sm:inline">{chapter.era}</span>
                    </span>
                    <span
                      className={`mt-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.16em] truncate max-w-full px-0.5 ${
                        isActive ? "text-emerald-800" : "text-[#a39888]"
                      }`}
                    >
                      {chapter.shortTitle}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* Horizontal path */}
      <div
        ref={trackRef}
        className="effort-journey-track relative z-10 flex gap-6 sm:gap-8 overflow-x-auto overflow-y-hidden snap-x snap-mandatory touch-pan-x pb-8 pt-3 cursor-grab active:cursor-grabbing"
        style={{
          paddingLeft: "max(1.5rem, calc(50vw - min(90vw, 50rem) / 2))",
          paddingRight: "max(1.5rem, calc(50vw - min(90vw, 50rem) / 2))",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onTouchStart={() => pauseForInteraction()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goTo(active + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            goTo(active - 1);
          }
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="EFFORT journey from 1999 to 2025"
      >
        {chapters.map((chapter, idx) => {
          const Icon = chapter.icon;
          const isActive = idx === active;
          return (
            <article
              key={chapter.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              data-index={idx}
              onClick={() => {
                if (drag.current.moved) return;
                goTo(idx);
              }}
              className={`snap-center shrink-0 w-[min(90vw,50rem)] rounded-[32px] overflow-hidden bg-[#fbf8f1] border transition-all duration-700 ease-out select-none ${
                isActive
                  ? "scale-100 opacity-100 border-[#1c1910]/20 shadow-[0_32px_70px_-25px_rgba(28,25,16,0.45)] z-20"
                  : "scale-[0.93] opacity-60 hover:opacity-85 border-[#1c1910]/10 z-10 cursor-pointer"
              }`}
              style={{
                transform: isActive ? "scale(1) translateY(0)" : "scale(0.93) translateY(4px)",
                boxShadow: isActive ? `0 32px 70px -25px ${chapter.accent}66` : undefined,
              }}
            >
              <div className="grid sm:grid-cols-[0.92fr_1.08fr] min-h-[22rem]">
                <div className="relative h-48 sm:h-auto min-h-[13.5rem] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={chapter.image}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                  <div
                    className="absolute top-0 left-0 w-1.5 h-full"
                    style={{ backgroundColor: chapter.accent }}
                  />
                  <span
                    className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black tracking-[0.18em] uppercase text-white backdrop-blur-md border border-white/25"
                    style={{ backgroundColor: `${chapter.accent}cc` }}
                  >
                    <Icon className="w-3 h-3" />
                    {chapter.indexLabel}
                  </span>
                  <p className="absolute bottom-4 left-4 right-4 text-white font-black text-4xl sm:text-5xl tracking-tight leading-none drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]">
                    {chapter.era}
                  </p>
                </div>

                <div className="p-5 sm:p-6 flex flex-col">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em]" style={{ color: chapter.accent }}>
                    Chapter {chapter.indexLabel}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight mt-1.5 leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#6b6254] mt-1">{chapter.subtitle}</p>
                  <p className="text-[13px] leading-relaxed text-[#4a4338] mt-3">{chapter.desc}</p>
                  <ul className="mt-4 space-y-2">
                    {chapter.marks.map((mark) => (
                      <li key={mark} className="flex items-start gap-2 text-[12px] leading-snug text-[#3f3a31]">
                        <Sprout className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: chapter.accent }} />
                        <span>{mark}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 grid grid-cols-3 gap-2">
                    {chapter.stats.map((stat) => (
                      <div key={stat.label} className="rounded-xl bg-[#1c1910]/[0.04] px-2 py-2 text-center">
                        <p className="text-sm font-black" style={{ color: chapter.accent }}>
                          {stat.value}
                        </p>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-[#7a7164]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="w-10 h-10 rounded-full bg-white border border-[#1c1910]/12 text-[#1c1910] flex items-center justify-center hover:border-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer shadow-sm"
            aria-label="Previous chapter"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="w-10 h-10 rounded-full bg-white border border-[#1c1910]/12 text-[#1c1910] flex items-center justify-center hover:border-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer shadow-sm"
            aria-label="Next chapter"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex-1 h-1.5 rounded-full bg-[#1c1910]/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-[#0f6b4c] transition-[width] duration-200"
              style={{ width: `${Math.max(scrollPct * 100, 6)}%` }}
            />
          </div>

          <p className="text-[11px] font-black tabular-nums tracking-widest text-[#6b6254] shrink-0">
            {chapters[active].indexLabel} / 05
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10 pt-6 border-t border-[#1c1910]/10">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-700/70" />
          <div className="text-center">
            <p className="text-[10px] font-black tracking-[0.28em] text-emerald-800 uppercase">The path continues</p>
            <p className="text-[11px] font-bold text-[#8a8072] mt-0.5">EFFORT 2.0 · 2026 → 2030</p>
          </div>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-700/70" />
        </div>
      </div>
    </section>
  );
}
