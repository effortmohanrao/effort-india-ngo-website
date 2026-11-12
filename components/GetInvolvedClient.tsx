"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Heart,
  CheckCircle2,
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  Globe,
  ShieldCheck,
  Award,
  Send,
  HelpCircle,
  ChevronDown,
  Handshake,
  Bike,
  Droplets,
  Sprout,
  BookOpen,
  UserCheck,
  FileText,
  Building,
  Search,
  Hammer,
  ClipboardCheck,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

type Pathway = "volunteer" | "mou" | "giving" | "csr";

/* ---------------- content (unchanged from the original page) ---------------- */

const availableSkills = [
  "Field Teaching & Literacy",
  "Medical Camp Support",
  "Organic Farming Demos",
  "Digital Media & Storytelling",
  "Tree Plantation Drives",
  "Girl Education Campaigns",
  "Community Surveys & Research",
  "Event Management & Logistics",
];

// Possible Collaboration — real EFFORT collaboration packages, as published to funding partners
const csrSponsorOptions = [
  {
    title: "Land & Water Conservation",
    desc: "Convert farmland into productive land by adopting soil, water and vegetative conservation measures with sustainable agricultural practices. Minimum project size is 50 hectares (US $11,250 • 1 year • 50 farmers benefited); maximum is 1,000 hectares (US $2,25,000 • 3 years • 800–1,000 farmers benefited).",
    budget: "US $225 / Hectare",
    badge: "Sustainable Agriculture",
  },
  {
    title: "SMART — Sustainable Management of Agriculture for Rural Transformation",
    desc: "Minimum project size is 20–100 farmers in a village over 1 year. Maximum is 100–3,000 farmers over 3 years.",
    budget: "US $75 / Farmer",
    badge: "SMART Agriculture",
  },
  {
    title: "Reverse Osmosis Plant for Safe Drinking Water",
    desc: "Provides safe drinking water to around 1,000 families (5,000 people) in a fluoride-affected village. Total project cost is US $7,000 — the village community mobilizes US $1,000 and donors fund the remaining US $6,000.",
    budget: "US $6,000 / Village",
    badge: "Water & WASH",
  },
  {
    title: "Healthy & Child Friendly Schools",
    desc: "Facilitates the amenities needed to ensure school education for all children. Total project cost is US $10,000 — the village community mobilizes US $1,000 and donors fund the remaining US $9,000.",
    budget: "US $9,000 / School",
    badge: "Child Education",
  },
  {
    title: "Child Sponsorship",
    desc: "Gives a needy or deserving child the opportunity to continue their education. Sponsorship covers education, food and clothing for one child for one year.",
    budget: "US $500 / Child / Year",
    badge: "Child Welfare",
  },
];

const impactProjects = [
  {
    title: "Sponsor Bicycles for 5 Girl Students",
    icon: Bike,
    cost: "1,000 Girls Impacted",
    desc: "Prevents dropouts by enabling high school girls in Prakasam district to safely travel to distant secondary schools.",
    badge: "Child Education",
  },
  {
    title: "Adopt a Village RO Clean Water Unit",
    icon: Droplets,
    cost: "16,000 Families Served",
    desc: "Establishes a community Reverse Osmosis (RO) water purification plant in fluoride-affected rural habitations.",
    badge: "Health & Safe WASH",
  },
  {
    title: "Fund Vermicompost Unit for Women SHGs",
    icon: Sprout,
    cost: "1,275 SHGs Supported",
    desc: "Provides bio-fertilizer production kits and micro-enterprise training for SC/ST women self-help groups.",
    badge: "Women Livelihoods",
  },
  {
    title: "Equip a Child Labour Special School",
    icon: BookOpen,
    cost: "2,011 Children Rehabilitated",
    desc: "Provides books, learning kits, nutritional meals, and amenities for former child labourers across 21 villages.",
    badge: "Child Welfare",
  },
];

const mouCategories = [
  {
    type: "Academic & University MoUs",
    partner: "TISS, Universities & Research Institutes",
    scope: "Rural development field immersions, student internships, baseline socio-economic surveys, and joint academic publications.",
    icon: GraduationCap,
  },
  {
    type: "Government Department MoUs",
    partner: "Dept of Agriculture AP, DWMA & APSIDC",
    scope: "Turnkey execution of Watershed Development Projects, IFAD Drought Mitigation, and AP Livestock Resource Centers.",
    icon: Landmark,
  },
  {
    type: "International & Development MoUs",
    partner: "IFAD, GIZ Germany & Fairtrade Int.",
    scope: "Climate-resilient agriculture, Direct Seeded Rice (DSR) expansion, and smallholder coffee & spice value chain development.",
    icon: Globe,
  },
];

