"use client";

import { useState } from "react";
import { ChevronDown, Compass, Globe2, Handshake, Quote, ShieldCheck, Sprout, Target, Users, Zap } from "lucide-react";

const pillars = [
  {
    num: "01",
    short: "Community Resilience",
    title: "Community-Led Resilience & Sustainable Development",
    tag: "Governance & Equity",
    icon: Users,
    philosophy: "Communities lead, institutions support, and EFFORT enables. Sustainable development is achieved when communities are empowered to shape their own futures.",
    desc: "Focuses on enabling communities to lead their own development through strengthened community-led planning, decision-making, and collective action. Emphasizes integrated approaches to resilience that encompass ecological, social, and economic dimensions.",
    target: "1,000–1,500 Community Institutions & 250,000–300,000 Households Engaged",
  },
  {
    num: "02",
    short: "Sustainable Livelihoods",
    title: "Sustainable Livelihoods & Youth Futures",
    tag: "Agri-Tech & Skills",
    icon: Sprout,
    philosophy: "Livelihood security and youth opportunity are central to resilience over the plan period.",
    desc: "Focuses on strengthening livelihoods and positioning youth as key drivers of economic and social transformation. Enhances youth skills, employability, green livelihoods, and strengthens Farmer Producer Organizations (FPOs) linked directly to markets.",
    target: "400,000–500,000 Farmers, 25,000–40,000 Youth & 75–120 FPOs Strengthened",
  },
  {
    num: "03",
    short: "Knowledge & Learning",
    title: "Knowledge, Learning & Practice-Based Influence",
    tag: "Policy & Research",
    icon: Compass,
    philosophy: "Learning is not a support function but a strategic role that strengthens both internal practice and the wider ecosystem.",
    desc: "Focuses on establishing EFFORT as a learning-oriented organization and a credible source of practice-based knowledge. Systematic learning from field practice, documentation of community experiences, peer learning platforms, and contributing insights to policy dialogue.",
    target: "1–2 Knowledge Hubs & 100+ Practice Learning Products Developed",
  },
  {
    num: "04",
    short: "Partnerships",
    title: "Partnerships & Ecosystem Engagement",
    tag: "CSR & Public Sector",
    icon: Handshake,
    philosophy: "EFFORT’s future impact depends as much on who it works with as on what it does.",
    desc: "Focuses on building strong, value-aligned partnerships to enhance scale, effectiveness, and sustainability. Includes partnerships with government programs, civil society, CSR entities, academia, and local grassroots organizations guided by ethics and transparency.",
    target: "30–50 Institutional Partners Across 8–12 Indian States",
  },
  {
    num: "05",
    short: "Capacity & Governance",
    title: "Organizational Capacity, Leadership & Governance",
    tag: "Institutional Integrity",
    icon: ShieldCheck,
    philosophy: "Sustained programmatic impact requires strong institutions, capable leadership, and sound governance systems.",
    desc: "Focuses on strengthening EFFORT as a resilient and values-driven institution. Includes strengthening human resource systems, leadership development, second-line leadership pipelines, governance systems, Board effectiveness, compliance, and staff well-being.",
    target: "100–150 Skilled Staff Team & Second-Line Leadership Pipeline",
  },
  {
    num: "06",
    short: "Digital Systems & MIS",
    title: "Systems, Digitalization & Institutional Sustainability",
    tag: "Real-Time Monitoring",
    icon: Zap,
    philosophy: "Ensures EFFORT remains future-ready, efficient, transparent, and credible.",
    desc: "Focuses on strengthening systems, technology, and financial sustainability as key enablers of scale. Includes development of digital tools, MIS, and data systems, strengthening monitoring and reporting frameworks, resource mobilization, and institutional branding.",
    target: "Enterprise MIS, Real-Time MEL Systems & Diversified Funding Portfolio",
  },
];

const proof = [
  { label: "Community Ownership", desc: "Local leadership driving sustained change", icon: Users },
  { label: "Practice-Based Evidence", desc: "100+ Learning products & GIS telemetry logs", icon: Globe2 },
  { label: "Multi-State Alliances", desc: "30–50 Institutional Partners across 8–12 states", icon: Handshake },
];

function Details({ p }: { p: (typeof pillars)[number] }) {
  return (
    <>
      <p className="text-[15px] text-[#4a4338] leading-relaxed">{p.desc}</p>
      <figure className="mt-4 flex gap-3 rounded-2xl border border-[#efe2bd] bg-[#f8f1df] p-4">
        <Quote className="w-5 h-5 text-[#a1781e] shrink-0 rotate-180" />
        <blockquote className="text-sm italic font-semibold text-[#3d3420] leading-relaxed">&ldquo;{p.philosophy}&rdquo;</blockquote>
      </figure>
      <div className="mt-3 flex gap-3 rounded-2xl bg-[#062619] text-white p-4">
        <Target className="w-5 h-5 text-amber-300 shrink-0" />
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Indicative Scale (by 2030)</p>
          <p className="mt-0.5 text-sm font-bold">{p.target}</p>
        </div>
      </div>
    </>
  );
}

