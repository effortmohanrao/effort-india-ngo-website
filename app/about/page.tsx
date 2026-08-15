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
import Effort20Roadmap from "@/components/Effort20Roadmap";


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
    phase: "01 / ORIGIN",
    worldName: "THE ORIGIN",
    title: "THE BEGINNING",
    subtitle: "Where Rooted Belief Began in 10 Villages",
    bgClass: "bg-[#fdfbf7]",
    cardStyle: "bg-white/95 border-amber-900/20 shadow-2xl text-stone-900",
    headerTextColor: "text-stone-950",
    subtitleColor: "text-amber-950 font-serif",
    phaseBadge: "bg-amber-100 text-amber-950 border-amber-300 font-black",
    storyBoxStyle: "bg-amber-50/90 border-amber-200/90 text-stone-800",
    milestoneTextColor: "text-stone-800",
    milestoneCheckColor: "#b45309",
    navBtnStyle: "bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold border-amber-300",
    accentColor: "#b45309",
    headingFont: "font-serif",
    desc: "EFFORT was founded in 1999 around the core conviction that agricultural development is central to poverty eradication, food security, demand generation, and overall development. The journey began in 10 pioneer villages in Prakasam District, Andhra Pradesh.",
    archivalMarks: [
      "Founded 1999: Agricultural Empowerment = Poverty Eradication & Food Security",
      "Pioneer Field Roots: Started in 10 Villages in Prakasam District, Andhra Pradesh",
      "Foundational Focus: Community Participation, Livelihoods & Demand Generation"
    ],
    rootConcepts: ["AGRICULTURE", "COMMUNITY", "LIVELIHOODS", "FOOD SECURITY", "DEVELOPMENT"],
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2000-2009",
    era: "2000–2009",
    phase: "02 / FOUNDATION",
    worldName: "BUILDING THE FOUNDATION",
    title: "BUILDING THE FOUNDATION",
    subtitle: "10 → 50 Villages & 20,000 Farmers",
    bgClass: "bg-[#f5eade]",
    cardStyle: "bg-white/95 border-orange-900/20 shadow-2xl text-stone-900",
    headerTextColor: "text-stone-950",
    subtitleColor: "text-orange-950 font-sans font-black",
    phaseBadge: "bg-orange-100 text-orange-950 border-orange-300 font-black",
    storyBoxStyle: "bg-orange-50/90 border-orange-200 text-stone-800",
    milestoneTextColor: "text-stone-800",
    milestoneCheckColor: "#ea580c",
    navBtnStyle: "bg-orange-100 hover:bg-orange-200 text-orange-950 font-bold border-orange-300",
    accentColor: "#ea580c",
    headingFont: "font-sans font-black tracking-tight",
    desc: "EFFORT expanded its grassroots work from 10 to 50 villages across Prakasam and Guntur districts, reaching 20,000 farmers. Facilitated Sustainable Agriculture, Women & Child Development projects with structural support from government agencies.",
    archivalMarks: [
      "Geographic Expansion: 10 Villages → 50 Villages (Prakasam & Guntur Districts)",
      "Farmer Reach: 20,000 Farmers Integrated into Sustainable Agriculture",
      "Institutional Support: Government-backed Women & Child Development Projects"
    ],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2009-2016",
    era: "2009–2016",
    phase: "03 / EXPANSION",
    worldName: "THE EXPANSION ENGINE",
    title: "THE EXPANSION ENGINE",
    subtitle: "405 Villages Across 6 Districts & 16 Grassroots NGOs",
    bgClass: "bg-[#0a1638]",
    cardStyle: "bg-slate-900/90 border-cyan-500/40 shadow-2xl text-slate-50",
    headerTextColor: "text-slate-50",
    subtitleColor: "text-cyan-300 font-sans font-black",
    phaseBadge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-black",
    storyBoxStyle: "bg-slate-800/80 border-cyan-600/40 text-slate-100",
    milestoneTextColor: "text-slate-100",
    milestoneCheckColor: "#38bdf8",
    navBtnStyle: "bg-slate-800 hover:bg-slate-700 text-cyan-200 font-bold border-cyan-600/50",
    accentColor: "#38bdf8",
    headingFont: "font-sans font-black tracking-tight",
    desc: "EFFORT recorded massive growth, expanding from 50 to 405 villages across 6 districts of Andhra Pradesh. Reached 1,50,000 small, marginal farmers and landless agricultural labourers with focus on Natural Resource Management, while providing technical support to 16 partner grassroots NGOs.",
    archivalMarks: [
      "Expansive Scale: 50 → 405 Villages Across 6 Districts of Andhra Pradesh",
      "Target Community: 1,50,000 Small/Marginal Farmers & Landless Labourers",
      "Grassroots Ecosystem: Supported 16 Partner NGOs in Natural Resource Management"
    ],
    icon: Compass,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2016-2022",
    era: "2016–2022",
    phase: "04 / TRANSFORMATION",
    worldName: "MULTI-STATE TRANSFORMATION",
    title: "MULTI-STATE TRANSFORMATION",
    subtitle: "From 1 State to 6 Indian States & 2 Lakh Farm Families",
    bgClass: "bg-[#121619]",
    cardStyle: "bg-zinc-900/90 border-lime-500/40 shadow-2xl text-zinc-50",
    headerTextColor: "text-zinc-50",
    subtitleColor: "text-[#a3e635] font-mono font-black",
    phaseBadge: "bg-lime-500/20 text-[#a3e635] border-lime-500/40 font-black",
    storyBoxStyle: "bg-zinc-800/80 border-lime-600/40 text-zinc-100",
    milestoneTextColor: "text-zinc-100",
    milestoneCheckColor: "#a3e635",
    navBtnStyle: "bg-zinc-800 hover:bg-zinc-700 text-lime-300 font-bold border-lime-600/50",
    accentColor: "#a3e635",
    headingFont: "font-mono font-black tracking-tight",
    desc: "A remarkable milestone phase: EFFORT transformed from a single-state organization into a 6-state multi-regional entity, empowering 2 lakh farm families. Built strategic alliances with international funding agencies, corporate CSR partners, government departments, and CBBOs.",
    archivalMarks: [
      "Multi-State Leap: Expanded from 1 State → 6 Indian States",
      "Impact Scale: 2,00,000 Farm Families Empowered Across States",
      "Strategic Alliances: International Agencies, Corporate CSR, Govt & CBBOs"
    ],
    icon: Award,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "2022-2025",
    era: "2022–2025",
    phase: "05 / PAN-INDIA",
    worldName: "THE PAN-INDIA ERA",
    title: "THE PAN-INDIA ERA",
    subtitle: "9 States, 1,859 Villages & 2.50 Lakh Farm Families",
    bgClass: "bg-[#2b0814]",
    cardStyle: "bg-rose-950/90 border-amber-500/40 shadow-2xl text-amber-50",
    headerTextColor: "text-amber-50",
    subtitleColor: "text-amber-300 font-serif font-black",
    phaseBadge: "bg-amber-500/20 text-amber-300 border-amber-500/40 font-black",
    storyBoxStyle: "bg-rose-900/70 border-amber-500/30 text-amber-100",
    milestoneTextColor: "text-amber-100",
    milestoneCheckColor: "#fbbf24",
    navBtnStyle: "bg-rose-900 hover:bg-rose-800 text-amber-200 font-bold border-amber-500/40",
    accentColor: "#fbbf24",
    headingFont: "font-serif font-black tracking-tight",
    desc: "EFFORT established itself as a national PAN-India organization, working across 9 Indian states and reaching 2.50 lakh farm families in 1,859 villages with sustainable agriculture, women-led MACS cooperatives, and watershed development.",
    archivalMarks: [
      "National Footprint: 9 Indian States & 1,859 Villages",
      "Community Scale: 2,50,000 Farm Families Actively Reached",
      "Institutional Strength: Sustainable Agriculture, FPOs & Watershed Networks"
    ],
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1200",
  },
];

