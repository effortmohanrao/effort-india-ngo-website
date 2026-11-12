"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Handshake, Scale, ShieldCheck, Sparkles, Sprout, Users, Zap } from "lucide-react";

const coreValues = [
  {
    title: "Community Ownership",
    icon: Users,
    desc: "Communities are the primary agents of their own development. EFFORT works to strengthen their leadership, decision-making, and collective action, ensuring that development processes are locally driven and sustained.",
    practice: "Locally Driven & Sustained Development Processes",
  },
  {
    title: "Sustainability & Stewardship",
    icon: Sprout,
    desc: "EFFORT is committed to long-term ecological, social, and economic sustainability through responsible stewardship of natural resources, institutions, and relationships.",
    practice: "Long-Term Ecological, Social & Economic Stewardship",
  },
  {
    title: "Inclusion & Equity",
    icon: Scale,
    desc: "EFFORT ensures that development processes are inclusive and equitable, with particular attention to youth, women, and marginalized communities, enabling their meaningful participation and leadership.",
    practice: "Youth, Women & Marginalized Community Focus",
  },
  {
    title: "Integrity & Accountability",
    icon: ShieldCheck,
    desc: "EFFORT upholds honesty, transparency, and responsibility in all its actions, remaining accountable to communities, partners, and stakeholders.",
    practice: "Honesty, Transparency & Stakeholder Accountability",
  },
  {
    title: "Partnership & Collaboration",
    icon: Handshake,
    desc: "EFFORT recognizes that complex development challenges require collective action and works in partnership with communities, civil society organizations, government, academia, and the private sector to amplify impact and scale solutions.",
    practice: "Govt, NGO, Academia & CSR Collective Action",
  },
  {
    title: "Adaptability & Resilience",
    icon: Zap,
    desc: "EFFORT remains responsive to change, open to innovation, and committed to strengthening its own capacity and that of communities to adapt, learn, and thrive in dynamic and uncertain environments.",
    practice: "Responsive, Learning-Oriented & Resilient Capacity",
  },
];

const trustBar = [
  { label: "Community Co-Design", desc: "100% programs planned with local village leaders", icon: Users },
  { label: "Statutory Accountability", desc: "Quarterly Utilization Certificates and GIS logs", icon: ShieldCheck },
  { label: "Self-Sustaining Impact", desc: "Local institutions designed to thrive permanently", icon: Sprout },
];

const INTERVAL = 6000;

