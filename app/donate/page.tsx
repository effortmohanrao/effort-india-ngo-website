"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Award,
  Landmark,
  Copy,
  Check,
  Smartphone,
  Globe2,
  Mail,
  Phone,
  FileText,
  Building2,
  Users,
  Sprout,
  Droplets,
  Zap,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  Loader2,
  ExternalLink,
  CheckCircle2,
  GraduationCap
} from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

function CopyBox({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  return (
    <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 transition-all group">
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">{label}</p>
        <p className={`text-sm sm:text-base text-white truncate mt-0.5 ${mono ? "font-mono font-bold" : "font-semibold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className="shrink-0 px-3 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-300" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}

function BankDetailsCard({ title, account, badgeText }: { title: string; account: BankAccount; badgeText?: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-slate-900/80 backdrop-blur-xl p-5 sm:p-7 space-y-4 shadow-xl">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <Landmark className="w-5 h-5 text-amber-400 shrink-0" />
          <h4 className="text-base sm:text-lg font-black text-white">{title}</h4>
        </div>
        {badgeText && (
          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300">
            {badgeText}
          </span>
        )}
      </div>

      <div className="space-y-3">
        <CopyBox label="Bank Name" value={account.bankName} mono={false} />
        <CopyBox label="Account Name / Beneficiary" value={account.accountName} mono={false} />
        <CopyBox label="Account Number" value={account.accountNumber} />
        <CopyBox label="IFSC Code" value={account.ifsc} />
        <CopyBox label="Branch Location" value={account.branch} mono={false} />
        {account.swiftCode && <CopyBox label="SWIFT / BIC Code (For Foreign Transfer)" value={account.swiftCode} />}
      </div>
    </div>
  );
}

const donationTiers = [
  { amount: 1000, label: "₹1,000", impact: "Provides IPM bio-inputs & soil testing kit for 1 smallholder farmer." },
  { amount: 2500, label: "₹2,500", impact: "Sponsors 1 youth in 3-month digital skill & livelihood training." },
  { amount: 5000, label: "₹5,000", impact: "Equips 1 Women SHG Collective with organic farming equipment." },
  { amount: 10000, label: "₹10,000", impact: "Funds 1 check-dam desilting & groundwater recharge structure unit." },
  { amount: 25000, label: "₹25,000", impact: "Supports 1 FPO with market linkage tools & cold-storage access." },
];

const causeCategories = [
  { id: "agri", name: "Sustainable & Climate Resilient Agriculture", icon: Sprout },
  { id: "nrm", name: "Natural Resource Management & Water", icon: Droplets },
  { id: "women", name: "Women SHG Cooperatives & Livelihoods", icon: Users },
  { id: "youth", name: "Youth Futures & Skill Training", icon: GraduationCap },
  { id: "general", name: "General Grassroots Development Fund", icon: Heart },
];

const faqs = [
  {
    q: "Is my donation eligible for Tax Exemption under Section 80G?",
    a: "Yes! All donations made to EFFORT NGO are eligible for 50% tax exemption under Section 80G of the Income Tax Act, 1961. We issue instant official 80G tax receipts via email."
  },
  {
    q: "How do I receive my official 80G Tax Exemption Receipt?",
    a: "After completing your transfer (via UPI or Bank NEFT/RTGS/IMPS), send a screenshot or transaction reference (UTR) along with your Full Name, PAN Number, and Address to effortap@gmail.com or WhatsApp +91 99599-00081. Your receipt will be generated within 12 hours."
  },
  {
    q: "Can foreign citizens or NRIs donate to EFFORT NGO?",
    a: "Yes! EFFORT NGO maintains an active FCRA Registration under the Ministry of Home Affairs (MHA), Government of India. Foreign donors can transfer directly to our FCRA Bank Account."
  },
  {
    q: "How are funds utilized and audited?",
    a: "EFFORT NGO maintains 100% statutory transparency with annual independent public audits, Form CSR-1 registration, and empanlement under NITI Aayog DARPAN & TISS National CSR Hub."
  }
];

export default function DonatePage() {
  const [donorTab, setDonorTab] = useState<"india" | "abroad">("india");
  const [selectedTier, setSelectedTier] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedCause, setSelectedCause] = useState<string>("agri");
  const [settings, setSettings] = useState<DonationSettings>(defaultDonationSettings);
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetch("/api/site/donation-settings", { cache: "no-store" }).then((r) => r.json()).catch(() => defaultDonationSettings),
      fetch("/api/site/media?prefix=donation-qr", { cache: "no-store" }).then((r) => r.json()).catch(() => ({ images: [] })),
    ])
      .then(([settingsData, mediaData]) => {
        if (settingsData && settingsData.domesticBank) setSettings(settingsData);
        if (mediaData?.images?.[0]?.url) setQrUrl(mediaData.images[0].url);
      })
      .finally(() => setLoading(false));
  }, []);

  const activeImpactText = (() => {
    const amt = customAmount ? parseInt(customAmount) || 0 : selectedTier;
    if (amt >= 25000) return "Supports 1 FPO with market linkage tools, bio-inputs & cold-storage access across multiple villages.";
    if (amt >= 10000) return "Funds 1 check-dam desilting & groundwater recharge structure unit serving 50+ farm families.";
    if (amt >= 5000) return "Equips 1 Women SHG Collective with bio-pesticide production tools & market access.";
    if (amt >= 2500) return "Sponsors 1 rural youth in 3-month digital skill, employability & livelihood training.";
    if (amt >= 1000) return "Provides IPM bio-inputs, organic fertilizers & soil health testing for 1 smallholder farmer.";
    return "Contributes directly to grassroots field operations, soil health testing & community water harvesting.";
  })();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* HERO BANNER SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04120c] via-[#0b2419] to-[#091a13] pt-24 pb-20 lg:pt-32 lg:pb-28 text-white">
        {/* Background Ambient Glows & Grid Mesh */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[15%] w-[450px] h-[450px] bg-amber-500/15 rounded-full blur-[160px] animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            {/* Accreditation Badges Strip */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-md shadow-lg">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Tax Deductible (Section 80G)
              </span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-amber-300">
                <Award className="w-4 h-4 text-amber-400" /> FCRA &amp; Form CSR-1 Certified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Fuel Grassroots Transformation — <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Empower Rural India</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Your contribution directly empowers small &amp; marginal farmers, landless agricultural laborers, women SHGs, and rural youth through sustainable agriculture, water harvesting, and community resilience.
            </p>

            {/* Impact Highlights Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="text-xl sm:text-2xl font-black text-amber-400">2.67 Lakh</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Lives Impacted</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="text-xl sm:text-2xl font-black text-emerald-400">1,909</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Villages Covered</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="text-xl sm:text-2xl font-black text-cyan-400">80 Projects</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Executed (1999–2026)</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-center">
                <p className="text-xl sm:text-2xl font-black text-purple-400">100% Audited</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Public Compliance</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN DONATION PLATFORM GRID */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-24 z-20">
        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN: INTERACTIVE DONATION TIER & CAUSE SELECTOR (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-[32px] border border-white/15 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Step 1: Select Cause */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 block mb-2">
                  STEP 1 &middot; CHOOSE CAUSE AREA
                </span>
                <h3 className="text-lg font-black text-white mb-3">Where Should Your Donation Go?</h3>
                
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {causeCategories.map((c) => {
                    const IconComp = c.icon;
                    const isSelected = selectedCause === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCause(c.id)}
                        className={`p-3.5 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-emerald-500/20 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            : "bg-slate-950/40 border-white/10 text-slate-300 hover:bg-slate-800/60"
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? "bg-emerald-500 text-slate-950 font-black" : "bg-white/10 text-slate-300"}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold leading-snug">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Donation Tier */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400 block mb-2">
                  STEP 2 &middot; SELECT AMOUNT
                </span>
                <h3 className="text-lg font-black text-white mb-3">Choose Your Contribution Tier</h3>
                
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5 mb-4">
                  {donationTiers.map((t) => {
                    const isSelected = selectedTier === t.amount && !customAmount;
                    return (
                      <button
                        key={t.amount}
                        type="button"
                        onClick={() => {
                          setSelectedTier(t.amount);
                          setCustomAmount("");
                        }}
                        className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? "bg-amber-400 text-slate-950 font-black border-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] scale-105"
                            : "bg-slate-950/40 border-white/10 text-white hover:bg-slate-800/60 font-bold"
                        }`}
                      >
                        <span className="text-sm sm:text-base block font-mono">{t.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Enter Custom Amount (INR)"
                    className="w-full pl-8 pr-4 py-3.5 rounded-2xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 font-bold text-sm focus:outline-none focus:border-amber-400 transition-all"
                  />
                </div>
              </div>

              {/* Real-time Dynamic Impact Calculator */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-emerald-900/50 to-slate-900 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-300">Tangible Impact Enabled</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {activeImpactText}
                </p>
              </div>

              {/* Instant 80G Tax Exemption Guarantee Banner */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-black text-amber-300 uppercase tracking-wider">Instant Section 80G Tax Exemption</p>
                  <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-normal">
                    Donations are eligible for 50% tax deduction under Section 80G of Income Tax Act. Receipts are emailed within 12 hours.
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* RIGHT COLUMN: OFFICIAL PAYMENT & BANK DETAILS EXPLORER (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[32px] border border-white/15 bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              {/* Donor Region Tabs */}
              <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-950/80 border border-white/10">
                <button
                  type="button"
                  onClick={() => setDonorTab("india")}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    donorTab === "india"
                      ? "bg-emerald-500 text-slate-950 shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-4 h-4" /> India (INR)
                </button>
                <button
                  type="button"
                  onClick={() => setDonorTab("abroad")}
                  className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    donorTab === "abroad"
                      ? "bg-emerald-500 text-slate-950 shadow-lg"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Globe2 className="w-4 h-4" /> Abroad (FCRA)
                </button>
              </div>

              {loading ? (
                <div className="p-12 flex flex-col items-center justify-center gap-3 text-slate-400 text-xs">
                  <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
                  <span>Fetching verified payment gateway &amp; bank details...</span>
                </div>
              ) : donorTab === "india" ? (
                <>
                  {/* UPI QR Code Scanner Box */}
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 flex flex-col items-center text-center space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                      SCAN &amp; PAY VIA ANY UPI APP
                    </span>

                    {qrUrl ? (
                      <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-400/20 blur-xl rounded-2xl scale-105" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={qrUrl}
                          alt="EFFORT NGO Official UPI QR Code"
                          className="relative w-52 h-52 object-contain rounded-2xl border-2 border-white/80 shadow-2xl bg-white p-2"
                        />
                      </div>
                    ) : (
                      <div className="w-52 h-52 rounded-2xl border-2 border-dashed border-white/20 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400 px-4 text-center">
                        QR code updated via admin panel — use UPI ID or Bank Transfer below
                      </div>
                    )}

                    <p className="text-xs text-slate-300 font-medium">
                      Accepts Google Pay, PhonePe, Paytm, BHIM, and all Indian Bank UPI Apps.
                    </p>

                    {settings.upiId && (
                      <div className="w-full pt-1">
                        <CopyBox label="Official UPI ID" value={settings.upiId} />
                      </div>
                    )}
                  </div>

                  {/* Domestic Bank Account Details Card */}
                  <BankDetailsCard
                    title="Official Domestic Bank Transfer"
                    account={settings.domesticBank}
                    badgeText="NEFT / RTGS / IMPS"
                  />
                </>
              ) : (
                <>
                  {/* FCRA International Bank Account Details Card */}
                  <BankDetailsCard
                    title="Foreign FCRA Bank Transfer"
                    account={settings.fcraBank}
                    badgeText="FCRA Reg. Approved"
                  />

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-xs">
                    <p className="font-bold text-emerald-300">International Donors Notice:</p>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      Foreign contributions are strictly processed through EFFORT NGO&apos;s FCRA Account under Ministry of Home Affairs guidelines. SWIFT transfer receipt will be issued.
                    </p>
                  </div>
                </>
              )}

              {/* Step 3: Receipt Request Action Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-slate-900 border border-amber-400/30 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-300">How To Receive 80G Receipt</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  After transferring funds, please email your transaction UTR reference + PAN number to <strong className="text-white">effortap@gmail.com</strong> or call <strong className="text-white">+91 99599 00081</strong>. Your official 80G Tax Exemption Certificate will be sent to your inbox.
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <a
                    href="mailto:effortap@gmail.com?subject=80G%20Tax%20Receipt%20Request%20-%20EFFORT%20NGO"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
                  >
                    Email Transaction Details <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ========================================================================= */}
      {/* CORPORATE CSR PARTNERSHIPS & FORM CSR-1 SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3.5 py-1.5 rounded-full inline-block">
                CORPORATE SOCIAL RESPONSIBILITY (CSR)
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Corporate CSR Partnerships &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">Form CSR-1 Approval</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                EFFORT NGO is an approved MCA Form CSR-1 entity (Registration No: <strong className="text-amber-400">CSR00034988</strong>), empaneled with NITI Aayog DARPAN and TISS National CSR Hub. We co-create multi-year, auditable Schedule VII CSR charters aligned with UN Sustainable Development Goals (SDGs).
              </p>
              
              <div className="pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs font-black text-white">MCA Form CSR-1</p>
                  <p className="text-[10px] text-amber-300 mt-0.5">Reg CSR00034988</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs font-black text-white">NITI Aayog DARPAN</p>
                  <p className="text-[10px] text-emerald-300 mt-0.5">Empaneled NGO ID</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-xs font-black text-white">TISS National Hub</p>
                  <p className="text-[10px] text-cyan-300 mt-0.5">Audited Governance</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-4">
              <div className="p-6 rounded-3xl bg-slate-900 border border-white/15 space-y-4 max-w-md w-full shadow-2xl">
                <h4 className="text-base font-black text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-amber-400" /> CSR Executive Liaison Desk
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  To co-design corporate CSR projects, request statutory compliance dossiers, or schedule field site inspections, contact our CSR Alliances Desk.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
                  >
                    Connect With CSR Desk <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED DONOR QUESTIONS (FAQS) */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
            TRANSPARENCY &amp; GUIDANCE
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Frequently Asked Donor Questions
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
