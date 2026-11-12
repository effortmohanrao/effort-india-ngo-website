"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";

const R = 70;
const C = 2 * Math.PI * R;

// Gold ring that draws itself to 100% when scrolled into view.
export default function ComplianceGauge() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setDrawn(false);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    const fallback = setTimeout(() => setDrawn(true), 6000);
    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-52 h-52 sm:w-60 sm:h-60">
      <svg viewBox="0 0 180 180" className="w-full h-full -rotate-90">
        <defs>
          <linearGradient id="goldRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="45%" stopColor="#f7d774" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
        {/* tick marks */}
        {Array.from({ length: 60 }, (_, i) => (
          <line
            key={i}
            x1="90"
            y1="6"
            x2="90"
            y2={i % 5 === 0 ? 13 : 10}
            stroke="rgba(247,215,116,0.35)"
            strokeWidth={i % 5 === 0 ? 1.4 : 0.8}
            transform={`rotate(${i * 6} 90 90)`}
          />
        ))}
        <circle cx="90" cy="90" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
        <circle
          cx="90"
          cy="90"
          r={R}
          fill="none"
          stroke="url(#goldRing)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={drawn ? 0 : C}
          style={{ transition: drawn ? "stroke-dashoffset 2.2s cubic-bezier(.2,.7,.2,1)" : "none", filter: "drop-shadow(0 0 10px rgba(247,215,116,0.5))" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
          <CountUp to={100} suffix="%" duration={2200} />
        </p>
        <p className="mt-1 text-[11px] sm:text-xs font-bold tracking-[0.3em] text-amber-200">COMPLIANCE</p>
      </div>
    </div>
  );
}
