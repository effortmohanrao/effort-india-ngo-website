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
  Quote
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
  { text: "Community Development" },
];

const heroCredibility: { icon: typeof ShieldCheck; label: string }[] = [
  { icon: ShieldCheck, label: "Registered Society (340/1999)" },
  { icon: TrendingUp, label: "98% Project Success Rate" },
  { icon: Calendar, label: "27 Years of Service" },
  { icon: Landmark, label: "Government Recognized" },
  { icon: Building2, label: "CSR Ready" },
];

type ComplianceStatus = "verified" | "pending" | "na";

const complianceCards: {
  icon: typeof Landmark;
  title: string;
  number: string;
  status: string;
  statusType: ComplianceStatus;
  cta: string;
}[] = [
  { icon: Landmark, title: "NGO Registration", number: "Society Reg. No. 340/1999", status: "Verified", statusType: "verified", cta: "View Certificate" },
  { icon: ShieldCheck, title: "80G Tax Exemption", number: "Certificate number pending", status: "To Be Confirmed", statusType: "pending", cta: "Learn More" },
  { icon: FileText, title: "12A Registration", number: "Registration number pending", status: "To Be Confirmed", statusType: "pending", cta: "Learn More" },
  { icon: Globe2, title: "FCRA Registration", number: "Not yet registered", status: "Not Applicable Yet", statusType: "na", cta: "Learn More" },
  { icon: Building2, title: "CSR-1 Registration", number: "Registration number pending", status: "To Be Confirmed", statusType: "pending", cta: "Learn More" },
  { icon: Fingerprint, title: "NGO Darpan ID", number: "Unique ID pending", status: "To Be Confirmed", statusType: "pending", cta: "Learn More" },
];

const complianceTrustStrip = [
  { icon: ShieldCheck, label: "Government Registered" },
  { icon: Building2, label: "CSR Ready" },
  { icon: Award, label: "Tax Exemption In Process" },
  { icon: Fingerprint, label: "Darpan Registration Pending" },
  { icon: Sparkles, label: "Transparent Governance" },
  { icon: Heart, label: "Ethical Operations" },
];

const impactStats: { target: number }[] = [
  { target: 120 }, // Villages Covered
  { target: 15000 }, // Lives Impacted (headline)
  { target: 45 }, // Projects Completed
  { target: 250 }, // Volunteers Engaged
  { target: 3 }, // Districts Reached
  { target: 27 }, // Years of Service
];

const processSteps: { step: string; title: string; desc: string; icon: typeof Search }[] = [
  { step: "01", title: "Community Assessment", desc: "Listening first — surveys and dialogue to understand the real need.", icon: Search },
  { step: "02", title: "Strategic Planning", desc: "Turning findings into a concrete plan with timelines and partners.", icon: ClipboardList },
  { step: "03", title: "Implementation", desc: "Field teams execute directly alongside the community.", icon: Rocket },
  { step: "04", title: "Monitoring", desc: "Tracking real outcomes, not assumptions.", icon: LineChart },
  { step: "05", title: "Sustainable Impact", desc: "Communities equipped to carry the progress forward on their own.", icon: Sprout },
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
    title: "Educational Institutions",
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
  { label: "Government Partners", value: "Coming Soon" },
  { label: "Institutional Partners", value: "Coming Soon" },
  { label: "CSR Projects", value: "Coming Soon" },
  { label: "States Reached", value: "1" },
];

const partnershipBadges: { label: string; icon: typeof ShieldCheck }[] = [
  { label: "Transparent Governance", icon: ShieldCheck },
  { label: "Verified NGO", icon: CheckCircle2 },
  { label: "CSR Ready", icon: Handshake },
  { label: "Government Compliant", icon: Landmark },
  { label: "Impact Driven", icon: TrendingUp },
  { label: "Sustainable Development", icon: Sprout },
];

const partnerLogoPlaceholders = ["Government Dept.", "CSR Partner", "University", "Foundation", "Development Agency", "Public Sector Org."];

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

const featuredStory = {
  name: "Savita Devi",
  age: 34,
  location: "Prakasam District, Andhra Pradesh",
  title: "Empowered Homemaker to Micro-Entrepreneur",
  quote:
    "I never imagined I'd run my own business. Effort India didn't just give me a loan — they gave me belief in myself.",
  heroImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200",
  beforeImage: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=800",
  afterImage: "https://images.unsplash.com/photo-1596496181848-3091d4878b24?auto=format&fit=crop&q=80&w=800",
  paragraph:
    "Savita joined our Self-Help Group training program with little more than a sewing machine and a dream. With a micro-grant and tailoring training, she now runs a small apparel boutique, employs two other women from her village, and pays for her daughters' high school education — a future she once thought was out of reach.",
};

