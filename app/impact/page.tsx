"use client";

import React, { useState } from "react";
import { 
  Globe, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Users, 
  BookOpen, 
  Activity, 
  FileSpreadsheet
} from "lucide-react";

export default function Impact() {
  const [selectedState, setSelectedState] = useState("all");

  const regionsData = [
    {
      id: "karnataka",
      state: "Karnataka",
      coverage: "Bengaluru Urban, Ramnagara, Kolar",
      schools: 12,
      beneficiaries: "4,500+",
      primaryProgram: "Swavalamban Livelihoods & Shiksha Smart Classes",
      desc: "Operating youth skilling centers, tailor-made courses for women micro-entrepreneurs, and providing smart class kits to govt primary schools."
    },
    {
      id: "odisha",
      state: "Odisha",
      coverage: "Ganjam, Gajapati, Khurda",
      schools: 8,
      beneficiaries: "6,200+",
      primaryProgram: "Sanjeevani Healthcare & SHG Craft Training",
      desc: "Deploying Mobile Medical Clinic Vans to isolated fishing villages, establishing self-help tailoring collectives, and setting up clean water filtration systems."
    },
    {
      id: "rajasthan",
      state: "Rajasthan",
      coverage: "Jaipur Rural, Alwar, Udaipur",
      schools: 15,
      beneficiaries: "4,300+",
      primaryProgram: "Shiksha Mission Bridging Schools",
      desc: "Rescuing children working at brick kilns, running bridging education centers to help them catch up, and offering higher education scholarship grants for girls."
    }
  ];

  const statCards = [
    { title: "15,000+", subtitle: "Beneficiaries Touched", icon: Users, color: "emerald" },
    { title: "120+", subtitle: "Villages Served", icon: Globe, color: "amber" },
    { title: "5,000+", subtitle: "Children Enrolled", icon: BookOpen, color: "sky" },
    { title: "8,500+", subtitle: "Healthcare Checkups", icon: Activity, color: "rose" }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Measureable Intervention
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
          Impact & Geographic Reach
        </h1>
        <p className="text-slate-655 text-lg max-w-2xl mx-auto">
          We believe in data-driven operations. Track our beneficiary outreach numbers and target coverage map below.
        </p>
      </section>

      {/* --- CUMULATIVE STATS CARDS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statCards.map((stat, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-slate-200/50 shadow-md flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mb-4">
                <stat.icon className="w-5 h-5 text-emerald-605" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">{stat.title}</p>
                <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GEOGRAPHIC COVERAGE AREA & MAP DETAIL --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/50 p-6 md:p-10 shadow-lg grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Map info Left */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">State-wise operations</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">Active Field Coverage</h3>
              <p className="text-slate-550 text-sm mt-3 leading-relaxed">
                Click on the states below to see specific details about our rural classrooms, active clinics, and total beneficiary reach.
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => setSelectedState("all")}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                  selectedState === "all"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-700 font-bold shadow-xs"
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                }`}
              >
                <span>Show All Regions</span>
                <Globe className="w-4 h-4" />
              </button>

              {regionsData.map((reg) => (
                <button 
                  key={reg.id}
                  onClick={() => setSelectedState(reg.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    selectedState === reg.id
                      ? "border-emerald-600 bg-emerald-50/50 text-emerald-700 font-bold shadow-xs"
                      : "border-slate-200 hover:border-slate-350 text-slate-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                    {reg.state}
                  </span>
                  <span className="text-xs font-bold bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-lg">{reg.beneficiaries}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Map info Right */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/50 min-h-[350px] flex flex-col justify-between">
              
              {selectedState === "all" ? (
                <div className="space-y-6 flex-1 flex flex-col justify-center text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">National Footprint</h4>
                    <p className="text-slate-500 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                      Effort India is active across 3 states, covering 35+ districts and hundreds of rural blocks. Select a state to view local operational reports.
                    </p>
                  </div>
                </div>
              ) : (
                regionsData.map((reg) => {
                  if (reg.id !== selectedState) return null;
                  return (
                    <div key={reg.id} className="space-y-6 flex-1 flex flex-col justify-between animate-fade-in">
                      <div className="space-y-3">
                        <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                          Active State
                        </span>
                        <h4 className="text-2xl font-bold text-slate-900">{reg.state} Operations</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{reg.desc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-slate-200/50 text-slate-700 text-xs">
                        <div>
                          <span className="text-slate-400 block font-bold">Coverage Areas</span>
                          <strong className="text-slate-800 font-medium text-xs mt-0.5 block">{reg.coverage}</strong>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-bold">Impact Reach</span>
                          <strong className="text-emerald-700 font-medium text-xs mt-0.5 block">{reg.beneficiaries} lives</strong>
                        </div>
                        <div className="col-span-2 pt-2 border-t border-slate-100">
                          <span className="text-slate-400 block font-bold">Primary Program Focus</span>
                          <strong className="text-slate-800 font-medium text-xs mt-0.5 block">{reg.primaryProgram}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
