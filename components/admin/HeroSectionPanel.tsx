import { ChevronLeft } from "lucide-react";
import MediaSlotManager from "./MediaSlotManager";

export default function HeroSectionPanel({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-700 mb-4 cursor-pointer"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Back to Home Page sections
      </button>

      <h2 className="text-lg font-bold text-slate-800">Hero Section — Images</h2>
      <p className="text-xs text-slate-500 mt-0.5 mb-5">
        Upload, replace, or delete the images shown in the homepage hero. Changes go live immediately.
      </p>

      <MediaSlotManager prefix="homepage/hero-section" label="Hero Section Images" multiple />
    </div>
  );
}
