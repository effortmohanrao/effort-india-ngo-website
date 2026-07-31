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

      {/* --- HERO --- */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#fdfaf4]" />
          <div className="absolute -top-20 -left-24 w-[460px] h-[460px] rounded-full bg-emerald-100/60 blur-[110px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] rounded-full bg-amber-100/60 blur-[110px] animate-liquid-drift-b" />
          <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] rounded-full bg-teal-100/50 blur-[110px] animate-liquid-drift-c" />

          <svg className="absolute inset-0 w-full h-full opacity-[0.35]" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M -50 200 C 250 100, 450 320, 750 220 S 1150 100, 1300 260" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="10 14" className="animate-ribbon-flow" />
            <path d="M -50 560 C 300 460, 500 660, 800 540 S 1150 460, 1300 600" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="8 16" className="animate-ribbon-flow" style={{ animationDuration: "11s" }} />
            <path d="M -50 380 C 280 300, 520 460, 820 360 S 1150 300, 1300 420" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="6 12" className="animate-ribbon-flow" style={{ animationDuration: "14s" }} />
          </svg>

          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-300/50 animate-dust-float"
              style={{
                width: 3 + (i % 3),
                height: 3 + (i % 3),
                left: `${(i * 6.3) % 100}%`,
                top: `${(i * 11.7) % 100}%`,
                animationDelay: `${(i % 7) * 0.6}s`,
                animationDuration: `${6 + (i % 4)}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-noise opacity-[0.3]" />
        </div>

        <div
          className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-[#d9c98e] text-[#8a6a1f] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Our Impact
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#221c0c] leading-[1.05]">
            50 Projects.
            <br />
            Thousands of Lives.
            <br />
            <span className="text-metallic-gold">One Mission.</span>
          </h1>
          <p className="text-[#6b6046] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mt-6">
            Twenty-seven years of documented, on-the-ground work across rural Andhra Pradesh and beyond.
          </p>
        </div>
      </section>

      {/* --- TOGGLE + HALF-CENTURY SHOWCASE --- */}
      <section ref={showcaseRef} className="relative py-10 lg:py-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf4] via-[#fbf5e6] to-[#fdfaf4]" />
          <div className="absolute inset-0 bg-noise opacity-[0.25]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Segmented toggle */}
          <div className="relative inline-flex p-1.5 rounded-full bg-white border border-[#e7ddc8] shadow-[0_10px_30px_-15px_rgba(120,90,40,0.3)] mb-10">
            <div
              className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-br from-[#e8c975] to-[#c9a24a] transition-elastic"
              style={{ left: indicator.left, width: indicator.width, transitionDuration: "550ms" }}
            />
            <button
              ref={completedBtnRef}
              onClick={() => {
                setProjectsTab("completed");
                setSelectedCategory(null);
              }}
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300 ${
                projectsTab === "completed" ? "text-[#3a2a08]" : "text-[#8a8066] hover:text-[#4a4230]"
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
              className={`relative z-10 px-8 py-3 rounded-full font-bold text-sm transition-colors duration-300 ${
                projectsTab === "ongoing" ? "text-[#3a2a08]" : "text-[#8a8066] hover:text-[#4a4230]"
              }`}
            >
              Ongoing (13)
            </button>
          </div>

          {/* Showcase */}
          {projectsTab === "completed" ? (
            <div className="relative flex flex-col items-center">
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/40 to-transparent blur-3xl animate-halo-breathe" />
                <div className="absolute inset-6 rounded-full border border-amber-300/40 animate-halo-spin" />
                <div className="absolute inset-14 rounded-full border border-dashed border-amber-400/30 animate-halo-spin-reverse" />

                {burstParticles.map((p, i) => (
                  <div
                    key={i}
                    className="absolute left-1/2 top-1/2 rounded-full bg-amber-400"
                    style={
                      {
                        width: p.size,
                        height: p.size,
                        "--burst-end": `translate(${p.dx}px, ${p.dy}px)`,
                        animationName: "particle-burst",
                        animationDuration: "2.6s",
                        animationTimingFunction: "cubic-bezier(0.2, 0.7, 0.3, 1)",
                        animationIterationCount: "infinite",
                        animationDelay: `${p.delay}s`,
                      } as React.CSSProperties
                    }
                  />
                ))}

                <p className="relative text-metallic-gold font-black leading-none text-[6.5rem] sm:text-[9rem] tracking-tight">
                  {projectsCount}
                </p>
              </div>

              <p className="text-[#a3711f] text-xs font-bold uppercase tracking-[0.25em] mt-4">Half Century Milestone</p>
              <p className="text-[#221c0c] text-xl sm:text-2xl font-black tracking-tight mt-1">50 Completed Projects</p>
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
                <div className="absolute inset-4 rounded-full animate-ring-pulse" />
                <svg className="absolute inset-0 w-full h-full -rotate-90 animate-halo-spin" style={{ animationDuration: "5s" }} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#d1f0e0" strokeWidth="4" />
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeDasharray="276.5" strokeDashoffset="200" />
                </svg>
                <p className="relative text-emerald-500 font-black leading-none text-[5rem] sm:text-[6rem] tracking-tight">
                  {projectsCount}
                  <span className="text-4xl align-top">+</span>
                </p>
              </div>
              <p className="text-emerald-600 text-xs font-bold uppercase tracking-[0.25em] mt-4">Active &amp; In Motion</p>
              <p className="text-[#221c0c] text-xl sm:text-2xl font-black tracking-tight mt-1">13 Active Projects</p>
              <p className="text-[#6b6046] text-sm mt-1">Building Tomorrow.</p>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-10 max-w-2xl mx-auto">
            {activeBreakdown.map((b) => (
              <div key={b.label} className="text-center">
                <span className="text-[#221c0c] font-bold text-sm">{b.count}</span>{" "}
                <span className="text-[#7a6f55] text-xs">{b.label}</span>
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