const partners = [
  { name: "NABARD", sub: "National Bank for Agriculture" },
  { name: "Spices Board", sub: "Ministry of Commerce, Govt of India" },
  { name: "IFAD", sub: "International Fund for Ag Dev." },
  { name: "Bayer CropScience", sub: "CSR Partner" },
  { name: "Syngenta India", sub: "CSR Partner" },
  { name: "Corteva Agriscience", sub: "CSR Partner" },
  { name: "GIZ Germany", sub: "International Agency" },
  { name: "Azim Premji Foundation", sub: "Development Partner" },
  { name: "Reliance Foundation", sub: "CSR Funder" },
  { name: "TISS", sub: "Tata Institute of Social Sciences" },
];

const faqs = [
  {
    q: "What is EFFORT NGO's MCA Form CSR-1 Registration number?",
    a: "EFFORT NGO is registered with the Ministry of Corporate Affairs (MCA) for executing corporate CSR projects under Registration ID: CSR00034988. All CSR contributions qualify under Schedule VII of the Companies Act.",
  },
  {
    q: "Are corporate CSR contributions 80G tax-exempt?",
    a: "Yes! EFFORT NGO holds active 80G tax exemption approval, Section 12AB registration, and FCRA registration. Corporate and individual contributions qualify for 50% tax deduction under Section 80G.",
  },
  {
    q: "How can an institution or university sign an MoU with EFFORT NGO?",
    a: "We welcome formal MoUs with universities, government departments, and development institutes. Select 'Sign an MoU / Institutional Alliance' in the form below, and our leadership team will initiate formal discussions and MoU drafting.",
  },
  {
    q: "Does EFFORT NGO provide third-party CSR impact evaluation reports?",
    a: "Yes. We deliver comprehensive quarterly baseline reports, milestone budget tracking, Form CSR-1 project completion certificates, and third-party impact audits for all corporate partners.",
  },
];

const gateways: { id: Pathway; icon: typeof Users; kicker: string; title: string; desc: string; tab: string }[] = [
  { id: "csr", icon: Building2, kicker: "Corporate", title: "Corporate CSR Hub", desc: "Turnkey Schedule VII CSR execution with Form CSR-1.", tab: "Corporate CSR Command Center" },
  { id: "mou", icon: Handshake, kicker: "Institutional", title: "Sign an MoU / Alliance", desc: "For Govt Depts, Universities & International Bodies.", tab: "MoU & Strategic Alliances" },
  { id: "volunteer", icon: Users, kicker: "Individual", title: "Grassroots Volunteer", desc: "Join teaching, medical, and organic farming field drives.", tab: "Grassroots Volunteer Force" },
  { id: "giving", icon: Heart, kicker: "Impact Funder", title: "Adopt an Impact Project", desc: "Sponsor girl student bikes, RO plants & SHG units (80G).", tab: "Adopt an Impact Cause (80G)" },
];

const heroStats = [
  { value: "2.67 Lakh", label: "Families Empowered" },
  { value: "10 States", label: "Field Operations" },
  { value: "27 Years", label: "Ground Legacy" },
];

const credentials = [
  { icon: ShieldCheck, title: "MCA Form CSR-1 Approved", desc: "Registered with Ministry of Corporate Affairs for turnkey CSR operations in India.", tag: "Registration ID: CSR00034988" },
  { icon: Award, title: "Section 80G & 12AB Verified", desc: "50% tax exemption under Section 80G for all corporate contributions.", tag: "CIT (Exempt) Certified" },
  { icon: FileText, title: "Impact Evaluation Audits", desc: "We deliver quarterly baseline surveys, milestone reports & third-party audits.", tag: "Schedule VII Audited" },
];

const phases = [
  { icon: Search, step: "Phase 1: Baseline Survey", title: "Needs Assessment", desc: "Rigorous ground surveys across Prakasam, Guntur, and Kurnool habitations to define exact KPI targets." },
  { icon: Hammer, step: "Phase 2: Field Execution", title: "Ground Operations", desc: "Direct implementation with 27-year veteran field teams, co-branded launches & employee volunteer days." },
  { icon: ClipboardCheck, step: "Phase 3: Impact Audit", title: "Reporting & Audits", desc: "Milestone-based budget reporting, MCA Form CSR-1 completion certificates, and ESG compliance files." },
];

