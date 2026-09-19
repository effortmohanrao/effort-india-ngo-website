"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  TrendingUp,
  Sparkles,
  Users,
  Sprout,
  BookOpen,
  Handshake,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Target,
  Globe2,
  Award
} from "lucide-react";

type Phase = {
  id: string;
  phaseLabel: string;
  years: string;
  title: string;
  focus: string;
  highlights: string[];
  outcome: string;
  accentColor: string;
  glowColor: string;
  icon: typeof Compass;
  badgeBg: string;
  badgeText: string;
};

const phasesData: Phase[] = [
  {
    id: "phase-1",
    phaseLabel: "PHASE I",
    years: "2026–2027",
    title: "Foundation, Consolidation & Transition",
    focus: "Strengthening foundations and consolidating learning before the next phase of growth.",
    highlights: [
      "Consolidate and deepen existing programs across natural resource management, livelihoods and WASH",
      "Pilot new thematic areas: youth livelihoods, climate-resilient practices and market linkages",
      "Strengthen people's organisations, FPOs and youth collectives",
      "Initiate digitisation of MIS, HR and financial systems",
    ],
    outcome: "Strategic Outcome: A more cohesive, learning-oriented, institutionally prepared organisation.",
    accentColor: "#059669", // Emerald Green
    glowColor: "rgba(5, 150, 105, 0.2)",
    badgeBg: "bg-emerald-50 border-emerald-300",
    badgeText: "text-emerald-900",
    icon: Compass,
  },
  {
    id: "phase-2",
    phaseLabel: "PHASE II",
    years: "2028–2029",
    title: "Expansion, Integration & Deepening Impact",
    focus: "Scaling impact, deepening partnerships, and integrating programs and systems.",
    highlights: [
      "Expand proven program models to new districts and states through strategic partnerships",
      "Scale youth skill development and livelihood initiatives across target regions",
      "Establish knowledge and learning hubs, disseminating practice-based evidence",
      "Fully operationalise integrated digital MIS, MEL and learning systems",
    ],
    outcome: "Strategic Outcome: Greater scale and influence, backed by strong systems, partnerships and visibility.",
    accentColor: "#d97706", // Warm Gold / Amber
    glowColor: "rgba(217, 119, 6, 0.2)",
    badgeBg: "bg-amber-50 border-amber-300",
    badgeText: "text-amber-950",
    icon: TrendingUp,
  },
  {
    id: "phase-3",
    phaseLabel: "PHASE III",
    years: "2030",
    title: "Sustainability, Influence & Maturity",
    focus: "Consolidating gains and positioning EFFORT as a mature institution with enduring impact.",
    highlights: [
      "Consolidate and sustain community-led development models across all operational states",
      "Position youth as long-term leaders, mentors and institutional anchors in local bodies",
      "Ensure executive leadership transition and long-term financial sustainability",
      "Enable replication and scale through strategic partners, not direct implementation",
    ],
    outcome: "Strategic Outcome: A resilient, respected and sustainable institution with enduring grassroots impact.",
    accentColor: "#4f46e5", // Royal Indigo Blue (100% distinct from Emerald Green!)
    glowColor: "rgba(79, 70, 229, 0.25)",
    badgeBg: "bg-indigo-100 border-indigo-300",
    badgeText: "text-indigo-950",
    icon: Sparkles,
  },
];