export default function StrategicPillars() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#0b5d3f]">Strategic Framework 2026–2030</p>
        <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#14120c]">
          6 Strategic Pillars of <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">EFFORT 2.0</span>
        </h3>
        <p className="mt-3 text-[#5a5240] leading-relaxed">
          Anchored around six interrelated pillars balancing community-level impact with organizational strength, systems readiness, and institutional resilience.
        </p>
      </div>

      {/* Desktop: expanding pillar deck */}
      <div className="hidden lg:flex mt-10 gap-3 min-h-[520px]">
        {pillars.map((p, i) => {
          const on = i === active;
          return (
            <div
              key={p.num}
              role="button"
              tabIndex={0}
              aria-expanded={on}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(i)}
              className={`relative overflow-hidden rounded-[24px] border cursor-pointer transition-[flex-grow,background-color,border-color] duration-500 ease-out ${
                on ? "flex-[4] bg-white border-amber-400 shadow-[0_30px_70px_-40px_rgba(90,61,0,0.6)]" : "flex-1 bg-[#062619] border-[#062619] hover:bg-[#0b3d2a]"
              }`}
            >
              <span aria-hidden className={`absolute inset-x-0 top-0 h-1.5 ${on ? "bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]" : "bg-amber-300/30"}`} />
              {on ? (
                <div key={p.num} className="h-full p-7 flex flex-col">
                  <div className="lux-rise flex items-start justify-between gap-4">
                    <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b3d2a] to-[#062619] flex items-center justify-center shrink-0">
                      <p.icon className="w-7 h-7 text-amber-300" />
                    </span>
                    <span className="text-5xl font-extrabold text-[#efe0b4]">{p.num}</span>
                  </div>
                  <p className="lux-rise mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a1781e]" style={{ animationDelay: "60ms" }}>
                    Pillar {p.num} · {p.tag}
                  </p>
                  <h4 className="lux-rise mt-1 text-2xl font-extrabold text-[#14120c] leading-tight" style={{ animationDelay: "100ms" }}>{p.title}</h4>
                  <div className="lux-rise mt-4" style={{ animationDelay: "160ms" }}>
                    <Details p={p} />
                  </div>
                </div>
              ) : (
                <div className="h-full p-5 flex flex-col justify-between text-white">
                  <div>
                    <span className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-amber-300" />
                    </span>
                    <p className="mt-4 text-3xl font-extrabold text-amber-300/50">{p.num}</p>
                  </div>
                  <p className="text-sm font-extrabold leading-snug [writing-mode:vertical-rl] rotate-180 max-h-64">{p.short}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Phone & tablet: tap-to-open list */}
      <ul className="lg:hidden mt-8 space-y-3">
        {pillars.map((p, i) => {
          const isOpen = open === i;
          return (
            <li key={p.num} className={`rounded-2xl border bg-white ${isOpen ? "border-amber-400" : "border-[#efe2bd]"}`}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-4 p-4 text-left cursor-pointer">
                <span className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isOpen ? "bg-gradient-to-br from-[#f7d774] to-[#b8860b]" : "bg-gradient-to-br from-[#0b3d2a] to-[#062619]"}`}>
                  <p.icon className={`w-6 h-6 ${isOpen ? "text-[#062619]" : "text-amber-300"}`} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-xs font-extrabold uppercase tracking-wider text-[#a1781e]">Pillar {p.num} · {p.tag}</span>
                  <span className="block mt-0.5 font-extrabold text-[#14120c] leading-snug">{p.title}</span>
                </span>
                <ChevronDown className={`w-5 h-5 text-[#a1781e] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="px-4 pb-5">
                    <Details p={p} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <ul className="mt-8 grid sm:grid-cols-3 gap-3 sm:gap-4">
        {proof.map((t) => (
          <li key={t.label} className="flex items-start gap-3 rounded-2xl bg-white border border-[#efe2bd] p-4">
            <span className="w-10 h-10 rounded-full bg-[#062619] flex items-center justify-center shrink-0">
              <t.icon className="w-5 h-5 text-amber-300" />
            </span>
            <div>
              <p className="font-extrabold text-[#14120c]">{t.label}</p>
              <p className="mt-0.5 text-sm text-[#5a5240] leading-snug">{t.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
