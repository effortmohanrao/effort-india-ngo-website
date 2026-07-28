"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

type Ripple = { id: number; x: number; y: number };

const particleColors = ["bg-emerald-400/50", "bg-amber-400/60", "bg-teal-400/50", "bg-emerald-300/50", "bg-amber-300/55"];

const headerParticles = Array.from({ length: 50 }, (_, i) => ({
  left: (i * 47) % 100,
  top: (i * 29) % 100,
  size: i % 3 === 0 ? 1.5 : 1,
  color: particleColors[i % particleColors.length],
  delay: (i % 10) * 0.3,
}));

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDonateHover, setIsDonateHover] = useState(false);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const pathname = usePathname();

  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
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
    { name: "Our Programs", href: "/programs" },
    { name: "Impact & Map", href: "/impact" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Contact Us", href: "/contact" },
  ];

  const moreLinks = [
    { name: "Transparency & Audits", href: "/transparency", icon: FileText, desc: "Audited financial balance sheets & filings" },
    { name: "CSR Partnerships", href: "/csr", icon: Building, desc: "Corporate MCA CSR project collaborations" },
    { name: "Careers & Internships", href: "/careers", icon: Briefcase, desc: "Ground job openings & student roles" },
    { name: "News & Media Blog", href: "/news", icon: Newspaper, desc: "Field journals, releases & galleries" },
    { name: "Donor Portal Login", href: "/donor-login", icon: UserCheck, desc: "Access ledgers & tax certificates" },
  ];

  const languages = [
    { code: "EN", label: "English" },
    { code: "TE", label: "తెలుగు" },
    { code: "HI", label: "हिन्दी" },
  ];

  const socialLinks = [
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
    { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  ];

  const handleDonateMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    setMagnet({ x, y });
  };

  const handleDonateMouseLeave = () => {
    setMagnet({ x: 0, y: 0 });
    setIsDonateHover(false);
  };

  const handleDonateClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 650);
  };

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
            <a href="mailto:info@effortindiango.org" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@effortindiango.org
            </a>
            <a href="tel:+919876543210" className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /> +91 98765 43210
            </a>
            <span className="hidden lg:block w-px h-3 bg-emerald-700/60" />
            <div className="hidden lg:flex items-center gap-2">
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
            <span className="hidden md:block w-px h-3 bg-emerald-700/60" />
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                {selectedLang}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-slate-900/95 backdrop-blur-xl border border-emerald-800/40 rounded-xl shadow-xl py-1.5 z-[100] animate-fade-in">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setSelectedLang(l.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-[11px] text-emerald-100 hover:bg-emerald-800/40 hover:text-white transition-colors cursor-pointer"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING MAIN NAVIGATION --- */}
      <div className={`sticky top-0 z-50 transition-all duration-500 px-3 sm:px-6 lg:px-8 ${isScrolled ? "pt-2" : "pt-4"}`}>
        <header
          className={`relative max-w-7xl mx-auto rounded-[28px] border transition-all duration-500 ${
            isScrolled
              ? "bg-white/80 backdrop-blur-[30px] border-white/60 shadow-[0_8px_40px_-8px_rgba(6,95,70,0.28)] py-2.5"
              : "bg-white/60 backdrop-blur-[24px] border-white/40 shadow-[0_10px_50px_-12px_rgba(6,95,70,0.18)] py-4"
          }`}
        >
          {/* Ambient background effects */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
            <div className="absolute -top-10 left-16 w-40 h-40 bg-emerald-300/20 rounded-full blur-[60px]" />
            <div className="absolute -bottom-10 right-24 w-32 h-32 bg-amber-200/20 rounded-full blur-[50px]" />
            <div className="absolute inset-0 bg-noise" />
            {headerParticles.map((p, i) => (
              <div
                key={i}
                className={`absolute rounded-full ${p.color} animate-float-particle`}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size * 4}px`,
                  height: `${p.size * 4}px`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="relative px-5 sm:px-7 flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/40 blur-xl rounded-2xl scale-125 group-hover:scale-150 transition-transform duration-500" />
                <div
                  className={`relative rounded-2xl bg-white/70 backdrop-blur-md border border-white/70 shadow-inner flex items-center justify-center font-extrabold text-emerald-700 transition-all duration-500 ${
                    isScrolled ? "w-9 h-9 text-base" : "w-11 h-11 text-xl"
                  }`}
                >
                  E
                </div>
              </div>
              <div>
                <span className={`font-extrabold tracking-tight text-slate-900 block leading-none transition-all duration-500 ${isScrolled ? "text-base" : "text-xl"}`}>
                  EFFORT INDIA
                </span>
                <span className="relative text-[10px] font-semibold text-emerald-600 tracking-widest uppercase mt-1 block w-fit">
                  Empowering Futures
                  <span className="absolute left-0 -bottom-0.5 h-px bg-emerald-500 w-0 group-hover:w-full transition-all duration-300" />
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-[13px]">
              {mainLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.name} href={link.href} className="relative py-1.5 group/nav">
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
              <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                <button className="flex items-center gap-1 hover:text-emerald-700 text-slate-600 py-1.5 transition-colors focus:outline-hidden cursor-pointer">
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full pt-3 w-80 z-50">
                    <div className="bg-white/95 backdrop-blur-2xl border border-slate-200/50 rounded-2xl p-4 shadow-2xl space-y-1 animate-fade-in">
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

              {/* Search */}
              <div className="relative" ref={searchRef}>
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:shadow-md hover:-rotate-6 transition-all duration-300 cursor-pointer"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-3 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-2xl p-3 z-50 animate-fade-in">
                    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                      <Search className="w-4 h-4 text-slate-400 shrink-0" />
                      <input
                        autoFocus
                        type="text"
                        placeholder="Search programs, news..."
                        className="flex-1 bg-transparent text-sm outline-hidden placeholder-slate-400 min-w-0"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Theme toggle (visual affordance) */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm flex items-center justify-center text-slate-600 hover:text-emerald-700 hover:shadow-md hover:rotate-12 transition-all duration-300 cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Donate Button */}
              <Link
                href="/donate"
                onMouseMove={handleDonateMouseMove}
                onMouseEnter={() => setIsDonateHover(true)}
                onMouseLeave={handleDonateMouseLeave}
                onClick={handleDonateClick}
                style={{ transform: `translate(${magnet.x}px, ${magnet.y}px) scale(${isDonateHover ? 1.06 : 1})` }}
                className="relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white font-bold text-sm shadow-[0_8px_24px_-6px_rgba(16,185,129,0.55)] flex items-center gap-2 transition-transform duration-200 ease-out animate-heartbeat-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-tr from-white/25 via-transparent to-transparent pointer-events-none" />
                {ripples.map((r) => (
                  <span
                    key={r.id}
                    className="absolute rounded-full bg-white/50 animate-ripple pointer-events-none"
                    style={{ left: r.x - 5, top: r.y - 5, width: 10, height: 10 }}
                  />
                ))}
                <Heart className="w-4 h-4 fill-white relative" />
                <span className="relative">Donate Now</span>
                <ArrowRight className={`w-4 h-4 relative transition-transform duration-300 ${isDonateHover ? "translate-x-1" : ""}`} />
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
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold shadow-md hover:from-emerald-700 hover:to-emerald-800 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-white" /> Donate Now
                </Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}
