"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  Activity, 
  Briefcase, 
  Leaf, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("all");

  const programList = [
    {
      id: "education",
      category: "education",
      title: "Shiksha: Rural Education Bridging",
      desc: "Re-integrating school dropouts back into classrooms. We set up tutoring camps, equip classrooms with smart tech tools, and support girls' education through tuition grants.",
      metrics: { primary: "5,000+ Kids Enrolled", secondary: "15 Smart Classrooms Built" },
      bullets: [
        "Special focus on girls in rural belts",
        "Provision of kits (textbooks, bags, uniforms)",
        "Basic computer training & digital literacy"
      ],
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=600",
      themeColor: "emerald"
    },
    {
      id: "health",
      category: "healthcare",
      title: "Sanjeevani: Mobile Health Clinics",
      desc: "Mobile clinical vans designed to travel to remote rural zones where primary clinics do not exist. We provide health diagnostic tests, essential drugs, and prenatal checkups.",
      metrics: { primary: "8,500+ Patients Treated", secondary: "3 Mobile Clinics Active" },
      bullets: [
        "Free physician consultations & diagnosis",
        "Quarterly child wellness & nutritional audits",
        "Anemia screening and iron supplements for mothers"
      ],
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
      themeColor: "amber"
    },
    {
      id: "livelihood",
      category: "livelihoods",
      title: "Swavalamban: Vocational Training & SHGs",
      desc: "Empowering rural youth and housewives by setting up skill centers for IT, tailoring, and electrical works. Supporting micro-business startups with small setup grants.",
      metrics: { primary: "1,200+ Individuals Trained", secondary: "24 SHGs Formed" },
      bullets: [
        "Tailoring & handicraft design for women",
        "Basic data entry & software training for youth",
        "Assisted placements and micro-loans setup"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      themeColor: "sky"
    },
    {
      id: "environment",
      category: "environment",
      title: "Hariyali: Afforestation & Agroforestry",
      desc: "Planting saplings and training farmers in sustainable agroforestry models. We promote soil wellness, native trees planting, and organic crop diversification.",
      metrics: { primary: "25,000+ Saplings Planted", secondary: "450+ Farmers Assisted" },
      bullets: [
        "Community afforestation drives near dry lands",
        "Training in rainwater harvesting methods",
        "Organic farming & composting education"
      ],
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600",
      themeColor: "emerald"
    }
  ];

  const filteredPrograms = activeFilter === "all" 
    ? programList 
    : programList.filter(p => p.category === activeFilter);

  const filters = [
    { label: "All Programs", val: "all" },
    { label: "Education", val: "education" },
    { label: "Healthcare", val: "healthcare" },
    { label: "Livelihoods", val: "livelihoods" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Action on the Ground
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Our Impact Programs
        </h1>
        <p className="text-slate-655 text-lg max-w-2xl mx-auto">
          We implement community-first modules focused on measurable milestones to lift rural areas out of generational poverty.
        </p>

        {/* Filter Tabs (Liquid Glassmorphism Look) */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 max-w-2xl mx-auto">
          {filters.map((f) => (
            <button
              key={f.val}
              onClick={() => setActiveFilter(f.val)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
                activeFilter === f.val
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-102"
                  : "bg-white/80 backdrop-blur-md border border-slate-200/50 text-slate-650 hover:bg-slate-50"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- PROGRAMS LISTING --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {filteredPrograms.map((prog, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={prog.id}
              className={`bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/50 p-6 md:p-10 shadow-lg hover:shadow-xl transition-all duration-500 grid lg:grid-cols-12 gap-8 items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              
              {/* Media Block */}
              <div className={`lg:col-span-5 relative ${isEven ? "" : "lg:order-last"}`}>
                <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-md relative group">
                  <img 
                    src={prog.image} 
                    alt={prog.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-black uppercase text-emerald-700 shadow-xs border border-emerald-500/10">
                    {prog.category}
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {prog.desc}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/50">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Total Impact</span>
                    <p className="text-sm sm:text-base font-extrabold text-emerald-700 mt-0.5">{prog.metrics.primary}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Project Units</span>
                    <p className="text-sm sm:text-base font-extrabold text-amber-700 mt-0.5">{prog.metrics.secondary}</p>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2 text-sm font-semibold text-slate-700">
                  {prog.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex gap-4">
                  <a 
                    href="/#donate-section"
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    Support Cause <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