const storyHighlights: { label: string; target: number; suffix: string }[] = [
  { label: "Lives Improved", target: 12, suffix: "+" },
  { label: "Income Growth", target: 3, suffix: "x" },
  { label: "Families Supported", target: 3, suffix: "" },
  { label: "Years of Impact", target: 2, suffix: "" },
];

const achievementBadges: { label: string; icon: typeof Users }[] = [
  { label: "Community Leadership", icon: Users },
  { label: "Women Empowerment", icon: Handshake },
  { label: "Education Success", icon: GraduationCap },
  { label: "Healthcare Access", icon: Heart },
  { label: "Livelihood Improvement", icon: TrendingUp },
  { label: "Sustainable Development", icon: Sprout },
];

export default function Home() {
  // States
  const [donationAmount, setDonationAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [currentStory, setCurrentStory] = useState(0);

  // Hero section states
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaMagnet, setCtaMagnet] = useState({ x: 0, y: 0 });
  const [ctaRipples, setCtaRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Trust & Compliance section states
  const [trustRef, trustVisible] = useScrollReveal<HTMLElement>();
  const [trustScore, setTrustScore] = useState(0);

  // Impact section states
  const [impactRef, impactVisible] = useScrollReveal<HTMLElement>();
  const [impactValues, setImpactValues] = useState(() => impactStats.map(() => 0));
  const [impactBounce, setImpactBounce] = useState(false);

  // How We Work section states
  const [howWeWorkRef, howWeWorkVisible] = useScrollReveal<HTMLElement>();

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

  // Featured Success Story section states
  const [storyRef, storyVisible] = useScrollReveal<HTMLElement>();
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [storyValues, setStoryValues] = useState(() => storyHighlights.map(() => 0));
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;
    const updatePos = (clientX: number) => {
      const rect = sliderContainerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.min(100, Math.max(0, pct)));
    };
    const handlePointerMove = (e: PointerEvent) => updatePos(e.clientX);
    const handlePointerUp = () => setIsDragging(false);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!storyVisible) return;
    const duration = 1600;
    const start = performance.now();
    let rafId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setStoryValues(storyHighlights.map((s) => s.target * eased));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [storyVisible]);

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
    if (!impactVisible) return;
    const duration = 2500;
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
        setTimeout(() => setImpactBounce(false), 450);
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

  // Dummy success stories
  const successStories = [
    {
      id: 1,
      name: "Ramesh Kumar",
      age: 12,
      location: "Rural Rajasthan",
      title: "From Brick Kiln to School Classroom",
      story: "Ramesh used to work at a local brick kiln to help feed his family. Through Effort India's 'Shiksha Mission', he was rescued, enrolled in a bridging school, and is now thriving in 6th grade, dreaming of becoming a science teacher.",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800",
      pill: "Education"
    },
    {
      id: 2,
      name: "Savita Devi",
      age: 34,
      location: "Ganjam, Odisha",
      title: "Empowered Homemaker to Micro-Entrepreneur",
      story: "Savita joined our Self-Help Group (SHG) training program. Armed with a micro-grant and tailoring training, she now runs a small apparel boutique, employs two other women, and pays for her daughters' high school education.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      pill: "Livelihood"
    },
    {
      id: 3,
      name: "Karan G.",
      age: 8,
      location: "Urban Slum, Mumbai",
      title: "Defeating Severe Acute Malnutrition",
      story: "Karan was diagnosed with severe malnutrition during our community health check-up. With 6 months of specialized nutritional intervention and medical care, he has gained healthy weight and is full of infectious energy.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      pill: "Healthcare"
    }
  ];

  // Campaign items
  const campaigns = [
    {
      id: "edu",
      title: "Educate 1,000 Rural Girls",
      desc: "Provide school supplies, tuition support, and transport fee for girls in tribal belts of Central India.",
      raised: "₹18,50,000",
      goal: "₹25,00,000",
      percent: 74,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
      tag: "Education"
    },
    {
      id: "health",
      title: "Mobile Medical Vans",
      desc: "Deliver primary healthcare, medicines, and prenatal diagnostic tests to remote Himalayan villages.",
      raised: "₹32,10,000",
      goal: "₹40,00,000",
      percent: 80,
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
      tag: "Healthcare"
    },
    {
      id: "live",
      title: "Youth Skilling & Job Placement",
      desc: "Empower unemployed youth with digital skills, coding, and vocational training with assured jobs.",
      raised: "₹12,00,000",
      goal: "₹20,00,000",
      percent: 60,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      tag: "Livelihood"
    }
  ];

  const handleNextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const handlePrevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-sky-50/60 py-20 lg:py-28">
        {/* Soft mesh background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-[5%] w-[420px] h-[420px] bg-emerald-200/40 rounded-full blur-[110px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 right-[-8%] w-[380px] h-[380px] bg-sky-200/40 rounded-full blur-[110px] animate-liquid-drift-b" />
          <div className="absolute bottom-[-12%] left-[28%] w-[320px] h-[320px] bg-amber-100/50 rounded-full blur-[100px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:26px_26px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-10 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-7">

            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-bold uppercase tracking-wider transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Together We Create Lasting Impact
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-slate-900">
              {heroLines.map((line, i) => (
                <span key={line.text} className="block overflow-hidden py-0.5">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      line.accent ? "bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent" : ""
                    } ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[110%]"}`}
                    style={{ transitionDelay: `${150 + i * 140}ms` }}
                  >
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className={`text-slate-600 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "550ms" }}
            >
              Empowering individuals, strengthening communities, and creating long-term social impact through education, healthcare, livelihood support, environmental sustainability, and inclusive development programs.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
                className="group px-8 py-4 rounded-full bg-transparent hover:bg-emerald-50/80 backdrop-blur-md border border-emerald-300/60 hover:border-emerald-400 text-emerald-700 font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Play className="w-4 h-4 fill-emerald-600 text-emerald-600 group-hover:rotate-12 transition-transform duration-300" />
                Become a Volunteer
              </Link>
            </div>

            {/* Credibility strip (replaces duplicate stat boxes now shown in the Impact section) */}
            <div
              className={`flex flex-wrap gap-3 pt-4 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "850ms" }}
            >
              {heroCredibility.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/70 rounded-full pl-2 pr-4 py-2 shadow-[0_8px_24px_-14px_rgba(6,95,70,0.35)]"
                >
                  <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <item.icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{item.label}</span>
                </span>
              ))}
            </div>

          </div>

          {/* Hero Right Visual Area (intentionally empty) */}
          <div className="lg:col-span-5" />

        </div>
      </section>

      {/* --- IMPACT SECTION (dark editorial) --- */}
      <section ref={impactRef} className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-950 py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px]" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
              impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-amber-300/20 text-amber-200 text-xs font-bold uppercase tracking-wider">
              Our Reach
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Impact That Speaks in Numbers
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Every figure below reflects real work on the ground — communities reached, projects delivered, and years of consistent, on-the-record service.
            </p>
          </div>

          {/* Giant headline stat */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              impactVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <p
              className={`text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight bg-gradient-to-b from-white to-emerald-200 bg-clip-text text-transparent ${
                impactBounce ? "animate-count-bounce" : ""
              }`}
            >
              {Math.round(impactValues[1]).toLocaleString("en-IN")}+
            </p>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="h-px w-8 bg-amber-300/40" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-200">Lives Impacted</p>
              <span className="h-px w-8 bg-amber-300/40" />
            </div>
          </div>

          {/* Editorial stat ledger */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-5 divide-x divide-y lg:divide-y-0 divide-white/10 border-y border-white/10 transition-all duration-700 ${
              impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {[
              { i: 0, label: "Villages Covered", desc: "Program areas reached" },
              { i: 2, label: "Projects Completed", desc: "Delivered end-to-end" },
              { i: 3, label: "Volunteers Engaged", desc: "Time and skills contributed" },
              { i: 4, label: "Districts Reached", desc: "Across Andhra Pradesh" },
              { i: 5, label: "Years of Service", desc: "Since our 1999 founding" },
            ].map((stat) => (
              <div key={stat.label} className="group px-4 py-8 lg:py-10 text-center hover:bg-white/[0.03] transition-colors duration-300">
                <p
                  className={`text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-200 transition-colors duration-300 ${
                    impactBounce ? "animate-count-bounce" : ""
                  }`}
                >
                  {Math.round(impactValues[stat.i]).toLocaleString("en-IN")}+
                </p>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-300 mt-2">{stat.label}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-14 transition-all duration-700 ${
              impactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-amber-300/30 text-amber-100 font-bold text-sm hover:bg-amber-300/10 hover:border-amber-300/50 hover:-translate-y-0.5 transition-all"
            >
              View Full Impact Report <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST & COMPLIANCE SECTION --- */}
      <section ref={trustRef} className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white py-20 lg:py-28">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[8%] left-[-8%] w-[380px] h-[380px] bg-emerald-100/50 rounded-full blur-[110px] animate-liquid-drift-a" />
          <div className="absolute bottom-[5%] right-[-6%] w-[340px] h-[340px] bg-sky-100/50 rounded-full blur-[110px] animate-liquid-drift-b" />
          <div className="absolute top-[38%] right-[12%] w-[220px] h-[220px] bg-amber-50/60 rounded-full blur-[90px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute top-16 right-[8%] w-32 h-32 rounded-full border-2 border-dashed border-emerald-200/70" />
          <div className="absolute bottom-24 left-[6%] w-24 h-24 rounded-full border-2 border-dashed border-sky-200/70" />
        </div>

        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <div
            className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
              trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified &bull; Government Recognized
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Built on Transparency, Backed by Compliance
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our commitment to transparency is reflected through nationally recognized registrations, regulatory compliance, financial accountability, and responsible governance, giving every stakeholder complete confidence in partnering with us.
            </p>
          </div>

          {/* Bento grid: feature card + compliance cards */}
          <div className="grid lg:grid-cols-12 gap-6">

            {/* Feature card (~40%) */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${
                trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="h-full bg-white/70 backdrop-blur-[22px] border border-white/70 rounded-3xl shadow-[0_20px_60px_-20px_rgba(6,95,70,0.25)] p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-500">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Trust &amp; Compliance Center</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our organization follows the highest standards of legal compliance, ethical governance, financial transparency, and public accountability.
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-white/60 shadow-md">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-light-sweep" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
                    alt="Official registration documents"
                    className="w-full h-40 object-cover"
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                  <div>
                    <p className="text-2xl font-extrabold text-emerald-700">{Math.round(trustScore)}% Compliance</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 uppercase tracking-wide mt-1">
                      <ShieldCheck className="w-3.5 h-3.5 animate-pulse" /> Government Registered
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link
                    href="/transparency"
                    className="flex-1 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    View All Certifications <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="#"
                    className="flex-1 px-5 py-3 rounded-full bg-white/70 border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-emerald-700 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" /> Compliance Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Compliance cards (6, staggered bento) */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-5">
              {complianceCards.map((card, i) => (
                <div
                  key={card.title}
                  className={`bg-white/70 backdrop-blur-xl border border-white/70 rounded-2xl p-5 shadow-[0_10px_30px_-16px_rgba(6,95,70,0.3)] hover:shadow-[0_20px_40px_-16px_rgba(6,95,70,0.35)] hover:-translate-y-2.5 transition-all duration-500 group ${
                    trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  } ${i >= 3 ? "sm:mt-6" : ""}`}
                  style={{ transitionDelay: `${150 + i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform duration-300">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{card.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{card.number}</p>
                  <span
                    className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                      card.statusType === "verified"
                        ? "bg-emerald-100 text-emerald-700"
                        : card.statusType === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {card.status}
                  </span>
                  <Link href="/transparency" className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700">
                    {card.cta} <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust strip */}
          <div
            className={`mt-14 bg-white/80 backdrop-blur-xl border border-white/70 rounded-2xl shadow-lg px-6 py-5 flex flex-wrap justify-center gap-x-8 gap-y-3 transition-all duration-700 ${
              trustVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {complianceTrustStrip.map((item) => (
              <span key={item.label} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                <item.icon className="w-4 h-4 text-emerald-600" /> {item.label}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* --- HOW WE WORK SECTION --- */}
      <section ref={howWeWorkRef} className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-violet-900 to-fuchsia-900 py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[5%] w-[420px] h-[420px] bg-violet-500/20 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] bg-fuchsia-500/15 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-cyan-400/10 rounded-full blur-[120px] animate-liquid-drift-c" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
              howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-fuchsia-200 text-xs font-bold uppercase tracking-wider">
              ⚙ How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              A Simple, Proven Process
            </h2>
            <p className="text-indigo-100/70 text-base sm:text-lg leading-relaxed">
              From identifying a real community need to sustaining lasting change — every project follows the same disciplined path.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <div
                  className={`group h-full bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)] hover:bg-white/15 hover:-translate-y-2 transition-all duration-500 ${
                    howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-black text-fuchsia-300 uppercase tracking-widest">Step {s.step}</p>
                  <h3 className="text-lg font-black text-white mt-1">{s.title}</h3>
                  <p className="text-sm text-indigo-100/70 mt-2 leading-relaxed">{s.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className={`text-center mt-14 transition-all duration-700 ${
              howWeWorkVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-sm shadow-[0_15px_40px_-10px_rgba(0,0,0,0.4)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Discover Our Methodology <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- GOVERNMENT & INSTITUTIONAL PARTNERSHIPS SECTION --- */}
      <section ref={partnershipRef} className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[150px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-20%] left-[5%] w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left: content, stats, CTAs */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${
                partnershipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-cyan-300/20 text-cyan-200 text-xs font-bold uppercase tracking-wider">
                🏛 Government &amp; Institutional Partnerships
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-4">
                Building Strong Partnerships For Sustainable Development
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-4">
                We collaborate with governments, institutions, CSR partners, foundations, and development organizations to deliver transparent, scalable, and measurable social impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {partnershipStats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                    <p className={`font-black ${stat.value === "Coming Soon" ? "text-sm text-slate-400" : "text-2xl text-white"}`}>{stat.value}</p>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/csr"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  Become A Partner <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-slate-200 font-bold text-sm hover:border-cyan-300/40 hover:text-white transition-all"
                >
                  <Download className="w-4 h-4" /> Download Partnership Profile
                </a>
              </div>
            </div>

            {/* Right: carousel + trust badges */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                partnershipVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Floating trust badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {partnershipBadges.map((badge, i) => (
                  <span
                    key={badge.label}
                    className="animate-card-float inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/15 text-[11px] font-bold text-slate-300 hover:text-cyan-200 hover:border-cyan-300/30 transition-colors"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    <badge.icon className="w-3 h-3 text-cyan-300" /> {badge.label}
                  </span>
                ))}
              </div>

              {/* Liquid glass carousel */}
              <div
                className="group relative bg-white/[0.06] backdrop-blur-[32px] border border-white/15 rounded-[34px] p-6 sm:p-8 animate-breathing-shadow overflow-hidden"
                onMouseEnter={() => setCarouselPaused(true)}
                onMouseLeave={() => setCarouselPaused(false)}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-light-sweep" />
                </div>

                {(() => {
                  const slide = partnershipSlides[activeSlide];
                  const SlideIcon = slide.icon;
                  return (
                    <div key={activeSlide} className="animate-fade-in relative z-10">
                      <div className="grid sm:grid-cols-2 gap-6 items-center">
                        <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56 border border-white/10">
                          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                        </div>
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-300/20 flex items-center justify-center mb-4">
                            <SlideIcon className="w-6 h-6 text-cyan-300" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-black text-white">{slide.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed mt-2">{slide.desc}</p>
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
                      className={`h-1.5 rounded-full transition-all ${i === activeSlide ? "w-6 bg-cyan-300" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Infinite partner logo marquee */}
          <div
            className={`mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] transition-all duration-700 ${
              partnershipVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex w-max gap-4 animate-marquee">
              {[...partnerLogoPlaceholders, ...partnerLogoPlaceholders].map((logo, i) => (
                <span
                  key={i}
                  className="shrink-0 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-500"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CSR PARTNERSHIP MODEL SECTION --- */}
      <section ref={csrRef} className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-15%] right-[5%] w-[460px] h-[460px] bg-cyan-200/30 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-15%] left-[5%] w-[400px] h-[400px] bg-indigo-200/25 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute top-[40%] left-[45%] w-[280px] h-[280px] bg-amber-100/25 rounded-full blur-[120px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0369a1_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left: content */}
            <div
              className={`lg:col-span-5 transition-all duration-700 ${
                csrVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                🤝 CSR Partnership Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 mt-4">
                Transform Corporate Responsibility Into Measurable Social Impact
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                Partner with us to implement transparent, scalable, and measurable CSR initiatives that create lasting change while strengthening your organization&apos;s social responsibility.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["100% Transparent Reporting", "Quarterly Impact Reports", "Dedicated Project Team"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-100 text-xs font-bold text-slate-600"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" /> {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/csr"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(14,165,233,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  Partner With Us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-200 text-slate-700 font-bold text-sm hover:border-sky-400 hover:text-sky-700 transition-all"
                >
                  <Download className="w-4 h-4" /> Download CSR Brochure
                </a>
              </div>
            </div>

            {/* Right: process slider + dashboard preview */}
            <div
              className={`lg:col-span-7 transition-all duration-1000 ${
                csrVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Process slider */}
              <div
                className="group relative bg-white/70 backdrop-blur-[30px] border border-white/70 rounded-[32px] p-6 animate-breathing-shadow overflow-hidden"
                onMouseEnter={() => setCsrPaused(true)}
                onMouseLeave={() => setCsrPaused(false)}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-light-sweep" />
                </div>

                {(() => {
                  const slide = csrSlides[activeCsrSlide];
                  const SlideIcon = slide.icon;
                  return (
                    <div key={activeCsrSlide} className="animate-fade-in relative z-10">
                      <div className="grid sm:grid-cols-2 gap-5 items-center">
                        <div className="relative rounded-2xl overflow-hidden h-40 sm:h-44 border border-white/60">
                          <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                          <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-widest text-white/90 bg-black/30 px-2 py-1 rounded-full">
                            Step {slide.step}
                          </span>
                        </div>
                        <div>
                          <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-3">
                            <SlideIcon className="w-5 h-5 text-sky-600" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-black text-slate-900">{slide.title}</h3>
                          <p className="text-sm text-slate-600 leading-relaxed mt-2">{slide.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="relative z-10 flex justify-center gap-2 mt-5">
                  {csrSlides.map((s, i) => (
                    <button
                      key={s.title}
                      onClick={() => setActiveCsrSlide(i)}
                      aria-label={`Show ${s.title}`}
                      className={`h-1.5 rounded-full transition-all ${i === activeCsrSlide ? "w-6 bg-sky-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Live dashboard preview */}
              <div className="mt-5 bg-white/70 backdrop-blur-[30px] border border-white/70 rounded-[28px] p-6 shadow-[0_15px_40px_-20px_rgba(14,165,233,0.3)]">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs font-black uppercase tracking-wider text-slate-500">Sample Partner Dashboard</p>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
                    Illustrative Preview
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Projects Running", value: "6" },
                    { label: "Communities Reached", value: "18" },
                    { label: "Funds Utilized", value: "72%" },
                    { label: "Reports Submitted", value: "12" },
                  ].map((w) => (
                    <div key={w.label} className="bg-sky-50/60 rounded-xl p-3">
                      <p className="text-lg font-black text-slate-900">{w.value}</p>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500 mt-0.5 leading-tight">{w.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-5">
                  {/* Progress ring */}
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 100 100" className="w-20 h-20 -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#e2e8f0" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#csrRingGrad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 42}
                        strokeDashoffset={2 * Math.PI * 42 * (1 - csrRingProgress / 100)}
                      />
                      <defs>
                        <linearGradient id="csrRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-black text-slate-900">{Math.round(csrRingProgress)}%</span>
                    </div>
                  </div>

                  {/* Mini bar chart */}
                  <div className="flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500 mb-2">Fund Utilization Trend</p>
                    <div className="flex items-end gap-1.5 h-12">
                      {[40, 55, 45, 70, 60, 85, 72].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-sky-400 to-cyan-300 transition-all duration-700"
                          style={{ height: csrVisible ? `${h}%` : "0%", transitionDelay: `${i * 60}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CSR Advantage Strip */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-12 transition-all duration-700 ${
              csrVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {csrAdvantageChips.map((chip) => (
              <div
                key={chip.label}
                className="p-[1.5px] rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 hover:shadow-[0_0_20px_-4px_rgba(14,165,233,0.5)] transition-shadow"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-colors">
                  <chip.icon className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-700">{chip.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED SUCCESS STORY SECTION --- */}
      <section ref={storyRef} className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-15%] left-[10%] w-[440px] h-[440px] bg-amber-200/25 rounded-full blur-[150px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-15%] right-[5%] w-[420px] h-[420px] bg-rose-200/25 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="bg-noise absolute inset-0" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-2xl mx-auto mb-14 space-y-4 transition-all duration-700 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              ✨ Featured Success Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              One Story That Changed Everything
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Behind every successful project is a powerful human story. Discover how sustainable support transformed lives, strengthened communities, and created hope for future generations.
            </p>
          </div>

          {/* Top row: heading/text/CTA + hero image */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <div
              className={`transition-all duration-700 ${
                storyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-xs font-black uppercase tracking-widest text-amber-600">{featuredStory.location}</p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 leading-tight">{featuredStory.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4">{featuredStory.paragraph}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="#more-stories"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  Read Full Story <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="#more-stories"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-amber-200 text-slate-700 font-bold text-sm hover:border-amber-400 hover:text-amber-700 transition-all"
                >
                  Explore More Stories <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div
              className={`relative rounded-[32px] overflow-hidden h-64 sm:h-80 border border-white/60 shadow-[0_25px_60px_-20px_rgba(217,119,6,0.3)] group transition-all duration-1000 ${
                storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <img
                src={featuredStory.heroImage}
                alt={featuredStory.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Bottom row: before/after slider + quote/stats/badges */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">

            {/* Before & After comparison slider */}
            <div
              className={`transition-all duration-700 ${
                storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div
                ref={sliderContainerRef}
                className="relative rounded-[28px] overflow-hidden h-72 sm:h-80 border border-white/60 shadow-[0_20px_50px_-20px_rgba(217,119,6,0.3)] select-none cursor-ew-resize"
                onClick={(e) => {
                  const rect = sliderContainerRef.current?.getBoundingClientRect();
                  if (!rect) return;
                  setSliderPos(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
                }}
              >
                <img src={featuredStory.afterImage} alt="After" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                  After
                </span>

                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
                  <img src={featuredStory.beforeImage} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    Before
                  </span>
                </div>

                <div
                  className="absolute inset-y-0 z-20 w-1 bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
                >
                  <div
                    onPointerDown={(e) => {
                      e.stopPropagation();
                      setIsDragging(true);
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-white flex items-center justify-center cursor-ew-resize"
                  >
                    <ChevronLeft className="w-3.5 h-3.5 text-slate-600 -mr-1" />
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 -ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating quote + impact stats + achievement badges */}
            <div
              className={`space-y-6 transition-all duration-700 ${
                storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              {/* Floating quote card */}
              <div className="bg-white/70 backdrop-blur-[30px] border border-white/70 rounded-[28px] p-6 animate-breathing-shadow">
                <Quote className="w-7 h-7 text-amber-400" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mt-3">&ldquo;{featuredStory.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={featuredStory.heroImage} alt={featuredStory.name} className="w-10 h-10 rounded-full object-cover border border-white/80" />
                  <div>
                    <p className="text-sm font-bold text-slate-900">{featuredStory.name}</p>
                    <p className="text-xs text-slate-500">{featuredStory.location}</p>
                  </div>
                </div>
              </div>

              {/* Impact highlights */}
              <div className="grid grid-cols-2 gap-3">
                {storyHighlights.map((stat, i) => (
                  <div key={stat.label} className="bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-4">
                    <p className="text-2xl font-black text-amber-700">
                      {Math.round(storyValues[i])}
                      {stat.suffix}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Achievement badges */}
              <div className="flex flex-wrap gap-2">
                {achievementBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className="p-[1.5px] rounded-full bg-gradient-to-r from-amber-300 via-rose-300 to-orange-300 hover:shadow-[0_0_16px_-4px_rgba(245,158,11,0.5)] transition-shadow"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md hover:bg-white hover:-rotate-1 transition-all">
                      <badge.icon className="w-3.5 h-3.5 text-amber-600" />
                      <span className="text-[11px] font-bold text-slate-700">{badge.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DYNAMIC CAMPAIGNS & DONATION SECTION --- */}
      <section id="donate-section" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Glow behind section */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Campaigns list on left (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-4">
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Active donation drives</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Support Our Immediate Campaigns
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"></div>
                <p className="text-slate-450 text-base max-w-2xl">
                  Choose a cause closest to your heart. Every single rupee donated contributes directly to the project costs and ground implementation reports.
                </p>
              </div>

              {/* Campaigns list layout */}
              <div className="space-y-6">
                {campaigns.map((camp) => (
                  <div key={camp.id} className="bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/40 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center transition-all duration-300 group">
                    <img 
                      src={camp.image} 
                      alt={camp.title} 
                      className="w-full sm:w-32 h-28 object-cover rounded-xl shrink-0" 
                    />
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          {camp.tag}
                        </span>
                        <span className="text-xs text-slate-450 font-bold uppercase">{camp.percent}% Funded</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{camp.title}</h4>
                      <p className="text-xs text-slate-400">{camp.desc}</p>
                      
                      {/* Bar indicator */}
                      <div className="pt-2 space-y-1">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full" style={{ width: `${camp.percent}%` }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Raised: <strong className="text-white font-medium">{camp.raised}</strong></span>
                          <span>Goal: {camp.goal}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Donation Quick calculator on right (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-slate-900 border border-white/20 shadow-2xl relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-amber-500 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md">
                  Tax Saver
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Custom Donation</h3>
                    <p className="text-xs text-slate-500">Provide direct assistance. Save taxes instantly with 80G receipts.</p>
                  </div>

                  {/* Frequency Toggle */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl text-center text-sm font-semibold text-slate-600">
                    <button className="bg-white text-emerald-700 rounded-lg py-2 shadow-sm">One-Time</button>
                    <button className="hover:text-slate-800 transition-colors py-2">Monthly Support</button>
                  </div>

                  {/* Preset amounts */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1500, 2500, 5000].map((amt) => (
                      <button 
                        key={amt}
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3.5 rounded-xl border-2 text-center font-bold text-sm transition-all ${
                          donationAmount === amt && !customAmount
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                            : "border-slate-200 hover:border-slate-350 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom input box */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input 
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount(Number(e.target.value));
                      }}
                      className="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden font-bold text-slate-800"
                    />
                  </div>

                  {/* What does it feed? */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex gap-3 items-start">
                    <Heart className="w-5 h-5 text-emerald-650 shrink-0 mt-0.5 fill-emerald-100" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your contribution of <strong>₹{donationAmount || "0"}</strong> will support{" "}
                      <strong>
                        {donationAmount <= 1500 && "1 child's school textbook & kits."}
                        {donationAmount > 1500 && donationAmount <= 4999 && "a girl child's tuition fees and mid-day nutrition for 3 months."}
                        {donationAmount >= 5000 && "an entire family's critical healthcare diagnostics and medicine supply for half a year."}
                      </strong>
                    </p>
                  </div>

                  {/* Action Proceed */}
                  <button className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200 cursor-pointer">
                    Proceed to Donate
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> PCI-DSS Secure</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 80G Certificate Instantly</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- DYNAMIC SUCCESS STORIES TESTIMONIAL --- */}
      <section id="more-stories" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Soft background liquid gradient */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-amber-100/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Content left (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Stories of change</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Work in Action: Real Stories
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full"></div>
              
              {/* Active Story Card details */}
              <div className="space-y-4 pt-4">
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  {successStories[currentStory].pill} Success Story
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {successStories[currentStory].title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed italic">
                  "{successStories[currentStory].story}"
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <h5 className="text-base font-bold text-slate-900">{successStories[currentStory].name}</h5>
                  <p className="text-xs text-slate-500">Age: {successStories[currentStory].age} | {successStories[currentStory].location}</p>
                </div>
              </div>

              {/* Sliders navigation buttons */}
              <div className="flex items-center gap-3 pt-6">
                <button 
                  onClick={handlePrevStory}
                  className="p-3.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-650 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNextStory}
                  className="p-3.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-650 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Media right (6 cols) */}
            <div className="lg:col-span-6 relative">
              {/* Decorative block */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-50 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-amber-50/80 rounded-3xl -z-10"></div>
              
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 relative">
                <img 
                  src={successStories[currentStory].image} 
                  alt={successStories[currentStory].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- CORPORATE & CSR PARTNERS SECTION --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Proudly Supported by Corporate Partners & CSR Teams</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {/* Dummy Corporate Logos */}
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">CORP-GLOBAL</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">APEX INDUSTRIES</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">NEXUS CAP</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">STEEL-MET</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">VERTEX ORG</div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & NEWSLETTER CTA --- */}
      <section className="py-20 lg:py-28 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        {/* Glowing liquid backdrop blob */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-bold text-emerald-450 uppercase tracking-widest font-mono">Join our mailing list</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get Ground Action Reports in Your Inbox
            </h2>
            <p className="text-emerald-100 text-base max-w-xl font-normal leading-relaxed">
              Sign up for our quarterly newsletter. Read about field intervention audits, direct financial reports, and heartening success stories.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input 
                type="email" 
                placeholder="Enter your personal/work email" 
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 focus:border-emerald-400 focus:outline-hidden text-white placeholder-slate-405 flex-1 font-medium"
                required
              />
              <button className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold transition-all shadow-md hover:bg-emerald-700 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-8 border border-white/10 space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              Visit Our Head Office
            </h4>
            <div className="space-y-4 text-sm text-emerald-100">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>321, Progressive Towers, Outer Ring Road, Bengaluru, Karnataka - 560103</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>info@effortindiango.org</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>+91 98765 43210 (Mon - Sat, 9 AM - 6 PM)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
