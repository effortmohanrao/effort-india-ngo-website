"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Heart, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  FileText, 
  Briefcase, 
  Newspaper, 
  UserCheck, 
  Building 
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      {/* --- TOP COMPLIANCE BAR --- */}
      <div className="bg-emerald-955 bg-emerald-950 text-emerald-100 text-[11px] sm:text-xs py-2.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-emerald-900/50 z-50 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Govt. Registered NGO (80G/12A Exemption)</span>
          <span className="hidden md:inline-flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-400" /> CSR Registration: CSR00034988</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:info@effortindiango.org" className="hover:text-white transition-colors flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> info@effortindiango.org</a>
          <a href="tel:+919876543210" className="hidden sm:flex hover:text-white transition-colors items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 98765 43210</a>
        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/85 backdrop-blur-xl shadow-lg border-b border-emerald-100/30 py-3" 
          : "bg-white/95 backdrop-blur-md py-5 border-b border-slate-100/50"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              E
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 block leading-none">EFFORT INDIA</span>
              <span className="text-[10px] font-semibold text-emerald-600 tracking-widest uppercase mt-1 block">Empowering Futures</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-semibold text-slate-650 text-sm">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    isActive 
                      ? "text-emerald-650" 
                      : "hover:text-emerald-650 text-slate-600"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"></span>
                  )}
                </Link>
              );
            })}

            {/* Corporate Dropdown wrapper */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-emerald-650 text-slate-600 py-1 transition-colors focus:outline-hidden cursor-pointer">
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-255 ${isDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu (Glassmorphism layout) */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full pt-3 w-80 animate-fade-in z-50">
                  <div className="bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl p-4 shadow-xl space-y-1">
                    {moreLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className="flex gap-3 items-start p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
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

          {/* CTA Header Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <Link 
              href="/donate"  
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-sm shadow-md hover:from-emerald-700 hover:to-emerald-800 transition-all hover:shadow-lg flex items-center gap-2 hover:-translate-y-0.5 duration-200"
            >
              <Heart className="w-4 h-4 fill-white" />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-hidden"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-150 px-4 pt-4 pb-6 space-y-2 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="font-bold text-[10px] text-slate-400 uppercase tracking-wider px-3 mb-1">Main Pages</div>
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl font-semibold text-sm transition-all ${
                    isActive 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "text-slate-700 hover:bg-slate-50"
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
                className="w-full text-center py-3 rounded-xl bg-emerald-600 text-white font-bold shadow-md hover:bg-emerald-700 flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" /> Donate Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
