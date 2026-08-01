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
  Trees,
  TrendingUp,
  Coins,
  IndianRupee,
} from "lucide-react";
import IndiaMap, { IMPACT_STATES, StateData } from "@/components/IndiaMap";

export default function ImpactPage() {
  const [selectedCode, setSelectedCode] = useState<string>("IN-AP");
  const selectedState: StateData = IMPACT_STATES[selectedCode] ?? IMPACT_STATES["IN-AP"];

  const statCards = [
    { title: "90 Projects", subtitle: "Total Executed & Ongoing", icon: Award, desc: "75 Completed + 15 Active (1999–2026)" },
    { title: "2.67 Lakh", subtitle: "Families Empowered", icon: Users, desc: "2,67,439 Farmers & Villagers Reached" },
    { title: "₹50.07 Cr", subtitle: "Spent (2022–2025)", icon: IndianRupee, desc: "Direct Field Development Budget" },
    { title: "2,317", subtitle: "Villages & 42 Districts", icon: MapPin, desc: "Footprint Across 10 States" },
  ];

  {/* Water Harvesting Milestones from PDF Slide 7 */}
  const waterMilestones = [
    { type: "Check Dams Constructed", structures: "1,004", villages: "218", farmers: "52,757", acres: "59,280", capacity: "24.76 Lakh m³" },
    { type: "Farm Ponds Built", structures: "1,239", villages: "114", farmers: "1,471", acres: "5,245", capacity: "3.71 Lakh m³" },
    { type: "Percolation Tanks", structures: "61", villages: "61", farmers: "8,180", acres: "23,060", capacity: "3.31 Lakh m³" },
    { type: "Tank Renovations & Repairs", structures: "131", villages: "73", farmers: "9,468", acres: "14,457", capacity: "3.80 Lakh m³" },
    { type: "Sunken Ponds", structures: "267", villages: "62", farmers: "655", acres: "1,020", capacity: "77,100 m³" },
  ];

  {/* Thematic Pillars */}
  const impactPillars = [
    {
      title: "Sustainable Agriculture & Climate Farming",
      icon: Sprout,
      stat: "2,67,439 Farmers",
      desc: "Integrated Pest Management (IPM), 1,68,500 farmers capacitated across 1.03 lakh acres. Direct Seeded Rice (DSR) in Punjab/UP saving 35% water, and 14,100 farmers adopting crop diversification (20% cost reduction, 30-50% income growth).",
      badge: "Sustainable Agriculture",
      color: "emerald",
    },
    {
      title: "Water & Natural Resource Management",
      icon: Droplets,
      stat: "1.07 Cr m³ Water Harvested",
      desc: "Constructed 2,702 water harvesting structures across 528 villages benefiting 75,092 farmers over 1,03,062 acres with 35.59 Lakh m³ water storage capacity.",
      badge: "Water Security",
      color: "sky",
    },
    {
      title: "Collectives, FPOs & Women SHGs",
      icon: TrendingUp,
      stat: "42 FPOs & 1,275 SHGs",
      desc: "Promoted 42 FPOs (23,352 shareholders, ₹2.53 Cr capital, ₹1.07 Cr equity grants), 1,275 SHGs (14,750 women, ₹1.495 Billion external lending), and 51 MACS co-ops.",
      badge: "Community Ownership",
      color: "amber",
    },
    {
      title: "Social Development, WASH & Child Welfare",
      icon: HeartPulse,
      stat: "2,011 Children & 50 RO Plants",
      desc: "Rehabilitated 2,011 child labourers (21 child-labour-free villages), distributed 1,000 girl student bicycles, established 50 community RO plants (16,000 families), and 3 Biodiversity Conservation Parks (50,000 native species).",
      badge: "Social Welfare",
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
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> 27 Years of Journey (1999 – 2026)
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] max-w-4xl mx-auto leading-[1.12]">
          Our Impact & Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">India Field Map</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5b6a60] max-w-3xl mx-auto font-medium leading-relaxed">
          Founded in 1999 in Martur, Prakasam District, Andhra Pradesh — EFFORT India NGO has executed 75 completed projects and 15 active initiatives across 10 states, empowering 2.67 lakh rural families.
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
            <Globe className="w-3.5 h-3.5 text-emerald-600" /> Authentic GIS Field Operations Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#221c0c]">
            Explore 10-State Field Presence
          </h2>
          <p className="text-sm text-[#5b6a60] font-medium">
            Click on any highlighted state on the map or select from the state pills to inspect verified field statistics, funding partner credentials, and project outcomes.
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
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Active Field Hub
                  </span>
                  <span className="text-xs font-black text-metallic-gold">{selectedState.villages}</span>
                </div>
                <h3 className="text-3xl font-black text-[#221c0c] tracking-tight">{selectedState.name}</h3>
                <p className="text-xs sm:text-sm text-[#5b6a60] leading-relaxed font-medium">{selectedState.description}</p>
              </div>

              {/* Flagship Project Highlight Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-50/80 to-emerald-50/80 border border-[#d4af6a]/50 shadow-sm space-y-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">Flagship Project</span>
                <p className="text-sm font-black text-[#221c0c] leading-snug">{selectedState.flagshipProject}</p>
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
                  Explore All 90 Completed & Active Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WATER HARVESTING & NRM MILESTONES TABLE SHOWCASE --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[36px] p-8 sm:p-10 bg-gradient-to-b from-[#1a140b] to-[#120e08] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d4af6a]/30 pb-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
                <Droplets className="w-4 h-4 text-sky-400" /> Verified Field Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#f7e4a3] tracking-tight">
                Natural Resource & Water Conservation Impact
              </h2>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-3xl font-black text-emerald-400">1.07 Crore m³</p>
              <p className="text-xs text-stone-300 font-bold uppercase tracking-wider">Annual Water Harvested</p>
            </div>
          </div>

          {/* Water Structure Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#d4af6a]/30 text-[#d4af6a] uppercase font-black tracking-wider text-[11px]">
                  <th className="py-3 px-4">Water Structure Type</th>
                  <th className="py-3 px-4">Villages</th>
                  <th className="py-3 px-4">Structures Built</th>
                  <th className="py-3 px-4">Farmers Benefited</th>
                  <th className="py-3 px-4">Acres Covered</th>
                  <th className="py-3 px-4">Storage Capacity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800 text-stone-200 font-medium">
                {waterMilestones.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-900/20 transition-colors">
                    <td className="py-3.5 px-4 font-black text-white">{row.type}</td>
                    <td className="py-3.5 px-4">{row.villages}</td>
                    <td className="py-3.5 px-4 font-black text-amber-400">{row.structures}</td>
                    <td className="py-3.5 px-4 font-black text-emerald-400">{row.farmers}</td>
                    <td className="py-3.5 px-4">{row.acres}</td>
                    <td className="py-3.5 px-4 text-sky-300 font-bold">{row.capacity}</td>
                  </tr>
                ))}
                <tr className="bg-amber-950/60 font-black text-[#f7e4a3] text-sm border-t-2 border-[#d4af6a]">
                  <td className="py-4 px-4">TOTAL WATER HARVESTING FOOTPRINT</td>
                  <td className="py-4 px-4">528 Villages</td>
                  <td className="py-4 px-4 text-amber-400">2,702 Built</td>
                  <td className="py-4 px-4 text-emerald-400">75,092 Farmers</td>
                  <td className="py-4 px-4">1,03,062 Acres</td>
                  <td className="py-4 px-4 text-sky-300">35.59 Lakh m³ Total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --- 4 CORE THEMATIC IMPACT PILLARS --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
            <Award className="w-3.5 h-3.5 text-[#c9a24a]" /> Core Development Domains
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
            Audited Transparency & Institutional Endorsements
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT India NGO undergoes third-party impact assessments, government compliance audits, FCRA registration, and NITI Aayog (Darpan Portal) validation with partners including NABARD, Spices Board, Bayer, Syngenta, and IFAD.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G & 12A Compliant</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NITI Aayog Darpan Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> GST Act Compliant</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 27 Years Unbroken Record</span>
          </div>
        </div>
      </section>
    </div>
  );
}
