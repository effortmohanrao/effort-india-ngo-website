"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ShieldCheck,
  Users,
  Sparkles,
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
  Camera,
  Droplets
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

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

const chapterWorldsData = [
  {
    id: "1999",
    era: "1999",
    phase: "CHAPTER 01 / ORIGIN",
    worldName: "THE ORIGIN",
    subtitle: "Where Everything Began",
    bgClass: "bg-[#faf6f0]",
    cardStyle: "bg-white/95 border-amber-900/20 shadow-2xl text-stone-900",
    headerTextColor: "text-stone-950",
    subtitleColor: "text-amber-950 font-serif",
    phaseBadge: "bg-amber-100 text-amber-900 border-amber-300 font-extrabold",
    storyBoxStyle: "bg-amber-50/90 border-amber-200/90 text-stone-800",
    milestoneTextColor: "text-stone-800",
    milestoneCheckColor: "#b45309",
    navBtnStyle: "bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold border-amber-300",
    accentColor: "#92400e",
    headingFont: "font-serif",
    desc: "[HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC 1999 STORY HERE] EFFORT was founded in 1999 in Martur, Prakasam District, Andhra Pradesh, on the core conviction that rural development in India takes place in proportion to agricultural growth. EFFORT is registered as a non-profit empowerment society (Reg. No. 340/1999).",
    archivalMarks: [
      "Registration Seal: Reg. No. 340/1999 (Martur, AP)",
      "Founding Premise: Agricultural Empowerment = Poverty Eradication",
      "Pioneer Field Directors & Social Development Team"
    ],
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2000-2009",
    era: "2000–2009",
    phase: "CHAPTER 02 / FOUNDATION",
    worldName: "THE FOUNDATION",
    subtitle: "Institutionalizing Grassroots Action",
    bgClass: "bg-[#451a03]",
    cardStyle: "bg-stone-900/90 border-amber-500/40 shadow-2xl text-amber-50",
    headerTextColor: "text-amber-50",
    subtitleColor: "text-amber-300 font-sans font-black",
    phaseBadge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-extrabold",
    storyBoxStyle: "bg-amber-950/80 border-amber-700/50 text-amber-100",
    milestoneTextColor: "text-amber-100",
    milestoneCheckColor: "#f97316",
    navBtnStyle: "bg-amber-900/60 hover:bg-amber-800 text-amber-100 font-bold border-amber-600/50",
    accentColor: "#f97316",
    headingFont: "font-sans font-black tracking-tight",
    desc: "[HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC 2000–2009 STORY HERE] Over this foundation decade, EFFORT constructed structural community systems: expanding from single-village pilots to multi-district rural clusters, women-led SHG micro-finance groups, and watershed harvesting projects.",
    archivalMarks: [
      "Multi-District Structural Growth Across Andhra Pradesh",
      "Integrated SHG Women Cooperatives & Credit Systems",
      "Rainwater Harvesting, Soil Conservation & Field Schools"
    ],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2009-2016",
    era: "2009–2016",
    phase: "CHAPTER 03 / EXPANSION",
    worldName: "THE EXPANSION",
    subtitle: "Permanent Footprint Across 1,900+ Villages",
    bgClass: "bg-[#0f172a]",
    cardStyle: "bg-slate-900/90 border-sky-500/40 shadow-2xl text-slate-50",
    headerTextColor: "text-slate-50",
    subtitleColor: "text-sky-300 font-sans font-black",
    phaseBadge: "bg-sky-500/20 text-sky-300 border-sky-500/40 font-extrabold",
    storyBoxStyle: "bg-slate-800/80 border-sky-600/40 text-slate-100",
    milestoneTextColor: "text-slate-100",
    milestoneCheckColor: "#38bdf8",
    navBtnStyle: "bg-sky-950/80 hover:bg-sky-900 text-sky-200 font-bold border-sky-600/50",
    accentColor: "#38bdf8",
    headingFont: "font-sans font-black tracking-tight",
    desc: "[HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC 2009–2016 STORY HERE] Expanding beyond periodic field visits to permanent cluster centers inside rural communities. Formalized Farmer Producer Organizations (FPOs) and MACS Cooperatives with NABARD and GIZ support.",
    archivalMarks: [
      "1,909 Villages Reached Across 37 Operational Districts",
      "Farmer Producer Organizations (FPOs) & MACS Cooperatives",
      "Strategic Alliances with NABARD, GIZ & State Agencies"
    ],
    icon: Compass,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2016-2025",
    era: "2016–2025",
    phase: "CHAPTER 04 / TRANSFORMATION",
    worldName: "THE TRANSFORMATION",
    subtitle: "Auditable Outcomes & National Footprint",
    bgClass: "bg-[#09090b]",
    cardStyle: "bg-zinc-900/90 border-lime-500/40 shadow-2xl text-zinc-50",
    headerTextColor: "text-zinc-50",
    subtitleColor: "text-[#a3e635] font-mono font-black",
    phaseBadge: "bg-lime-500/20 text-[#a3e635] border-lime-500/40 font-extrabold",
    storyBoxStyle: "bg-zinc-800/80 border-lime-600/40 text-zinc-100",
    milestoneTextColor: "text-zinc-100",
    milestoneCheckColor: "#a3e635",
    navBtnStyle: "bg-zinc-800 hover:bg-zinc-700 text-lime-300 font-bold border-lime-600/50",
    accentColor: "#a3e635",
    headingFont: "font-mono font-black tracking-tight",
    desc: "[HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC 2016–2025 STORY HERE] Redefined social impact measurement: shifting to auditable family income enhancement, water security, and women's economic independence, reaching 2.67 Lakh families across 9 states.",
    archivalMarks: [
      "2,67,000+ Families Empowered Across 9 Indian States",
      "2,702+ Water Harvesting Structures & Climate Resilience",
      "100% FCRA & 80G Statutory Compliance & CSR Gold Standards"
    ],
    icon: Award,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2026-2030",
    era: "2026–2030",
    phase: "CHAPTER 05 / 2.0 NEXT GEN",
    worldName: "2.0 THE NEXT GENERATION",
    subtitle: "Pioneering Next-Gen NGO Ecosystems",
    bgClass: "bg-[#faf6f0]",
    cardStyle: "bg-white/95 border-amber-900/20 shadow-2xl text-stone-900",
    headerTextColor: "text-[#4a1220]",
    subtitleColor: "text-[#4a1220] font-black",
    phaseBadge: "bg-[#4a1220] text-amber-100 border-amber-900/30 font-extrabold",
    storyBoxStyle: "bg-amber-50/90 border-amber-200 text-stone-800",
    milestoneTextColor: "text-stone-800",
    milestoneCheckColor: "#92400e",
    navBtnStyle: "bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold border-amber-300",
    accentColor: "#92400e",
    headingFont: "font-black tracking-tight",
    desc: "[HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC 2026–2030 VISION HERE] Stepping into EFFORT 2.0: Sustainable community-led initiatives, carbon-smart farming extension, youth skills incubators, and empowering 5,000+ model villages by 2030.",
    archivalMarks: [
      "Sustainable Agriculture & Climate-Resilient Extension Models",
      "Youth Skill Development Incubators & SHG Micro-Finance Networks",
      "Targeting 5,000 Sustainable Model Villages Across Rural India"
    ],
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
  },
];

