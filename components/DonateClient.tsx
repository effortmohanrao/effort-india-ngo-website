"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Sparkles,
  Zap,
} from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";
import Reveal from "@/components/home/Reveal";

// Possible Collaboration — real EFFORT collaboration packages, as published to funding partners.
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
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Registered NGO" },
  { icon: FileCheck, label: "Transparent Fund Utilisation" },
  { icon: Landmark, label: "Bank-Verified Details" },
  { icon: Award, label: "80G Tax Exempt" },
  { icon: Lock, label: "Secure Contribution" },
];

const supportAreas = [
  { title: "COMMUNITY DEVELOPMENT", desc: "Empowering rural women through Self-Help Groups (SHGs) and local water-user collectives.", icon: Users },
  { title: "SUSTAINABLE AGRICULTURE", desc: "Promoting climate-resilient organic farming, Direct Seeded Rice (DSR), and indigenous seed preservation.", icon: Sprout },
  { title: "LIVELIHOODS & YOUTH", desc: "Equipping rural youth with digital, vocational, and agricultural enterprise skills for income security.", icon: GraduationCap },
  { title: "RESILIENT COMMUNITIES", desc: "Building rainwater check-dams, watershed conservation, and drought mitigation infrastructure.", icon: Droplets },
];

const trustPromises = [
  "Transparent Documentation",
  "Responsible Fund Management",
  "Institutional Partnerships",
  "Impact Reporting",
  "Official Acknowledgement",
];

const goldBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)] hover:-translate-y-0.5 transition-transform";
const greenBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold shadow-[0_12px_26px_-12px_rgba(6,38,25,0.8)] hover:-translate-y-0.5 transition-transform";
const goldText = "bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent";

