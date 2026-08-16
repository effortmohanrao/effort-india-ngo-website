"use client";

import React, { useEffect, useState } from "react";
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
  MapPin,
  Lock,
  FileCheck,
  ArrowDown,
  GraduationCap,
  Users,
  CheckCircle2,
  Copy,
  Check,
  Smartphone,
  Loader2,
  Sparkles,
  Zap,
} from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

// Possible Collaboration — real EFFORT collaboration packages, as published to funding partners.
// Single source of truth for this data (an earlier duplicate array here had drifted out of
// sync with what actually rendered — consolidated back into one list).
const collaborationOptions = [
  {
    id: "land-water",
    title: "Land & Water Conservation",
    badge: "Sustainable Agriculture",
    budget: "US $225 / Hectare",
    subText: "Min: 50 Hectares ($11,250, 1 yr) • Max: 1,000 Hectares ($2,25,000, 3 yrs)",
    desc: "Convert farmland into productive land by adopting soil, water and vegetative conservation measures with sustainable agricultural practices.",
    impactMetric: "50 to 1,000 Farmers",
    duration: "1 to 3 Years",
    icon: Sprout,
    accent: "emerald",
  },
  {
    id: "smart-agri",
    title: "SMART — Sustainable Management of Agriculture for Rural Transformation",
    badge: "SMART Agriculture",
    budget: "US $75 / Farmer",
    subText: "Village Unit: 20–100 Farmers, 1 yr • Cluster: up to 3,000 Farmers, 3 yrs",
    desc: "Equips farmers with climate-resilient practices and sustainable cultivation techniques, scaling from a single village to a multi-year cluster programme.",
    impactMetric: "20 to 3,000 Farmers",
    duration: "1 to 3 Years",
    icon: Zap,
    accent: "amber",
  },
  {
    id: "ro-plant",
    title: "Reverse Osmosis Plant for Safe Drinking Water",
    badge: "Water & WASH",
    budget: "US $6,000 / Village",
    subText: "Total $7,000 — village mobilizes $1,000, donor funds $6,000",
    desc: "Provides safe, fluoride-free drinking water to around 1,000 families (5,000 people) in an affected village.",
    impactMetric: "1,000 Families",
    duration: "Permanent Asset",
    icon: Droplets,
    accent: "sky",
  },
  {
    id: "child-school",
    title: "Healthy & Child Friendly Schools",
    badge: "Child Education",
    budget: "US $9,000 / School",
    subText: "Total $10,000 — village mobilizes $1,000, donor funds $9,000",
    desc: "Facilitates the amenities needed to ensure school education for all children, upgrading water, sanitation and learning infrastructure.",
    impactMetric: "Whole School Community",
    duration: "Permanent Upgrade",
    icon: GraduationCap,
    accent: "indigo",
  },
  {
    id: "child-sponsor",
    title: "Child Sponsorship",
    badge: "Child Welfare",
    budget: "US $500 / Child / Year",
    subText: "Full-year academic and living support per child",
    desc: "Gives a needy or deserving child the opportunity to continue their education — covering education, food and clothing for one year.",
    impactMetric: "1 Child, Full Year",
    duration: "1 Year",
    icon: Heart,
    accent: "rose",
  },
];

const COLLAB_ACCENT: Record<string, { bar: string; iconBg: string; iconText: string; badgeBg: string; badgeText: string }> = {
  emerald: { bar: "bg-emerald-400", iconBg: "bg-emerald-50", iconText: "text-emerald-700", badgeBg: "bg-emerald-100", badgeText: "text-emerald-800" },
  amber: { bar: "bg-amber-400", iconBg: "bg-amber-50", iconText: "text-amber-700", badgeBg: "bg-amber-100", badgeText: "text-amber-800" },
  sky: { bar: "bg-sky-400", iconBg: "bg-sky-50", iconText: "text-sky-700", badgeBg: "bg-sky-100", badgeText: "text-sky-800" },
  indigo: { bar: "bg-indigo-400", iconBg: "bg-indigo-50", iconText: "text-indigo-700", badgeBg: "bg-indigo-100", badgeText: "text-indigo-800" },
  rose: { bar: "bg-rose-400", iconBg: "bg-rose-50", iconText: "text-rose-700", badgeBg: "bg-rose-100", badgeText: "text-rose-800" },
};

function UnionBankLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#003366] text-white flex flex-col items-center justify-center border-2 border-amber-400 shadow-md shrink-0 p-0.5">
      <span className="text-[10px] font-black tracking-tight leading-none text-amber-300 font-mono">UBI</span>
      <span className="text-[8px] font-bold text-white tracking-widest leading-none mt-0.5">BANK</span>
    </div>
  );
}

function SBIBankLogo() {
  return (
    <div className="w-11 h-11 rounded-xl bg-[#280071] text-white flex items-center justify-center border-2 border-sky-400 shadow-md shrink-0">
      <div className="w-6 h-6 rounded-full bg-[#00a3e0] flex items-center justify-center relative shadow-inner">
        <div className="w-1.5 h-2.5 bg-[#280071] rounded-t-full absolute bottom-0" />
      </div>
    </div>
  );
}

function CopyRow({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  return (
    <div className="flex items-center justify-between gap-3 py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 transition-all group">
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</p>
        <p className={`text-xs sm:text-sm text-slate-900 truncate mt-0.5 ${mono ? "font-mono font-bold" : "font-bold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" /> Copy
          </>
        )}
      </button>
    </div>
  );
}

export default function DonatePage() {
  const [giveTab, setGiveTab] = useState<"india" | "abroad">("india");
  const [settings, setSettings] = useState<DonationSettings>(defaultDonationSettings);
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/api/site/donation-settings", { cache: "no-store" }).then((r) => r.json()).catch(() => defaultDonationSettings),
      fetch("/api/site/media?prefix=donation-qr", { cache: "no-store" }).then((r) => r.json()).catch(() => ({ images: [] })),
    ])
      .then(([settingsData, mediaData]) => {
        if (settingsData && settingsData.domesticBank) setSettings(settingsData);
        setQrUrl(mediaData.images?.[0]?.url ?? null);
      })
      .finally(() => setLoading(false));
  }, []);

  function BankDetail({ account, type }: { account: BankAccount; type: "domestic" | "fcra" }) {
    const isDomestic = type === "domestic";
    return (
      <div className="space-y-2">
        <CopyRow label="Bank Name" value={account.bankName} mono={false} />
        <CopyRow label="Account Beneficiary" value={account.accountName} mono={false} />
        <CopyRow label="Account Number" value={account.accountNumber} />
        <CopyRow label="IFSC Code" value={account.ifsc} />
        <CopyRow label="Branch" value={account.branch} mono={false} />
        {!isDomestic && account.swiftCode && <CopyRow label="SWIFT / BIC Code" value={account.swiftCode} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0] text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#2A0B0E] via-[#5c0d18] to-[#381116] text-white border-b-4 border-amber-400 shadow-xl overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-20 w-[560px] h-[560px] bg-amber-300/20 rounded-full blur-[150px] animate-liquid-drift-a" />
          <div className="absolute top-1/3 -right-20 w-[520px] h-[520px] bg-rose-400/15 rounded-full blur-[150px] animate-liquid-drift-b" />
          <div className="absolute -bottom-24 left-1/3 w-[460px] h-[460px] bg-orange-300/15 rounded-full blur-[140px] animate-liquid-drift-c" />
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-amber-300/60 shadow-[0_0_8px_#fbbf24] animate-dust-float"
              style={{
                width: 3 + (i % 4) * 2,
                height: 3 + (i % 4) * 2,
                left: `${(i * 6.1) % 100}%`,
                top: `${(i * 8.7) % 100}%`,
                animationDelay: `${(i % 8) * 0.5}s`,
                animationDuration: `${6 + (i % 5)}s`,
              }}
            />
          ))}
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
            <a
              href="#give"
              className="px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-slate-950" /> DONATE NOW <ArrowDown className="w-4 h-4" />
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
      {/* 3. GIVE — INDIA / ABROAD TOGGLE PANEL */}
      {/* ========================================================================= */}
      <section id="give" className="py-16 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            OFFICIAL DONATION DETAILS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">WHERE ARE YOU GIVING FROM?</h2>
        </div>

        {/* Segmented Toggle */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 rounded-full bg-white border-2 border-amber-200 shadow-md">
            <button
              type="button"
              onClick={() => setGiveTab("india")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                giveTab === "india"
                  ? "bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🇮🇳 India (INR)
            </button>
            <button
              type="button"
              onClick={() => setGiveTab("abroad")}
              className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                giveTab === "abroad"
                  ? "bg-gradient-to-r from-sky-700 via-indigo-800 to-sky-900 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌍 Abroad (FCRA)
            </button>
          </div>
        </div>

        {loading ? (
          <div className="p-16 flex flex-col items-center justify-center gap-3 text-sm text-slate-500">
            <Loader2 className="w-6 h-6 animate-spin text-amber-700" />
            <span className="font-bold">Loading verified bank details...</span>
          </div>
        ) : (
          <div className="rounded-[36px] bg-white border-2 border-amber-300/70 shadow-xl p-6 sm:p-10 animate-fade-in">
            {giveTab === "india" ? (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 border-b border-amber-100">
                  <UnionBankLogo />
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{settings.domesticBank.bankName}</h3>
                    <p className="text-xs font-bold text-amber-800 uppercase tracking-wider">Domestic Transfer &bull; 80G Tax Exempt</p>
                  </div>
                </div>

                {/* UPI QR */}
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-5 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                  {qrUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qrUrl} alt="UPI QR code to donate to EFFORT NGO" className="w-40 h-40 object-contain rounded-xl border-2 border-amber-300 shadow-md shrink-0 bg-white p-1.5" />
                  ) : (
                    <div className="w-40 h-40 rounded-xl border-2 border-dashed border-amber-300 bg-white flex items-center justify-center text-[10px] text-amber-800 font-bold text-center px-3 shrink-0">
                      Scan with any UPI App (GPay / PhonePe / Paytm / BHIM)
                    </div>
                  )}
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                      <Smartphone className="w-3 h-3 text-amber-900" /> Instant UPI Payment
                    </span>
                    <h4 className="text-base font-black text-slate-900">Scan the QR or use NEFT/RTGS Transfer</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      All domestic donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                    </p>
                    {settings.upiId && <div className="max-w-xs"><CopyRow label="Official UPI ID" value={settings.upiId} /></div>}
                  </div>
                </div>

                <BankDetail account={settings.domesticBank} type="domestic" />
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-5 border-b border-sky-100">
                  <SBIBankLogo />
                  <div>
                    <h3 className="text-lg font-black text-slate-900">{settings.fcraBank.bankName}</h3>
                    <p className="text-xs font-bold text-sky-800 uppercase tracking-wider">New Delhi Main Branch &bull; MHA FCRA Approved</p>
                  </div>
                </div>

                <div className="rounded-2xl bg-sky-50 border-2 border-sky-200 p-4 text-xs text-sky-900 leading-relaxed flex gap-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-sky-600 mt-0.5" />
                  <div>
                    <h5 className="font-black text-xs text-sky-950 uppercase tracking-wider">MHA FCRA Government Statutory Requirement</h5>
                    <p className="mt-1 text-sky-800 font-medium">
                      Under Ministry of Home Affairs (MHA) regulations, all international &amp; NRI foreign contributions must be routed through this designated State Bank of India (SBI) New Delhi Main Branch account.
                    </p>
                  </div>
                </div>

                <BankDetail account={settings.fcraBank} type="fcra" />
              </div>
            )}

            {/* Tax Receipt Note */}
            <div className="mt-6 rounded-2xl bg-slate-900 text-white p-4 text-xs leading-relaxed flex items-center gap-3 shadow-lg">
              <Mail className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="font-bold text-slate-200">Need your 80G Tax Exemption Receipt?</p>
                <p className="text-[11px] text-slate-400 font-medium">
                  Email your transaction reference / screenshot to{" "}
                  <a href={`mailto:${settings.receiptEmail}`} className="text-amber-300 font-bold underline">{settings.receiptEmail}</a>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 rounded-[28px] bg-white border border-amber-900/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Users className="w-6 h-6 text-emerald-700 shrink-0" />
            <div>
              <p className="font-bold text-sm text-slate-900">Giving as an organisation, corporate or funding agency?</p>
              <p className="text-xs text-slate-600 font-medium">See our structured collaboration packages below — from land conservation to school infrastructure.</p>
            </div>
          </div>
          <a
            href="#collaboration"
            className="shrink-0 px-6 py-3 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider hover:bg-amber-300 transition-all shadow-md whitespace-nowrap"
          >
            View Collaboration Options
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3B. POSSIBLE COLLABORATION — institutional & corporate packages */}
      {/* ========================================================================= */}
      <section id="collaboration" className="py-16 lg:py-20 bg-gradient-to-b from-[#fdfaf4] via-[#faf3e0] to-[#fdfaf4] border-y border-amber-900/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              <Sparkles className="w-3.5 h-3.5" /> Possible Collaboration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Structured Ways to Partner With Us</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              EFFORT invites Individuals, Organisations, Funding Agencies and Corporate Companies to co-create sustainable impact. Every package is community co-funded and Section 80G / FCRA compliant.
            </p>
          </div>

          {/* Collaboration Packages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collaborationOptions.map((pkg) => {
              const PkgIcon = pkg.icon;
              const a = COLLAB_ACCENT[pkg.accent];
              return (
                <div
                  key={pkg.id}
                  className="relative bg-white border border-amber-900/15 rounded-3xl p-6 flex flex-col justify-between gap-5 shadow-[0_20px_45px_-25px_rgba(120,90,40,0.25)] hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_28px_55px_-20px_rgba(120,90,40,0.3)] transition-all duration-300 overflow-hidden"
                >
                  <span className={`absolute top-0 left-0 w-full h-1 ${a.bar}`} />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${a.badgeBg} ${a.badgeText}`}>
                        {pkg.badge}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${a.iconBg}`}>
                        <PkgIcon className={`w-4.5 h-4.5 ${a.iconText}`} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base font-black text-slate-900 leading-snug">{pkg.title}</h3>
                      <p className="text-lg font-black text-[#a3711f] font-mono mt-1">{pkg.budget}</p>
                      <p className="text-[10px] text-slate-450 font-bold mt-0.5">{pkg.subText}</p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-amber-900/10">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                      <span>{pkg.impactMetric}</span>
                      <span>{pkg.duration}</span>
                    </div>
                    <a
                      href={`mailto:effortap@gmail.com?subject=Collaboration%20Enquiry%20-%20${encodeURIComponent(pkg.title)}`}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md hover:bg-amber-800 transition-all"
                    >
                      Sponsor This Package <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statutory Trust Strip */}
          <div className="p-5 rounded-2xl bg-white border border-amber-900/15 text-center space-y-2 max-w-3xl mx-auto shadow-xs">
            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold uppercase text-slate-700">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> Societies Act 1860 (Reg. 340/1999)</span>
              <span className="flex items-center gap-1.5"><FileCheck className="w-3.5 h-3.5 text-amber-700" /> MHA FCRA Approved</span>
              <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-amber-700" /> 80G Tax Exempt</span>
            </div>
            <p className="text-xs text-slate-500">
              EFFORT provides statutory audit reports and utilization certificates for all institutional partner contributions.
            </p>
          </div>

          <div className="text-center">
            <a
              href="mailto:effortap@gmail.com?subject=Custom%20Collaboration%20Proposal"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-amber-800 transition-all"
            >
              <Mail className="w-4 h-4" /> Request a Custom Proposal <ArrowRight className="w-4 h-4" />
            </a>
          </div>

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
            © {new Date().getFullYear()} EFFORT. All Rights Reserved. Section 80G &amp; FCRA Registered.
          </p>
        </div>
      </footer>
    </div>
  );
}
