import { Construction, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { AdminPage } from "./adminPages";

export default function ComingSoonPanel({ page }: { page: AdminPage }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
        <Construction className="w-6 h-6 text-amber-600" />
      </div>
      <h2 className="text-lg font-bold text-slate-800">{page.label} editor is coming soon</h2>
      <p className="text-sm text-slate-500 max-w-sm mt-1.5">
        This page&apos;s content controls haven&apos;t been built yet. They&apos;ll be added here next, one page at a time.
      </p>
      <Link
        href={page.href}
        target="_blank"
        className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
      >
        View live page <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}
