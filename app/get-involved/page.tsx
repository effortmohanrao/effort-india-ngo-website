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
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Clock,
  ExternalLink,
  Sprout,
  Droplets,
  HeartPulse,
} from "lucide-react";

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState<"volunteer" | "csr" | "institution" | "internship">("volunteer");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  {/* Form State */}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    location: "",
    interest: "Volunteer On-Field",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  {/* 5 Engagement Pathways */}
  const engagementAvenues = [
    {
      id: "volunteer",
      title: "Grassroots & Digital Volunteer",
      icon: Users,
      subtitle: "For Individuals, Professionals & Youth",
      desc: "Join our on-ground field campaigns across 10 states. Help conduct IPM training sessions, medical checkups, girl student bicycle distribution, or support digital awareness.",
      benefits: [
        "Direct field engagement in rural habitations",
        "Official Volunteer Service Certificate",
        "Flexible weekend or remote digital contribution options",
        "Mentorship from senior development experts",
      ],
      badge: "Individual Impact",
    },
    {
      id: "csr",
      title: "Corporate CSR Partnerships",
      icon: Building2,
      subtitle: "For Corporate CSR & ESG Teams",
      desc: "Partner with EFFORT India NGO for turnkey CSR project execution under Companies Act Schedule VII. Complete MCA Form CSR-1, 80G, and 12AB compliance with independent audit reports.",
      benefits: [
        "100% MCA CSR-1 & 80G Tax Exemption",
        "Custom baseline surveys & impact assessment reports",
        "Co-branded field launches & employee volunteer days",
        "Transparent milestone-based budget reporting",
      ],
      badge: "CSR & Corporate",
    },
    {
      id: "institution",
      title: "Institutional & Govt. Alliances",
      icon: Landmark,
      subtitle: "For Govt Departments, NABARD & International Agencies",
      desc: "EFFORT acts as a Resource Support Organization (RSO) and Lead Facilitating Agency for watershed development, FPO promotion, IFAD drought mitigation, and agricultural extension.",
      benefits: [
        "27-year track record as NABARD & IFAD partner",
        "FCRA registered for international development grants",
        "NITI Aayog Darpan Portal validated NGO",
        "Expertise across 42 FPOs & 2,702 watershed structures",
      ],
      badge: "Government & Alliances",
    },
    {
      id: "internship",
      title: "Student Internships & Fellowships",
      icon: GraduationCap,
      subtitle: "For University Students & Social Work Scholars",
      desc: "Immerse yourself in rural field studies, GIS mapping of water bodies, FPO supply chain analysis, and baseline socio-economic evaluation with academic mentorship.",
      benefits: [
        "Hands-on rural development field experience",
        "TISS & academic empanelled certificate of completion",
        "Data access for research papers & capstone projects",
        "Direct interaction with 2,67,000+ rural beneficiaries",
      ],
      badge: "Academic Fellowship",
    },
  ];

  {/* Corporate & Institutional Partners */}
  const partnerLogos = [
    { name: "NABARD", category: "National Bank for Agriculture" },
    { name: "Spices Board Govt of India", category: "Ministry of Commerce" },
    { name: "IFAD", category: "International Fund for Agricultural Dev." },
    { name: "Bayer CropScience", category: "Corporate CSR Partner" },
    { name: "Syngenta India", category: "Corporate CSR Partner" },
    { name: "Corteva Agriscience", category: "Corporate CSR Partner" },
    { name: "GIZ Germany", category: "International Development Agency" },
    { name: "Azim Premji Foundation", category: "Development Partner" },
    { name: "Reliance Foundation", category: "CSR Partner" },
    { name: "TISS", category: "Academic & Research Partner" },
  ];

  {/* FAQs */}
  const faqs = [
    {
      q: "How can I apply to volunteer with EFFORT India NGO?",
      a: "Simply fill out the Application Form on this page and select 'Grassroots Volunteer' or 'Digital Volunteer'. Our volunteer coordinator will get in touch with you within 48 hours with current field opportunities in your preferred state.",
    },
    {
      q: "Are corporate CSR contributions 80G tax-exempt and MCA CSR-1 compliant?",
      a: "Yes! EFFORT India NGO holds active MCA Form CSR-1 registration, 80G tax-exemption approval, 12AB registration, and FCRA registration. Corporate contributions qualify for 50% tax deduction under Section 80G and fulfill Schedule VII mandate.",
    },
    {
      q: "Does EFFORT India NGO provide internship certificates for university students?",
      a: "Yes, we issue official University Internship Certificates upon successful completion of field assignments, baseline survey reports, or research fellowships with our teams.",
    },
    {
      q: "Can international organizations or foreign donors partner with EFFORT?",
      a: "Yes. EFFORT India NGO holds a valid, active FCRA Registration Certificate issued by the Ministry of Home Affairs, Government of India, allowing us to safely receive and execute foreign grants.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf4] text-[#221c0c] relative overflow-hidden">
      {/* Background Liquid Aurora */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[130px] animate-liquid-drift-a" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] rounded-full bg-emerald-100/40 blur-[130px] animate-liquid-drift-b" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-sky-100/30 blur-[130px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.2]" />
      </div>

      {/* --- HERO BANNER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> Join Our 27-Year Mission
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] max-w-4xl mx-auto leading-[1.12]">
          Get Involved: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">Partner, Volunteer & Transform Lives</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5b6a60] max-w-3xl mx-auto font-medium leading-relaxed">
          Whether you are an individual volunteer, a corporate CSR team, an institutional funder, or a student intern — your partnership drives direct ground impact for <strong>2,67,000+ rural families</strong> across 10 Indian states.
        </p>

        {/* Quick Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href="#application-form"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Apply / Partner Now <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#avenues"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#e5d4a1] text-[#5a461e] font-black text-xs uppercase tracking-wider hover:bg-white hover:border-[#d4af6a] transition-all"
          >
            Explore 4 Engagement Pathways
          </a>
        </div>
      </section>

      {/* --- QUICK TRUST METRIC STRIP --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#e5d4a1] text-center space-y-1 shadow-sm">
            <p className="text-3xl font-black text-metallic-gold">27 Years</p>
            <p className="text-xs font-black uppercase text-[#221c0c]">Ground Legacy (1999–2026)</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#e5d4a1] text-center space-y-1 shadow-sm">
            <p className="text-3xl font-black text-emerald-700">10 States</p>
            <p className="text-xs font-black uppercase text-[#221c0c]">Field Presence</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#e5d4a1] text-center space-y-1 shadow-sm">
            <p className="text-3xl font-black text-metallic-gold">64 Projects</p>
            <p className="text-xs font-black uppercase text-[#221c0c]">51 Completed + 13 Active</p>
          </div>
          <div className="p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-[#e5d4a1] text-center space-y-1 shadow-sm">
            <p className="text-3xl font-black text-emerald-700">100% FCRA & CSR-1</p>
            <p className="text-xs font-black uppercase text-[#221c0c]">Government Compliant</p>
          </div>
        </div>
      </section>

      {/* --- 4 CORE ENGAGEMENT PATHWAYS --- */}
      <section id="avenues" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-black uppercase tracking-[0.2em] text-emerald-900 shadow-xs">
            <Users className="w-4 h-4 text-emerald-600" /> Engagement Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#221c0c]">
            Choose How You Want to Partner With Us
          </h2>
          <p className="text-base text-[#5b6a60] font-medium leading-relaxed">
            Select your partnership domain below to discover direct benefits, project scope, and application process.
          </p>
        </div>

        {/* Tab Selection Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {engagementAvenues.map((ave) => {
            const isSelected = activeTab === ave.id;
            return (
              <button
                key={ave.id}
                onClick={() => setActiveTab(ave.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                    : "bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-[#5a461e] hover:bg-white hover:border-[#d4af6a]"
                }`}
              >
                <ave.icon className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-[#c9a24a]"}`} />
                {ave.title}
              </button>
            );
          })}
        </div>

        {/* Active Pathway Detail Display Card */}
        {engagementAvenues
          .filter((ave) => ave.id === activeTab)
          .map((ave) => (
            <div
              key={ave.id}
              className="rounded-[36px] p-8 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] grid lg:grid-cols-12 gap-8 items-center animate-fade-in"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-xs">
                    <ave.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">{ave.badge}</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#221c0c]">{ave.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-[#5b6a60] font-medium leading-relaxed">{ave.desc}</p>

                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Key Partnership Benefits:</span>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {ave.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-[#3d3219]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="#application-form"
                    onClick={() => setFormData((prev) => ({ ...prev, interest: ave.title }))}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#221c0c] text-[#f7e4a3] border border-[#d4af6a] rounded-full font-black text-xs uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    Apply For {ave.title} <ArrowRight className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>

              {/* Pathway Visual Info Box */}
              <div className="lg:col-span-5 rounded-3xl p-6 bg-gradient-to-br from-amber-50 to-emerald-50 border border-[#d4af6a]/50 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-[#d4af6a]/30">
                  <span className="text-xs font-black uppercase text-[#8a6a1f]">Target Audience</span>
                  <span className="text-xs font-bold text-emerald-800">{ave.subtitle}</span>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-[#221c0c]">Compliance & Credentials Provided:</p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#d4af6a]/50 text-[10px] font-black text-amber-900">
                      Society Reg 340/1999
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#d4af6a]/50 text-[10px] font-black text-emerald-900">
                      80G & 12AB Approved
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#d4af6a]/50 text-[10px] font-black text-sky-900">
                      FCRA & MCA CSR-1
                    </span>
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-stone-200 text-xs font-medium text-[#5b6a60]">
                  💡 All partners receive dedicated project coordinators, periodic ground monitoring reports, and official certificates.
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* --- DYNAMIC APPLICATION / PARTNERSHIP INQUIRY FORM --- */}
      <section id="application-form" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[40px] p-8 sm:p-12 bg-white/95 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_30px_70px_-20px_rgba(180,140,40,0.25)] space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
              <Send className="w-3.5 h-3.5 text-amber-700" /> Direct Partnership Inquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#221c0c]">
              Get Involved Application Form
            </h2>
            <p className="text-sm text-[#5b6a60] font-medium max-w-xl mx-auto">
              Fill out your details below and our program lead will reach out to you within 24–48 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Application Submitted Successfully!</h3>
              <p className="text-sm text-emerald-800 font-medium max-w-md mx-auto">
                Thank you for reaching out to EFFORT India NGO. Our partnership team will review your application for <strong>{formData.interest}</strong> and contact you shortly.
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
                    Full Name / Contact Person *
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ramesh@example.com"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Phone / WhatsApp Number *
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
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Organization / College / Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. ABC Pvt Ltd / Andhra University"
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
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  >
                    <option value="Volunteer On-Field">Grassroots On-Field Volunteer</option>
                    <option value="Digital Volunteer">Digital / Remote Volunteer</option>
                    <option value="Corporate CSR Partnership">Corporate CSR Partnership (Form CSR-1)</option>
                    <option value="Institutional & Govt Alliance">Institutional & Govt Alliance</option>
                    <option value="Student Internship / Fellowship">Student Internship / Academic Fellowship</option>
                    <option value="Individual Donor / Community Supporter">Individual Donor / Community Champion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Preferred State / Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Andhra Pradesh, Telangana, Maharashtra..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                  Message / Specific Project Proposal
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your goals, availability, skills, or proposed project mandate..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#221c0c] hover:bg-black text-[#f7e4a3] border border-[#d4af6a] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-400" /> Submit Get Involved Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- INSTITUTIONAL & CSR PARTNER SHOWCASE --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[36px] p-8 sm:p-10 bg-gradient-to-b from-[#1a140b] to-[#120e08] text-white border-2 border-[#d4af6a]/60 shadow-2xl space-y-8">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
              <Building2 className="w-3.5 h-3.5 text-amber-400" /> Trusted Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
              Our Institutional & CSR Partners
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-medium">
              Join leading government bodies, international development agencies, and CSR funders working with EFFORT India NGO.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {partnerLogos.map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
                <p className="text-sm font-black text-amber-300">{p.name}</p>
                <p className="text-[10px] text-stone-400 font-bold uppercase">{p.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FREQUENTLY ASKED QUESTIONS (FAQ) --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
              <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Need Help?
            </span>
            <h2 className="text-3xl font-black text-[#221c0c]">Frequently Asked Questions</h2>
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

      {/* --- GOVERNANCE FOOTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Independent Verification & Governance
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            100% Certified & Compliant Organization
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT India NGO maintains active Society Registration (340/1999), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval, NITI Aayog DARPAN ID, Social Stock Exchange (SSE) listing, and TISS National Hub Empanlement.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Society Reg 340/1999</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G Tax Exempt</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Section 12AB Approved</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NITI Aayog Darpan ID</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MCA Form CSR-1</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> SSE Listed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TISS Empaneled</span>
          </div>
        </div>
      </section>
    </div>
  );
}
