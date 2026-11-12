"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Compass, Sparkles, Target, TrendingUp } from "lucide-react";
import StrategicPillars from "@/components/about/StrategicPillars";

type Phase = {
  id: string;
  phaseLabel: string;
  years: string;
  title: string;
  focus: string;
  highlights: string[];
  outcome: string;
  icon: typeof Compass;
};

const phasesData: Phase[] = [
  {
    id: "phase-1",
    phaseLabel: "Phase I",
    years: "2026–2027",
    title: "Foundation, Consolidation & Transition",
    focus: "Strengthening foundations and consolidating learning before the next phase of growth.",
    highlights: [
      "Consolidate and deepen existing programs across natural resource management, livelihoods and WASH",
      "Pilot new thematic areas: youth livelihoods, climate-resilient practices and market linkages",
      "Strengthen people's organisations, FPOs and youth collectives",
      "Initiate digitisation of MIS, HR and financial systems",
    ],
    outcome: "A more cohesive, learning-oriented, institutionally prepared organisation.",
    icon: Compass,
  },
  {
    id: "phase-2",
    phaseLabel: "Phase II",
    years: "2028–2029",
    title: "Expansion, Integration & Deepening Impact",
    focus: "Scaling impact, deepening partnerships, and integrating programs and systems.",
    highlights: [
      "Expand proven program models to new districts and states through strategic partnerships",
      "Scale youth skill development and livelihood initiatives across target regions",
      "Establish knowledge and learning hubs, disseminating practice-based evidence",
      "Fully operationalise integrated digital MIS, MEL and learning systems",
    ],
    outcome: "Greater scale and influence, backed by strong systems, partnerships and visibility.",
    icon: TrendingUp,
  },
  {
    id: "phase-3",
    phaseLabel: "Phase III",
    years: "2030",
    title: "Sustainability, Influence & Maturity",
    focus: "Consolidating gains and positioning EFFORT as a mature institution with enduring impact.",
    highlights: [
      "Consolidate and sustain community-led development models across all operational states",
      "Position youth as long-term leaders, mentors and institutional anchors in local bodies",
      "Ensure executive leadership transition and long-term financial sustainability",
      "Enable replication and scale through strategic partners, not direct implementation",
    ],
    outcome: "A resilient, respected and sustainable institution with enduring grassroots impact.",
    icon: Sparkles,
  },
];

const impactStatsData = [
  { value: "4L–5L", label: "Farmers Supported", detail: "Climate-resilient agriculture & watershed security" },
  { value: "25K–40K", label: "Youth Engaged", detail: "Skills, green jobs & rural entrepreneurship" },
  { value: "75–120", label: "FPOs & Collectives", detail: "Community ownership & market linkages" },
  { value: "8–12", label: "States", detail: "Pan-India ecosystem collaboration across 9 operational hubs" },
];

// Desktop climb: milestone node centres (px from the top of the block), Phase I lowest → Phase III highest.
// NODE_X are the 3 grid-column centres (grid gap 24px); the SVG path uses the same points in 1200 units.
const NODE_Y = [190, 126, 62];
const NODE_X = ["calc((100% - 48px) / 6)", "50%", "calc(100% - (100% - 48px) / 6)"];
const CLIMB_PATH = "M 30 214 C 100 206, 150 196, 192 190 S 480 140, 600 126 S 890 78, 1008 62 S 1120 38, 1172 30";

function PhaseCard({ p, i }: { p: Phase; i: number }) {
  const Icon = p.icon;
  const last = i === phasesData.length - 1;
  return (
    <div className={`h-full rounded-[26px] p-[1.5px] ${last ? "bg-gradient-to-br from-[#f7d774] via-[#d4a017] to-[#7a5a12]" : "bg-gradient-to-br from-[#e9dcb5] via-[#f3ead1] to-[#d9c48e]"} shadow-[0_30px_70px_-40px_rgba(90,61,0,0.6)]`}>
      <div className={`h-full rounded-[25px] flex flex-col overflow-hidden ${last ? "bg-[#062619] text-white" : "bg-[#fffdf7] text-[#14120c]"}`}>
        <div className="p-6 sm:p-7 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-3">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ${last ? "bg-amber-300 text-[#062619]" : "bg-[#062619] text-amber-200"}`}>
              {p.phaseLabel} · {p.years}
            </span>
            <span className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${last ? "bg-gradient-to-br from-[#f7d774] to-[#b8860b]" : "bg-gradient-to-br from-[#0b3d2a] to-[#062619]"}`}>
              <Icon className={`w-6 h-6 ${last ? "text-[#062619]" : "text-amber-300"}`} />
            </span>
          </div>
          <h3 className="mt-5 text-xl sm:text-2xl font-extrabold leading-tight">{p.title}</h3>
          <p className={`mt-2 text-sm font-semibold leading-relaxed ${last ? "text-amber-200/90" : "text-[#a1781e]"}`}>{p.focus}</p>
          <ul className="mt-5 space-y-3">
            {p.highlights.map((h) => (
              <li key={h} className={`flex items-start gap-2.5 text-sm leading-relaxed ${last ? "text-emerald-50/80" : "text-[#4a4338]"}`}>
                <CheckCircle2 className={`w-5 h-5 shrink-0 ${last ? "text-amber-300" : "text-[#0b5d3f]"}`} /> {h}
              </li>
            ))}
          </ul>
        </div>
        <div className={`px-6 sm:px-7 py-4 border-t ${last ? "border-white/10 bg-white/[0.05]" : "border-[#efe2bd] bg-[#f8f1df]"}`}>
          <p className={`text-xs font-extrabold uppercase tracking-[0.2em] ${last ? "text-amber-300" : "text-[#0b5d3f]"}`}>Strategic Outcome</p>
          <p className={`mt-1 text-sm font-semibold leading-relaxed ${last ? "text-white" : "text-[#3d3420]"}`}>{p.outcome}</p>
        </div>
      </div>
    </div>
  );
}

