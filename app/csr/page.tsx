"use client";

import React, { useState } from "react";
import { 
  Building, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Award
} from "lucide-react";

export default function CSR() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCSRSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const sponsorOptions = [
    {
      title: "Educate a Village School",
      desc: "Provide smart TVs, digital curriculums, and clean drinking water units for 200+ kids.",
      budget: "₹3.5L / village school"
    },
    {
      title: "Deploy a Mobile Health Clinic",
      desc: "Fund a primary care diagnostic medical van, driver, nurse, and medicines for a full year.",
      budget: "₹12.0L / year deployment"
    },
    {
      title: "Women Tailoring SHG Collective",
      desc: "Equip 15 sewing machines, build training space, and fund micro-grants for local startup inventory.",
      budget: "₹2.0L / collective"
    }
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
            <Building className="w-3.5 h-3.5 text-emerald-600" /> CSR Partnership Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Corporate Social Responsibility
          </h1>
          <p className="text-slate-655 text-lg">
            Let's collaborate on high-impact projects. Effort India offers fully audited compliance, tax savings, and milestone reports.
          </p>
        </div>

        {/* CSR Exemption details */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 mb-16 grid md:grid-cols-3 gap-8 border border-emerald-900/50 relative overflow-hidden">
          <div className="space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <h4 className="font-bold text-base">CSR Registration ID</h4>
            <p className="text-xs text-slate-300">Registered with Ministry of Corporate Affairs for CSR operations.</p>
            <div className="text-xs font-mono bg-emerald-900/50 p-2 rounded-lg text-emerald-300 inline-block">CSR00034988</div>
          </div>
          <div className="space-y-2">
            <Award className="w-8 h-8 text-amber-400" />
            <h4 className="font-bold text-base">Section 80G Approval</h4>
            <p className="text-xs text-slate-300">100% tax exemption on donations made by corporate entities in India.</p>
            <div className="text-xs font-mono bg-emerald-900/50 p-2 rounded-lg text-emerald-305 inline-block">CIT (Exempt) Approved</div>
          </div>
          <div className="space-y-2">
            <FileText className="w-8 h-8 text-sky-400" />
            <h4 className="font-bold text-base">Impact Evaluation Audits</h4>
            <p className="text-xs text-slate-300">We provide transparent third-party project reviews & completion reports.</p>
            <div className="text-xs font-mono bg-emerald-900/50 p-2 rounded-lg text-sky-300 inline-block">Quarterly Audits</div>
          </div>
        </div>

        {formSubmitted ? (
          /* Submission Success Screen */
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-xl border border-emerald-100/50 rounded-3xl p-8 text-center space-y-6 shadow-xl animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">Partnership Inquiry Submitted</h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. A Senior Program Manager from our CSR alliance desk will email you our presentation decks within 24 hours.
              </p>
            </div>
            <button 
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-805 text-white font-bold text-xs shadow-md transition-colors"
            >
              Back to Partnerships
            </button>
          </div>
        ) : (
          /* Form & Options Grid */
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Left (7 cols) */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-6 md:p-10 shadow-lg space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-905">Initiate CSR Collaboration</h3>
                <p className="text-xs text-slate-500 mt-1">Submit your details and preferences to schedule an alliance call.</p>
              </div>

              <form onSubmit={handleCSRSubmit} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Designation / Role</label>
                  <input type="text" placeholder="e.g. CSR Director" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contact Person Email</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Select Target Sector</label>
                  <select className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm">
                    <option>Shiksha: Quality Education</option>
                    <option>Sanjeevani: Mobile Health Access</option>
                    <option>Swavalamban: Livelihood & Skilling</option>
                    <option>Hariyali: Agroforestry & Afforestation</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Detailed Partnership Query</label>
                  <textarea rows={4} placeholder="Sponsor targets, geographic preferences, or budget parameters..." className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required></textarea>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2">
                    Submit Corporate Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Sponsorship Targets Right (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-md space-y-6">
                <h4 className="font-bold text-slate-905 text-sm flex items-center gap-2">
                  <Building className="w-4 h-4 text-emerald-600" />
                  Sponsorship Opportunities
                </h4>

                <div className="space-y-4">
                  {sponsorOptions.map((opt, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/50 space-y-2">
                      <div className="flex justify-between items-center">
                        <strong className="text-slate-800 font-bold text-xs sm:text-sm">{opt.title}</strong>
                        <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg shrink-0">{opt.budget}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
