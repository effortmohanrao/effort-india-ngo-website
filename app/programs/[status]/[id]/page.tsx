"use client";

import React, { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Award,
  Image as ImageIcon,
  PlayCircle,
  FileText,
  ArrowRight,
  Users,
  Milestone,
  Compass,
  Flag,
  Sprout,
  Droplets,
  HeartPulse,
  Baby,
  ShieldCheck,
  CheckCircle2,
  Mail,
} from "lucide-react";
import {
  Project,
  completedProjects,
  ongoingProjects,
  extractLocation,
  extractHeadlineStat,
  derivePartnerType,
} from "../../data";

function getList(status: string): Project[] | null {
  if (status === "completed") return completedProjects;
  if (status === "ongoing") return ongoingProjects;
  return null;
}

const CATEGORY_ICON: Record<string, typeof Sprout> = {
  "Sustainable Agriculture": Sprout,
  "Natural Resource Management": Droplets,
  "Community Health": HeartPulse,
  "Child Development": Baby,
  "Child, Women Development & Livelihoods": Users,
};

const PARTNER_STYLE: Record<string, string> = {
  "Government & Statutory Partner": "from-blue-100 to-blue-50 border-blue-300 text-blue-900",
  "International Partner": "from-purple-100 to-purple-50 border-purple-300 text-purple-900",
  "CSR & Foundation Partner": "from-pink-100 to-pink-50 border-pink-300 text-pink-900",
  "Corporate Partner": "from-amber-100 to-amber-50 border-amber-300 text-amber-900",
};

const confettiParticles = Array.from({ length: 8 }).map((_, i) => ({
  left: `${8 + i * 12}%`,
  delay: (i * 0.35).toFixed(2),
  color: i % 3 === 0 ? "bg-amber-400" : i % 3 === 1 ? "bg-emerald-400" : "bg-rose-300",
}));

function useStickySidebar(topOffset: number) {
  const trackRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    function update() {
      const track = trackRef.current;
      const inner = innerRef.current;
      if (!track || !inner) return;
      if (window.innerWidth < 1024) {
        inner.style.position = "";
        inner.style.top = "";
        inner.style.left = "";
        inner.style.bottom = "";
        inner.style.width = "";
        return;
      }
      const trackRect = track.getBoundingClientRect();
      const innerHeight = inner.offsetHeight;

      if (trackRect.top > topOffset) {
        inner.style.position = "";
        inner.style.top = "";
        inner.style.left = "";
        inner.style.bottom = "";
        inner.style.width = "";
      } else if (trackRect.bottom < topOffset + innerHeight) {
        inner.style.position = "absolute";
        inner.style.top = "";
        inner.style.bottom = "0px";
        inner.style.left = "0px";
        inner.style.width = "100%";
      } else {
        inner.style.position = "fixed";
        inner.style.top = `${topOffset}px`;
        inner.style.left = `${trackRect.left}px`;
        inner.style.width = `${trackRect.width}px`;
        inner.style.bottom = "";
      }
    }
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [topOffset]);

  return { trackRef, innerRef };
}

