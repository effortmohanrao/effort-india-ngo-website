"use client";

import React, { useState } from "react";
import { 
  Heart, 
  ArrowRight, 
  BookOpen, 
  Activity, 
  Briefcase, 
  Users, 
  Globe, 
  Award, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  CheckCircle2, 
  ShieldCheck,
  Calendar,
  Sparkles,
  MapPin,
  Mail,
  Phone
} from "lucide-react";

export default function Home() {
  // States
  const [donationAmount, setDonationAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [currentStory, setCurrentStory] = useState(0);

  // Dummy success stories
  const successStories = [
    {
      id: 1,
      name: "Ramesh Kumar",
      age: 12,
      location: "Rural Rajasthan",
      title: "From Brick Kiln to School Classroom",
      story: "Ramesh used to work at a local brick kiln to help feed his family. Through Effort India's 'Shiksha Mission', he was rescued, enrolled in a bridging school, and is now thriving in 6th grade, dreaming of becoming a science teacher.",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800",
      pill: "Education"
    },
    {
      id: 2,
      name: "Savita Devi",
      age: 34,
      location: "Ganjam, Odisha",
      title: "Empowered Homemaker to Micro-Entrepreneur",
      story: "Savita joined our Self-Help Group (SHG) training program. Armed with a micro-grant and tailoring training, she now runs a small apparel boutique, employs two other women, and pays for her daughters' high school education.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
      pill: "Livelihood"
    },
    {
      id: 3,
      name: "Karan G.",
      age: 8,
      location: "Urban Slum, Mumbai",
      title: "Defeating Severe Acute Malnutrition",
      story: "Karan was diagnosed with severe malnutrition during our community health check-up. With 6 months of specialized nutritional intervention and medical care, he has gained healthy weight and is full of infectious energy.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      pill: "Healthcare"
    }
  ];

  // Campaign items
  const campaigns = [
    {
      id: "edu",
      title: "Educate 1,000 Rural Girls",
      desc: "Provide school supplies, tuition support, and transport fee for girls in tribal belts of Central India.",
      raised: "₹18,50,000",
      goal: "₹25,00,000",
      percent: 74,
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600",
      tag: "Education"
    },
    {
      id: "health",
      title: "Mobile Medical Vans",
      desc: "Deliver primary healthcare, medicines, and prenatal diagnostic tests to remote Himalayan villages.",
      raised: "₹32,10,000",
      goal: "₹40,00,000",
      percent: 80,
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
      tag: "Healthcare"
    },
    {
      id: "live",
      title: "Youth Skilling & Job Placement",
      desc: "Empower unemployed youth with digital skills, coding, and vocational training with assured jobs.",
      raised: "₹12,00,000",
      goal: "₹20,00,000",
      percent: 60,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      tag: "Livelihood"
    }
  ];

  const handleNextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const handlePrevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col selection:bg-emerald-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        {/* Glowing liquid glassmorphism blobs */}
        <div className="absolute top-1/4 left-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-emerald-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse delay-75"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Hand-in-Hand for a Better Tomorrow
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Empowering Lives. <br/>
              <span className="bg-gradient-to-r from-emerald-400 to-amber-300 bg-clip-text text-transparent">
                Creating Sustainable
              </span> <br className="hidden sm:inline"/>
              Futures.
            </h1>

            <p className="text-slate-350 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Effort India NGO is committed to uplifting underprivileged communities through integrated programs in quality education, sustainable healthcare, and robust livelihood opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#donate-section" 
                className="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                Start Supporting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs-section"
                className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                Explore Programs
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">100%</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">Tax Exemption</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-450">15K+</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">Beneficiaries</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">4.9★</p>
                <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">Donor Rating</p>
              </div>
            </div>

          </div>

          {/* Hero Right Media / Interactive Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 p-3 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800" 
                alt="Children smiling at school"
                className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl group-hover:scale-102 transition-transform duration-700" 
              />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-2">
                <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider">Active Relief</span>
                <h3 className="text-xl font-bold text-white leading-tight">Shiksha Mission: Building Hope</h3>
                <p className="text-xs text-slate-300">Every donation guarantees a child's annual education cost including school kit, books, and uniforms.</p>
                
                {/* Donation progress indicator */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs text-white mb-1">
                    <span>Raised: ₹18.5 L</span>
                    <span>Goal: ₹25 L</span>
                  </div>
                  <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- LIVE IMPACT COUNTERS --- */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 sm:p-10 border border-emerald-100/20 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="flex items-center gap-4 md:border-r border-slate-100 md:pr-6 last:border-0">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">15,000+</p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Lives Transformed</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-r border-slate-100 md:pr-6 last:border-0">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-600 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">120+</p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Villages Covered</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:border-r border-slate-100 md:pr-6 last:border-0">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/80 text-sky-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">45+</p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Centers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 last:border-0">
            <div className="w-12 h-12 rounded-2xl bg-purple-100/80 text-purple-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">98%</p>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">Impact Efficiency</p>
            </div>
          </div>

        </div>
      </section>

      {/* --- MAIN PROGRAMS SECTION --- */}
      <section id="programs-section" className="py-20 lg:py-28 relative">
        {/* Soft background liquid gradient */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-amber-100/25 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Our core focus areas</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pillars of Sustainable Development
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg">
              We focus on holistic empowerment. Our programs are designed to solve root problems, creating long-term positive change.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Pillars 1: Education */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Quality Education</h3>
              <p className="text-slate-655 text-sm leading-relaxed mb-6">
                Bridging the gap for dropouts and underprivileged kids. Supporting digital literacy, primary schooling infrastructure, and girls' higher education scholarship grants.
              </p>
              <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Digital Smart Classrooms</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free Kits & Study Materials</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Girl Child Scholarship Support</li>
              </ul>
              <a href="/programs" className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 group/link">
                Read Program Details <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Pillars 2: Healthcare */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-650 transition-colors">Healthcare Access</h3>
              <p className="text-slate-655 text-sm leading-relaxed mb-6">
                Providing standard diagnostic care and critical medicine kits to families who have zero access to primary doctors. Special support campaigns for child nutrition.
              </p>
              <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Rural Mobile Medical Clinics</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Child Nutrition Programs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Safe Sanitation & Hygiene</li>
              </ul>
              <a href="/programs" className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 hover:text-amber-700 group/link">
                Read Program Details <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Pillars 3: Livelihood */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-slate-200/50 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-sky-650 group-hover:text-white transition-all duration-300">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">Sustainable Livelihoods</h3>
              <p className="text-slate-655 text-sm leading-relaxed mb-6">
                Helping rural youth and women acquire income generation skills. Providing vocational setups, tailorship lessons, computer labs, and micro-business development grants.
              </p>
              <ul className="space-y-2 mb-8 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> Women Self-Help Groups (SHGs)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> Vocational Training Centers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-500" /> Youth IT & Soft Skills Training</li>
              </ul>
              <a href="/programs" className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 group/link">
                Read Program Details <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* --- DYNAMIC CAMPAIGNS & DONATION SECTION --- */}
      <section id="donate-section" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Glow behind section */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Campaigns list on left (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              
              <div className="space-y-4">
                <span className="text-sm font-bold text-emerald-400 uppercase tracking-widest">Active donation drives</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Support Our Immediate Campaigns
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full"></div>
                <p className="text-slate-450 text-base max-w-2xl">
                  Choose a cause closest to your heart. Every single rupee donated contributes directly to the project costs and ground implementation reports.
                </p>
              </div>

              {/* Campaigns list layout */}
              <div className="space-y-6">
                {campaigns.map((camp) => (
                  <div key={camp.id} className="bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/40 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center transition-all duration-300 group">
                    <img 
                      src={camp.image} 
                      alt={camp.title} 
                      className="w-full sm:w-32 h-28 object-cover rounded-xl shrink-0" 
                    />
                    <div className="flex-1 space-y-2 w-full">
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          {camp.tag}
                        </span>
                        <span className="text-xs text-slate-450 font-bold uppercase">{camp.percent}% Funded</span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">{camp.title}</h4>
                      <p className="text-xs text-slate-400">{camp.desc}</p>
                      
                      {/* Bar indicator */}
                      <div className="pt-2 space-y-1">
                        <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full" style={{ width: `${camp.percent}%` }}></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-300">
                          <span>Raised: <strong className="text-white font-medium">{camp.raised}</strong></span>
                          <span>Goal: {camp.goal}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Donation Quick calculator on right (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 text-slate-900 border border-white/20 shadow-2xl relative">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-amber-500 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-md">
                  Tax Saver
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Custom Donation</h3>
                    <p className="text-xs text-slate-500">Provide direct assistance. Save taxes instantly with 80G receipts.</p>
                  </div>

                  {/* Frequency Toggle */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1.5 rounded-xl text-center text-sm font-semibold text-slate-600">
                    <button className="bg-white text-emerald-700 rounded-lg py-2 shadow-sm">One-Time</button>
                    <button className="hover:text-slate-800 transition-colors py-2">Monthly Support</button>
                  </div>

                  {/* Preset amounts */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1500, 2500, 5000].map((amt) => (
                      <button 
                        key={amt}
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3.5 rounded-xl border-2 text-center font-bold text-sm transition-all ${
                          donationAmount === amt && !customAmount
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                            : "border-slate-200 hover:border-slate-350 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>

                  {/* Custom input box */}
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input 
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount(Number(e.target.value));
                      }}
                      className="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden font-bold text-slate-800"
                    />
                  </div>

                  {/* What does it feed? */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex gap-3 items-start">
                    <Heart className="w-5 h-5 text-emerald-650 shrink-0 mt-0.5 fill-emerald-100" />
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Your contribution of <strong>₹{donationAmount || "0"}</strong> will support{" "}
                      <strong>
                        {donationAmount <= 1500 && "1 child's school textbook & kits."}
                        {donationAmount > 1500 && donationAmount <= 4999 && "a girl child's tuition fees and mid-day nutrition for 3 months."}
                        {donationAmount >= 5000 && "an entire family's critical healthcare diagnostics and medicine supply for half a year."}
                      </strong>
                    </p>
                  </div>

                  {/* Action Proceed */}
                  <button className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 duration-200 cursor-pointer">
                    Proceed to Donate
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex justify-center items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-500" /> PCI-DSS Secure</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 80G Certificate Instantly</span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- DYNAMIC SUCCESS STORIES TESTIMONIAL --- */}
      <section className="py-20 lg:py-28 bg-white relative">
        {/* Soft background liquid gradient */}
        <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-amber-100/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Content left (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">Stories of change</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Work in Action: Real Stories
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-full"></div>
              
              {/* Active Story Card details */}
              <div className="space-y-4 pt-4">
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                  {successStories[currentStory].pill} Success Story
                </span>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                  {successStories[currentStory].title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed italic">
                  "{successStories[currentStory].story}"
                </p>
                <div className="pt-4 border-t border-slate-100">
                  <h5 className="text-base font-bold text-slate-900">{successStories[currentStory].name}</h5>
                  <p className="text-xs text-slate-500">Age: {successStories[currentStory].age} | {successStories[currentStory].location}</p>
                </div>
              </div>

              {/* Sliders navigation buttons */}
              <div className="flex items-center gap-3 pt-6">
                <button 
                  onClick={handlePrevStory}
                  className="p-3.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-650 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNextStory}
                  className="p-3.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-650 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Media right (6 cols) */}
            <div className="lg:col-span-6 relative">
              {/* Decorative block */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-50 rounded-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-amber-50/80 rounded-3xl -z-10"></div>
              
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-4/3 relative">
                <img 
                  src={successStories[currentStory].image} 
                  alt={successStories[currentStory].name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- CORPORATE & CSR PARTNERS SECTION --- */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-sans">Proudly Supported by Corporate Partners & CSR Teams</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {/* Dummy Corporate Logos */}
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">CORP-GLOBAL</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">APEX INDUSTRIES</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">NEXUS CAP</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">STEEL-MET</div>
            <div className="text-slate-800 font-extrabold text-lg sm:text-xl tracking-wider">VERTEX ORG</div>
          </div>
        </div>
      </section>

      {/* --- CONTACT & NEWSLETTER CTA --- */}
      <section className="py-20 lg:py-28 bg-emerald-950 text-white relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Glowing liquid backdrop blob */}
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-sm font-bold text-emerald-450 uppercase tracking-widest font-mono">Join our mailing list</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Get Ground Action Reports in Your Inbox
            </h2>
            <p className="text-emerald-100 text-base max-w-xl font-normal leading-relaxed">
              Sign up for our quarterly newsletter. Read about field intervention audits, direct financial reports, and heartening success stories.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <input 
                type="email" 
                placeholder="Enter your personal/work email" 
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 focus:border-emerald-400 focus:outline-hidden text-white placeholder-slate-405 flex-1 font-medium"
                required
              />
              <button className="px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-bold transition-all shadow-md hover:bg-emerald-700 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-8 border border-white/10 space-y-6">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-400" />
              Visit Our Head Office
            </h4>
            <div className="space-y-4 text-sm text-emerald-100">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>321, Progressive Towers, Outer Ring Road, Bengaluru, Karnataka - 560103</p>
              </div>
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>info@effortindiango.org</p>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>+91 98765 43210 (Mon - Sat, 9 AM - 6 PM)</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
