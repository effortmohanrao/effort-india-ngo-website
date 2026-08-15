"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Activity,
  ArrowRight,
  ShieldCheck,
  Building2,
  Sprout,
  Droplets,
  HeartPulse,
  Trees,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Layers,
  CheckCircle,
  Clock,
  ExternalLink,
} from "lucide-react";
import IndiaMap, { IMPACT_STATES, StateData } from "@/components/IndiaMap";
import CategorizedImpactLedger from "@/components/CategorizedImpactLedger";


export default function ImpactPage() {
  const [selectedCode, setSelectedCode] = useState<string>("IN-AP");
  const selectedState: StateData = IMPACT_STATES[selectedCode] ?? IMPACT_STATES["IN-AP"];
  const [statePhotos, setStatePhotos] = useState<{ key: string; url: string }[]>([]);

  useEffect(() => {
    const folders = selectedState.photoFolders ?? [];
    if (folders.length === 0) {
      setStatePhotos([]);
      return;
    }
    let cancelled = false;
    Promise.all(
      folders.map((f) =>
        fetch(`/api/site/media?prefix=programs/${f.status}/${f.folder}`, { cache: "no-store" })
          .then((res) => res.json())
          .then((data) => data.images?.[0] ?? null)
      )
    ).then((covers) => {
      if (!cancelled) setStatePhotos(covers.filter(Boolean));
    });
    return () => {
      cancelled = true;
    };
  }, [selectedState]);



  {/* 5 Comprehensive Strategic Impact Sectors (80 Total Projects: 65 Completed + 15 Ongoing) */}
  const impactDomains = [
    {
      id: "agri",
      title: "Sustainable Agriculture & Farmers' Prosperity",
      icon: Sprout,
      totalCount: "39 Projects",
      completedCount: "33 Completed",
      ongoingCount: "6 Active",
      stat: "1,68,500+ Farmers Capacitated",
      desc: "Integrated Pest Management (IPM), Direct Seeded Rice (DSR saving 35% water), crop diversification (20% cost reduction, 30-50% income growth), organic farming, mustard bee-pollination, and Rythu Bazaars direct market access.",
      highlights: ["IPM in Chilli & Cotton (450K+ Farmers trained)", "SRI & DSR Rice (100K Acres)", "Rythu Bazaars & Wayside Farmer Markets"],
      badge: "Agriculture & IPM",
    },
    {
      id: "fpo",
      title: "Collectives, FPOs & Women Empowerment",
      icon: TrendingUp,
      totalCount: "12 Projects",
      completedCount: "9 Completed",
      ongoingCount: "3 Active",
      stat: "38,102 Collective Members",
      desc: "Promoted 42 Farmer Producer Organizations (23,352 farmer shareholders), 1,275 Women Self-Help Groups (14,750 women members), and 51 MACS Cooperatives enabling self-reliant micro-enterprises and sustainable micro-credit.",
      highlights: ["42 FPOs (NABARD & Govt. Funded)", "1,275 Women SHGs & 51 MACS Co-ops", "Income Generation Units (₹10,000/mo extra income)"],
      badge: "Livelihoods & FPOs",
    },
    {
      id: "nrm",
      title: "Natural Resource & Watershed Management",
      icon: Trees,
      totalCount: "12 Projects",
      completedCount: "8 Completed",
      ongoingCount: "4 Active",
      stat: "528 Villages & 1,03,062 Acres",
      desc: "Comprehensive watershed development (NABARD WDF & IWMP), constructed 2,702 soil & water conservation structures (1.07 Cr m³/yr water harvested), created 3 Biodiversity Conservation Parks with 50,000 native flora species.",
      highlights: ["90 Watershed Projects (NABARD RSO)", "2,702 Water Harvesting Structures", "3 Biodiversity Conservation Parks"],
      badge: "Environment & Watershed",
    },
    {
      id: "child",
      title: "Child Development, Education & Welfare",
      icon: GraduationCap,
      totalCount: "8 Projects",
      completedCount: "6 Completed",
      ongoingCount: "2 Active",
      stat: "2,011 Rehabilitated Children",
      desc: "Eradicated child labour through NCLP Special Schools across 21 declared Child-Labour-Free villages. Distributed 1,000 bicycles to girl students, strengthened government school amenities, and provided school sanitation (SAHY).",
      highlights: ["21 Child-Labour-Free Villages Achieved", "1,000 Bicycles for Girl Students", "Special NCLP Child Labour Schools"],
      badge: "Education & Child Rights",
    },
    {
      id: "health",
      title: "Community Health, WASH & Safe Drinking Water",
      icon: HeartPulse,
      totalCount: "9 Projects",
      completedCount: "9 Completed",
      ongoingCount: "0 Active",
      stat: "2,00,000+ Population Reached",
      desc: "Established 50 Community Reverse Osmosis (RO) Drinking Water Plants serving 16,000 families in fluoride-affected areas. Conducted AP Community Health Interventions (TB, Malaria, HIV/AIDS) and COVID-19 relief.",
      highlights: ["50 Community RO Plants (16,000 Families)", "DFID AP Health Interventions (65,000 People)", "Hospital Equipment & COVID-19 Rapid Support"],
      badge: "Health & Safe Water",
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
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> 27 Years of Journey (1999 – 2026)
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] max-w-4xl mx-auto leading-[1.12]">
          Our Impact & Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">Field Footprint</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5b6a60] max-w-3xl mx-auto font-medium leading-relaxed">
          Founded in 1999 in Martur, Prakasam District, Andhra Pradesh — EFFORT NGO has executed <strong>65 completed projects</strong> and <strong>15 active ongoing initiatives</strong> across 10 states, transforming 2.67 lakh rural lives across <strong>Sustainable Agriculture</strong>, <strong>Natural Resource Management</strong>, <strong>Community Collectives</strong>, <strong>Livelihoods</strong>, and <strong>Social Development Initiatives</strong>.
        </p>
      </section>

      {/* --- CATEGORIZED IMPACT MASTER LEDGER SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CategorizedImpactLedger />
      </section>

      {/* --- FULL-WIDTH CLEAN CREAM MAP SHOWCASE SECTION --- */}
      <section id="map-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-black uppercase tracking-[0.2em] text-emerald-900 shadow-xs">
              <Globe className="w-4 h-4 text-emerald-600" /> Official GIS Field Operations Map
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#221c0c] tracking-tight">
              10-State Operational Field Footprint
            </h2>
            <p className="text-sm sm:text-base text-[#5b6a60] font-medium leading-relaxed">
              Explore EFFORT NGO’s verified field presence across 10 Indian states. Select any highlighted state on the map or tap the pills below to inspect district hubs, flagship projects, and partner credentials.
            </p>
          </div>

          {/* State Selection Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {Object.values(IMPACT_STATES).map((state) => {
              const isSelected = selectedCode === state.code;
              return (
                <button
                  key={state.code}
                  onClick={() => setSelectedCode(state.code)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-wide transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-md scale-105"
                      : "bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-[#5a461e] hover:bg-white hover:border-[#d4af6a]"
                  }`}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-emerald-400" : "text-[#c9a24a]"}`} />
                  {state.name}
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isSelected ? "bg-amber-500/30 text-amber-200" : "bg-stone-100 text-stone-600"}`}>
                    {state.projectsCount}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Clean Map & Dynamic State Info Dashboard Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Left: Authentic Original Vector India Map on Light Cream Background */}
            <div className="lg:col-span-7">
              <IndiaMap selectedStateCode={selectedCode} onSelectState={(code) => setSelectedCode(code)} variant="light" />
            </div>

            {/* Right: Dynamic Selected State Dashboard Card */}
            <div className="lg:col-span-5">
              <div className="rounded-[32px] p-6 sm:p-8 bg-white/90 backdrop-blur-xl border-2 border-[#e5d4a1] shadow-[0_20px_50px_-15px_rgba(180,140,40,0.2)] space-y-6">
                {/* Header */}
                <div className="space-y-3 pb-4 border-b border-[#e5d4a1]">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Active Field Hub
                    </span>
                    <span className="text-xs font-black text-metallic-gold">{selectedState.villages}</span>
                  </div>
                  <h3 className="text-3xl font-black text-[#221c0c] tracking-tight">{selectedState.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5b6a60] leading-relaxed font-medium">{selectedState.description}</p>
                </div>

                {/* Flagship Project Highlight Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/90 to-emerald-50/90 border border-[#d4af6a]/50 shadow-xs space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">Flagship Project</span>
                  <p className="text-sm font-black text-[#221c0c] leading-snug">{selectedState.flagshipProject}</p>
                </div>

                {/* Real Field Photos for this state */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Field Photos</span>
                  {statePhotos.length > 0 ? (
                    <div className="grid grid-cols-4 gap-2">
                      {statePhotos.slice(0, 8).map((p) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={p.key} src={p.url} alt="" className="w-full aspect-square object-cover rounded-xl border border-[#e5d4a1]" />
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-[#8a7a5a] italic bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5">
                      No field photos on file for this state yet.
                    </p>
                  )}
                </div>

                {/* Stat Numbers Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f] block">Total Projects</span>
                    <p className="text-2xl font-black text-[#221c0c] mt-0.5">{selectedState.projectsCount} Executed</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f] block">Direct Reach</span>
                    <p className="text-2xl font-black text-emerald-700 mt-0.5">{selectedState.beneficiaries}</p>
                  </div>
                </div>

                {/* Districts Covered */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Districts Covered</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedState.districts.map((d, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-[#d4af6a]/50 text-xs font-bold text-[#4a3a18] shadow-2xs">
                        <MapPin className="w-3 h-3 text-[#c9a24a]" /> {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Funding & Institutional Partners */}
                <div className="space-y-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Funding & Governance Partners</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedState.partners.map((p, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-black text-emerald-900 shadow-2xs">
                        <Building2 className="w-3 h-3 text-emerald-600" /> {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    href="/programs"
                    className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs uppercase tracking-wider rounded-full hover:shadow-[0_15px_30px_-10px_rgba(5,150,105,0.5)] transition-all duration-300"
                  >
                    View All 80 Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE PROJECT DOMAIN SECTORS (65 COMPLETED + 15 ONGOING = 80 TOTAL) --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#c9a24a]" /> Full Spectrum of 80 Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#221c0c]">
            5 Strategic Intervention Sectors
          </h2>
          <p className="text-base text-[#5b6a60] font-medium leading-relaxed">
            EFFORT NGO’s 27-year work spans sustainable agriculture, women’s micro-cooperatives, child rights & education, community healthcare, and ecological conservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {impactDomains.map((domain) => (
            <div
              key={domain.id}
              className="group relative rounded-[32px] p-7 bg-white/85 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_20px_50px_-20px_rgba(120,90,30,0.2)] hover:-translate-y-1.5 hover:border-[#d4af6a] hover:shadow-[0_30px_65px_-20px_rgba(180,140,40,0.35)] transition-all duration-500 flex flex-col justify-between space-y-5 overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <domain.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#221c0c] border border-[#d4af6a] text-xs font-black text-[#f7e4a3]">
                    {domain.totalCount}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#221c0c] tracking-tight">{domain.title}</h3>
                
                {/* Clean Completed vs Ongoing Counter Badges */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    {domain.completedCount}
                  </span>
                  <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    {domain.ongoingCount}
                  </span>
                </div>

                <p className="text-xs font-black text-metallic-gold uppercase tracking-wide">{domain.stat}</p>
                <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">{domain.desc}</p>
              </div>

              {/* Key Bullet Highlights */}
              <div className="pt-4 border-t border-[#e5d4a1] space-y-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">Key Domain Achievements</span>
                <ul className="space-y-1.5">
                  {domain.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-[#3d3219]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* 65 Completed vs 15 Ongoing Portfolio Summary Box */}
          <div className="group relative rounded-[32px] p-7 bg-gradient-to-br from-[#1a140b] to-[#271d10] text-white border-2 border-[#d4af6a]/60 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)] flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#d4af6a]/20 border border-[#d4af6a]/50 flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-300" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black">
                  1999 – 2026
                </span>
              </div>

              <h3 className="text-xl font-black text-[#f7e4a3] tracking-tight">Verified Presentation List</h3>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Completed
                  </span>
                  <p className="text-2xl font-black text-white mt-1">65 Projects</p>
                  <p className="text-[10px] text-stone-400 font-medium">Fully Executed</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-900/80 border border-stone-800">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" /> Active
                  </span>
                  <p className="text-2xl font-black text-white mt-1">15 Projects</p>
                  <p className="text-[10px] text-stone-400 font-medium">In Field Progress</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#d4af6a]/30">
              <Link
                href="/programs"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#d4af6a] text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
              >
                Browse All 80 Programs <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDEPENDENT AUDIT & CREDENTIAL FOOTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Independent Verification & Governance
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            Audited Transparency & Institutional Endorsements
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT NGO undergoes third-party impact assessments, government compliance audits, FCRA registration, and NITI Aayog (Darpan Portal) validation with partners including NABARD, Spices Board, Bayer, Syngenta, IFAD, GIZ Germany, Corteva, and Azim Premji Foundation.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Society Reg 340/1999</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G Tax Exempt</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Section 12AB Approved</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NITI Aayog Darpan ID</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MCA Form CSR-1</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Social Stock Exchange Listed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TISS Empaneled</span>
          </div>
        </div>
      </section>
    </div>
  );
}
