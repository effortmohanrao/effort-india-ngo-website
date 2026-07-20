"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight,
  TrendingUp,
  Image as ImageIcon,
  Play
} from "lucide-react";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");

  const newsItems = [
    {
      id: 1,
      category: "blog",
      title: "How Digital Classrooms are Transforming Learning in Rajasthan Villages",
      desc: "A deep dive on the ground at Jaipur Rural primary schools where interactive screens have improved student attendance by 35% in just 6 months.",
      date: "July 12, 2026",
      author: "Program Manager Dev",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=600",
      readTime: "5 min read"
    },
    {
      id: 2,
      category: "press",
      title: "Effort India NGO Secures Major CSR Grant from Vertex Org",
      desc: "Vertex Corporation announces a strategic CSR investment of ₹15 Lakhs to support mobile healthcare clinics and prenatal diagnostic programs in Odisha.",
      date: "June 28, 2026",
      author: "Press Relations",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      readTime: "Official Release"
    },
    {
      id: 3,
      category: "gallery",
      title: "Photo Exhibit: Youth IT Skilling Cohort Graduation 2026",
      desc: "Pictures of our recent batch graduating from Bengaluru Swavalamban IT Center. 80% secured soft skills and junior web developer placements.",
      date: "May 15, 2026",
      author: "Gallery Coordinator",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
      readTime: "24 Photos"
    },
    {
      id: 4,
      category: "blog",
      title: "Agroforestry: The Path to Climate Resilience for Local Farmers",
      desc: "Understanding the Hariyali program interventions. How crop diversification and natives tree plantation help dry-belt farmers maintain yields.",
      date: "April 08, 2026",
      author: "Agro Specialist Rao",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600",
      readTime: "7 min read"
    }
  ];

  const categories = [
    { label: "All News & Media", val: "all" },
    { label: "Blog Articles", val: "blog" },
    { label: "Press Releases", val: "press" },
    { label: "Photos & Media", val: "gallery" }
  ];

  const filteredNews = activeCategory === "all"
    ? newsItems
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-650 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-505" /> Media Center
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          News, Media & Blog
        </h1>
        <p className="text-slate-655 text-lg max-w-2xl mx-auto">
          Read active field journals, official press briefs, and stories directly from the communities we support.
        </p>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-3 pt-6 max-w-2xl mx-auto">
          {categories.map((c) => (
            <button
              key={c.val}
              onClick={() => setActiveCategory(c.val)}
              className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeCategory === c.val
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-102"
                  : "bg-white/80 backdrop-blur-md border border-slate-200/50 text-slate-650 hover:bg-slate-50"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- NEWS CARDS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredNews.map((item) => (
            <div 
              key={item.id}
              className="bg-white/85 backdrop-blur-xl rounded-3xl border border-slate-200/50 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  {item.category === "gallery" && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-xs text-white p-2 rounded-xl">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  )}
                  <span className="absolute bottom-4 left-4 bg-emerald-600/90 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {item.author}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-905 group-hover:text-emerald-700 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group/link">
                  {item.category === "gallery" ? "View Gallery" : "Read Full Post"}{" "}
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