const pillarsData = [
  {
    num: "01",
    title: "Community-Led Resilience",
    desc: "Strengthening people's organisations and local institutions as drivers of change.",
    icon: Users,
    accent: "#059669",
    tag: "GOVERNANCE & EQUITY",
  },
  {
    num: "02",
    title: "Livelihoods & Youth Futures",
    desc: "Youth skills, employability and Farmer Producer Organisations at the centre of resilience.",
    icon: Sprout,
    accent: "#d97706",
    tag: "AGRI-TECH & SKILLS",
  },
  {
    num: "03",
    title: "Knowledge & Learning",
    desc: "Practice-based evidence and peer learning informing wider development dialogue.",
    icon: BookOpen,
    accent: "#0d9488",
    tag: "POLICY & RESEARCH",
  },
  {
    num: "04",
    title: "Partnerships",
    desc: "Value-aligned partnerships with government, CSR, academia and private sector.",
    icon: Handshake,
    accent: "#4f46e5",
    tag: "CSR & PUBLIC SECTOR",
  },
  {
    num: "05",
    title: "Capacity & Governance",
    desc: "Second-line leadership, succession planning and strengthened Board effectiveness.",
    icon: ShieldCheck,
    accent: "#7c3aed",
    tag: "INSTITUTIONAL INTEGRITY",
  },
  {
    num: "06",
    title: "Systems & Digitalisation",
    desc: "MIS, MEL and financial sustainability as enablers of scale and transparency.",
    icon: Zap,
    accent: "#0284c7",
    tag: "REAL-TIME MONITORING",
  },
];

const impactStatsData = [
  { value: "4L–5L", label: "Farmers Supported", detail: "Climate-resilient agriculture & watershed security", accent: "border-emerald-300 text-emerald-950 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60", topBorder: "from-emerald-500 via-teal-300 to-emerald-500", glow: "shadow-[0_4px_15px_-5px_rgba(5,150,105,0.2)]" },
  { value: "25K–40K", label: "Youth Engaged", detail: "Skills, green jobs & rural entrepreneurship", accent: "border-amber-300 text-amber-950 bg-gradient-to-br from-amber-50 via-white to-amber-50/60", topBorder: "from-amber-500 via-yellow-300 to-amber-500", glow: "shadow-[0_4px_15px_-5px_rgba(217,119,6,0.2)]" },
  { value: "75–120", label: "FPOs & Collectives", detail: "Community ownership & market linkages", accent: "border-teal-300 text-teal-950 bg-gradient-to-br from-teal-50 via-white to-teal-50/60", topBorder: "from-teal-500 via-emerald-300 to-teal-500", glow: "shadow-[0_4px_15px_-5px_rgba(13,148,136,0.2)]" },
  { value: "8–12", label: "States", detail: "Pan-India ecosystem collaboration across 9 operational hubs", accent: "border-indigo-300 text-indigo-950 bg-gradient-to-br from-indigo-50 via-white to-indigo-50/60", topBorder: "from-indigo-500 via-violet-300 to-indigo-500", glow: "shadow-[0_4px_15px_-5px_rgba(79,70,229,0.2)]" },
];

