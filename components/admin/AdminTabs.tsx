"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AdminPage } from "./adminPages";

type Props = {
  pages: AdminPage[];
  activeId: string;
  onSelect: (id: string) => void;
};

export default function AdminTabs({ pages, activeId, onSelect }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByAmount = (amount: number) => {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white/95 backdrop-blur-xl border-b border-amber-900/15 shadow-sm px-2 py-2">
      <div className="max-w-[1440px] mx-auto flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => scrollByAmount(-260)}
          disabled={!canScrollLeft}
          aria-label="Scroll pages left"
          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-50/80 hover:bg-amber-100 text-amber-900 border border-amber-200/80 disabled:opacity-25 transition-all cursor-pointer disabled:cursor-default"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div
          ref={trackRef}
          className="flex-1 flex items-center gap-2 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {pages.map((page) => {
            const isActive = page.id === activeId;
            return (
              <button
                key={page.id}
                type="button"
                onClick={() => onSelect(page.id)}
                className={`relative shrink-0 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-amber-700 via-amber-800 to-emerald-800 text-white font-black shadow-md scale-105 border border-amber-300/40"
                    : "bg-slate-100/80 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-slate-200/60 shadow-2xs"
                }`}
              >
                {page.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scrollByAmount(260)}
          disabled={!canScrollRight}
          aria-label="Scroll pages right"
          className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-amber-50/80 hover:bg-amber-100 text-amber-900 border border-amber-200/80 disabled:opacity-25 transition-all cursor-pointer disabled:cursor-default"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
