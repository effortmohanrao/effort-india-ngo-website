"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, PlusCircle } from "lucide-react";

interface SingleDigitFlipProps {
  digit: string;
}

function SingleDigitFlip({ digit }: SingleDigitFlipProps) {
  const [curr, setCurr] = useState(digit);
  const [prev, setPrev] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== curr) {
      setPrev(curr);
      setFlipping(true);
      const timer = setTimeout(() => {
        setCurr(digit);
        setFlipping(false);
      }, 480);
      return () => clearTimeout(timer);
    }
  }, [digit, curr]);

  return (
    <div
      className="relative w-20 h-28 sm:w-28 sm:h-40 rounded-3xl bg-gradient-to-b from-[#1f1910] via-[#2d2417] to-[#120e08] border-2 border-[#d4af6a]/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] overflow-hidden select-none"
      style={{ perspective: "800px" }}
    >
      {/* Horizontal Split Line Divider */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#d4af6a]/80 z-30 shadow-[0_0_10px_#d4af6a]" />
      
      {/* Metallic Brass Hinge Pins */}
      <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#ebd488] to-[#b88c30] border border-[#1f1910] z-40 shadow-md" />
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-[#ebd488] to-[#b88c30] border border-[#1f1910] z-40 shadow-md" />

      {/* Background Lighting Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-white/10 pointer-events-none z-10" />

      {/* Top Half (New/Current Digit) */}
      <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#2a2217] via-[#201a11] to-[#16120b] flex items-end justify-center pb-0 border-b border-black/80">
        <span className="text-metallic-gold font-black text-6xl sm:text-8xl tracking-tight transform translate-y-[52%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          {digit}
        </span>
      </div>

      {/* Bottom Half (Static Current Digit) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#18130c] via-[#110e08] to-[#0a0805] flex items-start justify-center pt-0 border-t border-[#d4af6a]/30">
        <span className="text-metallic-gold font-black text-6xl sm:text-8xl tracking-tight transform -translate-y-[48%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
          {curr}
        </span>
      </div>

      {/* 3D Animated Top Flap (Folds Down) */}
      {flipping && (
        <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#2d2417] via-[#201a11] to-[#16120b] flex items-end justify-center z-20 origin-bottom animate-calendar-flip-top border-b border-black/80 shadow-2xl">
          <span className="text-metallic-gold font-black text-6xl sm:text-8xl tracking-tight transform translate-y-[52%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {prev}
          </span>
        </div>
      )}

      {/* 3D Animated Bottom Flap (Unfolds Open) */}
      {flipping && (
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-b from-[#18130c] via-[#110e08] to-[#0a0805] flex items-start justify-center z-20 origin-top animate-calendar-flip-bottom border-t border-[#d4af6a]/30 shadow-2xl">
          <span className="text-metallic-gold font-black text-6xl sm:text-8xl tracking-tight transform -translate-y-[48%] drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            {digit}
          </span>
        </div>
      )}
    </div>
  );
}

interface CalendarFlipClockProps {
  value: number;
  label?: string;
  onSimulateIncrement?: () => void;
}

export default function CalendarFlipClock({ value, label = "Milestone Projects", onSimulateIncrement }: CalendarFlipClockProps) {
  const digitsStr = String(value).padStart(2, "0");
  const tens = digitsStr[0];
  const ones = digitsStr[1];

  return (
    <div className="flex flex-col items-center">
      {/* Calendar Card Housing */}
      <div className="relative flex items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-[36px] bg-[#1a150d]/90 backdrop-blur-2xl border-2 border-[#d4af6a]/60 shadow-[0_25px_60px_-20px_rgba(212,175,106,0.4)]">
        {/* Decorative Top Calendar Binding Header */}
        <div className="absolute -top-3 inset-x-12 h-2.5 bg-gradient-to-r from-[#d4af6a] via-[#f7e4a3] to-[#d4af6a] rounded-full shadow-md z-40" />

        {/* Tens Digit Flip Tile */}
        <SingleDigitFlip digit={tens} />

        {/* Colon Divider Dots */}
        <div className="flex flex-col gap-2 z-10 opacity-70">
          <div className="w-2.5 h-2.5 rounded-full bg-[#d4af6a] shadow-[0_0_8px_#d4af6a]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#d4af6a] shadow-[0_0_8px_#d4af6a]" />
        </div>

        {/* Ones Digit Flip Tile */}
        <SingleDigitFlip digit={ones} />
      </div>

      {/* Label Badge */}
      <div className="mt-4 flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#d4af6a]/15 border border-[#d4af6a]/50 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#8a6a1f] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> {label}
        </span>

        {/* Interactive Demo Button to watch 50 -> 51 */}
        {onSimulateIncrement && (
          <button
            onClick={onSimulateIncrement}
            className="group mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#221c0c] text-amber-200 text-[10px] font-black uppercase tracking-wider hover:bg-[#d4af6a] hover:text-[#221c0c] transition-all duration-300 shadow-md border border-[#d4af6a]/40"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#d4af6a] group-hover:text-[#221c0c] transition-colors" />
            Simulate Next Project (+1 Flip)
          </button>
        )}
      </div>
    </div>
  );
}
