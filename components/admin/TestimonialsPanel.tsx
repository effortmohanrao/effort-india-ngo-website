import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import MediaSlotManager from "./MediaSlotManager";

const people = [
  { slug: "ambati-thasamma", name: "Ambati Thasamma", role: "Chilli Farmer" },
  { slug: "u-ramaiah", name: "U. Ramaiah", role: "Dairy Farmer" },
  { slug: "srinivasa-reddy", name: "Srinivasa Reddy", role: "Chilli Farmer" },
  { slug: "ananthalakshmi", name: "Ananthalakshmi", role: "Dairy Farmer" },
  { slug: "venkatesh", name: "Venkatesh", role: "Millet Farmer" },
  { slug: "rameswaramma", name: "Rameswaramma", role: "Farmer" },
  { slug: "sudhakar-reddy", name: "Sudhakar Reddy", role: "Farmer" },
  { slug: "marthamma", name: "Marthamma", role: "Farmer" },
  { slug: "kishtappa", name: "Kishtappa", role: "Farmer" },
  { slug: "shekanna", name: "Shekanna", role: "Farmer" },
  { slug: "n-mallaiah", name: "N. Mallaiah", role: "Chilli Farmer" },
  { slug: "shaiksha-vali", name: "Shaiksha Vali", role: "Farmer, Engineering Graduate" },
];

export default function TestimonialsPanel({ onBack }: { onBack: () => void }) {
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
          <h2 className="text-lg font-bold text-slate-800">Testimonials — Farmer Photos</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Each person&apos;s name, place, role, and quote are already set from EFFORT&apos;s real testimonial records — you only
            need to upload their photo here. Upload replaces their current photo immediately.
          </p>
        </div>
        <Link
          href="/#voices"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-5">
        {people.map((p) => (
          <div key={p.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800">{p.name}</p>
            <p className="text-[11px] text-slate-450 mb-3">{p.role}</p>
            <MediaSlotManager prefix={`homepage/testimonials/${p.slug}`} label={`${p.name}'s photo`} />
          </div>
        ))}
      </div>
    </div>
  );
}
