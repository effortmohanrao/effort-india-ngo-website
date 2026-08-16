"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ExternalLink, ShieldCheck, Compass } from "lucide-react";
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
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-12 border-b border-slate-900">
        
        {/* Main Footer 5-Column Corporate Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1 (3 Cols): NGO Identity & Address */}
          <div className="lg:col-span-3 space-y-4">
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
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">EFFORT NGO</span>
              </div>
            </div>
            
            <p className="text-xs text-amber-200/90 leading-relaxed font-semibold italic">
              "A Non-Profit Organisation Committed to Empower Rural Communities for Sustainable Development"
            </p>

            <div className="text-xs space-y-1.5 text-slate-300 font-medium pt-2 border-t border-slate-900">
              <p className="text-white font-bold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> Central Office:
              </p>
              <p className="text-slate-400 leading-relaxed">Srujana, # 9-240, G.T. Road, MARTUR - 523 301, Bapatla Dist., A.P. India</p>
              <p className="pt-1"><strong className="text-emerald-400">Phone:</strong> +91 99599 00081</p>
              <p><strong className="text-emerald-400">E-mail:</strong> effortap@gmail.com</p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7.5 h-7.5 rounded-full bg-slate-900 hover:bg-white text-white hover:text-slate-950 flex items-center justify-center hover:scale-110 transition-all duration-200 border border-slate-800"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 (2.5 Cols): Thematic Areas */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-black text-white uppercase tracking-wider">Thematic Sectors</h5>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Sustainable Agriculture</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Natural Resource Mgt</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Community Collectives</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Rural Livelihoods</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors flex items-start gap-1.5"><span className="text-amber-400 font-bold">•</span> Social Initiatives</Link></li>
            </ul>
          </div>

          {/* Col 3 (2.5 Cols): Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-black text-white uppercase tracking-wider">Quick Navigation</h5>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Our Team</Link></li>
              <li><Link href="/impact" className="hover:text-emerald-400 transition-colors">Impact &amp; GIS Coverage</Link></li>
              <li><Link href="/programs" className="hover:text-emerald-400 transition-colors">Our Projects</Link></li>
              <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Photo &amp; Video Gallery</Link></li>
              <li><Link href="/#trust-section" className="hover:text-emerald-400 transition-colors">Transparency &amp; Audits</Link></li>
              <li><Link href="/careers" className="hover:text-emerald-400 transition-colors">Careers &amp; Internships</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 4 (4.5 Cols): LIVE MAP PREVIEW & STATUTORY COMPLIANCE */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400" /> Live Location &amp; Headquarters Map
              </h5>
              <a
                href="https://www.google.com/maps/search/?api=1&query=X4H2%2B53C,+Martur,+Andhra+Pradesh+523301,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 transition-colors"
              >
                <span>Google Maps (X4H2+53C)</span>
                <ExternalLink className="w-3 h-3 text-amber-300" />
              </a>
            </div>

            {/* Live Interactive Map Iframe Container */}
            <div className="relative rounded-2xl border-2 border-emerald-500/40 bg-slate-900 overflow-hidden shadow-2xl group h-44 sm:h-48">
              <iframe
                title="EFFORT NGO Central Headquarters Location Map (Plus Code: X4H2+53C)"
                src="https://maps.google.com/maps?q=X4H2%2B53C,+Martur,+Andhra+Pradesh+523301,+India&hl=en&z=17&output=embed"
                className="w-full h-full border-0 filter saturate-[1.2] opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Top Badge */}
              <div className="pointer-events-none absolute top-2.5 left-2.5 bg-slate-950/90 backdrop-blur-md border border-emerald-400/50 rounded-full px-3 py-1 text-[10px] font-black text-white flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Central HQ: X4H2+53C, Martur, A.P.</span>
              </div>
            </div>

            {/* Tax Exemption & Statutory Compliance Badges */}
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-2 text-[10px] text-slate-400 font-bold">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Section 80G Tax Exempt
              </span>
              <span className="text-amber-300">CSR-1 Registered</span>
              <span className="text-slate-300">NITI Aayog DARPAN</span>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Bottom Credits */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 font-medium">
        <p>© {new Date().getFullYear()} EFFORT. All rights reserved.</p>
        <div className="flex flex-wrap gap-6 font-semibold">
          <Link href="/privacy#privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
          <Link href="/privacy#terms" className="hover:text-slate-300 transition-colors">Terms &amp; Conditions</Link>
          <Link href="#" className="hover:text-slate-300 transition-colors">Tax Exemption Policy</Link>
          <Link href="/impact" className="hover:text-slate-300 transition-colors">GIS Coverage Map</Link>
        </div>
      </div>
    </footer>
  );
}
