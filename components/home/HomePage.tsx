import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Coins,
  Handshake,
  Landmark,
  MapPin,
  Play,
  Quote,
  ShieldCheck,
  Sparkles,
  Trees,
  Home as HomeIcon,
  CheckCircle2,
  Activity,
  Map as MapIcon,
  CalendarDays,
  Lightbulb,
  Users,
  Layers,
  LineChart,
  BarChart3,
  Calendar,
  Briefcase,
  ClipboardList,
  Award,
} from "lucide-react";
import ComplianceRecords from "./ComplianceRecords";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import ComplianceGauge from "./ComplianceGauge";
import InView from "./InView";
import PartnershipShowcase from "./PartnershipShowcase";
import VoicesSpotlight from "./VoicesSpotlight";
import {
  heroLines,
  heroSubtext,
  heroCredibility,
  carbonProjectHref,
  impactHeadline,
  impactStats,
  complianceTrustStrip,
  processSteps,
  processChips,
  partnershipSlides,
  partnershipStats,
  partnershipBadges,
  partnerNames,
  csrStages,
  csrMetrics,
  voiceStories,
} from "./homeData";

export type HomeMedia = {
  hero: string | null;
  partnerships: (string | null)[]; // same order as partnershipSlides
  testimonials: (string | null)[]; // same order as voiceStories
};

const container = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

// On phones a card grid becomes a horizontal swipe row; from sm up it is a normal grid.
const swipeRow =
  "-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function SwipeHint({ light }: { light?: boolean }) {
  return <p className={`mt-3 text-xs sm:hidden ${light ? "text-emerald-100/70" : "text-slate-500"}`}>Swipe to see more →</p>;
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-amber-300" : "text-amber-700"}`}>
      <span className={`h-px w-6 ${light ? "bg-amber-300" : "bg-amber-600"}`} />
      {children}
    </p>
  );
}

const impactIcons = { villages: HomeIcon, done: CheckCircle2, active: Activity, districts: MapIcon, years: CalendarDays };

const processIcons = [Lightbulb, Users, Layers, LineChart, ShieldCheck];
const csrIcons = [Briefcase, ClipboardList, Users, ShieldCheck];
const chipIcons = [MapPin, ShieldCheck, BarChart3, Calendar, Users, Landmark];

// Deterministic particle layout (same on server and client, no hydration mismatch).
const heroParticles = Array.from({ length: 18 }, (_, i) => ({
  left: (i * 37 + 7) % 100,
  size: 2 + (i % 3),
  dur: 9 + (i % 6) * 2,
  delay: -((i * 1.7) % 14),
}));