const volunteerSteps = [
  { title: "Submit Profile", desc: "Select skills & location" },
  { title: "Field Hub Match", desc: "Connect with State Coordinator" },
  { title: "30-Min Orientation", desc: "Learn ethics & ground protocol" },
  { title: "Ground Action", desc: "Field service & certificate" },
];

const complianceChips = [
  "Society Reg 340/1999",
  "80G Tax Exempt",
  "Section 12AB Approved",
  "FCRA Registered",
  "NITI Aayog Darpan ID",
  "MCA Form CSR-1 (CSR00034988)",
  "TISS Empaneled",
];

/* ---------------- shared styles ---------------- */

const goldBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)] hover:-translate-y-0.5 transition-transform";
const greenBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold shadow-[0_12px_26px_-12px_rgba(6,38,25,0.8)] hover:-translate-y-0.5 transition-transform";
const eyebrowLight =
  "inline-flex items-center gap-2 rounded-full border border-[#e3cf94] bg-[#f8f1df] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#7a5a12]";
const field =
  "w-full px-4 py-3.5 rounded-2xl bg-[#fbf8f0] border-2 border-[#ece0c0] text-base sm:text-sm font-medium text-[#14120c] placeholder:text-[#a59a80] focus:outline-none focus:border-[#d4a017] focus:bg-white transition-colors";
const label = "block text-xs font-extrabold uppercase tracking-wider text-[#3d3420] mb-2";

// phone: swipe row · tablet+: grid
const swipeRow = "-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0 [scrollbar-width:none]";
const swipeCard = "snap-start shrink-0 w-[84%] sm:w-auto";

