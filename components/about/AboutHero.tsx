"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Award, Building2, Camera, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, Users } from "lucide-react";

const stats: { value: string; label: string }[] = [
  { value: "65 + 15", label: "Completed & Active Projects" },
  { value: "1,909", label: "Villages (10 States)" },
  { value: "2.67 Lakh", label: "Families Impacted" },
  { value: "1,368", label: "Community Collectives" },
];

const trust: { icon: typeof ShieldCheck; label: string }[] = [
  { icon: ShieldCheck, label: "100% FCRA & 80G Certified" },
  { icon: Award, label: "NABARD & GIZ Partnered" },
  { icon: Building2, label: "Registered Society #340/1999" },
];

// Deterministic particle layout (same on server and client).
const particles = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 41 + 11) % 100,
  size: 2 + (i % 3),
  dur: 10 + (i % 5) * 2,
  delay: -((i * 1.9) % 14),
}));

export default function AboutHero({ images }: { images: { key: string; url: string }[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((i) => (i + 1) % images.length), 5000);
    return () => clearTimeout(id);
  }, [active, images.length, paused]);

  const go = (d: number) => setActive((i) => (i + d + images.length) % images.length);

  return (
    <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white -mt-12">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute -top-1/4 -left-1/4 w-[70vw] aspect-square -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(212,160,23,0.18),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-[-10%] w-[60vw] aspect-square -z-10 rounded-full lux-drift-b bg-[radial-gradient(circle,rgba(16,185,129,0.2),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className={`lux-particle absolute bottom-0 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(247,215,116,0.9)] ${i % 2 ? "hidden sm:block" : ""}`}
            style={{ left: `${p.left}%`, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Text */}
        <div className="lg:col-span-7 min-w-0">
          <p className="lux-rise inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200" style={{ animationDelay: "100ms" }}>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Estd. 1999 • Society Registration 340/1999
          </p>
          <h1 className="mt-7 text-[2.5rem] leading-[1.06] sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight">
            <span className="block overflow-hidden pb-1">
              <span className="lux-rise inline-block" style={{ animationDelay: "250ms" }}>
                <span className="lux-gold-text">Building Hope.</span>
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="lux-rise inline-block" style={{ animationDelay: "420ms" }}>Creating Sustainable Change.</span>
            </span>
          </h1>
          <div className="lux-rise mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-amber-300 to-transparent" style={{ animationDelay: "600ms" }} />
          <p className="lux-rise mt-6 text-base sm:text-lg text-emerald-50/85 leading-relaxed max-w-2xl" style={{ animationDelay: "700ms" }}>
            Founded in 1999 at Martur, Prakasam District (Society Reg. 340/1999), EFFORT NGO has spent{" "}
            <strong className="text-amber-300 font-extrabold">27 years</strong> building climate-resilient farming, water harvesting, and community-led collectives across rural India — from a single registered society to a multi-state, multi-sector organization.
          </p>

          <dl className="lux-rise mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3" style={{ animationDelay: "850ms" }}>
            {stats.map((s) => (
              <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] px-2 py-4 sm:p-4 text-center hover:border-amber-300/50 hover:-translate-y-1 transition-all duration-300">
                <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <dd className="text-xl min-[360px]:text-2xl lg:text-3xl xl:text-[1.7rem] font-extrabold bg-gradient-to-b from-[#fff3c4] to-[#d4a017] bg-clip-text text-transparent whitespace-nowrap">{s.value}</dd>
                <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-100/75 leading-snug">{s.label}</dt>
              </div>
            ))}
          </dl>

          <div className="lux-rise mt-9 flex flex-col sm:flex-row gap-3.5" style={{ animationDelay: "1000ms" }}>
            <a href="#journey" className="lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#03140d] font-extrabold px-7 py-4 shadow-[0_10px_30px_-8px_rgba(212,160,23,0.7)] hover:-translate-y-0.5 transition-transform">
              Explore Our 27-Year Journey <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#leadership" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 hover:border-amber-300/60 font-semibold px-7 py-4 transition-colors">
              <Users className="w-4 h-4 text-amber-300" /> Meet Our Leadership Team
            </a>
          </div>

          <ul className="lux-rise mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-emerald-50/80" style={{ animationDelay: "1150ms" }}>
            {trust.map((t) => (
              <li key={t.label} className="inline-flex items-center gap-2">
                <t.icon className="w-4 h-4 text-amber-300" /> {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo slideshow in a gold frame */}
        <div
          className="lg:col-span-5 min-w-0 lux-rise"
          style={{ animationDelay: "500ms" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            <div aria-hidden className="absolute -inset-3 rounded-[36px] border border-amber-300/25" />
            <div className="relative rounded-[30px] p-[1.5px] bg-gradient-to-br from-[#fff3c4] via-[#a1781e] to-[#f7d774] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
              <div className="relative h-[380px] sm:h-[480px] rounded-[29px] overflow-hidden bg-[#062619]">
                {images.map((img, i) => (
                  <div key={img.key} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}>
                    <Image
                      src={img.url}
                      alt="EFFORT NGO rural community field operations"
                      fill
                      preload={i === 0}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className={`object-cover transition-transform ease-out ${i === active ? "scale-110 duration-[6000ms]" : "scale-100 duration-0"}`}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03140d]/90 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl bg-[#03140d]/80 border border-amber-300/25 p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-9 h-9 rounded-xl bg-amber-300/15 border border-amber-300/40 flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4 text-amber-300" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-amber-300">Field Archive Album</p>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-50 leading-snug">1,909 Villages • 10 Indian States Impact</p>
                    </div>
                  </div>
                  {images.length > 1 && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="w-9 h-9 rounded-full border border-white/20 hover:border-amber-300 hover:text-amber-300 flex items-center justify-center transition-colors cursor-pointer">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button type="button" onClick={() => go(1)} aria-label="Next photo" className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f7d774] to-[#d4a017] text-[#03140d] flex items-center justify-center cursor-pointer">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {images.length > 1 && (
              <div className="mt-4 flex justify-center gap-1.5">
                {images.map((img, i) => (
                  <button
                    key={img.key}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === active ? "w-8 bg-amber-300" : "w-2 bg-white/25 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
