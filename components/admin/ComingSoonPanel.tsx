import { Construction, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { AdminPage } from "./adminPages";

export default function ComingSoonPanel({ page }: { page: AdminPage }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      <div className="max-w-lg w-full bg-white/95 backdrop-blur-xl border border-amber-900/15 rounded-3xl p-8 sm:p-10 shadow-[0_15px_40px_-15px_rgba(120,53,15,0.12)] flex flex-col items-center justify-center space-y-4 relative overflow-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-emerald-600 to-amber-500" />

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 border-2 border-amber-300 text-amber-900 flex items-center justify-center shadow-md">
          <Construction className="w-8 h-8 text-amber-700 animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-black uppercase tracking-wider mb-2">
            CMS MODULE IN PROGRESS
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">{page.label} Editor Module</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-sm mx-auto mt-2 leading-relaxed">
            Content management controls for <strong className="text-amber-900">{page.label}</strong> are being configured for live direct publishing.
          </p>
        </div>

        <Link
          href={page.href}
          target="_blank"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white font-black text-xs shadow-md hover:scale-105 transition-all"
        >
          View Live {page.label} Page <ExternalLink className="w-3.5 h-3.5 text-amber-200" />
        </Link>
      </div>
    </div>
  );
}