export default function Effort20Roadmap() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mActive, setMActive] = useState(0);
  const [climbIn, setClimbIn] = useState(true);
  const climbRef = useRef<HTMLDivElement>(null);

  // Phone slider: native scroll-snap; we only read which card is in view.
  useEffect(() => {
    const root = sliderRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setMActive(Number((e.target as HTMLElement).dataset.index));
      },
      { root, threshold: 0.6 }
    );
    cardRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Desktop: the staircase cards climb into place when scrolled into view.
  useEffect(() => {
    const el = climbRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    setClimbIn(false);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setClimbIn(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goToCard = (i: number) => {
    const slider = sliderRef.current;
    const card = cardRefs.current[i];
    if (slider && card) slider.scrollTo({ left: card.offsetLeft - slider.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section id="roadmap" data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0] scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 lux-guilloche" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] w-[55vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.16),transparent_65%)] lux-drift-b" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5a12]">
            <Target className="w-3.5 h-3.5 text-amber-600" /> EFFORT 2.0 · Strategic Roadmap (2026–2030)
          </p>
          <h2 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#14120c] leading-[1.05]">
            EFFORT — <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">The Next Chapter</span>
          </h2>
          <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
            A multi-year strategic blueprint driving institutional scale, community-led climate resilience, and digital governance across India.
          </p>
          {/* horizon line */}
          <div aria-hidden className="mt-8 flex items-center justify-center gap-4 text-sm font-extrabold text-[#7a5a12]">
            <span>2026</span>
            <span className="relative h-[2px] w-40 sm:w-64 rounded-full bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]">
              <span className="absolute -right-1 -top-[5px] w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-[#d4a017]" />
            </span>
            <span>2030</span>
          </div>
        </div>

        {/* ===== DESKTOP: rising staircase ===== */}
        <div ref={climbRef} className="hidden lg:block relative mt-12">
          {/* Climb path: a gold line rising through one milestone above each phase card.
              SVG x = column centres (1200-unit width), y = node heights in px (NODE_Y). */}
          <svg aria-hidden viewBox="0 0 1200 230" preserveAspectRatio="none" className="absolute inset-x-0 top-0 h-[230px] w-full overflow-visible">
            <defs>
              <linearGradient id="riseGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#0b5d3f" />
                <stop offset="55%" stopColor="#d4a017" />
                <stop offset="100%" stopColor="#f7d774" />
              </linearGradient>
            </defs>
            <path d={CLIMB_PATH} fill="none" stroke="#e5d7b0" strokeWidth="2" strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
            <path
              d={CLIMB_PATH}
              fill="none"
              stroke="url(#riseGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              strokeDasharray="1"
              strokeDashoffset={climbIn ? 0 : 1}
              style={{ transition: climbIn ? "stroke-dashoffset 2s ease-out" : "none", filter: "drop-shadow(0 0 6px rgba(212,160,23,0.55))" }}
            />
          </svg>

          {/* arrowhead at the top of the climb */}
          <span
            aria-hidden
            className="absolute w-0 h-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-[#e9b949] transition-opacity duration-500"
            style={{ left: "calc(97.6% - 2px)", top: 23, transform: "rotate(-12deg)", opacity: climbIn ? 1 : 0, transitionDelay: climbIn ? "1.8s" : "0s" }}
          />

          {/* Milestone nodes, year labels and drop lines into each card */}
          {phasesData.map((p, i) => (
            <div
              key={p.id}
              aria-hidden
              className="absolute -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
              style={{ left: NODE_X[i], top: NODE_Y[i] - 46, opacity: climbIn ? 1 : 0, transitionDelay: climbIn ? `${400 + i * 450}ms` : "0ms" }}
            >
              <span className={`rounded-full px-3 py-1 text-xs font-extrabold tracking-wider shadow-sm ${i === 2 ? "bg-gradient-to-r from-[#f7d774] to-[#d4a017] text-[#062619]" : "bg-[#062619] text-amber-200"}`}>
                {p.years}
              </span>
              <span className="relative mt-2.5 w-6 h-6 rounded-full bg-gradient-to-br from-[#fff3c4] via-[#f7d774] to-[#b8860b] ring-4 ring-[#fbf8f0] shadow-[0_0_0_6px_rgba(212,160,23,0.18),0_6px_16px_-4px_rgba(212,160,23,0.9)]">
                <span className="absolute inset-[7px] rounded-full bg-[#062619]" />
                {i === 2 && <span className="absolute -inset-2 rounded-full border-2 border-amber-400/60 animate-ping [animation-duration:2.4s]" />}
              </span>
              <span className="mt-1 h-[22px] w-[2px] bg-[repeating-linear-gradient(180deg,#d4a017_0_4px,transparent_4px_8px)]" />
            </div>
          ))}

          <div className="relative grid grid-cols-3 gap-6 items-start">
            {phasesData.map((p, i) => (
              <div
                key={p.id}
                className={`transition-[opacity,transform] duration-700 ease-out ${climbIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                style={{ marginTop: NODE_Y[i] + 38, transitionDelay: climbIn ? `${300 + i * 250}ms` : "0ms" }}
              >
                <PhaseCard p={p} i={i} />
              </div>
            ))}
          </div>
        </div>

        {/* ===== PHONE & TABLET: native swipe cards ===== */}
        <div className="lg:hidden mt-12">
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {phasesData.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => goToCard(i)}
                aria-current={i === mActive ? "step" : undefined}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold border transition-colors cursor-pointer ${
                  i === mActive ? "bg-[#062619] text-amber-200 border-[#062619]" : "bg-white text-[#3d3420] border-[#e5d7b0]"
                }`}
              >
                {p.phaseLabel} · {p.years}
              </button>
            ))}
          </div>
          <div ref={sliderRef} className="mt-5 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {phasesData.map((p, i) => (
              <div
                key={p.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                data-index={i}
                className="snap-start shrink-0 w-[88%] sm:w-[62%]"
              >
                <PhaseCard p={p} i={i} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-extrabold tabular-nums text-[#7a5a12]">
              {mActive + 1} <span className="text-[#c9b98e]">/ 3</span>
            </span>
            <div className="flex-1 grid grid-cols-3 gap-1.5">
              {phasesData.map((p, i) => (
                <span key={p.id} className={`h-1.5 rounded-full transition-colors ${i <= mActive ? "bg-gradient-to-r from-[#0b5d3f] to-[#d4a017]" : "bg-[#e8dcbb]"}`} />
              ))}
            </div>
            <span className="text-xs text-[#6b6047]">Swipe →</span>
          </div>
        </div>

        {/* ===== SIX STRATEGIC PILLARS (full detail) ===== */}
        <div className="mt-20 sm:mt-28">
          <StrategicPillars />
        </div>
      </div>

      {/* ===== TARGET IMPACT BY 2030 ===== */}
      <div className="relative mt-20 sm:mt-28 overflow-hidden bg-gradient-to-br from-[#0b3d2a] via-[#062619] to-[#03140d] text-white">
        <span aria-hidden className="pointer-events-none absolute -right-6 -bottom-16 text-[11rem] sm:text-[18rem] font-extrabold leading-none text-white/[0.04] select-none">2030</span>
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-amber-300">Target Impact by 2030</p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold">Quantifiable Strategic Outcomes</h3>
            </div>
            <span className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full border border-amber-300/50 px-4 py-2 text-xs font-extrabold tracking-wider text-amber-200">
              <Target className="w-4 h-4 text-amber-300" /> EFFORT 2.0 MASTER METRICS
            </span>
          </div>
          <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {impactStatsData.map((s) => (
              <div key={s.label} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:p-6 hover:border-amber-300/50 transition-colors">
                <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <dd className="text-xl min-[360px]:text-2xl min-[400px]:text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight bg-gradient-to-b from-[#fff3c4] to-[#d4a017] bg-clip-text text-transparent whitespace-nowrap">
                  {s.value}
                </dd>
                <dt className="mt-2 text-sm sm:text-base font-extrabold">{s.label}</dt>
                <p className="mt-1 text-xs sm:text-sm text-emerald-100/60 leading-snug break-words [hyphens:auto]">{s.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
