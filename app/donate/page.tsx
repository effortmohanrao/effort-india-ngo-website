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
  GraduationCap,
  Download,
  MapPin,
  Lock,
  Compass,
  FileCheck,
  Upload,
  ArrowDown,
  CreditCard,
  CheckSquare
} from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

{/* --- Official Google Pay Emblem --- */}
function GPayLogo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-md shrink-0 p-1">
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
      </svg>
    </div>
  );
}

{/* --- Official PhonePe Emblem --- */}
function PhonePeLogo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-[#5f259f] text-white flex items-center justify-center font-black text-xs border-2 border-purple-300 shadow-md shrink-0">
      <span className="text-white font-black tracking-tighter text-sm italic font-sans">Pe</span>
    </div>
  );
}

{/* --- Official Paytm Emblem --- */}
function PaytmLogo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-[#002e6e] text-white flex items-center justify-center font-black border-2 border-sky-300 shadow-md shrink-0 p-0.5">
      <span className="text-[#00baf2] font-mono font-black text-[9px] tracking-tight uppercase">Paytm</span>
    </div>
  );
}

{/* --- Official Union Bank Emblem --- */}
function UnionBankLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-[#003366] text-white flex flex-col items-center justify-center border-2 border-amber-400 shadow-md shrink-0 p-0.5 ${className}`}>
      <span className="text-[10px] font-black tracking-tight leading-none text-amber-300 font-mono">UBI</span>
      <span className="text-[7px] font-extrabold text-white tracking-widest leading-none mt-0.5">BANK</span>
    </div>
  );
}

{/* --- Official SBI Emblem --- */}
function SBIBankLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`rounded-xl bg-[#280071] text-white flex items-center justify-center border-2 border-sky-400 shadow-md shrink-0 ${className}`}>
      <div className="w-5 h-5 rounded-full bg-[#00a3e0] flex items-center justify-center relative shadow-inner">
        <div className="w-1.5 h-2.5 bg-[#280071] rounded-t-full absolute bottom-0" />
      </div>
    </div>
  );
}

{/* --- Official Razorpay / Stripe Emblem --- */}
function CardGatewayLogo() {
  return (
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white flex items-center justify-center border-2 border-indigo-400 shadow-md shrink-0">
      <CreditCard className="w-5 h-5 text-sky-400" />
    </div>
  );
}

