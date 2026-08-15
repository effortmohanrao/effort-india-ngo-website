"use client";

import { useEffect, useState } from "react";
import { LogOut, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import Link from "next/link";
import AdminTabs from "@/components/admin/AdminTabs";
import HomePanel from "@/components/admin/HomePanel";
import BrandingPanel from "@/components/admin/BrandingPanel";
import DonatePanel from "@/components/admin/DonatePanel";
import ProgramsPanel from "@/components/admin/ProgramsPanel";
import AboutPanel from "@/components/admin/AboutPanel";
import ComingSoonPanel from "@/components/admin/ComingSoonPanel";
import { adminPages } from "@/components/admin/adminPages";
import { logoutAction } from "./actions";

export default function AdminPage() {
  const [activeId, setActiveId] = useState(adminPages[0].id);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const activePage = adminPages.find((page) => page.id === activeId) ?? adminPages[0];

  useEffect(() => {
    fetch("/api/site/media?prefix=logo", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const first = data.images?.[0];
        if (first) setLogoUrl(first.url);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfaf4] text-slate-800 font-sans">
      
      {/* EXECUTIVE HIGH-LOOK ADMIN TOP BAR */}
      <div className="relative bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-950 text-white border-b-2 border-amber-500/40 shadow-lg overflow-hidden">
        
        {/* Shimmer Light Sweeps */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[90px] animate-liquid-drift-a" />
          <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[90px] animate-liquid-drift-b" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-white to-transparent animate-light-sweep" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Details */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-white border-2 border-white/90 shadow-md flex items-center justify-center font-black text-emerald-800 overflow-hidden p-1 shrink-0">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="EFFORT NGO logo" className="w-full h-full object-contain rounded-full" />
              ) : (
                <span className="text-xl font-black text-emerald-700">E</span>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white block">EFFORT Admin Command Center</span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-amber-400" /> SECURE AUDIT DESK
                </span>
              </div>
              <p className="text-xs text-amber-100/70 font-medium">Official Website CMS &amp; Live Content Management Engine</p>
            </div>
          </div>

          {/* Quick Actions & Logout */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-amber-200 text-xs font-bold transition-all duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-300" /> Live Website
            </Link>

            <form action={logoutAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 border border-red-400/50 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* HORIZONTAL PAGE TABS STRIP */}
      <AdminTabs pages={adminPages} activeId={activeId} onSelect={setActiveId} />

      {/* MAIN CONTENT AREA */}
      <main className="max-w-[1440px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeId === "home" ? (
          <HomePanel />
        ) : activeId === "branding" ? (
          <BrandingPanel />
        ) : activeId === "donate" ? (
          <DonatePanel />
        ) : activeId === "programs" ? (
          <ProgramsPanel />
        ) : activeId === "about" ? (
          <AboutPanel />
        ) : (
          <ComingSoonPanel page={activePage} />
        )}
      </main>
    </div>
  );
}