export default function Effort20Roadmap() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelectPhase = (idx: number) => {
    setActiveNodeIndex(idx);
    isInteractingRef.current = true;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false;
    }, 8000);

    if (cardsContainerRef.current) {
      const container = cardsContainerRef.current;
      const cardEl = container.children[idx] as HTMLElement | undefined;
      if (cardEl) {
        const targetLeft = cardEl.offsetLeft - container.offsetLeft - 16;
        container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0] pt-2 pb-14 sm:pt-6 sm:pb-20 lg:py-28 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans"
    >
      {/* --- GEOMETRIC MANDALA & SACRED LINE ART BACKGROUND --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(#b48332_0.75px,transparent_0.75px)] [background-size:32px_32px]" />
        
        {/* Sacred Geometry Mandala Circles Overlay */}

        {/* Ambient Gradient Glows */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">

        {/* ========================================================================= */}
        {/* HERO FEATURE: CINEMATIC BLOCKBUSTER TRAILER CONTAINER WITH SPARKS */}
        {/* ========================================================================= */}
        <div
          className="rounded-[36px] border-2 border-[#f59e0b]/70 bg-gradient-to-r from-[#120d06] via-[#22170a] to-[#0f0a04] p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_-20px_rgba(245,158,11,0.35)] relative overflow-hidden text-amber-50"
        >
          {/* Pristine bottom vignette shield: ensures zero clipped debris or cut-offs on the bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#120d06] via-[#120d06]/60 to-transparent pointer-events-none z-1 rounded-b-[36px]" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Top-Left Section: Precision Tech Circular Emblem Medallion (Proportionately scaled to avoid border clipping) */}
            <div className="lg:col-span-4 relative flex items-center justify-center py-2">
              <div className="absolute w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-3 border-dashed border-[#f59e0b]/60 pointer-events-none" />
              <div className="absolute w-34 h-34 sm:w-38 sm:h-38 lg:w-40 lg:h-40 rounded-full border-2 border-dotted border-amber-300/70 pointer-events-none" />

              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-gradient-to-b from-[#1c1409] via-[#2e1e0b] to-[#140d04] border-4 border-[#f59e0b] shadow-[0_0_35px_rgba(245,158,11,0.5)] flex flex-col items-center justify-center gap-1 select-none">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] font-mono">
                  2.0
                </span>
                <div className="px-2.5 py-0.5 rounded-full bg-black/80 border border-[#f59e0b] text-[#f59e0b] text-[8px] sm:text-[9px] font-black uppercase tracking-widest shadow-xs">
                  STRATEGIC
                </div>
              </div>
            </div>

            {/* Header Area Copy: Blockbuster Cinematic Trailer Style */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-black uppercase tracking-[0.3em] shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
                <span>EFFORT 2.0 &middot; STRATEGIC ROADMAP (2026–2030)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight uppercase font-serif drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                EFFORT &mdash;{" "}
                <span className="italic font-normal text-amber-300 via-amber-400 to-emerald-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                  THE NEXT CHAPTER
                </span>
              </h2>

              <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed font-medium max-w-3xl">
                A multi-year strategic blueprint driving institutional scale, community-led climate resilience, and digital governance across India.
              </p>
            </div>

          </div>
        </div>


        {/* ========================================================================= */}
        {/* PHASE TIMELINE: Sleek Horizontal Glassmorphism Timeline Bar */}
        {/* ========================================================================= */}
        <div>
          {/* Timeline Sub-header */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-amber-900/15">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-950 bg-amber-100 border border-amber-300 rounded-full px-3.5 py-1">
                2026 → 2030
              </span>
              <h3 className="text-sm font-black text-slate-900">Three Primary Phases — Horizontal Roadmap</h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
              <span>Interactive Timeline</span>
            </div>
          </div>

          {/* Horizontal Glassmorphism Timeline Track */}
          <div className="relative py-4 mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-[4px] -translate-y-1/2 bg-gradient-to-r from-emerald-500 via-amber-500 to-teal-500 rounded-full shadow-xs" />
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[6px] bg-amber-500 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_#d97706]"
              style={{
                left: `${activeNodeIndex === 0 ? "16%" : activeNodeIndex === 1 ? "50%" : "84%"}`,
                width: "40px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
            </div>

            {/* 3 Milestone Node Buttons */}
            <div className="relative z-10 grid grid-cols-3 gap-2 max-w-4xl mx-auto">
              {phasesData.map((phase, idx) => {
                const isActive = activeNodeIndex === idx;
                const IconComp = phase.icon;

                return (
                  <button
                    key={phase.id}
                    onClick={() => handleSelectPhase(idx)}
                    className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                  >
                    {/* Rotating Precision Tech Rings with Icon Inside (Replacing Square Boxes!) */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                      {/* Outer Rotating Gear Ring */}
                      <div
                        className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-500 ${
                          isActive ? "scale-110 opacity-100 border-[#f59e0b]" : "scale-95 opacity-50 border-amber-400/60 group-hover:scale-100 group-hover:opacity-80"
                        }`}
                      />

                      {/* Middle Counter-Rotating Dotted Ring */}
                      <div
                        className={`absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dotted transition-all duration-500 ${
                          isActive ? "border-emerald-500 opacity-100" : "border-emerald-500/40 opacity-40"
                        }`}
                      />

                      {/* Solid Inner Circular Medallion Center (Icon Inside) */}
                      <div
                        className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-[#1a1309] via-[#2a1d0b] to-[#120c04] border-2 shadow-md flex items-center justify-center transition-all duration-300 ${
                          isActive ? "scale-110 border-[#f59e0b] shadow-[0_0_20px_rgba(245,158,11,0.6)]" : "border-amber-400/50 group-hover:scale-105"
                        }`}
                      >
                        <IconComp className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${isActive ? "scale-110 text-white" : "text-amber-400 group-hover:scale-110"}`} />
                      </div>
                    </div>
                    <p className="text-[11px] font-black uppercase mt-2" style={{ color: phase.accentColor }}>
                      {phase.phaseLabel} ({phase.years})
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3 Horizontal Phase Cards: Swipeable Snap-Carousel on Mobile/Tablet, 3-Column Grid on Desktop */}
          <div
            ref={cardsContainerRef}
            onTouchStart={() => {
              isInteractingRef.current = true;
              if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
              pauseTimeoutRef.current = setTimeout(() => {
                isInteractingRef.current = false;
              }, 8000);
            }}
            onScroll={() => {
              if (!cardsContainerRef.current) return;
              const container = cardsContainerRef.current;
              const scrollLeft = container.scrollLeft;
              const firstChild = container.children[0] as HTMLElement | undefined;
              const cardWidth = firstChild ? firstChild.offsetWidth + 16 : container.clientWidth * 0.86;
              if (cardWidth > 0) {
                const newIdx = Math.min(
                  phasesData.length - 1,
                  Math.max(0, Math.round(scrollLeft / cardWidth))
                );
                if (newIdx !== activeNodeIndex) {
                  setActiveNodeIndex(newIdx);
                }
              }
            }}
            className="flex overflow-x-auto snap-x snap-proximity touch-pan-y overscroll-x-contain gap-4 pb-4 pt-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible scrollbar-none"
            style={{ touchAction: "pan-y" }}
          >
            {phasesData.map((phase, idx) => {
              const isHovered = hoveredCard === idx;
              const isActiveNode = activeNodeIndex === idx;

              return (
                <div
                  key={phase.id}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleSelectPhase(idx)}
                  className={`group relative rounded-[28px] p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-white/95 border-2 transition-all duration-500 cursor-pointer overflow-hidden w-[86vw] max-w-[390px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink ${
                    isHovered
                      ? "-translate-y-2 lg:-translate-y-3 scale-[1.01] lg:scale-[1.02] z-20"
                      : "z-10"
                  }`}
                  style={{
                    borderColor: phase.accentColor,
                    boxShadow: isHovered
                      ? `0 25px 60px -15px ${phase.glowColor || 'rgba(0,0,0,0.15)'}`
                      : `0 12px 35px -10px ${phase.glowColor || 'rgba(0,0,0,0.1)'}`,
                  }}
                >
                  {/* Distinct Rotating Border Highlight Track */}
                  <div
                    className="absolute top-0 inset-x-0 h-1.5 transition-all duration-500"
                    style={{
                      backgroundImage: idx === 0 
                        ? "linear-gradient(90deg, #059669 0%, #34d399 50%, #059669 100%)" 
                        : idx === 1 
                        ? "linear-gradient(90deg, #d97706 0%, #fbbf24 50%, #d97706 100%)" 
                        : "linear-gradient(90deg, #4f46e5 0%, #818cf8 50%, #4f46e5 100%)",
                    }}
                  />

                  {/* Card Content Container */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border shadow-2xs ${phase.badgeBg} ${phase.badgeText}`}>
                        <phase.icon className="w-3.5 h-3.5 inline mr-1" />
                        {phase.phaseLabel} &middot; {phase.years}
                      </span>
                      {/* Permanent Pulsing Status Dot */}
                      <div className="w-3.5 h-3.5 rounded-full scale-125 shadow-md animate-pulse" style={{ backgroundColor: phase.accentColor }} />
                    </div>

                    <h3 className="text-xl font-black text-slate-900 leading-tight mt-2">{phase.title}</h3>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed font-semibold">{phase.focus}</p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                      {phase.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: phase.accentColor }} />
                          <span className="text-xs text-slate-700 font-medium leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold italic text-slate-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: phase.accentColor }} />
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Swipe Indicators & Phase Tracker */}
          <div className="flex lg:hidden flex-col items-center justify-center gap-2 mt-3">
            <div className="flex items-center gap-2">
              {phasesData.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => handleSelectPhase(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeNodeIndex === i
                      ? "w-8 bg-amber-500 shadow-xs"
                      : "w-2.5 bg-amber-900/20 hover:bg-amber-900/40"
                  }`}
                  aria-label={`Go to ${phase.phaseLabel}`}
                />
              ))}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Swipe horizontally &middot; Phase {activeNodeIndex + 1} of {phasesData.length}
            </span>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* PILLARS SECTION: Clean 2x3 Horizontal Grid for "Six Strategic Pillars" */}
        {/* ========================================================================= */}
        <div
          className={`pt-8 border-t border-amber-900/15 transition-all duration-1000 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-950 bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full shadow-xs">
              CORE FOUNDATIONAL SYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mt-2">
              SIX STRATEGIC PILLARS
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Minimalist line-art icon framework driving institutional ownership, digital governance, and pan-India reach.
            </p>
          </div>

          {/* Clean Responsive Grid (Compact on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
            {pillarsData.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isHovered = hoveredPillar === idx;

              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`group relative rounded-2xl border-2 p-4 sm:p-6 transition-all duration-300 flex items-start gap-3.5 sm:gap-4 overflow-hidden bg-white/90 shadow-xs hover:shadow-xl ${
                    isHovered ? "border-amber-400 -translate-y-1.5" : "border-slate-200"
                  }`}
                >
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs"
                    style={{ backgroundColor: `${pillar.accent}15`, borderColor: `${pillar.accent}40` }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: pillar.accent }} />
                  </div>

                  <div className="relative min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                        PILLAR {pillar.num}
                      </span>
                      <span className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: pillar.accent }} />
                    </div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 mt-1 leading-snug group-hover:text-amber-900 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* ========================================================================= */}
        {/* IMPACT METRICS ROW: Bottom Horizontal Stat Bar with 4 Bold Metric Cards */}
        {/* ========================================================================= */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-[28px] border-2 border-amber-300/80 bg-white/95 px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-5 shadow-lg overflow-hidden">
            {/* Ultra-Compact Header Ribbon */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-900/10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300 shrink-0">
                  TARGET IMPACT BY 2030
                </span>
                <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
                  Quantifiable Strategic Outcomes
                </h4>
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-amber-950 bg-amber-50 border border-amber-300/80 rounded-full px-3 py-1 self-start sm:self-auto shadow-2xs">
                <Target className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                <span>EFFORT 2.0 Master Metrics</span>
              </div>
            </div>

            {/* Ultra-Sleek 4-Metric Grid Dock */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {impactStatsData.map((stat) => (
                <div
                  key={stat.label}
                  className={`group relative rounded-2xl border-2 p-3.5 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 overflow-hidden ${stat.accent} ${stat.glow}`}
                >
                  {/* Top Shimmer Highlight Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.topBorder}`} />

                  <p className="text-2xl sm:text-3xl lg:text-3xl font-black font-mono tracking-tight text-slate-900 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-black uppercase tracking-wider text-slate-900 mt-1.5">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-slate-600 font-semibold mt-0.5 leading-snug line-clamp-1">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
