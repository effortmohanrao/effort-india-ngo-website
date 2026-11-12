"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Landmark, Building2, GraduationCap, Globe2, Award } from "lucide-react";

type Slide = { slug: string; title: string; desc: string; image: string | null };

const icons = [Landmark, Building2, GraduationCap, Globe2, Award];
const INTERVAL = 5500;

// Five partner categories: large photo stage with crossfade + slow zoom, auto-advancing tabs
// with a gold progress bar. Pauses on hover/focus and when scrolled out of view.
export default function PartnershipShowcase({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = visible && !paused;

  useEffect(() => {
    if (!running || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % slides.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, running, slides.length]);

  const current = slides[active];
  const CurrentIcon = icons[active] ?? Landmark;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Photo stage */}
      <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-[28px] overflow-hidden bg-[#062619] shadow-[0_40px_80px_-35px_rgba(6,38,25,0.8)] ring-1 ring-amber-500/30">
        {slides.map((s, i) =>
          s.image ? (
            <div
              key={s.slug}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className={`object-cover transition-transform ease-out ${i === active ? "scale-110 duration-[6000ms]" : "scale-100 duration-0"}`}
              />
            </div>
          ) : null
        )}
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-t from-[#03140d]/95 via-[#03140d]/30 to-transparent" />
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-2 rounded-full bg-[#03140d]/70 border border-amber-300/40 px-3 py-1.5 text-xs font-bold text-amber-200 backdrop-blur-sm">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>

        <div key={current.slug} className="hidden sm:block absolute inset-x-0 bottom-0 p-8 text-white">
          <div className="lux-rise flex items-center gap-3">
            <span className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f7d774] to-[#b8860b] flex items-center justify-center shadow-lg shrink-0">
              <CurrentIcon className="w-5 h-5 text-[#062619]" />
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{current.title}</h3>
          </div>
          <p className="lux-rise mt-3 max-w-xl text-sm sm:text-base text-emerald-50/85 leading-relaxed" style={{ animationDelay: "120ms" }}>
            {current.desc}
          </p>
        </div>
      </div>

      {/* Phone caption: below the photo so it never covers text printed on the image */}
      <div key={`m-${current.slug}`} className="sm:hidden mt-4 flex items-start gap-3">
        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f7d774] to-[#b8860b] flex items-center justify-center shrink-0">
          <CurrentIcon className="w-5 h-5 text-[#062619]" />
        </span>
        <div className="lux-rise">
          <h3 className="text-xl font-extrabold text-[#14120c]">{current.title}</h3>
          <p className="mt-1 text-sm text-[#5a5240] leading-relaxed">{current.desc}</p>
        </div>
      </div>

      {/* Category tabs with progress */}
      <div role="tablist" aria-label="Partner categories" className="mt-4 -mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-5 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((s, i) => {
          const Icon = icons[i] ?? Landmark;
          const on = i === active;
          return (
            <button
              key={s.slug}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(i)}
              className={`relative shrink-0 overflow-hidden rounded-xl border px-3 py-3 text-left transition-colors cursor-pointer ${
                on ? "bg-[#062619] border-amber-400/70 text-amber-100" : "bg-white border-[#e5d7b0] text-[#3d3420] hover:border-amber-500"
              }`}
            >
              <span className="flex items-center gap-2">
                <Icon className={`w-4 h-4 shrink-0 ${on ? "text-amber-300" : "text-[#a1781e]"}`} />
                <span className="text-xs sm:text-[13px] font-bold leading-tight whitespace-nowrap sm:whitespace-normal">{s.title}</span>
              </span>
              {on && (
                <span
                  key={`${active}-${running}`}
                  aria-hidden
                  className="absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#f7d774] to-[#d4a017]"
                  style={running ? { animation: `lux-progress ${INTERVAL}ms linear forwards` } : { width: "100%" }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