// Real content from EFFORT's Strategic Plan 2026-2030 document (5-Year Phased Roadmap, Section 8)
type StrategicPhase = {
  id: string;
  phaseLabel: string;
  years: string;
  title: string;
  focus: string;
  highlights: string[];
  outcome: string;
  accentColor: string;
  icon: typeof Sprout;
};

const strategicPhases: StrategicPhase[] = [
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
    outcome: "A more cohesive, learning-oriented, institutionally prepared organisation.",
    accentColor: "#38bdf8",
    icon: Compass,
  },
  {
    id: "phase-2",
    phaseLabel: "PHASE II",
    years: "2028–2029",
    title: "Expansion, Integration & Deepening Impact",
    focus: "Scaling impact, deepening partnerships, and integrating programs and systems.",
    highlights: [
      "Expand proven program models to new districts and states through partnerships",
      "Scale youth skill development and livelihood initiatives",
      "Establish knowledge and learning hubs, disseminating practice-based evidence",
      "Fully operationalise integrated digital MIS, MEL and learning systems",
    ],
    outcome: "Greater scale and influence, backed by strong systems, partnerships and visibility.",
    accentColor: "#818cf8",
    icon: TrendingUp,
  },
  {
    id: "phase-3",
    phaseLabel: "PHASE III",
    years: "2030",
    title: "Sustainability, Influence & Institutional Maturity",
    focus: "Consolidating gains and positioning EFFORT as a mature institution with enduring impact.",
    highlights: [
      "Consolidate and sustain community-led development models",
      "Position youth as long-term leaders, mentors and institutional anchors",
      "Ensure leadership transition and long-term financial sustainability",
      "Enable replication and scale through strategic partners, not direct implementation",
    ],
    outcome: "A resilient, respected and sustainable institution with lasting impact.",
    accentColor: "#c084fc",
    icon: Sparkles,
  },
];

type StrategicPillar = {
  num: string;
  title: string;
  desc: string;
  icon: typeof ShieldCheck;
};

const strategicPillars: StrategicPillar[] = [
  { num: "01", title: "Community-Led Resilience", desc: "Strengthening people's organisations and local institutions as drivers of change.", icon: Users },
  { num: "02", title: "Livelihoods & Youth Futures", desc: "Youth skills, employability and Farmer Producer Organisations at the centre of resilience.", icon: Sprout },
  { num: "03", title: "Knowledge & Learning", desc: "Practice-based evidence and peer learning informing wider development dialogue.", icon: BookOpen },
  { num: "04", title: "Partnerships & Ecosystem", desc: "Value-aligned partnerships with government, CSR, academia and the private sector.", icon: Handshake },
  { num: "05", title: "Capacity, Leadership & Governance", desc: "Second-line leadership, succession planning and strengthened Board effectiveness.", icon: ShieldCheck },
  { num: "06", title: "Systems & Digitalisation", desc: "MIS, MEL and financial sustainability as enablers of scale and transparency.", icon: Zap },
];

