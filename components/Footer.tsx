"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TwitterXIcon, InstagramIcon, FacebookIcon, LinkedinIcon, YoutubeIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  const pathname = usePathname();
  const [logoUrl, setLogoUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch("/api/site/media?prefix=logo", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const first = data.images?.[0];
        if (first) setLogoUrl(first.url);
      })
      .catch(() => {});
  }, []);

  if (pathname?.startsWith("/admin")) return null;

  const socialLinks = [
    { Icon: TwitterXIcon, href: "https://twitter.com", label: "X / Twitter" },
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
    { Icon: FacebookIcon, href: "#", label: "Facebook" },
    { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-12 border-t border-slate-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-12 border-b border-slate-900">
        
        {/* Info Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-white/90 flex items-center justify-center font-black text-emerald-700 shadow-md overflow-hidden p-1 shrink-0">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="EFFORT NGO logo" className="w-full h-full object-contain rounded-full" />
              ) : (
                <span className="text-xl font-extrabold text-emerald-700">E</span>
              )}
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block">EFFORT</span>
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">EFFORT INDIA NGO</span>
            </div>
          </div>
          <p className="text-xs text-amber-200/90 leading-relaxed font-semibold italic">
            "A Non-Profit Organisation Committed to Empower Rural Communities for Sustainable Development"
          </p>
          <div className="text-xs space-y-1.5 text-slate-300 font-medium pt-1 border-t border-slate-800">
            <p className="text-white font-bold">Central Office:</p>
            <p>Srujana, # 9-240, G.T. Road, MARTUR - 523 301, Bapatla Dist., A.P. India</p>
            <p className="pt-1"><strong className="text-emerald-400">Phone:</strong> +91 99599 00081</p>
            <p><strong className="text-emerald-400">E-mail:</strong> effortap@gmail.com</p>
            <p><strong className="text-emerald-400">Website:</strong> www.effortindia.org</p>
          </div>

          <div className="flex items-center gap-2 pt-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center hover:scale-110 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Programs / Thematic Areas Column */}
        <div>
          <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Thematic Areas</h5>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li><Link href="/programs" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Sustainable and Climate Resilient Farming</Link></li>
            <li><Link href="/programs" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Natural Resource Management</Link></li>
            <li><Link href="/programs" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Livelihoods</Link></li>
            <li><Link href="/programs" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Social Development</Link></li>
          </ul>
        </div>

        {/* Links Column */}
        <div>
          <h5 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Information</h5>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Our Team</Link></li>
            <li><Link href="/impact" className="hover:text-emerald-400 transition-colors">Impact & Coverage Map</Link></li>
            <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Field Photo & Video Gallery</Link></li>
            <li><Link href="/#trust-section" className="hover:text-emerald-400 transition-colors">Transparency & Audits</Link></li>
            <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers & Internships</Link></li>
            <li><Link href="/news" className="hover:text-emerald-400 transition-colors">News & Media Blog</Link></li>
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