export default function GetInvolvedClient({ photos = [] }: { photos?: string[] }) {
  const [activePathway, setActivePathway] = useState<Pathway>("csr");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Field Teaching & Literacy"]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    pathway: "Corporate CSR Partnership",
    sector: "Sustainable Agriculture & IPM",
    location: "",
    message: "",
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "get-involved", ...formData, skills: selectedSkills }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to send.");
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const openPathway = (id: Pathway) => {
    setActivePathway(id);
    document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroPhoto = photos[0];
  const formPhoto = photos[1] ?? photos[0];

  return (
    <div className="bg-[#fbf8f0] text-[#14120c] min-h-screen pt-12 relative overflow-x-clip">
      {/* ================= HERO ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white -mt-12">
        {heroPhoto && (
          <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
            <Image src={heroPhoto} alt="" fill preload sizes="100vw" className="object-cover lux-kenburns opacity-40" />
          </div>
        )}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,#03140d_15%,rgba(3,20,13,0.88)_50%,rgba(3,20,13,0.6))]" />
        <div aria-hidden className="pointer-events-none absolute -top-1/4 -left-1/4 w-[70vw] aspect-square -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(212,160,23,0.16),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 sm:pt-32 lg:pt-36 lg:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 min-w-0">
            <p className="lux-rise inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200" style={{ animationDelay: "80ms" }}>
              <Building className="w-3.5 h-3.5 text-amber-300 shrink-0" /> Corporate CSR & Engagement Portal
            </p>
            <h1 className="lux-rise mt-6 text-[2.35rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem] font-extrabold tracking-tight [text-wrap:balance]" style={{ animationDelay: "160ms" }}>
              Get Involved:{" "}
              <span className="block mt-1">
                <span className="lux-gold-text">Corporate CSR & Field Partnerships</span>
              </span>
            </h1>
            <p className="lux-rise mt-6 max-w-xl text-base sm:text-lg text-emerald-50/80 leading-relaxed" style={{ animationDelay: "240ms" }}>
              Partner with EFFORT NGO across <strong className="text-amber-200">4 dedicated engagement tracks</strong>: Execute MCA Form CSR-1 Projects, Sign an Institutional MoU, Volunteer on the ground, or Sponsor an Impact Cause.
            </p>
            <div className="lux-rise mt-8 flex flex-col min-[420px]:flex-row gap-3" style={{ animationDelay: "320ms" }}>
              <a href="#application-form" className={`${goldBtn} px-7 py-3.5`}>
                Initiate Partnership <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pathways" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/50 text-amber-100 font-extrabold px-7 py-3.5 hover:bg-amber-300/10 transition-colors">
                Explore Pathways
              </a>
            </div>
            <dl className="lux-rise mt-10 pt-7 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg" style={{ animationDelay: "400ms" }}>
              {heroStats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dd className="text-xl min-[380px]:text-2xl sm:text-3xl font-extrabold tracking-tight lux-gold-text">{s.value}</dd>
                  <dt className="mt-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide sm:tracking-wider text-emerald-50/60 leading-snug">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* 4 gateway tiles */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {gateways.map((g, i) => {
              const on = activePathway === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => openPathway(g.id)}
                  className={`lux-rise group relative text-left rounded-[22px] sm:rounded-[26px] p-4 sm:p-6 border cursor-pointer transition-[background-color,border-color] duration-300 min-w-0 ${
                    on ? "bg-gradient-to-br from-[#fff7dc] to-[#f3dfa2] border-amber-300 text-[#14120c]" : "bg-white/[0.06] border-white/15 text-white hover:border-amber-300/60 hover:bg-white/[0.1]"
                  }`}
                  style={{ animationDelay: `${300 + i * 90}ms` }}
                >
                  <span className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center ${on ? "bg-[#062619]" : "bg-amber-300/15 border border-amber-300/30"}`}>
                    <g.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300" />
                  </span>
                  <span className={`mt-3 sm:mt-4 block text-[11px] font-extrabold uppercase tracking-wider ${on ? "text-[#7a5a12]" : "text-amber-300"}`}>{g.kicker}</span>
                  <span className="mt-0.5 block text-[15px] sm:text-lg font-extrabold leading-snug">{g.title}</span>
                  <span className={`mt-1.5 hidden min-[400px]:block text-xs sm:text-sm leading-snug ${on ? "text-[#4a4338]" : "text-emerald-50/70"}`}>{g.desc}</span>
                  <ArrowRight className={`absolute top-4 right-4 sm:top-6 sm:right-6 w-4 h-4 transition-transform group-hover:translate-x-0.5 ${on ? "text-[#7a5a12]" : "text-amber-300/70"}`} />
                </button>
              );
            })}
          </div>
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
      </section>

      {/* ================= CREDENTIALS ================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-14">
        <ul className="grid md:grid-cols-3 gap-3 sm:gap-4">
          {credentials.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 100} className="relative overflow-hidden rounded-3xl bg-white border border-[#efe2bd] p-5 sm:p-6 shadow-[0_25px_50px_-30px_rgba(90,61,0,0.45)]">
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]" />
              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0b3d2a] to-[#062619] flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6 text-amber-300" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-extrabold text-[#14120c] text-lg leading-snug">{c.title}</h2>
                  <p className="mt-1 text-sm text-[#5a5240] leading-relaxed">{c.desc}</p>
                  <p className="mt-3 inline-block rounded-lg bg-[#f8f1df] border border-[#efe2bd] px-2.5 py-1 font-mono text-xs font-bold text-[#7a5a12] break-all">{c.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ================= PATHWAYS ================= */}
      <section id="pathways" className="scroll-mt-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-8">
        {/* Pathway selector — 2×2 on phones, one row on desktop */}
        <div role="tablist" aria-label="Engagement pathways" className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-[22px] sm:rounded-full bg-[#062619] shadow-[0_20px_45px_-25px_rgba(6,38,25,0.8)]">
          {gateways.map((g) => {
            const on = activePathway === g.id;
            return (
              <button
                key={g.id}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => setActivePathway(g.id)}
                className={`flex items-center justify-center gap-2 rounded-2xl sm:rounded-full px-3 py-3 sm:px-5 text-xs sm:text-sm font-extrabold leading-tight text-center transition-colors cursor-pointer ${
                  on ? "bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] shadow-[0_8px_20px_-8px_rgba(212,160,23,0.9)]" : "text-amber-100/80 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <g.icon className="w-4 h-4 shrink-0" /> <span>{g.tab}</span>
              </button>
            );
          })}
        </div>

        <div key={activePathway} className="lux-rise mt-8 sm:mt-10" style={{ animationDuration: "0.6s" }}>
          {/* ---------- A: CSR ---------- */}
          {activePathway === "csr" && (
            <div className="space-y-8 sm:space-y-10">
              <div className="grid lg:grid-cols-12 gap-6 items-end">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={eyebrowLight}>
                      <Building2 className="w-3.5 h-3.5" /> Possible Collaboration
                    </span>
                    <span className="rounded-full bg-[#062619] text-amber-200 px-3.5 py-1.5 text-xs font-extrabold">Form CSR-1 ID: CSR00034988</span>
                  </div>
                  <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
                    CSR Sponsorship <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Opportunities & Execution</span>
                  </h2>
                </div>
                <p className="lg:col-span-4 text-[15px] text-[#5a5240] leading-relaxed">
                  We have many more ideas to transform the lives of farming communities and need support from Individuals, Organisations, Funding Agencies and Corporate Companies. We invite you to join us and make a difference in the lives of rural India. Your support and collaboration can be extended to:
                </p>
              </div>

              <ul className={`${swipeRow} sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}>
                {csrSponsorOptions.map((opt, idx) => (
                  <li key={opt.title} className={`${swipeCard} group relative flex flex-col rounded-3xl bg-white border border-[#efe2bd] p-6 hover:border-amber-400 hover:shadow-[0_30px_60px_-35px_rgba(90,61,0,0.55)] transition-[border-color,box-shadow]`}>
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-4xl font-extrabold text-[#efe0b4] leading-none tabular-nums">0{idx + 1}</span>
                      <span className="rounded-full bg-[#062619] text-amber-200 px-3 py-1 text-xs font-extrabold whitespace-nowrap">{opt.budget}</span>
                    </div>
                    <p className="mt-5 text-xs font-extrabold uppercase tracking-wider text-[#a1781e]">{opt.badge}</p>
                    <h3 className="mt-1 text-lg font-extrabold leading-snug text-[#14120c]">{opt.title}</h3>
                    <p className="mt-2 text-sm text-[#5a5240] leading-relaxed flex-1">{opt.desc}</p>
                    <a
                      href="#application-form"
                      onClick={() => setFormData((prev) => ({ ...prev, pathway: "Corporate CSR Partnership", sector: opt.title, message: `Sponsoring: ${opt.title} (${opt.budget})` }))}
                      className={`${greenBtn} mt-6 w-full px-4 py-3 text-sm`}
                    >
                      Sponsor This Project <ArrowRight className="w-4 h-4 text-amber-300" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="text-center text-sm font-semibold text-[#7a5a12] max-w-3xl mx-auto leading-relaxed">
                EFFORT is registered under the Societies Registration Act XXI of 1860, and registered with the Ministry of Home Affairs, Government of India under the FCRA Act.
              </p>

              {/* 3-phase execution */}
              <ol className="relative grid md:grid-cols-3 gap-4 md:gap-6 rounded-[28px] bg-[#062619] text-white p-5 sm:p-8">
                <span aria-hidden className="hidden md:block absolute top-[62px] left-[16%] right-[16%] h-px bg-gradient-to-r from-amber-300/0 via-amber-300/60 to-amber-300/0" />
                {phases.map((p) => (
                  <li key={p.step} className="relative flex md:flex-col md:items-center md:text-center gap-4">
                    <span className="relative z-10 w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] shrink-0">
                      <span className="w-full h-full rounded-full bg-[#062619] flex items-center justify-center">
                        <p.icon className="w-6 h-6 text-amber-300" />
                      </span>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">{p.step}</p>
                      <h3 className="mt-0.5 text-lg font-extrabold">{p.title}</h3>
                      <p className="mt-1 text-sm text-emerald-50/70 leading-relaxed">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* ---------- B: MoU ---------- */}
          {activePathway === "mou" && (
            <div className="space-y-8 sm:space-y-10">
              <div className="grid lg:grid-cols-12 gap-6 items-end">
                <div className="lg:col-span-8">
                  <span className={eyebrowLight}>
                    <Handshake className="w-3.5 h-3.5" /> Institutional Collaboration Portal
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
                    Memorandum of Understanding <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">(MoU) Tracks</span>
                  </h2>
                </div>
                <p className="lg:col-span-4 text-[15px] text-[#5a5240] leading-relaxed">
                  EFFORT NGO signs formal MoUs with Universities, Government Bodies, and Development Funding Agencies to execute long-term, high-impact projects.
                </p>
              </div>

              <ul className={`${swipeRow} sm:grid-cols-2 lg:grid-cols-3 lg:gap-5`}>
                {mouCategories.map((mou) => (
                  <li key={mou.type} className={`${swipeCard} relative overflow-hidden flex flex-col rounded-3xl bg-white border border-[#efe2bd] p-6 hover:border-amber-400 transition-colors`}>
                    <span aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.18),transparent_70%)]" />
                    <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0b3d2a] to-[#062619] flex items-center justify-center">
                      <mou.icon className="w-6 h-6 text-amber-300" />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold leading-snug">{mou.type}</h3>
                    <p className="mt-1 text-sm font-extrabold text-[#0b5d3f]">{mou.partner}</p>
                    <p className="mt-2 text-sm text-[#5a5240] leading-relaxed flex-1">{mou.scope}</p>
                    <a
                      href="#application-form"
                      onClick={() => setFormData((prev) => ({ ...prev, pathway: "Institutional & Govt Alliance", message: `Interested in: ${mou.type}` }))}
                      className={`${greenBtn} mt-6 w-full px-4 py-3 text-sm`}
                    >
                      Initiate MoU Request <ArrowRight className="w-4 h-4 text-amber-300" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="rounded-3xl bg-gradient-to-r from-[#f8f1df] to-[#f3e2b6] border border-[#e3cf94] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#0b5d3f] shrink-0" />
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-wide text-[#14120c]">Statutory MoU Pre-requisites Verified:</p>
                    <p className="mt-1 text-sm text-[#5a5240]">FCRA Registered · 12AB & 80G Certified · NITI Aayog Darpan ID · TISS Empaneled</p>
                  </div>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-[#062619] text-amber-200 px-4 py-2 text-sm font-extrabold whitespace-nowrap">100% Ready for MoU</span>
              </div>
            </div>
          )}

          {/* ---------- C: Volunteer ---------- */}
          {activePathway === "volunteer" && (
            <div className="space-y-8 sm:space-y-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <span className={eyebrowLight}>
                    <UserCheck className="w-3.5 h-3.5" /> Volunteer Skill Matcher
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
                    Join EFFORT <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Ground Volunteer Network</span>
                  </h2>
                </div>
                <div className="rounded-3xl bg-[#062619] text-white px-6 py-4 self-start lg:self-auto">
                  <p className="text-2xl sm:text-3xl font-extrabold lux-gold-text">500+ Active Volunteers</p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-emerald-50/60">Across 10 Operating States</p>
                </div>
              </div>

              <div className="rounded-[28px] bg-white border border-[#efe2bd] p-5 sm:p-8">
                <p className="text-sm font-extrabold uppercase tracking-wider text-[#3d3420]">1. Select your contribution skills (Click to toggle):</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {availableSkills.map((skill) => {
                    const isSelected = selectedSkills.includes(skill);
                    return (
                      <button
                        key={skill}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => toggleSkill(skill)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-bold border transition-colors cursor-pointer ${
                          isSelected ? "bg-[#062619] border-[#062619] text-amber-100" : "bg-[#fbf8f0] border-[#ece0c0] text-[#4a4338] hover:border-amber-400"
                        }`}
                      >
                        {isSelected ? <CheckCircle2 className="w-4 h-4 text-amber-300" /> : <span className="w-4 text-center text-[#a1781e]">+</span>}
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              <ol className="relative grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                <span aria-hidden className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-[#d4a017]/0 via-[#d4a017]/70 to-[#d4a017]/0" />
                {volunteerSteps.map((s, i) => (
                  <li key={s.title} className="relative text-center">
                    <span
                      className={`relative z-10 mx-auto w-12 h-12 rounded-full flex items-center justify-center text-lg font-extrabold ${
                        i === 3 ? "bg-[#062619] text-amber-300" : "bg-gradient-to-br from-[#f7d774] to-[#d4a017] text-[#062619]"
                      } shadow-[0_10px_22px_-10px_rgba(212,160,23,0.9)]`}
                    >
                      {i + 1}
                    </span>
                    <p className="mt-3 font-extrabold text-[#14120c]">{s.title}</p>
                    <p className="mt-0.5 text-sm text-[#5a5240]">{s.desc}</p>
                  </li>
                ))}
              </ol>

              <div className="text-center">
                <a
                  href="#application-form"
                  onClick={() => setFormData((prev) => ({ ...prev, pathway: "Grassroots Volunteer", message: `Selected Skills: ${selectedSkills.join(", ")}` }))}
                  className={`${goldBtn} px-7 py-4 text-sm`}
                >
                  Proceed to Volunteer Application <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}

          {/* ---------- D: Adopt a cause ---------- */}
          {activePathway === "giving" && (
            <div className="space-y-8 sm:space-y-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <span className={eyebrowLight}>
                    <Heart className="w-3.5 h-3.5" /> Direct Impact Support
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
                    Adopt an Impact Project <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">(80G Tax-Exempt)</span>
                  </h2>
                </div>
                <span className="self-start lg:self-auto inline-flex items-center gap-2 rounded-2xl bg-[#062619] text-amber-100 px-5 py-3 text-sm font-extrabold">
                  <Award className="w-5 h-5 text-amber-300 shrink-0" /> 50% Income Tax Exemption Under Section 80G
                </span>
              </div>

              <ul className={`${swipeRow} sm:grid-cols-2 lg:grid-cols-4 lg:gap-5`}>
                {impactProjects.map((proj) => (
                  <li key={proj.title} className={`${swipeCard} flex flex-col rounded-3xl bg-white border border-[#efe2bd] overflow-hidden hover:border-amber-400 transition-colors`}>
                    <div className="relative bg-gradient-to-br from-[#0b3d2a] to-[#03140d] px-6 pt-6 pb-5">
                      <span aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:16px_16px]" />
                      <span className="relative w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center">
                        <proj.icon className="w-6 h-6 text-amber-300" />
                      </span>
                      <p className="relative mt-4 text-2xl font-extrabold lux-gold-text leading-tight">{proj.cost}</p>
                    </div>
                    <div className="flex-1 flex flex-col p-6">
                      <p className="text-xs font-extrabold uppercase tracking-wider text-[#a1781e]">{proj.badge}</p>
                      <h3 className="mt-1 text-base font-extrabold leading-snug">{proj.title}</h3>
                      <p className="mt-2 text-sm text-[#5a5240] leading-relaxed flex-1">{proj.desc}</p>
                      <a
                        href="#application-form"
                        onClick={() => setFormData((prev) => ({ ...prev, pathway: "Adopt an Impact Project", message: `Sponsoring: ${proj.title}` }))}
                        className={`${goldBtn} mt-6 w-full px-4 py-3 text-sm`}
                      >
                        Adopt This Project <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section id="application-form" className="scroll-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-[#e3cf94] bg-white shadow-[0_40px_90px_-50px_rgba(90,61,0,0.6)]">
          {/* Left: dark intro panel */}
          <div className="relative isolate overflow-hidden lg:col-span-5 bg-[#03140d] text-white p-6 sm:p-10">
            {formPhoto && (
              <div aria-hidden className="absolute inset-0 -z-20">
                <Image src={formPhoto} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover opacity-30" />
              </div>
            )}
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-[#03140d]/70 via-[#03140d]/85 to-[#03140d]" />
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              <Send className="w-3.5 h-3.5" /> Direct Collaboration Inquiry
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
              Initiate Partnership / <span className="lux-gold-text">Application Query</span>
            </h2>
            <p className="mt-4 text-emerald-50/75 leading-relaxed">
              Submit your project preferences below and our senior alliance lead will email you our proposal decks within 24 hours.
            </p>
            <dl className="mt-8 space-y-3">
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3">
                <dt className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Partnership Category</dt>
                <dd className="mt-0.5 font-bold">{formData.pathway}</dd>
              </div>
              <div className="rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3">
                <dt className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">Target Sector</dt>
                <dd className="mt-0.5 font-bold break-words">{formData.sector}</dd>
              </div>
            </dl>
            <ul className="mt-8 hidden lg:flex flex-wrap gap-2">
              {["80G Tax Exempt", "FCRA Registered", "MCA Form CSR-1 (CSR00034988)"].map((c) => (
                <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-amber-300/10 border border-amber-300/30 px-3 py-1 text-xs font-bold text-amber-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 p-5 sm:p-10">
            {formSubmitted ? (
              <div className="lux-rise h-full flex flex-col items-center justify-center text-center py-10">
                <span className="w-20 h-20 rounded-full p-[3px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12]">
                  <span className="w-full h-full rounded-full bg-[#062619] flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9 text-amber-300" />
                  </span>
                </span>
                <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#14120c]">Partnership Inquiry Submitted!</h3>
                <p className="mt-3 max-w-md text-[#5a5240] leading-relaxed">
                  Thank you for reaching out to EFFORT NGO. A Senior Program Lead will contact you regarding <strong className="text-[#0b5d3f]">{formData.pathway}</strong>.
                </p>
                <button type="button" onClick={() => setFormSubmitted(false)} className={`${greenBtn} mt-8 px-7 py-3.5 text-sm cursor-pointer`}>
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gi-name" className={label}>Company / Representative Name *</label>
                    <input id="gi-name" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ramesh Sharma" className={field} />
                  </div>
                  <div>
                    <label htmlFor="gi-role" className={label}>Designation / Role</label>
                    <input id="gi-role" type="text" autoComplete="organization-title" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. CSR Director / Program Head" className={field} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gi-email" className={label}>Contact Email *</label>
                    <input id="gi-email" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="e.g. csr@company.com" className={field} />
                  </div>
                  <div>
                    <label htmlFor="gi-phone" className={label}>Phone / Mobile Number *</label>
                    <input id="gi-phone" type="tel" required autoComplete="tel" inputMode="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="e.g. +91 98765 43210" className={field} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gi-pathway" className={label}>Partnership Category *</label>
                    <div className="relative">
                      <select id="gi-pathway" value={formData.pathway} onChange={(e) => setFormData({ ...formData, pathway: e.target.value })} className={`${field} appearance-none pr-10 cursor-pointer`}>
                        <option value="Corporate CSR Partnership">Corporate CSR Partnership (Form CSR-1)</option>
                        <option value="Institutional & Govt Alliance">Institutional & Govt Alliance (MoU)</option>
                        <option value="Adopt an Impact Project">Adopt an Impact Project (80G Giving)</option>
                        <option value="Grassroots Volunteer">Grassroots On-Field Volunteer</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1781e]" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="gi-sector" className={label}>Target Sector</label>
                    <div className="relative">
                      <select id="gi-sector" value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} className={`${field} appearance-none pr-10 cursor-pointer`}>
                        {/* a sponsorship card may preset a project title as the sector */}
                        {!["Sustainable Agriculture & IPM", "Natural Resource Management & Watershed", "Women SHGs & FPO Cooperatives", "Child Development & Education", "Community Health & Safe WASH"].includes(formData.sector) && (
                          <option value={formData.sector}>{formData.sector}</option>
                        )}
                        <option value="Sustainable Agriculture & IPM">Sustainable Agriculture & IPM</option>
                        <option value="Natural Resource Management & Watershed">Natural Resource Management & Watershed</option>
                        <option value="Women SHGs & FPO Cooperatives">Women SHGs & FPO Cooperatives</option>
                        <option value="Child Development & Education">Child Development & Education</option>
                        <option value="Community Health & Safe WASH">Community Health & Safe WASH</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1781e]" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="gi-message" className={label}>Detailed Partnership Parameters / Budget Query</label>
                  <textarea
                    id="gi-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Sponsor targets, geographic preferences (states/districts), budget parameters, or corporate CSR mandate..."
                    className={`${field} resize-y`}
                  />
                </div>

                {submitError && (
                  <p role="alert" className="text-sm font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
                )}

                <button type="submit" disabled={submitting} className={`${greenBtn} w-full px-6 py-4 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-wait`}>
                  <Send className="w-4 h-4 text-amber-300" /> {submitting ? "Submitting..." : "Submit Corporate / Partnership Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(247,215,116,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,215,116,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <Reveal className="max-w-3xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
            <Building2 className="w-3.5 h-3.5" /> Trusted Partner Ecosystem
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
            Our Institutional & <span className="lux-gold-text">CSR Partners</span>
          </h2>
          <p className="mt-4 text-emerald-50/75 leading-relaxed">
            Join premier government institutions, corporate CSR leads, and international development agencies working with EFFORT NGO.
          </p>
        </Reveal>

        <ul className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <Reveal
              as="li"
              key={p.name}
              delay={(i % 5) * 70}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 text-center hover:border-amber-300/50 hover:bg-white/[0.07] transition-colors min-w-0"
            >
              <span aria-hidden className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="font-extrabold text-amber-200 leading-snug break-words">{p.name}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wide text-emerald-50/55 leading-snug">{p.sub}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <span className={eyebrowLight}>
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
            Common <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Partnership Questions</span>
          </h2>
        </Reveal>

        <ul className="lg:col-span-8 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <li key={faq.q} className={`rounded-2xl bg-white border transition-colors ${isOpen ? "border-amber-400 shadow-[0_20px_45px_-30px_rgba(90,61,0,0.5)]" : "border-[#efe2bd]"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                >
                  <span className={`text-sm font-extrabold tabular-nums shrink-0 ${isOpen ? "text-[#a1781e]" : "text-[#c9b68a]"}`}>0{idx + 1}</span>
                  <span className="flex-1 font-extrabold text-[#14120c] leading-snug">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? "bg-[#062619]" : "bg-[#f8f1df]"}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-300" : "text-[#a1781e]"}`} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 sm:pl-14 text-[15px] text-[#5a5240] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* ================= COMPLIANCE FINALE ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbf8f0] via-[#f8eed4] to-[#f3e2b6] pb-20 sm:pb-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-50 lux-guilloche" />
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={eyebrowLight}>
            <ShieldCheck className="w-3.5 h-3.5 text-[#0b5d3f]" /> Verified Legal & Regulatory Standing
          </span>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
            100% Certified <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Statutory Compliance</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-[#5a5240] sm:text-lg leading-relaxed">
            EFFORT NGO maintains active Society Registration (340/1999), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval (CSR00034988), NITI Aayog DARPAN ID, and TISS National Hub Empanlement.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {complianceChips.map((c) => (
              <li key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#e3cf94] px-3.5 py-2 text-xs sm:text-sm font-extrabold text-[#3d3420] shadow-[0_8px_18px_-12px_rgba(90,61,0,0.5)]">
                <CheckCircle2 className="w-4 h-4 text-[#0b5d3f] shrink-0" /> {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