function useCountUp(target: number | null, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === null) return;
    const duration = 1400;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, active]);
  return value;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ status: string; id: string }>;
}) {
  const { status, id } = use(params);
  const list = getList(status);
  const index = parseInt(id, 10) - 1;
  const project = list && Number.isInteger(index) ? list[index] : undefined;

  if (!list || !project) notFound();

  const isCompleted = status === "completed";
  const location = extractLocation(project);
  const stat = extractHeadlineStat(project);
  const partnerType = derivePartnerType(project.funder);
  const CategoryIcon = CATEGORY_ICON[project.category] ?? ShieldCheck;

  const { trackRef, innerRef } = useStickySidebar(32);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setSidebarVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    const fallback = setTimeout(() => setSidebarVisible(true), 2000);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reachValue = useCountUp(stat?.numeric ?? null, sidebarVisible);

  const [mainTitle, ...subInitiatives] = project.name.split(";").map((s) => s.trim());
  const partnerStyle = PARTNER_STYLE[partnerType] ?? PARTNER_STYLE["Corporate Partner"];

  const relatedPool = list
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i !== index);
  const sameFunder = relatedPool.filter(({ p }) => p.funder === project.funder);
  const others = relatedPool.filter(({ p }) => p.funder !== project.funder);
  const related = [...sameFunder, ...others].slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fdfaf4]">
      {/* --- HERO BANNER --- */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf4] via-[#fbf5e6] to-[#f6ecd2]" />
          <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full bg-amber-100/60 blur-[110px] animate-liquid-drift-a" />
          <div className="absolute -bottom-20 -left-16 w-[360px] h-[360px] rounded-full bg-emerald-100/50 blur-[110px] animate-liquid-drift-b" />
          <div className="absolute inset-0 bg-noise opacity-[0.25]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-[#8a6a1f] font-bold text-sm hover:text-[#6b4f1d] transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Programs
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                isCompleted ? "bg-amber-400/90 text-[#3a2a08]" : "bg-emerald-500/90 text-white"
              }`}
            >
              {isCompleted ? "Completed Project" : "Ongoing Project"}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-[#d9c98e] text-[10px] font-bold uppercase tracking-wider text-[#8a6a1f]">
              <CategoryIcon className="w-3 h-3" /> {project.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#221c0c] leading-[1.18] max-w-4xl">
            {mainTitle}
          </h1>
          {subInitiatives.length > 0 && (
            <p className="text-[#8a6a1f] text-sm sm:text-base font-medium mt-3 max-w-3xl leading-relaxed">
              Also includes: {subInitiatives.join(" · ")}
            </p>
          )}

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/55 backdrop-blur-md border border-[#e7ddc8] text-sm font-semibold text-[#4a4230]">
              <MapPin className="w-4 h-4 text-[#c9a24a]" />
              {location}
            </div>
            <div className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r border-2 shadow-sm text-sm font-bold ${partnerStyle}`}>
              <Building2 className="w-4 h-4" />
              {project.funder}
            </div>
            {stat && (
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-300/60 text-sm font-bold text-[#8a5a1f]">
                <Users className="w-4 h-4 text-[#c9a24a]" />
                {stat.value} {stat.unit}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- OVERVIEW + AT A GLANCE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-[1fr_400px] gap-16">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-black text-[#221c0c] mb-3">Project Overview</h2>
            <p className="text-[#4a4230] text-sm sm:text-base leading-relaxed">{project.beneficiaries}</p>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-xl font-black text-[#221c0c] mb-5">Project Journey</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {[
                { icon: Compass, label: "Mobilization", desc: "Community sensitisation and baseline planning" },
                { icon: Milestone, label: "Implementation", desc: `On-ground delivery with ${project.funder}` },
                { icon: Flag, label: isCompleted ? "Completed" : "In Progress", desc: isCompleted ? "Project closed and handed over" : "Actively running today" },
              ].map((stage, i) => {
                const StageIcon = stage.icon;
                return (
                  <div key={stage.label} className="flex-1 relative">
                    <div className="flex items-center gap-3 sm:block">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          i < 2 || isCompleted ? "bg-amber-400 text-[#3a2a08]" : "bg-emerald-500 text-white animate-ring-pulse"
                        }`}
                      >
                        <StageIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="sm:mt-3">
                        <p className="font-bold text-sm text-[#221c0c]">{stage.label}</p>
                        <p className="text-xs text-[#7a6f55] mt-0.5">{stage.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Achievements / Challenges placeholder */}
          <div className="rounded-[24px] border border-dashed border-[#d9c98e] bg-white/60 backdrop-blur-md p-6">
            <p className="text-sm font-bold text-[#8a6a1f] mb-1">Detailed Achievements &amp; Challenges</p>
            <p className="text-xs text-[#7a6f55] leading-relaxed">
              Field-level achievements, challenges, and lessons learned for this project are being compiled and will be added here soon.
            </p>
          </div>

          {/* Photo Gallery */}
          <div>
            <h2 className="text-xl font-black text-[#221c0c] mb-5">Photo Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Cover Photo", "Gallery Image 01", "Gallery Image 02", "Gallery Image 03", "Gallery Image 04"].map((label) => (
                <div
                  key={label}
                  className="aspect-4/3 rounded-2xl bg-gradient-to-br from-[#faf3e3] to-[#f1e6cc] border border-[#e7ddc8] flex flex-col items-center justify-center gap-1.5 hover:-translate-y-1 hover:shadow-[0_15px_30px_-15px_rgba(180,130,40,0.4)] transition-all duration-300"
                >
                  <ImageIcon className="w-5 h-5 text-[#c9a24a]/50" />
                  <span className="text-[9px] font-bold uppercase tracking-wide text-[#a3711f]/60">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video placeholder */}
          <div>
            <h2 className="text-xl font-black text-[#221c0c] mb-5">Field Video</h2>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#221c0c] to-[#3a2f16] flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-10 h-10 text-white/40 mx-auto mb-2" />
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Video Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div>
            <h2 className="text-xl font-black text-[#221c0c] mb-5">Documents</h2>
            <div className="rounded-2xl border border-[#e7ddc8] bg-white/60 p-6 space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#c9a24a] shrink-0" />
                <p className="text-xs text-[#7a6f55]">Detailed project reports and downloadable documents are available on request.</p>
              </div>
              <a
                href={`mailto:info@effortindiango.org?subject=${encodeURIComponent(
                  "Full Project Profile Request: " + mainTitle
                )}`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#221c0c] text-white font-bold text-sm rounded-full hover:bg-[#3a2f16] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" /> Request Full Project Profile
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside ref={trackRef} className="relative">
        <div ref={innerRef} className="space-y-4">
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-amber-200/40 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-emerald-200/30 blur-[70px]" />
          </div>

          <div
            className={`rounded-[24px] border border-white/70 bg-white/55 backdrop-blur-xl shadow-[0_25px_50px_-30px_rgba(120,90,40,0.4)] p-6 space-y-5 transition-all duration-700 ${
              sidebarVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <CategoryIcon className="w-4 h-4 text-[#a3711f]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#a3711f]">{project.category}</span>
            </div>

            <div className="pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#a3711f] mb-1">Funding Partner</p>
              <p className="text-sm font-bold text-[#221c0c]">{project.funder}</p>
              <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-[#c9a24a]/15 text-[9px] font-bold uppercase tracking-wide text-[#8a6a1f]">
                {partnerType}
              </span>
            </div>

            <div className="pt-4 border-t border-white/70">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#a3711f] mb-1">Location</p>
              <p className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                <MapPin className="w-3.5 h-3.5" /> {location}
              </p>
            </div>

            <div className="relative pt-4 border-t border-white/70 overflow-hidden">
              {isCompleted && sidebarVisible && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 overflow-hidden">
                  {confettiParticles.map((c, i) => (
                    <span
                      key={i}
                      className={`absolute top-0 w-1.5 h-1.5 rounded-sm ${c.color} animate-confetti-fall`}
                      style={{ left: c.left, animationDelay: `${c.delay}s` }}
                    />
                  ))}
                </div>
              )}
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#a3711f] mb-1.5">Status</p>
              <span
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${
                  isCompleted ? "bg-emerald-500/15 text-emerald-700" : "bg-amber-400/20 text-[#8a6a1f]"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-check-pop" />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ring-pulse" />
                )}
                {isCompleted ? "Completed" : "Ongoing"}
              </span>
            </div>

            {stat && (
              <div className="pt-4 border-t border-white/70">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#a3711f] mb-1">Reach</p>
                <p className="text-3xl font-black text-metallic-gold">{reachValue.toLocaleString()}</p>
                <p className="text-xs text-[#7a6f55] capitalize">{stat.unit}</p>
              </div>
            )}
          </div>

          <div className="rounded-[24px] border border-white/70 bg-white/40 backdrop-blur-xl p-6 flex items-center gap-3 animate-glass-glow">
            <Award className="w-6 h-6 text-[#a3711f] shrink-0" />
            <p className="text-xs text-[#6b4f1d] leading-relaxed">Part of EFFORT&apos;s 27 years of documented, on-the-ground rural development work.</p>
          </div>
        </div>
        </aside>
      </section>

      {/* --- RELATED PROJECTS --- */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-xl font-black text-[#221c0c] mb-6">Related Projects</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map(({ p, i }) => {
              const RelIcon = CATEGORY_ICON[p.category] ?? ShieldCheck;
              return (
                <Link
                  key={p.name + i}
                  href={`/programs/${status}/${i + 1}`}
                  className="group rounded-2xl border border-[#e7ddc8] bg-white p-5 hover:border-[#c9a24a]/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#c9a24a]/10 text-[9px] font-bold uppercase tracking-wide text-[#8a6a1f] mb-2">
                    <RelIcon className="w-3 h-3" /> {p.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#221c0c] line-clamp-2 group-hover:text-[#a3711f] transition-colors duration-300">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#7a6f55] mt-2 line-clamp-2">{p.beneficiaries}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#a3711f] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#221c0c] text-white font-bold text-sm rounded-full hover:bg-[#3a2f16] transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Programs
        </Link>
      </section>
    </div>
  );
}
