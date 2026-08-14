"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Rocket,
  Landmark,
  Briefcase,
  Quote,
  HeartHandshake,
  Users,
  Building2,
  Mail,
} from "lucide-react";
import HeroSectionPanel from "./HeroSectionPanel";

type Section = {
  icon: typeof Sparkles;
  title: string;
  desc: string;
  managed?: boolean; // true = wired up and clickable, false/undefined = still "Coming soon"
};

const sections: Section[] = [
  { icon: Sparkles, title: "Hero", desc: "Headline, subtext, call-to-action buttons, and the credibility strip.", managed: true },
  { icon: BarChart3, title: "Impact Numbers", desc: "Villages covered, families reached, completed & ongoing projects, years of service." },
  { icon: ShieldCheck, title: "Trust & Compliance Center", desc: "Registration, 80G/12AB, FCRA, CSR-1 and other verified compliance cards." },
  { icon: Rocket, title: "How We Work", desc: "The 5-step process from grassroots diagnostics to sustained legacy." },
  { icon: Landmark, title: "Government & Institutional Partnerships", desc: "Partner category carousel — government, CSR, education, international, foundations." },
  { icon: Briefcase, title: "CSR Partnership Model", desc: "The 5-step CSR engagement flow for corporate partners." },
  { icon: Quote, title: "Featured Success Story", desc: "The highlighted beneficiary story with before/after slider." },
  { icon: HeartHandshake, title: "Campaigns & Donation", desc: "Active fundraising campaigns with progress bars and the donate widget." },
  { icon: Users, title: "More Success Stories", desc: "The rotating carousel of additional beneficiary stories." },
  { icon: Building2, title: "Corporate & CSR Partners", desc: "Partner / sponsor logo strip." },
  { icon: Mail, title: "Newsletter & Head Office", desc: "Mailing list signup and head office contact details." },
];

export default function HomePanel() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (openSection === "Hero") {
    return <HeroSectionPanel onBack={() => setOpenSection(null)} />;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Home Page</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Sections currently on the live homepage. Editing controls for each one will be wired in next.
          </p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {sections.map((section) => (
          <button
            key={section.title}
            type="button"
            disabled={!section.managed}
            onClick={() => section.managed && setOpenSection(section.title)}
            className={`text-left rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2.5 transition-all ${
              section.managed
                ? "hover:border-emerald-300 hover:shadow-sm cursor-pointer"
                : "opacity-80 cursor-default"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <section.icon className="w-4.5 h-4.5" />
              </span>
              {section.managed ? (
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                  Manage images
                </span>
              ) : (
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                  Coming soon
                </span>
              )}
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-800">{section.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{section.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