{/* --- One-Click Copy Box --- */}
function CopyBox({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  return (
    <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-500/50 transition-all group">
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</p>
        <p className={`text-xs sm:text-sm text-slate-900 truncate mt-0.5 ${mono ? "font-mono font-bold" : "font-bold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        }}
        className="shrink-0 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-white" />
            <span>Copied</span>
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

export default function DonatePage() {
  const [settings, setSettings] = useState<DonationSettings>(defaultDonationSettings);
  const [selectedMethod, setSelectedMethod] = useState<"gpay" | "phonepe" | "paytm" | "union" | "sbi" | "card">("gpay");

  // Amount Selector States
  const [selectedTier, setSelectedTier] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  // Donor Form States
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorCountry, setDonorCountry] = useState("India");
  const [donorOrg, setDonorOrg] = useState("");
  const [donorPurpose, setDonorPurpose] = useState("General Sustainable Agriculture & Community Fund");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Receipt Acknowledgement Form States
  const [ackName, setAckName] = useState("");
  const [ackEmail, setAckEmail] = useState("");
  const [ackDate, setAckDate] = useState("");
  const [ackAmount, setAckAmount] = useState("");
  const [ackRef, setAckRef] = useState("");
  const [ackMethod, setAckMethod] = useState("Google Pay");
  const [ackSubmitted, setAckSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/site/donation-settings", { cache: "no-store" })
      .then((r) => r.json())
      .then((settingsData) => {
        if (settingsData && settingsData.domesticBank) setSettings(settingsData);
      })
      .catch(() => defaultDonationSettings);
  }, []);

  const handleDownloadDetails = (account: BankAccount, typeName: string) => {
    const text = `=====================================================
EFFORT NGO — OFFICIAL BANK CONTRIBUTION DETAILS
=====================================================
Category: ${typeName}
Bank Name: ${account.bankName}
Beneficiary Name: ${account.accountName}
Account Number: ${account.accountNumber}
IFSC Code: ${account.ifsc}
Branch: ${account.branch}
${account.swiftCode ? `SWIFT / BIC Code: ${account.swiftCode}\n` : ""}
Tax Exemption: Eligible for 50% Tax Exemption under Section 80G
Official Email for Receipt: effortap@gmail.com
Phone Support: +91 99599 00081
Website: https://www.effortindia.org
=====================================================`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `EFFORT_NGO_${typeName.replace(/\s+/g, "_")}_Bank_Details.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedTier;
  const targetUpiId = settings.upiId || "effortap@gmail.com";

  // Deep-link UPI URL for instant mobile app launches
  const getUpiUrl = (appName: string) => {
    const note = encodeURIComponent(`Donation to EFFORT NGO - ${donorPurpose}`);
    const name = encodeURIComponent("EFFORT NGO");
    return `upi://pay?pa=${targetUpiId}&pn=${name}&am=${currentAmount}&cu=INR&tn=${note}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#F5EBE0] text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — CINEMATIC EXECUTIVE DOCUMENTARY HEADER */}
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
            <a
              href="#payment-method-selector"
              className="px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(251,191,36,0.35)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-slate-950" /> DONATE NOW <ArrowDown className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          <p className="text-xs text-[#F7E4A3] font-bold tracking-wide pt-1 italic">
            "Every contribution supports EFFORT's mission of inclusive and sustainable development."
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
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><Award className="w-4 h-4 text-amber-700" /><span>DONATION ACKNOWLEDGEMENT</span></div>
            <div className="flex items-center gap-2 mx-auto sm:mx-0"><Lock className="w-4 h-4 text-amber-700" /><span>SECURE CONTRIBUTION</span></div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DONATION ACKNOWLEDGEMENT FORM (PROMINENTLY PLACED AT TOP!) */}
      {/* ========================================================================= */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-[32px] bg-slate-900 text-white space-y-6 shadow-2xl border-2 border-amber-400/60">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/15">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-300 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/40">
                OFFICIAL 80G RECEIPT REQUEST
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">DONATION ACKNOWLEDGEMENT</h2>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Already transferred? Submit your reference number below to receive your official 80G tax-exemption receipt within 12 hours.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-400 text-emerald-300 text-xs font-black uppercase tracking-wider shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Receipt
            </span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setAckSubmitted(true);
            }}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-3 gap-3.5">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Donor Name *</label>
                <input
                  type="text"
                  required
                  value={ackName}
                  onChange={(e) => setAckName(e.target.value)}
                  placeholder="Name on PAN / Receipt"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={ackEmail}
                  onChange={(e) => setAckEmail(e.target.value)}
                  placeholder="For 80G receipt delivery"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Donation Date *</label>
                <input
                  type="date"
                  required
                  value={ackDate}
                  onChange={(e) => setAckDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Amount Transferred *</label>
                <input
                  type="text"
                  required
                  value={ackAmount}
                  onChange={(e) => setAckAmount(e.target.value)}
                  placeholder="e.g. ₹5,000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Transaction / UTR Ref *</label>
                <input
                  type="text"
                  required
                  value={ackRef}
                  onChange={(e) => setAckRef(e.target.value)}
                  placeholder="12-digit UTR No"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white placeholder-slate-500 text-xs font-bold focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Payment Method / App *</label>
                <select
                  value={ackMethod}
                  onChange={(e) => setAckMethod(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-white text-xs font-bold focus:outline-none focus:border-amber-400"
                >
                  <option value="Google Pay">Google Pay</option>
                  <option value="PhonePe">PhonePe</option>
                  <option value="Paytm">Paytm</option>
                  <option value="Union Bank Domestic Transfer">Union Bank Domestic Transfer</option>
                  <option value="State Bank of India Foreign Wire (FCRA)">State Bank of India Foreign Wire (FCRA)</option>
                  <option value="Razorpay / Credit Card">Razorpay / Credit Card</option>
                </select>
              </div>
            </div>

            {ackSubmitted ? (
              <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
                <h4 className="text-xs font-black text-white">Acknowledgement Received!</h4>
                <p className="text-[11px] text-slate-300 font-medium">
                  Your official 80G tax receipt will be sent to {ackEmail} within 12 hours.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                SUBMIT ACKNOWLEDGEMENT FOR 80G RECEIPT <Upload className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DYNAMIC PAYMENT METHOD SELECTOR WITH OFFICIAL LOGOS */}
      {/* ========================================================================= */}
      <section id="payment-method-selector" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            OFFICIAL PAYMENT METHODS &amp; LOGOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            CHOOSE YOUR PAYMENT METHOD
          </h2>
          <p className="text-slate-700 text-sm font-medium">
            Select any payment method below to view details and launch the app.
          </p>
        </div>

        {/* Brand Method Selector Tabs with Official Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          {/* 1. Google Pay */}
          <button
            type="button"
            onClick={() => setSelectedMethod("gpay")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "gpay"
                ? "bg-white border-blue-500 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <GPayLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">Google Pay</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Instant UPI</span>
            </div>
          </button>

          {/* 2. PhonePe */}
          <button
            type="button"
            onClick={() => setSelectedMethod("phonepe")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "phonepe"
                ? "bg-white border-purple-500 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <PhonePeLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">PhonePe</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Instant UPI</span>
            </div>
          </button>

          {/* 3. Paytm */}
          <button
            type="button"
            onClick={() => setSelectedMethod("paytm")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "paytm"
                ? "bg-white border-sky-500 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <PaytmLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">Paytm</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Instant UPI</span>
            </div>
          </button>

          {/* 4. Union Bank Domestic */}
          <button
            type="button"
            onClick={() => setSelectedMethod("union")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "union"
                ? "bg-white border-amber-500 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <UnionBankLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">Union Bank</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Domestic (INR)</span>
            </div>
          </button>

          {/* 5. State Bank of India Foreign FCRA */}
          <button
            type="button"
            onClick={() => setSelectedMethod("sbi")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "sbi"
                ? "bg-white border-sky-600 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <SBIBankLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">State Bank (SBI)</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Foreign FCRA</span>
            </div>
          </button>

          {/* 6. Cards & Gateways (Razorpay / Stripe) */}
          <button
            type="button"
            onClick={() => setSelectedMethod("card")}
            className={`p-4 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition-all cursor-pointer ${
              selectedMethod === "card"
                ? "bg-white border-indigo-500 shadow-xl scale-[1.03]"
                : "bg-white/80 border-slate-200 hover:border-slate-400"
            }`}
          >
            <CardGatewayLogo />
            <div>
              <span className="block text-xs font-black text-slate-900">Cards &amp; Gateways</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase">Razorpay / Stripe</span>
            </div>
          </button>

        </div>

        {/* Dynamic Detail Card Displayed ONLY for the Selected Payment Method */}
        <div className="rounded-[32px] bg-white border-2 border-amber-300 p-6 sm:p-8 space-y-6 shadow-xl animate-fade-in">
          
          {selectedMethod === "gpay" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <GPayLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">Google Pay (Instant UPI Transfer)</h3>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Official EFFORT NGO UPI Account</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tap below to launch Google Pay on your mobile device with pre-filled contribution details.
              </p>
              <CopyBox label="Official UPI ID" value={targetUpiId} />
              <a
                href={getUpiUrl("GooglePay")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all text-center"
              >
                <Smartphone className="w-4 h-4 text-emerald-200" /> LAUNCH GOOGLE PAY APP NOW
              </a>
            </div>
          )}

          {selectedMethod === "phonepe" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <PhonePeLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">PhonePe (Instant UPI Transfer)</h3>
                  <p className="text-xs font-bold text-purple-700 uppercase tracking-wider">Official EFFORT NGO PhonePe UPI</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tap below to launch PhonePe on your mobile device with pre-filled contribution details.
              </p>
              <CopyBox label="Official UPI ID" value={targetUpiId} />
              <a
                href={getUpiUrl("PhonePe")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all text-center"
              >
                <Smartphone className="w-4 h-4 text-purple-200" /> LAUNCH PHONEPE APP NOW
              </a>
            </div>
          )}

          {selectedMethod === "paytm" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <PaytmLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">Paytm (Instant UPI &amp; Wallet)</h3>
                  <p className="text-xs font-bold text-sky-700 uppercase tracking-wider">Official EFFORT NGO Paytm UPI</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Tap below to launch Paytm on your mobile device with pre-filled contribution details.
              </p>
              <CopyBox label="Official UPI ID" value={targetUpiId} />
              <a
                href={getUpiUrl("Paytm")}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all text-center"
              >
                <Smartphone className="w-4 h-4 text-sky-200" /> LAUNCH PAYTM APP NOW
              </a>
            </div>
          )}

          {selectedMethod === "union" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
                <UnionBankLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">Union Bank of India (Domestic Transfer)</h3>
                  <p className="text-xs font-bold text-amber-900 uppercase tracking-wider">Martur Branch &bull; 80G Tax Exempt</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <CopyBox label="Account Beneficiary" value={settings.domesticBank.accountName} mono={false} />
                <CopyBox label="Bank Name" value={settings.domesticBank.bankName} mono={false} />
                <CopyBox label="Account Number" value={settings.domesticBank.accountNumber} />
                <CopyBox label="IFSC Code" value={settings.domesticBank.ifsc} />
                <CopyBox label="Branch" value={settings.domesticBank.branch} mono={false} />
                <CopyBox label="Currency" value="INR (Indian Rupee)" mono={false} />
              </div>
              <button
                type="button"
                onClick={() => handleDownloadDetails(settings.domesticBank, "Union Bank Domestic")}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-amber-400" /> DOWNLOAD UNION BANK DETAILS (.TXT)
              </button>
            </div>
          )}

          {selectedMethod === "sbi" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-sky-100">
                <SBIBankLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">State Bank of India (SBI Foreign FCRA Wire)</h3>
                  <p className="text-xs font-bold text-sky-900 uppercase tracking-wider">New Delhi Main Branch &bull; MHA FCRA Approved</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <CopyBox label="Account Beneficiary" value={settings.fcraBank.accountName} mono={false} />
                <CopyBox label="Bank Name" value={settings.fcraBank.bankName} mono={false} />
                <CopyBox label="Account Number" value={settings.fcraBank.accountNumber} />
                <CopyBox label="IFSC Code" value={settings.fcraBank.ifsc} />
                <CopyBox label="SWIFT Code" value={settings.fcraBank.swiftCode || "SBININBB104"} />
                <CopyBox label="Branch" value={settings.fcraBank.branch} mono={false} />
              </div>
              <button
                type="button"
                onClick={() => handleDownloadDetails(settings.fcraBank, "SBI FCRA Foreign")}
                className="w-full py-3 rounded-xl bg-slate-900 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4 text-sky-400" /> DOWNLOAD SBI FCRA WIRE DETAILS (.TXT)
              </button>
            </div>
          )}

          {selectedMethod === "card" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
                <CardGatewayLogo />
                <div>
                  <h3 className="text-lg font-black text-slate-900">Credit / Debit Cards &amp; Gateways</h3>
                  <p className="text-xs font-bold text-indigo-900 uppercase tracking-wider">Razorpay (India) &bull; Stripe (International)</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                For online credit card, debit card, or international wire payments, fill in your details below and choose Razorpay or Stripe.
              </p>
              <a
                href="#donor-registration-form"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-700 to-slate-900 hover:from-indigo-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all text-center"
              >
                PROCEED TO CARD DONATION FORM <ArrowDown className="w-4 h-4 text-sky-300" />
              </a>
            </div>
          )}

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 5. ONLINE DONOR REGISTRATION FORM */}
      {/* ========================================================================= */}
      <section id="donor-registration-form" className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">MAKE A CONTRIBUTION</h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Submit your donor details to record your contribution intent.</p>
        </div>

        <div className="rounded-[32px] bg-white border-2 border-amber-300/80 p-6 sm:p-10 space-y-6 shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setFormSubmitted(true);
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="+91 99999 99999"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Country *</label>
                <input
                  type="text"
                  required
                  value={donorCountry}
                  onChange={(e) => setDonorCountry(e.target.value)}
                  placeholder="India"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Selected Payment Gateway / App *</label>
                <select
                  value={selectedMethod}
                  onChange={(e) => setSelectedMethod(e.target.value as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-amber-500"
                >
                  <option value="gpay">Google Pay (Instant UPI)</option>
                  <option value="phonepe">PhonePe (Instant UPI)</option>
                  <option value="paytm">Paytm (Instant UPI)</option>
                  <option value="union">Union Bank of India (Domestic NEFT/RTGS)</option>
                  <option value="sbi">State Bank of India (SBI FCRA Foreign Wire)</option>
                  <option value="card">Razorpay / Stripe Credit Cards</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase text-slate-500 block mb-1">Organisation / Institution (Optional)</label>
                <input
                  type="text"
                  value={donorOrg}
                  onChange={(e) => setDonorOrg(e.target.value)}
                  placeholder="Company or Foundation Name"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-bold focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2 text-emerald-900">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-black">Contribution Intent Recorded!</h4>
                <p className="text-xs font-medium">
                  Thank you, {donorName}! Please complete your transfer using your selected app or bank details above.
                </p>
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white font-black text-sm uppercase tracking-wider shadow-lg hover:bg-amber-800 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                RECORD CONTRIBUTION INTENT (₹{currentAmount.toLocaleString("en-IN")}) <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </form>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRANSPARENCY SECTION — WHERE YOUR SUPPORT GOES */}
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
      {/* 7. ACCOUNTABILITY SECTION — YOUR TRUST MATTERS */}
      {/* ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900">YOUR TRUST MATTERS</h2>
          <p className="text-slate-600 text-sm font-medium">Built on 27 years of statutory compliance, independent audits, and NITI Aayog DARPAN empanlement.</p>
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
      {/* 8. CONTACT & SUPPORT */}
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
      {/* 9. FOOTER TRUST AREA */}
      {/* ========================================================================= */}
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 text-center space-y-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-xl font-black text-white tracking-wider">EFFORT</h3>
          <p className="text-xs text-amber-400 font-bold uppercase tracking-widest">
            Empowering Communities &bull; Strengthening Livelihoods &bull; Building Resilience
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-semibold pt-4 border-t border-slate-900">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Donation Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Refund / Cancellation Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-[11px] text-slate-500 font-medium">
            © {new Date().getFullYear()} EFFORT INDIA NGO. All Rights Reserved. Section 80G &amp; FCRA Registered.
          </p>
        </div>
      </footer>

    </div>
  );
}
