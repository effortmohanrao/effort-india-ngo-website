"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DonateModal from "@/components/DonateModal";
import {
  Heart,
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Award,
  Landmark,
  ChevronDown,
  FileText,
  Briefcase,
  Newspaper,
  UserCheck,
  Building,
  Search,
  Sun,
  Moon,
  Globe,
  ArrowRight,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon, TwitterXIcon } from "@/components/icons/SocialIcons";

type Ripple = { id: number; x: number; y: number };

// Translucent Glass Liquid Bubbles Floating Array
const glassBubbles = [
  { left: 6, top: 20, width: 22, height: 22, color: "border-amber-400/40 bg-amber-400/10 shadow-[inset_0_2px_6px_rgba(251,191,36,0.4)]", delay: 0.2, duration: 6 },
  { left: 18, top: 45, width: 16, height: 16, color: "border-white/60 bg-white/15 shadow-[inset_0_2px_5px_rgba(255,255,255,0.7)]", delay: 1.1, duration: 7 },
  { left: 28, top: 15, width: 28, height: 28, color: "border-emerald-400/40 bg-emerald-400/10 shadow-[inset_0_2px_6px_rgba(52,211,153,0.4)]", delay: 0.7, duration: 5.5 },
  { left: 42, top: 50, width: 18, height: 18, color: "border-blue-400/35 bg-blue-500/10 shadow-[inset_0_2px_5px_rgba(96,165,250,0.4)]", delay: 2.3, duration: 6.8 },
  { left: 55, top: 25, width: 24, height: 24, color: "border-amber-300/45 bg-amber-300/15 shadow-[inset_0_2px_6px_rgba(252,211,77,0.5)]", delay: 1.5, duration: 7.2 },
  { left: 68, top: 40, width: 14, height: 14, color: "border-white/70 bg-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]", delay: 0.4, duration: 5.8 },
  { left: 78, top: 18, width: 30, height: 30, color: "border-emerald-400/45 bg-emerald-400/10 shadow-[inset_0_2px_8px_rgba(16,185,129,0.45)]", delay: 1.9, duration: 6.5 },
  { left: 88, top: 55, width: 20, height: 20, color: "border-amber-400/40 bg-amber-400/10 shadow-[inset_0_2px_5px_rgba(245,158,11,0.4)]", delay: 2.8, duration: 7.5 },
  { left: 12, top: 60, width: 20, height: 20, color: "border-emerald-300/40 bg-emerald-300/10 shadow-[inset_0_2px_5px_rgba(110,231,183,0.4)]", delay: 3.1, duration: 6.2 },
  { left: 34, top: 65, width: 14, height: 14, color: "border-white/60 bg-white/15 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7)]", delay: 1.6, duration: 5.2 },
  { left: 62, top: 68, width: 26, height: 26, color: "border-amber-400/35 bg-amber-400/10 shadow-[inset_0_2px_6px_rgba(251,191,36,0.35)]", delay: 2.5, duration: 6.7 },
  { left: 93, top: 22, width: 16, height: 16, color: "border-emerald-400/50 bg-emerald-400/15 shadow-[inset_0_2px_5px_rgba(52,211,153,0.5)]", delay: 0.9, duration: 5.9 },
];

