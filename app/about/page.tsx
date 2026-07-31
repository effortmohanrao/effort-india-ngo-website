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
  Mail,
  MessageCircle,
  Search,
  BarChart3,
  Paperclip,
  Minus,
  TreePine,
  CheckCircle2,
  Building2,
  Landmark,
  Image as ImageIcon,
  Users2,
  Baby,
  Wheat,
  HandHeart,
  GraduationCap,
  Stethoscope,
  Leaf,
  Camera
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

type PhilosophyNote = {
  step: string;
  title: string;
  icon: typeof MessageCircle;
  note: string;
  rotate: string;
};

const philosophyNotes: PhilosophyNote[] = [
  { step: "01", title: "Community Listening", icon: MessageCircle, note: "starts with ears, not plans", rotate: "-rotate-3" },
  { step: "02", title: "Need Assessment", icon: Search, note: "verify before we design", rotate: "rotate-2" },
  { step: "03", title: "Collaborative Planning", icon: Compass, note: "built with, not for", rotate: "rotate-3" },
  { step: "04", title: "Transparent Execution", icon: Handshake, note: "no hidden line items", rotate: "-rotate-2" },
  { step: "05", title: "Continuous Monitoring", icon: Eye, note: "check-ins, not check-outs", rotate: "rotate-1" },
  { step: "06", title: "Impact Measurement", icon: BarChart3, note: "outcomes over activity", rotate: "-rotate-3" },
  { step: "07", title: "Long-Term Sustainability", icon: Sprout, note: "still standing after we leave", rotate: "rotate-2" },
];

const traditionalPoints = [
  "Manual Records",
  "Limited Transparency",
  "Slow Communication",
  "Fragmented Reporting",
  "Limited Community Participation",
];

type SmartPanel = {
  title: string;
  icon: typeof CheckCircle2;
  detail: string;
  kind: "stat" | "seal";
  target?: number;
  suffix?: string;
  label?: string;
};

const smartPanels: SmartPanel[] = [
  { title: "Real-Time Transparency", icon: Eye, detail: "Progress visible as it happens, not at year-end.", kind: "seal" },
  { title: "Technology Driven", icon: BarChart3, detail: "Digital tracking replaces paper trails end to end.", kind: "seal" },
  { title: "Community Participation", icon: Handshake, detail: "Programs co-designed with the people they serve.", kind: "seal" },
  { title: "Data-Based Decisions", icon: Search, detail: "Every program adjustment is backed by field data.", kind: "seal" },
  { title: "Measurable Impact", icon: CheckCircle2, detail: "Lives directly supported through our programs.", kind: "stat", target: 15000, suffix: "+", label: "Lives Impacted" },
  { title: "Long-Term Sustainability", icon: TreePine, detail: "Continuous operation since our 1999 founding.", kind: "stat", target: 27, suffix: "+", label: "Years of Service" },
];

type PartnerZone = {
  title: string;
  icon: typeof Globe2;
  accent: string;
  names: string[];
};

const partnerZones: PartnerZone[] = [
  {
    title: "International Development Partners",
    icon: Globe2,
    accent: "#5eead4",
    names: [
      "German Cooperation (GIZ)",
      "Great Place To Work",
      "IDH – Sustainable Trade Initiative",
      "Fairtrade Foundation",
      "DKA Austria",
      "CropLife International",
      "EKAM USA",
      "PGNF",
    ],
  },
  {
    title: "Corporate & CSR Partners",
    icon: Building2,
    accent: "#c4b5fd",
    names: [
      "Godfrey Phillips India Ltd.",
      "JSW Foundation",
      "Reliance Foundation",
      "Azim Premji Foundation",
      "Syngenta",
      "Universal Corporation",
      "Corteva Agriscience",
      "ITC Limited",
      "CropLife India",
      "Bayer",
    ],
  },
  {
    title: "Government & Institutional Partners",
    icon: Landmark,
    accent: "#fcd34d",
    names: ["NABARD", "Government of Andhra Pradesh", "Spices Board India", "Bala Vikasa", "AGS"],
  },
];

type GalleryCard =
  | { kind: "image"; category: string; icon: typeof ImageIcon; h: number }
  | { kind: "story"; title: string; note: string; year: string; h: number };

