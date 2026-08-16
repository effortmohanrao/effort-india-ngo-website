"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Award,
  Landmark,
  Mail,
  Phone,
  Sprout,
  Droplets,
  ArrowRight,
  HelpCircle,
  MapPin,
  Lock,
  FileCheck,
  ArrowDown,
  GraduationCap,
  Users,
  CheckCircle2,
} from "lucide-react";
import DonateModal from "@/components/DonateModal";

export default function DonatePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0] text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-r from-[#381116] via-[#5c0d18] to-[#381116] text-white border-b-4 border-amber-400 shadow-xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-amber-200/20 rounded-full blur-[140px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-rose-200/15 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="absolute inset-0 bg-noise opacity-15" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0B0E] border border-[#5B1D24] text-[#F7E4A3] text-xs font-black uppercase tracking-[0.22em] shadow-md">
            <Lock className="w-3.5 h-3.5 text-amber-300" />
            <span>SECURE &bull; TRANSPARENT &bull; ACCOUNTABLE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none drop-shadow-md">
            SUPPORT THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7E4A3] via-amber-200 to-amber-400">JOURNEY</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#F5E5C9] font-semibold max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Your contribution helps build resilient communities, sustainable livelihoods and a stronger future.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-slate-950" /> DONATE NOW
            </button>
            <a
              href="#ways-to-give"
              className="px-9 py-4 rounded-full bg-white/10 border border-white/30 text-white font-black text-sm uppercase tracking-wider hover:bg-white/20 transition-all flex items-center gap-2"
            >
              Ways To Give <ArrowDown className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#F7E4A3] font-bold tracking-wide pt-1 italic">
            &quot;Every contribution supports EFFORT&apos;s mission of inclusive and sustainable development.&quot;
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STRIP */}
      {/* ========================================================================= */}
      <section className="bg-white/90 border-b border-amber-900/15 py-4 backdrop-blur-md shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-center sm:text-left text-xs font-black uppercase tracking-widest text-slate-800">
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><ShieldCheck className="w-4 h-4 text-amber-700" /><span>REGISTERED NGO</span></div>
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><FileCheck className="w-4 h-4 text-amber-700" /><span>TRANSPARENT FUND UTILISATION</span></div>
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><Landmark className="w-4 h-4 text-amber-700" /><span>BANK-VERIFIED DETAILS</span></div>
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><Award className="w-4 h-4 text-amber-700" /><span>80G TAX EXEMPT</span></div>
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><Lock className="w-4 h-4 text-amber-700" /><span>SECURE CONTRIBUTION</span></div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WAYS TO GIVE */}
      {/* ========================================================================= */}
      <section id="ways-to-give" className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            WAYS TO GIVE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">CHOOSE HOW YOU&apos;D LIKE TO HELP</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="p-7 rounded-[28px] bg-white border-2 border-amber-300/80 shadow-lg space-y-3">
            <span className="text-2xl">🇮🇳</span>
            <h3 className="text-lg font-black text-slate-900">Giving from India</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Scan our UPI QR code, pay via any UPI app, or transfer directly to our Union Bank account. All domestic donations are eligible for tax exemption under Section 80G.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-amber-800 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              View UPI &amp; Bank Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="p-7 rounded-[28px] bg-white border-2 border-sky-300/80 shadow-lg space-y-3">
            <span className="text-2xl">🌍</span>
            <h3 className="text-lg font-black text-slate-900">Giving from Abroad</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Under Ministry of Home Affairs (MHA) FCRA regulations, all international &amp; NRI foreign contributions must be sent by bank wire to our designated State Bank of India, New Delhi account.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-700 via-indigo-800 to-sky-900 text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-sky-800 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              View SWIFT Wire Details <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="p-6 rounded-[28px] bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Mail className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <p className="font-bold text-sm text-white">Already donated?</p>
              <p className="text-xs text-slate-300 font-medium">
                Email your transaction reference / screenshot to <a href="mailto:effortap@gmail.com" className="text-amber-300 font-bold underline">effortap@gmail.com</a> for your official 80G receipt.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-[28px] bg-white border border-amber-900/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Users className="w-6 h-6 text-emerald-700 shrink-0" />
            <div>
              <p className="font-bold text-sm text-slate-900">Giving as an organisation, corporate or funding agency?</p>
              <p className="text-xs text-slate-600 font-medium">See our structured collaboration packages — from land conservation to school infrastructure.</p>
            </div>
          </div>
          <Link
            href="/get-involved"
            className="shrink-0 px-6 py-3 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md whitespace-nowrap"
          >
            View Collaboration Options
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHERE YOUR SUPPORT GOES */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white/80 border-y border-amber-900/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              AUDITABLE FIELD IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">WHERE YOUR SUPPORT GOES</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "COMMUNITY DEVELOPMENT",
                desc: "Empowering rural women through Self-Help Groups (SHGs) and local water-user collectives.",
                icon: Users,
              },
              {
                title: "SUSTAINABLE AGRICULTURE",
                desc: "Promoting climate-resilient organic farming, Direct Seeded Rice (DSR), and indigenous seed preservation.",
                icon: Sprout,
              },
              {
                title: "LIVELIHOODS & YOUTH",
                desc: "Equipping rural youth with digital, vocational, and agricultural enterprise skills for income security.",
                icon: GraduationCap,
              },
              {
                title: "RESILIENT COMMUNITIES",
                desc: "Building rainwater check-dams, watershed conservation, and drought mitigation infrastructure.",
                icon: Droplets,
              },
            ].map((cat) => (
              <div key={cat.title} className="p-6 rounded-3xl bg-white border border-amber-900/15 hover:border-amber-500/50 shadow-md hover:shadow-lg transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <cat.icon className="w-6 h-6 text-amber-800" />
                </div>
                <h3 className="text-base font-black text-slate-900">{cat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{cat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ACCOUNTABILITY SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">YOUR TRUST MATTERS</h2>
          <p className="text-slate-600 text-sm font-medium">Built on 27 years of statutory compliance, independent audits, and transparent reporting.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            "Transparent Documentation",
            "Responsible Fund Management",
            "Institutional Partnerships",
            "Impact Reporting",
            "Official Acknowledgement",
          ].map((item) => (
            <div key={item} className="p-4 rounded-2xl bg-white border border-amber-900/15 text-center space-y-2 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-amber-800 mx-auto" />
              <p className="text-xs font-extrabold text-slate-900">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 pt-2">
          <Link href="/impact" className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-black uppercase tracking-wider transition-all shadow-md">
            VIEW OUR REPORTS
          </Link>
          <Link href="/impact" className="px-6 py-3 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md">
            VIEW OUR IMPACT
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONTACT & SUPPORT */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div>
          <h2 className="text-2xl font-black text-slate-900">NEED HELP WITH YOUR CONTRIBUTION?</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Our finance &amp; donor relations team is here to assist you.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-amber-900/15 space-y-2 shadow-xs">
            <Mail className="w-5 h-5 text-amber-800 mx-auto" />
            <p className="text-xs font-bold text-slate-500">Official Email</p>
            <p className="text-xs font-black text-slate-900">effortap@gmail.com</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-amber-900/15 space-y-2 shadow-xs">
            <Phone className="w-5 h-5 text-emerald-700 mx-auto" />
            <p className="text-xs font-bold text-slate-500">Direct Phone Support</p>
            <p className="text-xs font-black text-slate-900">+91 99599 00081</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-amber-900/15 space-y-2 shadow-xs">
            <MapPin className="w-5 h-5 text-sky-800 mx-auto" />
            <p className="text-xs font-bold text-slate-500">Central Office</p>
            <p className="text-xs font-black text-slate-900 truncate">MARTUR - 523 301, A.P. India</p>
          </div>
        </div>

        <a
          href="mailto:effortap@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md"
        >
          CONTACT DONATION SUPPORT <Mail className="w-4 h-4 text-amber-400" />
        </a>
      </section>

      {/* ========================================================================= */}
      {/* 7. FOOTER TRUST AREA */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl font-black text-white tracking-wider">EFFORT</h3>
          <p className="text-xs text-amber-400 font-bold uppercase tracking-widest">
            Empowering Communities &bull; Strengthening Livelihoods &bull; Building Resilience
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold pt-4 border-t border-slate-900">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-[11px] text-slate-500 font-medium">
            © {new Date().getFullYear()} EFFORT INDIA NGO. All Rights Reserved. Section 80G &amp; FCRA Registered.
          </p>
        </div>
      </footer>

      <DonateModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
