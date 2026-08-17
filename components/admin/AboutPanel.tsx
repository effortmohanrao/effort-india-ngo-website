"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ExternalLink, ImageIcon, Users, Handshake } from "lucide-react";
import MediaSlotManager from "./MediaSlotManager";
import TeamPanel from "./TeamPanel";
import { partnerCategories } from "@/lib/partners";

type Section = {
  id: string;
  icon: typeof ImageIcon;
  title: string;
  desc: string;
};

const sections: Section[] = [
  { id: "hero", icon: ImageIcon, title: "Hero Section", desc: "Rotating cover photos shown top-right of the About page. Changes every ~3.5 seconds — upload as many as you like." },
  { id: "partners", icon: Handshake, title: "Partner Logos", desc: "Real logos shown in the scrolling \"Organizations That Believe In Our Mission\" section." },
  { id: "team", icon: Users, title: "Meet Our Team", desc: "Photo and social links for each of the 9 leadership team members." },
];

function PartnerLogosPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-700 mb-4 cursor-pointer"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Back to About Us sections
      </button>

      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">About Page — Partner Logos</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            One logo per organization. Upload or replace any of these and it updates the live page immediately.
          </p>
        </div>
        <Link
          href="/about#partners"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-6">
        {partnerCategories.map((cat) => (
          <div key={cat.title} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800 mb-3">{cat.title}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {cat.partners.map((p) =>
                p.slug ? (
                  <div key={p.slug} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-xs font-bold text-slate-700 mb-2 truncate" title={p.name}>{p.name}</p>
                    <MediaSlotManager prefix={`about/partner-logos/${p.slug}`} label={p.name} />
                  </div>
                ) : (
                  <div key={p.name} className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 p-3 flex items-center">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <b className="text-slate-500">{p.name}</b> — shown as text only on the live page (not a funding/CSR partner logo).
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubPanel({ title, desc, livePath, prefix, label, onBack }: { title: string; desc: string; livePath: string; prefix: string; label: string; onBack: () => void }) {
  return (
    <div className="p-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-700 mb-4 cursor-pointer"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Back to About Us sections
      </button>

      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">{title}</h2>
          <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
        </div>
        <Link
          href={livePath}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <MediaSlotManager prefix={prefix} label={label} multiple />
    </div>
  );
}

export default function AboutPanel() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  if (openSection === "hero") {
    return (
      <SubPanel
        title="About Page — Hero Section"
        desc="Rotating cover photos, top-right of the About page. Auto-advances every ~3.5 seconds — add as many images as you want."
        livePath="/about"
        prefix="about/hero"
        label="Hero Rotation Images"
        onBack={() => setOpenSection(null)}
      />
    );
  }

  if (openSection === "partners") {
    return <PartnerLogosPanel onBack={() => setOpenSection(null)} />;
  }

  if (openSection === "team") {
    return <TeamPanel onBack={() => setOpenSection(null)} />;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">About Us Page</h2>
          <p className="text-xs text-slate-500 mt-0.5">Sections with image management connected to Cloudflare R2.</p>
        </div>
        <Link
          href="/about"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setOpenSection(section.id)}
            className="text-left rounded-2xl border border-slate-200 bg-white p-4 flex flex-col gap-2.5 transition-all hover:border-emerald-300 hover:shadow-sm cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <section.icon className="w-4.5 h-4.5" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
                Manage images
              </span>
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
