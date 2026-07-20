"use client";

import React from "react";
import { 
  ShieldCheck, 
  FileText, 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Building,
  UserCheck
} from "lucide-react";

export default function Transparency() {
  const reports = [
    { title: "Annual Activity Report 2024-25", format: "PDF", size: "3.4 MB", desc: "Outlines rural schools built, health checkup milestones, and skilling center placements." },
    { title: "Audited Financial Statements FY 2023-24", format: "PDF", size: "1.9 MB", desc: "Full balance sheets, receipt & payment audits certified by Chartered Accountants." },
    { title: "FCRA Annual Return FC-4 (2023)", format: "PDF", size: "1.2 MB", desc: "Returns submitted to Ministry of Home Affairs regarding foreign funding details." },
    { title: "CSR Project Completion Audits 2024", format: "PDF", size: "2.1 MB", desc: "Third-party impact evaluation reports for corporate CSR funded projects." }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-650 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Audited & Accountable
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Transparency & Governance
          </h1>
          <p className="text-slate-655 text-lg">
            We values donor trust above all. Access audited sheets, compliance certificates, and governance files below.
          </p>
        </div>

        {/* Credentials Panel */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-605 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">80G & 12A Verified</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Donations are exempt from income tax under Section 80G. Approved by the Commissioner of Income Tax.
            </p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded-lg text-slate-500">
              Unique ID: AACTE8492DF20214
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">CSR Compliant</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Registered under Ministry of Corporate Affairs for executing CSR projects in India.
            </p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded-lg text-slate-500">
              Registration ID: CSR00034988
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">FCRA Registered</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Fully authorized under Foreign Contribution Regulation Act to safely accept foreign funding.
            </p>
            <div className="text-[10px] font-mono bg-slate-50 p-2 rounded-lg text-slate-500">
              Registration No: 094280384
            </div>
          </div>
        </div>

        {/* Audit Downloads List */}
        <div className="bg-white/85 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Financial Reports & filings</h3>
            <p className="text-xs text-slate-500 mt-1">Download official PDF returns and third-party audit reports.</p>
          </div>

          <div className="space-y-4">
            {reports.map((rep, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-slate-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:border-emerald-500/30 transition-all duration-300 group bg-white/50"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{rep.title}</h4>
                    <p className="text-xs text-slate-450">{rep.desc}</p>
                  </div>
                </div>

                <a 
                  href="#"
                  className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 shrink-0 self-stretch sm:self-auto justify-center cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  Download {rep.format} ({rep.size})
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
