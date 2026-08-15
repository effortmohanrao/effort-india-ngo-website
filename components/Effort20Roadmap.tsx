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
  iconBgGradient: string;
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
    accentColor: "#38bdf8", // Sky cyan
    glowColor: "rgba(56, 189, 248, 0.4)",
    icon: Compass,
    iconBgGradient: "from-sky-500/30 to-cyan-500/10",
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
    accentColor: "#818cf8", // Indigo violet
    glowColor: "rgba(129, 140, 248, 0.4)",
    icon: TrendingUp,
    iconBgGradient: "from-indigo-500/30 to-violet-500/10",
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
    accentColor: "#c084fc", // Purple fuchsia
    glowColor: "rgba(192, 132, 252, 0.4)",
    icon: Sparkles,
    iconBgGradient: "from-purple-500/30 to-fuchsia-500/10",
  },
];

const pillarsData = [
  {
    num: "01",
    title: "Community-Led Resilience",
    desc: "Strengthening people's organisations and local institutions as drivers of change.",
    icon: Users,
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    accent: "#38bdf8",
    microAnim: "group-hover:scale-110 group-hover:rotate-3",
  },
  {
    num: "02",
    title: "Livelihoods & Youth Futures",
    desc: "Youth skills, employability and Farmer Producer Organisations at the centre of resilience.",
    icon: Sprout,
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "#34d399",
    microAnim: "group-hover:-translate-y-1 group-hover:scale-105",
  },
  {
    num: "03",
    title: "Knowledge & Learning",
    desc: "Practice-based evidence and peer learning informing wider development dialogue.",
    icon: BookOpen,
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    accent: "#fbbf24",
    microAnim: "group-hover:rotate-[-6deg] group-hover:scale-110",
  },
  {
    num: "04",
    title: "Partnerships & Ecosystem",
    desc: "Value-aligned partnerships with government, CSR, academia and private sector.",
    icon: Handshake,
    gradient: "from-indigo-500/20 via-violet-500/10 to-transparent",
    accent: "#818cf8",
    microAnim: "group-hover:scale-110 group-hover:translate-x-1",
  },
  {
    num: "05",
    title: "Capacity, Leadership & Governance",
    desc: "Second-line leadership, succession planning and strengthened Board effectiveness.",
    icon: ShieldCheck,
    gradient: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    accent: "#c084fc",
    microAnim: "group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]",
  },
  {
    num: "06",
    title: "Systems & Digitalisation",
    desc: "MIS, MEL and financial sustainability as enablers of scale and transparency.",
    icon: Zap,
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    accent: "#60a5fa",
    microAnim: "group-hover:animate-pulse group-hover:scale-110",
  },
];

const impactStatsData = [
  { value: "4L–5L", label: "Farmers Supported", detail: "Climate-resilient agriculture & soil health", color: "from-sky-400 via-cyan-300 to-blue-400" },
  { value: "25K–40K", label: "Youth Engaged", detail: "Skills, livelihoods & entrepreneurship", color: "from-violet-400 via-indigo-300 to-purple-400" },
  { value: "75–120", label: "FPOs & Collectives", detail: "Community ownership & market linkages", color: "from-fuchsia-400 via-pink-300 to-rose-400" },
  { value: "8–12", label: "States, 30–50 Partners", detail: "Pan-India ecosystem collaboration", color: "from-amber-400 via-yellow-300 to-orange-400" },
];

