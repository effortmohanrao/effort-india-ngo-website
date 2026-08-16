import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import MediaSlotManager from "./MediaSlotManager";

const categories = [
  { slug: "government", title: "Government" },
  { slug: "csr-partners", title: "CSR Partners" },
  { slug: "educational-institutions", title: "Educational & Research Institutions" },
  { slug: "international-organizations", title: "International Organizations" },
  { slug: "foundations", title: "Foundations" },
];

export default function PartnershipsPanel({ onBack }: { onBack: () => void }) {
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
          <h2 className="text-lg font-bold text-slate-800">Government &amp; Institutional Partnerships</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            One photo per category, shown in the rotating carousel on the homepage. Changes go live immediately.
          </p>
        </div>
        <Link
          href="/#partnerships"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800 mb-3">{cat.title}</p>
            <MediaSlotManager prefix={`homepage/partnerships/${cat.slug}`} label={cat.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
