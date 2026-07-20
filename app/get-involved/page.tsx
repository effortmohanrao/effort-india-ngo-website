"use client";

import React, { useState } from "react";
import { 
  Users, 
  Briefcase, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function GetInvolved() {
  const [activeSegment, setActiveSegment] = useState("volunteer");

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Make a difference
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Get Involved
        </h1>
        <p className="text-slate-655 text-lg max-w-2xl mx-auto">
          Whether you are an individual wanting to volunteer, a student looking for an internship, or a corporate CSR team, there is a place for you.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 max-w-xl mx-auto">
          {[
            { label: "Volunteer With Us", val: "volunteer", icon: Users },
            { label: "Corporate CSR Partnerships", val: "csr", icon: Heart },
            { label: "Internships & Careers", val: "careers", icon: Briefcase }
          ].map((seg) => (
            <button
              key={seg.val}
              onClick={() => setActiveSegment(seg.val)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeSegment === seg.val
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-102"
                  : "bg-white/80 backdrop-blur-md border border-slate-200/50 text-slate-650 hover:bg-slate-50"
              }`}
            >
              <seg.icon className="w-4 h-4" />
              {seg.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- SEGMENT CONTENT --- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Volunteer Segment */}
        {activeSegment === "volunteer" && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-8 sm:p-10 shadow-lg space-y-8 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Become a Change Volunteer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Join our network of 500+ active volunteers across India. Support our teaching drives, medical camps, or administrative campaigns.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Teaching rural kids on weekends</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Organizing local donation drives</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Content creation & writing support</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Medical camp coordination assistance</li>
            </ul>

            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Full Name</label>
                <input type="text" placeholder="e.g. Ramesh Sharma" className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
                <input type="email" placeholder="e.g. ramesh@work.com" className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">How would you like to contribute?</label>
                <textarea rows={3} placeholder="Tell us about your interests, skills, or past experience..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required></textarea>
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Submit Volunteer Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Corporate CSR Segment */}
        {activeSegment === "csr" && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-8 sm:p-10 shadow-lg space-y-8 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Corporate CSR Partnership</h3>
              <p className="text-slate-655 text-sm leading-relaxed">
                Partner with Effort India NGO to meet your corporate social responsibility goals. We provide auditable, transparent reports and custom project interventions.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Direct Funding</h4>
                <p className="text-xs text-slate-500">Fund an entire rural primary school block or mobile medical clinic diagnostic unit.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Employee Giving</h4>
                <p className="text-xs text-slate-500">Enable salary contribution models or employee volunteer day events.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Impact Audits</h4>
                <p className="text-xs text-slate-500">Every project has transparent milestone reports, certificates, and audits.</p>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Company Name</label>
                <input type="text" placeholder="e.g. Apex Industries Ltd" className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Contact Person Email</label>
                <input type="email" placeholder="e.g. csr@apex.com" className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Briefly outline your CSR goals</label>
                <textarea rows={3} placeholder="Preferred locations, sector focus (health/education), or budget constraints..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-205 focus:border-emerald-600 focus:outline-hidden text-sm" required></textarea>
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Initiate Partnership Query <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Careers Segment */}
        {activeSegment === "careers" && (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-8 sm:p-10 shadow-lg space-y-8 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-slate-900">Internship & Career Opportunities</h3>
              <p className="text-slate-655 text-sm leading-relaxed">
                Work on the ground. We offer student internships (2-6 months) and full-time employment roles for program managers and field coordinators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl border border-slate-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-500/30 transition-all">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Rural Program Coordinator</h4>
                  <p className="text-xs text-slate-400 mt-1">Full-time | Location: Jaipur Rural Office</p>
                </div>
                <button className="px-4 py-2 bg-slate-950 text-white hover:bg-slate-805 font-bold text-xs rounded-lg transition-colors cursor-pointer">Apply Job</button>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-500/30 transition-all">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Social Work Intern</h4>
                  <p className="text-xs text-slate-400 mt-1">Internship (3 months) | Location: Odisha Coastal Villages</p>
                </div>
                <button className="px-4 py-2 bg-slate-950 text-white hover:bg-slate-805 font-bold text-xs rounded-lg transition-colors cursor-pointer">Apply Internship</button>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