export default function Effort20Roadmap() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-traveling node pulse timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % phasesData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Intersection observer for section entry trigger
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
      className="relative overflow-hidden bg-gradient-to-b from-[#060814] via-[#0c0f24] to-[#080a18] py-20 lg:py-32 text-slate-100 selection:bg-violet-500/30 selection:text-white"
    >
      {/* --- ATMOSPHERIC BACKGROUND LAYERS --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle grid mesh */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Ambient Blurred Radial Clouds */}
        <div className="absolute top-[-10%] left-[15%] w-[550px] h-[550px] bg-cyan-500/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute top-[25%] right-[10%] w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] animate-pulse" style={{ animationDuration: "12s" }} />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-cyan-400/40 blur-[1px] animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 rounded-full bg-violet-400/40 blur-[1px] animate-ping" style={{ animationDuration: "6s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 rounded-full bg-fuchsia-400/50 blur-[1px] animate-ping" style={{ animationDuration: "5s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* TOP EFFORT 2.0 HEADER & ORBITAL HALO */}
        {/* ========================================================================= */}
        <div
          className={`flex flex-col items-center text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Label Above */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-violet-500/30 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: "10s" }} />
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-300 to-fuchsia-400">
              ENTERING
            </span>
          </div>

          {/* Central 2.0 Graphic with Halo */}
          <div className="relative my-4 flex items-center justify-center">
            {/* Outer Orbital Rotating Halo */}
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-dashed border-violet-500/30 animate-halo-spin pointer-events-none" />
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-cyan-400/20 animate-halo-breathe pointer-events-none" />

            {/* Glowing Backdrop Circle */}
            <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-600/30 to-fuchsia-500/20 blur-2xl animate-pulse" />

            {/* 2.0 Typography */}
            <div className="relative text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-300 to-fuchsia-400 font-mono drop-shadow-[0_0_40px_rgba(139,92,246,0.5)] select-none">
              2.0
            </div>
          </div>

          {/* Tagline Below */}
          <h2 className="text-sm sm:text-base lg:text-lg font-black uppercase tracking-[0.35em] text-slate-300 mt-2">
            EFFORT — <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-violet-300 to-cyan-300">The Next Chapter</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
            A 5-year strategic blueprint (2026–2030) driving institutional scale, community-led climate resilience, youth empowerment, and digital governance across India.
          </p>
        </div>


        {/* ========================================================================= */}
        {/* FIVE-YEAR ROADMAP & ANIMATED LUMINOUS TRACK */}
        {/* ========================================================================= */}
        <div
          className={`mb-16 lg:mb-20 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Sub-header */}
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-black uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-3.5 py-1">
                2026 → 2030
              </span>
              <h3 className="text-sm font-bold text-slate-200">EFFORT 2.0 — The Five-Year Strategic Roadmap</h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Interactive Timeline</span>
            </div>
          </div>

          {/* Horizontal Roadmap Line Container */}
          <div className="relative py-8">
            {/* Luminous Base Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[3px] -translate-y-1/2 bg-gradient-to-r from-cyan-500/30 via-violet-500/50 to-fuchsia-500/30 rounded-full" />

            {/* Automatically Traveling Light Particle */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-[5px] bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 rounded-full transition-all duration-1000 ease-in-out shadow-[0_0_20px_#38bdf8]"
              style={{
                left: `${activeNodeIndex === 0 ? "16%" : activeNodeIndex === 1 ? "50%" : "84%"}`,
                width: "40px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
            </div>

            {/* 3 Phase Nodes along the Line */}
            <div className="relative z-10 grid grid-cols-3 gap-2 max-w-4xl mx-auto">
              {phasesData.map((phase, idx) => {
                const isActive = activeNodeIndex === idx;
                const IconComp = phase.icon;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActiveNodeIndex(idx)}
                    className="group flex flex-col items-center text-center cursor-pointer focus:outline-none"
                  >
                    {/* Node Circle */}
                    <div
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive
                          ? "scale-110 shadow-[0_0_35px_var(--glow)] border-2 border-white bg-slate-900"
                          : "scale-95 border border-white/20 bg-slate-900/80 hover:scale-100 hover:border-white/50"
                      }`}
                      style={{
                        ["--glow" as string]: phase.glowColor,
                        borderColor: isActive ? phase.accentColor : undefined,
                      }}
                    >
                      {/* Active Halo Effect */}
                      {isActive && (
                        <div
                          className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                          style={{ backgroundColor: phase.accentColor }}
                        />
                      )}
                      
                      <div
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${phase.iconBgGradient} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComp
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          style={{ color: phase.accentColor }}
                        />
                      </div>
                    </div>

                    {/* Node Text */}
                    <div className="mt-3 space-y-0.5">
                      <p
                        className="text-[10px] sm:text-xs font-black uppercase tracking-wider transition-colors duration-300"
                        style={{ color: isActive ? phase.accentColor : "#94a3b8" }}
                      >
                        {phase.phaseLabel}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-tight">
                        {phase.years}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* THREE PHASE TRANSLUCENT GLASS CARDS */}
        {/* ========================================================================= */}
        <div
          className={`grid lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-300 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {phasesData.map((phase, idx) => {
            const isHovered = hoveredCard === idx;
            const isSubdued = hoveredCard !== null && hoveredCard !== idx;
            const isActiveNode = activeNodeIndex === idx;

            return (
              <div
                key={phase.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveNodeIndex(idx)}
                className={`group relative rounded-[28px] p-6 sm:p-8 flex flex-col justify-between backdrop-blur-2xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  isHovered
                    ? "-translate-y-3 shadow-[0_25px_60px_-15px_var(--glow)] z-20 border-white/40"
                    : isSubdued
                    ? "opacity-60 scale-[0.98] border-white/10 z-0"
                    : isActiveNode
                    ? "shadow-[0_15px_45px_-15px_var(--glow)] border-white/30 z-10"
                    : "border-white/10 bg-slate-900/50 hover:bg-slate-900/70 z-10"
                }`}
                style={{
                  ["--glow" as string]: phase.glowColor,
                  background: isHovered
                    ? `linear-gradient(165deg, ${phase.accentColor}18 0%, rgba(15, 23, 42, 0.85) 60%, rgba(15, 23, 42, 0.95) 100%)`
                    : `linear-gradient(165deg, ${phase.accentColor}0d 0%, rgba(15, 23, 42, 0.6) 60%, rgba(15, 23, 42, 0.8) 100%)`,
                  borderColor: isHovered ? phase.accentColor : isActiveNode ? `${phase.accentColor}80` : "rgba(255, 255, 255, 0.12)",
                }}
              >
                {/* Top Glass Luminous Border Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Hover Sheen Sweep Effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-glass-sheen" />
                </div>

                {/* Card Top Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border backdrop-blur-md"
                      style={{
                        color: phase.accentColor,
                        borderColor: `${phase.accentColor}40`,
                        backgroundColor: `${phase.accentColor}15`,
                      }}
                    >
                      <phase.icon className="w-3 h-3" /> {phase.phaseLabel} &middot; {phase.years}
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActiveNode ? "scale-125 shadow-[0_0_12px_var(--glow)]" : "opacity-40"
                      }`}
                      style={{ backgroundColor: phase.accentColor, ["--glow" as string]: phase.accentColor }}
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight mt-2">
                    {phase.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed font-normal">
                    {phase.focus}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                    {phase.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 group/item">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 shrink-0 transition-transform duration-300 group-hover/item:scale-110"
                          style={{ color: phase.accentColor }}
                        />
                        <span className="text-xs text-slate-200 leading-snug font-normal">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Small Italic Strategic Conclusion at Bottom */}
                <div className="mt-8 pt-4 border-t border-white/10">
                  <p className="text-[11px] font-medium italic text-slate-300 leading-relaxed flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: phase.accentColor }} />
                    {phase.outcome}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


        {/* ========================================================================= */}
        {/* SIX STRATEGIC PILLARS GRID */}
        {/* ========================================================================= */}
        <div
          className={`pt-12 border-t border-white/10 mb-20 transition-all duration-1000 delay-400 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 bg-violet-500/10 border border-violet-500/30 px-3.5 py-1.5 rounded-full">
              CORE FOUNDATIONAL SYSTEM
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mt-2">
              EFFORT 2.0 IS BUILT ON <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-violet-300 to-fuchsia-400">SIX STRATEGIC PILLARS</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Interlocking strategic directives ensuring long-term community ownership, institutional governance, digital transparency, and pan-India reach.
            </p>
          </div>

          {/* 6 Tiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {pillarsData.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              const isHovered = hoveredPillar === idx;

              return (
                <div
                  key={pillar.num}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  className={`group relative rounded-2xl border p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 flex items-start gap-4 overflow-hidden ${
                    isHovered
                      ? "bg-white/[0.08] border-violet-400/50 -translate-y-1.5 shadow-[0_15px_30px_-10px_rgba(139,92,246,0.3)]"
                      : "bg-slate-900/40 border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Subtle Gradient Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Icon Box */}
                  <div
                    className="relative w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${pillar.accent}15`,
                      borderColor: `${pillar.accent}40`,
                    }}
                  >
                    <IconComponent
                      className={`w-6 h-6 transition-all duration-300 ${pillar.microAnim}`}
                      style={{ color: pillar.accent }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        PILLAR {pillar.num}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: pillar.accent }}
                      />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug group-hover:text-cyan-200 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* ========================================================================= */}
        {/* FOUR MAJOR IMPACT NUMBERS (STAT PANELS) */}
        {/* ========================================================================= */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-[32px] border border-white/15 bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            {/* Background Glows */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400">
                    TARGET IMPACT BY 2030
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Quantifiable Strategic Outcomes
                  </h4>
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 rounded-full px-4 py-2 self-start sm:self-auto">
                  <Target className="w-4 h-4 text-violet-400 animate-pulse" />
                  <span>EFFORT 2.0 Master Targets</span>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {impactStatsData.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-center hover:bg-white/[0.07] hover:border-violet-400/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <p
                      className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${stat.color} animate-stat-count-glow`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-200 mt-2">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-2">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
