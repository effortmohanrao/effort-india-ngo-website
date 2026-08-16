"use client";

import React, { use, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Landmark,
  MapPin,
  Award,
  Image as ImageIcon,
  FileText,
  ArrowRight,
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
  Users,
  Tractor,
  Leaf,
  Globe2,
  TrendingUp,
  Handshake,
  Quote,
  Sparkles,
  Target,
  Layers,
  Briefcase,
  X,
  ChevronRight,
  Check,
  BookOpen,
  PawPrint,
  TreePine,
  Coins,
  Recycle,
  Store,
  GraduationCap,
  CloudRain,
  Bug,
  QrCode,
} from "lucide-react";
import {
  Project,
  completedProjects,
  ongoingProjects,
  extractLocation,
  extractHeadlineStat,
  derivePartnerType,
  extractVillageCount,
  findFieldStory,
} from "../../data";
import { getProjectContent, type PillarIconKey } from "../../projectContent";

const PILLAR_ICON: Record<PillarIconKey, typeof Tractor> = {
  tractor: Tractor,
  users: Users,
  leaf: Leaf,
  droplets: Droplets,
  trending: TrendingUp,
  handshake: Handshake,
  heartPulse: HeartPulse,
  baby: Baby,
  shield: ShieldCheck,
  sprout: Sprout,
  trees: TreePine,
  coins: Coins,
  recycle: Recycle,
  store: Store,
  graduationCap: GraduationCap,
  cloudRain: CloudRain,
  bug: Bug,
  qrCode: QrCode,
  book: BookOpen,
  paw: PawPrint,
  briefcase: Briefcase,
};

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

