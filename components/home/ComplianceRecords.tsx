"use client";

import { useState } from "react";
import { BadgeCheck, Building2, FileText, Fingerprint, Globe2, Landmark, ShieldCheck, Award, Search } from "lucide-react";
import { complianceCards, type ComplianceCategory } from "./homeData";

const filters: { key: "all" | ComplianceCategory; label: string }[] = [
  { key: "all", label: "All Records" },
  { key: "govt", label: "Government Registrations" },
  { key: "tax", label: "Tax Exemptions" },
  { key: "csr", label: "CSR & Institutional" },
];

const icons: Record<string, typeof Landmark> = {
  rc: Landmark,
  "80g": ShieldCheck,
  "12ab": FileText,
  fcra: Globe2,
  darpan: Fingerprint,
  csr1: Building2,
  tiss: Award,
  "google-nonprofit": Search,
};

const categoryLabel: Record<ComplianceCategory, string> = {
  govt: "Government",
  tax: "Tax",
  csr: "CSR & Institutional",
};

export default function ComplianceRecords() {
  const [filter, setFilter] = useState<"all" | ComplianceCategory>("all");
  const shown = filter === "all" ? complianceCards : complianceCards.filter((c) => c.category === filter);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div role="tablist" aria-label="Filter compliance records" className="flex gap-2 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => {
            const count = f.key === "all" ? complianceCards.length : complianceCards.filter((c) => c.category === f.key).length;
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.key)}
                className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold border transition-all duration-300 cursor-pointer ${
                  active
                    ? "bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 border-amber-400/60 shadow-[0_8px_20px_-8px_rgba(6,38,25,0.7)]"
                    : "bg-white/80 text-[#3d3420] border-[#e5d7b0] hover:border-amber-500 hover:text-[#062619]"
                }`}
              >
                {f.label}
                <span className={`min-w-6 h-6 px-1.5 rounded-full text-xs flex items-center justify-center ${active ? "bg-amber-300 text-[#062619]" : "bg-[#f3ead1] text-[#7a5a12]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-60" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-emerald-600" />
          </span>
          Status: Active · {shown.length} verified records
        </p>
      </div>

      <ul
        key={filter}
        className="mt-7 -mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shown.map((c, i) => {
          const Icon = icons[c.id] ?? ShieldCheck;
          return (
            <li
              key={c.id}
              className="lux-rise snap-start shrink-0 w-[82%] sm:w-auto group relative rounded-2xl bg-white p-[1px] bg-gradient-to-br from-[#e9c46a] via-[#f3ead1] to-[#c9a227] shadow-[0_14px_40px_-22px_rgba(90,61,0,0.45)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(90,61,0,0.5)] transition-[transform,box-shadow] duration-300"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="relative h-full rounded-[15px] bg-[#fffdf7] p-5 flex flex-col overflow-hidden">
                {/* inner hairline like a printed certificate */}
                <div aria-hidden className="absolute inset-1.5 rounded-xl border border-[#efe2bd] pointer-events-none" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0b3d2a] to-[#062619] ring-2 ring-amber-300/70 ring-offset-2 ring-offset-[#fffdf7] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-amber-300" />
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 text-xs font-bold">
                    <BadgeCheck className="w-3.5 h-3.5" /> Active &amp; Verified
                  </span>
                </div>
                <p className="relative mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[#a1781e]">{categoryLabel[c.category]}</p>
                <h4 className="relative mt-1 text-lg font-extrabold text-[#1c1a12] leading-snug">{c.title}</h4>
                <p className="relative mt-1.5 text-sm font-semibold text-emerald-800">{c.number}</p>
                <p className="relative mt-3 text-sm text-[#5a5240] leading-relaxed flex-1">{c.details}</p>
                <div className="relative mt-4 pt-3 border-t border-dashed border-[#e5d7b0] flex items-start gap-2 text-xs text-[#6b6047]">
                  <Landmark className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#a1781e]" />
                  <span><span className="font-bold text-[#3d3420]">Authority:</span> {c.authority}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-xs text-[#6b6047] sm:hidden">Swipe to see more →</p>
    </div>
  );
}
