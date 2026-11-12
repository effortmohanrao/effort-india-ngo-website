import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye, Target } from "lucide-react";
import Reveal from "@/components/home/Reveal";

const statements = [
  {
    slug: "vision",
    label: "Vision",
    kicker: "Where we want communities to end up",
    icon: Eye,
    title: "Empowered Communities Building Resilient Futures",
    desc: "Empowered communities building resilient, inclusive, and sustainable futures — where communities are empowered to make informed decisions, manage their resources sustainably, and respond effectively to challenges.",
  },
  {
    slug: "mission",
    label: "Mission",
    kicker: "The approach we use to help them get there",
    icon: Target,
    title: "Sustainably Managing Resources & Empowering Youth",
    desc: "To enable communities to sustainably manage natural resources, strengthen youth skills and livelihoods, and function as a community-based knowledge-sharing and learning centre that fosters experiential learning, shared solutions, and improved well-being.",
  },
] as const;

// `images` = { vision, mission } photo URLs, looked up on the server by app/about/page.tsx.
export default function VisionMission({ images }: { images: Record<string, string> }) {
  return (
    <section data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 lux-guilloche" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 w-[50vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(16,120,80,0.10),transparent_65%)] lux-drift-a" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#7a5a12]">
            Vision &amp; Mission
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-[1.1] [text-wrap:balance]">
            What We&apos;re Working Toward,{" "}
            <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">And How</span> We&apos;ll Get There
          </h2>
          <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
            Two statements that shape every program decision we make — where we want communities to end up, and the approach we use to help them get there.
          </p>
        </Reveal>

        <div className="relative mt-14 grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* gold "&" medallion joining the two statements (side-by-side layouts only) */}
          <span
            aria-hidden
            className="hidden md:flex absolute left-1/2 top-[calc(50%-1rem)] -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#fff3c4] via-[#f7d774] to-[#b8860b] ring-8 ring-[#fbf8f0] items-center justify-center text-3xl font-extrabold text-[#062619] shadow-[0_15px_35px_-10px_rgba(212,160,23,0.8)]"
          >
            &amp;
          </span>

          {statements.map((s, i) => {
            const dark = i === 1;
            const Icon = s.icon;
            const img = images[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 180}>
                <article
                  className={`group h-full rounded-[28px] p-[1.5px] shadow-[0_40px_80px_-45px_rgba(6,38,25,0.7)] ${
                    dark ? "bg-gradient-to-br from-[#f7d774] via-[#7a5a12] to-[#f7d774]" : "bg-gradient-to-br from-[#e9dcb5] via-[#f3ead1] to-[#d9c48e]"
                  }`}
                >
                  <div className={`h-full rounded-[27px] overflow-hidden flex flex-col ${dark ? "bg-[#062619] text-white" : "bg-[#fffdf7] text-[#14120c]"}`}>
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#0b3d2a]">
                      {img && (
                        <Image
                          src={img}
                          alt={`${s.label}: ${s.title}`}
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                        />
                      )}
                      <div className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-[#062619]" : "from-[#fffdf7]"} via-transparent to-transparent`} />
                      <span
                        className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-extrabold uppercase tracking-[0.2em] shadow-lg ${
                          dark ? "bg-gradient-to-r from-[#f7d774] to-[#d4a017] text-[#062619]" : "bg-[#062619] text-amber-200"
                        }`}
                      >
                        <Icon className="w-4 h-4" /> {s.label}
                      </span>
                    </div>
                    <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
                      <span aria-hidden className={`absolute right-6 -top-6 text-8xl font-extrabold leading-none select-none ${dark ? "text-white/[0.06]" : "text-[#f0e6c8]"}`}>
                        &ldquo;
                      </span>
                      <p className={`text-xs font-extrabold uppercase tracking-[0.2em] ${dark ? "text-amber-300" : "text-[#0b5d3f]"}`}>{s.kicker}</p>
                      <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold leading-tight">{s.title}</h3>
                      <div className={`mt-4 h-[3px] w-14 rounded-full ${dark ? "bg-gradient-to-r from-amber-300 to-transparent" : "bg-gradient-to-r from-[#0b5d3f] to-[#d4a017]"}`} />
                      <p className={`mt-4 text-base leading-relaxed ${dark ? "text-emerald-50/80" : "text-[#4a4338]"}`}>{s.desc}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <Link
            href="/impact"
            className="lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold px-8 py-4 shadow-[0_14px_30px_-10px_rgba(6,38,25,0.7)] hover:-translate-y-0.5 transition-transform"
          >
            Explore Our Purpose <ArrowUpRight className="w-4 h-4 text-amber-300" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
