"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import AdminTabs from "@/components/admin/AdminTabs";
import HomePanel from "@/components/admin/HomePanel";
import BrandingPanel from "@/components/admin/BrandingPanel";
import ComingSoonPanel from "@/components/admin/ComingSoonPanel";
import { adminPages } from "@/components/admin/adminPages";
import { logoutAction } from "./actions";

export default function AdminPage() {
  const [activeId, setActiveId] = useState(adminPages[0].id);
  const activePage = adminPages.find((page) => page.id === activeId) ?? adminPages[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="flex items-center justify-between px-5 py-3 bg-slate-950 text-white">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center font-black text-sm">
            E
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold">EFFORT Admin Panel</p>
            <p className="text-[10px] text-slate-400">Website content management</p>
          </div>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-1.5 transition-colors cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Logout
          </button>
        </form>
      </div>

      <AdminTabs pages={adminPages} activeId={activeId} onSelect={setActiveId} />

      <main className="max-w-7xl mx-auto">
        {activeId === "home" ? (
          <HomePanel />
        ) : activeId === "branding" ? (
          <BrandingPanel />
        ) : (
          <ComingSoonPanel page={activePage} />
        )}
      </main>
    </div>
  );
}
