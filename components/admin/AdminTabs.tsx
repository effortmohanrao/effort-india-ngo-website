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
    <div className="relative flex items-center border-b border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => scrollByAmount(-220)}
        disabled={!canScrollLeft}
        aria-label="Scroll pages left"
        className="shrink-0 flex items-center justify-center w-9 h-12 text-slate-400 hover:text-emerald-700 disabled:opacity-25 disabled:hover:text-slate-400 transition-colors cursor-pointer disabled:cursor-default"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div
        ref={trackRef}
        className="flex-1 flex items-center gap-1 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page) => {
          const isActive = page.id === activeId;
          return (
            <button
              key={page.id}
              type="button"
              onClick={() => onSelect(page.id)}
              className={`relative shrink-0 px-4 py-3.5 text-[13px] font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isActive ? "text-emerald-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {page.label}
              <span
                className={`absolute left-3 right-3 -bottom-px h-[2.5px] rounded-full bg-emerald-600 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => scrollByAmount(220)}
        disabled={!canScrollRight}
        aria-label="Scroll pages right"
        className="shrink-0 flex items-center justify-center w-9 h-12 text-slate-400 hover:text-emerald-700 disabled:opacity-25 disabled:hover:text-slate-400 transition-colors cursor-pointer disabled:cursor-default"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