export default function Header() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDonateHover, setIsDonateHover] = useState(false);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const pathname = usePathname();

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("openDonate") === "1") {
      setIsDonateModalOpen(true);
      params.delete("openDonate");
      const rest = params.toString();
      window.history.replaceState(null, "", window.location.pathname + (rest ? `?${rest}` : ""));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetch("/api/site/media?prefix=logo", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const first = data.images?.[0];
        if (first) setLogoUrl(first.url);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/programs" },
    { name: "Impact & Map", href: "/impact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact Us", href: "/contact" },
  ];

  const moreLinks = [
    { name: "Careers & Internships", href: "/careers", icon: Briefcase, desc: "Ground job openings & student roles" },
    { name: "News & Media Blog", href: "/news", icon: Newspaper, desc: "Field journals, releases & galleries" },
  ];

  const socialLinks = [
    { Icon: TwitterXIcon, href: "https://twitter.com", label: "X / Twitter" },
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
    { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  ];

  const handleDonateMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setMagnet({ x, y });
  };

  const handleDonateMouseLeave = () => {
    setMagnet({ x: 0, y: 0 });
    setIsDonateHover(false);
  };

  const handleDonateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
    setIsDonateModalOpen(true);
  };

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* --- TOP INFORMATION BAR --- */}
      <div className="relative bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-950 text-emerald-100 border-b border-emerald-800/40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-liquid-ribbon opacity-30 blur-2xl mix-blend-screen" />
          <div className="absolute inset-0 bg-liquid-ribbon opacity-20 mix-blend-screen" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-light-sweep" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[42px] flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">Government Registered NGO</span>
              <span className="sm:hidden">Govt. Registered</span>
            </span>
            <span className="hidden md:block w-px h-3 bg-emerald-700/60" />
            <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
              <Award className="w-3.5 h-3.5 text-amber-400" /> 80G / 12A Exemption
            </span>
            <span className="hidden lg:block w-px h-3 bg-emerald-700/60" />
            <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap">
              <Landmark className="w-3.5 h-3.5 text-amber-400" /> CSR Registration: CSR00034988
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="mailto:effortap@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> effortap@gmail.com
            </a>
            <a href="tel:+919959900081" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> +91 99599 00081
            </a>
            <span className="hidden lg:block w-px h-3 bg-emerald-700/60" />
            <div className="flex items-center gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-110 hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING MAIN NAVIGATION --- */}
      <div className={`sticky top-0 z-[100] transition-all duration-500 px-2 sm:px-4 lg:px-6 ${isScrolled ? "pt-2" : "pt-4"}`}>
        
        {/* Official Indian Flag Tricolor (Saffron, White, India Green) 4-Side Boundary Wrapper */}
        <div className="relative max-w-[1440px] mx-auto rounded-[30px] p-[2.5px] bg-gradient-to-r from-[#F58220] via-white via-[#138808] via-[#000080] to-[#F58220] animate-indian-tricolor-breathe">

          {/* Animated 4-Side Laser Light-Sweep Beam Lines (Tricolor Saffron & Green) */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-[30px]">
            {/* Top Border Saffron & White Laser Sweep */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-white to-transparent animate-light-sweep" />
            {/* Bottom Border Green & Navy Laser Sweep */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 via-blue-900 to-transparent animate-light-sweep" style={{ animationDelay: '2s' }} />
          </div>

          <header
            className={`relative rounded-[28px] border-0 transition-all duration-500 ${
              isScrolled
                ? "bg-white/92 backdrop-blur-[35px] py-2.5"
                : "bg-white/80 backdrop-blur-[28px] py-4"
            }`}
          >
          {/* Ambient background effects — Floating Translucent Liquid Glass Bubbles */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
            <div className="absolute -top-10 left-16 w-44 h-44 bg-amber-400/20 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 right-24 w-40 h-40 bg-emerald-500/20 rounded-full blur-[55px]" />
            <div className="absolute inset-0 bg-noise opacity-10" />
            
            {/* Translucent Glass Bubbles floating upwards inside the header */}
            {glassBubbles.map((b, i) => (
              <div
                key={i}
                className={`absolute rounded-full border backdrop-blur-[1px] animate-glass-bubble ${b.color}`}
                style={{
                  left: `${b.left}%`,
                  top: `${b.top}%`,
                  width: `${b.width}px`,
                  height: `${b.height}px`,
                  animationDuration: `${b.duration}s`,
                  animationDelay: `${b.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="relative px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">

            {/* Prominent Circular Executive Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/40 blur-xl rounded-full scale-125 group-hover:scale-150 transition-transform duration-500" />
                <div
                  className={`relative rounded-full bg-white backdrop-blur-md border-2 border-white shadow-md flex items-center justify-center font-extrabold text-emerald-700 transition-all duration-500 overflow-hidden p-1 ${
                    isScrolled ? "w-11 h-11" : "w-14 h-14 sm:w-16 sm:h-16"
                  }`}
                >
                  {logoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logoUrl}
                      alt="EFFORT NGO logo"
                      className="w-full h-full object-contain rounded-full filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-xl sm:text-2xl font-black text-emerald-700">E</span>
                  )}
                </div>
              </div>
              <div>
                <span className={`font-black tracking-tight bg-gradient-to-r from-emerald-900 via-emerald-700 to-amber-600 bg-clip-text text-transparent block leading-none transition-all duration-500 ${isScrolled ? "text-base" : "text-xl sm:text-2xl"}`}>
                  EFFORT
                </span>
                <span className="relative text-[10px] sm:text-xs font-bold text-emerald-600 tracking-widest uppercase mt-1 block w-fit">
                  Empowering Futures
                  <span className="absolute left-0 -bottom-0.5 h-px bg-emerald-500 w-0 group-hover:w-full transition-all duration-300" />
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (Expanded Horizontal Tube Layout) */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 font-bold text-slate-700 text-xs sm:text-[13px] xl:text-sm whitespace-nowrap">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href} className="relative py-1.5 group/nav whitespace-nowrap shrink-0">
                    <span
                      className={`inline-block transition-all duration-300 group-hover/nav:-translate-y-0.5 ${
                        isActive ? "text-emerald-700" : "group-hover/nav:text-emerald-700"
                      }`}
                    >
                      {link.name}
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300 ${
                        isActive ? "w-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" : "w-0 group-hover/nav:w-full"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Corporate Dropdown wrapper */}
              <div className="relative shrink-0" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className="flex items-center gap-1 hover:text-emerald-700 text-slate-700 py-1.5 transition-colors focus:outline-hidden cursor-pointer whitespace-nowrap">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full pt-3 w-80 z-[9999]">
                    <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/50 rounded-2xl p-4 shadow-2xl space-y-1 animate-fade-in shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                      {moreLinks.map((subLink) => (
                        <Link key={subLink.name} href={subLink.href} className="flex gap-3 items-start p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group/item">
                          <subLink.icon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-slate-900 block group-hover/item:text-emerald-700">{subLink.name}</span>
                            <span className="text-[10px] text-slate-450 block mt-0.5 leading-relaxed">{subLink.desc}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA + Utility Cluster */}
            <div className="hidden sm:flex items-center gap-3">
              {/* High-Impact 3D Glowing "Donate Now" Executive CTA */}
              <Link
                href="/donate"
                onMouseMove={handleDonateMouseMove}
                onMouseEnter={() => setIsDonateHover(true)}
                onMouseLeave={handleDonateMouseLeave}
                style={{ transform: `translate(${magnet.x}px, ${magnet.y - (isDonateHover ? 2 : 0)}px) scale(${isDonateHover ? 1.06 : 1})` }}
                className="relative overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-amber-500 via-emerald-600 via-teal-600 to-amber-500 bg-[length:200%_200%] animate-gradient-border-flow text-white font-extrabold text-xs sm:text-sm shadow-[0_8px_30px_rgba(245,158,11,0.45),0_0_20px_rgba(16,185,129,0.35)] flex items-center gap-2.5 transition-all duration-300 group/donate border-2 border-white/40 hover:border-white hover:shadow-[0_12px_40px_rgba(245,158,11,0.6),0_0_30px_rgba(16,185,129,0.5)]"
              >
                {/* Continuous Shimmer Light Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/donate:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
                
                {/* Pulsing Glowing Heart Container */}
                <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 shadow-inner group-hover/donate:scale-110 transition-transform">
                  <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />
                </div>

                <span className="relative font-black tracking-wide text-white drop-shadow-sm">Donate Now</span>

                {/* 80G Tax Exemption Pill */}
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/40 border border-amber-300/40 text-[9px] font-black uppercase text-amber-200 tracking-wider backdrop-blur-xs">
                  80G Tax Free
                </span>

                <ArrowRight className={`w-4 h-4 text-amber-200 relative transition-transform duration-300 ${isDonateHover ? "translate-x-1" : ""}`} />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors focus:outline-hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden relative mt-4 mx-5 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl px-4 pt-4 pb-6 space-y-2 shadow-2xl max-h-[75vh] overflow-y-auto animate-fade-in">
              <div className="font-bold text-[10px] text-slate-400 uppercase tracking-wider px-3 mb-1">Main Pages</div>
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-xl font-semibold text-sm transition-all ${
                      isActive ? "bg-emerald-50 text-emerald-700" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="font-bold text-[10px] text-slate-400 uppercase tracking-wider px-3 pt-4 mb-1 border-t border-slate-100">Additional Resources</div>
              {moreLinks.map((subLink) => (
                <Link
                  key={subLink.name}
                  href={subLink.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-slate-705 hover:bg-slate-50 font-semibold text-sm transition-all"
                >
                  {subLink.name}
                </Link>
              ))}

              <div className="pt-4 flex flex-col gap-2 border-t border-slate-100">
                <Link
                  href="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold shadow-md hover:from-emerald-700 hover:to-emerald-800 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" /> Donate Now
                </Link>
              </div>
            </div>
          )}
        </header>
        </div>
      </div>

      <DonateModal open={isDonateModalOpen} onClose={() => setIsDonateModalOpen(false)} />
    </>
  );
}
