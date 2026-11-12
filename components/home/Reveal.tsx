"use client";

import { useEffect, useRef, useState } from "react";

// Fades/slides its children in when they first scroll into view. Content is visible by default
// (server render, no JS, reduced motion) and only hidden once we know we can animate it in.
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return; // already on screen
    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${
        state === "hidden" ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
      }`}
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