const strategic2030Stats = [
  { value: "4L–5L", label: "Farmers Supported" },
  { value: "25K–40K", label: "Youth Engaged" },
  { value: "75–120", label: "FPOs & Collectives" },
  { value: "8–12", label: "States, 30–50 Partners" },
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
    title: "Empowered Communities Building Resilient Futures",
    desc: "Empowered communities building resilient, inclusive, and sustainable futures — where communities are empowered to make informed decisions, manage their resources sustainably, and respond effectively to challenges.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1000",
  },
  {
    label: "Mission",
    icon: Target,
    title: "Sustainably Managing Resources & Empowering Youth",
    desc: "To enable communities to sustainably manage natural resources, strengthen youth skills and livelihoods, and function as a community-based knowledge-sharing and learning centre that fosters experiential learning, shared solutions, and improved well-being.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1000",
  },
];

const coreValues: { title: string; icon: typeof ShieldCheck; desc: string; radius: number; size: number }[] = [
  {
    title: "Community Ownership",
    icon: Users,
    desc: "Communities are the primary agents of their own development. EFFORT works to strengthen their leadership, decision-making, and collective action, ensuring that development processes are locally driven and sustained.",
    radius: 155,
    size: 88
  },
  {
    title: "Sustainability & Stewardship",
    icon: Sprout,
    desc: "EFFORT is committed to long-term ecological, social, and economic sustainability through responsible stewardship of natural resources, institutions, and relationships.",
    radius: 175,
    size: 76
  },
  {
    title: "Inclusion & Equity",
    icon: Scale,
    desc: "EFFORT ensures that development processes are inclusive and equitable, with particular attention to youth, women, and marginalized communities, enabling their meaningful participation and leadership.",
    radius: 145,
    size: 70
  },
  {
    title: "Integrity & Accountability",
    icon: ShieldCheck,
    desc: "EFFORT upholds honesty, transparency, and responsibility in all its actions, remaining accountable to communities, partners, and stakeholders.",
    radius: 170,
    size: 80
  },
  {
    title: "Partnership & Collaboration",
    icon: Handshake,
    desc: "EFFORT recognizes that complex development challenges require collective action and works in partnership with communities, civil society organizations, government, academia, and the private sector to amplify impact and scale solutions.",
    radius: 160,
    size: 86
  },
  {
    title: "Adaptability & Resilience",
    icon: Zap,
    desc: "EFFORT remains responsive to change, open to innovation, and committed to strengthening its own capacity and that of communities to adapt, learn, and thrive in dynamic and uncertain environments.",
    radius: 150,
    size: 72
  },
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
    intro: "Oversees 1,275 Self-Help Groups (SHGs) and 51 MACS Cooperatives across 10 operating states, pioneering micro-enterprise leadership for 14,750+ women.",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", facebook: "https://facebook.com" },
  },
  {
    name: "Dr. P. Venkateswarlu",
    role: "Chief Operating Officer & Field Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    intro: "Leads field implementation teams across 1,909 villages and 37 districts, driving 65 completed and 15 active multi-year development projects.",
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
  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/site/media?prefix=logo", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const first = data.images?.[0];
        if (first) setLogoUrl(first.url);
      })
      .catch(() => {});
  }, []);
  const [storyRef, storyVisible] = useScrollReveal<HTMLElement>();
  const journeyTrackRef = useRef<HTMLDivElement>(null);
  const [journeyScrollPct, setJourneyScrollPct] = useState(0);
  const journeyDrag = useRef<{ active: boolean; startX: number; startScroll: number }>({ active: false, startX: 0, startScroll: 0 });
  const journeyTrackRef2 = useRef<HTMLDivElement>(null);
  const [journeyScrollPct2, setJourneyScrollPct2] = useState(0);
  const journeyDrag2 = useRef<{ active: boolean; startX: number; startScroll: number }>({ active: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const track = journeyTrackRef.current;
    const track2 = journeyTrackRef2.current;
    if (!track && !track2) return;
    function updatePct() {
      if (!track) return;
      const max = track.scrollWidth - track.clientWidth;
      setJourneyScrollPct(max > 0 ? track.scrollLeft / max : 0);
    }
    function updatePct2() {
      if (!track2) return;
      const max = track2.scrollWidth - track2.clientWidth;
      setJourneyScrollPct2(max > 0 ? track2.scrollLeft / max : 0);
    }
    updatePct();
    updatePct2();
    track?.addEventListener("scroll", updatePct, { passive: true });
    track2?.addEventListener("scroll", updatePct2, { passive: true });
    return () => {
      track?.removeEventListener("scroll", updatePct);
      track2?.removeEventListener("scroll", updatePct2);
    };
  }, []);

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
  const [galleryImages, setGalleryImages] = useState<{ key: string; url: string }[]>([]);

  useEffect(() => {
    fetch("/api/site/media?prefix=about/gallery", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setGalleryImages(data.images ?? []))
      .catch(() => {});
  }, []);

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
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                className={`text-emerald-100/90 text-base sm:text-lg leading-relaxed font-medium max-w-2xl transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: "300ms" }}
              >
                Founded in 1999 at Martur, Prakasam District (Society Reg. 340/1999), EFFORT NGO has spent <strong className="text-amber-300 font-extrabold">27 years</strong> building climate-resilient farming, water harvesting, and community-led collectives across rural India — from a single registered society to a multi-state, multi-sector organization.
              </p>

              {/* Core Executive Quick Metrics Strip (4 Crisp White Highlight Cards) */}
              <div
                className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: "450ms" }}
              >
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-800">65 + 15</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Completed &amp; Active Projects</span>
                </div>
                <div className="bg-white border-2 border-white/90 rounded-2xl p-3.5 text-center space-y-0.5 shadow-[0_12px_35px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-emerald-500 transition-all">
                  <span className="text-2xl sm:text-3xl font-black text-amber-700">1,909</span>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-slate-800">Villages (10 States)</span>
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
                className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
                className={`flex flex-wrap gap-4 pt-2 text-xs font-bold text-emerald-200/80 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
              className={`lg:col-span-5 relative transition-all duration-1000 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
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

      {/* --- THE JOURNEY: 1999 TO EFFORT 2.0 (TWO-TIER ARCHIVE RAIL, LIGHT PALETTE) --- */}
      <section id="journey" ref={storyRef} className="relative overflow-hidden bg-gradient-to-b from-[#faf7f1] via-[#f7f2e8] to-[#faf7f1] py-20 lg:py-28 text-stone-900">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#8a7550_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="absolute top-[-10%] left-[8%] w-[420px] h-[420px] bg-[#d4af6a]/10 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[8%] w-[420px] h-[420px] bg-violet-300/15 rounded-full blur-[140px] animate-liquid-drift-b" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div
            className={`max-w-2xl mb-14 lg:mb-16 space-y-4 transition-all duration-700 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#d4af6a]/40 text-[#a3803f] text-xs font-bold uppercase tracking-widest shadow-sm">
              <BookOpen className="w-3.5 h-3.5" /> The EFFORT Archive
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              1999 to 2030 — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a3803f] via-[#c99a4a] to-violet-500">One Continuous Line</span>
            </h2>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              Twenty-seven years of documented history, presented as one set — flowing down into the five-year roadmap that takes EFFORT to 2030.
            </p>
          </div>

          {/* ============ ROW 1: HISTORY, 1999 → 2025 (kept as one set) ============ */}
          <div
            className={`flex items-center gap-3 mb-5 transition-all duration-700 ${storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
          >
            <span className="text-[11px] font-black uppercase tracking-widest text-[#a3803f] bg-[#a3803f]/10 border border-[#a3803f]/20 rounded-full px-3 py-1">
              1999 → 2025
            </span>
            <h3 className="text-sm font-bold text-stone-500">The Founding Years — One Continuous Set</h3>
          </div>

          <div
            ref={journeyTrackRef}
            className="relative flex gap-0 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-8"
            onMouseDown={(e) => {
              const track = journeyTrackRef.current;
              if (!track) return;
              journeyDrag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft };
            }}
            onMouseMove={(e) => {
              const track = journeyTrackRef.current;
              if (!track || !journeyDrag.current.active) return;
              track.scrollLeft = journeyDrag.current.startScroll - (e.clientX - journeyDrag.current.startX);
            }}
            onMouseUp={() => (journeyDrag.current.active = false)}
            onMouseLeave={() => (journeyDrag.current.active = false)}
          >
            {chapterWorldsData.map((chapter, idx) => (
              <div
                key={chapter.id}
                className={`group relative shrink-0 w-[280px] sm:w-[320px] px-3 first:pl-0 transition-all duration-700 ease-out ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: storyVisible ? `${idx * 110}ms` : "0ms" }}
              >
                {/* Rail line + node */}
                <div className="relative h-10 flex items-center">
                  <div
                    className="absolute inset-x-0 h-[3px] top-1/2 -translate-y-1/2 animate-journey-rail-shimmer"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${idx === 0 ? "transparent" : chapterWorldsData[idx - 1].accentColor} 0%, ${chapter.accentColor} 50%, ${chapter.accentColor}66 100%)`,
                    }}
                  />
                  <div
                    className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#faf7f1] shadow-md mx-auto animate-journey-node-pulse group-hover:scale-125 transition-transform duration-300"
                    style={{ backgroundColor: chapter.accentColor }}
                  >
                    <chapter.icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-[22px] border border-stone-200 bg-white p-5 h-[300px] flex flex-col shadow-[0_8px_24px_-16px_rgba(60,45,20,0.25)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-20px_rgba(60,45,20,0.35)] transition-all duration-300">
                  <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: chapter.accentColor }}>
                    {chapter.era} &middot; {chapter.phase}
                  </p>
                  <h3 className="text-lg font-black text-stone-900 mt-1.5 leading-snug">{chapter.title}</h3>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed line-clamp-4 flex-1">{chapter.desc}</p>
                  <div className="pt-3 mt-3 border-t border-stone-100 space-y-1.5">
                    {chapter.archivalMarks.slice(0, 2).map((mark) => (
                      <div key={mark} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: chapter.accentColor }} />
                        <span className="text-[10px] text-stone-600 leading-snug line-clamp-2">{mark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 1 nudge controls + progress */}
          <div className="flex items-center gap-4 mt-2">
            <button
              type="button"
              onClick={() => journeyTrackRef.current?.scrollBy({ left: -340, behavior: "smooth" })}
              className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 border border-stone-200 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 text-stone-600" />
            </button>
            <div className="flex-1 h-1 rounded-full bg-stone-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#a3803f] to-[#d4af6a] transition-[width] duration-150 ease-out"
                style={{ width: `${Math.max(journeyScrollPct * 100, 6)}%` }}
              />
            </div>
            <button
              type="button"
              onClick={() => journeyTrackRef.current?.scrollBy({ left: 340, behavior: "smooth" })}
              className="w-9 h-9 rounded-full bg-white hover:bg-stone-50 border border-stone-200 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              <ChevronRight className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        </div>
      </section>

      {/* --- EFFORT 2.0 STRATEGIC ROADMAP (HIGH-END CINEMATIC NGO ROADMAP UI) --- */}
      <Effort20Roadmap />


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
              className={`lg:col-span-5 transition-all duration-700 ${vmVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
              className={`lg:col-span-7 transition-all duration-1000 ${vmVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
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
            className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
            className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 transition-all duration-1000 ${valuesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                              className={`group w-28 h-28 sm:w-32 sm:h-32 rounded-3xl backdrop-blur-2xl border-2 p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center ${isSelected
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
                  "Locally Driven & Sustained Development Processes",
                  "Long-Term Ecological, Social & Economic Stewardship",
                  "Youth, Women & Marginalized Community Focus",
                  "Honesty, Transparency & Stakeholder Accountability",
                  "Govt, NGO, Academia & CSR Collective Action",
                  "Responsive, Learning-Oriented & Resilient Capacity",
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
            className={`text-center max-w-3xl mx-auto mb-10 space-y-3 transition-all duration-700 ${leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
            className={`transition-all duration-1000 ${leadershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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

                    {/* DIGIT 1: 65 (COMPLETED PROJECTS) */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center space-y-0.5 group/card hover:border-emerald-400 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-emerald-400 rounded-tr-md opacity-80" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                        <Award className="w-3 h-3 text-amber-400" /> TRACK RECORD
                      </span>
                      <div className="text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.8)] animate-hero-bob">
                        65<span className="text-xl text-emerald-400 font-sans">+</span>
                      </div>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-300">
                        COMPLETED
                      </span>
                    </div>

                    {/* DIGIT 2: 15 (ACTIVE ONGOING PROJECTS) */}
                    <div className="relative bg-white/5 backdrop-blur-md border border-amber-500/30 rounded-2xl p-3 flex flex-col items-center justify-center text-center space-y-0.5 group/card hover:border-amber-400 hover:bg-white/10 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 border-t-2 border-r-2 border-amber-400 rounded-tr-md opacity-80" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                        <span>LIVE</span>
                      </span>
                      <div className="text-4xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 drop-shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-hero-bob" style={{ animationDelay: "1.5s" }}>
                        15
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
                      <span>EXPLORE 80 PROJECTS</span>
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
              className={`lg:col-span-4 transition-all duration-700 ${philosophyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
              className={`lg:col-span-8 transition-all duration-1000 ${philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
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
                      className={`group relative bg-white border border-[#e5dbc4] p-4 shadow-[0_8px_20px_-10px_rgba(43,39,35,0.35)] hover:shadow-[0_14px_28px_-12px_rgba(43,39,35,0.4)] hover:-translate-y-1.5 hover:rotate-0 transition-all duration-300 ${note.rotate} ${philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
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
                    className={`relative bg-white border border-[#e5dbc4] p-2 shadow-[0_8px_20px_-10px_rgba(43,39,35,0.35)] hover:-translate-y-1.5 hover:rotate-0 transition-all duration-300 rotate-1 ${philosophyVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
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

      {/* --- 6 STRATEGIC PILLARS OF EFFORT 2.0 SECTION (DYNAMIC COLOR SHIFTING STAGE DECK) --- */}
      {(() => {
        const pillarThemes = [
          {
            bgGrad: "from-[#03241b] via-[#06382b] to-[#041d16]",
            glowA: "bg-emerald-500/25",
            glowB: "bg-teal-500/20",
            headerSpan: "from-emerald-300 via-teal-200 to-amber-300",
            pillTag: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
            iconGrad: "from-emerald-400 to-teal-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-emerald-400/80 shadow-[0_0_50px_rgba(52,211,153,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500",
            quoteBox: "bg-emerald-950/60 border-emerald-400/30 text-emerald-200",
            targetBox: "bg-[#06241a] border-emerald-400/30 text-[#6ee7b7]",
            iconText: "text-emerald-400"
          },
          {
            bgGrad: "from-[#291402] via-[#3a1d04] to-[#1c0d01]",
            glowA: "bg-amber-500/25",
            glowB: "bg-yellow-500/20",
            headerSpan: "from-amber-300 via-yellow-200 to-amber-400",
            pillTag: "bg-amber-500/20 text-amber-300 border-amber-400/40",
            iconGrad: "from-amber-400 to-yellow-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-amber-400/80 shadow-[0_0_50px_rgba(251,191,36,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500",
            quoteBox: "bg-amber-950/60 border-amber-400/30 text-amber-200",
            targetBox: "bg-[#241405] border-amber-400/30 text-[#fde047]",
            iconText: "text-amber-400"
          },
          {
            bgGrad: "from-[#03242b] via-[#0a3542] to-[#03191f]",
            glowA: "bg-cyan-500/25",
            glowB: "bg-sky-500/20",
            headerSpan: "from-cyan-300 via-sky-200 to-teal-300",
            pillTag: "bg-cyan-500/20 text-cyan-300 border-cyan-400/40",
            iconGrad: "from-cyan-400 to-sky-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-cyan-400/80 shadow-[0_0_50px_rgba(56,189,248,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-400",
            quoteBox: "bg-cyan-950/60 border-cyan-400/30 text-cyan-200",
            targetBox: "bg-[#06212b] border-cyan-400/30 text-[#7dd3fc]",
            iconText: "text-cyan-400"
          },
          {
            bgGrad: "from-[#110f36] via-[#1e1b4b] to-[#0a0824]",
            glowA: "bg-indigo-500/25",
            glowB: "bg-blue-500/20",
            headerSpan: "from-indigo-300 via-blue-200 to-sky-300",
            pillTag: "bg-indigo-500/20 text-indigo-300 border-indigo-400/40",
            iconGrad: "from-indigo-400 to-blue-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-indigo-400/80 shadow-[0_0_50px_rgba(129,140,248,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-indigo-400 via-blue-300 to-indigo-500",
            quoteBox: "bg-indigo-950/60 border-indigo-400/30 text-indigo-200",
            targetBox: "bg-[#110e30] border-indigo-400/30 text-[#a5b4fc]",
            iconText: "text-indigo-400"
          },
          {
            bgGrad: "from-[#2b030d] via-[#4c0519] to-[#1c0107]",
            glowA: "bg-rose-500/25",
            glowB: "bg-pink-500/20",
            headerSpan: "from-rose-300 via-pink-200 to-rose-400",
            pillTag: "bg-rose-500/20 text-rose-300 border-rose-400/40",
            iconGrad: "from-rose-400 to-pink-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-rose-400/80 shadow-[0_0_50px_rgba(251,113,133,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-rose-400 via-pink-300 to-rose-500",
            quoteBox: "bg-rose-950/60 border-rose-400/30 text-rose-200",
            targetBox: "bg-[#29040d] border-rose-400/30 text-[#f472b6]",
            iconText: "text-rose-400"
          },
          {
            bgGrad: "from-[#1d0736] via-[#3b0764] to-[#130324]",
            glowA: "bg-purple-500/25",
            glowB: "bg-fuchsia-500/20",
            headerSpan: "from-purple-300 via-fuchsia-200 to-violet-300",
            pillTag: "bg-purple-500/20 text-purple-300 border-purple-400/40",
            iconGrad: "from-purple-400 to-fuchsia-500 text-slate-950",
            activeCardBg: "bg-slate-950/90 border-purple-400/80 shadow-[0_0_50px_rgba(192,132,252,0.35)] text-slate-100",
            accentLine: "bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-500",
            quoteBox: "bg-purple-950/60 border-purple-400/30 text-purple-200",
            targetBox: "bg-[#1f0533] border-purple-400/30 text-[#e879f9]",
            iconText: "text-purple-400"
          }
        ];

        const activeTheme = pillarThemes[activeWhyChooseTab % pillarThemes.length];

        return (
          <section
            ref={compareRef}
            className={`relative overflow-hidden bg-gradient-to-br ${activeTheme.bgGrad} py-24 lg:py-32 text-white border-t border-white/10 shadow-2xl transition-colors duration-1000`}
          >
            {/* Dynamic Liquid Ambient Glow Orbs & Light Mesh */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className={`absolute top-[-10%] left-[-10%] w-[650px] h-[650px] ${activeTheme.glowA} rounded-full blur-[170px] animate-pulse transition-colors duration-1000`} />
              <div className={`absolute bottom-[-10%] right-[-10%] w-[650px] h-[650px] ${activeTheme.glowB} rounded-full blur-[160px] animate-pulse transition-colors duration-1000`} style={{ animationDelay: "2s" }} />
              <div className="bg-noise absolute inset-0 opacity-20" />
              <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

              {/* Section Header */}
              <div
                className={`text-center max-w-3xl mx-auto space-y-4 transition-all duration-700 ${compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
              >
                <span className={`inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full backdrop-blur-md border ${activeTheme.pillTag} text-xs font-black uppercase tracking-widest shadow-md transition-colors duration-700`}>
                  <Sparkles className="w-3.5 h-3.5" /> STRATEGIC FRAMEWORK 2026–2030
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  6 Strategic Pillars of{" "}
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeTheme.headerSpan} transition-all duration-700`}>
                    EFFORT 2.0
                  </span>
                </h2>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
                  Anchored around six interrelated pillars balancing community-level impact with organizational strength, systems readiness, and institutional resilience.
                </p>
              </div>

              {/* EXPANDING 3D STAGE ACCORDION DECK (DESKTOP FLEX EXPANSION, MOBILE STACK) */}
              <div
                className={`flex flex-col lg:flex-row gap-4 items-stretch min-h-[480px] transition-all duration-1000 ${compareVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: "150ms" }}
              >
                {[
                  {
                    id: 0,
                    num: "01",
                    title: "Community-Led Resilience & Sustainable Development",
                    collapsedTitle: "Community Resilience",
                    icon: Users,
                    tag: "Pillar 1 • Strategic Priority",
                    philosophy: "Communities lead, institutions support, and EFFORT enables. Sustainable development is achieved when communities are empowered to shape their own futures.",
                    desc: "Focuses on enabling communities to lead their own development through strengthened community-led planning, decision-making, and collective action. Emphasizes integrated approaches to resilience that encompass ecological, social, and economic dimensions.",
                    target: "1,000–1,500 Community Institutions & 250,000–300,000 Households Engaged",
                  },
                  {
                    id: 1,
                    num: "02",
                    title: "Sustainable Livelihoods & Youth Futures",
                    collapsedTitle: "Sustainable Livelihoods",
                    icon: Sprout,
                    tag: "Pillar 2 • Strategic Priority",
                    philosophy: "Livelihood security and youth opportunity are central to resilience over the plan period.",
                    desc: "Focuses on strengthening livelihoods and positioning youth as key drivers of economic and social transformation. Enhances youth skills, employability, green livelihoods, and strengthens Farmer Producer Organizations (FPOs) linked directly to markets.",
                    target: "400,000–500,000 Farmers, 25,000–40,000 Youth & 75–120 FPOs Strengthened",
                  },
                  {
                    id: 2,
                    num: "03",
                    title: "Knowledge, Learning & Practice-Based Influence",
                    collapsedTitle: "Knowledge & Learning",
                    icon: Compass,
                    tag: "Pillar 3 • Strategic Priority",
                    philosophy: "Learning is not a support function but a strategic role that strengthens both internal practice and the wider ecosystem.",
                    desc: "Focuses on establishing EFFORT as a learning-oriented organization and a credible source of practice-based knowledge. Systematic learning from field practice, documentation of community experiences, peer learning platforms, and contributing insights to policy dialogue.",
                    target: "1–2 Knowledge Hubs & 100+ Practice Learning Products Developed",
                  },
                  {
                    id: 3,
                    num: "04",
                    title: "Partnerships & Ecosystem Engagement",
                    collapsedTitle: "Partnerships & Ecosystem",
                    icon: Handshake,
                    tag: "Pillar 4 • Strategic Priority",
                    philosophy: "EFFORT’s future impact depends as much on who it works with as on what it does.",
                    desc: "Focuses on building strong, value-aligned partnerships to enhance scale, effectiveness, and sustainability. Includes partnerships with government programs, civil society, CSR entities, academia, and local grassroots organizations guided by ethics and transparency.",
                    target: "30–50 Institutional Partners Across 8–12 Indian States",
                  },
                  {
                    id: 4,
                    num: "05",
                    title: "Organizational Capacity, Leadership & Governance",
                    collapsedTitle: "Organizational Capacity",
                    icon: ShieldCheck,
                    tag: "Pillar 5 • Strategic Priority",
                    philosophy: "Sustained programmatic impact requires strong institutions, capable leadership, and sound governance systems.",
                    desc: "Focuses on strengthening EFFORT as a resilient and values-driven institution. Includes strengthening human resource systems, leadership development, second-line leadership pipelines, governance systems, Board effectiveness, compliance, and staff well-being.",
                    target: "100–150 Skilled Staff Team & Second-Line Leadership Pipeline",
                  },
                  {
                    id: 5,
                    num: "06",
                    title: "Systems, Digitalization & Institutional Sustainability",
                    collapsedTitle: "Digital Systems & MIS",
                    icon: Zap,
                    tag: "Pillar 6 • Strategic Priority",
                    philosophy: "Ensures EFFORT remains future-ready, efficient, transparent, and credible.",
                    desc: "Focuses on strengthening systems, technology, and financial sustainability as key enablers of scale. Includes development of digital tools, MIS, and data systems, strengthening monitoring and reporting frameworks, resource mobilization, and institutional branding.",
                    target: "Enterprise MIS, Real-Time MEL Systems & Diversified Funding Portfolio",
                  },
                ].map((pillar) => {
                  const PillarIcon = pillar.icon;
                  const isActive = activeWhyChooseTab === pillar.id;

                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setActiveWhyChooseTab(pillar.id)}
                      onMouseEnter={() => setActiveWhyChooseTab(pillar.id)}
                      className={`group relative rounded-[32px] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between p-5 sm:p-7 ${isActive
                        ? `lg:flex-[3.5] ${activeTheme.activeCardBg}`
                        : "lg:flex-1 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 shadow-lg text-slate-100"
                        }`}
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-2 transition-opacity duration-300 ${isActive ? `${activeTheme.accentLine} opacity-100` : "bg-white/30 opacity-40"}`} />

                      {/* Top Row Header: Icon + Number */}
                      <div className="flex items-center justify-between gap-3 relative z-10">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 ${isActive
                          ? `bg-gradient-to-tr ${activeTheme.iconGrad} shadow-lg scale-110`
                          : "bg-white/15 text-white border border-white/20 group-hover:scale-105"
                          }`}>
                          <PillarIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        <span className={`text-xl sm:text-2xl font-black transition-colors duration-300 ${isActive ? activeTheme.iconText : "text-white/40 group-hover:text-white"}`}>
                          {pillar.num}
                        </span>
                      </div>

                      {/* ACTIVE EXPANDED CONTENT (SHOWS FULL DETAILS WHEN ACTIVE) */}
                      {isActive ? (
                        <div className="space-y-5 pt-5 relative z-10 animate-fade-in">
                          <div>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-2 border ${activeTheme.pillTag}`}>
                              {pillar.tag}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight [word-break:break-word]">
                              {pillar.title}
                            </h3>
                          </div>

                          <p className="text-stone-300 text-xs sm:text-sm font-medium leading-relaxed">
                            {pillar.desc}
                          </p>

                          {/* Philosophy Quote */}
                          <div className={`backdrop-blur-md rounded-2xl p-4 border flex items-start gap-3 ${activeTheme.quoteBox}`}>
                            <Quote className="w-4 h-4 shrink-0 mt-0.5" />
                            <p className="text-xs font-semibold italic leading-relaxed">
                              &ldquo;{pillar.philosophy}&rdquo;
                            </p>
                          </div>

                          {/* Indicative Scale & Target Box */}
                          <div className={`rounded-2xl p-3.5 border flex items-center gap-3 ${activeTheme.targetBox}`}>
                            <Target className="w-4 h-4 shrink-0" />
                            <div>
                              <span className="text-[10px] font-black uppercase tracking-widest block opacity-90">INDICATIVE SCALE (BY 2030)</span>
                              <span className="text-xs font-bold">{pillar.target}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* COLLAPSED INACTIVE STATE (CLEAN COMPACT VERTICAL PILLAR) */
                        <div className="py-6 relative z-10 flex flex-col justify-end space-y-2 overflow-hidden">
                          <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest shrink-0">
                            Pillar {pillar.num}
                          </span>
                          <h3 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-300 transition-colors leading-snug tracking-tight [word-break:break-word]">
                            {pillar.collapsedTitle}
                          </h3>
                          <p className="text-[11px] text-stone-300/80 font-medium line-clamp-1 truncate">
                            {pillar.tag}
                          </p>
                        </div>
                      )}

                      {/* Bottom Footer Status Tag */}
                      <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-bold text-stone-300 relative z-10 shrink-0">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 truncate">
                          {isActive ? "Active Priority" : "Tap to Inspect"}
                        </span>
                        <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-transform duration-300 ${isActive ? "text-amber-300 translate-x-1" : "text-white/40 group-hover:translate-x-1"}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM TRUST PROOF BAR (3-COLUMN HIGHLIGHTS) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/15">
                {[
                  { label: "Community Ownership", desc: "Local leadership driving sustained change", icon: Users },
                  { label: "Practice-Based Evidence", desc: "100+ Learning products & GIS telemetry logs", icon: Globe2 },
                  { label: "Multi-State Alliances", desc: "30–50 Institutional Partners across 8–12 states", icon: Handshake },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 flex items-center gap-4 shadow-lg hover:border-white/40 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 text-amber-300 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white">{item.label}</h4>
                      <p className="text-xs text-stone-300 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        );
      })()}

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
            className={`text-center max-w-2xl mx-auto mb-12 space-y-3 transition-all duration-700 ${partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
            className={`flex justify-center mb-6 transition-all duration-1000 ${partnersVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white backdrop-blur-xl border-4 border-amber-300/80 p-2.5 flex items-center justify-center animate-glass-glow shadow-[0_0_35px_rgba(251,191,36,0.4)] overflow-hidden group">
              <div className="absolute -inset-3 rounded-full border border-white/20" />
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={logoUrl}
                  alt="EFFORT NGO official logo"
                  className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center">
                  <span className="text-2xl font-black text-emerald-700">EFFORT</span>
                  <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">NGO</span>
                </div>
              )}
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
                  className={`partner-row transition-all duration-700 ${partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            className={`text-center mt-12 transition-all duration-700 ${partnersVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
            className={`max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 space-y-3 transition-all duration-700 ${galleryHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
            className="relative grid grid-rows-2 grid-flow-col gap-5 sm:gap-6 overflow-x-auto scrollbar-hide px-[6vw] py-4 cursor-grab active:cursor-grabbing select-none"
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
            {galleryImages.length === 0 ? (
              <div className="w-full text-center py-12 text-sm text-[#6b655c] font-semibold">
                Field photos coming soon.
              </div>
            ) : (
              galleryImages.map((img) => (
                <div
                  key={img.key}
                  className="group relative w-72 sm:w-80 h-48 sm:h-52 rounded-[28px] overflow-hidden bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_25px_50px_-25px_rgba(120,90,60,0.3)] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_35px_65px_-25px_rgba(180,130,70,0.4)] hover:border-[#d4af6a] transition-all duration-500"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.url} alt="EFFORT NGO field photo" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              ))
            )}
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
                    className={`block transition-all duration-1000 ease-out ${finaleVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                      }`}
                    style={{ transitionDelay: `${i * 180}ms` }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            <p
              className={`max-w-md text-[#5c4a38] text-base sm:text-lg leading-relaxed mt-6 transition-all duration-700 ${finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "450ms" }}
            >
              Every contribution, every hour, every voice moves communities closer to a future
              they build on their own strength. This is where you come in.
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 mt-8 transition-all duration-700 ${finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
              className={`flex flex-wrap gap-x-10 gap-y-6 mt-12 pt-8 border-t border-[#c98a4b]/20 transition-all duration-700 ${finaleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
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
            className={`relative h-[340px] lg:h-[480px] flex items-center justify-center transition-all duration-[1400ms] ease-out ${finaleVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
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