const ACCENT: Record<string, { bar: string; bg: string; text: string; border: string }> = {
  emerald: { bar: "bg-emerald-400", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-400" },
  amber: { bar: "bg-amber-400", bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-400" },
  teal: { bar: "bg-teal-400", bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-400" },
  sky: { bar: "bg-sky-400", bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-400" },
  rose: { bar: "bg-rose-400", bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-400" },
  violet: { bar: "bg-violet-400", bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-400" },
  blue: { bar: "bg-blue-400", bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-400" },
};

const IMPACT_HIGHLIGHTS = [
  { icon: Tractor, title: "Sustainable Farming", text: "Practices designed to improve yields while protecting soil health for the long term.", color: "emerald" },
  { icon: Users, title: "Farmer Empowerment", text: "Hands-on training that builds lasting knowledge, not one-time handouts.", color: "amber" },
  { icon: Globe2, title: "Environmental Benefits", text: "Reduced chemical dependency and stronger natural resource stewardship.", color: "teal" },
  { icon: Droplets, title: "Water Conservation", text: "Water-efficient techniques that ease pressure on scarce local resources.", color: "sky" },
  { icon: TrendingUp, title: "Income Growth", text: "New skills translating into steadier, more resilient household incomes.", color: "rose" },
  { icon: Handshake, title: "Community Participation", text: "Local ownership at every stage, from planning through to practice.", color: "violet" },
];

const CATEGORY_INSIGHT: Record<string, string> = {
  "Sustainable Agriculture": "Centred on hands-on farmer training and better cultivation practices that improve yields while protecting soil and water for the long term.",
  "Natural Resource Management": "Focused on protecting and better managing shared natural resources — water, soil and land — for the whole community.",
  "Community Health": "Built around improving everyday health outcomes and access to care for underserved households.",
  "Child Development": "Aimed at giving children safer, more supportive environments to learn and grow.",
  "Child, Women Development & Livelihoods": "Centred on strengthening women-led livelihoods and household income security.",
};

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

function AchievementCard({
  project,
  isCompleted,
  location,
  partnerType,
}: {
  project: Project;
  isCompleted: boolean;
  location: string;
  partnerType: string;
}) {
  const stat = extractHeadlineStat(project);
  const CategoryIcon = CATEGORY_ICON[project.category] ?? ShieldCheck;

  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);
  const reachValue = useCountUp(stat?.numeric ?? null, entered);

  {/* Explosive Rapid Millisecond Continuous Cracker Particle Emitter */}
  const crackerParticles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const dist = 75 + (i % 5) * 22;
        const dx = Math.round(Math.cos(angle) * dist);
        const dy = Math.round(Math.sin(angle) * dist);
        return {
          dx,
          dy,
          delay: (i * 0.065).toFixed(2),
          color: ["bg-amber-400", "bg-emerald-400", "bg-[#d4af6a]", "bg-sky-400", "bg-rose-400"][i % 5],
          size: i % 3 === 0 ? 6.5 : 4,
        };
      }),
    []
  );

  return (
    <div
      className={`group/card relative rounded-[32px] p-6 sm:p-7 overflow-hidden bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_22px_60px_-20px_rgba(180,140,40,0.32)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_32px_75px_-20px_rgba(180,140,40,0.42)] ${
        entered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-6"
      }`}
    >
      {/* Glass Ambient Lighting & Mesh Backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fffdf8] via-[#fbf3db] to-[#f4e6b8] opacity-80" />
      <div className="pointer-events-none absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-200/50 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 w-56 h-56 rounded-full bg-emerald-200/40 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.2]" />

      {/* Interactive Sheen Light Sweep Ray on Hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-light-sweep" />
      </div>

      {/* Rapid Millisecond Continuous Cracker Blast Effect */}
      {isCompleted && entered && (
        <div className="pointer-events-none absolute top-10 right-10 z-30">
          {crackerParticles.map((p, i) => (
            <span
              key={i}
              className={`absolute rounded-full ${p.color} shadow-[0_0_8px_#d4af6a] animate-cracker-burst-rapid`}
              style={
                {
                  width: p.size,
                  height: p.size,
                  "--burst-vector": `translate(${p.dx}px, ${p.dy}px)`,
                  animationDelay: `${p.delay}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}

      <div className="relative z-10 space-y-4.5">
        {/* Category Pill */}
        <div className="inline-flex flex-col">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-[11px] font-black uppercase tracking-wider text-[#8a6a1f] shadow-sm">
            <CategoryIcon className="w-3.5 h-3.5 text-[#c9a24a]" /> {project.category}
          </span>
          <span className="h-[2px] w-10 mt-1.5 bg-gradient-to-r from-[#d4af6a] to-transparent rounded-full" />
        </div>

        {/* Funding Partner Card */}
        <div className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#e5d4a1] shadow-sm flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 shadow-sm">
            <Landmark className="w-4.5 h-4.5 text-amber-700" />
          </div>
          <div className="min-w-0">
            <p className="text-[9.5px] font-black uppercase tracking-wider text-[#8a6a1f] mb-0.5">Funding Partner</p>
            <p className="text-sm font-black text-[#221c0c] leading-snug">{project.funder}</p>
            <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[9.5px] font-bold border border-emerald-200">
              <ShieldCheck className="w-3 h-3 text-emerald-600" /> {partnerType}
            </span>
          </div>
        </div>

        {/* Location Badge */}
        <div className="group/loc relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#d4af6a]/60 shadow-sm cursor-default">
          <MapPin className="w-3.5 h-3.5 text-[#c9a24a]" />
          <span className="text-xs font-black text-[#3a2f18]">{location}</span>
        </div>

        {/* Status & Beneficiaries Grid */}
        <div className="grid grid-cols-2 gap-3 pt-3.5 border-t border-[#e5d4a1]">
          <div>
            <p className="text-[9.5px] font-black uppercase tracking-wider text-[#8a6a1f] mb-1.5">Status</p>
            <div className="relative w-10.5 h-10.5">
              <svg viewBox="0 0 44 44" className="w-10.5 h-10.5 -rotate-90">
                <circle cx="22" cy="22" r="19" fill="none" stroke="#f1e6cc" strokeWidth="3" />
                {isCompleted && (
                  <circle
                    cx="22"
                    cy="22"
                    r="19"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray="119"
                    style={{
                      strokeDashoffset: entered ? 0 : 119,
                      transition: "stroke-dashoffset 1.2s ease-out 0.3s",
                      filter: "drop-shadow(0 0 6px rgba(16,185,129,0.5))",
                    }}
                  />
                )}
              </svg>
              {isCompleted && (
                <CheckCircle2
                  className="w-4.5 h-4.5 text-emerald-600 absolute inset-0 m-auto animate-check-pop"
                  style={{ animationDelay: "1.3s" }}
                />
              )}
            </div>
            <p className="text-[11px] font-black text-emerald-800 mt-1">{isCompleted ? "Completed" : "Ongoing"}</p>
          </div>
          {stat && (
            <div>
              <p className="text-[9.5px] font-black uppercase tracking-wider text-[#8a6a1f] mb-1.5">Beneficiaries</p>
              <p className="text-2xl sm:text-3xl font-black text-metallic-gold leading-none drop-shadow-sm">{reachValue.toLocaleString()}</p>
              <p className="text-[11px] text-[#7a6f55] font-bold capitalize mt-1">{stat.unit}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2.5 pt-1.5">
          <a
            href="#overview"
            className="group/btn inline-flex items-center gap-1.5 px-5.5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-[11px] uppercase tracking-wider rounded-full hover:pr-7.5 transition-[padding] duration-400 shadow-[0_12px_25px_-10px_rgba(5,150,105,0.5)]"
          >
            View Project Story <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#gallery"
            className="group/btn2 relative inline-flex items-center px-5.5 py-2.5 border-2 border-[#d4af6a] text-[#8a5a1f] font-black text-[11px] uppercase tracking-wider rounded-full overflow-hidden bg-white/50 backdrop-blur-sm"
          >
            <span className="relative z-10">Open Case Study</span>
            <span className="absolute left-5.5 right-5.5 bottom-2 h-[1.5px] bg-[#d4af6a] scale-x-0 group-hover/btn2:scale-x-100 origin-left transition-transform duration-400" />
          </a>
        </div>

        {/* Footer Ribbon */}
        <div className="relative flex flex-wrap items-center gap-2 pt-3.5 mt-1 border-t border-[#e5d4a1] overflow-hidden">
          <div className="absolute inset-x-0 top-3.5 h-px overflow-hidden">
            <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent animate-light-sweep" />
          </div>
          <Award className="w-3.5 h-3.5 text-[#8a6a1f] shrink-0" />
          <p className="text-[10.5px] font-black text-[#6b4f1d]">Verified Project</p>
          <span className="w-1 h-1 rounded-full bg-[#8a6a1f]/40" />
          <p className="text-[10.5px] font-black text-[#6b4f1d]">27 Years of Impact</p>
        </div>
      </div>
    </div>
  );
}

function AchievementProgress({ isCompleted }: { isCompleted: boolean }) {
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  {/* Explosive Rapid Millisecond Continuous Cracker Particle Emitter */}
  const crackerParticles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const dist = 75 + (i % 5) * 22;
        const dx = Math.round(Math.cos(angle) * dist);
        const dy = Math.round(Math.sin(angle) * dist);
        return {
          dx,
          dy,
          delay: (i * 0.065).toFixed(2),
          color: ["bg-amber-400", "bg-emerald-400", "bg-[#d4af6a]", "bg-sky-400", "bg-rose-400"][i % 5],
          size: i % 3 === 0 ? 6.5 : 4,
        };
      }),
    []
  );

  return (
    <div className="relative">
      <div
        className={`group/prog relative overflow-hidden rounded-[30px] p-5 sm:p-6 bg-white/90 backdrop-blur-2xl border-2 border-[#e2ecdf] shadow-[0_20px_50px_-20px_rgba(80,120,100,0.25)] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_30px_65px_-20px_rgba(80,140,120,0.35)] ${
          entered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.92] translate-y-6"
        }`}
      >
        {/* Ambient Glow & Particles */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-amber-50/40 to-sky-50/50" />
        <div className="pointer-events-none absolute -top-16 -left-10 w-52 h-52 rounded-full bg-emerald-200/40 blur-[70px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 w-56 h-56 rounded-full bg-amber-200/40 blur-[80px]" />
        <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.2]" />

        {/* Rapid Millisecond Continuous Cracker Blast Effect */}
        {isCompleted && entered && (
          <div className="pointer-events-none absolute top-8 right-8 z-30">
            {crackerParticles.map((p, i) => (
              <span
                key={i}
                className={`absolute rounded-full ${p.color} shadow-[0_0_8px_#d4af6a] animate-cracker-burst-rapid`}
                style={
                  {
                    width: p.size,
                    height: p.size,
                    "--burst-vector": `translate(${p.dx}px, ${p.dy}px)`,
                    animationDelay: `${p.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        )}

        <div className="relative z-10 space-y-4">
          {/* Header Row: Label & Inline Status Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#221c0c]">
                {isCompleted ? "Project Success Rate" : "Project Execution Progress"}
              </span>
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-sm"
                  : "bg-amber-100 text-amber-900 border border-amber-300 shadow-sm"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              {isCompleted ? "Verified & Handed Over" : "Active Field Delivery"}
            </span>
          </div>

          {/* Main Display Row: 100% Count + Progress Bar */}
          <div className="grid sm:grid-cols-[auto_1fr] gap-5 sm:gap-8 items-center">
            {/* 100% Numeric Display */}
            <div className="relative shrink-0">
              <p className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600 leading-none drop-shadow-sm">
                {isCompleted ? "100%" : "In Motion"}
              </p>
              {isCompleted && (
                <Sparkles className="pointer-events-none absolute -top-2.5 -right-4 w-5 h-5 text-amber-500 animate-pulse" />
              )}
            </div>

            {/* Progress Bar & Field Outcome Message */}
            <div className="space-y-2 min-w-0">
              <div className="relative h-4 rounded-full bg-stone-100 border border-stone-200 p-0.5 overflow-hidden shadow-inner">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 transition-all duration-1000 shadow-md ${
                    isCompleted ? "w-full" : "w-2/5"
                  }`}
                />
                <div className="absolute inset-y-0 left-0 w-full overflow-hidden rounded-full pointer-events-none">
                  <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-light-sweep" />
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-[#5b6a60]">
                <span>Stage 1: Mobilization</span>
                <span>{isCompleted ? "Stage 2: Execution" : "Stage 2: Ongoing Execution"}</span>
                <span className={`font-black ${isCompleted ? "text-emerald-700" : "text-amber-700"}`}>
                  {isCompleted ? "100% Verified" : "In Progress"}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Field Confirmation Banner */}
          <div className="pt-3 border-t border-stone-200/80 flex items-center gap-2.5">
            <Award className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
            <p className="text-xs font-bold text-[#221c0c] leading-snug">
              {isCompleted
                ? "This project has been 100% verified, independently audited, and officially handed over to the community."
                : "Active field operations are underway with direct community oversight."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ status: string; id: string }>;
}) {
  const { status, id } = use(params);
  const router = useRouter();
  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/programs");
    }
  };
  const list = getList(status);
  const index = parseInt(id, 10) - 1;
  const project = list && Number.isInteger(index) ? list[index] : undefined;

  if (!list || !project) notFound();

  const isCompleted = status === "completed";
  const location = extractLocation(project);
  const partnerType = derivePartnerType(project.funder);
  const CategoryIcon = CATEGORY_ICON[project.category] ?? ShieldCheck;
  const stat = extractHeadlineStat(project);
  const villageCount = extractVillageCount(project);
  const fieldStory = findFieldStory(project);
  const content = getProjectContent(project);
  const [activeTab, setActiveTab] = useState<"mission" | "interventions" | "stakeholders">("mission");
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [realPhotos, setRealPhotos] = useState<{ key: string; url: string }[]>([]);

  useEffect(() => {
    fetch(`/api/site/media?prefix=programs/${status}/p${index + 1}/gallery`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const ownPhotos = data.images ?? [];
        if (ownPhotos.length > 0) {
          setRealPhotos(ownPhotos);
          return;
        }
        if (!project.photoFolder) return;
        fetch(`/api/site/media?prefix=programs/${status}/${project.photoFolder}`, { cache: "no-store" })
          .then((res) => res.json())
          .then((folderData) => setRealPhotos(folderData.images ?? []))
          .catch(() => {});
      })
      .catch(() => {});
  }, [index, project.photoFolder, status]);

  const [mainTitle, ...subInitiatives] = project.name.split(";").map((s) => s.trim());

  const achievements = [
    stat && {
      icon: Users,
      title: `${stat.value} ${stat.unit}`,
      desc: "Direct beneficiaries reached through this project.",
      color: "amber",
    },
    villageCount && {
      icon: MapPin,
      title: `${villageCount} Villages Covered`,
      desc: "Geographic reach across the district.",
      color: "emerald",
    },
    { icon: ShieldCheck, title: partnerType, desc: `Delivered in partnership with ${project.funder}.`, color: "blue" },
    { icon: Leaf, title: project.category, desc: "Core focus area of this initiative.", color: "teal" },
    { icon: Handshake, title: "Community-Led Implementation", desc: "Delivered directly with local communities.", color: "violet" },
    isCompleted && { icon: Award, title: "Successfully Completed", desc: "Project closed and formally handed over.", color: "rose" },
  ].filter(Boolean) as { icon: typeof Users; title: string; desc: string; color: string }[];

  const relatedPool = list
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i !== index);
  const sameFunder = relatedPool.filter(({ p }) => p.funder === project.funder);
  const others = relatedPool.filter(({ p }) => p.funder !== project.funder);
  const related = [...sameFunder, ...others].slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fdfaf4]">
      {/* --- HERO BANNER + ACHIEVEMENT CARD --- */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf4] via-[#fbf5e6] to-[#f6ecd2]" />
          <div className="absolute -top-24 -right-20 w-[420px] h-[420px] rounded-full bg-amber-100/60 blur-[110px] animate-liquid-drift-a" />
          <div className="absolute -bottom-20 -left-16 w-[360px] h-[360px] rounded-full bg-emerald-100/50 blur-[110px] animate-liquid-drift-b" />
          <div className="absolute inset-0 bg-noise opacity-[0.25]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_440px] gap-12 items-start">
          <div>
            <button
              type="button"
              onClick={handleBack}
              className="group relative inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#d4af6a]/60 text-xs font-black uppercase tracking-wider text-[#7a5a18] shadow-[0_10px_25px_-8px_rgba(212,175,106,0.4)] hover:bg-white hover:border-[#b88c30] hover:text-[#5a3f0e] hover:shadow-[0_15px_30px_-5px_rgba(212,175,106,0.65)] hover:-translate-y-0.5 transition-all duration-300 mb-8 overflow-hidden cursor-pointer"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-amber-100/50 via-white/80 to-amber-100/50" />
              <div className="w-6 h-6 rounded-full bg-amber-100/80 border border-[#d4af6a]/50 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors duration-300 relative z-10 shadow-sm">
                <ArrowLeft className="w-3.5 h-3.5 text-[#7a5a18] group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-300" />
              </div>
              <span className="relative z-10">Back to Programs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse relative z-10 ml-0.5 shadow-[0_0_6px_#10b981]" />
            </button>

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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-milestone-shift leading-[1.18] max-w-2xl">
              {mainTitle}
            </h1>
            {subInitiatives.length > 0 && (
              <p className="text-[#8a6a1f] text-sm sm:text-base font-medium mt-3 max-w-xl leading-relaxed">
                Also includes: {subInitiatives.join(" · ")}
              </p>
            )}

            <div className="mt-6 sm:mt-7">
              <AchievementProgress isCompleted={isCompleted} />
            </div>
          </div>

          <AchievementCard project={project} isCompleted={isCompleted} location={location} partnerType={partnerType} />
        </div>
      </section>

      {/* --- OVERVIEW & PROJECT STORY --- */}
      <section id="overview" className="relative overflow-hidden py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf4] via-[#f4f9f5] to-[#fdfaf4]" />
          <div className="absolute top-10 left-1/4 w-[420px] h-[420px] rounded-full bg-emerald-100/40 blur-[120px] animate-liquid-drift-a" />
          <div className="absolute top-1/2 right-10 w-[380px] h-[380px] rounded-full bg-amber-100/40 blur-[120px] animate-liquid-drift-b" />
          <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-sky-100/40 blur-[120px]" />
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#d9c98e] text-[#8a6a1f] text-xs font-bold uppercase tracking-wider shadow-sm">
              <CategoryIcon className="w-3.5 h-3.5 text-[#c9a24a]" /> The Project Story & Field Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#221c0c]">
              {content.missionHeader}
            </h2>
            <p className="text-base sm:text-lg text-[#5b6a60] leading-relaxed">
              {content.regionalNeedText}
            </p>
          </div>

          {/* Key Metrics Stats Bar (4 Frosted Glass Stat Cards) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
            <div className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-[0_20px_45px_-20px_rgba(80,120,100,0.25)] hover:-translate-y-1.5 transition-all duration-400">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8a6a1f]">Direct Reach</p>
              <p className="text-2xl sm:text-3xl font-black text-metallic-gold mt-1 leading-none">
                {stat ? stat.value : "Community"}
              </p>
              <p className="text-xs text-[#7a6f55] capitalize mt-1">
                {stat ? stat.unit : "Beneficiaries Empowered"}
              </p>
            </div>

            <div className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-[0_20px_45px_-20px_rgba(80,120,100,0.25)] hover:-translate-y-1.5 transition-all duration-400">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Geographic Footprint</p>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700 mt-1 leading-none">
                {villageCount ? `${villageCount} Villages` : "Multi-Village"}
              </p>
              <p className="text-xs text-[#7a6f55] mt-1 line-clamp-1">{location}</p>
            </div>

            <div className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-[0_20px_45px_-20px_rgba(80,120,100,0.25)] hover:-translate-y-1.5 transition-all duration-400">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-3">
                <Landmark className="w-5 h-5 text-sky-600" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-sky-800">Funding & Support</p>
              <p className="text-sm font-black text-[#221c0c] mt-1 line-clamp-2 leading-snug">
                {project.funder}
              </p>
              <p className="text-[10px] font-bold text-sky-700 uppercase tracking-wide mt-1">{partnerType}</p>
            </div>

            <div className="group relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 shadow-[0_20px_45px_-20px_rgba(80,120,100,0.25)] hover:-translate-y-1.5 transition-all duration-400">
              <div className="w-10 h-10 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center mb-3">
                <Award className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-violet-800">Verification Status</p>
              <p className="text-2xl sm:text-3xl font-black text-violet-700 mt-1 leading-none">
                {isCompleted ? "100%" : "Active"}
              </p>
              <p className="text-xs text-[#7a6f55] mt-1">
                {isCompleted ? "Verified & Handed Over" : "Ongoing Field Operations"}
              </p>
            </div>
          </div>

          {/* Interactive 3-Tab Story Navigator */}
          <div className="rounded-[36px] bg-white/50 backdrop-blur-2xl border border-white/80 shadow-[0_30px_70px_-25px_rgba(80,120,100,0.25)] p-6 sm:p-10 mb-16">
            {/* Tab Pill Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 pb-6 border-b border-[#e5dcc6]">
              <button
                onClick={() => setActiveTab("mission")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "mission"
                    ? "bg-[#221c0c] text-white shadow-[0_10px_25px_-8px_rgba(34,28,12,0.5)] scale-105"
                    : "bg-white/80 text-[#5b6a60] hover:bg-white hover:text-[#221c0c] border border-white/80"
                }`}
              >
                <Target className="w-4 h-4 text-[#d4af6a]" /> 1. Mission & Context
              </button>
              <button
                onClick={() => setActiveTab("interventions")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "interventions"
                    ? "bg-[#221c0c] text-white shadow-[0_10px_25px_-8px_rgba(34,28,12,0.5)] scale-105"
                    : "bg-white/80 text-[#5b6a60] hover:bg-white hover:text-[#221c0c] border border-white/80"
                }`}
              >
                <Layers className="w-4 h-4 text-emerald-400" /> 2. Methodologies & Actions
              </button>
              <button
                onClick={() => setActiveTab("stakeholders")}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "stakeholders"
                    ? "bg-[#221c0c] text-white shadow-[0_10px_25px_-8px_rgba(34,28,12,0.5)] scale-105"
                    : "bg-white/80 text-[#5b6a60] hover:bg-white hover:text-[#221c0c] border border-white/80"
                }`}
              >
                <Handshake className="w-4 h-4 text-sky-400" /> 3. Partner & Stakeholder Model
              </button>
            </div>

            {/* Tab Panes */}
            {activeTab === "mission" && (
              <div className="grid lg:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#a3711f]">Context & Need</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#221c0c]">
                    Addressing Root Challenges in {location}
                  </h3>
                  <p className="text-[#4a5952] leading-relaxed text-sm sm:text-base">
                    {content.missionContextText}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" /> {isCompleted ? "Target Group Covered" : "Target Group Identified"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                      <Check className="w-3.5 h-3.5" /> Verified Field Baseline
                    </span>
                  </div>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-sky-500/10 p-8 border border-white/60 space-y-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8a6a1f]">Core Strategic Objectives</p>
                  <h4 className="text-lg font-black text-[#221c0c]">{mainTitle}</h4>
                  <div className="space-y-3 text-xs text-[#3f4d47]">
                    {content.coreObjectivePoints.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#c9a24a] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "interventions" && (
              <div className="grid lg:grid-cols-3 gap-6 animate-fade-in">
                {content.interventionsPillars.map((p, idx) => (
                  <div key={idx} className="rounded-3xl bg-white/70 border border-white p-6 shadow-sm space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-black">0{idx + 1}</div>
                    <h4 className="font-black text-[#221c0c]">{p.title}</h4>
                    <p className="text-xs text-[#4a5952] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "stakeholders" && (
              <div className="grid lg:grid-cols-2 gap-8 items-center animate-fade-in">
                <div className="space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-700">Strategic Alignment</span>
                  <h3 className="text-2xl font-black text-[#221c0c]">Supported by {project.funder}</h3>
                  <p className="text-sm text-[#4a5952] leading-relaxed">
                    EFFORT NGO partners with statutory bodies, government departments, international non-profits, and corporate CSR arms to deliver high-accountability social development projects.
                  </p>
                  <div className="p-4 rounded-2xl bg-white/70 border border-white space-y-2">
                    <p className="text-xs font-bold text-[#221c0c]">Institutional Classification:</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-extrabold">
                      {partnerType}
                    </span>
                  </div>
                </div>
                <div className="rounded-3xl bg-white/70 border border-white p-6 space-y-4">
                  <h4 className="font-black text-[#221c0c] text-sm uppercase tracking-wider">Governance Framework</h4>
                  <ul className="space-y-3 text-xs text-[#4a5952]">
                    {content.governancePoints.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Stepper / Field Journey with Animated Cards & Icons */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#e7ddc8] text-[#8a6a1f] text-xs font-bold uppercase tracking-wider">
                <Milestone className="w-3.5 h-3.5 text-[#c9a24a]" /> Implementation Roadmap
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#221c0c]">
                4-Stage Execution Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-[#5b6a60]">
                Click any stage card to explore field milestones and action items.
              </p>
            </div>

            {/* Connecting Flow Pipeline (Desktop) */}
            <div className="relative">
              <div className="hidden lg:block absolute top-[52px] inset-x-12 h-1 bg-gradient-to-r from-amber-200 via-emerald-200 via-sky-200 to-violet-200 rounded-full z-0 overflow-hidden shadow-inner">
                <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent animate-light-sweep" />
              </div>

              {/* 4 Animated Stage Cards */}
              <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.blueprintStages.map((s, idx) => {
                  const SIcon = idx === 0 ? Compass : idx === 1 ? Milestone : idx === 2 ? Flag : Award;
                  const isSelected = activeStage === idx;
                  const iconClass = idx === 0 ? "group-hover:rotate-[360deg] transition-transform duration-1000 ease-out" :
                                    idx === 1 ? "group-hover:-translate-y-2 group-hover:scale-110 transition-transform duration-400 ease-out" :
                                    idx === 2 ? "group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-400 ease-out" :
                                    "group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500 text-violet-600";

                  return (
                    <div
                      key={s.stage}
                      onClick={() => setActiveStage(idx)}
                      className={`group relative rounded-[32px] p-6 cursor-pointer backdrop-blur-2xl border transition-all duration-500 overflow-hidden ${
                        isSelected
                          ? "bg-white border-[#d4af6a] shadow-[0_25px_60px_-15px_rgba(212,175,106,0.45)] -translate-y-2 ring-2 ring-[#d4af6a]/40"
                          : "bg-white/60 border-white/80 hover:bg-white hover:border-[#d4af6a]/60 hover:-translate-y-2 hover:shadow-[0_20px_45px_-20px_rgba(180,140,40,0.3)]"
                      }`}
                    >
                      {/* Diagonal Light Sweep Effect on Hover */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      </div>

                      {/* Header with Stage Number & Animated Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-3xl font-black transition-all duration-300 ${
                              isSelected ? "text-[#d4af6a] scale-110" : "text-[#d4af6a]/60 group-hover:text-[#d4af6a]"
                            }`}
                          >
                            {s.stage}
                          </span>
                          <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100/70 text-[#8a6a1f]">
                            {s.phase}
                          </span>
                        </div>

                        {/* Animated Icon Box */}
                        <div
                          className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-md ${
                            s.color === "amber"
                              ? "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700 border border-amber-200/80"
                              : s.color === "emerald"
                              ? "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 border border-emerald-200/80"
                              : s.color === "sky"
                              ? "bg-gradient-to-br from-sky-50 to-sky-100 text-sky-700 border border-sky-200/80"
                              : "bg-gradient-to-br from-violet-50 to-violet-100 text-violet-700 border border-violet-200/80"
                          }`}
                        >
                          <span className="absolute inset-0 rounded-2xl bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                          <SIcon className={`w-6 h-6 relative z-10 ${iconClass}`} />
                        </div>
                      </div>

                      <h4 className="font-black text-[#221c0c] mb-2 text-base group-hover:text-[#8a6a1f] transition-colors">
                        {s.title}
                      </h4>
                      <p className="text-xs text-[#7a6f55] leading-relaxed mb-4">{s.desc}</p>

                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#c9a24a]">
                          {isSelected ? "Active Milestone" : "View Details"}
                        </span>
                        <ChevronRight
                          className={`w-4 h-4 text-[#c9a24a] transition-transform duration-300 ${
                            isSelected ? "translate-x-1 rotate-90" : "group-hover:translate-x-1"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Selected Stage Action Items Panel */}
              <div className="mt-8 rounded-3xl bg-white/80 backdrop-blur-2xl border border-white p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(80,120,100,0.2)] animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#221c0c] text-white text-xs font-black flex items-center justify-center">
                      0{activeStage + 1}
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#8a6a1f]">Project Action Items</p>
                      <h4 className="text-lg font-black text-[#221c0c]">
                        {content.blueprintStages[activeStage]?.title}
                      </h4>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold w-fit ${
                    isCompleted ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                  }`}>
                    {isCompleted ? <Check className="w-3.5 h-3.5" /> : <Compass className="w-3.5 h-3.5" />}
                    {isCompleted ? "Stage Completed" : "Field Blueprint"}
                  </span>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {content.blueprintStages[activeStage]?.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white/70 border border-white shadow-sm">
                      <div className={`w-5 h-5 rounded-full text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${
                        isCompleted ? "bg-emerald-500" : "bg-amber-500"
                      }`}>
                        {isCompleted ? "✓" : "•"}
                      </div>
                      <p className="text-xs font-medium text-[#3f4d47] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Transformation Pillars (Impact Highlights Grid) */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#e7ddc8] text-[#a3711f] text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" /> Transformation Pillars
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#221c0c]">
                {isCompleted ? "What This Project Achieved In Practice" : "What This Project Is Working Toward"}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.impactPillars.map((h, idx) => {
                const HIcon = PILLAR_ICON[h.icon];
                const a = ACCENT[h.color];
                return (
                  <div
                    key={h.title + idx}
                    className="group relative rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/80 p-6 pl-7 shadow-[0_20px_45px_-25px_rgba(120,90,40,0.25)] hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-20px_rgba(120,90,40,0.35)] transition-all duration-400 overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 w-1.5 h-full ${a.bar}`} />
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${a.bg}`}>
                      <HIcon className={`w-6 h-6 ${a.text}`} />
                    </div>
                    <h4 className="font-black text-[#221c0c] mb-1.5">{h.title}</h4>
                    <p className="text-xs text-[#7a6f55] leading-relaxed">{h.text}</p>
                    <span className={`block h-[2px] w-8 mt-4 rounded-full group-hover:w-14 transition-all duration-400 ${a.bar}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* --- PHOTO STORY GALLERY (Capped at 6 Tiles + Interactive Lightbox) --- */}
      <section id="gallery" className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf4] via-[#f3f8f5] to-[#fdfaf4]" />
          <div className="absolute top-1/4 left-1/3 w-[380px] h-[380px] rounded-full bg-sky-100/40 blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-[340px] h-[340px] rounded-full bg-emerald-100/40 blur-[100px]" />
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#e7ddc8] text-[#a3711f] text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5" /> Curated Photo Story
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#221c0c]">Moments From the Field</h2>
            <p className="text-xs sm:text-sm text-[#5b6a60]">Click any image to view details and field context.</p>
          </div>

          {/* Curated Gallery Grid — real field photos when available, honest icon placeholder otherwise */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {content.galleryCaptions.map((tile) => {
              const photo = realPhotos[tile.id];
              return (
                <div
                  key={tile.id}
                  onClick={() => setActivePhoto(tile.id)}
                  className="group relative rounded-3xl overflow-hidden bg-white/50 backdrop-blur-xl border border-white/80 aspect-[4/3] cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-25px_rgba(80,120,100,0.35)] transition-all duration-400"
                >
                  {photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo.url} alt={tile.label} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-amber-500/10 to-sky-500/10 flex items-center justify-center">
                      <ImageIcon className="w-10 h-10 text-[#5b7a68]/40 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-[#221c0c]/85 via-[#221c0c]/50 to-transparent">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#d4af6a] text-[9px] font-black uppercase tracking-wider text-[#221c0c] mb-1">
                      {tile.tag}
                    </span>
                    <p className="text-xs font-bold text-white leading-snug">{tile.label}</p>
                    <p className="text-[10px] text-white/70 mt-0.5">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Lightbox Modal */}
          {activePhoto !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
              <div className="relative max-w-xl w-full rounded-3xl bg-[#1c1810] border border-[#d4af6a]/40 p-6 text-white shadow-2xl space-y-4">
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                {realPhotos[activePhoto] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={realPhotos[activePhoto].url} alt="" className="w-full max-h-72 object-cover rounded-2xl" />
                )}
                <span className="inline-block px-3 py-1 rounded-full bg-[#d4af6a] text-[#221c0c] text-xs font-black uppercase tracking-wider">
                  Field Photo #{activePhoto + 1}
                </span>
                <h3 className="text-xl font-black text-white">
                  {content.galleryCaptions[activePhoto]?.label}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {content.galleryCaptions[activePhoto]?.modalDesc}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-stone-800 text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                  <span>Category: {project.category}</span>
                  <span>Partner: {project.funder}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* --- PROJECT LEGACY & VERIFIED FIELD STORY --- */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfaf4] via-[#fbf5e6] to-[#f6ecd2]" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-amber-100/40 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-emerald-100/30 blur-[100px]" />
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quote Card */}
          <div className="rounded-[36px] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_30px_70px_-25px_rgba(120,90,40,0.3)] p-8 sm:p-12 text-center">
            <Quote className="w-10 h-10 text-[#d4af6a] mx-auto mb-4 opacity-80" />
            <p className="text-xl sm:text-2xl italic text-[#221c0c] leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
              &ldquo;{fieldStory ? fieldStory.quote : "Long after a project closes, the practices, partnerships, and confidence it built continue working in the community."}&rdquo;
            </p>
            <p className="text-sm font-black text-[#8a6a1f] mt-5">
              {fieldStory ? `— ${fieldStory.person}, ${fieldStory.place}` : "— Beneficiary Voice, EFFORT"}
            </p>
            <p className="text-xs text-[#7a6f55] mt-4 max-w-xl mx-auto leading-relaxed">
              The skills, water assets, and local CBO capacity established during this initiative remain fully operational today.
            </p>
          </div>

          {/* Profile Download / Mailto Card */}
          <div className="rounded-3xl bg-[#221c0c] text-white p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#d4af6a]/30">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4af6a]">Official Documentation</span>
              <h4 className="text-lg font-black text-white">Need Full Project Documentation & Audit Reports?</h4>
              <p className="text-xs text-stone-300">Request comprehensive project case studies, financial audits, and beneficiary rosters.</p>
            </div>
            <a
              href={`mailto:info@effortngo.org?subject=${encodeURIComponent(
                "Full Project Dossier Request: " + mainTitle
              )}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#d4af6a] text-[#221c0c] font-black text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 shrink-0 shadow-lg"
            >
              <Mail className="w-4 h-4" /> Request Dossier <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* --- RELATED PROJECTS --- */}
      {related.length > 0 && (
        <section className="relative overflow-hidden py-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#f3f8f5] to-[#fdfaf4]" />
            <div className="absolute inset-0 bg-noise opacity-[0.2]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8a6a1f]">Explore Similar Work</span>
                <h3 className="text-xl font-black text-[#221c0c]">Related Initiatives</h3>
              </div>
              <Link
                href="/programs"
                className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#8a6a1f] hover:text-[#221c0c] transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map(({ p, i }) => {
                const RelIcon = CATEGORY_ICON[p.category] ?? ShieldCheck;
                return (
                  <Link
                    key={p.name + i}
                    href={`/programs/${status}/${i + 1}`}
                    className="group rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 hover:border-[#c9a24a] hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a24a]/15 text-[10px] font-black uppercase tracking-wider text-[#8a6a1f] mb-3">
                      <RelIcon className="w-3 h-3" /> {p.category}
                    </span>
                    <h4 className="text-sm font-black text-[#221c0c] line-clamp-2 group-hover:text-[#a3711f] transition-colors leading-snug">
                      {p.name}
                    </h4>
                    <p className="text-xs text-[#7a6f55] mt-2 line-clamp-2 leading-relaxed">{p.beneficiaries}</p>
                    <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#a3711f]">
                      <span>{p.funder}</span>
                      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                        Details <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* --- BACK TO PROGRAMS FOOTER NAV --- */}
      <section className="relative overflow-hidden py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#221c0c] text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-[#3a2f16] transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#d4af6a]" /> Back to All Programs
          </button>
        </div>
      </section>
    </div>
  );
}

