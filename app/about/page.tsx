"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Users,
  Sparkles,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Heart,
  Handshake,
  Star,
  Download,
  Eye,
  Lightbulb,
  Sprout,
  Compass,
  Target,
  Zap,
  Quote,
  Scale,
  BookOpen,
  TrendingUp,
  Play,
  Award,
  ChevronLeft,
  ChevronRight,
  Gem,
  UserCircle2,
  Mail
} from "lucide-react";
import { LinkedinIcon } from "@/components/icons/SocialIcons";

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

const aboutHeroLines = ["Building Hope.", "Creating Change.", "Transforming Communities."];

const aboutHeroPanels: { icon: typeof Globe2; label: string; value: string }[] = [
  { icon: Globe2, label: "Communities Served", value: "120+" },
  { icon: Heart, label: "Lives Impacted", value: "15,000+" },
  { icon: Handshake, label: "Partnerships", value: "Coming Soon" },
  { icon: Star, label: "Years of Service", value: "27+" },
];

const aboutTrustStrip: { icon: typeof Eye; label: string }[] = [
  { icon: Eye, label: "Transparency" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users, label: "Community" },
  { icon: Sprout, label: "Sustainability" },
  { icon: Handshake, label: "Collaboration" },
];

const identityModules: { title: string; icon: typeof Compass; desc: string }[] = [
  { title: "Purpose", icon: Compass, desc: "We exist to close the gap between where rural communities are and where they could be." },
  { title: "Mission", icon: Target, desc: "Build sustainable, community-owned models across education, health, and livelihoods." },
  { title: "Community", icon: Users, desc: "Every program is designed with the community, not handed down to it." },
  { title: "Innovation", icon: Zap, desc: "Practical, field-tested solutions over one-size-fits-all templates." },
  { title: "Sustainability", icon: Sprout, desc: "Progress that communities can carry forward long after we step back." },
];

const identityBadges: { label: string; icon: typeof Eye }[] = [
  { label: "Transparency", icon: Eye },
  { label: "Integrity", icon: ShieldCheck },
  { label: "Compassion", icon: Heart },
  { label: "Innovation", icon: Zap },
  { label: "Collaboration", icon: Handshake },
  { label: "Equality", icon: Scale },
  { label: "Sustainability", icon: Sprout },
  { label: "Empowerment", icon: Star },
];

const storyMilestones = [
  {
    era: "1999",
    label: "Beginning",
    title: "A Registered Society With a Simple Idea",
    desc: "Effort India was founded as a registered society in Andhra Pradesh, built on the belief that rural communities know their own problems best — they just need the resources and structure to act on that knowledge.",
    icon: BookOpen,
    kind: "block" as const,
  },
  {
    era: "Early Years",
    label: "Growth",
    title: "One Program Became Many",
    desc: "What started as a single initiative grew into a multi-sector approach spanning education, healthcare, and livelihoods.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800",
    kind: "floating" as const,
  },
  {
    era: "Building Momentum",
    label: "Expansion",
    title: "Field Teams, Not Just Field Visits",
    desc: "We built a permanent presence inside the communities we serve, rather than parachuting in for one-off projects.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    kind: "image" as const,
  },
  {
    era: "Real Outcomes",
    label: "Transformation",
    title: "From Activity to Outcome",
    desc: "We shifted our own measure of success — from how many programs we ran, to how many lives were genuinely, measurably better.",
    icon: Award,
    kind: "glass" as const,
  },
  {
    era: "2026 →",
    label: "Future Vision",
    title: "Rooted, and Still Growing",
    desc: "We're scaling deliberately — staying rooted in the same community-first principles we started with, 27 years in.",
    icon: Sparkles,
    kind: "future" as const,
  },
];

const memoryCards = [
  { year: "1999", achievement: "Founded", desc: "Registered as a society in Andhra Pradesh.", icon: BookOpen },
  { year: "Today", achievement: "27+ Years of Service", desc: "Continuous, on-the-ground operation.", icon: Star },
  { year: "Ongoing", achievement: "Multi-Sector Programs", desc: "Education, healthcare, livelihoods, environment.", icon: Sprout },
];

