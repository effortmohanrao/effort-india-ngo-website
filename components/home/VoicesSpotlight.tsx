"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Quote } from "lucide-react";

type Story = { slug: string; name: string; role: string; place: string; quote: string; photo: string | null };

const INTERVAL = 7000;

function Avatar({ story, size, sizes }: { story: Story; size: string; sizes: string }) {
  return (
    <span className={`relative block ${size} rounded-full overflow-hidden bg-gradient-to-br from-[#0b3d2a] to-[#062619]`}>
      {story.photo ? (
        <Image src={story.photo} alt={story.name} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center font-extrabold text-amber-300">{story.name.charAt(0)}</span>
      )}
    </span>
  );
}

// One featured testimonial at a time, auto-advancing (pauses on hover / off-screen),
// with arrows and a strip of all farmers' photos to jump to any story.
export default function VoicesSpotlight({ stories }: { stories: Story[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

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
    const id = setTimeout(() => setActive((a) => (a + 1) % stories.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, running, stories.length]);

  // keep the selected thumbnail in view inside the strip (without scrolling the page)
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = strip?.children[active] as HTMLElement | undefined;
    if (!strip || !thumb) return;
    strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  const go = (d: number) => setActive((a) => (a + d + stories.length) % stories.length);
  const s = stories[active];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative rounded-[32px] p-[1.5px] bg-gradient-to-br from-[#f7d774] via-[#e9dcb5] to-[#b8860b] shadow-[0_40px_90px_-40px_rgba(90,61,0,0.55)]">
        <div className="relative overflow-hidden rounded-[31px] bg-[#fffdf7] px-6 py-10 sm:px-14 sm:py-14">
          <Quote aria-hidden className="absolute -top-4 -left-2 w-40 h-40 text-amber-200/50 rotate-180" />
          <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.15),transparent_65%)]" />

          <div key={s.slug} className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center" aria-live="polite">
            <div className="lux-rise flex md:flex-col items-center gap-4 md:gap-5 md:w-56 md:text-center">
              <span className="relative shrink-0 rounded-full p-[3px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] shadow-[0_15px_35px_-12px_rgba(212,160,23,0.7)]">
                <span className="block rounded-full p-1 bg-[#fffdf7]">
                  <Avatar story={s} size="w-20 h-20 sm:w-32 sm:h-32" sizes="128px" />
                </span>
              </span>
              <div className="min-w-0">
                <p className="text-lg sm:text-xl font-extrabold text-[#14120c]">{s.name}</p>
                <p className="text-sm font-bold text-[#a1781e]">{s.role}</p>
                <p className="mt-1 text-xs text-[#6b6047] flex items-start md:justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 mt-px text-emerald-700" /> {s.place}
                </p>
              </div>
            </div>
            <blockquote className="lux-rise min-h-[12rem] sm:min-h-[10.5rem] md:min-h-[12rem] text-xl sm:text-3xl leading-relaxed sm:leading-snug font-semibold text-[#1f2a22]" style={{ animationDelay: "120ms" }}>
              <span className="text-amber-500">&ldquo;</span>
              {s.quote}
              <span className="text-amber-500">&rdquo;</span>
            </blockquote>
          </div>

          <div className="relative mt-10 flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-[#7a5a12] tabular-nums">
              {String(active + 1).padStart(2, "0")} <span className="text-[#c9b98e]">/ {String(stories.length).padStart(2, "0")}</span>
            </p>
            <div className="flex-1 h-[3px] rounded-full bg-[#efe2bd] overflow-hidden">
              <span
                key={`${active}-${running}`}
                className="block h-full bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]"
                style={running ? { animation: `lux-progress ${INTERVAL}ms linear forwards` } : { width: `${((active + 1) / stories.length) * 100}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => go(-1)} aria-label="Previous story" className="w-11 h-11 rounded-full border border-[#d9c48e] bg-white hover:bg-[#062619] hover:border-[#062619] hover:text-amber-200 text-[#3d3420] flex items-center justify-center transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Next story" className="w-11 h-11 rounded-full bg-[#062619] hover:bg-[#0b3d2a] text-amber-200 flex items-center justify-center transition-colors cursor-pointer">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All farmers */}
      <div ref={stripRef} role="tablist" aria-label="Choose a farmer's story" className="mt-5 flex gap-3 overflow-x-auto px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:justify-center sm:flex-wrap">
        {stories.map((st, i) => {
          const on = i === active;
          return (
            <button
              key={st.slug}
              type="button"
              role="tab"
              aria-selected={on}
              aria-label={st.name}
              title={st.name}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-full p-[2px] transition-all duration-300 cursor-pointer ${
                on ? "bg-gradient-to-br from-[#f7d774] to-[#b8860b] scale-110 shadow-[0_8px_20px_-6px_rgba(212,160,23,0.8)]" : "bg-[#e5d7b0] opacity-70 hover:opacity-100"
              }`}
            >
              <span className="block rounded-full p-[2px] bg-[#fbf8f0]">
                <Avatar story={st} size="w-12 h-12" sizes="48px" />
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