const galleryCards: GalleryCard[] = [
  { kind: "image", category: "Our Journey", icon: ImageIcon, h: 420 },
  { kind: "image", category: "Panorama", icon: ImageIcon, h: 320 },
  { kind: "story", title: "Where It Began", note: "A short story placeholder describing this moment in our journey.", year: "[ Year ]", h: 420 },
  { kind: "image", category: "Portrait", icon: UserCircle2, h: 420 },
  { kind: "image", category: "Community Event", icon: Users2, h: 320 },
  { kind: "image", category: "Children", icon: Baby, h: 420 },
  { kind: "image", category: "Farm", icon: Wheat, h: 320 },
  { kind: "story", title: "Growing Together", note: "A short story placeholder describing this moment in our journey.", year: "[ Year ]", h: 420 },
  { kind: "image", category: "Volunteer", icon: HandHeart, h: 420 },
  { kind: "image", category: "Training", icon: GraduationCap, h: 320 },
  { kind: "image", category: "Healthcare", icon: Stethoscope, h: 420 },
  { kind: "image", category: "Women Empowerment", icon: Users, h: 320 },
  { kind: "story", title: "Hands That Help", note: "A short story placeholder describing this moment in our journey.", year: "[ Year ]", h: 420 },
  { kind: "image", category: "Landscape", icon: ImageIcon, h: 420 },
  { kind: "image", category: "Environment", icon: Leaf, h: 320 },
];

const finaleHeadlineLines = ["Together We Can Create", "A Better Tomorrow"];

type FinaleStat = { value: number; suffix: string; label: string };

