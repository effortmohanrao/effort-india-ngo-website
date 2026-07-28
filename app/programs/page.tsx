"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  HeartPulse,
  Users,
  Baby,
  Sprout,
  LifeBuoy
} from "lucide-react";

function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    const fallback = setTimeout(() => setVisible(true), 2500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
  return [ref, visible] as const;
}

type BentoProgram = {
  title: string;
  icon: typeof BookOpen;
  image: string;
  desc: string;
  gradient: string;
};

const bentoPrograms: BentoProgram[] = [
  {
    title: "Education",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
    desc: "Bridging the gap for dropouts and underprivileged kids through digital classrooms, free study kits, and girl-child scholarships.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800",
    desc: "Rural mobile clinics and child nutrition support for families with no access to primary care.",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Women Empowerment",
    icon: Users,
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
    desc: "Self-help groups, vocational training, and micro-business grants for rural women.",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    title: "Livelihood & Skill Development",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
    desc: "Vocational setups, computer labs, and income-generation training for rural youth.",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Child Development",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800",
    desc: "Early learning support and safe spaces for children.",
    gradient: "from-pink-500 to-pink-700",
  },
  {
    title: "Environment & Climate",
    icon: Sprout,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    desc: "Water governance, biodiversity, and sustainable farming initiatives.",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    title: "Disaster Relief",
    icon: LifeBuoy,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
    desc: "Rapid-response relief support for communities facing crisis.",
    gradient: "from-red-500 to-red-700",
  },
];

const bentoProgramTags = ["Education", "Health", "Nutrition", "Water", "Livelihood", "Women", "Youth", "Climate", "Agriculture", "Digital Literacy"];

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [bentoRef, bentoVisible] = useScrollReveal<HTMLElement>();

  const EducationIcon = bentoPrograms[0].icon;
  const HealthcareIcon = bentoPrograms[1].icon;
  const WomenIcon = bentoPrograms[2].icon;
  const LivelihoodIcon = bentoPrograms[3].icon;

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

      {/* --- CORE PROGRAMS BENTO SHOWCASE --- */}
      <section ref={bentoRef} className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white to-purple-50/30" />
          <div className="absolute top-[-5%] left-[15%] w-[420px] h-[420px] bg-sky-100/40 rounded-full blur-[130px] animate-liquid-drift-a" />
          <div className="absolute bottom-[0%] right-[10%] w-[380px] h-[380px] bg-pink-100/40 rounded-full blur-[120px] animate-liquid-drift-b" />
          <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-teal-100/30 rounded-full blur-[110px] animate-liquid-drift-c" />
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:26px_26px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div
            className={`text-center max-w-3xl mx-auto mb-14 space-y-4 transition-all duration-700 ${
              bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider shadow-sm">
              🌱 Our Core Programs
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900">
              Creating Sustainable Change Through Every Initiative
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Our programs are designed to strengthen communities, improve lives, and create long-term social impact through innovative and inclusive development initiatives.
            </p>
          </div>

          {/* Floating program tags */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 ${
              bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {bentoProgramTags.map((tag, i) => (
              <span
                key={tag}
                className="animate-card-float px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/70 text-xs font-bold text-slate-600 shadow-sm hover:scale-110 hover:text-slate-900 hover:shadow-md transition-all cursor-default"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bento ecosystem */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">

            {/* Hero card: Education */}
            <div
              className={`lg:col-span-7 transition-all duration-700 ${
                bentoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="group relative h-full min-h-[420px] rounded-[28px] overflow-hidden border border-white/70 shadow-[0_25px_60px_-20px_rgba(37,99,235,0.35)]">
                <img
                  src={bentoPrograms[0].image}
                  alt={bentoPrograms[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${bentoPrograms[0].gradient} opacity-80 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-light-sweep" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                    <EducationIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{bentoPrograms[0].title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed max-w-md mb-6">{bentoPrograms[0].desc}</p>
                  <Link
                    href="#programs-listing"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-700 font-bold text-sm w-fit shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all group/btn"
                  >
                    Explore Program <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column: Healthcare (medium) + Women Empowerment (tall) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              <div
                className={`transition-all duration-700 ${
                  bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="group relative h-[190px] rounded-[28px] overflow-hidden border border-white/70 shadow-[0_20px_45px_-18px_rgba(5,150,105,0.35)]">
                  <img
                    src={bentoPrograms[1].image}
                    alt={bentoPrograms[1].title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${bentoPrograms[1].gradient} opacity-75 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
                      <HealthcareIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white">{bentoPrograms[1].title}</h3>
                    <p className="text-xs text-white/85 mt-1 leading-relaxed">{bentoPrograms[1].desc}</p>
                  </div>
                </div>
              </div>

              <div
                className={`flex-1 transition-all duration-700 ${
                  bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                <div className="group relative h-full min-h-[210px] rounded-[28px] overflow-hidden border border-white/70 shadow-[0_20px_45px_-18px_rgba(147,51,234,0.35)]">
                  <img
                    src={bentoPrograms[2].image}
                    alt={bentoPrograms[2].title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${bentoPrograms[2].gradient} opacity-75 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
                      <WomenIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-black text-white">{bentoPrograms[2].title}</h3>
                    <p className="text-xs text-white/85 mt-1 leading-relaxed">{bentoPrograms[2].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide banner: Livelihood */}
            <div
              className={`lg:col-span-12 transition-all duration-700 ${
                bentoVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <div className="group relative h-[220px] rounded-[28px] overflow-hidden border border-white/70 shadow-[0_20px_50px_-18px_rgba(234,88,12,0.35)]">
                <img
                  src={bentoPrograms[3].image}
                  alt={bentoPrograms[3].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${bentoPrograms[3].gradient} opacity-75 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center p-8 sm:p-10 max-w-lg">
                  <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:rotate-12 transition-transform">
                    <LivelihoodIcon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{bentoPrograms[3].title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{bentoPrograms[3].desc}</p>
                </div>
              </div>
            </div>

            {/* Floating trio: Child Development, Environment, Disaster Relief */}
            {[4, 5, 6].map((idx, i) => {
              const FloatingIcon = bentoPrograms[idx].icon;
              return (
                <div
                  key={bentoPrograms[idx].title}
                  className={`lg:col-span-4 transition-all duration-700 ${
                    bentoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${450 + i * 100}ms` }}
                >
                  <div className="group relative h-[180px] rounded-[24px] overflow-hidden border border-white/70 shadow-[0_15px_35px_-16px_rgba(0,0,0,0.25)]">
                    <img
                      src={bentoPrograms[idx].image}
                      alt={bentoPrograms[idx].title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${bentoPrograms[idx].gradient} opacity-70 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="relative z-10 h-full flex flex-col justify-end p-5">
                      <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center mb-2 group-hover:rotate-12 transition-transform">
                        <FloatingIcon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-black text-white">{bentoPrograms[idx].title}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- PROGRAMS LISTING --- */}
      <section id="programs-listing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
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
