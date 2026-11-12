"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  MessageSquare,
  ExternalLink,
  Award,
  ChevronDown,
} from "lucide-react";
import Reveal from "@/components/home/Reveal";

const PHONE = "+91 99599 00081";
const EMAIL = "contact@effortindia.org";

// Headquarters Office Data
const hqOffice = {
  title: "EFFORT Central Administrative Office",
  district: "Martur, Bapatla District, Andhra Pradesh",
  address: "Srujana, # 9-240, G.T. Road, MARTUR - 523 301, Bapatla Dist., A.P. India.",
  phone: PHONE,
  email: EMAIL,
  website: "www.effortindia.org",
  head: "Central Administrative Office Desk",
  landmark: "G.T. Road, Martur",
  type: "Central Office & Registered Society Headquarters",
};

const credentials = [
  "Society Reg 340/1999",
  "Google Charity ID: 010330140",
  "80G Tax Exempt",
  "Section 12AB Approved",
  "FCRA Registered",
  "NITI Aayog Darpan ID",
  "MCA Form CSR-1",
];

const goldBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)] hover:-translate-y-0.5 transition-transform";
const greenBtn =
  "lux-sheen relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0b3d2a] to-[#062619] text-amber-100 font-extrabold shadow-[0_12px_26px_-12px_rgba(6,38,25,0.8)] hover:-translate-y-0.5 transition-transform";
const field =
  "w-full px-4 py-3.5 rounded-2xl bg-[#fbf8f0] border-2 border-[#ece0c0] text-base sm:text-sm font-medium text-[#14120c] placeholder:text-[#a59a80] focus:outline-none focus:border-[#d4a017] focus:bg-white transition-colors";
const label = "block text-xs font-extrabold uppercase tracking-wider text-[#3d3420] mb-2";

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
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
}

