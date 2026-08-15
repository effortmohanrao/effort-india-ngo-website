"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Award,
  ChevronRight,
  ChevronLeft,
  Play,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Landmark,
  FileText,
  Download,
  Fingerprint,
  Building2,
  Sprout,
  TrendingUp,
  Search,
  Lightbulb,
  Layers,
  ClipboardList,
  Rocket,
  LineChart,
  GraduationCap,
  Handshake,
  Briefcase,
  Users,
  Eye,
  BarChart3,
  Target,
  Quote,
  Star,
  Volume2,
  VolumeX,
  X,
  Check
} from "lucide-react";



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
    // Safety net: never leave a section stuck invisible if the observer
    // doesn't fire (e.g. tab was backgrounded, unusual layout timing).
    const fallback = setTimeout(() => setVisible(true), 2500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return [ref, visible] as const;
}

const heroLines: { text: string; accent?: boolean }[] = [
  { text: "Transforming Lives" },
  { text: "Through Sustainable", accent: true },
  { text: "Development Initiatives" },
];

const heroCredibility: { icon: typeof ShieldCheck; label: string }[] = [
  { icon: ShieldCheck, label: "Registered Society (340/1999)" },
  { icon: TrendingUp, label: "100% Project Success Rate" },
  { icon: Calendar, label: "27 Years of Service" },
  { icon: Landmark, label: "Recognized by Government, Foreign Funding Agencies & Corporate Companies" },
];

const complianceCards: {
  id: string;
  icon: typeof Landmark;
  title: string;
  number: string;
  status: string;
  category: "govt" | "tax" | "csr";
  authority: string;
  details: string;
}[] = [
    {
      id: "rc",
      icon: Landmark,
      title: "Society Registration (RC)",
      number: "Society Reg. No. 340/1999 (AP Act XXI of 1860)",
      status: "Active & Verified",
      category: "govt",
      authority: "Registrar of Societies, Govt of Andhra Pradesh",
      details: "Registered under Societies Registration Act XXI of 1860 with Reg. No. 340/1999. Fully compliant with annual filings, statutory reporting, and public audit standards."
    },
    {
      id: "80g",
      icon: ShieldCheck,
      title: "80G Tax Exemption",
      number: "Section 80G Renewal (Income Tax Act 1961)",
      status: "Active & Verified",
      category: "tax",
      authority: "Income Tax Department, Govt of India",
      details: "Deduction under Section 80G of the Income Tax Act, 1961 allowing 50% tax exemption for qualifying corporate and individual donations."
    },
    {
      id: "12ab",
      icon: FileText,
      title: "12AB Registration",
      number: "Section 12AB Renewal (Govt of India)",
      status: "Active & Verified",
      category: "tax",
      authority: "Central Board of Direct Taxes (CBDT)",
      details: "Tax exemption status for non-profit organizations under Section 12AB of the Income Tax Act, 1961 ensuring tax-free income utilization for public welfare."
    },
    {
      id: "fcra",
      icon: Globe2,
      title: "FCRA Registration",
      number: "FCRA Renewal (Ministry of Home Affairs)",
      status: "Active & Verified",
      category: "govt",
      authority: "Ministry of Home Affairs (MHA), Govt of India",
      details: "Authorized under Foreign Contribution Regulation Act (FCRA) to receive foreign grants, institutional aid, and international philanthropic funding."
    },
    {
      id: "darpan",
      icon: Fingerprint,
      title: "NITI Aayog DARPAN",
      number: "NITI Aayog Govt of India Unique ID",
      status: "Active & Verified",
      category: "govt",
      authority: "NITI Aayog, Govt of India",
      details: "Empaneled on NGO Darpan portal maintaining a verified Unique ID for central and state government department partnerships and grants."
    },
    {
      id: "csr1",
      icon: Building2,
      title: "Form CSR-1 Approval",
      number: "Ministry of Corporate Affairs CSR Approved",
      status: "Active & Verified",
      category: "csr",
      authority: "Ministry of Corporate Affairs (MCA), Govt of India",
      details: "Registration certificate under Rule 4(2) of Companies (CSR Policy) Rules for executing corporate CSR initiatives under Schedule VII."
    },
    {
      id: "sse",
      icon: TrendingUp,
      title: "Social Stock Exchange (SSE)",
      number: "SSE Listed & Approved Social Enterprise",
      status: "Active & Verified",
      category: "csr",
      authority: "SEBI & National Stock Exchange (NSE)",
      details: "Registered Social Enterprise (SPO) on the Social Stock Exchange framework enabling auditable public social impact funding."
    },
    {
      id: "tiss",
      icon: Award,
      title: "TISS Hub Certificate",
      number: "Empaneled by Tata Institute of Social Sciences",
      status: "Active & Verified",
      category: "csr",
      authority: "Tata Institute of Social Sciences (TISS)",
      details: "Empaneled NGO partner audited for high governance, operational capability, and financial transparency by the TISS National CSR Hub."
    },
  ];

const complianceTrustStrip = [
  { icon: ShieldCheck, label: "Society Reg. 340/1999" },
  { icon: ShieldCheck, label: "80G & 12AB Certified" },
  { icon: Globe2, label: "FCRA Renewal Active" },
  { icon: Fingerprint, label: "NITI Aayog Darpan ID" },
  { icon: Building2, label: "MCA CSR-1 Approved" },
  { icon: TrendingUp, label: "SSE Approved" },
  { icon: Award, label: "TISS Empaneled" },
];

function useReentryScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, visible] as const;
}

const impactStats: { target: number }[] = [
  { target: 1909 }, // 0: Villages Covered (1,909+ across 9 States)
  { target: 267000 }, // 1: Families / Lives Impacted (2.67 Lakh)
  { target: 65 }, // 2: Completed Projects (65 Completed Projects)
  { target: 15 }, // 3: Ongoing Projects (15 Active Projects)
  { target: 37 }, // 4: Districts Reached (37 Districts)
  { target: 27 }, // 5: Years of Service (27 Years since 1999)
];

type ProcessStep = {
  step: string;
  badge: string;
  topic: string;
  icon: typeof Search;
};

const processSteps: ProcessStep[] = [
  {
    step: "01",
    badge: "Attitude & Skills",
    topic: "Change the attitudes of rural communities and enhance the skills & Knowledge",
    icon: Lightbulb,
  },
  {
    step: "02",
    badge: "CBO & Planning",
    topic: "Formation & Nurturing the Community Based Organisations and Participatory Programme Planning",
    icon: Users,
  },
  {
    step: "03",
    badge: "Resource Utilisation",
    topic: "Optimum Utilisation of Local Resources",
    icon: Layers,
  },
  {
    step: "04",
    badge: "Monitoring",
    topic: "Participatory Monitoring",
    icon: LineChart,
  },
  {
    step: "05",
    badge: "Sustenance",
    topic: "Measures for the sustenance of project Initiatives",
    icon: ShieldCheck,
  },
];


type PartnershipSlide = { title: string; icon: typeof Landmark; image: string; desc: string };

const partnershipSlides: PartnershipSlide[] = [
  {
    title: "Government",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=900",
    desc: "Working alongside government departments on ground-level implementation and reporting.",
  },
  {
    title: "CSR Partners",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900",
    desc: "Delivering measurable, auditable outcomes for corporate CSR mandates.",
  },
  {
    title: "Educational & Research Institutions",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=900",
    desc: "Collaborating with universities and colleges on research and field programs.",
  },
  {
    title: "International Organizations",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=900",
    desc: "Aligning with global development frameworks and cross-border initiatives.",
  },
  {
    title: "Foundations",
    icon: Award,
    image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&q=80&w=900",
    desc: "Partnering with grant-making foundations on long-term, outcome-driven funding.",
  },
];

const partnershipStats: { label: string; value: string }[] = [
  { label: "Operating States", value: "10 States" },
  { label: "Districts Reached", value: "37 Districts" },
  { label: "Villages Transformed", value: "1,909 Villages" },
  { label: "Community Collectives", value: "1,368 Orgs" },
];

const partnershipBadges: { label: string; icon: typeof ShieldCheck }[] = [
  { label: "Transparent Governance", icon: ShieldCheck },
  { label: "Verified NGO", icon: CheckCircle2 },
  { label: "CSR Schedule VII", icon: Handshake },
  { label: "Government Compliant", icon: Landmark },
  { label: "Impact Driven", icon: TrendingUp },
  { label: "Sustainable Development", icon: Sprout },
];

