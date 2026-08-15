import Link from "next/link";
import { ExternalLink } from "lucide-react";
import MediaSlotManager from "./MediaSlotManager";

export default function AboutPanel() {
  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">About Us — Journey Gallery</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Photos shown in the &quot;Our Journey Through Images&quot; strip on the About page. Changes go live immediately.
          </p>
        </div>
        <Link
          href="/about#journey"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <MediaSlotManager prefix="about/gallery" label="Journey Gallery Images" multiple />
    </div>
  );
}
