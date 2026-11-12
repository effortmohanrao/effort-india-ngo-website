import Link from "next/link";
import { ArrowRight, Heart, Users } from "lucide-react";
import CountUp from "@/components/home/CountUp";
import Reveal from "@/components/home/Reveal";

const stats = [
  { to: 1909, suffix: "+", label: "Villages Transformed" },
  { to: 27, suffix: "+", label: "Years of Service" },
  { to: 267000, suffix: "+", label: "Lives Impacted" },
  { to: 80, suffix: "+", label: "Completed & Active Projects" },
];

const leaves = [
  { cx: 110, cy: 235, r: 34 },
  { cx: 290, cy: 235, r: 34 },
  { cx: 200, cy: 160, r: 46 },
  { cx: 155, cy: 195, r: 26 },
  { cx: 245, cy: 195, r: 26 },
];

export default function AboutFinale() {
  return (
    <section data-keep-motion className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbf8f0] via-[#f8eed4] to-[#f3e2b6]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-50 lux-guilloche" />
      <div aria-hidden className="pointer-events-none absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[120vw] max-w-[1500px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,23,0.3),transparent_65%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
        <div>
          <Reveal>
            <h2 className="text-[2.5rem] sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-[#14120c]">
              Together We Can Create{" "}
              <span className="block bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent pb-1">A Better Tomorrow</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-[#5a5240] text-base sm:text-lg leading-relaxed">
              Every contribution, every hour, every voice moves communities closer to a future they build on their own strength. This is where you come in.
            </p>
          </Reveal>
          <Reveal delay={250} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/get-involved"
              className="lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold px-8 py-4 shadow-[0_14px_30px_-10px_rgba(6,38,25,0.7)] hover:-translate-y-0.5 transition-transform"
            >
              Become A Partner <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
            <Link
              href="/get-involved#pathways"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#062619] text-[#062619] font-extrabold px-8 py-4 hover:bg-[#062619] hover:text-amber-100 transition-colors"
            >
              <Users className="w-4 h-4" /> Volunteer With Us
            </Link>
          </Reveal>
          <Reveal delay={320} className="mt-5">
            <Link href="/donate" className="group inline-flex items-center gap-2 font-extrabold text-[#7a5a12] hover:text-[#062619]">
              <Heart className="w-4 h-4 fill-current" /> Support Our Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <dl className="mt-12 pt-8 border-t border-[#d9c48e] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-2xl min-[360px]:text-3xl 2xl:text-4xl font-extrabold text-[#0b5d3f] tracking-tight whitespace-nowrap">
                  <CountUp to={s.to} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-[#7a5a12] leading-snug">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Growing tree artwork */}
        <Reveal delay={200} className="relative h-[320px] sm:h-[400px] lg:h-[460px]">
          <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" aria-hidden>
            <defs>
              <radialGradient id="finaleSun" cx="50%" cy="88%" r="55%">
                <stop offset="0%" stopColor="#f7d774" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f7d774" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="finaleCanopy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#0b5d3f" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="440" r="160" fill="url(#finaleSun)" />
            {[60, 100, 140].map((r) => (
              <path key={r} d={`M ${200 - r} 440 A ${r} ${r} 0 0 1 ${200 + r} 440`} stroke="#d4a017" strokeOpacity="0.45" strokeWidth="1.5" />
            ))}
            <path d="M 30 448 C 100 430, 160 460, 220 440 C 280 422, 330 448, 390 434" stroke="#a1781e" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 200 440 C 198 360, 202 300, 200 250" stroke="#5c3d12" strokeWidth="6" strokeLinecap="round" />
            <path d="M 200 300 C 170 280, 140 260, 110 235" stroke="#5c3d12" strokeWidth="4" strokeLinecap="round" />
            <path d="M 200 300 C 230 280, 260 260, 290 235" stroke="#5c3d12" strokeWidth="4" strokeLinecap="round" />
            <path d="M 200 260 C 190 220, 190 190, 200 160" stroke="#5c3d12" strokeWidth="4" strokeLinecap="round" />
            {leaves.map((c, i) => (
              <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="url(#finaleCanopy)" fillOpacity="0.85" />
            ))}
            {[{ x: 90, y: 90 }, { x: 300, y: 70 }, { x: 250, y: 110 }].map((b, i) => (
              <path
                key={i}
                d={`M ${b.x} ${b.y} q 8 -6 16 0 q 8 -6 16 0`}
                stroke="#0b5d3f"
                strokeWidth="2"
                strokeLinecap="round"
                className="animate-bird-bob"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            ))}
            {[{ x: 130, y: 420 }, { x: 260, y: 430 }, { x: 180, y: 410 }, { x: 220, y: 425 }].map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="#d4a017" className="animate-seed-rise" style={{ animationDelay: `${i * 1.4}s` }} />
            ))}
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
