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
  GraduationCap,
  Award,
  Users,
  Send,
  Building2,
  FileCheck2,
  Globe2,
  Zap,
  Check,
  ChevronRight,
  Heart,
  BadgeCheck,
  BookOpen,
} from "lucide-react";

export default function Careers() {
  const [activeRoleFilter, setActiveRoleFilter] = useState("all");
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  {/* Form State */}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    role: "University Rural Immersion Fellow",
    portfolio: "",
    statement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  {/* Job & Internship Openings Dataset */}
  const jobOpenings = [
    {
      id: "intern-fellow",
      category: "internship",
      title: "University Rural Immersion Fellow",
      type: "Internship & Fellowship (3-6 Months)",
      location: "Ongole HQ & Prakasam Field Hub, Andhra Pradesh",
      stipend: "₹12,000 / month Stipend + Field Travel",
      desc: "Designed for social work (MSW), agriculture, and public policy students. Conduct baseline surveys, document FPO success stories, and facilitate SHG micro-enterprise workshops.",
      requirements: [
        "Enrolled in or graduate of MSW, B.Sc Ag, MA Social Work, or Public Policy",
        "Passionate about grassroots rural development & community mobilization",
        "Official TISS & Academic Empaneled Internship Certificate provided",
      ],
      badge: "Youth Fellowship",
    },
    {
      id: "gis-analyst",
      category: "research",
      title: "Watershed & GIS Mapping Analyst",
      type: "Full-Time / Research Fellowship",
      location: "Central Data Hub, Ongole, Andhra Pradesh",
      stipend: "₹3.6L – ₹4.8L / year",
      desc: "Map check-dams, percolation tanks, and groundwater recharge points using GIS & satellite imagery. Prepare spatial impact reports for NABARD and corporate CSR funders.",
      requirements: [
        "Degree in Geoinformatics, Civil Engineering, Hydrology, or Remote Sensing",
        "Proficiency in QGIS / ArcGIS and spatial data analytics",
        "1-2 years experience in natural resource mapping preferred",
      ],
      badge: "Research & Tech",
    },
    {
      id: "ipm-officer",
      category: "field",
      title: "Sustainable Agriculture & IPM Field Officer",
      type: "Full-Time Field Role",
      location: "Guntur & Palnadu Districts, Andhra Pradesh",
      stipend: "₹3.2L – ₹4.5L / year + Field Allowances",
      desc: "Lead farmer field schools (FFS) on Integrated Pest Management (IPM), Non-Pesticidal Management (NPM), and Direct Seeded Rice (DSR) cultivation across smallholder habitations.",
      requirements: [
        "B.Sc / M.Sc in Agriculture, Agronomy, or Horticulture",
        "Fluency in Telugu & willingness to stay in rural project blocks",
        "Prior experience with FPOs or seed production collectives",
      ],
      badge: "Ground Field Leader",
    },
    {
      id: "fpo-[#221c0c]",
      category: "management",
      title: "FPO Business Development Associate",
      type: "Full-Time Corporate Role",
      location: "Hyderabad / Vijayawada Liaison Office",
      stipend: "₹3.5L – ₹5.0L / year",
      desc: "Facilitate market linkages, organic spice processing, and institutional buyback agreements for 42 Farmer Producer Organizations (FPOs) representing 38,102 smallholders.",
      requirements: [
        "MBA in Agribusiness Management or Rural Management (IRMA/TISS/MANAGE)",
        "Strong negotiation skills with commodity buyers and corporate retail chains",
        "1-3 years experience in agri-commodity supply chains",
      ],
      badge: "Agri-Business",
    },
    {
      id: "child-officer",
      category: "field",
      title: "Child Rights & Education Program Officer",
      type: "Full-Time Field Role",
      location: "Prakasam & Guntur Districts",
      stipend: "₹3.0L – ₹4.2L / year",
      desc: "Supervise residential bridge schools for former child labourers, coordinate girl student bicycle distribution, and strengthen Community Child Protection Committees.",
      requirements: [
        "Degree in Development Studies, Education, or Sociology",
        "Strong passion for child welfare & education access",
        "Excellent documentation and field team management capabilities",
      ],
      badge: "Child Welfare",
    },
  ];

  const roleCategories = [
    { label: "⚡ All Opportunities", val: "all" },
    { label: "🎓 University Fellowships & Internships", val: "internship" },
    { label: "🌾 On-Ground Field Roles", val: "field" },
    { label: "📊 Research & GIS Mapping", val: "research" },
    { label: "🏢 Management & FPO Leads", val: "management" },
  ];

  const filteredJobs = roleCategories.find((c) => c.val === activeRoleFilter)
    ? activeRoleFilter === "all"
      ? jobOpenings
      : jobOpenings.filter((j) => j.category === activeRoleFilter)
    : jobOpenings;

  return (
    <div className="min-h-screen bg-[#fcf8f0] text-[#221c0c] relative overflow-hidden">
      {/* Dynamic Ambient Glow Lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-amber-200/40 blur-[150px]" />
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] rounded-full bg-emerald-200/30 blur-[150px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.18]" />
      </div>

      {/* --- HERO BANNER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#c9a24a]" /> Youth & Professional Careers Portal
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] max-w-4xl mx-auto leading-[1.12]">
          Shape the Future of Rural India: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-700 to-teal-700">Purpose-Driven Careers</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5b6a60] max-w-3xl mx-auto font-medium leading-relaxed">
          Turn your academic passion into ground reality. Apply for university fellowships, student internships with stipend, or full-time field roles with EFFORT NGO across 10 operational states.
        </p>

        {/* Quick Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <a
            href="#job-openings"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Explore 5 Open Roles <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#why-join"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#e5d4a1] text-[#5a461e] font-black text-xs uppercase tracking-wider hover:bg-white hover:border-[#d4af6a] transition-all"
          >
            Why Join EFFORT Team?
          </a>
        </div>
      </section>

      {/* --- WHY JOIN EFFORT? (YOUTH PERKS & BENEFIT CARDS) --- */}
      <section id="why-join" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-black text-[#221c0c] text-base">TISS Empaneled Certificate</h3>
            <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">
              Official university internship completion certificates, capstone credits & recommendation letters.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-black text-[#221c0c] text-base">Monthly Stipends & Allowances</h3>
            <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">
              Fair stipends for student fellows (₹12,000/mo) and full travel & accommodation allowances for field staff.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-black text-[#221c0c] text-base">Direct Veteran Mentorship</h3>
            <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">
              Work alongside senior agronomists, hydrologists, and social scientists with 27 years of ground experience.
            </p>
          </div>

          <div className="p-6 rounded-[28px] bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="font-black text-[#221c0c] text-base">Multi-State Ground Exposure</h3>
            <p className="text-xs text-[#5b6a60] font-medium leading-relaxed">
              Hands-on immersion across 10 Indian states, 42 FPOs, 1,275 SHGs, and 2,702 water structures.
            </p>
          </div>
        </div>
      </section>

      {/* --- OPEN ROLES EXPLORER SECTION --- */}
      <section id="job-openings" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-black uppercase tracking-[0.2em] text-emerald-900 shadow-xs">
            <Briefcase className="w-4 h-4 text-emerald-600" /> Active Career & Internship Openings
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#221c0c]">Current Opportunities</h2>
        </div>

        {/* Role Category Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {roleCategories.map((cat) => {
            const isSelected = activeRoleFilter === cat.val;
            return (
              <button
                key={cat.val}
                onClick={() => setActiveRoleFilter(cat.val)}
                className={`px-5 py-3 rounded-full text-xs font-black tracking-wide transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#221c0c] text-[#f7e4a3] border-2 border-[#d4af6a] shadow-lg scale-105"
                    : "bg-white/90 border border-[#e5d4a1] text-[#5a461e] hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Job Cards Grid */}
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-[32px] bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-sm hover:shadow-xl hover:border-[#d4af6a] transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 font-black text-[10px] uppercase tracking-wider">
                    {job.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-[10px] uppercase">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[#221c0c] leading-snug">{job.title}</h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8a6a1f] font-bold">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-emerald-600" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-600" /> {job.stipend}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5b6a60] font-medium leading-relaxed">{job.desc}</p>

                <div className="pt-2">
                  <span className="text-[11px] font-black uppercase text-[#221c0c]">Key Pre-requisites:</span>
                  <ul className="mt-1 space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-stone-600 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="shrink-0 self-stretch md:self-auto flex flex-col justify-center">
                <a
                  href="#application-form"
                  onClick={() => {
                    setSelectedJob(job);
                    setFormData((prev) => ({ ...prev, role: job.title }));
                  }}
                  className="w-full md:w-auto px-6 py-3.5 rounded-full bg-[#221c0c] hover:bg-black text-[#f7e4a3] border border-[#d4af6a] font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                >
                  Apply For This Role <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUICK APPLICATION FORM --- */}
      <section id="application-form" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-[40px] p-8 sm:p-12 bg-white/95 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_30px_70px_-20px_rgba(180,140,40,0.25)] space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-black uppercase tracking-wider text-amber-900">
              <Send className="w-3.5 h-3.5 text-amber-700" /> Direct HR Candidate Uplink
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#221c0c]">
              Submit Your Career / Internship Application
            </h2>
            <p className="text-sm text-[#5b6a60] font-medium max-w-xl mx-auto">
              Fill in your contact details below and our HR recruitment coordinator will reach out within 3–5 working days.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <BadgeCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-emerald-950">Application Received!</h3>
              <p className="text-sm text-emerald-800 font-medium max-w-md mx-auto">
                Thank you for applying for <strong>{formData.role}</strong> at EFFORT NGO. Your application has been logged with reference ID.
              </p>
              <div className="p-3 rounded-2xl bg-white border border-emerald-200 text-xs font-mono font-bold text-emerald-900 inline-block">
                Candidate Ref: EFFORT-HR-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-emerald-700 text-white font-black text-xs uppercase tracking-wider hover:bg-emerald-800"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Candidate Full Name *
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
                    placeholder="e.g. ramesh@college.edu / email.com"
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
                    College / University / Current Organization
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    placeholder="e.g. TISS Mumbai / Andhra University"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Target Role Applied For *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  >
                    <option value="University Rural Immersion Fellow">University Rural Immersion Fellow (Stipend)</option>
                    <option value="Watershed & GIS Mapping Analyst">Watershed & GIS Mapping Analyst</option>
                    <option value="Sustainable Agriculture & IPM Field Officer">Sustainable Agriculture & IPM Field Officer</option>
                    <option value="FPO Business Development Associate">FPO Business Development Associate</option>
                    <option value="Child Rights & Education Program Officer">Child Rights & Education Program Officer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                    Resume / LinkedIn Profile Link *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/username or Google Drive resume link"
                    className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#221c0c] mb-2">
                  Why do you want to join EFFORT NGO? *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.statement}
                  onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                  placeholder="Share your motivation, relevant coursework, ground skills, or past social work..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border-2 border-stone-200 text-sm font-medium text-[#221c0c] focus:outline-none focus:border-[#d4af6a] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#221c0c] hover:bg-black text-[#f7e4a3] border border-[#d4af6a] font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-400" /> Submit Application To HR Desk
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- STATUTORY ACCREDITATION FOOTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Legal Standing & Academic Accreditation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            EFFORT NGO Statutory Credentials
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
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> MCA Form CSR-1</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> SSE Listed</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> TISS Empaneled</span>
          </div>
        </div>
      </section>
    </div>
  );
}
