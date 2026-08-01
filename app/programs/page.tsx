"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Award,
  Building2,
  FolderOpen,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  Project,
  completedProjects,
  ongoingProjects,
  completedBreakdown,
  ongoingBreakdown,
  extractLocation,
  extractHeadlineStat,
} from "./data";
import CalendarFlipClock from "@/components/CalendarFlipClock";

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    const fallback = setTimeout(() => setVisible(true), 2500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return [ref, visible] as const;
}

const burstParticles = Array.from({ length: 10 }).map((_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  const dist = 110 + (i % 3) * 25;
  return {
    dx: Math.round(Math.cos(angle) * dist),
    dy: Math.round(Math.sin(angle) * dist),
    delay: (i * 0.23).toFixed(2),
    size: i % 3 === 0 ? 6 : 4,
  };
});

function ProjectCard({ project, index, status }: { project: Project; index: number; status: "completed" | "ongoing" }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const location = extractLocation(project);
  const stat = extractHeadlineStat(project);

  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;
    card.style.setProperty("--spot-x", `${x}px`);
    card.style.setProperty("--spot-y", `${y}px`);
    card.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
  }
  function onMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  }

  return (
    <Link
      ref={cardRef}
      href={`/programs/${status}/${index + 1}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative flex flex-col rounded-[26px] bg-white border border-[#e7ddc8] shadow-[0_20px_45px_-30px_rgba(120,90,40,0.35)] hover:shadow-[0_30px_60px_-25px_rgba(180,130,40,0.35)] transition-shadow duration-500 overflow-hidden"
      style={{ transformStyle: "preserve-3d", transition: "transform 300ms ease-out, box-shadow 400ms ease-out" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{ background: "radial-gradient(200px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(217,164,65,0.16), transparent 70%)" }}
      />

      <div className="relative h-32 bg-gradient-to-br from-[#faf3e3] to-[#f1e6cc] flex items-center justify-center overflow-hidden">
        <FolderOpen className="w-8 h-8 text-[#c9a24a]/40 group-hover:scale-110 group-hover:text-[#c9a24a]/60 transition-all duration-500" />
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
            status === "completed" ? "bg-amber-400/90 text-[#3a2a08]" : "bg-emerald-500/90 text-white"
          }`}
        >
          {status === "completed" ? "Completed" : "Ongoing"}
        </span>
        {stat && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wide text-[#6b4f1d]">
            {stat.value} {stat.unit}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col grow">
        <h3 className="text-[#2b2410] font-bold text-sm leading-snug line-clamp-2 mb-1.5 group-hover:text-[#a3711f] transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-[#7a6f55] text-xs leading-relaxed line-clamp-2 mb-3">{project.beneficiaries}</p>

        <div className="mt-auto space-y-1.5 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-400 overflow-hidden">
          <div className="flex items-center gap-1.5 text-[11px] text-[#6b6046]">
            <MapPin className="w-3 h-3 shrink-0 text-[#c9a24a]" />
            <span className="line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-[#6b6046]">
            <Building2 className="w-3 h-3 shrink-0 text-[#c9a24a]" />
            <span className="line-clamp-1">{project.funder}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#efe6d2]">
          <span className="text-[10px] font-bold uppercase tracking-wide text-[#a3711f] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Case Study
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-[#a3711f] group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>

      <div className="relative h-[3px] bg-[#f1e6cc] overflow-hidden">
        {status === "completed" ? (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500" />
        ) : (
          <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-light-sweep" />
        )}
      </div>
    </Link>
  );
}

export default function Programs() {
  const [heroRef, heroVisible] = useScrollReveal<HTMLElement>();
  const [showcaseRef, showcaseVisible] = useScrollReveal<HTMLElement>();
  const [explorerRef, explorerVisible] = useScrollReveal<HTMLElement>();

  const [projectsTab, setProjectsTab] = useState<"completed" | "ongoing">("completed");
  const [projectsCount, setProjectsCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const completedBtnRef = useRef<HTMLButtonElement>(null);
  const ongoingBtnRef = useRef<HTMLButtonElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const activeProjects = projectsTab === "completed" ? completedProjects : ongoingProjects;
  const activeBreakdown = projectsTab === "completed" ? completedBreakdown : ongoingBreakdown;
  const activeTarget = projectsTab === "completed" ? 50 : 13;

  useEffect(() => {
    function measure() {
      const btn = projectsTab === "completed" ? completedBtnRef.current : ongoingBtnRef.current;
      if (btn) setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [projectsTab]);

  useEffect(() => {
    if (!showcaseVisible) return;
    const duration = 1600;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setProjectsCount(Math.round(activeTarget * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [projectsTab, showcaseVisible, activeTarget]);

  return (
    <div className="bg-[#fdfaf4] min-h-screen relative overflow-hidden">

      {/* --- HERO SECTION WITH HIGH-LEVEL GRAPHIC AURORA --- */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Liquid Aurora Mesh Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#fffdf8] via-[#faf2db] to-[#f4e6b8]" />
          <div className="absolute -top-24 -left-20 w-[520px] h-[520px] rounded-full bg-amber-200/50 blur-[130px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 -right-20 w-[480px] h-[480px] rounded-full bg-emerald-200/40 blur-[120px] animate-liquid-drift-b" />
          <div className="absolute -bottom-24 left-1/3 w-[450px] h-[450px] rounded-full bg-sky-200/40 blur-[120px] animate-liquid-drift-c" />

          {/* Frosted Geometric Mesh Overlay */}
          <div
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(#d4af6a 0.75px, transparent 0.75px), radial-gradient(#10b981 0.75px, #fffdf8 0.75px)`,
              backgroundSize: `30px 30px`,
              backgroundPosition: `0 0, 15px 15px`,
            }}
          />

          {/* Topological Wave Ribbons */}
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af6a" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <path d="M -50 180 C 250 80, 480 300, 780 200 S 1150 80, 1300 240" fill="none" stroke="url(#waveGrad1)" strokeWidth="2.5" strokeDasharray="12 16" className="animate-ribbon-flow" />
            <path d="M -50 540 C 320 440, 520 640, 820 520 S 1150 440, 1300 580" fill="none" stroke="url(#waveGrad2)" strokeWidth="2" strokeDasharray="10 18" className="animate-ribbon-flow" style={{ animationDuration: "12s" }} />
          </svg>

          {/* 20 Animated Floating Gold Dust Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-400/60 shadow-[0_0_8px_#d4af6a] animate-dust-float"
              style={{
                width: 3 + (i % 4) * 2,
                height: 3 + (i % 4) * 2,
                left: `${(i * 5.2) % 100}%`,
                top: `${(i * 9.3) % 100}%`,
                animationDelay: `${(i % 8) * 0.45}s`,
                animationDuration: `${5.5 + (i % 5)}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-noise opacity-[0.25]" />
        </div>

        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-[#8a6a1f] text-xs font-black uppercase tracking-[0.25em] mb-6 shadow-md hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 text-[#d4af6a] animate-pulse" /> Our Impact & Legacy
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#221c0c] leading-[1.06]">
            50 Projects.
            <br />
            Thousands of Lives.
            <br />
            <span className="text-metallic-gold drop-shadow-sm">One Mission.</span>
          </h1>
          <p className="text-[#5c523a] text-base sm:text-xl font-medium leading-relaxed max-w-xl mx-auto mt-6">
            Twenty-seven years of documented, high-impact work transforming rural communities across Andhra Pradesh and India.
          </p>
        </div>
      </section>

      {/* --- TOGGLE + HIGH-LEVEL HALF-CENTURY SHOWCASE --- */}
      <section ref={showcaseRef} className="relative py-12 lg:py-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8] via-[#fbf3db] to-[#fffdf8]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-amber-200/30 blur-[130px] animate-liquid-drift-a" />
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Segmented Frosted Glass Toggle */}
          <div className="relative inline-flex p-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-[#e5d4a1] shadow-[0_15px_35px_-15px_rgba(180,140,40,0.35)] mb-12">
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-br from-[#ebd488] via-[#d4af6a] to-[#b88c30] shadow-md transition-elastic"
              style={{ left: indicator.left, width: indicator.width, transitionDuration: "550ms" }}
            />
            <button
              ref={completedBtnRef}
              onClick={() => {
                setProjectsTab("completed");
                setSelectedCategory(null);
              }}
              className={`relative z-10 px-8 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-colors duration-300 ${
                projectsTab === "completed" ? "text-[#221c0c]" : "text-[#7a6f55] hover:text-[#221c0c]"
              }`}
            >
              Completed (50)
            </button>
            <button
              ref={ongoingBtnRef}
              onClick={() => {
                setProjectsTab("ongoing");
                setSelectedCategory(null);
              }}
              className={`relative z-10 px-8 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-colors duration-300 ${
                projectsTab === "ongoing" ? "text-[#221c0c]" : "text-[#7a6f55] hover:text-[#221c0c]"
              }`}
            >
              Ongoing (13)
            </button>
          </div>

          {/* 3D Calendar Flip Clock Display */}
          <div className="relative flex flex-col items-center my-4">
            <CalendarFlipClock
              value={projectsCount}
              label={projectsTab === "completed" ? "Half Century Milestone" : "Active & In Motion"}
            />

            <p className="text-[#221c0c] text-2xl sm:text-3xl font-black tracking-tight mt-8">
              {projectsTab === "completed" ? "50 Completed Projects" : "13 Active Projects"}
            </p>
            <p className="text-[#7a6f55] text-xs font-bold uppercase tracking-wider mt-1">
              {projectsTab === "completed"
                ? "Verified Field Deliveries Handed Over to Communities"
                : "Building Tomorrow's Impact Today"}
            </p>
          </div>

          {/* Breakdown Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-3xl mx-auto">
            {activeBreakdown.map((b) => (
              <div
                key={b.label}
                className="px-5 py-2.5 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm text-center hover:scale-105 transition-transform"
              >
                <span className="text-[#221c0c] font-black text-sm">{b.count}</span>{" "}
                <span className="text-[#7a6f55] text-xs font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PREMIUM PROJECT EXPLORER --- */}
      <section ref={explorerRef} id="programs-listing" className="relative py-8 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[#fdfaf4]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center max-w-2xl mx-auto space-y-3 mb-8 transition-all duration-700 ${
              explorerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e7ddc8] text-[#a3711f] text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" /> Project Explorer
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#221c0c]">
              Every Case Study, Documented
            </h2>
            <p className="text-[#7a6f55] text-sm sm:text-base leading-relaxed">
              Open any project for its full story — beneficiaries, funding partner, location, and impact.
            </p>
          </div>

          {/* Category filter chips */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-[#221c0c] text-white"
                  : "bg-white border border-[#e7ddc8] text-[#7a6f55] hover:border-[#c9a24a]/60"
              }`}
            >
              All ({activeProjects.length})
            </button>
            {activeBreakdown.map((b) => (
              <button
                key={b.label}
                onClick={() => setSelectedCategory(b.label)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  selectedCategory === b.label
                    ? "bg-[#c9a24a] text-white"
                    : "bg-white border border-[#e7ddc8] text-[#7a6f55] hover:border-[#c9a24a]/60"
                }`}
              >
                {b.label} ({b.count})
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProjects.map((p, i) => {
              if (selectedCategory && p.category !== selectedCategory) return null;
              return <ProjectCard key={`${projectsTab}-${i}`} project={p} index={i} status={projectsTab} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
