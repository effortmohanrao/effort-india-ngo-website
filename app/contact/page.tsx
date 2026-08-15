"use client";

import React, { useState } from "react";
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
  Landmark,
  MessageSquare,
  Globe2,
  Headphones,
  ExternalLink,
  ChevronRight,
  Award,
} from "lucide-react";

export default function Contact() {
  const [activeOffice, setActiveOffice] = useState<"hq" | "prakasam" | "guntur" | "hyderabad">("hq");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  {/* Form State */}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "CSR & Corporate Alliances",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("effortap@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+91 99599 00081");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  {/* Offices Data */}
  const officeLocations = {
    hq: {
      title: "EFFORT Central Administrative Office",
      district: "Martur, Bapatla District, Andhra Pradesh",
      address: "Srujana, # 9-240, G.T. Road, MARTUR - 523 301, Bapatla Dist., A.P. India.",
      phone: "+91 99599 00081",
      email: "effortap@gmail.com",
      website: "www.effortindia.org",
      head: "Central Administrative Office Desk",
      landmark: "G.T. Road, Martur",
      type: "Central Office & Registered Society Headquarters",
    },
    prakasam: {
      title: "Prakasam Watershed & IPM Field Hub",
      district: "Podili / Markapur Region, Andhra Pradesh",
      address: "Watershed Field Intervention Center, Main Road, Podili, Prakasam District, Andhra Pradesh - 523240.",
      phone: "+91 99599 00081",
      email: "effortap@gmail.com",
      head: "Senior Project Officer (NRM & Watersheds)",
      landmark: "Opposite Agricultural Extension Office",
      type: "Watershed, Check-Dam & DSR Demonstration Hub",
    },
    guntur: {
      title: "Guntur & Palnadu FPO Operations Hub",
      district: "Guntur District, Andhra Pradesh",
      address: "FPO Farmer Facilitation Desk, Collectorate Road, Guntur, Andhra Pradesh - 522004.",
      phone: "+91 99599 00081",
      email: "effortap@gmail.com",
      head: "FPO & Spices Board Project Manager",
      landmark: "Near District Agriculture Office",
      type: "Farmer Producer Organizations (FPOs) & SHG Training Hub",
    },
    hyderabad: {
      title: "CSR Alliances & Institutional Desk",
      district: "Hyderabad / Vijayawada CSR Liaison",
      address: "Corporate Liaison Office, Jubliee Hills / MG Road Vijayawada Desk, Andhra Pradesh & Telangana.",
      phone: "+91 99599 00081",
      email: "effortap@gmail.com",
      head: "Head of Corporate Partnerships & MoUs",
      landmark: "Corporate CSR Consultation Center",
      type: "CSR Partnerships, Form CSR-1 & University MoUs",
    },
  };

  return (
    <div className="min-h-screen bg-[#faf7ee] text-[#221c0c] font-sans">
      
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1409] via-[#2a200d] to-[#151007] text-white py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[160px] animate-liquid-drift-a" />
          <div className="absolute bottom-[-10%] left-[5%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] animate-liquid-drift-b" />
          <div className="bg-noise absolute inset-0 opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Ground Action Helpline &amp; Central Desk
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
            Contact <span className="bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">EFFORT NGO</span>
          </h1>

          <p className="text-amber-100/90 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            "A Non-Profit Organisation Committed to Empower Rural Communities for Sustainable Development"
          </p>
        </div>
      </section>

      {/* Top 4 Quick Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Phone Card */}
          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#8a6a1f]">Helpline &amp; Call Desk</span>
              <p className="text-base font-black text-[#221c0c] mt-0.5">+91 99599 00081</p>
              <p className="text-[11px] text-[#5b6a60] font-medium mt-0.5">Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM IST</p>
            </div>
            <button
              onClick={handleCopyPhone}
              className="w-full py-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-amber-700" />}
              {copiedPhone ? "Phone Copied!" : "Copy Phone Number"}
            </button>
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700">Official Email Desk</span>
              <p className="text-base font-black text-[#221c0c] mt-0.5 truncate">effortap@gmail.com</p>
              <p className="text-[11px] text-[#5b6a60] font-medium mt-0.5">www.effortindia.org</p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-emerald-700" />}
              {copiedEmail ? "Email Copied!" : "Copy Official Email"}
            </button>
          </div>

          {/* Central Office Card */}
          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-700">Central Office</span>
              <p className="text-base font-black text-[#221c0c] mt-0.5">MARTUR, Bapatla Dist.</p>
              <p className="text-[11px] text-[#5b6a60] font-medium mt-0.5">Srujana, # 9-240, G.T. Road, AP - 523301</p>
            </div>
            <a
              href="#office-explorer"
              className="w-full py-2 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              View Full Address Details <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-700">Operating Schedule</span>
              <p className="text-base font-black text-[#221c0c] mt-0.5">Mon – Sat (9 AM – 6 PM)</p>
              <p className="text-[11px] text-[#5b6a60] font-medium mt-0.5">Field staff active 7 days a week</p>
            </div>
            <span className="w-full py-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 font-bold text-xs text-center block">
              100% Active Ground Staff
            </span>
          </div>

        </div>
      </section>

      {/* --- FORM & OFFICE EXPLORER GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: High-Level Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 rounded-[40px] p-8 sm:p-10 bg-white/95 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_25px_60px_-15px_rgba(180,140,40,0.2)] space-y-8">
            <div className="space-y-2 border-b border-[#e5d4a1] pb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
                <MessageSquare className="w-3.5 h-3.5 text-amber-700" /> Send Us a Direct Message
              </span>
              <h2 className="text-3xl font-black text-[#221c0c]">Contact Our Program Team</h2>
              <p className="text-xs sm:text-sm text-[#5b6a60] font-medium">
                Fill out your details below and our team will get in touch with you within 24 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Inquiry Received Successfully!</h3>
                <p className="text-sm text-emerald-800 font-medium max-w-md mx-auto">
                  Thank you for contacting EFFORT NGO. A Program Officer handling <strong>{formData.department}</strong> will reply to your message shortly.
                </p>
                <div className="p-3 rounded-2xl bg-white border border-emerald-200 text-xs font-mono font-bold text-emerald-900 inline-block">
                  Reference ID: EFFORT-INQ-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-emerald-700 text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-800"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@work.com"
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                      Department / Concern *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                    >
                      <option value="CSR & Corporate Alliances">CSR & Corporate Alliances (Form CSR-1)</option>
                      <option value="Volunteering & Internships">Volunteering & Student Internships</option>
                      <option value="Donation & 80G Tax Receipts">Donation & 80G Tax Exemption Receipts</option>
                      <option value="Government & Academic MoUs">Government & Academic MoUs</option>
                      <option value="General Inquiry">General Inquiry / Media Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. CSR Project Inquiry / 80G Tax Receipt Request"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Detailed Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your inquiry, proposal parameters, or question here..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#221c0c] hover:bg-black text-[#f7e4a3] border border-[#d4af6a] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" /> Send Message To EFFORT Team
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Dynamic Office Location Explorer (5 cols) */}
          <div id="office-explorer" className="lg:col-span-5 space-y-6">
            <div className="rounded-[36px] p-6 sm:p-8 bg-gradient-to-b from-[#1a140b] to-[#120e08] text-white border-2 border-[#d4af6a]/60 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#d4af6a]/30 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">Field & Admin Locations</span>
                  <h3 className="text-xl font-black text-[#f7e4a3]">EFFORT Office Directory</h3>
                </div>
                <Building2 className="w-6 h-6 text-amber-400" />
              </div>

              {/* Location Switcher Tabs */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveOffice("hq")}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    activeOffice === "hq"
                      ? "bg-[#d4af6a] text-slate-950 font-black shadow-md"
                      : "bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800"
                  }`}
                >
                  🏛️ Headquarters (AP)
                </button>

                <button
                  onClick={() => setActiveOffice("prakasam")}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    activeOffice === "prakasam"
                      ? "bg-[#d4af6a] text-slate-950 font-black shadow-md"
                      : "bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800"
                  }`}
                >
                  🌾 Prakasam Field Hub
                </button>

                <button
                  onClick={() => setActiveOffice("guntur")}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    activeOffice === "guntur"
                      ? "bg-[#d4af6a] text-slate-950 font-black shadow-md"
                      : "bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800"
                  }`}
                >
                  👩‍🌾 Guntur FPO Desk
                </button>

                <button
                  onClick={() => setActiveOffice("hyderabad")}
                  className={`p-3 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${
                    activeOffice === "hyderabad"
                      ? "bg-[#d4af6a] text-slate-950 font-black shadow-md"
                      : "bg-stone-900 border border-stone-800 text-stone-300 hover:bg-stone-800"
                  }`}
                >
                  🏢 CSR Alliances Desk
                </button>
              </div>

              {/* Selected Office Detail View */}
              {(() => {
                const selectedOffice = officeLocations[activeOffice];
                return (
                  <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4 animate-fade-in">
                    <div>
                      <span className="text-[10px] font-black uppercase text-amber-400">{selectedOffice.type}</span>
                      <h4 className="text-lg font-black text-white">{selectedOffice.title}</h4>
                      <p className="text-xs text-stone-400 font-medium mt-0.5">{selectedOffice.district}</p>
                    </div>

                    <div className="space-y-2 text-xs text-stone-300 leading-relaxed font-medium pt-2 border-t border-stone-800">
                      <div className="flex gap-2">
                        <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{selectedOffice.address}</span>
                      </div>
                      <div className="flex gap-2">
                        <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{selectedOffice.phone}</span>
                      </div>
                      <div className="flex gap-2">
                        <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{selectedOffice.email}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400">
                      <span className="font-bold text-amber-300 block">Lead Coordinator:</span>
                      {selectedOffice.head} ({selectedOffice.landmark})
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(selectedOffice.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-[#d4af6a] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-amber-300 transition-colors"
                    >
                      Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })()}

            </div>

            {/* Quick Emergency / 80G Receipt Callout Card */}
            <div className="p-6 rounded-[28px] bg-white/90 border-2 border-[#e5d4a1] space-y-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-700" />
                <h4 className="font-black text-[#221c0c] text-sm">Need Urgent 80G Tax Receipt?</h4>
              </div>
              <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">
                If you made a contribution and require your official Section 80G tax exemption certificate, please mention your payment transaction ID in the subject line above for priority issue within 12 hours.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- STATUTORY GOVERNANCE FOOTER STRIP --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Legal Standing & Regulatory Accreditation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            EFFORT NGO Statutory Registration Credentials
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT NGO maintains active Society Registration (340/1999), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval (CSR00034988), NITI Aayog DARPAN ID, Social Stock Exchange (SSE) listing, and TISS National Hub Empanlement.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-[#d4af6a] border-t border-[#d4af6a]/30">
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Society Reg 340/1999</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 80G Tax Exempt</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Section 12AB Approved</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> FCRA Registered</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> NITI Aayog Darpan ID</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MCA Form CSR-1 (CSR00034988)</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> SSE Listed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TISS Empaneled</span>
          </div>
        </div>
      </section>
    </div>
  );
}
