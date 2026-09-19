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
  Lock,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

export default function Header() {
  const [logoUrl, setLogoUrl] = useState<string>("/logo.png");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const pathname = usePathname();

  const searchRef = useRef<HTMLDivElement>(null);

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
    { name: "Careers & Internships", href: "/careers", icon: Briefcase, desc: "Ground job openings & student roles", locked: true },
    { name: "News & Media Blog", href: "/news", icon: Newspaper, desc: "Field journals, releases & galleries", locked: true },
  ];

  const socialLinks = [
    { Icon: InstagramIcon, href: "https://www.instagram.com/effortap", label: "Instagram" },
    { Icon: FacebookIcon, href: "https://www.facebook.com/EFFORTORGANISATIONINDIA/", label: "Facebook" },
    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/effort-organisation-381246ab", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "https://youtube.com/@effortap8403", label: "YouTube" },
  ];

  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      {/* --- TOP INFORMATION BAR --- */}
      <div className="relative bg-emerald-950 text-emerald-100 border-b border-emerald-800/40">
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
            <span className="hidden xl:block w-px h-3 bg-emerald-700/60" />
            <span className="hidden xl:flex items-center gap-1.5 whitespace-nowrap">
              <Landmark className="w-3.5 h-3.5 text-amber-400" /> CSR Registration: CSR00034988
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="mailto:contact@effortindia.org" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> contact@effortindia.org
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
        <div className="relative max-w-[1440px] mx-auto rounded-[30px] border border-slate-200 bg-white shadow-sm">

          <header
            className={`relative rounded-[28px] border-0 transition-all duration-500 ${
              isScrolled
                ? "bg-white py-2.5"
                : "bg-white py-4"
            }`}
          >
          <div className="relative px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-4">

            {/* Prominent Circular Executive Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative">
                <div
                  className={`relative rounded-full bg-white border-2 border-white shadow-md flex items-center justify-center font-extrabold text-emerald-700 transition-all duration-500 overflow-hidden p-1 ${
                    isScrolled ? "w-11 h-11" : "w-14 h-14 sm:w-16 sm:h-16"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl || "/logo.png"}
                    alt="EFFORT NGO logo"
                    className="w-full h-full object-contain rounded-full filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <span className={`font-black tracking-tight block leading-none transition-all duration-500 ${isScrolled ? "text-base" : "text-xl sm:text-2xl"}`}>
                  EFFORT
                </span>
                <span className="relative text-[10px] sm:text-xs font-bold text-[#8c1c2b] tracking-widest uppercase mt-1 block w-fit">
                  Empowering Futures
                  <span className="absolute left-0 -bottom-0.5 h-px bg-[#8c1c2b] w-0 group-hover:w-full transition-all duration-300" />
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
                    <div className="bg-white/95 border border-slate-200/50 rounded-2xl p-4 shadow-2xl space-y-1 animate-fade-in shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                      {moreLinks.map((subLink) =>
                        subLink.locked ? (
                          <div
                            key={subLink.name}
                            title="Coming soon"
                            className="flex gap-3 items-start p-2.5 rounded-xl opacity-60 cursor-not-allowed select-none"
                          >
                            <subLink.icon className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                                {subLink.name} <Lock className="w-3 h-3 text-slate-400" />
                              </span>
                              <span className="text-[10px] text-slate-400 block mt-0.5 leading-relaxed">Coming soon</span>
                            </div>
                          </div>
                        ) : (
                          <Link key={subLink.name} href={subLink.href} className="flex gap-3 items-start p-2.5 rounded-xl hover:bg-emerald-50/80 transition-colors group/item">
                            <subLink.icon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold text-slate-900 block group-hover/item:text-emerald-700">{subLink.name}</span>
                              <span className="text-[10px] text-slate-450 block mt-0.5 leading-relaxed">{subLink.desc}</span>
                            </div>
                          </Link>
                        )
                      )}
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
                className="relative overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-xs sm:text-sm shadow-sm flex items-center gap-2.5 transition-all duration-300 group/donate"
              >
                
                {/* Pulsing Glowing Heart Container */}
                <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 shadow-inner group-hover/donate:scale-110 transition-transform">
                  <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                </div>

                <span className="relative font-black tracking-wide text-white drop-shadow-sm">Donate Now</span>

                {/* 80G Tax Exemption Pill */}
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/40 border border-amber-300/40 text-[9px] font-black uppercase text-amber-200 tracking-wider">
                  80G Tax Free
                </span>

                <ArrowRight className={`w-4 h-4 text-amber-200 relative transition-transform duration-300 `} />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/60 border border-white/60 shadow-sm flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors focus:outline-hidden cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden relative mt-4 mx-5 bg-white border border-slate-200 rounded-3xl px-4 pt-4 pb-6 space-y-2 shadow-2xl max-h-[75vh] overflow-y-auto animate-fade-in">
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
              {moreLinks.map((subLink) =>
                subLink.locked ? (
                  <div
                    key={subLink.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-400 font-semibold text-sm opacity-60 cursor-not-allowed select-none"
                  >
                    {subLink.name} <Lock className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <Link
                    key={subLink.name}
                    href={subLink.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-slate-705 hover:bg-slate-50 font-semibold text-sm transition-all"
                  >
                    {subLink.name}
                  </Link>
                )
              )}

              <div className="pt-4 flex flex-col gap-2 border-t border-slate-100">
                <Link
                  href="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative overflow-hidden w-full py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm shadow-sm flex items-center justify-center gap-2.5 border-2 border-white/40 cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 border border-white/40 flex items-center justify-center shrink-0 shadow-inner">
                    <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  </div>
                  <span className="font-black tracking-wide text-white drop-shadow-sm">Donate Now</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-950/40 border border-amber-300/40 text-[9px] font-black uppercase text-amber-200 tracking-wider">
                    80G Tax Free
                  </span>
                  <ArrowRight className="w-4 h-4 text-amber-200" />
                </Link>
              </div>
            </div>
          )}
        </header>
        </div>
      </div>
    </>
  );
}