const partnerLogoPlaceholders = [
  "NABARD",
  "GIZ Germany",
  "Reliance Foundation",
  "Corteva Agriscience",
  "Syngenta India",
  "Azim Premji Foundation",
  "Bayer CropScience",
  "Water.org",
  "Balavikasa",
  "Godfrey Phillips",
  "JSW Foundation",
  "TISS CSR Hub",
];

type CsrSlide = { step: string; title: string; icon: typeof Briefcase; image: string; desc: string };

const csrSlides: CsrSlide[] = [
  {
    step: "01",
    title: "Corporate Requirement",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=900",
    desc: "We start by understanding your CSR mandate, budget, and focus areas under Schedule VII.",
  },
  {
    step: "02",
    title: "Project Planning",
    icon: ClipboardList,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=900",
    desc: "A joint proposal is built with clear timelines, budgets, and measurable outcomes.",
  },
  {
    step: "03",
    title: "Implementation",
    icon: Users,
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=900",
    desc: "Our field teams execute directly in the community, with your brand visible throughout.",
  },
  {
    step: "04",
    title: "Monitoring",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=900",
    desc: "Progress is tracked against agreed milestones, not assumptions.",
  },
  {
    step: "05",
    title: "Impact Report",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=900",
    desc: "A documented report is delivered for your CSR compliance and board reporting.",
  },
];

const csrAdvantageChips: { label: string; icon: typeof Eye }[] = [
  { label: "Transparent Reporting", icon: Eye },
  { label: "Real-Time Monitoring", icon: LineChart },
  { label: "Government Alignment", icon: Landmark },
  { label: "Dedicated Project Team", icon: Users },
  { label: "Impact Analytics", icon: BarChart3 },
  { label: "Periodic Reports", icon: FileText },
  { label: "SDG Mapping", icon: Target },
  { label: "CSR Compliance", icon: ShieldCheck },
];

type RealVoiceStory = {
  id: string;
  category: "all" | "beneficiary" | "csr" | "leader" | "volunteer";
  categoryLabel: string;
  badge: string;
  name: string;
  role: string;
  organization?: string;
  location: string;
  title: string;
  quote: string;
  story: string;
  fullStory: string;
  avatar: string;
  heroImage: string;
  mediaType: "video" | "audio";
  duration: string;
  metrics: { label: string; value: string }[];
  verifiedTag: string;
  sdgTag: string;
  rating: number;
};