export default function HomePage({ media }: { media: HomeMedia }) {
  return (
    <div className="bg-[#faf8f3] text-slate-800">
      {/* ===== 1. HERO (premium: deep green + gold) ===== */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white lg:min-h-[92vh] flex items-center">
        {/* Photo with slow cinematic zoom */}
        {media.hero && (
          <div className="absolute inset-0 -z-30 overflow-hidden">
            <Image src={media.hero} alt="EFFORT field work" fill preload sizes="100vw" className="object-cover opacity-60 lux-kenburns" />
          </div>
        )}
        {/* Readability + colour grading */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#03140d] via-[#03140d]/88 to-[#03140d]/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 -z-20 bg-gradient-to-t from-[#03140d] to-transparent" />
        {/* Gold & emerald glows (radial gradients, no blur filters = smooth on phones) */}
        <div aria-hidden className="pointer-events-none absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(212,160,23,0.22),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-1/3 right-[-10%] w-[60vw] h-[60vw] -z-10 rounded-full lux-drift-b bg-[radial-gradient(circle,rgba(16,185,129,0.22),transparent_60%)]" />
        {/* Fine gold dot texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* Rising gold particles */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {heroParticles.map((pt, i) => (
            <span
              key={i}
              className={`lux-particle absolute bottom-0 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(247,215,116,0.9)] ${i % 2 ? "hidden sm:block" : ""}`}
              style={{ left: `${pt.left}%`, width: pt.size, height: pt.size, animationDuration: `${pt.dur}s`, animationDelay: `${pt.delay}s` }}
            />
          ))}
        </div>

        <div className={`${container} w-full py-16 sm:py-24 lg:py-28 grid lg:grid-cols-12 gap-12 items-center`}>
          <div className="lg:col-span-7 min-w-0">
            <p className="lux-rise inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200" style={{ animationDelay: "100ms" }}>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Together We Create Lasting Impact
            </p>
            <h1 className="mt-7 text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
              {heroLines.map((l, i) => (
                <span key={l.text} className="block overflow-hidden pb-1">
                  <span className="lux-rise inline-block" style={{ animationDelay: `${250 + i * 160}ms` }}>
                    <span className={l.accent ? "lux-gold-text" : undefined}>{l.text}</span>
                  </span>
                </span>
              ))}
            </h1>
            <div className="lux-rise mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-amber-300 to-transparent" style={{ animationDelay: "750ms" }} />
            <p className="lux-rise mt-6 text-base sm:text-lg text-emerald-50/85 leading-relaxed max-w-2xl" style={{ animationDelay: "850ms" }}>{heroSubtext}</p>
            <div className="lux-rise mt-9 flex flex-col sm:flex-row gap-3.5" style={{ animationDelay: "1000ms" }}>
              <Link href="/programs" className="lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#03140d] font-extrabold px-8 py-4 shadow-[0_10px_30px_-8px_rgba(212,160,23,0.7)] hover:-translate-y-0.5 transition-transform">
                Explore Our Programs <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/get-involved" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 hover:border-amber-300/60 font-semibold px-8 py-4 transition-colors">
                <span className="w-7 h-7 rounded-full bg-amber-300/15 border border-amber-300/50 flex items-center justify-center"><Play className="w-3 h-3 fill-amber-300 text-amber-300" /></span>
                Become a Volunteer
              </Link>
            </div>
            <ul className="lux-rise mt-10 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-emerald-50/85 max-w-2xl" style={{ animationDelay: "1150ms" }}>
              {heroCredibility.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-300/15 border border-amber-300/50 flex items-center justify-center shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 text-amber-300" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Climate Resilience Flagship — glass card with rotating gold border */}
          <div className="lg:col-span-5 min-w-0 lux-rise" style={{ animationDelay: "600ms" }}>
            <div className="relative rounded-[28px] p-[1.5px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <div aria-hidden className="absolute left-1/2 top-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full lux-spin bg-[conic-gradient(from_0deg,transparent_0deg,#f7d774_60deg,transparent_120deg,transparent_180deg,#10b981_240deg,transparent_300deg)]" />
              </div>
              <div className="relative rounded-[27px] bg-[#062619]/95 p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 text-emerald-200 border border-emerald-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" /> Climate Resilience Flagship
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-[#e9b949] to-[#f7d774] text-[#03140d] px-3 py-1 text-xs font-extrabold uppercase tracking-wider">Rare Opportunity</span>
                </div>
                <h2 className="mt-5 text-2xl sm:text-[1.7rem] font-extrabold leading-tight">Horticulture &amp; Timber Carbon Credit Project</h2>
                <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-amber-300/25 bg-gradient-to-r from-amber-300/10 to-transparent px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-200/80">Global Climate Tech Partner</p>
                    <p className="text-xl font-extrabold tracking-[0.15em] lux-gold-text">VARAHA</p>
                  </div>
                  <span className="rounded-full border border-amber-300/50 text-amber-200 px-3 py-1 text-xs font-bold">Carbon Partner</span>
                </div>
                <ul className="mt-5 space-y-3.5 text-sm text-emerald-50/85">
                  <li className="flex gap-3"><Trees className="w-5 h-5 text-amber-300 shrink-0" /><span><strong className="text-white">Horticulture &amp; Timber Species Plantation</strong> driving long-term carbon removal</span></li>
                  <li className="flex gap-3"><Coins className="w-5 h-5 text-amber-300 shrink-0" /><span><strong className="text-white">Direct Carbon Credit Generation &amp; Monetization</strong> for rural farmers</span></li>
                  <li className="flex gap-3"><ShieldCheck className="w-5 h-5 text-amber-300 shrink-0" /><span><strong className="text-white">Carbon-Credit-Exclusive Model</strong> — one of EFFORT&apos;s rare projects built purely around verified carbon credits</span></li>
                </ul>
                <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-white/10">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-200/70">Target Coverage</p>
                    <p className="text-3xl font-extrabold lux-gold-text">500 Acres</p>
                  </div>
                  <Link href={carbonProjectHref} className="lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] to-[#d4a017] text-[#03140d] font-extrabold px-5 py-3 text-sm">
                    Explore Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div aria-hidden className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-amber-200/40 justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-amber-300 lux-scroll-cue" />
        </div>
      </section>

      {/* ===== 2. IMPACT (premium: continues the hero's deep green + gold) ===== */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white">
        {/* Light from above + gold dot texture + gold hairline at the bottom */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] max-w-[1400px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

        <div className={`${container} py-20 sm:py-28`}>
          <Reveal className="text-center max-w-2xl mx-auto">
            <Eyebrow light>Our Reach</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Impact That Speaks in <span className="lux-gold-text">Numbers</span>
            </h2>
            <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">
              Every figure below reflects real work on the ground — communities reached, projects delivered, and years of consistent, on-the-record service.
            </p>
          </Reveal>

          {/* Headline number with a slowly turning gold ring behind it */}
          <Reveal delay={150} className="relative mt-14 sm:mt-16 flex flex-col items-center text-center">
            <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-64 h-64 sm:w-96 sm:h-96 -z-10">
              <div className="w-full h-full rounded-full border border-dashed border-amber-300/25 lux-spin" style={{ animationDuration: "40s" }} />
              <div className="absolute inset-8 sm:inset-12 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.18),transparent_70%)]" />
            </div>
            <p className="text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none bg-gradient-to-b from-[#fff3c4] via-[#f7d774] to-[#c9921a] bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(212,160,23,0.25)]">
              <CountUp to={impactHeadline.num} suffix={impactHeadline.suffix} duration={2400} />
            </p>
            <div className="mt-5 flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-300" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-200">{impactHeadline.label}</p>
              <span className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-300" />
            </div>
          </Reveal>

          {/* Five stat tiles */}
          <ul className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
            {impactStats.map((s, i) => {
              const Icon = impactIcons[s.icon];
              return (
                <Reveal
                  as="li"
                  key={s.label}
                  delay={i * 110}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 text-center hover:-translate-y-1 hover:border-amber-300/50 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-20px_rgba(212,160,23,0.45)] ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <span className="mx-auto w-12 h-12 rounded-full border border-amber-300/50 bg-amber-300/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </span>
                  <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <CountUp to={s.num} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-sm font-bold uppercase tracking-wider text-amber-200">{s.label}</p>
                  <p className="mt-1 text-xs sm:text-sm text-emerald-50/60">{s.desc}</p>
                </Reveal>
              );
            })}
          </ul>

          <Reveal delay={200} className="mt-12 text-center">
            <Link
              href="/impact"
              className="lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/10 hover:bg-amber-300/20 px-6 sm:px-7 py-3.5 text-sm font-bold text-amber-100 transition-colors"
            >
              Explore Full Impact Ledger &amp; Interactive GIS Field Map <ArrowUpRight className="w-4 h-4 text-amber-300 shrink-0" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== 3. TRUST & COMPLIANCE (premium: ivory certificate + deep green vault) ===== */}
      <section id="trust-section" data-keep-motion className="relative isolate overflow-hidden bg-[#f8f3e6] lux-guilloche scroll-mt-28">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />

        <div className={`${container} py-20 sm:py-28`}>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5a12]">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> Verified • Government Recognized
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-tight">
              Built on <span className="bg-gradient-to-r from-[#a1781e] via-[#d4a017] to-[#a1781e] bg-clip-text text-transparent">Transparency</span>, Backed by{" "}
              <span className="text-[#0b5d3f]">Compliance</span>
            </h2>
            <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
              Our commitment to transparency is reflected through nationally recognized registrations, regulatory compliance, financial accountability, and responsible governance, giving every stakeholder complete confidence in partnering with us.
            </p>
          </Reveal>

          {/* Vault: deep green panel, gold frame */}
          <Reveal delay={120} className="mt-14">
            <div className="relative rounded-[32px] p-[1.5px] bg-gradient-to-br from-[#f7d774] via-[#a1781e] to-[#f7d774] shadow-[0_40px_90px_-35px_rgba(6,38,25,0.75)]">
              <div className="relative overflow-hidden rounded-[31px] bg-gradient-to-br from-[#0b3d2a] via-[#062619] to-[#03140d] text-white p-6 sm:p-10 grid lg:grid-cols-12 gap-10 items-center">
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[radial-gradient(circle,rgba(247,215,116,0.18),transparent_65%)] lux-drift-b" />
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative lg:col-span-7 min-w-0">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
                    <span className="h-px w-8 bg-amber-300" /> Official Certification Vault
                  </p>
                  <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold">Trust &amp; Compliance Center</h3>
                  <p className="mt-3 text-emerald-50/75 leading-relaxed">
                    Our organization strictly adheres to the highest standards of national statutory compliance, legal registrations, financial accountability, and government audit transparency.
                  </p>

                  <div className="mt-7 rounded-2xl border border-amber-300/25 bg-white/[0.04] p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="inline-flex items-center gap-2 text-sm font-bold text-amber-200">
                        <Landmark className="w-4 h-4 text-amber-300" /> Govt. of Andhra Pradesh • Reg. No. 340/1999
                      </p>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/30 px-3 py-1 text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" /> Active &amp; Compliant
                      </span>
                    </div>
                    <p className="mt-3 text-lg font-bold">Effort (A Society for the Development of Agriculture and Youth)</p>
                    <p className="mt-1.5 text-sm text-emerald-50/70 leading-relaxed">
                      Registered under the Societies Registration Act XXI of 1860 • HQ: Srujana, #9-240, G.T. Road, Martur - 523 301, Bapatla Dist., Andhra Pradesh
                    </p>
                    <dl className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        ["Charity ID", "010330140"],
                        ["CSR-1 Reg.", "CSR00034988"],
                        ["Tax Status", "80G / 12AB"],
                      ].map(([k, v]) => (
                        <div key={k} className="rounded-xl border border-amber-300/20 bg-gradient-to-b from-amber-300/10 to-transparent px-4 py-2.5 sm:px-3 sm:py-3 flex sm:block items-center justify-between gap-3 sm:text-center">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-amber-200/80">{k}</dt>
                          <dd className="sm:mt-1 font-mono text-base sm:text-lg font-bold tracking-wider text-white">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                <div className="relative lg:col-span-5 flex flex-col items-center text-center">
                  <ComplianceGauge />
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] px-5 py-2 text-xs font-extrabold tracking-[0.2em] shadow-[0_10px_25px_-8px_rgba(212,160,23,0.7)]">
                    <ShieldCheck className="w-4 h-4" /> GOVERNMENT REGISTERED
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14">
            <ComplianceRecords />
          </div>
        </div>

        {/* Gold trust ribbon */}
        <div className="relative border-y border-amber-500/30 bg-gradient-to-r from-[#062619] via-[#0b3d2a] to-[#062619] py-4 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#062619] to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#062619] to-transparent" />
          <ul className="lux-marquee flex w-max gap-10 whitespace-nowrap">
            {[...complianceTrustStrip, ...complianceTrustStrip].map((t, i) => (
              <li key={i} aria-hidden={i >= complianceTrustStrip.length} className="inline-flex items-center gap-2.5 text-sm font-bold text-amber-100">
                <ShieldCheck className="w-4 h-4 text-amber-300" /> {t}
                <span className="ml-8 text-amber-400">✦</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 4. HOW WE WORK (premium: gold timeline on deep green) ===== */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[110vw] max-w-[1300px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.14),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 w-[50vw] aspect-square -z-10 rounded-full lux-drift-a bg-[radial-gradient(circle,rgba(16,185,129,0.16),transparent_65%)]" />
        {/* contour-line texture, like a field survey map */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[repeating-radial-gradient(circle_at_80%_20%,#f7d774_0_1px,transparent_1px_26px)]" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

        <div className={`${container} py-20 sm:py-28`}>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Strategic Execution Engine
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              How Effort Delivers <span className="lux-gold-text">Auditable Social Impact</span>
            </h2>
            <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">
              Every initiative follows a disciplined, 5-phase execution model — bridging ground-level community diagnostics with corporate CSR compliance and self-sustaining local governance.
            </p>
          </Reveal>

          <InView className="relative mt-16 sm:mt-20">
            {/* Desktop: horizontal gold line that draws through the medallions */}
            <div aria-hidden className="hidden lg:block absolute left-[10%] right-[10%] top-9 h-[2px] bg-white/10">
              <div className="h-full origin-left bg-gradient-to-r from-amber-300 via-[#f7d774] to-emerald-400 shadow-[0_0_12px_rgba(247,215,116,0.8)] scale-x-0 group-data-[inview=true]:scale-x-100 transition-transform duration-[1800ms] ease-out" />
            </div>
            {/* Mobile/tablet: vertical line on the left */}
            <div aria-hidden className="lg:hidden absolute left-9 top-2 bottom-2 w-[2px] bg-white/10">
              <div className="w-full h-full origin-top bg-gradient-to-b from-amber-300 via-[#f7d774] to-emerald-400 shadow-[0_0_12px_rgba(247,215,116,0.8)] scale-y-0 group-data-[inview=true]:scale-y-100 transition-transform duration-[1800ms] ease-out" />
            </div>

            <ol className="relative grid lg:grid-cols-5 gap-6 lg:gap-5">
              {processSteps.map((s, i) => {
                const Icon = processIcons[i];
                return (
                  <li
                    key={s.step}
                    className="relative flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 opacity-0 translate-y-6 group-data-[inview=true]:opacity-100 group-data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700 ease-out"
                    style={{ transitionDelay: `${300 + i * 260}ms` }}
                  >
                    {/* Medallion */}
                    <div className="relative shrink-0 z-10">
                      <span aria-hidden className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(247,215,116,0.35),transparent_70%)] opacity-0 group-data-[inview=true]:opacity-100 transition-opacity duration-700" style={{ transitionDelay: `${500 + i * 260}ms` }} />
                      <div className="relative w-[4.5rem] h-[4.5rem] rounded-full p-[2px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] shadow-[0_10px_30px_-8px_rgba(212,160,23,0.6)]">
                        <div className="w-full h-full rounded-full bg-[#062619] flex flex-col items-center justify-center">
                          <Icon className="w-6 h-6 text-amber-300" />
                        </div>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-[#f7d774] to-[#d4a017] text-[#062619] text-xs font-extrabold flex items-center justify-center ring-2 ring-[#03140d]">
                        {s.step}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="group/card relative flex-1 lg:mt-7 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 hover:border-amber-300/50 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(212,160,23,0.5)] transition-all duration-300 lg:text-center">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300/80">Phase {s.step}</p>
                      <h3 className="mt-1.5 text-lg font-extrabold text-amber-200">{s.badge}</h3>
                      <p className="mt-3 text-sm text-emerald-50/75 leading-relaxed">{s.topic}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </InView>

          <InView className="mt-16">
            <ul className="flex flex-wrap justify-center gap-3">
              {processChips.map((c, i) => {
                const Icon = chipIcons[i];
                return (
                  <li
                    key={c}
                    className="rounded-full p-[1px] bg-gradient-to-r from-amber-300/70 via-amber-200/20 to-emerald-400/60 opacity-0 scale-90 group-data-[inview=true]:opacity-100 group-data-[inview=true]:scale-100 transition-[opacity,transform] duration-500"
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#062619] hover:bg-[#0b3d2a] px-4 py-2.5 text-sm font-semibold text-emerald-50 transition-colors">
                      <Icon className="w-4 h-4 text-amber-300" /> {c}
                    </span>
                  </li>
                );
              })}
            </ul>
          </InView>
        </div>
      </section>

      {/* ===== 5. GOVERNMENT & INSTITUTIONAL PARTNERSHIPS (premium: ivory + photo showcase) ===== */}
      <section id="partnerships" data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0] scroll-mt-28">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 w-[45vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.14),transparent_65%)] lux-drift-b" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 w-[45vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(16,120,80,0.10),transparent_65%)] lux-drift-a" />

        <div className={`${container} py-20 sm:py-28`}>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <Reveal className="lg:col-span-5 min-w-0">
              <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#7a5a12]">
                <Landmark className="w-3.5 h-3.5 text-amber-600" /> Government &amp; Institutional Partnerships
              </p>
              <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-[1.1]">
                Building Strong Partnerships For{" "}
                <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Sustainable Development</span>
              </h2>
              <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
                We collaborate with central &amp; state government departments, international development agencies, corporate CSR funds, and academic institutions to deliver transparent, scalable, and auditable social impact.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {partnershipBadges.map((b) => (
                  <li key={b} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#e5d7b0] px-3 py-1.5 text-xs font-bold text-[#3d3420] shadow-sm">
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-700" /> {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link href="/get-involved" className="whitespace-nowrap lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold px-7 py-3.5 shadow-[0_12px_30px_-10px_rgba(6,38,25,0.7)] hover:-translate-y-0.5 transition-transform">
                  Become A Partner <ArrowUpRight className="w-4 h-4 text-amber-300" />
                </Link>
                <a href="#trust-section" className="whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#d9c48e] hover:border-amber-500 bg-white font-bold text-[#3d3420] px-7 py-3.5 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-amber-600" /> View Statutory Credentials
                </a>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-7 min-w-0">
              <PartnershipShowcase slides={partnershipSlides.map((s, i) => ({ ...s, image: media.partnerships[i] }))} />
            </Reveal>
          </div>

          {/* Reach in numbers */}
          <InView className="mt-16">
            <dl className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {partnershipStats.map((s, i) => (
                <div
                  key={s.label}
                  className="relative overflow-hidden rounded-2xl bg-white border border-[#efe2bd] p-4 sm:p-5 shadow-[0_14px_35px_-25px_rgba(90,61,0,0.5)] hover:-translate-y-1 hover:border-amber-400 transition-all duration-300 opacity-0 translate-y-4 group-data-[inview=true]:opacity-100 group-data-[inview=true]:translate-y-0"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]" />
                  <dd className="text-xl sm:text-3xl font-extrabold text-[#062619] tracking-tight">{s.value}</dd>
                  <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-[#a1781e]">{s.label}</dt>
                  <p className="mt-0.5 text-xs text-[#6b6047]">{s.desc}</p>
                </div>
              ))}
            </dl>
          </InView>
        </div>

        {/* Partner names ribbon */}
        <div className="relative pb-16 sm:pb-20 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-40 z-10 bg-gradient-to-r from-[#fbf8f0] to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-40 z-10 bg-gradient-to-l from-[#fbf8f0] to-transparent" />
          <ul className="lux-marquee-rev flex w-max gap-4">
            {[...partnerNames, ...partnerNames].map((n, i) => (
              <li key={i} aria-hidden={i >= partnerNames.length} className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white border border-[#e5d7b0] px-5 py-3 text-sm font-bold text-[#3d3420] shadow-sm">
                <Handshake className="w-4 h-4 text-amber-600" /> {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 6. CSR PARTNERSHIP MODEL (premium: gold pipeline on deep green) ===== */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-gradient-to-b from-[#062619] via-[#03140d] to-[#03140d] text-white">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute top-1/3 -right-40 w-[50vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.16),transparent_65%)] lux-drift-b" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(247,215,116,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(247,215,116,0.6)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

        <div className={`${container} py-20 sm:py-28`}>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              <Handshake className="w-3.5 h-3.5 text-amber-300" /> CSR Partnerships &amp; Transparent Governance
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Transforming Corporate Responsibility Into <span className="lux-gold-text">Verified Social Impact</span>
            </h2>
            <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">
              Fully registered with the government (Form CSR-1), Section 80G tax-exempt, and NITI Aayog DARPAN empaneled for simple, transparent corporate CSR partnerships.
            </p>
          </Reveal>

          {/* 4-stage pipeline */}
          <InView className="mt-16">
            <ol className={`relative sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 ${swipeRow}`}>
              {csrStages.map((c, i) => {
                const Icon = csrIcons[i];
                const last = i === csrStages.length - 1;
                return (
                  <li
                    key={c.step}
                    className="snap-start shrink-0 w-[82%] sm:w-auto relative opacity-0 translate-y-6 group-data-[inview=true]:opacity-100 group-data-[inview=true]:translate-y-0 transition-[opacity,transform] duration-700 ease-out"
                    style={{ transitionDelay: `${i * 220}ms` }}
                  >
                    {/* flowing connector to the next stage (desktop) */}
                    {!last && (
                      <span aria-hidden className="hidden lg:block absolute top-16 -right-8 w-8 h-[2px] lux-flow opacity-80">
                        <span className="absolute -right-1 -top-[4px] w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px] border-l-amber-300" />
                      </span>
                    )}
                    <div className="group/stage relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 sm:p-7 flex flex-col hover:border-amber-300/50 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(212,160,23,0.55)] transition-all duration-300">
                      <span aria-hidden className="absolute -top-4 -right-1 text-[7rem] leading-none font-extrabold lux-outline-num select-none group-hover/stage:opacity-100 opacity-60 transition-opacity">
                        {c.step}
                      </span>
                      <div className="relative flex items-center justify-between gap-3">
                        <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f7d774] via-[#e9b949] to-[#b8860b] flex items-center justify-center shadow-[0_10px_25px_-8px_rgba(212,160,23,0.7)] group-hover/stage:rotate-6 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[#062619]" />
                        </span>
                      </div>
                      <span className="relative mt-5 self-start rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">{c.tag}</span>
                      <h3 className="relative mt-3 text-xl font-extrabold text-white">{c.title}</h3>
                      <p className="relative mt-2.5 text-sm text-emerald-50/75 leading-relaxed flex-1">{c.desc}</p>
                      <p
                        className="relative mt-6 pt-4 border-t border-white/10 inline-flex items-center gap-2 text-sm font-bold text-amber-200 opacity-0 scale-75 group-data-[inview=true]:opacity-100 group-data-[inview=true]:scale-100 transition-[opacity,transform] duration-500 origin-left"
                        style={{ transitionDelay: `${600 + i * 220}ms` }}
                      >
                        <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_14px_rgba(16,185,129,0.7)]">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </span>
                        Milestone Verified
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <SwipeHint light />
          </InView>

          {/* Audit panel */}
          <Reveal delay={100} className="mt-14">
            <div className="relative rounded-[30px] p-[1.5px] bg-gradient-to-r from-[#f7d774] via-[#7a5a12] to-[#f7d774]">
              <div className="relative overflow-hidden rounded-[29px] bg-[#062619] p-6 sm:p-10">
                <div aria-hidden className="pointer-events-none absolute -top-24 left-1/3 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,215,116,0.14),transparent_65%)]" />
                <div className="relative flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      <Sparkles className="w-3.5 h-3.5" /> Clear Impact &amp; Project Tracking
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold">Real-Time Progress &amp; Audited Reports</h3>
                  </div>
                  <span className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] to-[#f7d774] text-[#062619] px-4 py-2 text-xs font-extrabold tracking-wider">
                    <Award className="w-4 h-4" /> HIGHEST STANDARDS
                  </span>
                </div>
                <dl className="relative mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {csrMetrics.map((m) => {
                    const pct = m.value.endsWith("%") ? parseInt(m.value, 10) : null;
                    return (
                      <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 hover:border-amber-300/40 transition-colors">
                        <dd className="text-xl sm:text-4xl font-extrabold bg-gradient-to-b from-[#fff3c4] to-[#d4a017] bg-clip-text text-transparent pr-1">
                          {pct !== null ? <CountUp to={pct} suffix="%" /> : m.value}
                        </dd>
                        <dt className="mt-2 text-sm font-bold text-white">{m.label}</dt>
                        <p className="mt-0.5 text-xs text-emerald-100/60">{m.sub}</p>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/get-involved" className="lux-sheen relative overflow-hidden whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold px-8 py-4 shadow-[0_12px_30px_-10px_rgba(212,160,23,0.7)] hover:-translate-y-0.5 transition-transform">
              Partner With Us <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a href="#trust-section" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 hover:bg-white/10 hover:border-amber-300/60 font-bold text-sm sm:text-base px-6 sm:px-8 py-4 transition-colors">
              <ShieldCheck className="w-4 h-4 text-amber-300 shrink-0" /> View Statutory Compliance Registrations
            </a>
          </Reveal>
        </div>
      </section>

      {/* ===== 7. REAL VOICES (premium: ivory spotlight) ===== */}
      <section id="voices" data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0] scroll-mt-28">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[110vw] max-w-[1300px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.12),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] lux-guilloche" />

        <div className={`${container} py-20 sm:py-28`}>
          <Reveal className="text-center max-w-3xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5a12]">
              <Quote className="w-3.5 h-3.5 text-amber-600" /> Voices of Transformation
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-tight [text-wrap:balance]">
              Real Stories of{" "}
              <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Dignity, Impact &amp; Trust</span>
            </h2>
            <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
              Direct field testimony from the farmers EFFORT works alongside every day, in their own words.
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-14 max-w-5xl mx-auto">
            <VoicesSpotlight stories={voiceStories.map((v, i) => ({ ...v, photo: media.testimonials[i] }))} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
