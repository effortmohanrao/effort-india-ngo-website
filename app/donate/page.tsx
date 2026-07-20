"use client";

import React, { useState } from "react";
import { 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  CreditCard, 
  Smartphone, 
  Building,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Download,
  Users
} from "lucide-react";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    anonymous: false
  });

  const presetAmounts = [1000, 2500, 5000, 10000, 25000];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentGiftImpact = () => {
    const amount = Number(customAmount) || donationAmount;
    if (amount <= 1500) {
      return "Provides 1 complete primary school education kit (textbooks, bag, stationery, and uniforms) for a rural child.";
    } else if (amount <= 4000) {
      return "Sponsors school tuition, transport fees, and nutrition bridging support for a rural girl child for 3 months.";
    } else if (amount <= 10000) {
      return "Supports a mobile health clinic van visit to 2 isolated villages, providing primary healthcare checkups for 50+ residents.";
    } else {
      return "Funds a complete micro-enterprise tailoring setup (sewing machine, training, raw materials) for a rural woman beneficiary.";
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-650 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3 h-3 text-emerald-600 fill-emerald-600" /> Save Lives & Taxes
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Empower a Community Today
          </h1>
          <p className="text-slate-600 text-lg">
            Your support brings hope. All donations to Effort India NGO are 100% transparent and eligible for Section 80G tax benefits.
          </p>
        </div>

        {formSubmitted ? (
          /* --- SUCCESS SCREEN --- */
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-xl border border-emerald-100/50 rounded-3xl p-8 text-center space-y-6 shadow-xl animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900">Thank You, {formData.name || "Donor"}!</h2>
              <p className="text-emerald-700 font-bold text-sm">Donation of ₹{customAmount || donationAmount} Initiated Successfully</p>
              <p className="text-xs text-slate-500 max-w-md mx-auto mt-2 leading-relaxed">
                We have generated your temporary receipt. Once your payment clearing confirms, your official 80G certificate will be automatically emailed to you.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/50 space-y-3 max-w-md mx-auto text-left text-xs text-slate-600">
              <p><strong>Donor Email:</strong> {formData.email}</p>
              {formData.pan && <p><strong>PAN Number:</strong> {formData.pan.toUpperCase()} (For Tax Exemption)</p>}
              <p><strong>Compliance Status:</strong> 80G Exemption Automated Certificate</p>
            </div>

            <button 
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              Support Another Program
            </button>
          </div>
        ) : (
          /* --- DONATION FLOW --- */
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Donation Form Left (7 cols) */}
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-6 md:p-10 shadow-lg space-y-8">
              
              <form onSubmit={handleDonateSubmit} className="space-y-8">
                
                {/* 1. Gift Frequency & Amount */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-905 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    1. Select Donation Amount
                  </h3>
                  
                  {/* Preset amounts buttons */}
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setDonationAmount(amt);
                          setCustomAmount("");
                        }}
                        className={`py-3.5 rounded-xl border-2 text-center font-bold text-sm transition-all cursor-pointer ${
                          donationAmount === amt && !customAmount
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                            : "border-slate-200 hover:border-slate-350 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        ₹{amt.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>

                  {/* Custom input */}
                  <div className="relative max-w-sm">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                    <input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setDonationAmount(Number(e.target.value));
                      }}
                      className="w-full pl-8 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden font-bold text-slate-800"
                    />
                  </div>

                  {/* Impact feedback */}
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex gap-3 text-xs leading-relaxed text-slate-650">
                    <Heart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 fill-emerald-100" />
                    <div>
                      <strong className="text-emerald-900 font-bold block mb-0.5">Your Impact:</strong>
                      {currentGiftImpact()}
                    </div>
                  </div>
                </div>

                {/* 2. Donor Details */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-905 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    2. Personal / Funder Information
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Funder Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Aditi Sharma" 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. aditi@work.com" 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Mobile No (For Receipts)</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 9876543210" 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase mb-2">PAN Card No (Optional, for 80G)</label>
                      <input 
                        type="text" 
                        name="pan"
                        value={formData.pan}
                        onChange={handleInputChange}
                        placeholder="e.g. ABCDE1234F" 
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm font-mono uppercase" 
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-2 pt-2 text-xs text-slate-500 font-semibold cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" 
                    />
                    Keep my donation anonymous on public honor rolls
                  </label>
                </div>

                {/* 3. Payment Mode */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <h3 className="text-xl font-bold text-slate-905 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-sky-600" />
                    3. Choose Payment Method
                  </h3>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "upi", label: "UPI / QR", icon: Smartphone },
                      { id: "card", label: "Card", icon: CreditCard },
                      { id: "net", label: "Bank Transfer", icon: Building }
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setPaymentMethod(mode.id)}
                        className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          paymentMethod === mode.id
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700 shadow-sm"
                            : "border-slate-200 hover:border-slate-350 text-slate-650"
                        }`}
                      >
                        <mode.icon className="w-5 h-5" />
                        <span className="text-xs font-bold">{mode.label}</span>
                      </button>
                    ))}
                  </div>

                  {paymentMethod === "upi" && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 flex flex-col items-center text-center space-y-3 animate-fade-in">
                      <div className="w-32 h-32 bg-white border border-slate-200 p-2 rounded-xl flex items-center justify-center shadow-xs">
                        {/* Mock QR Code block */}
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          QR Mockup
                        </div>
                      </div>
                      <p className="text-xs text-slate-550 max-w-sm">
                        Scan with your UPI App (GPay, PhonePe, Paytm). Tax exemption is linked instantly.
                      </p>
                    </div>
                  )}

                  {paymentMethod === "net" && (
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/50 text-xs text-slate-600 space-y-2 animate-fade-in">
                      <h4 className="font-bold text-slate-800">Effort India Trust Account Details</h4>
                      <p><strong>Bank:</strong> State Bank of India</p>
                      <p><strong>Account Name:</strong> Effort India Charitable Trust</p>
                      <p><strong>Account No:</strong> 4892019482938</p>
                      <p><strong>IFSC Code:</strong> SBIN0003498</p>
                      <p><strong>Branch:</strong> ORR, Bengaluru</p>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  Authorize Payment of ₹{(customAmount || donationAmount).toLocaleString("en-IN")}
                  <ArrowRight className="w-5 h-5" />
                </button>

              </form>
            </div>

            {/* Donation FAQ Right (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-lg relative">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" /> Trust Indicators
                </h4>

                <div className="space-y-4 text-slate-300 text-xs leading-relaxed">
                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm">Is my payment secure?</h5>
                    <p>Yes, all transactions are processed through SSL-secured payment systems (PCI-DSS compliant).</p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm">When do I get my 80G tax receipt?</h5>
                    <p>Your 80G certificate is automatically compiled and emailed to you within 24 hours of successful bank clearance.</p>
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold text-white text-sm">How is my money spent?</h5>
                    <p>92% of all donations go directly to program implementations and beneficiary support. The remaining 8% covers administration, audits, and compliance.</p>
                  </div>
                </div>
              </div>

              {/* Donor Honor Roll */}
              <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 shadow-md space-y-4">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-505" />
                  Funder Honor Roll (Recent)
                </h4>
                <div className="space-y-3 text-xs text-slate-650">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Apex Industries Ltd (CSR)</span>
                    <strong className="text-emerald-700 font-bold">₹5,00,000</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span>Dr. Sunil Vasudev</span>
                    <strong className="text-emerald-700 font-bold">₹50,000</strong>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span>Anonymous Funder</span>
                    <strong className="text-emerald-700 font-bold">₹25,000</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}