export default function CoreValues() {
  const [active, setActive] = useState(0); // desktop selector
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(0); // phone accordion
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
    const id = setTimeout(() => setActive((a) => (a + 1) % coreValues.length), INTERVAL);
    return () => clearTimeout(id);
  }, [active, running]);

  const v = coreValues[active];
  const ActiveIcon = v.icon;

  return (
    <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[110vw] max-w-[1300px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.16),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-40 w-[50vw] aspect-square -z-10 rounded-full lux-drift-b bg-[radial-gradient(circle,rgba(212,160,23,0.16),transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Our Core Guiding Principles
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
            The Unshakable Values That <span className="lux-gold-text">Drive Every Ground Decision</span>
          </h2>
          <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">Tap any value below to see how we put it into practice in the field.</p>
        </div>

        {/* ===== DESKTOP: selector tiles + detail panel ===== */}
        <div
          ref={ref}
          className="hidden lg:grid grid-cols-12 gap-8 mt-16 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div role="tablist" aria-label="Core values" className="col-span-6 grid grid-cols-2 gap-4">
            {coreValues.map((val, i) => {
              const Icon = val.icon;
              const on = i === active;
              return (
                <button
                  key={val.title}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(i)}
                  className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    on
                      ? "border-amber-300/70 bg-gradient-to-br from-amber-300/15 to-white/[0.03] shadow-[0_20px_45px_-25px_rgba(212,160,23,0.8)]"
                      : "border-white/10 bg-white/[0.04] hover:border-amber-300/40 hover:bg-white/[0.07]"
                  }`}
                >
                  <span aria-hidden className="absolute right-4 top-3 text-4xl font-extrabold text-white/[0.06] select-none">0{i + 1}</span>
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      on ? "bg-gradient-to-br from-[#f7d774] to-[#b8860b] scale-110" : "bg-white/[0.06] border border-white/10 group-hover:border-amber-300/40"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${on ? "text-[#062619]" : "text-amber-300"}`} />
                  </span>
                  <p className={`mt-4 text-base font-extrabold leading-snug ${on ? "text-amber-100" : "text-white"}`}>{val.title}</p>
                  {on && (
                    <span
                      key={`${active}-${running}`}
                      aria-hidden
                      className="absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-[#10b981] to-[#f7d774]"
                      style={running ? { animation: `lux-progress ${INTERVAL}ms linear forwards` } : { width: "100%" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="col-span-6 rounded-[28px] p-[1.5px] bg-gradient-to-br from-[#fff3c4] via-[#a1781e] to-[#f7d774] shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]">
            <div key={active} className="relative h-full overflow-hidden rounded-[27px] bg-gradient-to-br from-[#0b3d2a] via-[#062619] to-[#03140d] p-9 flex flex-col">
              <ActiveIcon aria-hidden className="absolute -right-8 -bottom-8 w-56 h-56 text-white/[0.04]" />
              <div className="lux-rise flex items-center gap-4">
                <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fff3c4] via-[#f7d774] to-[#b8860b] flex items-center justify-center shadow-[0_14px_30px_-8px_rgba(212,160,23,0.8)]">
                  <ActiveIcon className="w-8 h-8 text-[#062619]" />
                </span>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-300">Value 0{active + 1} / 06</p>
                  <h3 className="mt-1 text-3xl font-extrabold leading-tight">{v.title}</h3>
                </div>
              </div>
              <p className="lux-rise relative mt-7 text-lg text-emerald-50/85 leading-relaxed" style={{ animationDelay: "100ms" }}>{v.desc}</p>
              <div className="lux-rise relative mt-7 rounded-2xl border border-amber-300/25 bg-white/[0.04] p-4" style={{ animationDelay: "200ms" }}>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  <ShieldCheck className="w-4 h-4" /> In Practice
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{v.practice}</p>
              </div>
              <div className="mt-auto pt-8">
              <Link
                href="/get-involved"
                className="lux-rise lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold px-6 py-3.5 text-sm shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)]"
                style={{ animationDelay: "300ms" }}
              >
                Explore {v.title} Commitment <ArrowUpRight className="w-4 h-4" />
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ===== PHONE & TABLET: tap-to-open list ===== */}
        <ul className="lg:hidden mt-10 space-y-3">
          {coreValues.map((val, i) => {
            const Icon = val.icon;
            const isOpen = open === i;
            return (
              <li key={val.title} className={`rounded-2xl border transition-colors ${isOpen ? "border-amber-300/60 bg-gradient-to-br from-amber-300/10 to-white/[0.03]" : "border-white/10 bg-white/[0.04]"}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-4 text-left cursor-pointer"
                >
                  <span className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? "bg-gradient-to-br from-[#f7d774] to-[#b8860b]" : "bg-white/[0.06] border border-white/10"}`}>
                    <Icon className={`w-5 h-5 ${isOpen ? "text-[#062619]" : "text-amber-300"}`} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-amber-300/80">Value 0{i + 1}</span>
                    <span className="block text-base font-extrabold leading-snug">{val.title}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-amber-300 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5">
                      <p className="text-sm text-emerald-50/80 leading-relaxed">{val.desc}</p>
                      <p className="mt-4 rounded-xl border border-amber-300/25 bg-white/[0.04] px-3 py-2.5 text-sm">
                        <span className="block text-xs font-extrabold uppercase tracking-wider text-amber-300">In Practice</span>
                        <span className="font-semibold text-white">{val.practice}</span>
                      </p>
                      <Link href="/get-involved" className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-amber-300">
                        Explore this commitment <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Trust bar */}
        <ul className="mt-14 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {trustBar.map((t) => (
            <li key={t.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <span className="w-10 h-10 rounded-full border border-amber-300/50 bg-amber-300/10 flex items-center justify-center shrink-0">
                <t.icon className="w-5 h-5 text-amber-300" />
              </span>
              <div>
                <p className="font-extrabold text-white">{t.label}</p>
                <p className="mt-0.5 text-sm text-emerald-50/65 leading-snug">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