const visionMissionSlides: { label: string; icon: typeof Eye; title: string; desc: string; image: string }[] = [
  {
    label: "Vision",
    icon: Eye,
    title: "A Future Communities Build For Themselves",
    desc: "A future where every rural community in Andhra Pradesh has the resources, skills, and opportunity to shape its own progress — regardless of where it starts.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
  },
  {
    label: "Mission",
    icon: Target,
    title: "Sustainable Models, Not One-Off Projects",
    desc: "To design and deliver community-owned programs in education, healthcare, livelihoods, and environmental sustainability that create measurable, lasting impact.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000",
  },
];

const coreValues: { title: string; icon: typeof ShieldCheck; desc: string; radius: number; size: number }[] = [
  { title: "Integrity", icon: ShieldCheck, desc: "We do what we say, and say what we do — even when no one's watching.", radius: 155, size: 88 },
  { title: "Transparency", icon: Gem, desc: "Open books, open outcomes. Every rupee and result is accountable.", radius: 175, size: 76 },
  { title: "Innovation", icon: Zap, desc: "Practical solutions built for real conditions, not textbook templates.", radius: 145, size: 70 },
  { title: "Compassion", icon: Heart, desc: "Every program starts with listening to the people it's meant to serve.", radius: 170, size: 80 },
  { title: "Empowerment", icon: Users, desc: "We hand over ownership, not just outcomes, to the communities we work with.", radius: 160, size: 86 },
  { title: "Sustainability", icon: Sprout, desc: "Progress that holds up long after our involvement ends.", radius: 150, size: 72 },
];

const founderProfile = {
  name: "[ Founder Name ]",
  title: "[ Founder Title ]",
  quote:
    "Add the founder's message here — a few sentences on why the organization exists, what drives its work, and the change it hopes to create.",
  badges: ["Community Leader", "Social Innovator", "Visionary Leadership", "Impact Driven", "Grassroots Trusted", "Servant Leadership"],
};

