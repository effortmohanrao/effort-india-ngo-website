"use client";

import { useEffect, useRef, useState } from "react";

// Sets data-inview="true" once the block scrolls into view, so children can animate with
// Tailwind's group-data-[inview=true]: variants. Starts "true" (server / no JS / reduced motion).
export default function InView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return; // already visible
    setInView(false);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} data-inview={inView} className={`group ${className}`}>
      {children}
    </div>
  );
}
