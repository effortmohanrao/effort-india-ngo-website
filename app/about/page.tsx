"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Users,
  Sparkles,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Heart,
  Handshake,
  Star,
  Download,
  Eye,
  Lightbulb,
  Sprout
} from "lucide-react";

const aboutHeroLines = ["Building Hope.", "Creating Change.", "Transforming Communities."];

const aboutHeroPanels: { icon: typeof Globe2; label: string; value: string }[] = [
  { icon: Globe2, label: "Communities Served", value: "120+" },
  { icon: Heart, label: "Lives Impacted", value: "15,000+" },
  { icon: Handshake, label: "Partnerships", value: "Coming Soon" },
  { icon: Star, label: "Years of Service", value: "27+" },
];

const aboutTrustStrip: { icon: typeof Eye; label: string }[] = [
  { icon: Eye, label: "Transparency" },
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users, label: "Community" },
  { icon: Sprout, label: "Sustainability" },
  { icon: Handshake, label: "Collaboration" },
];

export default function About() {
  const [activeTimelineYear, setActiveTimelineYear] = useState(2025);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const timelineEvents = [
    {
      year: 2021,
      title: "The Genesis",
      desc: "Effort India NGO was founded by a group of passionate social innovators, starting in a single rented room in Bengaluru with 12 kids."
    },
    {
      year: 2022,
      title: "Sanjeevani Launch",
      desc: "Launched our first Mobile Medical Clinic Van, serving healthcare to 15 remote villages on a weekly schedule."
    },
    {
      year: 2023,
      title: "Swavalamban Skilling",
      desc: "Opened our first Youth IT and Women Tailoring vocational center, empowering 250+ rural individuals with jobs."
    },
    {
      year: 2024,
      title: "Digital Smart Classes",
      desc: "Equipped 15 rural government schools with digital projectors and interactive smart classrooms, impacting 5,000+ children."
    },
    {
      year: 2025,
      title: "State-wide Coverage",
      desc: "Expanded operations across three states (Karnataka, Odisha, and Rajasthan), touching over 15,000 lives."
    }
  ];

  const team = [
    {
      name: "Dr. Ananya Rao",
      role: "Founder & Executive Director",
      bio: "An alumnus of TISS with 15+ years in community development and public healthcare initiatives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mr. Rajeev Hegde",
      role: "Co-Founder & Head of Operations",
      bio: "Tech entrepreneur turned social worker. Manages ground projects and multi-state compliance systems.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Prof. S. Chakrabarti",
      role: "Board Member & Educational Advisor",
      bio: "Former Director at NCERT. Advises on rural curriculum building and bridging programs for dropouts.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const documents = [
    { name: "Annual Activity Report 2024-25", size: "3.2 MB", date: "April 2025" },
    { name: "Audited Financial Statements 2024", size: "1.8 MB", date: "Oct 2024" },
    { name: "FCRA Returns Certificate 2023-24", size: "1.1 MB", date: "Dec 2024" },
    { name: "Income Tax Exemption Form 80G", size: "0.9 MB", date: "Active" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background gradients */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- ABOUT US HERO BANNER --- */}
      <section className="relative overflow-hidden -mt-12 pt-12 pb-16 lg:pb-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" />
          <div className="absolute top-[-10%] left-[10%] w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] right-[10%] w-[380px] h-[380px] bg-emerald-200/25 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute top-[45%] left-[45%] w-[280px] h-[280px] bg-purple-100/25 rounded-full blur-[120px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#0369a1_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left 45% */}
            <div className="lg:col-span-5">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> About Our Organization
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] mt-4">
                {aboutHeroLines.map((line, i) => (
                  <span
                    key={line}
                    className={`block transition-all duration-700 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    } ${i === 1 ? "bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent" : ""}`}
                    style={{ transitionDelay: `${150 + i * 120}ms` }}
                  >
                    {line}
                  </span>
                ))}
              </h1>

              <p
                className={`text-slate-600 text-base sm:text-lg leading-relaxed mt-5 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "550ms" }}
              >
                Effort India is a registered society working with rural communities in Andhra Pradesh on education, healthcare, livelihoods, and environmental sustainability — building models that communities can carry forward long after we step back.
              </p>

              {/* Mini NGO statistics */}
              <p
                className={`text-xs font-bold text-slate-500 mt-4 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "620ms" }}
              >
                <span className="text-emerald-600">27+ Years</span> · <span className="text-emerald-600">120+ Communities</span> · <span className="text-emerald-600">15,000+ Lives</span>
              </p>

              {/* CTA buttons */}
              <div
                className={`flex flex-wrap gap-3 mt-7 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-sm shadow-[0_15px_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all group"
                >
                  Explore Our Journey <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/70 backdrop-blur-md border border-sky-200 text-slate-700 font-bold text-sm hover:border-sky-400 hover:text-sky-700 transition-all"
                >
                  <Download className="w-4 h-4" /> Download Organization Profile
                </a>
              </div>

              {/* Mini trust strip */}
              <div
                className={`flex flex-wrap gap-x-5 gap-y-2 mt-8 transition-all duration-700 ${
                  heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                {aboutTrustStrip.map((item) => (
                  <span key={item.label} className="group flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <item.icon className="w-4 h-4 text-emerald-600 group-hover:rotate-12 transition-transform" />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 55%: cinematic image + floating panels */}
            <div
              className={`lg:col-span-7 relative transition-all duration-1000 ${
                heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              <div className="relative rounded-[34px] overflow-hidden h-[420px] sm:h-[480px] border border-white/60 shadow-[0_30px_70px_-25px_rgba(37,99,235,0.3)] group">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200"
                  alt="Effort India field team"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep" />
                </div>
              </div>

              {/* Floating glass panels */}
              <div className="absolute -top-5 -left-5 sm:-left-8 grid grid-cols-2 gap-3 w-[calc(100%+2.5rem)] sm:w-auto sm:flex">
                {aboutHeroPanels.slice(0, 2).map((panel, i) => (
                  <div
                    key={panel.label}
                    className={`animate-breathing-shadow bg-white/80 backdrop-blur-[32px] border border-white/70 rounded-2xl p-4 shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                    style={{ transitionDelay: `${900 + i * 150}ms` }}
                  >
                    <panel.icon className="w-5 h-5 text-blue-600 mb-1.5" />
                    <p className={`font-black text-slate-900 ${panel.value === "Coming Soon" ? "text-xs" : "text-lg"}`}>{panel.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{panel.label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-5 -right-5 sm:-right-8 grid grid-cols-2 gap-3 w-[calc(100%+2.5rem)] sm:w-auto sm:flex">
                {aboutHeroPanels.slice(2, 4).map((panel, i) => (
                  <div
                    key={panel.label}
                    className={`animate-breathing-shadow bg-white/80 backdrop-blur-[32px] border border-white/70 rounded-2xl p-4 shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                      heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${1200 + i * 150}ms` }}
                  >
                    <panel.icon className="w-5 h-5 text-emerald-600 mb-1.5" />
                    <p className={`font-black text-slate-900 ${panel.value === "Coming Soon" ? "text-xs" : "text-lg"}`}>{panel.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">{panel.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- INTERACTIVE TIMELINE --- */}
      <section id="journey" className="bg-slate-900 text-white py-20 lg:py-24 relative my-16">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold text-emerald-450 uppercase tracking-widest">Our journey</span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Milestones of Progress</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-450 mx-auto rounded-full"></div>
          </div>

          {/* Timeline Tab buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {timelineEvents.map((ev) => (
              <button 
                key={ev.year}
                onClick={() => setActiveTimelineYear(ev.year)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeTimelineYear === ev.year
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-105"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {ev.year}
              </button>
            ))}
          </div>

          {/* Selected timeline description (glass card) */}
          <div className="max-w-3xl mx-auto">
            {timelineEvents.map((ev) => {
              if (ev.year !== activeTimelineYear) return null;
              return (
                <div key={ev.year} className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-4 animate-fade-in relative">
                  <div className="absolute -top-6 left-10 bg-amber-500 text-slate-950 font-black px-5 py-2 rounded-2xl text-xl shadow-md">
                    {ev.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white pt-2">{ev.title}</h3>
                  <p className="text-slate-300 text-base leading-relaxed">{ev.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* --- LEADERSHIP TEAM --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-emerald-650 uppercase tracking-widest font-sans">Board of trustees</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Our Leadership Team</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="relative rounded-2xl overflow-hidden mb-6 aspect-square">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
              <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- LEGAL COMPLIANCE & TRANSPARENCY DOCUMENTS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200/50">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Transparency & Audit</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Compliance Documents</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full"></div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We strictly adhere to all government audit guidelines. Below are our financial reports and compliance certificates available for public review.
            </p>
            
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-100 flex gap-3">
              <ShieldCheck className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <h5 className="font-bold text-amber-850 text-sm">FCRA & 80G Certified</h5>
                <p className="text-xs text-amber-700 mt-1">Authorized to receive national & international donations under Indian Ministry of Home Affairs & IT Dept.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/50 flex gap-4 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-1">{doc.name}</h4>
                  <p className="text-[10px] text-slate-400">Date: {doc.date} | Size: {doc.size}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 pt-1 group/down">
                    Download PDF <ArrowRight className="w-3.5 h-3.5 group-hover/down:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
