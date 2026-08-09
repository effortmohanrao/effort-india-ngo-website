"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Phone, Mail, MapPin, ShieldCheck, Calendar } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-slate-900">
        
        {/* Info Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black text-base shadow-sm">
              E
            </div>
            <span className="text-lg font-bold tracking-tight text-white">EFFORT</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Effort NGO is a registered charitable trust. We build sustainable, self-reliant models in education, healthcare, and livelihood skilling.
          </p>
          <div className="text-xs space-y-1 font-mono text-slate-650">
            <p>Registration No: 4893/2021</p>
            <p>Section 80G: Unique ID AACTE8492DF20214</p>
            <p>Section 12A: Unique ID AACTE8492DE20211</p>
          </div>
        </div>

        {/* Programs Column */}
        <div>
          <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Focus Areas</h5>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/programs#education" className="hover:text-emerald-450 transition-colors">Shiksha: Rural Education</Link></li>
            <li><Link href="/programs#health" className="hover:text-emerald-450 transition-colors">Sanjeevani: Mobile Clinics</Link></li>
            <li><Link href="/programs#livelihood" className="hover:text-emerald-450 transition-colors">Swavalamban: Youth Skilling</Link></li>
            <li><Link href="/get-involved" className="hover:text-emerald-450 transition-colors">CSR Corporate Partnerships</Link></li>
            <li><Link href="/donate" className="hover:text-emerald-450 transition-colors">Direct Sponsorship Program</Link></li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Information</h5>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Our Team</Link></li>
            <li><Link href="/impact" className="hover:text-emerald-400 transition-colors">Impact & Coverage Map</Link></li>
            <li><Link href="/#trust-section" className="hover:text-emerald-400 transition-colors">Transparency & Audits</Link></li>
            <li><Link href="/careers" className="hover:text-emerald-405 transition-colors">Careers & Internships</Link></li>
            <li><Link href="/news" className="hover:text-emerald-405 transition-colors">News & Media Blog</Link></li>
            <li><Link href="/donor-login" className="hover:text-emerald-405 transition-colors">Donor Portal Login</Link></li>
          </ul>
        </div>

        {/* Tax Exemption info */}
        <div>
          <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Tax Exemption Info</h5>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            All contributions made to Effort NGO are tax-exempt under Section 80G of the Income Tax Act. Instant tax certificates are emailed to donors.
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-bold uppercase tracking-wider">CSR Compliant</span>
            <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-400 font-bold uppercase tracking-wider">80G / 12A Verified</span>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-550 gap-4">
        <p>© {new Date().getFullYear()} Effort NGO. All rights reserved.</p>
        <div className="flex gap-6 font-semibold">
          <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-slate-400 transition-colors">Refund Policy</Link>
          <Link href="#" className="hover:text-slate-400 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
