"use client";

import React from "react";
import { 
  ShieldCheck, 
  FileText, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Landmark,
  Globe2,
  Fingerprint,
  TrendingUp,
  Award,
  BadgeCheck
} from "lucide-react";

export default function Transparency() {
  const registrations = [
    {
      title: "Society Registration Certificate (RC)",
      authority: "Government of Andhra Pradesh (Societies Reg. Act XXI of 1860)",
      identifier: "Reg. No. 340/1999",
      desc: "Officially registered non-profit developmental society serving since 1999.",
      icon: Landmark,
    },
    {
      title: "80G Tax Exemption Certificate",
      authority: "Income Tax Department, Government of India",
      identifier: "Section 80G Renewal",
      desc: "Provides 50% tax deduction benefits to individual & corporate donors under Section 80G.",
      icon: ShieldCheck,
    },
    {
      title: "12AB Income Tax Registration",
      authority: "Income Tax Department, Government of India",
      identifier: "Section 12AB Renewal",
      desc: "Certified tax-exempt charitable institution under Section 12AB of the Income Tax Act.",
      icon: FileText,
    },
    {
      title: "FCRA Registration",
      authority: "Ministry of Home Affairs, Government of India",
      identifier: "FCRA Renewal Active",
      desc: "Fully authorized under Foreign Contribution Regulation Act to receive international funding.",
      icon: Globe2,
    },
    {
      title: "NITI Aayog DARPAN Registration",
      authority: "NITI Aayog, Government of India",
      identifier: "NITI DARPAN Unique ID",
      desc: "Validated on NITI Aayog NGO-Darpan Portal for central government partnership eligibility.",
      icon: Fingerprint,
    },
    {
      title: "Form CSR-1 Approval",
      authority: "Ministry of Corporate Affairs, Government of India",
      identifier: "MCA Form CSR-1 Approved",
      desc: "Eligible and approved for corporate CSR project execution under Companies Act Schedule VII.",
      icon: Building2,
    },
    {
      title: "Social Stock Exchange (SSE) Listed",
      authority: "National Stock Exchange / SSE India",
      identifier: "SSE Approved Enterprise",
      desc: "Listed and approved social enterprise on India's Social Stock Exchange.",
      icon: TrendingUp,
    },
    {
      title: "TISS National Hub Certificate",
      authority: "Tata Institute of Social Sciences (TISS)",
      identifier: "TISS Empaneled Partner",
      desc: "Empaneled and certified for social development projects by TISS National CSR Hub.",
      icon: Award,
    },
  ];

  return (
    <div className="bg-[#fdfaf4] text-[#221c0c] min-h-screen py-16 relative overflow-hidden">
      
      {/* Background Liquid Aurora */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-amber-100/50 blur-[130px] animate-liquid-drift-a" />
        <div className="absolute top-1/2 right-10 w-[550px] h-[550px] rounded-full bg-emerald-100/40 blur-[130px] animate-liquid-drift-b" />
        <div className="absolute inset-0 bg-noise opacity-[0.2]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Audited & Government Compliant
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#221c0c] tracking-tight leading-tight">
            Official Registrations & Governance Credentials
          </h1>
          <p className="text-[#5b6a60] text-base sm:text-lg font-medium leading-relaxed">
            EFFORT India NGO maintains full legal compliance across all 8 national regulatory bodies, ensuring transparent governance, CSR eligibility, and 27 years of unbroken trust.
          </p>
        </div>

        {/* Official 8 Registrations Grid (Publicity Showcase) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {registrations.map((reg, idx) => (
            <div 
              key={idx}
              className="bg-white/85 backdrop-blur-xl border-2 border-[#e5d4a1] rounded-[28px] p-6 shadow-[0_15px_40px_-15px_rgba(120,90,30,0.15)] hover:-translate-y-1.5 hover:border-[#d4af6a] transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shadow-xs">
                    <reg.icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                  </span>
                </div>
                <h3 className="font-black text-[#221c0c] text-base leading-snug">{reg.title}</h3>
                <p className="text-xs font-black text-[#8a6a1f]">{reg.identifier}</p>
                <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">{reg.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#e5d4a1]">
                <p className="text-[10px] font-bold text-[#7a6f55] uppercase tracking-wider">{reg.authority}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Integrity Statement Card */}
        <div className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#1a140b] to-[#271d10] text-white border-2 border-[#d4af6a]/60 shadow-[0_25px_60px_-20px_rgba(0,0,0,0.8)] text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <BadgeCheck className="w-4 h-4 text-emerald-400" /> 27 Years of Clean Record
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            Full Public & Corporate Compliance Ready
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto font-medium leading-relaxed">
            All 8 official statutory registrations are active and regularly renewed. EFFORT India NGO is fully authorized to partner with Central & State Governments, International Agencies, and Corporate CSR entities.
          </p>
        </div>

      </div>

    </div>
  );
}