export default function ContactClient({ photo = null }: { photo?: string | null }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [refId, setRefId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copied, setCopied] = useState<"phone" | "email" | null>(null);
  const [showMap, setShowMap] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "CSR & Corporate Alliances",
    subject: "",
    message: "",
  });

  const handleCopy = async (kind: "phone" | "email") => {
    await copyText(kind === "phone" ? PHONE : EMAIL);
    setCopied(kind);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", ...formData }),
      });
      if (!res.ok) throw new Error((await res.json()).error || "Failed to send.");
      setRefId(`EFFORT-INQ-${Math.floor(100000 + Math.random() * 900000)}`);
      setFormSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to send. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const mapsLink = `https://maps.google.com/?q=${encodeURIComponent(hqOffice.address)}`;

  return (
    <div className="bg-[#fbf8f0] text-[#14120c] min-h-screen pt-12 relative overflow-x-clip">
      {/* ================= HERO + CHANNELS ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white -mt-12">
        {photo && (
          <div aria-hidden className="absolute inset-0 -z-20">
            <Image src={photo} alt="" fill preload sizes="100vw" className="object-cover opacity-25 lux-kenburns" />
          </div>
        )}
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,#03140d_20%,rgba(3,20,13,0.85)_60%,rgba(3,20,13,0.7))]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-1/3 -right-1/4 w-[70vw] aspect-square -z-10 rounded-full lux-drift-b bg-[radial-gradient(circle,rgba(212,160,23,0.18),transparent_60%)]" />
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:22px_22px]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 min-w-0">
            <p className="lux-rise inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-200" style={{ animationDelay: "80ms" }}>
              <Sparkles className="w-3.5 h-3.5 shrink-0" /> Ground Action Helpline &amp; Central Desk
            </p>
            <h1 className="lux-rise mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-7xl font-extrabold tracking-tight" style={{ animationDelay: "160ms" }}>
              Contact{" "}
              <span className="block">
                <span className="lux-gold-text">EFFORT NGO</span>
              </span>
            </h1>
            <p className="lux-rise mt-6 max-w-xl text-lg sm:text-xl text-emerald-50/80 leading-relaxed italic" style={{ animationDelay: "250ms" }}>
              &quot;A Non-Profit Organisation Committed to Empower Rural Communities for Sustainable Development&quot;
            </p>
            <div className="lux-rise mt-8 flex flex-col min-[420px]:flex-row gap-3" style={{ animationDelay: "330ms" }}>
              <a href="#message" className={`${goldBtn} px-7 py-3.5`}>
                Send a Message <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/50 text-amber-100 font-extrabold px-7 py-3.5 hover:bg-amber-300/10 transition-colors">
                <Phone className="w-4 h-4" /> Call {PHONE}
              </a>
            </div>
          </div>

          {/* Switchboard: the four ways to reach us */}
          <ul className="lg:col-span-6 rounded-[28px] border border-white/15 bg-white/[0.06] backdrop-blur-sm divide-y divide-white/10 overflow-hidden">
            <li className="lux-rise flex items-center gap-4 p-4 sm:p-5" style={{ animationDelay: "250ms" }}>
              <span className="w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber-300" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Helpline &amp; Call Desk</p>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block text-xl font-extrabold hover:text-amber-200 transition-colors">{PHONE}</a>
                <p className="text-sm text-emerald-50/65">Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM IST</p>
              </div>
              <button type="button" onClick={() => handleCopy("phone")} aria-label="Copy phone number" className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-xs font-extrabold text-amber-100 hover:bg-white/10 cursor-pointer transition-colors">
                {copied === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden min-[420px]:inline">{copied === "phone" ? "Phone Copied!" : "Copy Phone Number"}</span>
              </button>
            </li>

            <li className="lux-rise flex items-center gap-4 p-4 sm:p-5" style={{ animationDelay: "320ms" }}>
              <span className="w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-300" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Official Email Inboxes</p>
                <a href={`mailto:${EMAIL}`} className="block text-lg sm:text-xl font-extrabold hover:text-amber-200 transition-colors break-words">{EMAIL}</a>
                <p className="text-sm text-emerald-50/65 break-words">Enquiries: <a href="mailto:info@effortindia.org" className="hover:text-amber-200">info@effortindia.org</a></p>
              </div>
              <button type="button" onClick={() => handleCopy("email")} aria-label="Copy official email" className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-xs font-extrabold text-amber-100 hover:bg-white/10 cursor-pointer transition-colors">
                {copied === "email" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden min-[420px]:inline">{copied === "email" ? "Email Copied!" : "Copy Official Email"}</span>
              </button>
            </li>

            <li className="lux-rise flex items-center gap-4 p-4 sm:p-5" style={{ animationDelay: "390ms" }}>
              <span className="w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-300" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Central Office</p>
                <p className="text-xl font-extrabold">MARTUR, Bapatla Dist.</p>
                <p className="text-sm text-emerald-50/65">Srujana, # 9-240, G.T. Road, AP - 523301</p>
              </div>
              <a href="#office-explorer" className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-xs font-extrabold text-amber-100 hover:bg-white/10 transition-colors">
                <span className="hidden min-[420px]:inline">View Full Address Details</span> <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </li>

            <li className="lux-rise flex items-center gap-4 p-4 sm:p-5" style={{ animationDelay: "460ms" }}>
              <span className="w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-amber-300" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Operating Schedule</p>
                <p className="text-xl font-extrabold">Mon – Sat (9 AM – 6 PM)</p>
                <p className="text-sm text-emerald-50/65">Field staff active 7 days a week</p>
              </div>
              <span className="shrink-0 hidden sm:inline-flex rounded-full bg-amber-300/15 border border-amber-300/30 px-3 py-2 text-xs font-extrabold text-amber-200">
                100% Active Ground Staff
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= FORM + OFFICE ================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div id="message" className="scroll-mt-20 lg:col-span-7 relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-[#e3cf94] shadow-[0_40px_90px_-55px_rgba(90,61,0,0.6)] p-5 sm:p-10">
            <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0b5d3f] via-[#d4a017] to-[#f7d774]" />
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e3cf94] bg-[#f8f1df] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#7a5a12]">
              <MessageSquare className="w-3.5 h-3.5" /> Send Us a Direct Message
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
              Contact Our <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Program Team</span>
            </h2>
            <p className="mt-3 text-[#5a5240] leading-relaxed">
              Fill out your details below and our team will get in touch with you within 24 business hours.
            </p>

            <div className="mt-8">
              {formSubmitted ? (
                <div className="lux-rise text-center py-8">
                  <span className="mx-auto w-20 h-20 rounded-full p-[3px] bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12] flex">
                    <span className="w-full h-full rounded-full bg-[#062619] flex items-center justify-center">
                      <CheckCircle2 className="w-9 h-9 text-amber-300" />
                    </span>
                  </span>
                  <h3 className="mt-6 text-2xl sm:text-3xl font-extrabold">Inquiry Received Successfully!</h3>
                  <p className="mt-3 max-w-md mx-auto text-[#5a5240] leading-relaxed">
                    Thank you for contacting EFFORT NGO. A Program Officer handling <strong className="text-[#0b5d3f]">{formData.department}</strong> will reply to your message shortly.
                  </p>
                  <p className="mt-5 inline-block rounded-xl bg-[#f8f1df] border border-[#e3cf94] px-4 py-2 font-mono text-sm font-bold text-[#7a5a12]">
                    Reference ID: {refId}
                  </p>
                  <div className="mt-7">
                    <button type="button" onClick={() => setFormSubmitted(false)} className={`${greenBtn} px-7 py-3.5 text-sm cursor-pointer`}>
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-name" className={label}>Full Name *</label>
                      <input id="ct-name" type="text" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g. Ramesh Sharma" className={field} />
                    </div>
                    <div>
                      <label htmlFor="ct-email" className={label}>Email Address *</label>
                      <input id="ct-email" type="email" required autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="e.g. ramesh@work.com" className={field} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-phone" className={label}>Phone / Mobile Number *</label>
                      <input id="ct-phone" type="tel" required autoComplete="tel" inputMode="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="e.g. +91 98765 43210" className={field} />
                    </div>
                    <div>
                      <label htmlFor="ct-dept" className={label}>Department / Concern *</label>
                      <div className="relative">
                        <select id="ct-dept" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} className={`${field} appearance-none pr-10 cursor-pointer`}>
                          <option value="CSR & Corporate Alliances">CSR & Corporate Alliances (Form CSR-1)</option>
                          <option value="Volunteering & Internships">Volunteering & Student Internships</option>
                          <option value="Donation & 80G Tax Receipts">Donation & 80G Tax Exemption Receipts</option>
                          <option value="Government & Academic MoUs">Government & Academic MoUs</option>
                          <option value="General Inquiry">General Inquiry / Media Query</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1781e]" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-subject" className={label}>Subject Line *</label>
                    <input id="ct-subject" type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="e.g. CSR Project Inquiry / 80G Tax Receipt Request" className={field} />
                  </div>

                  <div>
                    <label htmlFor="ct-message" className={label}>Detailed Message *</label>
                    <textarea id="ct-message" rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Type your inquiry, proposal parameters, or question here..." className={`${field} resize-y`} />
                  </div>

                  {submitError && (
                    <p role="alert" className="text-sm font-bold text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
                  )}

                  <button type="submit" disabled={submitting} className={`${greenBtn} w-full px-6 py-4 text-sm cursor-pointer disabled:opacity-60 disabled:cursor-wait`}>
                    <Send className="w-4 h-4 text-amber-300" /> {submitting ? "Sending..." : "Send Message To EFFORT Team"}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Office explorer */}
          <div id="office-explorer" className="scroll-mt-20 lg:col-span-5 space-y-5 lg:sticky lg:top-28">
            <Reveal className="relative isolate overflow-hidden rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#0b3d2a] to-[#03140d] text-white p-6 sm:p-8">
              <span aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full -z-10 bg-[radial-gradient(circle,rgba(212,160,23,0.22),transparent_65%)]" />
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">Headquarters Address</p>
                  <h3 className="mt-1 text-2xl font-extrabold">EFFORT Office Directory</h3>
                </div>
                <span className="w-12 h-12 rounded-2xl bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-amber-300" />
                </span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-extrabold uppercase tracking-wide text-amber-300">{hqOffice.type}</p>
                <h4 className="mt-1 text-lg font-extrabold">{hqOffice.title}</h4>
                <p className="mt-0.5 text-sm text-emerald-50/65">{hqOffice.district}</p>
              </div>

              <ul className="mt-5 space-y-3 text-[15px] text-emerald-50/85 leading-relaxed">
                <li className="flex gap-3"><MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-1" /> <span>{hqOffice.address}</span></li>
                <li className="flex gap-3"><Phone className="w-4 h-4 text-amber-300 shrink-0 mt-1" /> <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-amber-200">{hqOffice.phone}</a></li>
                <li className="flex gap-3"><Mail className="w-4 h-4 text-amber-300 shrink-0 mt-1" /> <a href={`mailto:${EMAIL}`} className="hover:text-amber-200 break-all">{hqOffice.email}</a></li>
              </ul>

              <div className="mt-5 rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3 text-sm text-emerald-50/75">
                <span className="block text-xs font-extrabold uppercase tracking-wider text-amber-300">Lead Coordinator:</span>
                {hqOffice.head} ({hqOffice.landmark})
              </div>

              {/* Map loads only when asked — keeps the page light */}
              <div className="mt-5 relative h-52 rounded-2xl overflow-hidden border border-white/15 bg-[#062619]">
                {showMap ? (
                  <iframe
                    title="EFFORT Central Office map, Martur"
                    src="https://maps.google.com/maps?q=X4H2%2B53C,+Martur,+Andhra+Pradesh+523301,+India&hl=en&z=16&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <button type="button" onClick={() => setShowMap(true)} className="group w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer bg-[radial-gradient(#f7d774_1px,transparent_1px)] [background-size:16px_16px] bg-opacity-10 hover:bg-[#0b3d2a]/60 transition-colors">
                    <span className="w-12 h-12 rounded-full bg-amber-300 text-[#062619] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </span>
                    <span className="text-sm font-extrabold text-amber-100">Show interactive map</span>
                  </button>
                )}
              </div>

              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={`${goldBtn} mt-5 w-full px-5 py-3.5 text-sm`}>
                Open in Google Maps <ExternalLink className="w-4 h-4" />
              </a>
            </Reveal>

            <Reveal delay={100} className="rounded-3xl bg-[#f8f1df] border border-[#e3cf94] p-5 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#062619] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-300" />
                </span>
                <h4 className="font-extrabold">Need Urgent 80G Tax Receipt?</h4>
              </div>
              <p className="mt-3 text-[15px] text-[#5a5240] leading-relaxed">
                If you made a contribution and require your official Section 80G tax exemption certificate, please mention your payment transaction ID in the subject line above for priority issue within 12 hours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATUTORY CREDENTIALS ================= */}
      <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white py-16 sm:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] bg-[linear-gradient(rgba(247,215,116,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,215,116,0.7)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
            <ShieldCheck className="w-4 h-4 shrink-0" /> Verified Legal Standing &amp; Regulatory Accreditation
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
            EFFORT NGO <span className="lux-gold-text">Statutory Registration Credentials</span>
          </h2>
          <p className="mt-5 max-w-3xl mx-auto text-emerald-50/75 sm:text-lg leading-relaxed">
            EFFORT NGO maintains active Society Registration (340/1999), Google for Nonprofits Charity ID (010330140), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval (CSR00034988), NITI Aayog DARPAN ID, and TISS National Hub Empanlement.
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {credentials.map((c) => (
              <li key={c} className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-3.5 py-2 text-xs sm:text-sm font-extrabold text-amber-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </div>
  );
}