const futurePillars20World = [
  {
    num: "01",
    title: "NEXT GENERATION",
    desc: "Climate-smart agriculture, carbon credit farming models & crop diversification.",
    icon: Sprout,
  },
  {
    num: "02",
    title: "DIGITAL EVOLUTION",
    desc: "AI farm advisory services, IoT watershed telemetry & digital record systems.",
    icon: Zap,
  },
  {
    num: "03",
    title: "COMMUNITY OWNERSHIP",
    desc: "100% self-governing SHG federations and farmer-owned MACS cooperatives.",
    icon: Users,
  },
  {
    num: "04",
    title: "NEW PARTNERSHIPS",
    desc: "Global CSR alliances with Fortune 500 foundations and international bodies.",
    icon: Handshake,
  },
  {
    num: "05",
    title: "SCALE & IMPACT",
    desc: "Scaling grassroots reach to 5,000+ model sustainable villages across India.",
    icon: Globe2,
  },
  {
    num: "06",
    title: "FUTURE VISION",
    desc: "Youth digital skill incubators, green tech entrepreneurship & climate resilience.",
    icon: ShieldCheck,
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
  name: "Sri D. Sudhakar",
  title: "Founder & Executive Director, EFFORT NGO",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  quote:
    "For over 27 years since registering EFFORT in 1999 under Society Registration 340/1999, our core directive has remained clear: true development is achieved when rural communities possess self-sustaining institutions. By co-designing programs alongside FPOs, SHGs, and corporate partners, we transform grassroots potential into lasting socio-economic resilience.",
  badges: ["27+ Years Grassroots Service", "FPO & SHG Governance Leader", "CSR Strategy & Statutory Compliance"],
  socials: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  galleryImages: [
    { title: "Watershed & Water Ingestion Project", url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" },
    { title: "Community FPO Farmers Training", url: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&q=80&w=400" },
    { title: "SHG Women Governance Leadership", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
    { title: "Corporate CSR Partner Summit", url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400" },
    { title: "Field Operations Across 1,909 Villages", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" },
    { title: "Climate Smart Agriculture Field Demo", url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=400" },
  ],
};

type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  intro: string;
  socials: {
    linkedin: string;
    instagram: string;
    facebook: string;
  };
};

const leadershipTeam: LeadershipMember[] = [
  {
    name: "K. Rajeshwari",
    role: "Director – Women Empowerment & SHG Governance",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    intro: "Oversees 1,275 Self-Help Groups (SHGs) and 51 MACS Cooperatives across 9 operating states, pioneering micro-enterprise leadership for 14,750+ women.",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    name: "Dr. P. Venkateswarlu",
    role: "Chief Operating Officer & Field Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    intro: "Leads field implementation teams across 1,909 villages and 37 districts, driving 50 completed and 13 active multi-year development projects.",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    name: "M. Anitha Rao",
    role: "Head of Corporate CSR & Statutory Alliances",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    intro: "Manages CSR Schedule VII partnerships with NABARD, GIZ, Reliance Foundation, and Corteva, ensuring 100% auditable Utilization Certificates (UC).",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    name: "S. Chandra Sekhar",
    role: "Lead Agronomist & Watershed Infrastructure",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    intro: "Directs climate-smart farming, Direct Seeded Rice (DSR) demos, and 2,702 water harvesting structures empowering 1,68,500+ smallholder farmers.",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
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
  { title: "Regular Transparent Reporting", icon: Eye, detail: "Field progress shared with partners on a regular schedule, not just at year-end.", kind: "seal" },
  { title: "Digital Record-Keeping", icon: BarChart3, detail: "Program data tracked digitally alongside field documentation.", kind: "seal" },
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
  const [storyRef, storyVisible] = useScrollReveal<HTMLElement>();
  const [activeStoryChapter, setActiveStoryChapter] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [vmRef, vmVisible] = useScrollReveal<HTMLElement>();
  const [activeVMSlide, setActiveVMSlide] = useState(0);
  const [vmPaused, setVmPaused] = useState(false);
  const [valuesRef, valuesVisible] = useScrollReveal<HTMLElement>();
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [leadershipRef, leadershipVisible] = useScrollReveal<HTMLElement>();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [philosophyRef, philosophyVisible] = useScrollReveal<HTMLElement>();
  const [compareRef, compareVisible] = useScrollReveal<HTMLElement>();
  const [activeWhyChooseTab, setActiveWhyChooseTab] = useState(0);
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
    if (!vmVisible || vmPaused) return;
    const id = setInterval(() => {
      setActiveVMSlide((prev) => (prev + 1) % visionMissionSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [vmVisible, vmPaused]);


  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- SECTION 1: ULTRA-PREMIUM EXECUTIVE ABOUT US HERO BANNER --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#064e3b] to-slate-900 text-white -mt-12 pt-16 pb-20 lg:pt-24 lg:pb-32 shadow-2xl border-b border-emerald-500/20">
        
        {/* Dynamic Background Atmosphere (Silk Orbs, Dot Matrix & Laser Sweep) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] animate-breathe-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[150px] animate-breathe-pulse" style={{ animationDelay: "3s" }} />
          <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[130px] animate-breathe-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(rgba(255,255,255,0.25)_1.5px,transparent_1.5px)] [background-size:28px_28px]" />
          <div className="bg-noise absolute inset-0 opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left 7 cols: Editorial Positioning, Core Impact Metrics & Action CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Micro Registration Pill Badge */}
              <div
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>ESTD. 1999 • SOCIETY REGISTRATION 340/1999</span>
              </div>

              {/* Main Executive Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">
                  Building Hope.
                </span>
                <span className="block text-white">
                  Creating Sustainable Change.
                </span>
              </h1>

              {/* Editorial Description */}
              <p
                className={`text-emerald-100/90 text-base sm:text-lg leading-relaxed font-medium max-w-2xl transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                Founded in 1999 at Martur, Prakasam District (Society Reg. 340/1999), EFFORT NGO has spent <strong className="text-amber-300 font-extrabold">27 years</strong> building climate-resilient farming, water harvesting, and community-led collectives across rural India — from a single registered society to a multi-state, multi-sector organization.
              </p>

              {/* Core Executive Quick Metrics Strip (4 Crisp White Highlight Cards) */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800">50 + 13</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Completed &amp; Active Projects</span>
                </div>
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-amber-700">1,909</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Villages (9 States)</span>
                </div>
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800">2.67 Lakh</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Families Impacted</span>
                </div>
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-amber-700">1,368</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Community Collectives</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  <span>Explore Our 27-Year Journey</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#leadership"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm hover:bg-white/20 hover:border-emerald-400 transition-all"
                >
                  <Users className="w-4 h-4 text-amber-300" />
                  <span>Meet Our Leadership Team</span>
                </a>
              </div>

              {/* Statutory Compliance Badges */}
              <div
                className={`flex flex-wrap gap-4 pt-2 text-xs font-bold text-emerald-200/80 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "750ms" }}
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% FCRA &amp; 80G Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> NABARD &amp; GIZ Partnered
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-emerald-400" /> Registered Society #340/1999
                </span>
              </div>

            </div>

            {/* Right 5 cols: Executive Glassmorphic Hero Showcase Container */}
            <div
              className={`lg:col-span-5 relative transition-all duration-1000 ${
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div className="relative rounded-[36px] overflow-hidden border-2 border-emerald-400/30 bg-slate-900/60 backdrop-blur-2xl p-4 shadow-[0_30px_90px_rgba(0,0,0,0.6)] group">
                
                {/* Main Cinematic Image */}
                <div className="relative h-[420px] sm:h-[460px] rounded-[28px] overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200"
                    alt="EFFORT NGO Rural Community Field Operations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />
                  
                  {/* Laser Light Sweep */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sweep" />
                  </div>
                </div>

                {/* Top Right Floating Pill Badge */}
                <div className="absolute top-8 right-8 z-10 animate-breathing-shadow bg-slate-950/90 backdrop-blur-xl border border-amber-400/40 rounded-2xl px-4 py-2 shadow-2xl">
                  <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>27 YEARS FIELD EXCELLENCE</span>
                  </span>
                </div>

                {/* Bottom Left Floating Glassmorphic Impact Overlay */}
                <div className="absolute bottom-8 left-8 right-8 z-10 bg-slate-950/90 backdrop-blur-2xl border border-emerald-500/40 rounded-2xl p-4 shadow-2xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      COMMUNITY INSTITUTIONS
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold">
                      ACTIVE IN FIELD
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200 leading-snug">
                    Governance models carried forward by 1,275 SHGs &amp; 51 MACS Women Cooperatives across 37 districts.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* --- OUR STORY SECTION ("THE CHAPTER WORLDS" GRAPHIC STORYTELLING EXPERIENCE) --- */}
      <section ref={storyRef} id="journey" className="relative overflow-hidden py-24 lg:py-36 transition-colors duration-1000 border-y border-black/20">
        
        {/* Dynamic World Atmosphere Background */}
        {(() => {
          const currentWorld = chapterWorldsData[activeStoryChapter];
          return (
            <div className={`absolute inset-0 transition-all duration-1000 ${currentWorld.bgClass}`}>
              {/* World 1: Paper Grain & Archival Grid */}
              {currentWorld.id === "1999" && (
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#92400e_1px,transparent_1px)] [background-size:24px_24px]" />
              )}
              {/* World 2: Terracotta Grid Architecture */}
              {currentWorld.id === "2000-2009" && (
                <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#ea580c_1px,transparent_1px),linear-gradient(to_bottom,#ea580c_1px,transparent_1px)] [background-size:40px_40px]" />
              )}
              {/* World 3: Cobalt Expansion Map Radial Waves */}
              {currentWorld.id === "2009-2016" && (
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,#38bdf8_1px,transparent_1px)] [background-size:32px_32px]" />
              )}
              {/* World 4: Transformation Lab Technical Lines */}
              {currentWorld.id === "2016-2025" && (
                <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,#a3e635_1px,transparent_1px),linear-gradient(to_bottom,#a3e635_1px,transparent_1px)] [background-size:20px_20px]" />
              )}
              {/* World 5: Futuristic Obsidian Particle Sweep */}
              {currentWorld.id === "2026-2030" && (
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#a855f7_1.5px,transparent_1.5px)] [background-size:28px_28px] animate-pulse" />
              )}
            </div>
          );
        })()}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          {/* Opening Editorial Header */}
          {(() => {
            const currentWorld = chapterWorldsData[activeStoryChapter];
            const isLightWorld = currentWorld.id === "1999";
            return (
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-[0.3em] shadow-sm ${
                  isLightWorld
                    ? "bg-amber-100/90 border-amber-300 text-amber-950"
                    : "bg-slate-900/90 border-white/20 text-white"
                }`}>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>OUR STORY • THE CHAPTER WORLDS</span>
                </div>
                
                <h2 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] ${
                  isLightWorld ? "text-slate-950" : "text-white"
                }`}>
                  From Where We Began{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-emerald-400 to-sky-400">
                    To Where We're Going.
                  </span>
                </h2>

                <p className={`text-sm sm:text-base max-w-2xl mx-auto font-medium ${
                  isLightWorld ? "text-slate-700" : "text-slate-200"
                }`}>
                  Travel through 5 distinct visual worlds — from our 1999 founding in Andhra Pradesh to our next-generation 2.0 era.
                </p>
              </div>
            );
          })()}

          {/* World Selection Bar (Ultra-Crisp Glass Pill Track) */}
          <div className="relative p-3 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-300/90 shadow-2xl overflow-x-auto scrollbar-hide">
            <div className="flex items-center justify-between min-w-[850px] lg:min-w-0 gap-3">
              {chapterWorldsData.map((w, idx) => {
                const isActive = activeStoryChapter === idx;
                const IconComp = w.icon;
                const is20 = w.id === "2026-2030";
                return (
                  <button
                    key={w.id}
                    onClick={() => setActiveStoryChapter(idx)}
                    className={`relative flex-1 flex items-center justify-center gap-3 px-4 py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-500 group ${
                      isActive
                        ? is20
                          ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_35px_rgba(168,85,247,0.5)] font-black scale-[1.03]"
                          : "bg-slate-950 text-white shadow-xl font-black scale-[1.02]"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/90"
                    }`}
                  >
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                    }`}>
                      <IconComp className="w-4 h-4" />
                    </span>
                    <div className="text-left">
                      <span className="block text-[10px] uppercase font-black tracking-widest opacity-80">{w.era}</span>
                      <span className="block font-black truncate text-xs">{w.worldName}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE WORLD SHOWCASE EXHIBITION */}
          {(() => {
            const currentWorld = chapterWorldsData[activeStoryChapter];
            const IconComp = currentWorld.icon;
            const is20World = currentWorld.id === "2026-2030";

            return (
              <div className="space-y-12">
                
                {/* WORLDS 01 TO 04 */}
                {!is20World ? (
                  <div className={`relative rounded-[40px] overflow-hidden border-2 p-8 sm:p-12 lg:p-16 transition-all duration-700 shadow-2xl ${currentWorld.cardStyle}`}>
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                      
                      {/* Left 7 Cols: World Narrative & Archival Marks */}
                      <div className="lg:col-span-7 space-y-6">
                        
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <span className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border ${currentWorld.phaseBadge}`}>
                            {currentWorld.phase}
                          </span>
                          <span className="text-4xl sm:text-6xl font-black opacity-30 tracking-tighter">
                            {currentWorld.era}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs font-black uppercase tracking-[0.25em] opacity-80 block mb-1">
                            WORLD 0{activeStoryChapter + 1} • {currentWorld.worldName}
                          </span>
                          <h3 className={`text-3xl sm:text-5xl font-black leading-tight ${currentWorld.subtitleColor}`}>
                            {currentWorld.subtitle}
                          </h3>
                        </div>

                        {/* Story Box */}
                        <div className={`p-6 rounded-2xl border space-y-3 shadow-inner ${currentWorld.storyBoxStyle}`}>
                          <p className="text-sm sm:text-base leading-relaxed font-medium">
                            {currentWorld.desc}
                          </p>
                        </div>

                        {/* Archival Marks List */}
                        <div className="space-y-3 pt-2">
                          <span className="text-xs font-black uppercase tracking-widest block opacity-85">
                            KEY WORLD MILESTONES:
                          </span>
                          <div className="space-y-2.5">
                            {currentWorld.archivalMarks.map((mark, mIdx) => (
                              <div key={mIdx} className={`flex items-start gap-3 text-xs sm:text-sm font-semibold ${currentWorld.milestoneTextColor}`}>
                                <CheckCircle2 className="w-4.5 h-4.5 shrink-0 mt-0.5" style={{ color: currentWorld.milestoneCheckColor }} />
                                <span>{mark}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Navigation controls */}
                        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-current/20">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setActiveStoryChapter((prev) => (prev > 0 ? prev - 1 : chapterWorldsData.length - 1))}
                              className={`px-4 py-2 rounded-xl text-xs transition-all border ${currentWorld.navBtnStyle}`}
                            >
                              ← Previous World
                            </button>
                            <button
                              onClick={() => setActiveStoryChapter((prev) => (prev < chapterWorldsData.length - 1 ? prev + 1 : 0))}
                              className={`px-4 py-2 rounded-xl text-xs transition-all border ${currentWorld.navBtnStyle}`}
                            >
                              Next World →
                            </button>
                          </div>
                          
                          <span className="text-xs font-bold opacity-80">
                            Currently exploring {currentWorld.worldName}
                          </span>
                        </div>

                      </div>

                      {/* Right 5 Cols: Visual World Photographic Frame */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl group">
                          <img
                            src={currentWorld.image}
                            alt={currentWorld.worldName}
                            className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          <div className="absolute bottom-5 left-5 right-5 text-white">
                            <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block">
                              ARCHIVAL MEDIA · {currentWorld.era}
                            </span>
                            <p className="text-xs font-bold leading-snug">
                              {currentWorld.worldName} — Grassroots Field Operations
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  
                  /* WORLD 5: 2026–2030 "2.0 THE NEXT GENERATION" FULLY CREAM NGO SHOWCASE */
                  <div className="relative rounded-[40px] overflow-hidden border-2 border-amber-900/20 bg-[#faf6f0] p-8 sm:p-12 lg:p-14 shadow-2xl space-y-12 text-stone-900">
                    
                    {/* Floating Animated Ambient Liquid Bubbles Background (NO DOTS) */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      {/* Floating Liquid Bubble Orbs */}
                      <div className="absolute top-[-15%] left-[10%] w-[380px] h-[380px] bg-amber-400/25 rounded-full blur-[100px] animate-liquid-drift-a" />
                      <div className="absolute bottom-[-15%] right-[10%] w-[420px] h-[420px] bg-rose-400/20 rounded-full blur-[110px] animate-liquid-drift-b" />
                      <div className="absolute top-[35%] right-[25%] w-[300px] h-[300px] bg-amber-300/30 rounded-full blur-[90px] animate-liquid-drift-c" />
                      <div className="absolute bottom-[20%] left-[20%] w-[320px] h-[320px] bg-orange-300/20 rounded-full blur-[100px] animate-liquid-drift-a" style={{ animationDelay: "3s" }} />

                      {/* Smooth Ambient Glow Radial Mesh */}
                      <div
                        className="absolute inset-0 opacity-80"
                        style={{
                          background:
                            "radial-gradient(ellipse 70% 60% at 12% 90%, rgba(255, 183, 77, 0.25), transparent 65%), radial-gradient(ellipse 60% 55% at 88% 8%, rgba(251, 191, 36, 0.2), transparent 65%), radial-gradient(ellipse 55% 55% at 50% 105%, rgba(254, 215, 170, 0.3), transparent 70%)",
                        }}
                      />
                    </div>

                    {/* HERO DISPLAY */}
                    <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                      
                      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#4a1220] text-amber-100 border border-amber-900/30 text-xs font-black uppercase tracking-[0.3em] shadow-md">
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>2026 – 2030 • THE NEXT GENERATION ERA</span>
                      </div>

                      {/* GIANT MAROON 2.0 TITLE DISPLAY */}
                      <div className="relative py-4 flex flex-col items-center justify-center">
                        
                        {/* Elegant 2.0 Number Display in Rich Maroon */}
                        <div className="relative z-10 flex items-baseline justify-center gap-1 font-black tracking-tighter leading-none select-none">
                          <span className="text-8xl sm:text-[140px] lg:text-[180px] text-transparent bg-clip-text bg-gradient-to-r from-[#4a1220] via-[#6b1d32] to-[#380b18] drop-shadow-sm">
                            2
                          </span>
                          
                          {/* Warm Luminous Dot */}
                          <span className="relative flex items-center justify-center mx-1 self-end mb-4 sm:mb-8">
                            <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#92400e] opacity-60 absolute" />
                            <span className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#92400e] shadow-[0_0_15px_#92400e] relative" />
                          </span>

                          <span className="text-8xl sm:text-[140px] lg:text-[180px] text-transparent bg-clip-text bg-gradient-to-r from-[#380b18] via-[#6b1d32] to-[#4a1220] drop-shadow-sm">
                            0
                          </span>
                        </div>

                        <p className="relative z-10 text-base sm:text-xl font-black uppercase tracking-[0.35em] text-[#4a1220] mt-4">
                          EVERYTHING WE LEARNED BECOMES WHAT COMES NEXT
                        </p>
                      </div>

                      {/* Emotional Bridge Statement */}
                      <div className="space-y-1.5 py-4 border-y border-amber-900/20 max-w-2xl mx-auto">
                        <p className="text-xs font-bold uppercase tracking-widest text-amber-900/80">
                          OUR HISTORY BUILT THE FOUNDATION.
                        </p>
                        <p className="text-lg sm:text-2xl font-black tracking-wide text-[#4a1220]">
                          OUR FUTURE WILL BUILD WHAT COMES NEXT.
                        </p>
                      </div>

                      {/* Vision Text Box */}
                      <p className="text-stone-800 text-sm sm:text-base leading-relaxed font-medium bg-white/90 backdrop-blur-xl border border-amber-200 rounded-2xl p-6 shadow-md max-w-3xl mx-auto">
                        {currentWorld.desc}
                      </p>

                    </div>

                    {/* 6 FUTURE PILLARS GRID */}
                    <div className="relative z-10 space-y-6">
                      
                      <div className="text-center space-y-1">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-[#4a1220] block">
                          2.0 STRATEGIC FUTURE PILLARS
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-stone-900">
                          Connected Future Ecosystem
                        </h4>
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {futurePillars20World.map((pillar, pIdx) => {
                          const IconComp = pillar.icon;
                          const isHovered = hoveredPillar === pIdx;
                          return (
                            <div
                              key={pillar.num}
                              onMouseEnter={() => setHoveredPillar(pIdx)}
                              onMouseLeave={() => setHoveredPillar(null)}
                              className={`group relative rounded-3xl p-6 border transition-all duration-500 cursor-pointer overflow-hidden ${
                                isHovered
                                  ? "bg-white border-[#4a1220] shadow-xl -translate-y-1.5"
                                  : "bg-white/90 border-amber-900/20 hover:border-amber-900/40"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-4 mb-4">
                                <span className="text-xs font-black text-[#4a1220] tracking-widest px-3 py-1 rounded-full bg-amber-100 border border-amber-300">
                                  PILLAR {pillar.num}
                                </span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                  isHovered ? "bg-[#4a1220] text-amber-100 scale-110" : "bg-amber-100 text-[#4a1220]"
                                }`}>
                                  <IconComp className="w-5 h-5" />
                                </div>
                              </div>

                              <h5 className="text-base font-black text-[#4a1220] mb-2 group-hover:text-amber-900 transition-colors">
                                {pillar.title}
                              </h5>

                              <p className="text-xs text-stone-700 font-medium leading-relaxed">
                                {pillar.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>

                    </div>

                    {/* FINAL 2.0 CALL TO ACTION */}
                    <div className="relative z-10 pt-8 border-t border-amber-900/20 text-center space-y-6 max-w-xl mx-auto">
                      
                      <h4 className="text-2xl font-black text-[#4a1220]">
                        BE PART OF THE NEXT CHAPTER
                      </h4>

                      <p className="text-xs text-stone-700 font-medium leading-relaxed">
                        [HISTORICAL STORY PLACEHOLDER — INSERT AUTHENTIC PARTNERSHIP MESSAGE HERE] Join EFFORT in shaping the future of rural development through sustainable CSR alliances and grassroots empowerment.
                      </p>

                      <div>
                        <a
                          href="/get-involved"
                          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#4a1220] hover:bg-[#380b18] text-amber-50 font-black text-sm shadow-xl hover:-translate-y-1 transition-all group"
                        >
                          <span>EXPLORE OUR 2.0 VISION</span>
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </div>

                    </div>

                  </div>
                )}

              </div>
            );
          })()}

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
                <span className="pointer-events-none absolute -top-6 right-2 text-[130px] font-black leading-none select-none animate-breathe-numeric">
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

      {/* --- CORE VALUES SECTION (INTERACTIVE ROTATING ORBIT ENGINE WITH LASER CONNECTOR & RIGHT DETAIL SUITE) --- */}
      <section ref={valuesRef} className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0b3d2e] to-slate-950 py-20 lg:py-28 text-white border-t border-emerald-400/30">
        {/* Soft Glowing Liquid Mixed Ambient Glows & Dynamic Mesh */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[15%] w-[650px] h-[650px] bg-emerald-500/25 rounded-full blur-[170px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] left-[10%] w-[550px] h-[550px] bg-amber-500/25 rounded-full blur-[160px] animate-liquid-drift-b" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-teal-500/20 rounded-full blur-[180px] animate-aurora-silk-1" />
          <div className="bg-noise absolute inset-0 opacity-15" />
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
          
          {/* HEADER IN TOP CENTER MIDDLE */}
          <div
            className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-widest shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> OUR CORE GUIDING PRINCIPLES
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              The Unshakable Values That <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300">Drive Every Ground Decision</span>
            </h2>

            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
              Tap any value below to see how we put it into practice in the field.
            </p>
          </div>

          {/* MAIN COMPOSITION: LEFT ROTATING ORBIT WHEEL + CONNECTOR BEAM + RIGHT DETAIL CARD */}
          <div
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 transition-all duration-1000 ${
              valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            
            {/* LEFT COLUMN: INTERACTIVE ROTATING ORBITAL WHEEL */}
            <div className="w-full max-w-[480px] sm:max-w-[520px] aspect-square relative shrink-0">

              {/* Glowing Ambient Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-emerald-400/30 pointer-events-none animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-amber-400/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-emerald-500/20 blur-[70px] pointer-events-none" />

              {/* Center Stationary Glass Emblem Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#052e22]/95 via-[#064e3b]/95 to-[#022c1c]/95 backdrop-blur-2xl border-2 border-emerald-400/80 z-20 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(16,185,129,0.5)] overflow-hidden">
                <div className="absolute inset-2 rounded-full border border-emerald-400/30" />
                <Gem className="w-8 h-8 text-emerald-300 mb-1 animate-bounce" />
                <p className="text-[11px] font-black uppercase tracking-widest text-emerald-300 relative z-10 leading-tight">
                  OUR<br />VALUES
                </p>
                <span className="text-[9px] font-bold text-amber-200/80 mt-0.5">Tap a Value</span>
              </div>

              {/* ROTATING ORBIT CONTAINER (LIQUID SMOOTH ROTATION) */}
              {(() => {
                const activeIdx = hoveredValue !== null ? hoveredValue : 0;
                const currentRotation = -activeIdx * 60;
                return (
                  <div
                    className="absolute inset-0 z-10"
                    style={{
                      transform: `rotate(${currentRotation}deg)`,
                      transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {/* SVG Ring Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 520 520">
                      {coreValues.map((val, i) => {
                        const angle = i * 60;
                        const rad = (angle * Math.PI) / 180;
                        const radius = 175;
                        const x = Number((260 + radius * Math.cos(rad)).toFixed(2));
                        const y = Number((260 + radius * Math.sin(rad)).toFixed(2));
                        const isSelected = activeIdx === i;
                        return (
                          <line
                            key={val.title}
                            x1="260"
                            y1="260"
                            x2={x}
                            y2={y}
                            stroke={isSelected ? "#10b981" : "#5eead4"}
                            strokeWidth={isSelected ? 4 : 2}
                            opacity={isSelected ? 0.8 : 0.25}
                            className="transition-all duration-300"
                          />
                        );
                      })}
                    </svg>

                    {/* 6 Fixed-Size Orbiting Spheres (Counter-rotated so text stays upright) */}
                    {coreValues.map((val, i) => {
                      const angle = i * 60;
                      const rad = (angle * Math.PI) / 180;
                      const radius = 175;
                      const x = Number((radius * Math.cos(rad)).toFixed(2));
                      const y = Number((radius * Math.sin(rad)).toFixed(2));
                      const isSelected = activeIdx === i;
                      const ValIcon = val.icon;
                      return (
                        <div
                          key={val.title}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <div
                            style={{
                              transform: `rotate(${-currentRotation}deg)`,
                              transition: "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
                            }}
                          >
                            <button
                              onClick={() => setHoveredValue(i)}
                              className={`group w-28 h-28 sm:w-32 sm:h-32 rounded-3xl backdrop-blur-2xl border-2 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center ${
                                isSelected
                                  ? "border-emerald-300 bg-slate-900/95 scale-110 z-30 shadow-[0_0_40px_rgba(16,185,129,0.8)]"
                                  : "bg-white/10 border-emerald-400/40 hover:border-emerald-300 hover:bg-slate-900/80 hover:scale-105"
                              }`}
                            >
                              <div className={`p-2 sm:p-2.5 rounded-2xl transition-all duration-300 ${isSelected ? "bg-emerald-400 text-slate-950 scale-110 mb-1" : "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"}`}>
                                <ValIcon className="w-5 h-5" />
                              </div>
                              <p className={`text-xs font-black mt-1 leading-tight transition-colors ${isSelected ? "text-emerald-300" : "text-white group-hover:text-emerald-200"}`}>
                                {val.title}
                              </p>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

            </div>

            {/* MIDDLE CONNECTOR BRIDGE (LINKS THE SELECTED VALUE TO ITS DETAIL CARD) */}
            <div className="hidden lg:flex items-center justify-center w-24 lg:w-36 shrink-0 relative z-30 -mx-6 lg:-mx-10">
              <div className="relative w-full h-10 flex items-center justify-center">
                {/* SVG Connector Line */}
                <svg className="w-full h-10 overflow-visible" viewBox="0 0 140 40" fill="none">
                  {/* Glowing Ambient Outer Glow Path */}
                  <line x1="0" y1="20" x2="140" y2="20" stroke="#059669" strokeWidth="6" opacity="0.35" strokeLinecap="round" />

                  {/* Solid Base Conduit */}
                  <line x1="0" y1="20" x2="140" y2="20" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Streaming Dotted Flow Line */}
                  <line
                    x1="0"
                    y1="20"
                    x2="140"
                    y2="20"
                    stroke="#f59e0b"
                    strokeWidth="3.5"
                    strokeDasharray="6 10"
                    strokeLinecap="round"
                    className="animate-electric-current"
                  />

                  {/* Second Dotted Wave */}
                  <line
                    x1="0"
                    y1="20"
                    x2="140"
                    y2="20"
                    stroke="#34d399"
                    strokeWidth="2.5"
                    strokeDasharray="4 8"
                    strokeLinecap="round"
                    className="animate-electric-current"
                    style={{ animationDuration: "0.35s", animationDirection: "reverse" }}
                  />

                  {/* Left Attachment Node */}
                  <circle cx="0" cy="20" r="5" fill="#34d399" className="shadow-[0_0_12px_#34d399]" />
                  <circle cx="0" cy="20" r="2.5" fill="#ffffff" />

                  {/* Right Attachment Node */}
                  <circle cx="140" cy="20" r="5" fill="#f59e0b" className="shadow-[0_0_12px_#f59e0b]" />
                  <circle cx="140" cy="20" r="2.5" fill="#ffffff" />
                </svg>

                {/* Central Pulse Marker */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-300 shadow-[0_0_20px_#34d399] animate-ping" />
              </div>
            </div>

            {/* RIGHT COLUMN: ACTIVE VALUE DETAIL SUITE CARD (WITH INSTANT DATA BLINK GLOW) */}
            <div className="w-full flex-1 max-w-lg lg:max-w-xl">
              {(() => {
                const activeIndex = hoveredValue !== null ? hoveredValue : 0;
                const activeVal = coreValues[activeIndex];
                const ActiveIcon = activeVal.icon;

                const tags = [
                  "100% Statutory Schedule VII Verified",
                  "Quarterly Audited UC Filings Delivered",
                  "Field-Tested Grassroots Tech Integration",
                  "Community-First Needs Diagnostics",
                  "100% Local Ownership & Self-Governance",
                  "27 Years Unbroken Ground Operation",
                ];

                return (
                  <div
                    key={activeIndex}
                    className="animate-card-data-pulse bg-slate-950/85 backdrop-blur-2xl border-2 border-emerald-400/80 rounded-[36px] p-7 sm:p-9 shadow-[0_25px_60px_rgba(16,185,129,0.35)] space-y-6 relative overflow-hidden group"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400" />

                    {/* Background Watermark Icon */}
                    <ActiveIcon className="w-40 h-40 text-emerald-400/5 absolute -bottom-6 -right-6 pointer-events-none" />

                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-4 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-600 text-slate-950 flex items-center justify-center shadow-lg shrink-0">
                          <ActiveIcon className="w-7 h-7" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Value 0{activeIndex + 1} of 06</span>
                          <h3 className="text-2xl font-black text-white">{activeVal.title}</h3>
                        </div>
                      </div>

                      <span className="px-3.5 py-1.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/50 text-[10px] font-black uppercase tracking-wider shrink-0 shadow-sm animate-pulse">
                        Selected
                      </span>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 relative z-10">
                      <p className="text-emerald-100/90 text-sm sm:text-base font-medium leading-relaxed">
                        {activeVal.desc}
                      </p>
                    </div>

                    {/* Statutory Verification Tag */}
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-emerald-400/20 relative z-10 space-y-1 shadow-inner">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Statutory Verification</span>
                      </div>
                      <p className="text-xs text-slate-200 font-semibold pl-6">
                        {tags[activeIndex]}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 relative z-10">
                      <a
                        href="/get-involved"
                        className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all group"
                      >
                        Explore {activeVal.title} Commitment <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

          {/* BOTTOM FULL-WIDTH MIXED COSMIC TRUST BAR */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-400/20">
            {[
              { label: "Community Co-Design", desc: "100% programs planned with local village leaders", icon: Users },
              { label: "Statutory Accountability", desc: "Quarterly Utilization Certificates and GIS logs", icon: ShieldCheck },
              { label: "Self-Sustaining Impact", desc: "Local institutions designed to thrive permanently", icon: Sprout },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:border-emerald-400/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">{item.label}</h4>
                  <p className="text-xs text-emerald-100/80 font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- LEADERSHIP & GOVERNANCE ECOSYSTEM (INTERACTIVE LEADERSHIP CONSTELLATION) --- */}
      <section
        ref={leadershipRef}
        id="leadership"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          setMousePos({ x, y });
        }}
        className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center py-24 lg:py-36 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE4] to-[#EFE6D8] text-slate-900 border-t border-emerald-900/10 shadow-[inset_0_0_120px_rgba(6,95,70,0.04)]"
      >
        {/* Layer 1: Background Typographic Landmark (With Dynamic Breathing Color Shift) */}
        <div className="text-[15vw] font-black leading-none pointer-events-none select-none absolute top-12 left-0 right-0 text-center tracking-tighter uppercase font-sans z-0 animate-breathe-color">
          27+ YEARS LEADERSHIP
        </div>

        {/* Layer 2: Living Environment Backdrop (Micro Grid, Breathing Color Orbs, Noise) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#065f46_1.5px,transparent_1.5px),linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] [background-size:24px_24px,12px_12px,12px_12px]" />
          
          <div
            className="absolute top-[-10%] left-[8%] w-[750px] h-[750px] bg-emerald-300/30 rounded-full blur-[160px] animate-breathe-pulse transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x * 24}px, ${mousePos.y * 24}px)` }}
          />
          <div
            className="absolute bottom-[-10%] right-[5%] w-[700px] h-[700px] bg-amber-300/25 rounded-full blur-[150px] animate-breathe-pulse transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`, animationDelay: "2.5s" }}
          />

          <div className="bg-noise absolute inset-0 opacity-15" />
        </div>

        <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 space-y-16">

          {/* Section Introduction: Clean Center-Aligned Editorial Composition */}
          <div
            className={`text-center max-w-3xl mx-auto mb-10 space-y-3 transition-all duration-700 ${
              leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-700/30 text-emerald-900 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-xs">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>LEADERSHIP &amp; GOVERNANCE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Leadership That Inspires <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-teal-800 to-amber-700 font-serif italic">Ground Action</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Steering EFFORT NGO for over 27 years under Society Registration 340/1999 with transparent governance, field operational excellence, and community-owned institutions across 1,909 villages.
            </p>
          </div>

          {/* --- MAIN EXECUTIVE SPOTLIGHT BOX (DYNAMIC COLORFUL ANIMATED EXECUTIVE BOX WITH PROVEN TRACK RECORD) --- */}
          <div
            className={`transition-all duration-1000 ${
              leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0c1f17] text-white backdrop-blur-2xl border-2 border-emerald-500/50 rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-[0_30px_90px_rgba(6,95,70,0.45)] hover:border-emerald-400 transition-all group overflow-hidden">
              
              {/* Dynamic Colorful Background Animations (Breathing Aurora Orbs & Laser Sweep) */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-light-sweep pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-400/25 rounded-full blur-3xl animate-breathe-pulse pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-breathe-pulse pointer-events-none" style={{ animationDelay: "2.5s" }} />
              <div className="bg-noise absolute inset-0 opacity-20 pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* COLUMN 1 (Left 3 cols): Executive Portrait & Social Dock */}
                <div className="lg:col-span-3 flex flex-col items-center text-center space-y-3.5 border-b lg:border-b-0 lg:border-r border-emerald-500/20 pb-6 lg:pb-0 lg:pr-6">
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-[28px] overflow-hidden border-4 border-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.3)] group/img">
                    <img
                      src={founderProfile.image}
                      alt={founderProfile.name}
                      className="w-full h-full object-cover group-hover/img:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{founderProfile.name}</h3>
                    <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300 mt-0.5">{founderProfile.title}</p>
                  </div>

                  {/* Official Social Dock */}
                  <div className="flex items-center gap-2.5 pt-0.5">
                    <a
                      href={founderProfile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-xs hover:bg-emerald-600 hover:border-emerald-400 hover:-translate-y-1 transition-all group/icon"
                    >
                      <LinkedinIcon className="w-4.5 h-4.5 text-white group-hover/icon:scale-110 transition-transform" />
                    </a>
                    <a
                      href={founderProfile.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram Profile"
                      className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-xs hover:bg-emerald-600 hover:border-emerald-400 hover:-translate-y-1 transition-all group/icon"
                    >
                      <InstagramIcon className="w-4.5 h-4.5 text-white group-hover/icon:scale-110 transition-transform" />
                    </a>
                    <a
                      href={founderProfile.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook Profile"
                      className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shadow-xs hover:bg-emerald-600 hover:border-emerald-400 hover:-translate-y-1 transition-all group/icon"
                    >
                      <FacebookIcon className="w-4.5 h-4.5 text-white group-hover/icon:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* COLUMN 2 (Middle 5 cols): Executive Statement & Proven Track Record Badges */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Track Record Callout Pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/40 text-emerald-300 text-[10px] font-black uppercase tracking-widest shadow-[0_0_12px_rgba(16,185,129,0.3)]">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>27-YEAR PROVEN FIELD TRACK RECORD</span>
                  </div>

                  <div className="relative bg-emerald-950/70 border-l-4 border-amber-400 rounded-r-2xl p-5 shadow-inner backdrop-blur-md">
                    <Quote className="w-6 h-6 text-amber-400/30 absolute top-3.5 right-3.5" />
                    <p className="text-emerald-100 text-xs sm:text-sm font-medium italic leading-relaxed relative z-10">
                      &ldquo;{founderProfile.quote}&rdquo;
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-wider text-amber-300 mt-2.5">
                      — Executive Leadership Statement • Society Reg. 340/1999
                    </p>
                  </div>

                  {/* Credentials Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-400/30 text-emerald-100 text-[10px] font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>27-YEAR PROVEN TRACK RECORD</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-400/30 text-emerald-100 text-[10px] font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>FPO &amp; SHG GOVERNANCE LEADER</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-emerald-900/60 border border-emerald-400/30 text-emerald-100 text-[10px] font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>CSR STATUTORY COMPLIANCE</span>
                    </div>
                  </div>
                </div>

                {/* COLUMN 3 (Right 4 cols): Embedded Hollywood Graphic Animated Digits HUD Box */}
                <div className="lg:col-span-4 bg-slate-950/95 backdrop-blur-2xl border-2 border-emerald-400/40 rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4 relative group/hud overflow-hidden text-white">
                  
                  {/* Hollywood Cyber Light Sweep & Ambient Neon Orbs */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent animate-light-sweep pointer-events-none" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none group-hover/hud:scale-150 transition-transform duration-1000" />

                  {/* Top HUD Status Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-300">
                        Our Track Record
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[9px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>LIVE METRICS</span>
                    </span>
                  </div>

                  {/* HOLLYWOOD-LEVEL GRAPHIC ANIMATED DIGITS GRID */}
                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    
                    {/* DIGIT 1: 50 (COMPLETED PROJECTS / HALF CENTURY) */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center space-y-0.5 group/card hover:border-emerald-400 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-emerald-400 rounded-tr-md opacity-80" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" /> HALF CENTURY
                      </span>
                      <div className="text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-hero-bob">
                        50<span className="text-xl text-emerald-400 font-sans">+</span>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                        COMPLETED
                      </span>
                    </div>

                    {/* DIGIT 2: 13 (ACTIVE ONGOING PROJECTS) */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center space-y-0.5 group/card hover:border-amber-400 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-amber-400 rounded-tr-md opacity-80" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span>LIVE</span>
                      </span>
                      <div className="text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-hero-bob" style={{ animationDelay: "1.5s" }}>
                        13
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                        ACTIVE ONGOING
                      </span>
                    </div>

                  </div>

                  {/* Bottom HUD Ticker & Interactive Link */}
                  <a
                    href="/programs"
                    className="relative z-10 flex items-center justify-between px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-900 to-teal-900 border border-emerald-500/40 hover:border-emerald-400 text-white text-[11px] font-bold transition-all shadow-[0_0_12px_rgba(16,185,129,0.3)] group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>EXPLORE 63 PROJECTS</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                </div>

              </div>
            </div>
          </div>

          {/* --- DEPARTMENT HEADS & TEAMMATES EXECUTIVE BOXES GRID --- */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-emerald-900/15 pb-4 gap-2">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-800">DIRECTORS OF NGO OPERATIONS</p>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">Executive Leadership Team</h3>
              </div>
              <p className="text-xs font-semibold text-slate-500">
                Transparent Department Governance &amp; Ground Execution Heads
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadershipTeam.map((member, idx) => (
                <div
                  key={member.name}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  className="bg-white/95 backdrop-blur-xl border border-emerald-900/15 rounded-3xl p-6 flex flex-col justify-between space-y-5 shadow-md hover:border-emerald-600 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-700 shadow-md">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-light-sweep pointer-events-none" />
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-900">{member.name}</h4>
                      <p className="text-[11px] font-extrabold uppercase tracking-wide text-emerald-800 mt-0.5 leading-snug">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {member.intro}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">CONNECT</span>

                    <div className="flex items-center gap-2">
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name} LinkedIn`}
                        className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all"
                      >
                        <LinkedinIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name} Instagram`}
                        className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${member.name} Facebook`}
                        className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all"
                      >
                        <FacebookIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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

      {/* --- WHY CHOOSE US SECTION (PRISTINE LIGHT PEARL & EXPANDING 3D STAGE CARDS MATRIX) --- */}
      <section ref={compareRef} className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F3EFE6] to-[#EAE3D5] py-24 lg:py-32 text-slate-900 border-t border-slate-200 shadow-[inset_0_0_120px_rgba(0,0,0,0.02)]">
        {/* Soft Glowing Liquid Ambient Glows & Subtle Micro-Mesh */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-emerald-200/45 rounded-full blur-[160px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[650px] h-[650px] bg-amber-200/45 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-sky-200/40 rounded-full blur-[170px] animate-aurora-silk-1" />
          <div className="bg-noise absolute inset-0 opacity-10" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

          {/* Section Header */}
          <div
            className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${
              compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-emerald-800 text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> THE EFFORT NGO DIFFERENCE
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              5 Unshakable Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Field-Verified Trust</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
              Click or hover any pillar below to inspect how Effort NGO replaces traditional NGO delays with transparent, tech-enabled governance.
            </p>
          </div>

          {/* EXPANDING 3D STAGE ACCORDION DECK (DESKTOP FLEX EXPANSION, MOBILE STACK) */}
          <div
            className={`flex flex-col lg:flex-row gap-4 items-stretch min-h-[480px] transition-all duration-1000 ${
              compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {[
              {
                id: 0,
                num: "01",
                title: "Regular Transparent Audits",
                icon: ShieldCheck,
                tag: "Quarterly UC Filings",
                traditional: "Manual paper invoices, annual-only reporting, opaque receipts",
                effortWay: "Quarterly Audited Utilization Certificates (UC) & real-time GIS logs",
                desc: "Financial statements and field progress reports are audited quarterly and shared directly with partners on a fixed schedule.",
                proof: "100% Statutory Schedule VII Verified",
              },
              {
                id: 1,
                num: "02",
                title: "Digital GIS & Photo Logs",
                icon: Globe2,
                tag: "Geotagged Infrastructure",
                traditional: "Fragmented physical binders & unverified verbal status claims",
                effortWay: "Digital dashboard tracking every rupee, beneficiary, and GPS coordinate",
                desc: "Every water reservoir, school facility, and agricultural plot is geotagged with timestamped photographic proof.",
                proof: "100% Geotagged Field Infrastructure",
              },
              {
                id: 2,
                num: "03",
                title: "Community Co-Governance",
                icon: Handshake,
                tag: "100% Local Ownership",
                traditional: "Top-down decisions imposed from corporate offices without village consultation",
                effortWay: "100% programs co-designed with SHG women leaders & village FPOs",
                desc: "Village committees and SHG leaders co-create every initiative from day one, ensuring self-sustaining local governance.",
                proof: "Self-Governing Village Cooperatives",
              },
              {
                id: 3,
                num: "04",
                title: "Data & Satellite Telemetry",
                icon: Search,
                tag: "Real-Time Crop Telemetry",
                traditional: "Guesswork implementation with slow feedback loops",
                effortWay: "Real-time field telemetry & satellite crop monitoring",
                desc: "Soil health, water table levels, and crop yields are continuously monitored via real-time ground sensors and satellite data.",
                proof: "Field-Tested Grassroots Telemetry",
              },
              {
                id: 4,
                num: "05",
                title: "27+ Years Sustained Legacy",
                icon: Award,
                tag: "Founded in 1999",
                traditional: "Short-term one-off projects that collapse after field teams leave",
                effortWay: "Continuous operation since 1999 with self-sustaining village institutions",
                desc: "Built to thrive permanently. Our watershed and livelihood infrastructure remains fully active long after project completion.",
                proof: "27 Years Unbroken Track Record",
              },
            ].map((pillar) => {
              const PillarIcon = pillar.icon;
              const isActive = activeWhyChooseTab === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActiveWhyChooseTab(pillar.id)}
                  onMouseEnter={() => setActiveWhyChooseTab(pillar.id)}
                  className={`group relative rounded-[36px] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between p-6 sm:p-8 ${
                    isActive
                      ? "lg:flex-[3] bg-white/95 backdrop-blur-2xl border-2 border-emerald-500/40 shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
                      : "lg:flex-1 bg-white/70 backdrop-blur-xl border border-slate-300/80 hover:bg-white/90 hover:border-emerald-400/60 shadow-md"
                  }`}
                >
                  {/* Top Accent Gradient Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 transition-opacity duration-300 ${isActive ? "bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 opacity-100" : "bg-slate-300 opacity-40"}`} />

                  {/* Top Row Header: Icon + Number */}
                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isActive
                        ? "bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white shadow-lg scale-110"
                        : "bg-emerald-100/80 text-emerald-700 border border-emerald-300 group-hover:scale-105"
                    }`}>
                      <PillarIcon className="w-7 h-7" />
                    </div>

                    <span className={`text-2xl sm:text-3xl font-black transition-colors duration-300 ${isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-emerald-600"}`}>
                      {pillar.num}
                    </span>
                  </div>

                  {/* ACTIVE EXPANDED CONTENT (SHOWS FULL DETAILS WHEN ACTIVE) */}
                  {isActive ? (
                    <div className="space-y-6 pt-6 relative z-10 animate-fade-in">
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 border border-emerald-300 text-[10px] font-black uppercase tracking-wider mb-2">
                          {pillar.proof}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                        {pillar.desc}
                      </p>

                      {/* Side-by-Side Comparison Metric */}
                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-rose-50/90 backdrop-blur-md rounded-2xl p-4 border border-rose-200/80 space-y-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700 uppercase tracking-wider">
                            <Minus className="w-3.5 h-3.5 text-rose-600" /> Traditional Way
                          </div>
                          <p className="text-xs text-rose-900/80 font-semibold leading-normal">
                            {pillar.traditional}
                          </p>
                        </div>

                        <div className="bg-emerald-50/90 backdrop-blur-md rounded-2xl p-4 border-2 border-emerald-300 space-y-1 shadow-sm">
                          <div className="flex items-center gap-1.5 text-[11px] font-black text-emerald-800 uppercase tracking-wider">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Effort Standard
                          </div>
                          <p className="text-xs text-emerald-950 font-bold leading-normal">
                            {pillar.effortWay}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* COLLAPSED INACTIVE STATE (CLEAN COMPACT VERTICAL PILLAR) */
                    <div className="py-8 relative z-10 flex flex-col justify-end space-y-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Pillar {pillar.num}
                      </span>
                      <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium line-clamp-2">
                        {pillar.tag}
                      </p>
                    </div>
                  )}

                  {/* Bottom Footer Status Tag */}
                  <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-bold text-slate-500 relative z-10">
                    <span className="text-[11px] uppercase tracking-wider text-emerald-700">
                      {isActive ? "Active Dock" : "Click to Inspect"}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-emerald-600 translate-x-1" : "text-slate-400 group-hover:translate-x-1"}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* BOTTOM TRUST PROOF BAR (3-COLUMN HIGHLIGHTS) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-300/70">
            {[
              { label: "Statutory Verification", desc: "100% Schedule VII & UC Compliance", icon: ShieldCheck },
              { label: "Geotagged Evidence", desc: "GIS map & photo logs for all works", icon: Globe2 },
              { label: "Community Leadership", desc: "Self-sustaining SHG & FPO cooperatives", icon: Handshake },
            ].map((item) => (
              <div key={item.label} className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/90 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">{item.label}</h4>
                  <p className="text-xs text-slate-600 font-medium mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Action Button */}
          <div className="text-center pt-2">
            <a
              href="/impact"
              className="group inline-flex items-center gap-3 px-9 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-black text-xs uppercase tracking-wider shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.5)] hover:scale-[1.03] transition-all"
            >
              Explore Our Audited Impact &amp; Ground Results <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform duration-300" />
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
              href="/get-involved"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-md text-white font-bold text-sm border border-white/25 hover:bg-white hover:text-[#0b1120] transition-colors duration-300 rounded-full"
            >
              Become Our Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* --- GALLERY PREVIEW SECTION (FLOWING HORIZONTAL GALLERY WITH BUBBLES & FIREWORKS BURSTS) --- */}
      <section className="relative overflow-hidden bg-aurora-light py-16 lg:py-24">
        {/* Continuous Rising Floating Bubbles & Fireworks Blasting Bursts Backdrop */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 -left-10 w-[480px] h-[480px] rounded-full bg-amber-300/30 blur-[110px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 -right-16 w-[520px] h-[520px] rounded-full bg-emerald-300/30 blur-[120px] animate-liquid-drift-b" />
          <div className="absolute -bottom-24 left-1/3 w-[460px] h-[460px] rounded-full bg-rose-300/30 blur-[110px] animate-liquid-drift-c" />
          <div className="absolute inset-0 bg-noise opacity-[0.3]" />

          {/* Continuous Rising Translucent Bubbles */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-[8%] w-10 h-10 rounded-full bg-amber-400/25 border border-amber-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0s", animationDuration: "6.5s" }} />
            <div className="absolute bottom-0 left-[22%] w-16 h-16 rounded-full bg-emerald-400/25 border border-emerald-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "1.2s", animationDuration: "8s" }} />
            <div className="absolute bottom-0 left-[38%] w-12 h-12 rounded-full bg-rose-400/25 border border-rose-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "2.5s", animationDuration: "7s" }} />
            <div className="absolute bottom-0 left-[55%] w-20 h-20 rounded-full bg-purple-400/20 border border-purple-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0.8s", animationDuration: "9.5s" }} />
            <div className="absolute bottom-0 left-[70%] w-14 h-14 rounded-full bg-cyan-400/25 border border-cyan-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "3.2s", animationDuration: "7.5s" }} />
            <div className="absolute bottom-0 left-[88%] w-18 h-18 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "1.8s", animationDuration: "8.5s" }} />
          </div>

          {/* Celebratory Fireworks / Starburst Energy Blasting Nodes */}
          <div className="absolute top-[15%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-r from-amber-400/40 via-rose-400/30 to-purple-400/40 blur-xl animate-fireworks-blast" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[25%] right-[18%] w-40 h-40 rounded-full bg-gradient-to-r from-emerald-400/40 via-teal-400/30 to-cyan-400/40 blur-xl animate-fireworks-blast" style={{ animationDelay: "2.2s" }} />
          <div className="absolute bottom-[20%] left-[30%] w-36 h-36 rounded-full bg-gradient-to-r from-rose-400/40 via-purple-400/30 to-indigo-400/40 blur-xl animate-fireworks-blast" style={{ animationDelay: "1.1s" }} />
          <div className="absolute bottom-[25%] right-[25%] w-44 h-44 rounded-full bg-gradient-to-r from-amber-400/40 via-emerald-400/30 to-teal-400/40 blur-xl animate-fireworks-blast" style={{ animationDelay: "3.4s" }} />
        </div>

        <div className="relative z-10">
          <div
            ref={galleryHeaderRef}
            className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-3 transition-all duration-700 ${
              galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 text-[#9a6b3f] text-xs font-black uppercase tracking-wider shadow-sm">
              <Camera className="w-3.5 h-3.5 text-amber-600 animate-bounce" /> Our Journey Through Images
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#2b2723]">
              Every Picture Tells A Story Of Hope
            </h2>
            <p className="text-[#6b655c] text-sm sm:text-base leading-relaxed font-semibold">
              Drag, scroll, or watch it flow — floating moments and vibrant field stories captured live.
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
                    className={`group shrink-0 w-64 rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_25px_50px_-25px_rgba(120,90,60,0.35)] p-6 flex flex-col justify-center hover:scale-105 hover:bg-white/80 transition-all duration-300 ${offsetClass}`}
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
                  className={`group relative shrink-0 w-48 sm:w-56 rounded-[28px] overflow-hidden bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_25px_50px_-25px_rgba(120,90,60,0.3)] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_35px_65px_-25px_rgba(180,130,70,0.4)] hover:border-[#d4af6a] transition-all duration-500 ${offsetClass}`}
                  style={{ height: card.h }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#d4af6a]/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CardIcon className="w-7 h-7 text-[#b6813f]/50 group-hover:text-[#b6813f] group-hover:scale-125 transition-all duration-500" />
                  </div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#8a6633]">{card.category}</p>
                    <p className="text-[9px] text-[#8a6633]/80 font-bold mt-0.5">[ Field Memory ]</p>
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
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white/70 backdrop-blur-md text-[#2b2723] font-black text-sm border border-[#d4af6a] hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-full"
            >
              View Complete Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-amber-700" />
            </a>
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
                href="/get-involved"
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
