import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Compass, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
      {/* Glow background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 mb-2">
          <span className="text-2xl font-black">404</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
          Page Updated or Moved
        </h1>

        <p className="text-sm text-emerald-100/80 leading-relaxed">
          The page you are looking for has been upgraded as part of the new <strong>EFFORT India</strong> official website. Please explore using the links below:
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/40 transition-all"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            <Compass className="w-4 h-4" /> Our Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
          >
            <PhoneCall className="w-4 h-4" /> Contact Us
          </Link>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs text-slate-400">
          EFFORT — A Society for the Development of Agriculture and Youth
        </div>
      </div>
    </div>
  );
}
