"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const jobOpenings = [
    {
      id: "pm",
      title: "Rural Development Program Manager",
      type: "Full-Time",
      location: "Jaipur Rural, Rajasthan",
      desc: "Lead Shiksha Mission bridging schools and farmer agroforestry interventions. 3-5 years NGO project experience required.",
      salary: "₹4.5L - ₹6.0L / year"
    },
    {
      id: "co",
      title: "Field Healthcare Coordinator",
      type: "Full-Time",
      location: "Ganjam Coast, Odisha",
      desc: "Manage scheduling, supplies, and staff coordination for 3 Sanjeevani Mobile Clinic vans. Health science or social work background preferred.",
      salary: "₹3.0L - ₹4.0L / year"
    },
    {
      id: "intern",
      title: "Social Work & Community Mobilization Intern",
      type: "Internship (3-6 Months)",
      location: "Bengaluru Urban Office",
      desc: "Coordinate volunteer programs, support database entries, and assist local self-help group workshops. Certificate and stipend provided.",
      salary: "₹10,000 / month Stipend"
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen py-12 relative overflow-hidden">
      
      {/* Liquid background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100/35 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[-15%] w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-650 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Ground Career Roles
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Careers & Internships
          </h1>
          <p className="text-slate-655 text-lg">
            Make social change your profession. Apply for full-time field roles or student internships with stipend.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 text-center">
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 p-6 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Direct Field Impact</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Work directly on the ground in tribal belts, rural districts, and urban slums.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 p-6 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Auditable Governance</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Learn from fully transparent financial systems and compliance operations.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 p-6 rounded-3xl space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Stipend & Allowances</h3>
            <p className="text-xs text-slate-500 leading-relaxed">Stipends for all interns and travel allowances for field workers.</p>
          </div>
        </div>

        {formSubmitted ? (
          /* Application Success */
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-xl border border-emerald-100/50 rounded-3xl p-8 text-center space-y-6 shadow-xl animate-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900">Application Received!</h2>
              <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you for applying. Our HR recruitment desk will review your profile and reach out within 5 working days.
              </p>
            </div>
            <button 
              onClick={() => {
                setFormSubmitted(false);
                setSelectedJob(null);
              }}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-colors"
            >
              Back to Job Openings
            </button>
          </div>
        ) : selectedJob ? (
          /* Job Apply Form */
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 shadow-xl space-y-8 animate-fade-in">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Apply Online</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {jobOpenings.find(j => j.id === selectedJob)?.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="text-xs font-bold text-slate-400 hover:text-slate-600"
              >
                Cancel
              </button>
            </div>

            <form onSubmit={handleApplySubmit} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Resume / LinkedIn Profile URL</label>
                <input type="url" placeholder="https://linkedin.com/in/username" className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Why do you want to join Effort India?</label>
                <textarea rows={3} placeholder="Tell us briefly about your motivation..." className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm" required></textarea>
              </div>
              <div className="sm:col-span-2 pt-2">
                <button type="submit" className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Submit Form Application <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Job Openings List */
          <div className="bg-white/85 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-6 sm:p-10 shadow-lg space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Current Job Openings</h3>

            <div className="space-y-4">
              {jobOpenings.map((job) => (
                <div 
                  key={job.id}
                  className="p-6 rounded-2xl border border-slate-200/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-emerald-500/30 transition-all duration-300 bg-white/50"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-slate-905 text-base sm:text-lg">{job.title}</h4>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-[10px] font-bold uppercase shrink-0">{job.type}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-semibold">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {job.salary}</span>
                    </div>
                    <p className="text-slate-500 text-xs sm:text-sm mt-2">{job.desc}</p>
                  </div>

                  <button 
                    onClick={() => setSelectedJob(job.id)}
                    className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs transition-colors shrink-0 self-stretch md:self-auto text-center cursor-pointer"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
