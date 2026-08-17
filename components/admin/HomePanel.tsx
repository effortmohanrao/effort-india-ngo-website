"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Sparkles, Handshake, Quote, Award, ChevronLeft } from "lucide-react";
import HeroSectionPanel from "./HeroSectionPanel";
import PartnershipsPanel from "./PartnershipsPanel";
import TestimonialsPanel from "./TestimonialsPanel";
import MediaSlotManager from "./MediaSlotManager";

type Section = {
  icon: typeof Sparkles;
  title: string;
  desc: string;
  managed?: boolean; // true = wired up and clickable. Only sections with a real image-upload connection appear here.
};

const sections: Section[] = [
  { icon: Sparkles, title: "Hero", desc: "Headline, subtext, call-to-action buttons, and the credibility strip.", managed: true },
  { icon: Handshake, title: "Government & Institutional Partnerships", desc: "5 rotating category photos — Government, CSR, Educational, International, Foundations.", managed: true },
  { icon: Quote, title: "Testimonials", desc: "12 real farmer testimonials — upload each person's photo.", managed: true },
  { icon: Award, title: "Certifications", desc: "Real badge for the Great Place To Work credential card in the Trust & Compliance section.", managed: true },
];

function CertificationsPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-700 mb-4 cursor-pointer"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Back to Home Page sections
      </button>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Home Page — Certifications</h2>
          <p className="text-xs text-slate-500 mt-0.5">Real badge image for the Great Place To Work credential card.</p>
        </div>
        <Link
          href="/#trust-section"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-bold text-slate-800 mb-1">Great Place To Work — Badge</p>
        <p className="text-[11px] text-slate-450 mb-3">Replace anytime the certification is renewed for a new year.</p>
        <MediaSlotManager prefix="homepage/certifications/gptw" label="Great Place To Work Badge" />
      </div>
    </div>
  );
}

export default function HomePanel() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (openSection === "Hero") {
    return <HeroSectionPanel onBack={() => setOpenSection(null)} />;
  }

  if (openSection === "Government & Institutional Partnerships") {
    return <PartnershipsPanel onBack={() => setOpenSection(null)} />;
  }

  if (openSection === "Testimonials") {
    return <TestimonialsPanel onBack={() => setOpenSection(null)} />;
  }

  if (openSection === "Certifications") {
    return <CertificationsPanel onBack={() => setOpenSection(null)} />;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Home Page</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Sections with image management connected to Cloudflare R2.
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