const realVoiceStories: RealVoiceStory[] = [
  {
    id: "story-1",
    category: "beneficiary",
    categoryLabel: "Women Entrepreneur",
    badge: "SHG & FPO Leadership",
    name: "Savita Devi",
    role: "President, Mahila Tejaswini Self-Help Group",
    location: "Prakasam District, Andhra Pradesh",
    title: "From Single Sewing Machine to a 15-Artisan Rural Apparel Enterprise",
    quote: "Effort NGO didn't just donate machinery — they taught us financial management, connected our SHG directly to regional buyers, and restored our independent household dignity.",
    story: "Starting with a single sewing machine in her village dwelling, Savita participated in Effort NGO's intensive micro-enterprise capacity building program. Today, she leads a 15-woman tailoring collective supplying uniforms across 12 schools.",
    fullStory: "Savita Devi lived in a small remote village in Prakasam district where seasonal agricultural labor was the only income source for women. In 2021, Effort NGO established a village-level Self-Help Group (SHG) micro-enterprise center equipped with high-speed industrial stitching equipment, financial management workshops, and direct market linkage partnerships.\n\nOver 18 months, Savita transformed from a hesitant learner into the elected President of a 15-member collective. The group now manages bulk contract orders for school uniforms and eco-friendly cloth bags across 12 nearby Gram Panchayats. All 15 member households have quadrupled their monthly savings, opened direct bank accounts, and eliminated dependence on high-interest local informal moneylenders.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "2:45 min video story",
    metrics: [
      { label: "Household Income Multiplier", value: "3.4x Growth" },
      { label: "Women Artisans Employed", value: "15 Members" },
      { label: "Institutional Credit Linked", value: "100% Active" }
    ],
    verifiedTag: "Grassroots SHG Leader",
    sdgTag: "SDG 5: Gender Equality",
    rating: 5
  },
  {
    id: "story-2",
    category: "beneficiary",
    categoryLabel: "Climate Farmer",
    badge: "Water & Soil Conservation",
    name: "Rameshwar Rao",
    role: "Director, Rythu Bandhu Farmer Producer Org (FPO)",
    location: "Nalgonda District, Telangana",
    title: "Saving 10.75M m³ Groundwater Through DSR & Watershed Structures",
    quote: "Adopting Direct Seeded Rice (DSR) and Integrated Pest Management under Effort NGO's guidance reduced our cultivation costs by 28% while recharging community wells across our entire watershed.",
    story: "Facing recurring drought and rising chemical fertilizer costs, Rameshwar led 120 smallholders to build farm ponds, check dams, and adopt climate-resilient cropping techniques enabled by Effort NGO.",
    fullStory: "In semi-arid Nalgonda district, declining water tables and erratic rainfall threatened smallholder paddy farming. Effort NGO's watershed team mobilized 528 villages to construct 2,702 water harvesting structures and conduct field schools on Direct Seeded Rice (DSR) and Integrated Pest Management (IPM).\n\nRameshwar Rao converted his 5-acre family farm into a model climate-smart demonstration plot. By replacing flood irrigation with DSR methods and utilizing farm pond water reserves, he reduced per-acre input costs by 28% while boosting grain yields by 22%. Today, his FPO includes 23,352 shareholder farmers sharing collective storage facilities and market negotiating power.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "3:10 min documentary",
    metrics: [
      { label: "Ground Water Recharged", value: "35% Volume" },
      { label: "Input Expense Drop", value: "28% Reduced" },
      { label: "Farmers Capacitated", value: "1,685+ Trained" }
    ],
    verifiedTag: "FPO Board Representative",
    sdgTag: "SDG 13: Climate Action",
    rating: 5
  },
  {
    id: "story-3",
    category: "csr",
    categoryLabel: "CSR Strategy Lead",
    badge: "Statutory & Corporate Governance",
    name: "Dr. Marcus Weber",
    role: "Senior CSR Strategy Lead, Rural Development Division",
    organization: "International CSR & Development Agency",
    location: "Bengaluru & Global Head Office",
    title: "100% Statutory Compliance & Auditable Field Execution",
    quote: "Partnering with Effort NGO gives our corporate CSR committee complete trust. Their 27-year track record, quarterly Utilization Certificates (UC), and GIS geo-tagged field logs set a benchmark for ground governance.",
    story: "Collaborating across Schedule VII CSR mandates, Effort NGO ensures corporate contributions map directly to auditable social outcomes, verified by independent third-party assessments.",
    fullStory: "Executing high-scale corporate social responsibility mandates requires transparent governance, flawless legal compliance, and verifiable ground metrics. Over a 5-year partnership spanning 37 districts, Effort NGO executed multi-crore CSR initiatives aligned with NITI Aayog guidelines and Companies Act Schedule VII.\n\nEvery project milestone was backed by itemized financial utilization certificates (UC), independent impact audits, and live geo-tagged GIS field mapping. Dr. Weber's corporate oversight board commended Effort NGO for zero statutory non-compliance, immaculate audit reports, and deep community ownership.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
    mediaType: "audio",
    duration: "1:50 min audio interview",
    metrics: [
      { label: "Statutory Audit Compliance", value: "100% Clean" },
      { label: "Quarterly UC Delivery", value: "On-Time Filings" },
      { label: "Field Service Track Record", value: "27 Years" }
    ],
    verifiedTag: "Audited CSR Partner",
    sdgTag: "SDG 17: Partnerships",
    rating: 5
  },
  {
    id: "story-4",
    category: "leader",
    categoryLabel: "Village Sarpanch",
    badge: "Community Health & RO Water",
    name: "Sunita Tai Shinde",
    role: "Gram Panchayat Sarpanch",
    location: "Osmanabad District, Maharashtra",
    title: "Eradicating Waterborne Diseases Across 3 Gram Panchayats",
    quote: "Before Effort NGO installed solar-powered RO water ATMs, high fluoride content caused widespread joint pain and child illness. Now 4,200 villagers drink 100% purified water daily.",
    story: "Sunita worked with Effort NGO engineers to establish self-sustaining solar RO filtration plants operated and maintained by local youth collectives.",
    fullStory: "High fluorosis levels and contaminated groundwater plagued rural hamlets in Osmanabad, leading to chronic gastrointestinal infections and school absenteeism. In 2022, Effort NGO partnered with the local Gram Panchayat to commission 50 community RO purification plants powered by dedicated solar arrays.\n\nUnder Sarpanch Sunita Tai's leadership, a village water user committee was trained to manage daily operations, maintenance funds, and automated RFID water card dispenses. Incidence of waterborne fluorosis dropped by 82% within one year, and user fee revenues now fully cover plant maintenance.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "2:15 min video story",
    metrics: [
      { label: "Clean Water Beneficiaries", value: "4,200 Villagers" },
      { label: "Waterborne Illness Drop", value: "-82% Reduction" },
      { label: "Solar RO Plants Built", value: "50 Units" }
    ],
    verifiedTag: "Elected Village Leader",
    sdgTag: "SDG 6: Clean Water",
    rating: 5
  },
  {
    id: "story-5",
    category: "volunteer",
    categoryLabel: "Youth Volunteer",
    badge: "Digital Education Fellow",
    name: "Kavya Nair",
    role: "Lead Educator & Digital Literacy Fellow",
    location: "Anantapur District, Andhra Pradesh",
    title: "Bringing Solar STEM Labs & Digital Literacy to Rural Classrooms",
    quote: "Seeing rural children code their first animation on solar-powered tablets provided by Effort NGO is the most inspiring experience of my academic career.",
    story: "Kavya spent 6 months teaching foundational computer literacy and STEM concepts across 14 rural government primary schools.",
    fullStory: "Rural schools often lack computer labs, internet connectivity, and specialized STEM teachers. Through Effort NGO's Digital Classroom Fellowship, graduate volunteer Kavya Nair was deployed to remote schools equipped with mobile solar-powered computer kiosks and interactive digital curricula.\n\nOver two academic terms, Kavya conducted hands-on coding workshops, basic computer operation classes, and science experiment kits for over 850 primary school children. 94% of participating students passed basic digital literacy benchmarks, and school attendance rates rose by 26%.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "1:40 min volunteer story",
    metrics: [
      { label: "Students Digitally Trained", value: "850+ Children" },
      { label: "Smart Labs Kiosks", value: "14 Schools" },
      { label: "Volunteer Hours Logged", value: "320 Hours" }
    ],
    verifiedTag: "Youth Impact Fellow",
    sdgTag: "SDG 4: Quality Education",
    rating: 5
  },
  {
    id: "story-6",
    category: "beneficiary",
    categoryLabel: "School Headmaster",
    badge: "Child Education & Infrastructure",
    name: "Rajesh Kumar Varma",
    role: "Headmaster, Zilla Parishad High School",
    location: "Mahbubnagar District, Telangana",
    title: "Achieving Zero Dropouts & 98% Attendance in Village High School",
    quote: "Effort NGO upgraded our school infrastructure, built modern sanitation blocks for girls, and provided midday nutrition. Our attendance jumped from 64% to 98%.",
    story: "Through Effort NGO's holistic school transformation program, 340 children from marginalized farming families received free learning kits and modern science labs.",
    fullStory: "Prior to intervention, ZPHS Mahbubnagar struggled with high dropout rates, especially among teenage girls who lacked access to clean sanitation facilities. Effort NGO stepped in with a holistic school rejuvenation package: constructing dual sanitation blocks with running water, installing a dedicated solar power backup, and equipping an 8-station digital science lab.\n\nHeadmaster Varma reported that girl child dropouts fell to zero within the first academic year. The school's overall Class X board examination pass rate reached an all-time high of 96%, earning regional recognition from the State Education Board.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
    mediaType: "audio",
    duration: "2:05 min audio clip",
    metrics: [
      { label: "School Attendance Rate", value: "98% Peak" },
      { label: "Girl Child Dropout Rate", value: "0% Zero" },
      { label: "Board Exam Pass Rate", value: "96% High" }
    ],
    verifiedTag: "State School Administrator",
    sdgTag: "SDG 4: Quality Education",
    rating: 5
  },
  {
    id: "story-7",
    category: "csr",
    categoryLabel: "CSR Head",
    badge: "Corporate Impact & ESG",
    name: "Ananya Deshmukh",
    role: "Head of CSR & ESG Initiatives",
    organization: "Tech For Good Foundation",
    location: "Mumbai & Pune, Maharashtra",
    title: "Empowering 40 Village Schools with Solar Digital Labs",
    quote: "Effort NGO's field rigor, weekly progress reporting, and zero statutory non-compliance allowed our CSR committee to scale digital literacy seamlessly.",
    story: "Partnering across 40 remote village schools, Ananya's corporate foundation deployed solar computer labs with Effort NGO as the ground implementation partner.",
    fullStory: "Implementing scalable digital education across drought-prone rural districts required bulletproof ground coordination. Effort NGO managed site surveys, solar panel installations, teacher training, and continuous technical support for 40 digital school labs.\n\nAnanya Deshmukh highlighted that Effort NGO's transparent fund utilization certificates and quarterly third-party impact assessments exceeded all internal corporate compliance standards.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "2:10 min CSR spotlight",
    metrics: [
      { label: "Digital Labs Deployed", value: "40 School Labs" },
      { label: "Compliance Benchmark", value: "100% Audited" },
      { label: "Students Benefited", value: "12,000+ Kids" }
    ],
    verifiedTag: "Verified Corporate CSR Lead",
    sdgTag: "SDG 17: Partnerships",
    rating: 5
  },
  {
    id: "story-8",
    category: "leader",
    categoryLabel: "Sarpanch Leader",
    badge: "Groundwater Conservation",
    name: "Gurpreet Singh",
    role: "Gram Panchayat Sarpanch",
    location: "Bathinda District, Punjab",
    title: "Restoring 14 Village Ponds & Groundwater Recharge",
    quote: "Through Effort NGO's watershed engineering, our village borewells recharged by 18 feet. Farming families no longer migrate for winter water.",
    story: "Gurpreet mobilized 1,200 villagers alongside Effort NGO hydrologists to desilt 14 community ponds and build rainwater injection wells.",
    fullStory: "Declining water tables had severely impacted agriculture in Bathinda. Effort NGO partnered with Gurpreet's Gram Panchayat to construct recharge shafts and clean community ponds.\n\nWithin 14 months, static water levels in village wells rose by 18 feet, providing reliable irrigation for winter crops and securing clean livestock drinking water.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1000",
    mediaType: "video",
    duration: "2:30 min field interview",
    metrics: [
      { label: "Water Level Rise", value: "18 Feet Recharged" },
      { label: "Ponds Restored", value: "14 Water Bodies" },
      { label: "Farmland Irrigated", value: "1,800 Acres" }
    ],
    verifiedTag: "Panchayat Sarpanch",
    sdgTag: "SDG 6: Clean Water",
    rating: 5
  },
  {
    id: "story-9",
    category: "volunteer",
    categoryLabel: "Watershed Fellow",
    badge: "Youth Rural Action",
    name: "Aman Verma",
    role: "Civil Engineering Youth Fellow",
    location: "Solapur District, Maharashtra",
    title: "Constructing 32 Check Dams with Local Youth Collectives",
    quote: "Serving alongside Effort NGO engineers gave me hands-on civil experience while directly securing drinking water for 3,500 villagers.",
    story: "Aman spent 8 months living in Solapur, coordinating youth volunteers to construct low-cost check dams ahead of the monsoon.",
    fullStory: "Working in water-stressed Solapur, civil engineering graduate Aman Verma helped design community check dams using locally available stone and gabion structures.\n\nHis team completed 32 check dams across 4 Gram Panchayats, holding back monsoon runoff and supplying 3,500 villagers with clean well water through the dry summer months.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000",
    mediaType: "audio",
    duration: "1:45 min youth interview",
    metrics: [
      { label: "Check Dams Built", value: "32 Structures" },
      { label: "Volunteer Hours", value: "450 Hours" },
      { label: "Villagers Served", value: "3,500 People" }
    ],
    verifiedTag: "Ground Impact Fellow",
    sdgTag: "SDG 13: Climate Action",
    rating: 5
  }
];

