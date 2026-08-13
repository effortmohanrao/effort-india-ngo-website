"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Maximize2,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { galleryAlbumsData } from "./data";

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-24 relative overflow-hidden">
      
      {/* BACKGROUND LIQUID AMBIENT GLOWS & RISING BUBBLES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[650px] h-[650px] bg-amber-200/40 rounded-full blur-[160px] animate-liquid-drift-a" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] bg-emerald-200/40 rounded-full blur-[150px] animate-liquid-drift-b" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-sky-200/35 rounded-full blur-[170px] animate-aurora-silk-1" />
        <div className="bg-noise absolute inset-0 opacity-10" />

        {/* Continuous Rising Floating Translucent Bubbles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-[10%] w-12 h-12 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0s", animationDuration: "7s" }} />
          <div className="absolute bottom-0 left-[32%] w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "1.6s", animationDuration: "8.5s" }} />
          <div className="absolute bottom-0 left-[60%] w-14 h-14 rounded-full bg-sky-400/20 border border-sky-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0.8s", animationDuration: "9s" }} />
          <div className="absolute bottom-0 left-[84%] w-18 h-18 rounded-full bg-purple-400/20 border border-purple-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "2.5s", animationDuration: "7.5s" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-300/80 text-emerald-800 text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-bounce" /> EFFORT NGO COLLEGE & FIELD ALBUMS (1999–2026)
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Explore Full Field <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">Photo Albums</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold max-w-2xl mx-auto">
            Click any album to open a dedicated full screen photo gallery page with step-by-step floating images, field stories, and high-res previews.
          </p>
        </div>

        {/* DIRECT PHOTO ALBUM GRID (NAVIGATES TO DEDICATED FULL SCREEN PAGE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryAlbumsData.map((album) => (
            <Link
              key={album.id}
              href={`/gallery/${album.id}`}
              className="group relative rounded-[32px] overflow-hidden bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Cover Image Container */}
              <div className="relative h-72 overflow-hidden bg-slate-950">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Album Counter Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    <Layers className="w-3.5 h-3.5 text-amber-400" /> {album.photos.length} Album Photos
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {album.year}
                  </span>
                </div>

                {/* Center Open Full Screen Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="px-5 py-3 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    Open Full Album Screen <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title Overlay on Photo */}
                <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                    {album.album}
                  </span>
                  <h3 className="text-lg font-black text-white leading-snug drop-shadow-sm group-hover:text-emerald-200 transition-colors">
                    {album.title}
                  </h3>
                </div>
              </div>

              {/* Text Card Body */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{album.location}</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider shrink-0">
                    {album.impactTag}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {album.desc}
                </p>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Open Full Screen Album ({album.photos.length} Photos)</span>
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* BOTTOM METRICS RIBBON */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-300/70">
          {[
            { num: "1,909", label: "Villages Documented", desc: "Across 9 states & 37 districts" },
            { num: "2.67 Lakh+", label: "Families Empowered", desc: "Verified ground beneficiaries" },
            { num: "63 Total", label: "Field Initiatives", desc: "50 completed & 13 ongoing" },
            { num: "27+ Years", label: "Unbroken Legacy", desc: "Continuous service since 1999" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600">
                {stat.num}
              </span>
              <h4 className="text-xs font-black text-slate-900 mt-1 uppercase tracking-wider">{stat.label}</h4>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