function BankMark({ url, name, tone }: { url: string | null; name: string; tone: "gold" | "sky" }) {
  return (
    <span
      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white p-2 shrink-0 flex items-center justify-center overflow-hidden ring-2 ${
        tone === "gold" ? "ring-amber-300 shadow-[0_0_30px_rgba(247,215,116,0.35)]" : "ring-sky-300 shadow-[0_0_30px_rgba(125,211,252,0.3)]"
      }`}
    >
      {url ? (
        <Image src={url} alt={name} fill sizes="96px" className="object-contain p-2" />
      ) : (
        <span className="text-center text-[11px] font-black leading-tight text-[#062619]">{name}</span>
      )}
    </span>
  );
}

function CopyRow({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // clipboard blocked (older browsers / insecure context): select-based fallback
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nothing more we can do */
      }
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-[#fbf8f0] border border-[#ece0c0] hover:border-amber-400 transition-colors px-4 py-3">
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#7a5a12]">{label}</p>
        <p className={`mt-0.5 text-[15px] text-[#14120c] break-words ${mono ? "font-mono font-bold tracking-wide" : "font-bold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-extrabold cursor-pointer transition-colors ${
          copied ? "bg-[#0b5d3f] text-white" : "bg-[#062619] text-amber-200 hover:bg-[#0b3d2a]"
        }`}
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

function BankDetail({ account, fcra }: { account: BankAccount; fcra: boolean }) {
  return (
    <div className="space-y-2.5">
      <CopyRow label="Bank Name" value={account.bankName} mono={false} />
      <CopyRow label="Account Beneficiary" value={account.accountName} mono={false} />
      <CopyRow label="Account Number" value={account.accountNumber} />
      <CopyRow label="IFSC Code" value={account.ifsc} />
      <CopyRow label="Branch" value={account.branch} mono={false} />
      {fcra && account.swiftCode && <CopyRow label="SWIFT / BIC Code" value={account.swiftCode} />}
    </div>
  );
}

function IndiaFlagIcon() {
  return (
    <svg viewBox="0 0 30 20" className="w-5 h-3.5 rounded-[2px] shrink-0 ring-1 ring-black/10" aria-hidden="true">
      <rect width="30" height="20" fill="#fff" />
      <rect width="30" height="6.67" fill="#FF9933" />
      <rect y="13.33" width="30" height="6.67" fill="#138808" />
      <circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" strokeWidth="0.35" />
      <circle cx="15" cy="10" r="0.4" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="15"
          y1="10"
          x2={(15 + 2.6 * Math.cos((i * Math.PI) / 12)).toFixed(3)}
          y2={(10 + 2.6 * Math.sin((i * Math.PI) / 12)).toFixed(3)}
          stroke="#000080"
          strokeWidth="0.15"
        />
      ))}
    </svg>
  );
}

export default function DonateClient({
  settings: settingsProp,
  qrUrl = null,
  unionLogo = null,
  sbiLogo = null,
  photo = null,
}: {
  settings?: DonationSettings | null;
  qrUrl?: string | null;
  unionLogo?: string | null;
  sbiLogo?: string | null;
  photo?: string | null;
}) {
  const [giveTab, setGiveTab] = useState<"india" | "abroad">("india");
  const settings = settingsProp && settingsProp.domesticBank ? settingsProp : defaultDonationSettings;
  const india = giveTab === "india";

  return (
    <div className="bg-[#fbf8f0] text-[#14120c] min-h-screen pt-12 relative overflow-x-clip selection:bg-amber-300 selection:text-[#062619]">
      {/* ================= HERO ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white -mt-12">
        {photo && (
          <div aria-hidden className="absolute inset-0 -z-20">
            <Image src={photo} alt="" fill preload sizes="100vw" className="object-cover opacity-25 lux-kenburns" />
          </div>
        )}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_30%,rgba(11,93,63,0.55),#03140d_70%)]" />
        {/* slowly turning gold rings */}
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-[42%] -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="lux-spin w-[640px] h-[640px] sm:w-[900px] sm:h-[900px] rounded-full border border-amber-300/15 border-dashed" style={{ animationDuration: "90s" }} />
          <div className="absolute inset-[70px] sm:inset-[110px] rounded-full border border-amber-300/20" />
          <div className="absolute inset-[150px] sm:inset-[230px] rounded-full border border-amber-300/10" />
        </div>
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-36 sm:pt-36 sm:pb-44 text-center">
          <p className="lux-rise inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200" style={{ animationDelay: "80ms" }}>
            <Lock className="w-3.5 h-3.5 shrink-0" /> Secure &bull; Transparent &bull; Accountable
          </p>
          <h1 className="lux-rise mt-7 text-[2.6rem] min-[400px]:text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1] uppercase" style={{ animationDelay: "160ms" }}>
            Support the
            <span className="block mt-1">
              <span className="lux-gold-text">Journey</span>
            </span>
          </h1>
          <p className="lux-rise mt-7 max-w-2xl mx-auto text-lg sm:text-2xl text-emerald-50/85 leading-relaxed" style={{ animationDelay: "260ms" }}>
            Your contribution helps build resilient communities, sustainable livelihoods and a stronger future.
          </p>
          <div className="lux-rise mt-9 flex flex-col min-[420px]:flex-row items-center justify-center gap-3" style={{ animationDelay: "340ms" }}>
            <a href="#give" className={`${goldBtn} px-9 py-4 text-sm uppercase tracking-wider`}>
              <Heart className="w-4 h-4 fill-[#062619]" /> Donate Now <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#collaboration" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/50 text-amber-100 font-extrabold px-8 py-4 text-sm uppercase tracking-wider hover:bg-amber-300/10 transition-colors">
              Partner With Us
            </a>
          </div>
          <p className="lux-rise mt-8 text-sm italic text-amber-200/80" style={{ animationDelay: "420ms" }}>
            &quot;Every contribution supports EFFORT&apos;s mission of inclusive and sustainable development.&quot;
          </p>
        </div>
      </section>

      {/* ================= GIVE (overlaps the hero) ================= */}
      <section id="give" className="relative z-10 scroll-mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#062619] text-amber-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] shadow-[0_14px_30px_-14px_rgba(6,38,25,0.9)]">
            Official Donation Details
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold tracking-tight text-white sm:text-white uppercase [text-wrap:balance] drop-shadow-[0_2px_10px_rgba(3,20,13,0.7)]">
            Where are you giving from?
          </h2>
        </div>

        <div role="tablist" aria-label="Donation region" className="mt-6 mx-auto grid grid-cols-2 max-w-md gap-1.5 p-1.5 rounded-full bg-[#062619] shadow-[0_20px_45px_-20px_rgba(6,38,25,0.9)]">
          {([
            { id: "india", label: "India (INR)", icon: <IndiaFlagIcon /> },
            { id: "abroad", label: "Abroad (FCRA)", icon: <span aria-hidden>🌍</span> },
          ] as const).map((t) => {
            const on = giveTab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => setGiveTab(t.id)}
                className={`flex items-center justify-center gap-2 rounded-full px-3 py-3 text-xs sm:text-sm font-extrabold uppercase tracking-wider cursor-pointer transition-colors ${
                  on ? "bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619]" : "text-amber-100/80 hover:text-white"
                }`}
              >
                {t.icon} {t.label}
              </button>
            );
          })}
        </div>

        {/* The transfer "ticket": dark identity panel + copyable details */}
        <div key={giveTab} className="lux-rise mt-6 grid lg:grid-cols-12 rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#e3cf94] bg-white shadow-[0_50px_100px_-50px_rgba(6,38,25,0.7)]" style={{ animationDuration: "0.6s" }}>
          <div className="relative isolate overflow-hidden lg:col-span-5 bg-gradient-to-br from-[#0b3d2a] to-[#03140d] text-white p-6 sm:p-9 flex flex-col">
            <span aria-hidden className="absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:18px_18px]" />
            <span aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full -z-10 bg-[radial-gradient(circle,rgba(212,160,23,0.25),transparent_65%)]" />
            <BankMark
              url={india ? unionLogo : sbiLogo}
              name={india ? settings.domesticBank.bankName : settings.fcraBank.bankName}
              tone={india ? "gold" : "sky"}
            />
            <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold leading-tight">
              {india ? settings.domesticBank.bankName : settings.fcraBank.bankName}
            </h3>
            <p className="mt-2 text-xs font-extrabold uppercase tracking-wider text-amber-300 leading-relaxed">
              {india ? <>Official Domestic Transfer Partner &bull; Sec 80G Tax Exempt</> : <>New Delhi Main Branch &bull; Designated MHA FCRA Approved</>}
            </p>

            {!india && (
              <div className="mt-6 flex gap-3 rounded-2xl bg-white/[0.07] border border-white/15 p-4">
                <ShieldCheck className="w-5 h-5 shrink-0 text-amber-300 mt-0.5" />
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-200">MHA FCRA Government Statutory Requirement</p>
                  <p className="mt-1 text-sm text-emerald-50/80 leading-relaxed">
                    Under Ministry of Home Affairs (MHA) regulations, all international &amp; NRI foreign contributions must be routed through this designated State Bank of India (SBI) New Delhi Main Branch account.
                  </p>
                </div>
              </div>
            )}

            {india && (qrUrl || settings.upiId) && (
              <div className="mt-6 rounded-2xl bg-white/[0.07] border border-white/15 p-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
                {qrUrl && (
                  <span className="relative w-36 h-36 shrink-0 rounded-xl bg-white p-1.5 overflow-hidden">
                    <Image src={qrUrl} alt="UPI QR code to donate to EFFORT NGO" fill sizes="144px" className="object-contain p-1.5" />
                  </span>
                )}
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-300/15 border border-amber-300/30 px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-200">
                    <Smartphone className="w-3 h-3" /> Instant UPI Payment
                  </span>
                  <p className="mt-2 font-extrabold">Scan the QR or use NEFT/RTGS Transfer</p>
                  <p className="mt-1 text-sm text-emerald-50/75 leading-relaxed">
                    All domestic donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-auto pt-7 flex gap-3">
              <Mail className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
              <div>
                <p className="font-extrabold text-amber-100">Need your 80G Tax Exemption Receipt?</p>
                <p className="mt-0.5 text-sm text-emerald-50/75 leading-relaxed">
                  Email your transaction reference / screenshot to{" "}
                  <a href={`mailto:${settings.receiptEmail}`} className="block mt-0.5 font-bold text-amber-300 underline underline-offset-2 break-words">
                    {settings.receiptEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-5 sm:p-9 space-y-3">
            {india && settings.upiId && <CopyRow label="Official UPI ID" value={settings.upiId} />}
            <BankDetail account={india ? settings.domesticBank : settings.fcraBank} fcra={!india} />
          </div>
        </div>

        <div className="mt-5 rounded-3xl bg-[#f8f1df] border border-[#e3cf94] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-[#0b5d3f] shrink-0" />
            <div>
              <p className="font-extrabold">Giving as an organisation, corporate or funding agency?</p>
              <p className="mt-0.5 text-sm text-[#5a5240]">See our structured collaboration packages below — from land conservation to school infrastructure.</p>
            </div>
          </div>
          <a href="#collaboration" className={`${greenBtn} px-6 py-3 text-sm whitespace-nowrap`}>
            View Collaboration Options <ArrowRight className="w-4 h-4 text-amber-300" />
          </a>
        </div>
      </section>

      {/* ================= TRUST TICKER ================= */}
      <section aria-label="Trust highlights" className="mt-14 sm:mt-20 border-y border-[#e3cf94] bg-[#f8f1df] overflow-hidden">
        <div className="lux-marquee flex w-max">
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1} className="flex shrink-0 items-center">
              {[...trustItems, ...trustItems].map((t, i) => (
                <li key={i} className="flex items-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[#3d3420] whitespace-nowrap">
                  <t.icon className="w-4 h-4 text-[#a1781e]" /> {t.label}
                  <span aria-hidden className="ml-7 w-1.5 h-1.5 rounded-full bg-[#d4a017]" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ================= COLLABORATION LEDGER ================= */}
      <section id="collaboration" data-keep-motion className="relative isolate scroll-mt-20 overflow-hidden bg-[#03140d] text-white py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(247,215,116,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,215,116,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[50vw] aspect-square -z-10 rounded-full lux-drift-b bg-[radial-gradient(circle,rgba(16,185,129,0.16),transparent_65%)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              <Sparkles className="w-3.5 h-3.5" /> Possible Collaboration
            </p>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
              Structured Ways to <span className="lux-gold-text">Partner With Us</span>
            </h2>
            <p className="mt-4 text-emerald-50/75 leading-relaxed sm:text-lg">
              EFFORT invites Individuals, Organisations, Funding Agencies and Corporate Companies to co-create sustainable impact. Every package is community co-funded and Section 80G / FCRA compliant.
            </p>
          </Reveal>

          <ol className="mt-10 sm:mt-14 divide-y divide-white/10 border-y border-white/10">
            {collaborationOptions.map((pkg, i) => (
              <Reveal as="li" key={pkg.id} delay={(i % 3) * 60} className="group py-7 sm:py-9 grid lg:grid-cols-12 gap-x-8 gap-y-5 items-start">
                <div className="lg:col-span-1 flex items-center lg:block gap-4">
                  <span className="text-4xl sm:text-5xl font-extrabold tabular-nums lux-outline-num">0{i + 1}</span>
                  <span className="lg:mt-3 w-11 h-11 rounded-2xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center group-hover:bg-amber-300/20 transition-colors">
                    <pkg.icon className="w-5 h-5 text-amber-300" />
                  </span>
                </div>

                <div className="lg:col-span-6 min-w-0">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">{pkg.badge}</p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-extrabold leading-snug">{pkg.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-emerald-50/75 leading-relaxed">{pkg.desc}</p>
                  <p className="mt-3 text-xs sm:text-sm font-semibold text-amber-100/70 leading-relaxed">{pkg.subText}</p>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-2xl sm:text-3xl font-extrabold lux-gold-text leading-tight">{pkg.budget}</p>
                  <dl className="mt-2 flex lg:block gap-x-6 gap-y-1 flex-wrap text-xs font-bold uppercase tracking-wider text-emerald-50/60">
                    <dt className="sr-only">Reach</dt>
                    <dd>{pkg.impactMetric}</dd>
                    <dt className="sr-only">Duration</dt>
                    <dd>{pkg.duration}</dd>
                  </dl>
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <a
                    href={`mailto:contact@effortindia.org?subject=Collaboration%20Enquiry%20-%20${encodeURIComponent(pkg.title)}`}
                    className={`${goldBtn} w-full lg:w-auto px-5 py-3 text-sm`}
                  >
                    Sponsor This Package <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 text-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-100">
              <li className="inline-flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-300" /> Societies Act 1860 (Reg. 340/1999)</li>
              <li className="inline-flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-amber-300" /> MHA FCRA Approved</li>
              <li className="inline-flex items-center gap-1.5"><Award className="w-4 h-4 text-amber-300" /> 80G Tax Exempt</li>
            </ul>
            <p className="mt-3 text-sm text-emerald-50/65">
              EFFORT provides statutory audit reports and utilization certificates for all institutional partner contributions.
            </p>
          </div>

          <div className="mt-8 text-center">
            <a href="mailto:contact@effortindia.org?subject=Custom%20Collaboration%20Proposal" className={`${goldBtn} px-8 py-4 text-sm uppercase tracking-wider`}>
              <Mail className="w-4 h-4" /> Request a Custom Proposal <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHERE YOUR SUPPORT GOES ================= */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#fbf8f0] via-[#f8eed4] to-[#fbf8f0] py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-40 lux-guilloche" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e3cf94] bg-white px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-[#7a5a12]">
              Auditable Field Impact
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight uppercase [text-wrap:balance]">
              Where your <span className={goldText}>support goes</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 sm:gap-6">
            {supportAreas.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 90} className="group relative overflow-hidden rounded-[28px] bg-white border border-[#efe2bd] p-6 sm:p-8 hover:border-amber-400 hover:shadow-[0_35px_70px_-40px_rgba(90,61,0,0.55)] transition-[border-color,box-shadow] duration-300">
                <span aria-hidden className="absolute -top-4 right-3 text-[7rem] leading-none font-extrabold text-[#f4ead0] select-none">0{i + 1}</span>
                <span className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0b3d2a] to-[#062619] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <a.icon className="w-7 h-7 text-amber-300" />
                </span>
                <h3 className="relative mt-5 text-lg font-extrabold tracking-wide">{a.title}</h3>
                <p className="relative mt-2 text-[15px] text-[#5a5240] leading-relaxed">{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= YOUR TRUST MATTERS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase">Your trust matters</h2>
          <p className="mt-3 text-[#5a5240] leading-relaxed">Built on 27 years of statutory compliance, independent audits, and transparent reporting.</p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {trustPromises.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 70} className={`rounded-2xl bg-white border border-[#efe2bd] p-4 sm:p-5 text-center min-w-0 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
              <span className="mx-auto w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] flex">
                <span className="w-full h-full rounded-full bg-[#062619] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-amber-300" />
                </span>
              </span>
              <p className="mt-3 text-sm font-extrabold leading-snug break-words hyphens-auto">{item}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 flex flex-col min-[420px]:flex-row items-center justify-center gap-3">
          <Link href="/impact" className={`${greenBtn} px-7 py-3.5 text-sm uppercase tracking-wider`}>
            View Our Reports
          </Link>
          <Link href="/impact" className={`${goldBtn} px-7 py-3.5 text-sm uppercase tracking-wider`}>
            View Our Impact
          </Link>
        </div>
      </section>

      {/* ================= NEED HELP ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white py-16 sm:py-24">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[80vw] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(212,160,23,0.18),transparent_65%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase [text-wrap:balance]">
              Need help with your <span className="lux-gold-text">contribution?</span>
            </h2>
            <p className="mt-4 text-emerald-50/75 sm:text-lg">Our finance &amp; donor relations team is here to assist you.</p>
          </Reveal>

          <ul className="mt-10 grid sm:grid-cols-3 gap-3 sm:gap-4 text-left">
            {[
              { icon: Mail, label: "Official Email", value: "contact@effortindia.org", href: "mailto:contact@effortindia.org" },
              { icon: Phone, label: "Direct Phone Support", value: "+91 99599 00081", href: "tel:+919959900081" },
              { icon: MapPin, label: "Central Office", value: "MARTUR - 523 301, A.P. India", href: "https://www.google.com/maps/search/?api=1&query=X4H2%2B53C,+Martur,+Andhra+Pradesh+523301,+India" },
            ].map((c, i) => (
              <Reveal as="li" key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group block h-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 hover:border-amber-300/50 hover:bg-white/[0.09] transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-amber-300/10 border border-amber-300/30 flex items-center justify-center">
                    <c.icon className="w-5 h-5 text-amber-300" />
                  </span>
                  <p className="mt-4 text-xs font-extrabold uppercase tracking-wider text-emerald-50/60">{c.label}</p>
                  <p className="mt-1 font-extrabold text-amber-100 break-words">{c.value}</p>
                </a>
              </Reveal>
            ))}
          </ul>

          <a href="mailto:contact@effortindia.org" className={`${goldBtn} mt-10 px-8 py-4 text-sm uppercase tracking-wider`}>
            Contact Donation Support <Mail className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
