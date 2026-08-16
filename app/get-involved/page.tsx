"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Building2,
  GraduationCap,
  Landmark,
  Globe,
  ShieldCheck,
  Award,
  Send,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Handshake,
  Bike,
  Droplets,
  Sprout,
  BookOpen,
  Calculator,
  UserCheck,
  Layers,
  FileText,
  Building,
} from "lucide-react";

export default function GetInvolved() {
  const [activePathway, setActivePathway] = useState<"volunteer" | "mou" | "giving" | "csr">("csr");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Field Teaching & Literacy"]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  {/* Form State */}
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
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
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

  {/* Skill Options for Volunteers */}
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

  {/* Possible Collaboration — real EFFORT collaboration packages, as published to funding partners */}
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

  {/* Adopt an Impact Project Cards for Donors */}
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

  {/* MoU Categories */}
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

  {/* Partners */}
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

  {/* FAQs */}
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

  return (
    <div className="min-h-screen bg-[#fcf8f0] text-[#221c0c] relative overflow-hidden">
      {/* Dynamic Ambient Glow Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-amber-200/40 blur-[150px]" />
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] rounded-full bg-emerald-200/30 blur-[150px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.18]" />
      </div>

      {/* --- SECTION 1: SPLIT DUAL-ACTION HERO GATEWAY --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bold Action Intro */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
              <Building className="w-3.5 h-3.5 text-[#c9a24a]" /> Corporate CSR & Engagement Portal
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] leading-[1.1]">
              Get Involved: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-700 to-teal-700">Corporate CSR & Field Partnerships</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5b6a60] font-medium leading-relaxed">
              Partner with EFFORT NGO across <strong>4 dedicated engagement tracks</strong>: Execute MCA Form CSR-1 Projects, Sign an Institutional MoU, Volunteer on the ground, or Sponsor an Impact Cause.
            </p>

            {/* Impact Metric Bar */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-3xl bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-xs">
              <div>
                <p className="text-xl font-black text-metallic-gold">2.67 Lakh</p>
                <p className="text-[10px] font-black uppercase text-[#221c0c]">Families Empowered</p>
              </div>
              <div>
                <p className="text-xl font-black text-emerald-700">10 States</p>
                <p className="text-[10px] font-black uppercase text-[#221c0c]">Field Operations</p>
              </div>
              <div>
                <p className="text-xl font-black text-[#8a6a1f]">27 Years</p>
                <p className="text-[10px] font-black uppercase text-[#221c0c]">Ground Legacy</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Interactive 3D Glass Gateway Tiles */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            <button
              onClick={() => {
                setActivePathway("csr");
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-6 rounded-[28px] border-2 text-left transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-1.5 ${
                activePathway === "csr"
                  ? "bg-[#221c0c] text-[#f7e4a3] border-[#d4af6a] scale-102"
                  : "bg-white/90 backdrop-blur-md border-[#e5d4a1] text-[#221c0c] hover:border-[#d4af6a]"
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center mb-3">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-600 block">Corporate</span>
              <h3 className="text-lg font-black mt-0.5">Corporate CSR Hub</h3>
              <p className="text-xs opacity-80 mt-1 font-medium">Turnkey Schedule VII CSR execution with Form CSR-1.</p>
            </button>

            <button
              onClick={() => {
                setActivePathway("mou");
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-6 rounded-[28px] border-2 text-left transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-1.5 ${
                activePathway === "mou"
                  ? "bg-[#221c0c] text-[#f7e4a3] border-[#d4af6a] scale-102"
                  : "bg-white/90 backdrop-blur-md border-[#e5d4a1] text-[#221c0c] hover:border-[#d4af6a]"
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-3">
                <Handshake className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">Institutional</span>
              <h3 className="text-lg font-black mt-0.5">Sign an MoU / Alliance</h3>
              <p className="text-xs opacity-80 mt-1 font-medium">For Govt Depts, Universities & International Bodies.</p>
            </button>

            <button
              onClick={() => {
                setActivePathway("volunteer");
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-6 rounded-[28px] border-2 text-left transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-1.5 ${
                activePathway === "volunteer"
                  ? "bg-[#221c0c] text-[#f7e4a3] border-[#d4af6a] scale-102"
                  : "bg-white/90 backdrop-blur-md border-[#e5d4a1] text-[#221c0c] hover:border-[#d4af6a]"
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 block">Individual</span>
              <h3 className="text-lg font-black mt-0.5">Grassroots Volunteer</h3>
              <p className="text-xs opacity-80 mt-1 font-medium">Join teaching, medical, and organic farming field drives.</p>
            </button>

            <button
              onClick={() => {
                setActivePathway("giving");
                document.getElementById("pathways")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`p-6 rounded-[28px] border-2 text-left transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-1.5 ${
                activePathway === "giving"
                  ? "bg-[#221c0c] text-[#f7e4a3] border-[#d4af6a] scale-102"
                  : "bg-white/90 backdrop-blur-md border-[#e5d4a1] text-[#221c0c] hover:border-[#d4af6a]"
              }`}
            >
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-600 block">Impact Funder</span>
              <h3 className="text-lg font-black mt-0.5">Adopt an Impact Project</h3>
              <p className="text-xs opacity-80 mt-1 font-medium">Sponsor girl student bikes, RO plants & SHG units (80G).</p>
            </button>
          </div>
        </div>
      </section>

      {/* --- HIGH-LEVEL STATUTORY CSR CREDENTIALS STRIP --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-b from-[#1a140b] to-[#120e08] text-white rounded-[32px] p-8 border-2 border-[#d4af6a]/60 shadow-2xl grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <h4 className="font-black text-[#f7e4a3] text-lg">MCA Form CSR-1 Approved</h4>
            <p className="text-xs text-stone-300 font-medium">Registered with Ministry of Corporate Affairs for turnkey CSR operations in India.</p>
            <div className="text-xs font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 p-2 rounded-xl text-emerald-300 inline-block">Registration ID: CSR00034988</div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-amber-400" />
            <h4 className="font-black text-[#f7e4a3] text-lg">Section 80G & 12AB Verified</h4>
            <p className="text-xs text-stone-300 font-medium">50% tax exemption under Section 80G for all corporate contributions.</p>
            <div className="text-xs font-mono font-bold bg-amber-950/80 border border-amber-500/40 p-2 rounded-xl text-amber-300 inline-block">CIT (Exempt) Certified</div>
          </div>
          <div className="space-y-2">
            <FileText className="w-8 h-8 text-sky-400" />
            <h4 className="font-black text-[#f7e4a3] text-lg">Impact Evaluation Audits</h4>
            <p className="text-xs text-stone-300 font-medium">We deliver quarterly baseline surveys, milestone reports & third-party audits.</p>
            <div className="text-xs font-mono font-bold bg-sky-950/80 border border-sky-500/40 p-2 rounded-xl text-sky-300 inline-block">Schedule VII Audited</div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: INTERACTIVE PATHWAYS EXPLORER MODULE --- */}
      <section id="pathways" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pathway Navigation Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActivePathway("csr")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all cursor-pointer ${
              activePathway === "csr"
                ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                : "bg-white/80 border border-[#e5d4a1] text-[#5a461e] hover:bg-white"
            }`}
          >
            <Building2 className="w-4 h-4 text-purple-500" /> Corporate CSR Command Center
          </button>

          <button
            onClick={() => setActivePathway("mou")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all cursor-pointer ${
              activePathway === "mou"
                ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                : "bg-white/80 border border-[#e5d4a1] text-[#5a461e] hover:bg-white"
            }`}
          >
            <Handshake className="w-4 h-4 text-emerald-500" /> MoU & Strategic Alliances
          </button>

          <button
            onClick={() => setActivePathway("volunteer")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all cursor-pointer ${
              activePathway === "volunteer"
                ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                : "bg-white/80 border border-[#e5d4a1] text-[#5a461e] hover:bg-white"
            }`}
          >
            <Users className="w-4 h-4 text-amber-500" /> Grassroots Volunteer Force
          </button>

          <button
            onClick={() => setActivePathway("giving")}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all cursor-pointer ${
              activePathway === "giving"
                ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                : "bg-white/80 border border-[#e5d4a1] text-[#5a461e] hover:bg-white"
            }`}
          >
            <Heart className="w-4 h-4 text-sky-500" /> Adopt an Impact Cause (80G)
          </button>
        </div>

        {/* PATHWAY CONTENT A: CORPORATE CSR COMMAND CENTER & SPONSORSHIP OPPORTUNITIES */}
        {activePathway === "csr" && (
          <div className="rounded-[36px] p-8 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] space-y-8 animate-fade-in">
            <div className="space-y-3 border-b border-[#e5d4a1] pb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-300 text-xs font-black uppercase text-purple-900">
                  <Building2 className="w-3.5 h-3.5 text-purple-600" /> Possible Collaboration
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black">
                  Form CSR-1 ID: CSR00034988
                </span>
              </div>
              <h2 className="text-3xl font-black text-[#221c0c]">CSR Sponsorship Opportunities & Execution</h2>
              <p className="text-xs sm:text-sm text-[#5b6a60] font-medium leading-relaxed max-w-3xl">
                We have many more ideas to transform the lives of farming communities and need support from Individuals, Organisations, Funding Agencies and Corporate Companies. We invite you to join us and make a difference in the lives of rural India. Your support and collaboration can be extended to:
              </p>
            </div>

            {/* High-Level Sponsorship Opportunities Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {csrSponsorOptions.map((opt, idx) => (
                <div key={idx} className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-3 flex flex-col justify-between hover:border-[#d4af6a] transition-all">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">{opt.badge}</span>
                      <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">{opt.budget}</span>
                    </div>
                    <h3 className="font-black text-[#221c0c] text-lg leading-snug">{opt.title}</h3>
                    <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">{opt.desc}</p>
                  </div>

                  <a
                    href="#application-form"
                    onClick={() => setFormData((prev) => ({ ...prev, pathway: "Corporate CSR Partnership", sector: opt.title, message: `Sponsoring: ${opt.title} (${opt.budget})` }))}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#221c0c] text-[#f7e4a3] font-black text-[11px] uppercase tracking-wider hover:bg-black"
                  >
                    Sponsor This Project <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-[#8a6a1f] font-bold text-center pt-2">
              EFFORT is registered under the Societies Registration Act XXI of 1860, and registered with the Ministry of Home Affairs, Government of India under the FCRA Act.
            </p>

            {/* 3-Phase Execution Process */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4 border-t border-[#e5d4a1]">
              <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-2">
                <p className="text-xs font-black uppercase text-amber-700">Phase 1: Baseline Survey</p>
                <h3 className="font-black text-[#221c0c] text-base">Needs Assessment</h3>
                <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">Rigorous ground surveys across Prakasam, Guntur, and Kurnool habitations to define exact KPI targets.</p>
              </div>

              <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-2">
                <p className="text-xs font-black uppercase text-emerald-700">Phase 2: Field Execution</p>
                <h3 className="font-black text-[#221c0c] text-base">Ground Operations</h3>
                <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">Direct implementation with 27-year veteran field teams, co-branded launches & employee volunteer days.</p>
              </div>

              <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-2">
                <p className="text-xs font-black uppercase text-purple-700">Phase 3: Impact Audit</p>
                <h3 className="font-black text-[#221c0c] text-base">Reporting & Audits</h3>
                <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">Milestone-based budget reporting, MCA Form CSR-1 completion certificates, and ESG compliance files.</p>
              </div>
            </div>
          </div>
        )}

        {/* PATHWAY CONTENT B: MOU & STRATEGIC ALLIANCES MODULE */}
        {activePathway === "mou" && (
          <div className="rounded-[36px] p-8 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] space-y-8 animate-fade-in">
            <div className="space-y-2 border-b border-[#e5d4a1] pb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-black uppercase text-emerald-900">
                <Handshake className="w-3.5 h-3.5 text-emerald-600" /> Institutional Collaboration Portal
              </span>
              <h2 className="text-3xl font-black text-[#221c0c]">Memorandum of Understanding (MoU) Tracks</h2>
              <p className="text-xs sm:text-sm text-[#5b6a60] font-medium">
                EFFORT NGO signs formal MoUs with Universities, Government Bodies, and Development Funding Agencies to execute long-term, high-impact projects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {mouCategories.map((mou, i) => (
                <div key={i} className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                      <mou.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-black text-[#221c0c] text-lg leading-snug">{mou.type}</h3>
                    <p className="text-xs font-black text-emerald-800">{mou.partner}</p>
                    <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">{mou.scope}</p>
                  </div>

                  <a
                    href="#application-form"
                    onClick={() => setFormData((prev) => ({ ...prev, pathway: "Institutional & Govt Alliance", message: `Interested in: ${mou.type}` }))}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#221c0c] text-[#f7e4a3] font-black text-[11px] uppercase tracking-wider hover:bg-black"
                  >
                    Initiate MoU Request <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              ))}
            </div>

            {/* Official Credentials Checklist */}
            <div className="p-5 rounded-3xl bg-amber-50/80 border border-[#d4af6a]/50 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black text-[#221c0c] uppercase">Statutory MoU Pre-requisites Verified:</p>
                <p className="text-xs text-[#5b6a60] font-medium mt-0.5">FCRA Registered · 12AB & 80G Certified · NITI Aayog Darpan ID · TISS Empaneled</p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-700 text-white text-xs font-black">
                100% Ready for MoU
              </span>
            </div>
          </div>
        )}

        {/* PATHWAY CONTENT C: VOLUNTEER MODULE */}
        {activePathway === "volunteer" && (
          <div className="rounded-[36px] p-8 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] space-y-8 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5d4a1] pb-6">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase text-amber-900">
                  <UserCheck className="w-3.5 h-3.5 text-amber-700" /> Volunteer Skill Matcher
                </span>
                <h2 className="text-3xl font-black text-[#221c0c]">Join EFFORT Ground Volunteer Network</h2>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-2xl font-black text-emerald-700">500+ Active Volunteers</span>
                <p className="text-[10px] text-[#7a6f55] font-bold uppercase">Across 10 Operating States</p>
              </div>
            </div>

            {/* Interactive Skill Selection Chips */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c]">
                1. Select your contribution skills (Click to toggle):
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSkills.map((skill) => {
                  const isSelected = selectedSkills.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-emerald-700 text-white border border-emerald-800 shadow-xs"
                          : "bg-stone-100 border border-stone-200 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      {isSelected ? "✓ " : "+ "} {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4-Step Volunteer Workflow */}
            <div className="grid sm:grid-cols-4 gap-4 p-5 rounded-3xl bg-stone-50 border border-stone-200 text-center">
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-2">1</span>
                <p className="text-xs font-black text-[#221c0c]">Submit Profile</p>
                <p className="text-[10px] text-stone-500 font-medium">Select skills & location</p>
              </div>
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-2">2</span>
                <p className="text-xs font-black text-[#221c0c]">Field Hub Match</p>
                <p className="text-[10px] text-stone-500 font-medium">Connect with State Coordinator</p>
              </div>
              <div>
                <span className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center mx-auto mb-2">3</span>
                <p className="text-xs font-black text-[#221c0c]">30-Min Orientation</p>
                <p className="text-[10px] text-stone-500 font-medium">Learn ethics & ground protocol</p>
              </div>
              <div>
                <span className="w-8 h-8 rounded-full bg-[#221c0c] text-amber-300 font-black text-xs flex items-center justify-center mx-auto mb-2">4</span>
                <p className="text-xs font-black text-[#221c0c]">Ground Action</p>
                <p className="text-[10px] text-stone-500 font-medium">Field service & certificate</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#application-form"
                onClick={() => setFormData((prev) => ({ ...prev, pathway: "Grassroots Volunteer", message: `Selected Skills: ${selectedSkills.join(", ")}` }))}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg"
              >
                Proceed to Volunteer Application <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* PATHWAY CONTENT D: ADOPT AN IMPACT CAUSE MODULE */}
        {activePathway === "giving" && (
          <div className="rounded-[36px] p-8 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] space-y-8 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5d4a1] pb-6">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-300 text-xs font-black uppercase text-sky-900">
                  <Heart className="w-3.5 h-3.5 text-sky-600" /> Direct Impact Support
                </span>
                <h2 className="text-3xl font-black text-[#221c0c]">Adopt an Impact Project (80G Tax-Exempt)</h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-black">
                50% Income Tax Exemption Under Section 80G
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactProjects.map((proj, i) => (
                <div key={i} className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
                      <proj.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">{proj.badge}</span>
                    <h3 className="font-black text-[#221c0c] text-base leading-snug">{proj.title}</h3>
                    <p className="text-xs font-black text-emerald-700">{proj.cost}</p>
                    <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">{proj.desc}</p>
                  </div>

                  <a
                    href="#application-form"
                    onClick={() => setFormData((prev) => ({ ...prev, pathway: "Adopt an Impact Project", message: `Sponsoring: ${proj.title}` }))}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-emerald-700 text-white font-black text-[11px] uppercase tracking-wider hover:bg-emerald-800"
                  >
                    Adopt This Project <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* --- SECTION 3: HIGH-LEVEL DYNAMIC CORPORATE & GENERAL ACTION FORM --- */}
      <section id="application-form" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[40px] p-8 sm:p-12 bg-white/95 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_30px_70px_-20px_rgba(180,140,40,0.25)] space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
              <Send className="w-3.5 h-3.5 text-amber-700" /> Direct Collaboration Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#221c0c]">
              Initiate Partnership / Application Query
            </h2>
            <p className="text-sm text-[#5b6a60] font-medium max-w-xl mx-auto">
              Submit your project preferences below and our senior alliance lead will email you our proposal decks within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Partnership Inquiry Submitted!</h3>
              <p className="text-sm text-emerald-800 font-medium max-w-md mx-auto">
                Thank you for reaching out to EFFORT NGO. A Senior Program Lead will contact you regarding <strong>{formData.pathway}</strong>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-2.5 rounded-full bg-emerald-700 text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-800"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Company / Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Designation / Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. CSR Director / Program Head"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. csr@company.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Partnership Category *
                  </label>
                  <select
                    value={formData.pathway}
                    onChange={(e) => setFormData({ ...formData, pathway: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  >
                    <option value="Corporate CSR Partnership">Corporate CSR Partnership (Form CSR-1)</option>
                    <option value="Institutional & Govt Alliance">Institutional & Govt Alliance (MoU)</option>
                    <option value="Adopt an Impact Project">Adopt an Impact Project (80G Giving)</option>
                    <option value="Grassroots Volunteer">Grassroots On-Field Volunteer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Target Sector
                  </label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  >
                    <option value="Sustainable Agriculture & IPM">Sustainable Agriculture & IPM</option>
                    <option value="Natural Resource Management & Watershed">Natural Resource Management & Watershed</option>
                    <option value="Women SHGs & FPO Cooperatives">Women SHGs & FPO Cooperatives</option>
                    <option value="Child Development & Education">Child Development & Education</option>
                    <option value="Community Health & Safe WASH">Community Health & Safe WASH</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                  Detailed Partnership Parameters / Budget Query
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Sponsor targets, geographic preferences (states/districts), budget parameters, or corporate CSR mandate..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                />
              </div>

              {submitError && (
                <p className="text-xs font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-full bg-[#221c0c] hover:bg-black text-[#f7e4a3] border border-[#d4af6a] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
              >
                <Send className="w-4 h-4 text-amber-400" /> {submitting ? "Submitting..." : "Submit Corporate / Partnership Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- SECTION 4: INSTITUTIONAL & CSR PARTNER WALL --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[36px] p-8 sm:p-10 bg-gradient-to-b from-[#1a140b] to-[#120e08] text-white border-2 border-[#d4af6a]/60 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
              <Building2 className="w-3.5 h-3.5 text-amber-400" /> Trusted Partner Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
              Our Institutional & CSR Partners
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-medium">
              Join premier government institutions, corporate CSR leads, and international development agencies working with EFFORT NGO.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {partners.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
                <p className="text-sm font-black text-amber-300">{p.name}</p>
                <p className="text-[10px] text-stone-400 font-bold uppercase">{p.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FREQUENTLY ASKED QUESTIONS --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-black text-[#221c0c]">Common Partnership Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/90 border border-[#e5d4a1] overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-black text-sm text-[#221c0c] flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-amber-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#5b6a60] font-medium leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: STATUTORY COMPLIANCE STRIP --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Legal & Regulatory Standing
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            100% Certified Statutory Compliance
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT NGO maintains active Society Registration (340/1999), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval (CSR00034988), NITI Aayog DARPAN ID, Social Stock Exchange (SSE) listing, and TISS National Hub Empanlement.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Society Reg 340/1999</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G Tax Exempt</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Section 12AB Approved</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NITI Aayog Darpan ID</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MCA Form CSR-1 (CSR00034988)</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> SSE Listed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TISS Empaneled</span>
          </div>
        </div>
      </section>
    </div>
  );
}
