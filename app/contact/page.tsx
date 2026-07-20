"use client";

import React from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Always Available
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Contact Our Team
        </h1>
        <p className="text-slate-655 text-lg max-w-2xl mx-auto">
          Have questions about donations, tax exemption certificates, or partnership initiatives? Reach out to us.
        </p>
      </section>

      {/* --- FORM & CONTACT DETAILS GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Form Left (7 cols) */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-8 sm:p-10 shadow-lg space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Send Us a Message</h3>
              <p className="text-slate-500 text-xs sm:text-sm">We usually respond to email inquiries within 24 business hours.</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">First Name</label>
                <input type="text" placeholder="e.g. Ramesh" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Last Name</label>
                <input type="text" placeholder="e.g. Sharma" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
                <input type="email" placeholder="e.g. ramesh@work.com" className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Subject</label>
                <input type="text" placeholder="e.g. Tax certificate query, CSR partnership..." className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Detailed Message</label>
                <textarea rows={4} placeholder="Type your query here..." className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required></textarea>
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Send Inquiry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Details Right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick contact info */}
            <div className="bg-slate-905 bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <h4 className="text-lg font-bold text-white">Direct Communication</h4>

              <div className="space-y-4 text-emerald-100 text-sm">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-450 block text-[10px] uppercase font-bold">Call Us</span>
                    <strong className="text-white font-medium mt-0.5 block">+91 98765 43210</strong>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-450 block text-[10px] uppercase font-bold">Email Inquiries</span>
                    <strong className="text-white font-medium mt-0.5 block">info@effortindiango.org</strong>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-450 block text-[10px] uppercase font-bold">Business Hours</span>
                    <strong className="text-white font-medium mt-0.5 block">Mon - Sat: 9 AM - 6 PM</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 space-y-6 shadow-md">
              <h4 className="text-lg font-bold text-slate-900">Regional Offices</h4>
              
              <div className="space-y-6 text-slate-650 text-xs">
                
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 font-bold block text-sm">Karnataka Head Office</strong>
                    <p className="mt-1 leading-relaxed">321, Progressive Towers, Outer Ring Road, Bengaluru - 560103</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 font-bold block text-sm">Odisha Operations</strong>
                    <p className="mt-1 leading-relaxed">45, Temple Road, Ganjam district, Odisha - 761001</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="text-slate-800 font-bold block text-sm">Rajasthan Bridging Schools</strong>
                    <p className="mt-1 leading-relaxed">12, Vidyadhar Nagar, Jaipur, Rajasthan - 302039</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