const finaleStats: FinaleStat[] = [
  { value: 120, suffix: "+", label: "Communities" },
  { value: 27, suffix: "+", label: "Years of Service" },
  { value: 15000, suffix: "+", label: "Lives Impacted" },
  { value: 20, suffix: "+", label: "Partners" },
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
  const [philosophyRef, philosophyVisible] = useScrollReveal<HTMLElement>();
  const [compareRef, compareVisible] = useScrollReveal<HTMLElement>();
  const [expandedPanel, setExpandedPanel] = useState<number | null>(null);
  const [statValues, setStatValues] = useState<(number | null)[]>(() => smartPanels.map((p) => (p.kind === "stat" ? 0 : null)));
  const [partnersRef, partnersVisible] = useScrollReveal<HTMLElement>();
  const [galleryHeaderRef, galleryHeaderVisible] = useScrollReveal<HTMLDivElement>();
  const galleryStripRef = useRef<HTMLDivElement>(null);
  const [galleryScrollPct, setGalleryScrollPct] = useState(0);
  const galleryDrag = useRef<{ active: boolean; startX: number; startScroll: number }>({ active: false, startX: 0, startScroll: 0 });
  const [galleryPaused, setGalleryPaused] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const strip = galleryStripRef.current;
    if (!strip) return;
    function updatePct() {
      if (!strip) return;
      const max = strip.scrollWidth - strip.clientWidth;
      setGalleryScrollPct(max > 0 ? strip.scrollLeft / max : 0);
    }
    updatePct();
    strip.addEventListener("scroll", updatePct, { passive: true });
    return () => strip.removeEventListener("scroll", updatePct);
  }, []);

  useEffect(() => {
    const strip = galleryStripRef.current;
    if (!strip) return;
    let raf = 0;
    function drift() {
      raf = requestAnimationFrame(drift);
      const el = galleryStripRef.current;
      if (!el || galleryPaused || galleryDrag.current.active) return;
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      el.scrollLeft = el.scrollLeft >= max - 1 ? 0 : el.scrollLeft + 0.6;
    }
    raf = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(raf);
  }, [galleryPaused]);

  useEffect(() => {
    const strip = galleryStripRef.current;
    if (!strip) return;
    function onWheel(e: WheelEvent) {
      if (!strip) return;
      e.preventDefault();
      strip.scrollLeft += e.deltaY;
    }
    strip.addEventListener("wheel", onWheel, { passive: false });
    return () => strip.removeEventListener("wheel", onWheel);
  }, []);

  const [finaleRef, finaleVisible] = useScrollReveal<HTMLElement>();
  const [finaleStatValues, setFinaleStatValues] = useState<number[]>(() => finaleStats.map(() => 0));
  const [finaleParallax, setFinaleParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!finaleVisible) return;
    const duration = 1800;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setFinaleStatValues(finaleStats.map((s) => Math.round(s.value * eased)));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [finaleVisible]);

  useEffect(() => {
    if (!compareVisible) return;
    const duration = 1600;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStatValues(smartPanels.map((p) => (p.kind === "stat" && p.target ? p.target * eased : null)));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [compareVisible]);

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

      {/* --- OUR WORKING PHILOSOPHY SECTION (STRATEGY BLUEPRINT STUDIO) --- */}
      <section ref={philosophyRef} className="relative overflow-hidden bg-[#f6f0e4] py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(rgba(107,101,96,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(107,101,96,0.06)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-noise opacity-[0.5]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left 40%: editorial intro */}
            <div
              className={`lg:col-span-4 transition-all duration-700 ${
                philosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-[#c2540f] mt-2 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c2540f]">Our Working Philosophy</p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2b2723] mt-3 leading-tight">
                    How We Think Before We Act
                  </h2>
                </div>
              </div>
              <p className="text-[#5a5550] text-sm sm:text-base leading-relaxed mt-5">
                Every program starts on paper, not in the field — mapped, questioned, and stress-tested before a single rupee moves. This is the working process behind everything we build.
              </p>

              <a
                href="/programs"
                className="group inline-flex items-center gap-2 mt-7 text-[#2b2723] font-bold text-sm"
              >
                <span className="bg-[#c2540f] text-white px-6 py-3.5 inline-flex items-center gap-2 group-hover:bg-[#a8480c] transition-colors">
                  See The Process In Action
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <div className="flex gap-8 mt-9 pt-6 border-t border-[#d9cfb8]">
                <div>
                  <p className="font-serif text-2xl font-bold text-[#2b2723]">7</p>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#8a8378] mt-1">Planning Stages</p>
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-[#2b2723]">27+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-[#8a8378] mt-1">Years Refined</p>
                </div>
              </div>
            </div>

            {/* Right 60%: blueprint canvas */}
            <div
              className={`lg:col-span-8 transition-all duration-1000 ${
                philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <div className="relative bg-[#fbf8f1] border border-[#e0d5bd] rounded-sm p-6 sm:p-8 shadow-[0_20px_50px_-25px_rgba(43,39,35,0.3)]">
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" aria-hidden="true">
                  <path
                    d="M60,40 Q180,10 300,60 T540,50 Q650,90 720,50"
                    fill="none"
                    stroke="#b5651d"
                    strokeWidth="1.5"
                    strokeDasharray="900"
                    className={philosophyVisible ? "animate-draw-connector" : ""}
                  />
                </svg>

                <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
                  {philosophyNotes.map((note, i) => (
                    <div
                      key={note.step}
                      className={`group relative bg-white border border-[#e5dbc4] p-4 shadow-[0_8px_20px_-10px_rgba(43,39,35,0.35)] hover:shadow-[0_14px_28px_-12px_rgba(43,39,35,0.4)] hover:-translate-y-1.5 hover:rotate-0 transition-all duration-300 ${note.rotate} ${
                        philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                      style={{ transitionDelay: `${i * 90}ms` }}
                    >
                      <Paperclip className="absolute -top-2.5 -left-1.5 w-5 h-5 text-[#8a8378] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[14px] border-l-[14px] border-b-[#e5dbc4] border-l-transparent" />
                      <p className="text-[10px] font-bold text-[#b5651d]">{note.step}</p>
                      <note.icon className="w-5 h-5 text-[#2b2723] mt-1.5" />
                      <h3 className="text-xs font-bold text-[#2b2723] mt-2 leading-snug">{note.title}</h3>
                      <p className="text-[10px] italic text-[#8a8378] mt-1.5">— {note.note}</p>
                    </div>
                  ))}

                  {/* Pinned image placeholder */}
                  <div
                    className={`relative bg-white border border-[#e5dbc4] p-2 shadow-[0_8px_20px_-10px_rgba(43,39,35,0.35)] hover:-translate-y-1.5 hover:rotate-0 transition-all duration-300 rotate-1 ${
                      philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{ transitionDelay: `${philosophyNotes.length * 90}ms` }}
                  >
                    <Paperclip className="absolute -top-2.5 -left-1.5 w-5 h-5 text-[#8a8378] -rotate-45" />
                    <div className="relative w-full h-full min-h-[96px] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
                        alt="NGO working process"
                        className="absolute inset-0 w-full h-full object-cover grayscale-[20%]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US SECTION (TRUST COMPARISON EXPERIENCE) --- */}
      <section ref={compareRef} className="relative overflow-hidden bg-white py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className={`text-center max-w-2xl mx-auto mb-7 space-y-2 transition-all duration-700 ${
              compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
              Two Approaches. One Clear Difference.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              See how our way of working stacks up against the traditional NGO model.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_64px_1fr] border border-slate-200 overflow-hidden">

            {/* Left: Traditional NGO */}
            <div
              className={`bg-stone-200 p-6 sm:p-8 flex flex-col justify-center transition-all duration-700 ${
                compareVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500">Traditional Approach</span>
              <h3 className="text-xl font-bold text-stone-600 mt-1.5">The Old Way</h3>
              <div className="mt-4 border-t border-stone-300/80">
                {traditionalPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 py-2 border-b border-stone-300/80 opacity-80">
                    <span className="w-5 h-5 rounded-full bg-stone-300 flex items-center justify-center shrink-0">
                      <Minus className="w-3 h-3 text-stone-500" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-stone-600">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: transformation bridge */}
            <div className="hidden lg:flex relative flex-col items-center justify-center bg-slate-50">
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-slate-300" />
              {compareVisible && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-1 h-14 bg-gradient-to-b from-transparent via-emerald-400 to-transparent"
                  style={{ animationName: "beam-travel", animationDuration: "3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
                />
              )}
              <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shadow-md">
                <TreePine className="w-6 h-6 text-emerald-600" />
              </div>
              <div
                className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/70"
                style={{ top: "20%", left: "60%", animationName: "float-particle", animationDuration: "5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
              />
              <div
                className="absolute w-1 h-1 rounded-full bg-amber-400/70"
                style={{ top: "72%", left: "35%", animationName: "float-particle", animationDuration: "5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: "1.4s" }}
              />
            </div>

            {/* Right: Our NGO */}
            <div
              className={`relative bg-white p-6 sm:p-8 flex flex-col justify-center overflow-hidden transition-all duration-700 ${
                compareVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
              <div className="absolute top-0 right-0 w-14 h-14 bg-amber-400" style={{ clipPath: "polygon(100% 0, 40% 0, 100% 60%)" }} />

              <span className="relative z-10 text-[11px] font-bold uppercase tracking-widest text-emerald-600">Our Smart NGO Approach</span>
              <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-slate-900 mt-1.5">The Smarter Way</h3>

              <div className="relative z-10 mt-4 space-y-1.5">
                {smartPanels.map((panel, i) => {
                  const isExpanded = expandedPanel === i;
                  const borderColors = ["border-emerald-500", "border-cyan-500", "border-amber-500"];
                  return (
                    <div
                      key={panel.title}
                      onMouseEnter={() => setExpandedPanel(i)}
                      onMouseLeave={() => setExpandedPanel(null)}
                      className={`border-l-4 ${borderColors[i % borderColors.length]} bg-slate-50 pl-4 pr-4 transition-all duration-300 cursor-default ${
                        isExpanded ? "py-3" : "py-1.5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <panel.icon className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-slate-900">{panel.title}</span>
                      </div>
                      {isExpanded && (
                        <div className="mt-2 animate-fade-in">
                          {panel.kind === "stat" ? (
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-black text-emerald-600">
                                {Math.round(statValues[i] ?? 0).toLocaleString("en-IN")}
                                {panel.suffix}
                              </span>
                              <span className="text-[10px] font-bold uppercase text-slate-500">{panel.label}</span>
                            </div>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase tracking-wide">
                              <ShieldCheck className="w-3 h-3" /> Verified Practice
                            </span>
                          )}
                          <p className="text-xs text-slate-500 mt-1">{panel.detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className={`text-center mt-6 transition-all duration-700 ${
              compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="/impact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 text-white font-bold text-sm border-2 border-emerald-600 hover:bg-white hover:text-emerald-600 transition-colors duration-300"
            >
              See Our Difference <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* --- OUR PARTNERS & RECOGNITION SECTION (TRUST NETWORK) --- */}
      <section ref={partnersRef} className="relative overflow-hidden bg-aurora py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-16 w-[420px] h-[420px] rounded-full bg-emerald-500/25 blur-[110px] animate-smoke-a" />
          <div className="absolute top-1/3 -right-20 w-[460px] h-[460px] rounded-full bg-fuchsia-500/20 blur-[120px] animate-smoke-b" />
          <div className="absolute -bottom-28 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[110px] animate-smoke-c" />
          <div className="absolute inset-0 bg-noise opacity-[0.08]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-12 space-y-3 transition-all duration-700 ${
              partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Trusted Worldwide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Organizations That Believe In Our Mission
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              A growing trust network of international, corporate, and government partners powering our work.
            </p>
          </div>

          {/* Trust core */}
          <div
            className={`flex justify-center mb-4 transition-all duration-1000 ${
              partnersVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-xl border border-white/25 flex items-center justify-center animate-glass-glow">
              <div className="absolute -inset-3 rounded-full border border-white/10" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-white text-center leading-relaxed">
                Our
                <br />
                Partners
              </p>
            </div>
          </div>

          {/* Three partnership marquee zones */}
          <div className="space-y-8">
            {partnerZones.map((zone, zi) => {
              const ZoneIcon = zone.icon;
              const loop = [...zone.names, ...zone.names];
              return (
                <div
                  key={zone.title}
                  className={`partner-row transition-all duration-700 ${
                    partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${350 + zi * 150}ms` }}
                >
                  <div className="flex items-center gap-2 mb-4 px-1">
                    <ZoneIcon className="w-4 h-4" style={{ color: zone.accent }} />
                    <p className="text-[11px] font-bold uppercase tracking-wide text-white/70">{zone.title}</p>
                  </div>

                  <div className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1120] to-transparent z-10" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1120] to-transparent z-10" />
                    <div className={`flex w-max gap-4 ${zi % 2 === 0 ? "partner-track" : "partner-track-reverse"}`}>
                      {loop.map((name, i) => (
                        <div
                          key={`${name}-${i}`}
                          className="group shrink-0 w-52 h-20 rounded-2xl bg-white/8 backdrop-blur-md border border-white/15 hover:bg-white/14 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center px-4"
                        >
                          <span
                            className="text-sm font-bold text-white/85 text-center leading-snug group-hover:text-white transition-colors duration-300"
                          >
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`text-center mt-12 transition-all duration-700 ${
              partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <a
              href="/csr"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-bold text-sm border border-white/25 hover:bg-white hover:text-[#0b1120] transition-colors duration-300 rounded-full"
            >
              Become Our Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW SECTION (FLOWING HORIZONTAL GALLERY) --- */}
      <section className="relative overflow-hidden bg-aurora-light py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-10 w-[380px] h-[380px] rounded-full bg-rose-200/40 blur-[100px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 -right-16 w-[420px] h-[420px] rounded-full bg-amber-200/40 blur-[110px] animate-liquid-drift-b" />
          <div className="absolute -bottom-24 left-1/3 w-[360px] h-[360px] rounded-full bg-violet-200/30 blur-[100px] animate-liquid-drift-c" />
          <div className="absolute inset-0 bg-noise opacity-[0.5]" />
        </div>

        <div className="relative z-10">
          <div
            ref={galleryHeaderRef}
            className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-3 transition-all duration-700 ${
              galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#9a6b3f] text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" /> Our Journey Through Images
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2b2723]">
              Every Picture Tells A Story Of Hope
            </h2>
            <p className="text-[#6b655c] text-sm sm:text-base leading-relaxed">
              Drag, scroll, or just watch it flow — a glimpse of the moments and people our work touches.
            </p>
          </div>

          <div
            ref={galleryStripRef}
            className="relative flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide px-[6vw] py-4 cursor-grab active:cursor-grabbing select-none"
            onMouseEnter={() => setGalleryPaused(true)}
            onMouseLeave={() => {
              setGalleryPaused(false);
              galleryDrag.current.active = false;
            }}
            onMouseDown={(e) => {
              const strip = galleryStripRef.current;
              if (!strip) return;
              galleryDrag.current = { active: true, startX: e.clientX, startScroll: strip.scrollLeft };
            }}
            onMouseMove={(e) => {
              const strip = galleryStripRef.current;
              if (!strip || !galleryDrag.current.active) return;
              strip.scrollLeft = galleryDrag.current.startScroll - (e.clientX - galleryDrag.current.startX);
            }}
            onMouseUp={() => (galleryDrag.current.active = false)}
          >
            {galleryCards.map((card, i) => {
              const offsetClass = i % 3 === 1 ? "translate-y-4" : i % 3 === 2 ? "-translate-y-2" : "";
              if (card.kind === "story") {
                return (
                  <div
                    key={`story-${i}`}
                    className={`group shrink-0 w-64 rounded-[28px] bg-white/45 backdrop-blur-xl border border-white/70 shadow-[0_25px_50px_-25px_rgba(120,90,60,0.35)] p-6 flex flex-col justify-center ${offsetClass}`}
                    style={{ height: card.h }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#b6813f]">{card.year}</p>
                    <h3 className="text-lg font-bold text-[#2b2723] mt-2">{card.title}</h3>
                    <p className="text-xs text-[#6b655c] mt-2 leading-relaxed">{card.note}</p>
                    <div className="w-8 h-px bg-[#b6813f]/50 mt-4" />
                  </div>
                );
              }
              const CardIcon = card.icon;
              return (
                <div
                  key={`${card.category}-${i}`}
                  className={`group relative shrink-0 w-48 sm:w-56 rounded-[28px] overflow-hidden bg-white/35 backdrop-blur-xl border border-white/60 shadow-[0_25px_50px_-25px_rgba(120,90,60,0.3)] hover:-translate-y-2 hover:shadow-[0_35px_65px_-25px_rgba(180,130,70,0.4)] hover:border-[#d4af6a]/60 transition-all duration-500 ${offsetClass}`}
                  style={{ height: card.h }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#d4af6a]/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CardIcon className="w-7 h-7 text-[#b6813f]/35 group-hover:text-[#b6813f]/60 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a6633]">{card.category}</p>
                    <p className="text-[9px] text-[#8a6633]/60 mt-0.5">[ Gallery Image ]</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-xs mx-auto mt-6 px-4">
            <div className="h-[3px] rounded-full bg-white/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#d4af6a] to-[#b6813f] transition-[width] duration-150 ease-out"
                style={{ width: `${Math.max(galleryScrollPct * 100, 8)}%` }}
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="/gallery"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/50 backdrop-blur-md text-[#2b2723] font-bold text-sm border border-[#d4af6a]/60 hover:bg-white/70 transition-colors duration-300 rounded-full"
            >
              View Complete Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
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

      {/* --- IMPACT FINALE CTA SECTION --- */}
      <section
        ref={finaleRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setFinaleParallax({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
          });
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#fdf2e4]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 12% 90%, rgba(255,138,101,0.35), transparent 65%), radial-gradient(ellipse 60% 55% at 88% 8%, rgba(245,185,66,0.3), transparent 65%), radial-gradient(ellipse 55% 55% at 50% 105%, rgba(255,213,170,0.45), transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-[60%] -left-[30%] w-[160%] h-[160%] opacity-[0.1] animate-ray-rotate"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(245,185,66,0.6) 6deg, transparent 18deg, transparent 160deg, rgba(255,138,101,0.5) 172deg, transparent 184deg, transparent 360deg)",
            }}
          />
          <div className="absolute inset-0 bg-noise opacity-[0.35]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center py-20">

          {/* LEFT — emotional typography + CTAs */}
          <div>
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-[4.5rem] font-black leading-[1.05] tracking-tight text-[#2b1d10]">
              {finaleHeadlineLines.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <span
                    className={`block transition-all duration-1000 ease-out ${
                      finaleVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ transitionDelay: `${i * 180}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            <p
              className={`max-w-md text-[#5c4a38] text-base sm:text-lg leading-relaxed mt-6 transition-all duration-700 ${
                finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              Every contribution, every hour, every voice moves communities closer to a future
              they build on their own strength. This is where you come in.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 mt-8 transition-all duration-700 ${
                finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="/csr"
                className="group inline-flex items-center gap-3 pl-8 pr-7 py-4 bg-[#d1481f] text-white font-bold text-sm rounded-full shadow-[0_20px_45px_-15px_rgba(209,72,31,0.55)] transition-[padding] duration-500 hover:pr-10"
              >
                Become A Partner
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-500" />
              </a>

              <a
                href="/volunteer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-[#c98a4b] text-[#8a5a2a] font-bold text-sm rounded-full overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#c98a4b] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Volunteer With Us</span>
              </a>
            </div>

            <div
              className={`mt-5 transition-all duration-700 ${finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: "750ms" }}
            >
              <a href="/donate" className="group inline-flex items-center gap-1.5 text-[#8a5a2a] font-bold text-sm hover:underline underline-offset-4">
                Support Our Mission
                <ArrowRight className="w-4 h-4 group-hover:w-6 transition-all duration-300" />
              </a>
            </div>

            <div
              className={`flex flex-wrap gap-x-10 gap-y-6 mt-12 pt-8 border-t border-[#c98a4b]/20 transition-all duration-700 ${
                finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              {finaleStats.map((s, i) => (
                <div key={s.label} className="group cursor-default">
                  <p className="text-3xl sm:text-4xl font-black text-[#c1481f] group-hover:scale-105 transition-transform duration-300">
                    {finaleStatValues[i].toLocaleString()}
                    {s.suffix}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8a5a2a]/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — abstract symbolic artwork */}
          <div
            className={`relative h-[340px] lg:h-[480px] flex items-center justify-center transition-all duration-[1400ms] ease-out ${
              finaleVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transformOrigin: "bottom center" }}
          >
            <div
              className="w-full h-full transition-transform duration-300 ease-out"
              style={{ transform: `translate(${finaleParallax.x * 10}px, ${finaleParallax.y * 8}px)` }}
            >
              <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="sunGlow" cx="50%" cy="88%" r="55%">
                    <stop offset="0%" stopColor="#f5b942" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#f5b942" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="canopyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6b9d6e" />
                    <stop offset="100%" stopColor="#4b7a52" />
                  </linearGradient>
                </defs>

                <circle cx="200" cy="440" r="150" fill="url(#sunGlow)" />
                {[60, 100, 140].map((r) => (
                  <path
                    key={r}
                    d={`M ${200 - r} 440 A ${r} ${r} 0 0 1 ${200 + r} 440`}
                    stroke="#d1481f"
                    strokeOpacity="0.25"
                    strokeWidth="1.5"
                  />
                ))}

                <path
                  d="M 30 448 C 100 430, 160 460, 220 440 C 280 422, 330 448, 390 434"
                  stroke="#c98a4b"
                  strokeOpacity="0.4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <path d="M 200 440 C 198 360, 202 300, 200 250" stroke="#8a5a2a" strokeWidth="6" strokeLinecap="round" />
                <path d="M 200 300 C 170 280, 140 260, 110 235" stroke="#8a5a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 200 300 C 230 280, 260 260, 290 235" stroke="#8a5a2a" strokeWidth="4" strokeLinecap="round" fill="none" />
                <path d="M 200 260 C 190 220, 190 190, 200 160" stroke="#8a5a2a" strokeWidth="4" strokeLinecap="round" fill="none" />

                {[
                  { cx: 110, cy: 235, r: 34 },
                  { cx: 290, cy: 235, r: 34 },
                  { cx: 200, cy: 160, r: 46 },
                  { cx: 155, cy: 195, r: 26 },
                  { cx: 245, cy: 195, r: 26 },
                ].map((c, i) => (
                  <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="url(#canopyGrad)" fillOpacity="0.75" />
                ))}

                {[
                  { x: 90, y: 90 },
                  { x: 300, y: 70 },
                  { x: 250, y: 110 },
                ].map((b, i) => (
                  <path
                    key={i}
                    d={`M ${b.x} ${b.y} q 8 -6 16 0 q 8 -6 16 0`}
                    stroke="#c1481f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-bird-bob"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                ))}

                {[
                  { x: 130, y: 420 },
                  { x: 260, y: 430 },
                  { x: 180, y: 410 },
                  { x: 220, y: 425 },
                ].map((p, i) => (
                  <circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="3"
                    fill="#f5b942"
                    className="animate-seed-rise"
                    style={{ animationDelay: `${i * 1.4}s` }}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