export default function Home() {
  // Real Voices & Testimonials section states
  const [voiceCategoryFilter, setVoiceCategoryFilter] = useState<string>("all");

  const filteredStories = realVoiceStories.filter((s) => {
    if (voiceCategoryFilter === "all") return true;
    return s.category === voiceCategoryFilter;
  });


  // Hero section states
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaMagnet, setCtaMagnet] = useState({ x: 0, y: 0 });
  const [ctaRipples, setCtaRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [heroImages, setHeroImages] = useState<{ key: string; url: string }[]>([]);

  useEffect(() => {
    fetch("/api/site/media?prefix=homepage/hero-section", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setHeroImages(data.images ?? []))
      .catch(() => { });
  }, []);

  // Trust & Compliance section states
  const [trustRef, trustVisible] = useScrollReveal<HTMLElement>();
  const [trustScore, setTrustScore] = useState(0);
  const [complianceFilter, setComplianceFilter] = useState<"all" | "govt" | "tax" | "csr">("all");
  const [selectedComplianceDoc, setSelectedComplianceDoc] = useState<(typeof complianceCards)[0] | null>(null);

  // Impact section states (re-triggers count-up animation on every scroll into view)
  const [impactRef, impactVisible] = useReentryScrollReveal<HTMLElement>();
  const [impactValues, setImpactValues] = useState(() => impactStats.map(() => 0));
  const [impactBounce, setImpactBounce] = useState(false);

  // How We Work section states
  const [howWeWorkRef, howWeWorkVisible] = useReentryScrollReveal<HTMLElement>();
  const [activeProcessStep, setActiveProcessStep] = useState(0);
  const [processPaused, setProcessPaused] = useState(false);

  useEffect(() => {
    if (howWeWorkVisible) {
      setActiveProcessStep(0);
    }
  }, [howWeWorkVisible]);

  // Process step selection is 100% manual click only — Auto interval loop removed as requested


  // Government & Institutional Partnerships section states
  const [partnershipRef, partnershipVisible] = useScrollReveal<HTMLElement>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  // CSR Partnership Model section states
  const [csrRef, csrVisible] = useScrollReveal<HTMLElement>();
  const [activeCsrSlide, setActiveCsrSlide] = useState(0);
  const [csrPaused, setCsrPaused] = useState(false);
  const [csrRingProgress, setCsrRingProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!partnershipVisible || carouselPaused) return;
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % partnershipSlides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [partnershipVisible, carouselPaused]);

  useEffect(() => {
    if (!csrVisible || csrPaused) return;
    const id = setInterval(() => {
      setActiveCsrSlide((prev) => (prev + 1) % csrSlides.length);
    }, 3800);
    return () => clearInterval(id);
  }, [csrVisible, csrPaused]);

  useEffect(() => {
    if (!csrVisible) return;
    const duration = 1600;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCsrRingProgress(92 * eased);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [csrVisible]);

  // Real Voices & Impact Story section states
  const [storyRef, storyVisible] = useScrollReveal<HTMLElement>();

  useEffect(() => {
    if (!trustVisible) return;
    const duration = 1400;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setTrustScore(100 * eased);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [trustVisible]);

  useEffect(() => {
    if (!impactVisible) {
      setImpactValues(impactStats.map(() => 0));
      return;
    }
    const duration = 2000;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setImpactValues(impactStats.map((s) => s.target * eased));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setImpactBounce(true);
        setTimeout(() => setImpactBounce(false), 400);
      }
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [impactVisible]);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setCtaMagnet({ x, y });
  };
  const handleCtaMouseLeave = () => {
    setCtaMagnet({ x: 0, y: 0 });
    setCtaHover(false);
  };
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setCtaRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => {
      setCtaRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-28 text-white min-h-[85vh] flex items-center">
        {/* Full-bleed Background Image from Admin Panel (homepage/hero-section) */}
        {heroImages[0] ? (
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImages[0].url}
              alt="EFFORT NGO Background"
              className="w-full h-full object-cover animate-fade-in"
            />
            {/* Background image without dark black overlay */}
          </div>
        ) : (
          /* Soft mesh background fallback when no background image is uploaded */
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 left-[5%] w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-[110px] animate-liquid-drift-a" />
            <div className="absolute top-1/3 right-[-8%] w-[380px] h-[380px] bg-sky-200/40 rounded-full blur-[110px] animate-liquid-drift-b" />
            <div className="absolute bottom-[-12%] left-[28%] w-[320px] h-[320px] bg-amber-100/50 rounded-full blur-[100px] animate-liquid-drift-c" />
            <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:26px_26px]" />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-10 items-center w-full">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-7">

            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Together We Create Lasting Impact
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              {heroLines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden py-0.5">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      line.accent
                        ? "bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]"
                        : "text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                    } ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"}`}
                    style={{ transitionDelay: `${150 + i * 140}ms` }}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className={`text-slate-100 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "550ms" }}
            >
              Empowering farming communities and creating sustainable livelihoods of small and marginal farmers, landless agriculture labor, women, and youth by upholding natural resources, sustainable agriculture, and ecological balance in rural India.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: "680ms" }}
            >
              <a
                href="#programs-section"
                onMouseMove={handleCtaMouseMove}
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={handleCtaMouseLeave}
                onClick={handleCtaClick}
                style={{
                  transform: `translate(${ctaMagnet.x}px, ${ctaMagnet.y - (ctaHover ? 2 : 0)}px) scale(${ctaHover ? 1.05 : 1})`,
                }}
                className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-bold text-base shadow-[0_10px_30px_-8px_rgba(16,185,129,0.55)] transition-transform duration-200 ease-out flex items-center justify-center gap-2"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent pointer-events-none" />
                {ctaRipples.map((r) => (
                  <span
                    key={r.id}
                    className="absolute rounded-full bg-white/40 animate-ripple pointer-events-none"
                    style={{ left: r.x - 6, top: r.y - 6, width: 12, height: 12 }}
                  />
                ))}
                <span className="relative">Explore Our Programs</span>
                <ArrowRight className={`w-5 h-5 relative transition-transform duration-300 ${ctaHover ? "translate-x-1" : ""}`} />
              </a>
              <Link
                href="/get-involved"
                className="group px-8 py-4 rounded-full bg-slate-900/70 hover:bg-slate-800/80 backdrop-blur-md border border-white/30 hover:border-white text-white font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 fill-emerald-400 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                Become a Volunteer
              </Link>
            </div>

            {/* Credibility strip */}
            <div
              className={`flex flex-wrap gap-3 pt-4 transition-all duration-700 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: "850ms" }}
            >
              {heroCredibility.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 bg-slate-900/70 backdrop-blur-xl border border-white/20 rounded-full pl-2.5 pr-4.5 py-2 shadow-xl text-slate-100"
                >
                  <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <item.icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                </span>
              ))}
            </div>

          </div>

          {/* Hero Right Area — Empty space so full-bleed background image shines through */}
          <div className="lg:col-span-5 pointer-events-none" />

        </div>
      </section>

      {/* --- IMPACT SECTION (dark editorial) --- */}
      <section ref={impactRef} className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950 py-10 lg:py-14">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px]" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2 transition-all duration-700 ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 backdrop-blur-md border border-amber-300/20 text-amber-200 text-xs font-bold uppercase tracking-wider">
              Our Reach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Impact That Speaks in Numbers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every figure below reflects real work on the ground — communities reached, projects delivered, and years of consistent, on-the-record service.
            </p>
          </div>

          {/* Giant headline stat */}
          <div
            className={`text-center mb-6 sm:mb-8 transition-all duration-700 ${impactVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            <p
              className={`text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight bg-gradient-to-b from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent ${impactBounce ? "animate-count-bounce" : ""
                }`}
            >
              {Math.round(impactValues[1]).toLocaleString("en-IN")}+
            </p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="h-px w-10 bg-amber-400/50" />
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.22em] text-amber-300">
                FAMILIES &amp; LIVES IMPACTED (2.67 LAKH+)
              </p>
              <span className="h-px w-10 bg-amber-400/50" />
            </div>
          </div>

          {/* Editorial stat ledger updated with official PDF data */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-white/10 border-y border-white/10 transition-all duration-700 ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            {[
              { i: 0, label: "Villages Covered", desc: "Across 10 Indian States", suffix: "+" },
              { i: 2, label: "Completed Projects", desc: "65 Delivered End-to-End", suffix: "" },
              { i: 3, label: "Ongoing Projects", desc: "15 Active Field Projects", suffix: "" },
              { i: 4, label: "Districts Reached", desc: "Across 37 Districts", suffix: "" },
              { i: 5, label: "Years of Service", desc: "Founded in 1999", suffix: " Yrs" },
            ].map((stat) => (
              <div key={stat.label} className="group px-4 py-5 lg:py-7 text-center hover:bg-white/[0.04] transition-colors duration-300">
                <p
                  className={`text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-amber-300 transition-colors duration-300 ${impactBounce ? "animate-count-bounce" : ""
                    }`}
                >
                  {Math.round(impactValues[stat.i]).toLocaleString("en-IN")}{stat.suffix}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>


          <div
            className={`text-center mt-6 transition-all duration-700 ${impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-amber-300/40 bg-amber-400/10 text-amber-200 font-bold text-xs sm:text-sm hover:bg-amber-300/20 hover:border-amber-300/60 hover:-translate-y-0.5 transition-all shadow-[0_0_20px_rgba(251,191,36,0.25)]"
            >
              Explore Full Impact Ledger &amp; Interactive GIS Field Map <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST & COMPLIANCE SECTION (OPTION 2: SOFT LIQUID SILK AURORA BACKGROUND) --- */}
      <section ref={trustRef} id="trust-section" className="relative overflow-hidden text-slate-900 py-12 lg:py-16 bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F5EBE0]">
        {/* Soft Liquid Silk Aurora Morphing Glow Bands (Option 2) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top-Left: Warm Champagne Gold Aurora Silk Band */}
          <div className="absolute -top-36 -left-32 w-[720px] h-[720px] bg-gradient-to-br from-amber-200/50 via-amber-300/30 to-orange-200/20 rounded-full blur-[140px] animate-aurora-silk-1" />

          {/* Top-Right: Soft Rose & Amber Gold Aurora Silk Band */}
          <div className="absolute top-1/4 -right-36 w-[760px] h-[760px] bg-gradient-to-bl from-rose-200/45 via-amber-200/30 to-yellow-100/25 rounded-full blur-[160px] animate-aurora-silk-2" />

          {/* Bottom-Left: Soft Warm Cream Aurora Silk Band */}
          <div className="absolute -bottom-36 left-1/4 w-[680px] h-[680px] bg-gradient-to-tr from-amber-300/35 via-amber-100/25 to-rose-100/20 rounded-full blur-[150px] animate-aurora-silk-3" />

          {/* Center Ambient Warm Breathing Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] bg-gradient-radial from-amber-200/25 via-orange-100/15 to-transparent rounded-full blur-[170px] animate-halo-breathe pointer-events-none" />
        </div>

        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div
            className={`text-center max-w-5xl mx-auto mb-8 sm:mb-10 space-y-3 transition-all duration-700 ${trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-[11px] font-extrabold uppercase tracking-[0.18em] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>VERIFIED &bull; GOVERNMENT RECOGNIZED</span>
            </div>

            {/* Single Line Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-tight md:whitespace-nowrap">
              Built on <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 bg-clip-text text-transparent">Transparency</span>, Backed by <span className="bg-gradient-to-r from-amber-800 via-rose-800 to-amber-950 bg-clip-text text-transparent">Compliance</span>
            </h2>

            {/* Subtitle Balanced in Exactly 3 Lines */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-[780px] mx-auto font-medium [text-wrap:balance]">
              Our commitment to transparency is reflected through nationally recognized registrations, regulatory compliance, financial accountability, and responsible governance, giving every stakeholder complete confidence in partnering with us.
            </p>
          </div>

          {/* HORIZONTAL COMPOSITION ARCHITECTURE FOR SECTION 3 */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >

            {/* TOP BANNER: 50/50 HORIZONTAL COMPOSITION (DOCUMENT PREVIEW + 100% COMPLIANCE HUD) */}
            <div className="bg-gradient-to-br from-[#2D1014] via-[#1E090C] to-[#250B0E] text-white border-2 border-amber-500/40 rounded-[32px] shadow-[0_25px_60px_-15px_rgba(45,16,20,0.4)] p-6 sm:p-8 relative overflow-hidden">
              
              {/* Top ambient gold light glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-[100px]" />

              <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">

                {/* LEFT HALF (6 Cols): CERTIFICATE PREVIEW & TRUST DESCRIPTION */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-1 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-full" />
                    <span className="text-[11px] font-black text-amber-300 uppercase tracking-[0.2em]">OFFICIAL CERTIFICATION VAULT</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Trust &amp; Compliance Center</h3>
                    <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed font-normal mt-2 max-w-xl">
                      Our organization strictly adheres to the highest standards of national statutory compliance, legal registrations, financial accountability, and government audit transparency.
                    </p>
                  </div>

                  {/* Framed Official Certificate Document Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-amber-400/40 shadow-xl bg-[#140608] max-w-xl">
                    <img
                      src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                      alt="Official registration documents"
                      className="w-full h-36 sm:h-44 object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                    />
                    {/* Floating Documented / Verified indicator badge */}
                    <div className="absolute top-3 right-3 z-20 bg-[#19070a]/90 backdrop-blur-md border border-amber-400/50 text-amber-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                      <span>DOCUMENTED / VERIFIED</span>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#140608] via-[#140608]/80 to-transparent p-3 flex items-center justify-between text-xs">
                      <span className="text-white font-bold truncate">Government Statutory License Credentials</span>
                      <span className="text-amber-300 font-mono text-[10px] font-bold shrink-0">REGISTRATIONS: 8 ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT HALF (5 Cols): 100% COMPLIANCE HIGH-IMPACT 3D HOLOGRAPHIC HUD GAUGE */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="w-full bg-gradient-to-br from-[#2a0e11] via-[#1a080a] to-[#250b0e] border-2 border-amber-400/80 rounded-[28px] p-6 sm:p-7 shadow-[0_0_50px_rgba(245,158,11,0.25)] flex flex-col items-center justify-center text-center relative overflow-hidden group/compcard">

                    {/* Shifting breathing cream & amber radial light halos */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/20 rounded-full blur-[70px] animate-liquid-drift-a" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-[#faf5ee]/15 rounded-full blur-[50px] animate-liquid-drift-b" />
                    </div>

                    {/* HIGH-IMPACT 3D HOLOGRAPHIC ENGINE ASSEMBLY */}
                    <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center my-1">

                      {/* Outer Pulsing Radar Aura Rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-ping opacity-30" style={{ animationDuration: '3.5s' }} />
                      <div className="absolute -inset-3 rounded-full border border-amber-300/20 animate-halo-breathe" />

                      {/* Dual Orbiting Glowing Light Nodes */}
                      <div className="absolute inset-0 animate-[orbit-rotate_6s_linear_infinite] pointer-events-none">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 shadow-[0_0_20px_#f59e0b] border-2 border-[#1a080a]" />
                      </div>
                      <div className="absolute inset-0 animate-[orbit-counter_10s_linear_infinite] pointer-events-none">
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-amber-100 to-amber-300 shadow-[0_0_15px_#fde68a] border-2 border-[#1a080a]" />
                      </div>

                      {/* Outer Precision Ticked SVG HUD Ring */}
                      <svg className="w-full h-full transform -rotate-90 drop-shadow-[0_0_22px_rgba(245,158,11,0.85)]" viewBox="0 0 160 160">
                        <defs>
                          <linearGradient id="hudRingGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="35%" stopColor="#fde68a" />
                            <stop offset="70%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                          </linearGradient>
                        </defs>

                        {/* Outer dashed notch ring */}
                        <circle
                          cx="80"
                          cy="80"
                          r="74"
                          className="stroke-amber-300/40"
                          strokeWidth="2"
                          strokeDasharray="4 8"
                          fill="transparent"
                        />

                        {/* Dark inner track */}
                        <circle
                          cx="80"
                          cy="80"
                          r="64"
                          className="stroke-[#381318]"
                          strokeWidth="12"
                          fill="transparent"
                        />

                        {/* Glowing primary 100% progress ring */}
                        <circle
                          cx="80"
                          cy="80"
                          r="64"
                          stroke="url(#hudRingGradient3D)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          fill="transparent"
                          strokeDasharray={402.12}
                          strokeDashoffset={402.12 - (402.12 * trustScore) / 100}
                          className="transition-all duration-700 ease-out"
                        />
                      </svg>

                      {/* Center 3D Glass Badge Disc: 100% & COMPLIANCE */}
                      <div className="absolute w-28 h-28 sm:w-30 sm:h-30 rounded-full bg-gradient-to-br from-[#3b1518]/95 via-[#22090b]/98 to-[#160506]/95 border-2 border-amber-300/80 shadow-[0_0_35px_rgba(245,158,11,0.5)] backdrop-blur-xl flex flex-col items-center justify-center pointer-events-none p-2 text-center overflow-hidden">
                        <span className="text-3xl sm:text-[32px] font-black bg-gradient-to-b from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(253,230,138,0.9)] tracking-tight leading-none">
                          {Math.round(trustScore)}%
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-black text-[#fde68a] uppercase tracking-[0.2em] mt-1 drop-shadow-sm">
                          COMPLIANCE
                        </span>
                      </div>
                    </div>

                    {/* Underneath Floating 3D Pill Badge: GOVERNMENT REGISTERED */}
                    <div className="mt-3 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#351216] border border-amber-400/80 text-[#fde68a] text-[11px] font-black uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(245,158,11,0.35)]">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>GOVERNMENT REGISTERED</span>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* MIDDLE FILTER BAR: CATEGORY SELECTION TABS & LIVE RECORD COUNT BADGE */}
            <div className="bg-white/90 backdrop-blur-md border border-amber-900/15 rounded-2xl p-3 sm:p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {[
                  { key: "all", label: `ALL RECORDS (${complianceCards.length})` },
                  {
                    key: "govt",
                    label: `GOVERNMENT REGISTRATIONS (${
                      complianceCards.filter((c) => c.category === "govt").length
                    })`,
                  },
                  {
                    key: "tax",
                    label: `TAX EXEMPTIONS (${
                      complianceCards.filter((c) => c.category === "tax").length
                    })`,
                  },
                  {
                    key: "csr",
                    label: `CSR & INSTITUTIONAL (${
                      complianceCards.filter((c) => c.category === "csr").length
                    })`,
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setComplianceFilter(tab.key as typeof complianceFilter)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      complianceFilter === tab.key
                        ? "bg-gradient-to-r from-amber-700 to-amber-800 text-white font-black shadow-md scale-105"
                        : "bg-amber-50/70 text-slate-700 border border-amber-900/10 hover:bg-amber-100 hover:text-amber-900 shadow-xs"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="text-[11px] font-black tracking-[0.2em] text-amber-900 uppercase hidden lg:inline-flex items-center gap-1.5 mr-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping" />
                  STATUS: ACTIVE
                </span>
                <span className="text-xs font-black tracking-wider text-amber-900 bg-amber-100/90 border border-amber-300/80 px-4 py-1.5 rounded-full font-mono shadow-sm">
                  {String(
                    complianceCards.filter(
                      (c) => complianceFilter === "all" || c.category === complianceFilter
                    ).length
                  ).padStart(2, "0")}{" "}
                  VERIFIED RECORDS
                </span>
              </div>
            </div>

            {/* BOTTOM HORIZONTAL 4-COLUMN RESPONSIVE CARD GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {complianceCards
                .filter((card) => complianceFilter === "all" || card.category === complianceFilter)
                .map((card, i) => {
                  return (
                    <div
                      key={card.id}
                      className="bg-white/95 backdrop-blur-xl rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between border border-amber-900/15 shadow-[0_10px_30px_-10px_rgba(120,53,15,0.12)] opacity-100 scale-100 hover:border-amber-500/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card min-h-[170px]"
                      style={{ transitionDelay: `${30 + i * 30}ms` }}
                    >
                      {/* Top glowing edge accent line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 opacity-100 group-hover/card:h-1.5 transition-all" />

                      <div>
                        {/* High-Contrast Icon Box & Status Badge */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 text-white border border-amber-400 flex items-center justify-center shadow-md group-hover/card:scale-110 transition-transform">
                            <card.icon className="w-5 h-5 text-white" />
                          </div>

                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Active
                          </span>
                        </div>

                        {/* Title & Detail */}
                        <h4 className="text-sm font-black leading-tight text-slate-900 group-hover/card:text-amber-900 transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs font-bold mt-1.5 leading-relaxed text-amber-900/90 font-mono">
                          {card.number}
                        </p>
                      </div>

                        {/* Verification Status Indicator */}
                        <div className="mt-4 pt-2.5 border-t border-amber-100 flex items-center justify-between text-[10px] font-mono text-amber-900/80">
                          <span className="tracking-wider font-semibold">STATUS &rarr; VERIFIED</span>
                          <span className="font-black flex items-center gap-1 text-amber-800">
                            <ShieldCheck className="w-3 h-3 text-amber-700" /> OFFICIAL
                          </span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>

          {/* BOTTOM TRUST STRIP: Continuous Horizontal Scrolling Marquee */}
          <div
            className={`mt-6 relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-xl border border-amber-900/15 shadow-md py-3 px-2 transition-all duration-700 ${trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "700ms" }}
          >
            {/* Fade masks on left & right edges */}
            <div className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(to_right,white,transparent_5%,transparent_95%,white)]" />

            <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...complianceTrustStrip, ...complianceTrustStrip, ...complianceTrustStrip].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 px-4 text-xs font-bold text-slate-800 shrink-0 cursor-default">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{item.label}</span>
                  <span className="text-amber-600 font-bold text-xs ml-4">&bull;</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- HOW WE WORK SECTION (NEXT-GEN INTERACTIVE NGO IMPACT PIPELINE COMMAND CENTER) --- */}
      <section ref={howWeWorkRef} className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 py-20 lg:py-28 text-white">
        {/* Soft Mesh Glowing Aurora Backdrop */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[10%] w-[520px] h-[520px] bg-cyan-500/15 rounded-full blur-[150px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[160px] animate-liquid-drift-b" />
          <div className="absolute top-[40%] left-[45%] w-[380px] h-[380px] bg-amber-400/10 rounded-full blur-[140px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)] [background-size:28px_28px]" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div
            className={`text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-4 transition-all duration-700 ${howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Strategic Execution Engine
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              How Effort Delivers <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">Auditable Social Impact</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Every initiative follows a disciplined, 5-phase execution model — bridging ground-level community diagnostics with corporate CSR compliance and self-sustaining local governance.
            </p>
          </div>

          {/* 5 Glassmorphism Strategic Execution Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 transition-all duration-700 ${howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            style={{ transitionDelay: "150ms" }}
          >
            {processSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative rounded-3xl bg-slate-900/90 backdrop-blur-2xl border-2 border-cyan-400/80 p-5 sm:p-6 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-400 flex flex-col justify-between overflow-hidden"
                >
                  {/* Permanent top edge glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 opacity-100" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-cyan-400 text-slate-950 font-black shadow-sm">
                        Phase {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        <StepIcon className="w-4.5 h-4.5 text-slate-950" />
                      </div>
                    </div>

                    <h3 className="text-xs font-black uppercase tracking-wider text-cyan-300">
                      {step.badge}
                    </h3>

                    <p className="text-sm font-bold text-white leading-relaxed">
                      {step.topic}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Strategic NGO Advantage Chips Strip */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-12 transition-all duration-700 ${howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            {[
              { label: "Geo-Tagged Field Verification", icon: MapPin },
              { label: "100% Financial Auditability", icon: ShieldCheck },
              { label: "Real-Time Partner Dashboards", icon: BarChart3 },
              { label: "27 Years Field Legacy", icon: Calendar },
              { label: "FPO & SHG Integration", icon: Users },
              { label: "NITI Aayog DARPAN Compliant", icon: Landmark },
            ].map((chip) => (
              <div
                key={chip.label}
                className="p-[1.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 hover:shadow-[0_0_20px_-4px_rgba(6,182,212,0.5)] transition-shadow"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md hover:bg-slate-900 transition-colors text-white">
                  <chip.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-slate-200">{chip.label}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- GOVERNMENT & INSTITUTIONAL PARTNERSHIPS SECTION (OPTION A: EXECUTIVE CHAMPAGNE/CREAM PALETTE) --- */}
      <section ref={partnershipRef} className="relative overflow-hidden text-slate-900 py-16 lg:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0]">
        {/* Soft Liquid Silk Ambient Halos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-bl from-amber-200/45 via-amber-100/30 to-transparent rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-gradient-to-tr from-rose-100/40 via-amber-100/25 to-transparent rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute inset-0 bg-noise opacity-[0.2]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left: content, stats, CTAs */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${partnershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-[11px] font-extrabold uppercase tracking-[0.18em] shadow-sm">
                <Landmark className="w-3.5 h-3.5 text-amber-700" />
                <span>GOVERNMENT &amp; INSTITUTIONAL PARTNERSHIPS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-4 leading-tight">
                Building Strong Partnerships For <span className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-950 bg-clip-text text-transparent">Sustainable Development</span>
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4 font-medium">
                We collaborate with central &amp; state government departments, international development agencies, corporate CSR funds, and academic institutions to deliver transparent, scalable, and auditable social impact.
              </p>

              {/* Verified Institutional Reach Matrix */}
              <div className="grid grid-cols-2 gap-3.5 mt-7">
                {partnershipStats.map((stat) => (
                  <div key={stat.label} className="bg-white/90 backdrop-blur-xl border border-amber-900/15 rounded-2xl p-4 shadow-[0_8px_25px_-8px_rgba(120,53,15,0.12)]">
                    <p className="font-black text-2xl text-slate-900 tracking-tight">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-900/80 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black text-xs uppercase tracking-wider shadow-lg hover:bg-amber-800 hover:-translate-y-0.5 transition-all group"
                >
                  Become A Partner <ArrowUpRight className="w-4 h-4 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href="#trust-section"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-900/20 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-amber-50 hover:text-amber-900 transition-all shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-700" /> View Statutory Credentials
                </a>
              </div>
            </div>

            {/* Right: partner showcase carousel + trust badges */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${partnershipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Floating trust badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {partnershipBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-900/15 text-[11px] font-bold text-slate-800 shadow-xs hover:border-amber-500 transition-colors"
                  >
                    <badge.icon className="w-3.5 h-3.5 text-amber-700" /> {badge.label}
                  </span>
                ))}
              </div>

              {/* High-Contrast Light Glass Carousel Card */}
              <div
                className="group relative bg-white/95 backdrop-blur-2xl border-2 border-amber-900/15 rounded-[34px] p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(120,53,15,0.15)] overflow-hidden"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent animate-light-sweep" />
                </div>

                {(() => {
                  const slide = partnershipSlides[activeSlide];
                  const SlideIcon = slide.icon;
                  return (
                    <div key={activeSlide} className="animate-fade-in relative z-10">
                      <div className="grid sm:grid-cols-2 gap-6 items-center">
                        <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 border border-amber-900/15 shadow-sm">
                          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                        </div>
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center mb-4 shadow-xs">
                            <SlideIcon className="w-6 h-6 text-amber-700" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-slate-900">{slide.title}</h3>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2">{slide.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Dot indicators */}
                <div className="relative z-10 flex justify-center gap-2 mt-6">
                  {partnershipSlides.map((s, i) => (
                    <button
                      key={s.title}
                      onClick={() => setActiveSlide(i)}
                      aria-label={`Show ${s.title}`}
                      className={`h-2 rounded-full transition-all ${i === activeSlide ? "w-7 bg-amber-700" : "w-2 bg-amber-200 hover:bg-amber-400"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Infinite verified partner logo marquee */}
          <div
            className={`mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] transition-all duration-700 ${partnershipVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex w-max gap-3.5 animate-marquee">
              {[...partnerLogoPlaceholders, ...partnerLogoPlaceholders, ...partnerLogoPlaceholders].map((logo, i) => (
                <span
                  key={i}
                  className="shrink-0 px-6 py-3.5 rounded-2xl bg-white/95 border border-amber-900/15 text-xs font-black tracking-wider text-amber-900 shadow-sm flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-amber-700" /> {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CSR PARTNERSHIP MODEL SECTION (SOLID MAROON FILLED CARDS WITH CREAM TEXT & ICONS) --- */}
      <section ref={csrRef} className="relative overflow-hidden text-[#2B0C10] py-16 lg:py-24 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0]">
        {/* Soft Liquid Glowing Ambient Halos */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-1/3 w-[700px] h-[700px] bg-amber-200/30 rounded-full blur-[160px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-200/25 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="bg-noise absolute inset-0 opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div
            className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 transition-all duration-700 ${csrVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#381116] border border-[#5B1D24] text-[#F7E4A3] text-[11px] font-extrabold uppercase tracking-[0.18em] shadow-md">
              <Handshake className="w-3.5 h-3.5 text-amber-300" />
              <span>CSR LIFECYCLE &amp; GOVERNANCE SUITE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#2B0C10] leading-tight">
              Transforming Corporate Responsibility Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A141A] via-[#6B1F27] to-[#80242E]">Verified Social Impact</span>
            </h2>

            <p className="text-[#522026] text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
              Form CSR-1 approved, Section 80G tax deductible, and NITI Aayog DARPAN empaneled for transparent corporate CSR execution under Companies Act Schedule VII.
            </p>
          </div>

          {/* Horizontal 4-Stage CSR Execution Lifecycle Cards Grid (FILLED WITH SOLID MAROON) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              {
                step: "01",
                title: "Schedule VII Scoping",
                desc: "Mapping corporate CSR mandates under Schedule VII, ensuring NITI Darpan & MCA CSR-1 alignment.",
                icon: Briefcase,
                tag: "Statutory Scoping",
              },
              {
                step: "02",
                title: "Baseline & Co-Design",
                desc: "Diagnostic field mapping across villages to build itemized logframes and auditable milestone deliverables.",
                icon: ClipboardList,
                tag: "Ground Diagnostics",
              },
              {
                step: "03",
                title: "Direct Field Execution",
                desc: "Deploying experienced field leadership alongside FPOs, SHGs, and local community institutions.",
                icon: Users,
                tag: "Direct Mobilization",
              },
              {
                step: "04",
                title: "Auditable Governance",
                desc: "Quarterly Utilization Certificate (UC) audits, geo-tagged GIS progress logs, and impact verification.",
                icon: ShieldCheck,
                tag: "100% Auditability",
              },
            ].map((card, i) => (
              <div
                key={card.step}
                className={`bg-gradient-to-b from-[#381116] via-[#2D0D11] to-[#22090B] border-2 border-[#D4AF6A]/40 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between space-y-4 shadow-[0_15px_40px_-15px_rgba(56,17,22,0.4)] hover:border-[#F7E4A3] hover:shadow-[0_20px_50px_-15px_rgba(56,17,22,0.6)] hover:-translate-y-1 transition-all duration-500 ${csrVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#F7E4A3] border border-[#D4AF6A] text-[#2B0C10] font-mono font-black text-sm flex items-center justify-center shadow-md">
                      {card.step}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#FAF6EE] border border-[#D4AF6A] text-[#2B0C10] text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#FAF6EE]">{card.title}</h3>
                  <p className="text-xs text-[#F5E5C9]/90 font-medium leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#D4AF6A]/25 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F7E4A3] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F7E4A3]" /> Milestone Verified
                  </span>
                  <card.icon className="w-4 h-4 text-[#F7E4A3]/80" />
                </div>
              </div>
            ))}
          </div>

          {/* Partner Governance Command Suite Box (FILLED WITH SOLID MAROON & CREAM TEXT) */}
          <div className="bg-gradient-to-r from-[#381116] via-[#2A0B0E] to-[#381116] border-2 border-[#D4AF6A]/50 rounded-[32px] p-6 sm:p-8 shadow-[0_25px_60px_-20px_rgba(56,17,22,0.5)] relative overflow-hidden mb-12 text-white">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#F7E4A3] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Partner Governance Command Suite
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Real-Time Compliance &amp; Impact Analytics</h3>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#2B0C10] bg-[#F7E4A3] px-3 py-1.5 rounded-full font-mono border border-[#D4AF6A] shadow-sm">
                Auditable Standards
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Statutory Schedule VII Auditability", value: "100%", sub: "Form CSR-1 Approved" },
                { label: "Audited Utilization Certificates", value: "Quarterly", sub: "UC Filings Delivered" },
                { label: "Geo-Tagged GIS Field Logs", value: "Verified", sub: "Photo & Map Proof" },
                { label: "Corporate Governance Standard", value: "Zero-Tolerance", sub: "Clean Track Record" },
              ].map((item) => (
                <div key={item.label} className="bg-[#1C0709]/90 border border-[#D4AF6A]/35 rounded-2xl p-4 shadow-sm">
                  <p className="text-xl sm:text-2xl font-black text-[#F7E4A3]">{item.value}</p>
                  <p className="text-xs font-bold text-[#FAF6EE] mt-1">{item.label}</p>
                  <p className="text-[10px] text-[#F5E5C9]/70 font-medium mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs & Chips */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#381116] border-2 border-[#D4AF6A] text-[#F7E4A3] font-black text-xs uppercase tracking-wider shadow-xl hover:bg-[#2B0C10] hover:scale-105 transition-all group"
            >
              Partner With Us <ArrowUpRight className="w-4 h-4 text-[#F7E4A3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <a
              href="#trust-section"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FAF6EE] border-2 border-[#381116] text-[#2B0C10] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-amber-800" /> View Statutory Compliance Registrations
            </a>
          </div>

        </div>
      </section>

      {/* --- REAL VOICES, IMPACT & TESTIMONIALS (WARM SUNSET CRIMSON & ORANGE GLASSMORPHISM WITH HIGHLIGHTED CIRCLE AVATARS) --- */}
      <section ref={storyRef} className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-[#2E0A12] via-[#4A1019] via-[#380A12] to-[#1D040A] text-white border-t border-rose-500/20">
        {/* Soft Glowing Liquid Ambient Glows & Dynamic Mesh */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[10%] w-[650px] h-[650px] bg-rose-500/20 rounded-full blur-[170px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] left-[5%] w-[550px] h-[550px] bg-amber-500/25 rounded-full blur-[160px] animate-liquid-drift-b" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-[180px] animate-aurora-silk-1" />
          <div className="bg-noise absolute inset-0 opacity-15" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

          {/* Section Header */}
          <div
            className={`text-center max-w-3xl mx-auto space-y-3 transition-all duration-700 ${storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Quote className="w-3.5 h-3.5 text-amber-400" />
              <span>VOICES OF TRANSFORMATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Real Stories of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300">Dignity, Impact &amp; Trust</span>
            </h2>

            <p className="text-rose-100/80 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
              Direct field testimony from smallholder farmers, women entrepreneurs, village Sarpanches, and corporate CSR partners across 1,909 villages.
            </p>
          </div>

          {/* Category Filters Bar (Continuous Live Ticker badge removed as requested!) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 pb-4 border-b border-rose-500/20">
            {[
              { id: "all", label: "All Stories", count: realVoiceStories.length },
              { id: "beneficiary", label: "Women & Farmers", count: realVoiceStories.filter(s => s.category === "beneficiary").length },
              { id: "csr", label: "CSR Partners", count: realVoiceStories.filter(s => s.category === "csr").length },
              { id: "leader", label: "Village Leaders", count: realVoiceStories.filter(s => s.category === "leader").length },
              { id: "volunteer", label: "Youth Fellows", count: realVoiceStories.filter(s => s.category === "volunteer").length },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setVoiceCategoryFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${voiceCategoryFilter === tab.id
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-[0_4px_25px_rgba(245,158,11,0.4)] scale-105 border border-amber-300"
                  : "bg-white/10 backdrop-blur-md border border-white/15 text-rose-100 hover:bg-white/20 hover:text-white"
                  }`}
              >
                <span>{tab.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${voiceCategoryFilter === tab.id ? "bg-slate-950 text-amber-300 font-black" : "bg-white/15 text-amber-200"}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* TESTIMONIALS RENDERING TRACK (DYNAMIC FLEX OR SUNSET MARQUEE) */}
          {filteredStories.length < 3 ? (
            /* Centered Stationary Layout for Categories with 1 or 2 Stories */
            <div className="flex flex-wrap justify-center gap-6 py-4">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  className="w-[330px] sm:w-[390px] lg:w-[420px] shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-amber-400/80 rounded-[36px] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.25)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group"
                >
                  {/* Accent Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500" />

                  {/* Background Watermark Quote Mark */}
                  <Quote className="w-16 h-16 text-rose-300/10 absolute top-4 right-4 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                  {/* HIGH-LIGHTED CIRCULAR PROFILE HEADER */}
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Highlighted Circle Avatar Container */}
                      <div className="relative shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-full h-full rounded-full object-cover border-2 border-slate-950 shadow-inner"
                          />
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shadow-md border-2 border-slate-950">
                          ✓
                        </span>
                      </div>

                      {/* Author Details & Rating */}
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors truncate">
                            {story.name}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[9px] font-black uppercase tracking-wider shrink-0">
                            {story.categoryLabel}
                          </span>
                        </div>

                        <p className="text-xs font-extrabold text-amber-300 truncate">{story.role}</p>

                        <div className="flex items-center justify-between text-xs pt-0.5">
                          <div className="flex items-center text-amber-400 gap-0.5">
                            {[...Array(story.rating)].map((_, r) => (
                              <Star key={r} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          <span className="text-[11px] font-bold text-rose-200/80 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-amber-400" /> {story.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* SINGLE PROMINENT SUNSET GLASS QUOTE BOX */}
                    <div className="bg-black/35 backdrop-blur-md border-l-4 border-amber-400 rounded-r-2xl p-5 border-t border-b border-r border-white/10 shadow-inner">
                      <p className="text-amber-100 font-extrabold italic text-sm sm:text-base leading-relaxed">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Impact Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 relative z-10">
                    {story.metrics.map((m) => (
                      <div key={m.label} className="bg-white/5 border border-white/15 rounded-xl p-2.5 text-center">
                        <p className="text-sm sm:text-base font-black text-amber-300">{m.value}</p>
                        <p className="text-[9px] font-bold text-rose-100/80 mt-0.5 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Continuous Smooth Marquee Ticker Track for 3+ Stories */
            <div className="overflow-hidden w-full py-4 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
              <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] transform-gpu will-change-transform cursor-grab active:cursor-grabbing">
                {[...filteredStories, ...filteredStories, ...filteredStories].map((story, i) => (
                  <div
                    key={`${story.id}-${i}`}
                    className="w-[330px] sm:w-[390px] lg:w-[420px] shrink-0 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-amber-400/80 rounded-[36px] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.25)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between space-y-6 relative overflow-hidden group"
                  >
                    {/* Accent Top Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500" />

                    {/* Background Watermark Quote Mark */}
                    <Quote className="w-16 h-16 text-rose-300/10 absolute top-4 right-4 pointer-events-none group-hover:scale-110 transition-transform duration-500" />

                    {/* HIGH-LIGHTED CIRCULAR PROFILE HEADER */}
                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center gap-4">
                        {/* Highlighted Circle Avatar Container */}
                        <div className="relative shrink-0">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 shadow-xl group-hover:scale-105 transition-transform duration-300">
                            <img
                              src={story.avatar}
                              alt={story.name}
                              className="w-full h-full rounded-full object-cover border-2 border-slate-950 shadow-inner"
                            />
                          </div>
                          <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black shadow-md border-2 border-slate-950">
                            ✓
                          </span>
                        </div>

                        {/* Author Details & Rating */}
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors truncate">
                              {story.name}
                            </h4>
                            <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[9px] font-black uppercase tracking-wider shrink-0">
                              {story.categoryLabel}
                            </span>
                          </div>

                          <p className="text-xs font-extrabold text-amber-300 truncate">{story.role}</p>

                          <div className="flex items-center justify-between text-xs pt-0.5">
                            <div className="flex items-center text-amber-400 gap-0.5">
                              {[...Array(story.rating)].map((_, r) => (
                                <Star key={r} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              ))}
                            </div>

                            <span className="text-[11px] font-bold text-rose-200/80 flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-amber-400" /> {story.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* SINGLE PROMINENT SUNSET GLASS QUOTE BOX */}
                      <div className="bg-black/35 backdrop-blur-md border-l-4 border-amber-400 rounded-r-2xl p-5 border-t border-b border-r border-white/10 shadow-inner">
                        <p className="text-amber-100 font-extrabold italic text-sm sm:text-base leading-relaxed">
                          &ldquo;{story.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Impact Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 relative z-10">
                      {story.metrics.map((m) => (
                        <div key={m.label} className="bg-white/5 border border-white/15 rounded-xl p-2.5 text-center">
                          <p className="text-sm sm:text-base font-black text-amber-300">{m.value}</p>
                          <p className="text-[9px] font-bold text-rose-100/80 mt-0.5 leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COMMUNITY TRUST & SATISFACTION STRIP */}
          <div className="pt-6 border-t border-rose-500/20 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            {[
              { label: "Community Satisfaction Score", value: "4.96 / 5.0", detail: "Audited across 1,909 Villages" },
              { label: "Field Records Verified", value: "100%", detail: "Statutory & GIS Tagged" },
              { label: "Continuous Ground Service", value: "27 Years", detail: "Active Since 1999" },
              { label: "Direct Lives Impacted", value: "2.67 Lakh", detail: "Families Transformed" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-lg">
                <p className="text-xl sm:text-2xl font-black text-amber-300">{stat.value}</p>
                <p className="text-xs font-bold text-white mt-1">{stat.label}</p>
                <p className="text-[10px] text-rose-200/70 font-semibold mt-0.5">{stat.detail}</p>
              </div>
            ))}
          </div>

        </div>
      </section>





    </div>
  );
}
