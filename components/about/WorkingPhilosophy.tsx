import Link from "next/link";
import { ArrowRight, BarChart3, Compass, Eye, Handshake, MessageCircle, Search, Sprout } from "lucide-react";
import InView from "@/components/home/InView";
import Reveal from "@/components/home/Reveal";

const steps = [
  { title: "Community Listening", icon: MessageCircle, note: "starts with ears, not plans" },
  { title: "Need Assessment", icon: Search, note: "verify before we design" },
  { title: "Collaborative Planning", icon: Compass, note: "built with, not for" },
  { title: "Transparent Execution", icon: Handshake, note: "no hidden line items" },
  { title: "Continuous Monitoring", icon: Eye, note: "check-ins, not check-outs" },
  { title: "Impact Measurement", icon: BarChart3, note: "outcomes over activity" },
  { title: "Long-Term Sustainability", icon: Sprout, note: "still standing after we leave" },
];

export default function WorkingPhilosophy() {
  return (
    <section data-keep-motion className="relative isolate overflow-clip bg-[#03140d] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(247,215,116,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,215,116,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 w-[50vw] aspect-square -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(212,160,23,0.14),transparent_65%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-12 gap-12 lg:gap-14">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
            Our Working Philosophy
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
            How We Think <span className="lux-gold-text">Before We Act</span>
          </h2>
          <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">
            Every program starts on paper, not in the field — mapped, questioned, and stress-tested before a single rupee moves. This is the working process behind everything we build.
          </p>
          <Link
            href="/programs"
            className="lux-sheen relative overflow-hidden mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold px-7 py-3.5 shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)]"
          >
            See The Process In Action <ArrowRight className="w-4 h-4" />
          </Link>
          <dl className="mt-9 pt-6 border-t border-white/10 flex gap-10">
            <div>
              <dd className="text-4xl font-extrabold lux-gold-text">7</dd>
              <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-50/60">Planning Stages</dt>
            </div>
            <div>
              <dd className="text-4xl font-extrabold lux-gold-text">27+</dd>
              <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-emerald-50/60">Years Refined</dt>
            </div>
          </dl>
        </Reveal>

        <InView className="lg:col-span-8 relative">
          {/* the path the 7 stages walk along */}
          <span aria-hidden className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10" />
          <span
            aria-hidden
            className="absolute left-[27px] top-4 bottom-4 w-[2px] origin-top bg-gradient-to-b from-[#10b981] via-[#d4a017] to-[#f7d774] shadow-[0_0_12px_rgba(247,215,116,0.6)] scale-y-0 group-data-[inview=true]:scale-y-100 transition-transform duration-[2200ms] ease-out"
          />
          <ol className="relative space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="relative pl-20 opacity-0 translate-x-6 group-data-[inview=true]:opacity-100 group-data-[inview=true]:translate-x-0 transition-[opacity,transform] duration-700 ease-out"
                style={{ transitionDelay: `${200 + i * 160}ms` }}
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full p-[2px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] shadow-[0_10px_25px_-8px_rgba(212,160,23,0.7)]">
                  <span className="w-full h-full rounded-full bg-[#062619] flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-amber-300" />
                  </span>
                </span>
                <div className="group/step rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 hover:border-amber-300/50 hover:bg-white/[0.07] transition-colors">
                  <span className="text-sm font-extrabold tabular-nums text-amber-300 shrink-0">0{i + 1}</span>
                  <h3 className="text-lg font-extrabold flex-1">{s.title}</h3>
                  <p className="text-sm italic text-amber-200/80">— {s.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </InView>
      </div>
    </section>
  );
}
