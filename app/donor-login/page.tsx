"use client";

import React, { useState } from "react";
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Heart, 
  TrendingUp,
  Download,
  Calendar,
  FileText
} from "lucide-react";

export default function DonorLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("history");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const donationHistory = [
    { date: "June 12, 2026", cause: "Educate 1,000 Rural Girls", amount: "₹5,000", status: "Cleared", receiptId: "REC-2026-4829" },
    { date: "April 02, 2026", cause: "Mobile Medical Vans", amount: "₹2,500", status: "Cleared", receiptId: "REC-2026-1029" },
    { date: "Jan 15, 2026", cause: "Youth Skilling Project", amount: "₹1,500", status: "Cleared", receiptId: "REC-2026-0428" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden flex items-center justify-center">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        
        {!isLoggedIn ? (
          /* --- LOGIN CARD --- */
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 shadow-xl space-y-6 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center text-white font-extrabold text-2xl shadow-md mx-auto mb-4">
                E
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Donor Portal Sign In</h2>
              <p className="text-xs text-slate-500">Access your tax receipts, impact timeline, and donation ledger.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Registered Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Mail className="w-4 h-4" /></span>
                  <input 
                    type="email" 
                    placeholder="e.g. aditi@work.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Lock className="w-4 h-4" /></span>
                  <input 
                    type="password" 
                    placeholder="Enter account password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-emerald-600 font-semibold pt-1">
                <label className="flex items-center gap-1.5 text-slate-500 cursor-pointer">
                  <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" /> Keep me signed in
                </label>
                <a href="#" className="hover:underline">Forgot password?</a>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer text-sm"
              >
                Sign In to Portal
              </button>
            </form>

            <div className="flex justify-center items-center gap-2 text-[10px] text-slate-450 border-t border-slate-100 pt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Authorized access only
            </div>
          </div>
        ) : (
          /* --- LOGGED IN DONOR DASHBOARD PORTAL --- */
          <div className="bg-white/85 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 animate-fade-in">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> Active Donor Profile</span>
                <h2 className="text-2xl font-bold text-slate-905">Welcome Back, Aditi Sharma!</h2>
                <p className="text-xs text-slate-450">Donor ID: IND-9839 | Member since: Jan 2026</p>
              </div>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-xs font-bold text-slate-600 rounded-lg transition-colors cursor-pointer"
              >
                Sign Out
              </button>
            </div>

            {/* Quick stats ledger */}
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Total Gifted</span>
                <p className="text-lg sm:text-2xl font-extrabold text-emerald-700 mt-1">₹9,000</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Exempted tax</span>
                <p className="text-lg sm:text-2xl font-extrabold text-amber-700 mt-1">100% (80G)</p>
              </div>
              <div className="p-4 rounded-2xl bg-sky-50/50 border border-sky-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Interventions</span>
                <p className="text-lg sm:text-2xl font-extrabold text-sky-700 mt-1">3 Projects</p>
              </div>
            </div>

            {/* Tabs selector */}
            <div className="flex gap-2 border-b border-slate-100 pb-3">
              <button 
                onClick={() => setActiveTab("history")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "history" 
                    ? "bg-slate-900 text-white" 
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                Donation History
              </button>
              <button 
                onClick={() => setActiveTab("impact")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === "impact" 
                    ? "bg-slate-900 text-white" 
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                Direct Impact Reports
              </button>
            </div>

            {activeTab === "history" ? (
              /* Ledger list */
              <div className="space-y-4">
                {donationHistory.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-200/50 flex justify-between items-center bg-white/40">
                    <div className="space-y-1">
                      <h4 className="font-bold text-slate-905 text-sm sm:text-base">{item.cause}</h4>
                      <p className="text-[10px] text-slate-400">Date: {item.date} | Receipt: {item.receiptId}</p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <strong className="text-emerald-700 font-bold text-sm sm:text-base">{item.amount}</strong>
                      <button className="p-2.5 rounded-lg border border-slate-200 hover:border-slate-350 hover:bg-slate-50 text-slate-600 transition-all shrink-0 cursor-pointer">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Impact timeline updates */
              <div className="p-6 rounded-2xl border border-slate-200/50 bg-slate-50/50 text-slate-650 space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Project Milestones reached:
                </h4>
                <div className="space-y-3 text-xs leading-relaxed">
                  <p>🔹 **Shiksha (June 2026):** Your donation sponsored study kit units delivered to 5 schoolgirls in Alwar, Rajasthan.</p>
                  <p>🔹 **Sanjeevani (April 2026):** Sponsored clinic health checkups deployed in fishing blocks in Ganjam, Odisha.</p>
                </div>
              </div>
            )}

          </div>
        )}

      </div>

    </div>
  );
}
