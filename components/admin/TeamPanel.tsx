"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Check, Loader2 } from "lucide-react";
import MediaSlotManager from "./MediaSlotManager";

const people = [
  { slug: "jv-mohan-rao", name: "V. Mohan Rao", role: "Executive Director" },
  { slug: "bala-subramanian", name: "Bala Subramanian", role: "President, EFFORT" },
  { slug: "veeranjaneyulu", name: "Danda Veeranjaneyulu", role: "Executive Committee Member" },
  { slug: "y-m-krishna", name: "Y. M. Krishna", role: "Capacity Building" },
  { slug: "anuradha", name: "J. Anuradha", role: "Lead – Community Based Organisation" },
  { slug: "vijaya-kumari", name: "B. Vijaya Kumari", role: "Gender, Equity & Water Governance" },
  { slug: "annapurna", name: "B. Annapurna", role: "Finance" },
  { slug: "hanumantha-rao", name: "B. Hanumantha Rao", role: "Lead, Water Governance & Management" },
  { slug: "mohan-reddy", name: "M. V. Mohan Reddy", role: "Lead, IT & Digital Platforms" },
];

type Socials = { linkedin?: string; instagram?: string; facebook?: string; twitter?: string };

function SocialField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-[10px] font-bold uppercase text-slate-450 block mb-1">{label}</label>
      <input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://..."
        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-emerald-400"
      />
    </div>
  );
}

export default function TeamPanel({ onBack }: { onBack: () => void }) {
  const [socials, setSocials] = useState<Record<string, Socials>>({});
  const [loading, setLoading] = useState(true);
  const [savingSlug, setSavingSlug] = useState<string | null>(null);
  const [savedSlug, setSavedSlug] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/site/team-settings", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setSocials(data.socials ?? {}))
      .finally(() => setLoading(false));
  }, []);

  function updateField(slug: string, field: keyof Socials, value: string) {
    setSocials((prev) => ({ ...prev, [slug]: { ...prev[slug], [field]: value } }));
  }

  async function saveSlug(slug: string) {
    setSavingSlug(slug);
    try {
      await fetch("/api/admin/team-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ socials, updatedAt: "" }),
      });
      setSavedSlug(slug);
      setTimeout(() => setSavedSlug(null), 1500);
    } finally {
      setSavingSlug(null);
    }
  }

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
          <h2 className="text-lg font-bold text-slate-800">About Page — Meet Our Team</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Names, roles, and bios are already set from EFFORT&apos;s official team records. You only manage each person&apos;s photo and social links — leave a link blank to hide that icon on their card.
          </p>
        </div>
        <Link
          href="/about#leadership"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-slate-500 py-6">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading team settings...
        </div>
      ) : (
        <div className="space-y-5">
          {people.map((p) => {
            const s = socials[p.slug] ?? {};
            return (
              <div key={p.slug} className="rounded-2xl border border-slate-200 bg-white p-4 space-y-4">
                <div>
                  <p className="text-sm font-bold text-slate-800">{p.name}</p>
                  <p className="text-[11px] text-slate-450">{p.role}</p>
                </div>

                <MediaSlotManager prefix={`about/team/${p.slug}`} label={`${p.name}'s photo`} />

                <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  <SocialField label="LinkedIn" value={s.linkedin ?? ""} onChange={(v) => updateField(p.slug, "linkedin", v)} />
                  <SocialField label="Instagram" value={s.instagram ?? ""} onChange={(v) => updateField(p.slug, "instagram", v)} />
                  <SocialField label="Facebook" value={s.facebook ?? ""} onChange={(v) => updateField(p.slug, "facebook", v)} />
                  <SocialField label="Twitter / X" value={s.twitter ?? ""} onChange={(v) => updateField(p.slug, "twitter", v)} />
                </div>

                <button
                  type="button"
                  onClick={() => saveSlug(p.slug)}
                  disabled={savingSlug === p.slug}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors disabled:opacity-60 cursor-pointer"
                >
                  {savingSlug === p.slug ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : savedSlug === p.slug ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : null}
                  {savingSlug === p.slug ? "Saving..." : savedSlug === p.slug ? "Saved" : "Save Social Links"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
