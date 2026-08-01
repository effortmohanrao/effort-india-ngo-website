"use client";

import React, { useState } from "react";
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
  Baby,
  Handshake,
  TrendingUp,
} from "lucide-react";
import IndiaMap, { IMPACT_STATES, StateData } from "@/components/IndiaMap";

export default function ImpactPage() {
  const [selectedCode, setSelectedCode] = useState<string>("IN-AP");
  const selectedState: StateData = IMPACT_STATES[selectedCode] ?? IMPACT_STATES["IN-AP"];

  const statCards = [
    { title: "5,00,000+", subtitle: "Beneficiaries Empowered", icon: Users, desc: "Direct rural outreach across 10 states" },
    { title: "50+", subtitle: "Projects Completed", icon: Award, desc: "100% verified field completion rate" },
    { title: "10 States", subtitle: "National Footprint", icon: Globe, desc: "Across South, Central & North India" },
    { title: "1,200+", subtitle: "Villages Transformed", icon: MapPin, desc: "Sustainable agriculture & water security" },
  ];

  const impactPillars = [
    {
      title: "Sustainable Agriculture & IPM",
      icon: Sprout,
      stat: "4.5 Lakh+ Farmers",
      desc: "Integrated Pest Management, organic farming capacity building, Direct Seeded Rice (DSR) technology, and mustard bee pollination.",
      badge: "Agricultural Innovation",
      color: "emerald",
    },
    {
      title: "Water & Natural Resource Management",
      icon: Droplets,
      stat: "100+ Watersheds",
      desc: "Tank desilting, rainwater harvesting structures, soil conservation, and drought mitigation across rainfed agricultural zones.",
      badge: "Climate Resilience",
      color: "sky",
    },
    {
      title: "Women & Tribal Livelihoods",
      icon: Handshake,
      stat: "15,000+ Women",
      desc: "SHG vermi-compost units, garment tailoring collectives, Wadi tribal horticulture plantations, and micro-entrepreneurship.",
      badge: "Livelihood Security",
      color: "amber",
    },
    {
      title: "Community Health & Education",
      icon: HeartPulse,
      stat: "65,000+ Checkups",
      desc: "Mobile Medical Clinic Vans in remote villages, school sanitation & hygiene (SAHY), and child labor eradication bridging schools.",
      badge: "Community Care",
      color: "rose",
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
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> 27 Years of Measurable Field Footprint
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] max-w-4xl mx-auto leading-[1.12]">
          Our Impact & Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">India Map</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5b6a60] max-w-2xl mx-auto font-medium leading-relaxed">
          From rainfed drought mitigation in Andhra Pradesh to Direct Seeded Rice in Punjab and IPM cotton in Maharashtra — explore EFFORT India NGO’s field presence across 10 states.
        </p>
      </section>

      {/* --- CUMULATIVE STATS CARDS --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {statCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-[#e5d4a1] p-6 shadow-[0_20px_45px_-20px_rgba(120,90,30,0.2)] hover:-translate-y-1.5 hover:border-[#d4af6a] hover:shadow-[0_25px_55px_-15px_rgba(180,140,40,0.3)] transition-all duration-400"
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-5.5 h-5.5 text-amber-700" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-metallic-gold leading-none drop-shadow-sm">{card.title}</p>
              <p className="text-xs font-black uppercase tracking-wider text-[#221c0c] mt-2">{card.subtitle}</p>
              <p className="text-xs text-[#7a6f55] font-medium mt-1">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CENTRAL INTERACTIVE INDIA MAP & STATE DASHBOARD --- */}
      <section id="map-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
            <Globe className="w-3.5 h-3.5 text-emerald-600" /> Live Field Operations Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#221c0c]">
            Explore State-Wise Operations
          </h2>
          <p className="text-sm text-[#5b6a60] font-medium">
            Click on any highlighted state on the map or select from the quick-switch pills below to inspect field project data, partner credentials, and beneficiary outreach.
          </p>
        </div>

        {/* State Selector Quick Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {Object.values(IMPACT_STATES).map((state) => {
            const isSelected = selectedCode === state.code;
            return (
              <button
                key={state.code}
                onClick={() => setSelectedCode(state.code)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-wide transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
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

        {/* Interactive Map & State Detail Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive India Map */}
          <div className="lg:col-span-7">
            <IndiaMap selectedStateCode={selectedCode} onSelectState={(code) => setSelectedCode(code)} />
          </div>

          {/* Right Column: Dynamic Selected State Dashboard */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[36px] p-6 sm:p-8 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_65px_-20px_rgba(180,140,40,0.3)] space-y-6">
              {/* State Header */}
              <div className="space-y-3 pb-4 border-b border-[#e5d4a1]">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Active Operations Hub
                  </span>
                  <span className="text-xs font-black text-metallic-gold">{selectedState.villages}</span>
                </div>
                <h3 className="text-3xl font-black text-[#221c0c] tracking-tight">{selectedState.name}</h3>
                <p className="text-xs sm:text-sm text-[#5b6a60] leading-relaxed font-medium">{selectedState.description}</p>
              </div>

              {/* Flagship Project Highlight Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 to-emerald-50/80 border border-[#d4af6a]/50 shadow-sm space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">Flagship Initiative</span>
                <p className="text-sm font-black text-[#221c0c] leading-snug">{selectedState.flagshipProject}</p>
              </div>

              {/* Stat Numbers Grid */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-200">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f] block">Total Projects</span>
                  <p className="text-2xl font-black text-[#221c0c] mt-0.5">{selectedState.projectsCount} Delivered</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f] block">Direct Reach</span>
                  <p className="text-2xl font-black text-emerald-700 mt-0.5">{selectedState.beneficiaries}</p>
                </div>
              </div>

              {/* Districts Covered */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Key Districts Covered</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedState.districts.map((d, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-[#d4af6a]/50 text-xs font-bold text-[#4a3a18] shadow-xs">
                      <MapPin className="w-3 h-3 text-[#c9a24a]" /> {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Funding & Institutional Partners */}
              <div className="space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#221c0c]">Funding & Institutional Partners</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedState.partners.map((p, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-black text-emerald-900 shadow-xs">
                      <Building2 className="w-3 h-3 text-emerald-600" /> {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="pt-2">
                <Link
                  href="/programs"
                  className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs uppercase tracking-wider rounded-full hover:shadow-[0_15px_30px_-10px_rgba(5,150,105,0.5)] transition-all duration-300"
                >
                  View All Completed & Ongoing Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4 CORE IMPACT INTERVENTION PILLARS --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#c9a24a]" /> Core Impact Domains
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#221c0c]">
            4 Strategic Intervention Pillars
          </h2>
          <p className="text-base text-[#5b6a60] font-medium leading-relaxed">
            Our data-backed interventions address long-term rural self-reliance across sustainable farming, soil and water protection, women-led micro-enterprises, and community healthcare access.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impactPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-[32px] p-7 sm:p-8 bg-white/85 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_20px_50px_-20px_rgba(120,90,30,0.2)] hover:-translate-y-1.5 hover:border-[#d4af6a] hover:shadow-[0_30px_65px_-20px_rgba(180,140,40,0.35)] transition-all duration-500 space-y-4 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-6 h-6 text-amber-700" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-wider text-[#8a6a1f]">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#221c0c] tracking-tight">{pillar.title}</h3>
              <p className="text-sm text-[#5b6a60] font-medium leading-relaxed">{pillar.desc}</p>

              <div className="pt-4 border-t border-[#e5d4a1] flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-[#8a6a1f]">Direct Outreach</span>
                <span className="text-lg font-black text-emerald-700">{pillar.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INDEPENDENT AUDIT & CREDENTIAL FOOTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Independent Verification & Governance
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            Audited Transparency & Government Endorsements
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto leading-relaxed font-medium">
            EFFORT India NGO undergoes rigorous third-party impact assessments, government compliance audits, and CSR evaluation reviews by institutional partners including NABARD, Spices Board, and international funding bodies.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G & 12A Certified NGO</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Independent CSR Audit Verified</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 27 Years Unbroken Record</span>
          </div>
        </div>
      </section>
    </div>
  );
}