const leadershipTeam: { name: string; role: string; intro: string }[] = [
  { name: "[ Team Member Name ]", role: "[ Role Title ]", intro: "Add a short introduction for this leadership team member here." },
  { name: "[ Team Member Name ]", role: "[ Role Title ]", intro: "Add a short introduction for this leadership team member here." },
  { name: "[ Team Member Name ]", role: "[ Role Title ]", intro: "Add a short introduction for this leadership team member here." },
  { name: "[ Team Member Name ]", role: "[ Role Title ]", intro: "Add a short introduction for this leadership team member here." },
  { name: "[ Team Member Name ]", role: "[ Role Title ]", intro: "Add a short introduction for this leadership team member here." },
];

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [whoWeAreRef, whoWeAreVisible] = useScrollReveal<HTMLElement>();
  const [storyRef, storyVisible] = useScrollReveal<HTMLElement>();
  const [vmRef, vmVisible] = useScrollReveal<HTMLElement>();
  const [activeVMSlide, setActiveVMSlide] = useState(0);
  const [vmPaused, setVmPaused] = useState(false);
  const [valuesRef, valuesVisible] = useScrollReveal<HTMLElement>();
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [leadershipRef, leadershipVisible] = useScrollReveal<HTMLElement>();
  const [teamStart, setTeamStart] = useState(0);
  const [teamPaused, setTeamPaused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!leadershipVisible || teamPaused) return;
    const id = setInterval(() => {
      setTeamStart((prev) => (prev + 1) % leadershipTeam.length);
    }, 5000);
    return () => clearInterval(id);
  }, [leadershipVisible, teamPaused]);

  useEffect(() => {
    if (!vmVisible || vmPaused) return;
    const id = setInterval(() => {
      setActiveVMSlide((prev) => (prev + 1) % visionMissionSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [vmVisible, vmPaused]);


  const documents = [
    { name: "Annual Activity Report 2024-25", size: "3.2 MB", date: "April 2025" },
    { name: "Audited Financial Statements 2024", size: "1.8 MB", date: "Oct 2024" },
    { name: "FCRA Returns Certificate 2023-24", size: "1.1 MB", date: "Dec 2024" },
    { name: "Income Tax Exemption Form 80G", size: "0.9 MB", date: "Active" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- ABOUT US HERO BANNER --- */}
      <section className="relative overflow-hidden -mt-12 pt-12 pb-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
          <div className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[10%] w-[380px] h-[380px] bg-emerald-200/25 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute top-[45%] left-[45%] w-[280px] h-[280px] bg-purple-100/25 rounded-full blur-[120px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0369a1_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left 45% */}
            <div className="lg:col-span-5">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> About Our Organization
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] mt-4">
                {aboutHeroLines.map((line, i) => (
                  <span
                    key={line}
                    className={`block transition-all duration-700 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${i === 1 ? "bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent" : ""}`}
                    style={{ transitionDelay: `${150 + i * 120}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p
                className={`text-slate-600 text-base sm:text-lg leading-relaxed mt-5 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                Effort India is a registered society working with rural communities in Andhra Pradesh on education, healthcare, livelihoods, and environmental sustainability — building models that communities can carry forward long after we step back.
              </p>

              {/* Mini NGO statistics */}
              <p
                className={`text-xs font-bold text-slate-500 mt-4 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "620ms" }}
              >
                <span className="text-emerald-600">27+ Years</span> · <span className="text-emerald-600">120+ Communities</span> · <span className="text-emerald-600">15,000+ Lives</span>
              </p>

              {/* CTA buttons */}
              <div
                className={`flex flex-wrap gap-3 mt-7 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  Explore Our Journey <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-200 text-slate-700 font-bold text-sm hover:border-sky-400 hover:text-sky-700 transition-all"
                >
                  <Download className="w-4 h-4" /> Download Organization Profile
                </a>
              </div>

              {/* Mini trust strip */}
              <div
                className={`flex flex-wrap gap-x-5 gap-y-2 mt-8 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {aboutTrustStrip.map((item) => (
                  <span key={item.label} className="group flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <item.icon className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 55%: cinematic image + floating panels */}
            <div
              className={`lg:col-span-7 relative transition-all duration-1000 ${
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div className="relative rounded-[34px] overflow-hidden h-[420px] sm:h-[480px] border border-white/60 shadow-[0_30px_70px_-25px_rgba(37,99,235,0.3)] group">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200"
                  alt="Effort India field team"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep" />
                </div>
              </div>

              {/* Floating glass panels */}
              <div className="absolute -top-5 -left-5 sm:-left-8 grid grid-cols-2 gap-3 w-[calc(100%+2.5rem)] sm:w-auto sm:flex">
                {aboutHeroPanels.slice(0, 2).map((panel, i) => (
                  <div
                    key={panel.label}
                    className={`animate-breathing-shadow bg-white/80 backdrop-blur-[32px] border border-white/70 rounded-2xl p-4 shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                    style={{ transitionDelay: `${900 + i * 150}ms` }}
                  >
                    <panel.icon className="w-5 h-5 text-blue-600 mb-1.5" />
                    <p className={`font-black text-slate-900 ${panel.value === "Coming Soon" ? "text-xs" : "text-lg"}`}>{panel.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{panel.label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-5 -right-5 sm:-right-8 grid grid-cols-2 gap-3 w-[calc(100%+2.5rem)] sm:w-auto sm:flex">
                {aboutHeroPanels.slice(2, 4).map((panel, i) => (
                  <div
                    key={panel.label}
                    className={`animate-breathing-shadow bg-white/80 backdrop-blur-[32px] border border-white/70 rounded-2xl p-4 shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${1200 + i * 150}ms` }}
                  >
                    <panel.icon className="w-5 h-5 text-emerald-600 mb-1.5" />
                    <p className={`font-black text-slate-900 ${panel.value === "Coming Soon" ? "text-xs" : "text-lg"}`}>{panel.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{panel.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHO WE ARE SECTION --- */}
      <section ref={whoWeAreRef} className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-indigo-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[420px] h-[420px] bg-cyan-200/25 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-emerald-100/20 rounded-full blur-[120px] animate-liquid-drift-c" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-cyan-200/40" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 -translate-x-16 -translate-y-16 rounded-full border border-cyan-200/25" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
              whoWeAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Driven By Purpose. Powered By People.
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left: circular image + floating badges */}
            <div
              className={`lg:col-span-3 transition-all duration-1000 ${
                whoWeAreVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-6 scale-90"
              }`}
            >
              <div className="relative flex justify-center lg:justify-start">
                <div className="absolute -top-6 -left-2 w-40 h-40 bg-cyan-200/50 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 right-2 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl" />
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-[0_25px_60px_-20px_rgba(8,145,178,0.4)] group">
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800"
                    alt="Effort India team"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-7 max-w-[280px] mx-auto lg:mx-0">
                {identityBadges.map((badge, i) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-[20px] border border-white/70 text-[11px] font-bold text-slate-600 shadow-sm hover:scale-110 hover:text-cyan-700 hover:shadow-md transition-all cursor-default"
                    style={{
                      animationName: "card-float",
                      animationDuration: "5s",
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      animationDelay: `${i * 0.3}s`,
                    }}
                  >
                    <badge.icon className="w-3 h-3 text-cyan-600" /> {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: typography block */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${
                whoWeAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <p className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">
                We are a registered society working where the need is greatest — not where it&apos;s easiest to reach.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">
                For 27 years, Effort India has built development models with rural communities in Andhra Pradesh, not for them. We believe lasting change happens when people have ownership over their own progress — our role is to provide the structure, resources, and consistency to make that possible.
              </p>

              <div className="bg-white/70 backdrop-blur-[30px] border border-white/70 rounded-[28px] p-6 mt-6 animate-breathing-shadow">
                <Quote className="w-6 h-6 text-cyan-400" />
                <p className="text-slate-700 text-sm leading-relaxed italic mt-2">
                  &ldquo;We don&apos;t measure success by what we built. We measure it by what communities no longer need us for.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: identity modules with connector line */}
            <div
              className={`lg:col-span-4 relative transition-all duration-700 ${
                whoWeAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <svg
                className="absolute left-6 top-0 h-full w-4 pointer-events-none hidden lg:block"
                viewBox="0 0 20 900"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <path
                  d="M10,0 C16,150 4,300 10,450 C16,600 4,750 10,900"
                  stroke="url(#connectorGrad)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1400"
                  className={whoWeAreVisible ? "animate-draw-connector" : ""}
                  opacity="0.35"
                />
              </svg>

              <div className="space-y-4 relative z-10">
                {identityModules.map((mod, i) => (
                  <div
                    key={mod.title}
                    className={`group bg-white/70 backdrop-blur-[24px] border border-white/70 rounded-3xl p-5 shadow-[0_10px_30px_-16px_rgba(8,145,178,0.3)] hover:shadow-[0_20px_40px_-16px_rgba(8,145,178,0.35)] hover:-translate-y-1.5 transition-all duration-500 flex items-start gap-4 ${
                      i === 0 || i === 2 ? "py-6" : "py-4"
                    } ${
                      whoWeAreVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                    }`}
                    style={{ transitionDelay: `${450 + i * 120}ms` }}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
                      <mod.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-slate-900">{mod.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1">{mod.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-3 justify-center mt-16 transition-all duration-700 ${
              whoWeAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <a
              href="#journey"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(6,182,212,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.6)] hover:-translate-y-0.5 transition-all group"
            >
              Learn Our Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#leadership"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-cyan-200 text-slate-700 font-bold text-sm hover:border-cyan-400 hover:text-cyan-700 transition-all"
            >
              Meet Our Team <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* --- OUR STORY SECTION (HORIZONTAL FILMSTRIP) --- */}
      <section ref={storyRef} id="journey" className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[5%] w-[440px] h-[440px] bg-amber-200/30 rounded-full blur-[150px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[5%] w-[420px] h-[420px] bg-rose-200/25 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-14 space-y-4 transition-all duration-700 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              📖 Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Every Great Change Begins With A Small Step
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From a single registered society to a multi-sector organization — here is how that journey unfolded, one deliberate step at a time.
            </p>
          </div>

          {/* Floating memory cards */}
          <div className="hidden lg:flex justify-center gap-4 mb-6">
            {memoryCards.map((card, i) => (
              <div
                key={card.year}
                className="bg-white/70 backdrop-blur-[24px] border border-white/70 rounded-2xl px-4 py-3 shadow-[0_15px_35px_-18px_rgba(217,119,6,0.3)] flex items-center gap-3"
                style={{
                  animationName: "card-float",
                  animationDuration: "5s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                <card.icon className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-wider text-amber-600">{card.year} · {card.achievement}</p>
                  <p className="text-[11px] text-slate-500">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal flowing filmstrip */}
          <div className="relative">
            <svg className="absolute inset-x-0 top-24 w-full h-24 hidden lg:block pointer-events-none" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M0,50 C120,10 240,90 360,50 C480,10 600,90 720,50 C840,10 960,90 1080,50 C1140,30 1170,50 1200,50"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="1600"
                className={storyVisible ? "animate-draw-connector" : ""}
                opacity="0.3"
              />
            </svg>

            <div className="overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 lg:overflow-visible scrollbar-hide">
              <div className="flex lg:grid lg:grid-cols-5 gap-5 lg:gap-4 min-w-max lg:min-w-0 relative z-10">
                {storyMilestones.map((milestone, i) => {
                  const offset = i % 2 === 0 ? "lg:mt-0" : "lg:mt-14";
                  return (
                    <div
                      key={milestone.era}
                      className={`group w-64 sm:w-72 lg:w-auto shrink-0 ${offset} transition-all duration-700 ${
                        storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${i * 120}ms` }}
                    >
                      <div className="h-full bg-white/70 backdrop-blur-[26px] border border-white/70 rounded-3xl overflow-hidden shadow-[0_15px_35px_-18px_rgba(217,119,6,0.3)] hover:shadow-[0_20px_45px_-18px_rgba(217,119,6,0.4)] hover:-translate-y-2 transition-all duration-500">
                        {milestone.image && (
                          <div className="relative h-28 overflow-hidden">
                            <img
                              src={milestone.image}
                              alt={milestone.label}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform">
                            <milestone.icon className="w-5 h-5" />
                          </div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-amber-600">{milestone.era} · {milestone.label}</p>
                          <h3 className="text-sm font-black text-slate-900 mt-1.5 leading-snug">{milestone.title}</h3>
                          <p className="text-xs text-slate-500 leading-relaxed mt-2">{milestone.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-wrap gap-3 justify-center mt-14 transition-all duration-700 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a
              href="/impact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(217,119,6,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(217,119,6,0.6)] hover:-translate-y-0.5 transition-all group"
            >
              Explore Our Journey <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-amber-200 text-slate-700 font-bold text-sm hover:border-amber-400 hover:text-amber-700 transition-all"
            >
              <Play className="w-4 h-4" /> Watch Our Story
            </a>
          </div>
        </div>
      </section>

      {/* --- VISION & MISSION SECTION (EDITORIAL, GRAPHITE & GOLD) --- */}
      <section ref={vmRef} className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-950 py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-25%] right-[10%] w-[460px] h-[460px] bg-amber-500/10 rounded-full blur-[160px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-25%] left-[5%] w-[360px] h-[360px] bg-amber-700/10 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(115deg,transparent_48%,rgba(251,191,36,0.06)_50%,transparent_52%)]" />
          <div className="bg-noise absolute inset-0 opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left: editorial heading */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${
                vmVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">Vision &amp; Mission</p>
              <div className={`h-px bg-gradient-to-r from-amber-400 to-transparent mt-3 transition-all duration-1000 ${vmVisible ? "w-16" : "w-0"}`} />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mt-5 leading-[1.15]">
                What We&apos;re Working Toward, <span className="text-amber-400">And How</span> We&apos;ll Get There
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-4">
                Two statements that shape every program decision we make — where we want communities to end up, and the approach we use to help them get there.
              </p>
              <a
                href="/impact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 text-zinc-950 font-bold text-sm shadow-[0_15px_40px_-10px_rgba(251,191,36,0.4)] hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.5)] hover:-translate-y-0.5 transition-all group mt-7"
              >
                Explore Our Purpose <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: Vision & Mission slider */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                vmVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "150ms" }}
              onMouseEnter={() => setVmPaused(true)}
              onMouseLeave={() => setVmPaused(false)}
            >
              <div className="relative bg-white/[0.03] backdrop-blur-[35px] border border-amber-400/15 rounded-[36px] p-7 sm:p-9 animate-breathing-shadow overflow-hidden">
                <span className="pointer-events-none absolute -top-6 right-2 text-[130px] font-black text-white/[0.03] leading-none select-none">
                  0{activeVMSlide + 1}
                </span>

                {(() => {
                  const slide = visionMissionSlides[activeVMSlide];
                  const SlideIcon = slide.icon;
                  return (
                    <div key={activeVMSlide} className="animate-fade-in relative z-10 flex items-center gap-6">
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-amber-400/25 shrink-0">
                        <img src={slide.image} alt={slide.label} className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div>
                        <SlideIcon className="w-5 h-5 text-amber-400 mb-2" />
                        <p className="text-[11px] font-black uppercase tracking-widest text-amber-400">{slide.label}</p>
                        <h3 className="text-lg sm:text-xl font-black text-white mt-1 leading-snug">{slide.title}</h3>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2">{slide.desc}</p>
                      </div>
                    </div>
                  );
                })()}

                {/* Slider controls */}
                <div className="relative z-10 flex items-center justify-between mt-7">
                  <button
                    onClick={() => setActiveVMSlide((p) => (p - 1 + visionMissionSlides.length) % visionMissionSlides.length)}
                    aria-label="Previous slide"
                    className="w-9 h-9 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400 hover:bg-amber-400/10 hover:-rotate-6 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    {visionMissionSlides.map((s, i) => (
                      <button
                        key={s.label}
                        onClick={() => setActiveVMSlide(i)}
                        aria-label={`Show ${s.label}`}
                        className={`h-1.5 rounded-full transition-all ${i === activeVMSlide ? "w-6 bg-amber-400" : "w-1.5 bg-white/15 hover:bg-white/30"}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveVMSlide((p) => (p + 1) % visionMissionSlides.length)}
                    aria-label="Next slide"
                    className="w-9 h-9 rounded-full border border-amber-400/25 flex items-center justify-center text-amber-400 hover:bg-amber-400/10 hover:rotate-6 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION (VALUE ECOSYSTEM, PLATINUM) --- */}
      <section ref={valuesRef} className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-zinc-50 to-slate-200 py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(120deg,transparent_49%,rgba(15,23,42,0.04)_50%,transparent_51%)] [background-size:56px_56px]" />
          <div className="absolute top-[-10%] right-[15%] w-[380px] h-[380px] bg-white/60 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-10%] left-[10%] w-[340px] h-[340px] bg-white/50 rounded-full blur-[130px]" />
          <div
            className="absolute top-10 left-[8%] w-1 h-1 rounded-full bg-slate-400/50"
            style={{ animationName: "float-particle", animationDuration: "5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
          />
          <div
            className="absolute bottom-16 right-[12%] w-1.5 h-1.5 rounded-full bg-emerald-400/40"
            style={{ animationName: "float-particle", animationDuration: "5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "1.5s" }}
          />
          <div className="absolute inset-0 opacity-[0.4] bg-noise" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Left: heading, description, CTA */}
            <div
              className={`lg:col-span-4 transition-all duration-700 ${
                valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-300 text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm">
                ⭐ Our Core Values
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 mt-4 leading-tight">
                The Principles That Guide Every Decision
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                Six values sit behind every program we design and every partnership we enter — hover over each one orbiting alongside our mission.
              </p>
              <a
                href="/get-involved"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(15,23,42,0.4)] hover:shadow-[0_20px_50px_-15px_rgba(15,23,42,0.5)] hover:-translate-y-0.5 transition-all group mt-7"
              >
                Live Our Values <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: interactive value ecosystem */}
            <div
              className={`lg:col-span-8 transition-all duration-1000 ${
                valuesVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative w-full max-w-[500px] aspect-square mx-auto">

                {/* Ambient glow rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-emerald-200/50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-emerald-100/40 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-emerald-300/20 blur-[60px] pointer-events-none" />

                {/* Floating ambient particles */}
                {[
                  { top: "12%", left: "18%", size: 5, color: "bg-emerald-400/60", delay: 0 },
                  { top: "22%", left: "78%", size: 4, color: "bg-teal-400/50", delay: 0.8 },
                  { top: "68%", left: "84%", size: 6, color: "bg-emerald-300/50", delay: 1.6 },
                  { top: "82%", left: "22%", size: 4, color: "bg-slate-400/50", delay: 2.2 },
                  { top: "45%", left: "6%", size: 5, color: "bg-emerald-400/50", delay: 1.2 },
                  { top: "5%", left: "50%", size: 4, color: "bg-teal-300/50", delay: 0.4 },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`absolute rounded-full ${p.color} pointer-events-none`}
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      animationName: "float-particle",
                      animationDuration: "5s",
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                      animationDelay: `${p.delay}s`,
                    }}
                  />
                ))}

                {/* Center glass core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white/70 backdrop-blur-[36px] border-2 border-emerald-300/70 animate-breathing-shadow-emerald z-20 flex items-center justify-center shadow-[0_0_40px_-5px_rgba(16,185,129,0.35)]">
                  <div className="absolute inset-2 rounded-full border border-emerald-400/50" />
                  <div className="absolute inset-0 rounded-full overflow-hidden opacity-90">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/90 to-transparent animate-light-sweep" />
                  </div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-emerald-700 text-center relative z-10">Our<br />Values</p>
                </div>

                {/* Connecting lines (rotate with the orbit) */}
                <svg
                  className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                  viewBox="0 0 500 500"
                  style={{
                    animationName: "orbit-rotate",
                    animationDuration: "40s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: hoveredValue !== null ? "paused" : "running",
                  }}
                  aria-hidden="true"
                >
                  {coreValues.map((val, i) => {
                    const angle = -90 + i * 60;
                    const rad = (angle * Math.PI) / 180;
                    const x = Number((250 + val.radius * Math.cos(rad)).toFixed(2));
                    const y = Number((250 + val.radius * Math.sin(rad)).toFixed(2));
                    return (
                      <g key={val.title}>
                        <line
                          x1="250"
                          y1="250"
                          x2={x}
                          y2={y}
                          stroke="#10b981"
                          strokeWidth={hoveredValue === i ? 5 : 3}
                          opacity={hoveredValue === i ? 0.25 : 0.12}
                          className="transition-all duration-300"
                          style={{ filter: "blur(2px)" }}
                        />
                        <line
                          x1="250"
                          y1="250"
                          x2={x}
                          y2={y}
                          stroke={hoveredValue === i ? "#059669" : "#10b981"}
                          strokeWidth={hoveredValue === i ? 2 : 1.25}
                          opacity={hoveredValue === i ? 0.7 : 0.4}
                          className="transition-all duration-300"
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Orbiting value modules */}
                <div
                  className="absolute inset-0 z-10"
                  style={{
                    animationName: "orbit-rotate",
                    animationDuration: "40s",
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationPlayState: hoveredValue !== null ? "paused" : "running",
                  }}
                >
                  {coreValues.map((val, i) => {
                    const angle = -90 + i * 60;
                    const rad = (angle * Math.PI) / 180;
                    const x = Number((val.radius * Math.cos(rad)).toFixed(2));
                    const y = Number((val.radius * Math.sin(rad)).toFixed(2));
                    const isHovered = hoveredValue === i;
                    return (
                      <div
                        key={val.title}
                        className={`absolute top-1/2 left-1/2 transition-all duration-700 ${
                          valuesVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                        }`}
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          transitionDelay: `${i * 100}ms`,
                        }}
                      >
                        <div
                          style={{
                            animationName: "orbit-counter",
                            animationDuration: "40s",
                            animationTimingFunction: "linear",
                            animationIterationCount: "infinite",
                            animationPlayState: hoveredValue !== null ? "paused" : "running",
                          }}
                        >
                          <div
                            onMouseEnter={() => setHoveredValue(i)}
                            onMouseLeave={() => setHoveredValue(null)}
                            className={`group bg-white/80 backdrop-blur-[28px] border rounded-3xl shadow-[0_15px_35px_-18px_rgba(16,185,129,0.35)] transition-all duration-300 cursor-default ${
                              isHovered ? "border-emerald-400 scale-125 z-30 relative shadow-[0_20px_45px_-15px_rgba(16,185,129,0.5)]" : "border-white/70"
                            }`}
                            style={{ width: val.size, height: isHovered ? "auto" : val.size, minHeight: val.size }}
                          >
                            <div className="flex flex-col items-center justify-center p-2 h-full text-center">
                              <val.icon className={`text-emerald-600 transition-transform duration-300 ${isHovered ? "w-6 h-6 rotate-12" : "w-5 h-5"}`} />
                              <p className="text-[10px] font-black text-slate-900 mt-1 leading-tight">{val.title}</p>
                              {isHovered && (
                                <p className="text-[9px] text-slate-500 leading-snug mt-1 animate-fade-in">{val.desc}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP & EXECUTIVE TEAM SECTION --- */}
      <section ref={leadershipRef} id="leadership" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[10%] w-[460px] h-[460px] bg-purple-600/15 rounded-full blur-[160px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-20%] right-[5%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full border border-amber-300/10" />
          <div className="bg-noise absolute inset-0 opacity-60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-14 space-y-4 transition-all duration-700 ${
              leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/25 text-amber-200 text-xs font-bold uppercase tracking-wider">
              👥 Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Leadership That Inspires Change
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              The people steering our mission — and the wider team carrying it into every community we work with.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* Left 55%: Founder showcase */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative bg-white/[0.04] backdrop-blur-[40px] border border-white/10 rounded-[38px] p-7 sm:p-9 animate-breathing-shadow">

                <div className="flex items-center gap-5">
                  {/* Portrait placeholder */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-500/20 to-amber-400/20 border-2 border-amber-300/30 flex items-center justify-center shrink-0">
                    <UserCircle2 className="w-14 h-14 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">{founderProfile.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mt-1">{founderProfile.title}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all">
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                      <a href="#" aria-label="Email" className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 hover:bg-white/20 hover:scale-110 transition-all">
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Executive message */}
                <div id="exec-message" className="relative mt-7 bg-white/[0.03] border border-white/10 rounded-3xl p-6 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
                  </div>
                  <Quote className="w-6 h-6 text-amber-300/70 relative z-10" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mt-3 relative z-10">{founderProfile.quote}</p>
                  <p className="text-[11px] text-slate-500 italic mt-4 relative z-10">[ Signature Placeholder ]</p>
                </div>

                {/* Achievement badges */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {founderProfile.badges.map((badge) => (
                    <div key={badge} className="p-[1.5px] rounded-full bg-gradient-to-r from-amber-300/40 via-purple-300/30 to-amber-300/40 hover:shadow-[0_0_16px_-4px_rgba(251,191,36,0.4)] transition-shadow">
                      <div className="px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md">
                        <span className="text-[11px] font-bold text-slate-200">{badge}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#exec-message"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-amber-400 text-slate-950 font-bold text-sm shadow-[0_15px_40px_-10px_rgba(251,191,36,0.35)] hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.45)] hover:-translate-y-0.5 transition-all group mt-7"
                >
                  Read Leadership Message <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right 45%: Leadership carousel */}
            <div
              className={`lg:col-span-5 transition-all duration-1000 ${
                leadershipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "150ms" }}
              onMouseEnter={() => setTeamPaused(true)}
              onMouseLeave={() => setTeamPaused(false)}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">Meet Our Team</p>

              <div className="space-y-3">
                {[0, 1, 2].map((offset) => {
                  const member = leadershipTeam[(teamStart + offset) % leadershipTeam.length];
                  return (
                    <div
                      key={`${teamStart}-${offset}`}
                      className="animate-fade-in group bg-white/[0.04] backdrop-blur-[24px] border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-amber-400/20 border border-amber-300/25 flex items-center justify-center shrink-0">
                        <UserCircle2 className="w-7 h-7 text-white/40" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">{member.name}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-wide text-amber-300/80">{member.role}</p>
                        <p className="text-[11px] text-slate-400 mt-1 leading-snug line-clamp-2">{member.intro}</p>
                      </div>
                      <div className="flex flex-col gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href="#" aria-label="LinkedIn" className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                          <LinkedinIcon className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-5">
                <button
                  onClick={() => setTeamStart((p) => (p - 1 + leadershipTeam.length) % leadershipTeam.length)}
                  aria-label="Previous team member"
                  className="w-9 h-9 rounded-full border border-amber-300/25 flex items-center justify-center text-amber-300 hover:bg-amber-300/10 hover:-rotate-6 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <div className="flex gap-1.5">
                  {leadershipTeam.map((_, i) => (
                    <span key={i} className={`h-1.5 rounded-full transition-all ${i === teamStart ? "w-5 bg-amber-300" : "w-1.5 bg-white/20"}`} />
                  ))}
                </div>

                <button
                  onClick={() => setTeamStart((p) => (p + 1) % leadershipTeam.length)}
                  aria-label="Next team member"
                  className="w-9 h-9 rounded-full border border-amber-300/25 flex items-center justify-center text-amber-300 hover:bg-amber-300/10 hover:rotate-6 transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- LEGAL COMPLIANCE & TRANSPARENCY DOCUMENTS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/50">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Transparency & Audit</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Compliance Documents</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We strictly adhere to all government audit guidelines. Below are our financial reports and compliance certificates available for public review.
            </p>
            
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h5 className="font-bold text-amber-850 text-sm">FCRA & 80G Certified</h5>
                <p className="text-xs text-amber-700 mt-1">Authorized to receive national & international donations under Indian Ministry of Home Affairs & IT Dept.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/50 flex gap-4 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{doc.name}</h4>
                  <p className="text-[10px] text-slate-400">Date: {doc.date} | Size: {doc.size}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 pt-1 group/down">
                    Download PDF <ArrowRight className="w-3.5 h-3.5 group-hover/down:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
