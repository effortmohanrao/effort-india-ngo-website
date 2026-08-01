"use client";

import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Image as ImageIcon,
  Flame,
  Search,
  Share2,
  Bookmark,
  CheckCircle2,
  Clock,
  Newspaper,
  Tag,
  X,
  Mail,
  Send,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  {/* Live Ticker Updates */}
  const liveTickerItems = [
    "🚀 Direct Seeded Rice (DSR) water governance expands across 500 acres in Prakasam",
    "💧 50 RO Water Purification Plants now active, serving 16,000 rural families",
    "🌾 42 FPOs & 1,275 SHGs reach 38,102 active farmer & women shareholders",
    "🚲 1,000 Bicycles distributed to high school girl students in remote habitations",
    "📜 EFFORT India NGO listed on Social Stock Exchange (SSE) & TISS Empaneled",
  ];

  {/* News & Field Stories Dataset */}
  const newsItems = [
    {
      id: 1,
      category: "farming",
      categoryName: "Sustainable Farming & IPM",
      title: "Direct Seeded Rice (DSR): How 500 Acres Saved 35% Water in Prakasam District",
      subtitle: "Field report on sustainable rice cultivation without traditional puddling, reducing labor costs and ground water depletion.",
      desc: "In the drought-prone belts of Prakasam district, EFFORT India NGO facilitated the adoption of Direct Seeded Rice (DSR) technology across 500 acres. By eliminating heavy puddling and nursery transplanting, participating smallholder farmers saved over 35% irrigation water while boosting net profit margins by ₹8,500 per acre.",
      fullContent: `Direct Seeded Rice (DSR) is revolutionizing cereal production in Andhra Pradesh. Under EFFORT's climate-smart agriculture initiative, over 500 acres were transitioned away from traditional flood irrigation.

Key Impact Milestones:
• 35% Reduction in Irrigation Water Consumption
• 40% Savings in Manual Labor & Fuel Costs
• Zero Yield Penalty with Improved Root Depth
• Enhanced Soil Micro-organism Health via Non-Puddled Soil

"DSR technology allowed us to sow directly with early monsoon showers, protecting our crop against late-season droughts," shares K. Venkateswarlu, a smallholder farmer from Podili block.`,
      date: "August 2026",
      author: "Program Lead (IPM & Crop Science)",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
      featured: true,
    },
    {
      id: 2,
      category: "water",
      categoryName: "Water & Watersheds",
      title: "2,702 Check-Dams & Water Harvesting Structures Mitigating Rural Drought",
      subtitle: "A 27-year retrospective on how rainwater harvesting revived groundwater levels across 90 NABARD watershed blocks.",
      desc: "Over 27 years of unbroken watershed development, EFFORT India NGO constructed 2,702 water harvesting structures including check-dams, percolation tanks, and farm ponds. Independent surveys confirm groundwater table rejuvenation by 3.2 meters in target sub-basins.",
      fullContent: `Water security forms the bedrock of rural prosperity. As a recognized Resource Support Organization (RSO) under NABARD, EFFORT executed watershed interventions across 90 project areas in Andhra Pradesh and Telangana.

Intervention Highlights:
• 2,702 Water Harvesting & Recharge Structures Constructed
• 50 Community RO Purification Plants installed serving 16,000 families
• 3.2 Meters average rise in static water levels in borewells
• Year-round drinking water security for fluoride-affected habitations.`,
      date: "July 2026",
      author: "Senior Hydrologist & Watershed Lead",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 3,
      category: "education",
      categoryName: "Girl Child & Welfare",
      title: "Bicycles & Classrooms: 2,011 Children Reclaimed from Child Labour",
      subtitle: "How community vigilance and mobility support achieved 21 Child-Labour-Free Villages in Prakasam.",
      desc: "Through dedicated rehabilitation centers and bridge schools, EFFORT India NGO successfully rehabilitated 2,011 former child labourers into mainstream government secondary schools across 21 villages.",
      fullContent: `Childhood belongs in school. Under EFFORT's child rights and education initiatives, special residential bridge schools were operated to prepare out-of-school children for formal grade placement.

Key Achievements:
• 2,011 Former Child Labourers successfully enrolled in formal schools
• 21 Habitations declared 100% Child-Labour-Free
• 1,000 Bicycles distributed to high school girl students to eliminate travel dropouts
• Community Child Protection Committees active in 45 villages.`,
      date: "June 2026",
      author: "Child Welfare Director",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 4,
      category: "csr",
      categoryName: "Corporate CSR Releases",
      title: "EFFORT India NGO Lists on Social Stock Exchange (SSE) & Receives MCA CSR-1 Approval",
      subtitle: "Official statutory update: MCA Registration ID CSR00034988 active for corporate Schedule VII project partnerships.",
      desc: "EFFORT India NGO achieves listing on India's Social Stock Exchange (SSE) and completes MCA Form CSR-1 registration, empowering corporate partners to execute auditable CSR interventions under Section 80G and 12AB exemptions.",
      fullContent: `EFFORT India NGO has officially been listed on the Social Stock Exchange (SSE) and holds active MCA Form CSR-1 Registration (ID: CSR00034988). Corporate CSR leads can now partner for turnkey Schedule VII interventions in Sustainable Agriculture, Water Security, Women SHGs, and Rural Education with complete quarterly impact evaluation reports.`,
      date: "May 2026",
      author: "Head of Corporate Alliances",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 5,
      category: "farming",
      categoryName: "Sustainable Farming & IPM",
      title: "42 Farmer Producer Organizations (FPOs) Empowering 38,102 Smallholders",
      subtitle: "Collective bargaining, organic spice processing, and direct market linkage via Spices Board & NABARD.",
      desc: "By organizing 38,102 smallholder farmers into 42 registered FPOs and 1,275 SHGs, EFFORT enabled direct market access for chilli, turmeric, and pulse growers, eliminating middleman commissions by 22%.",
      fullContent: `Farmer Collectives are driving agrarian profitability. Supported by NABARD and the Spices Board (Ministry of Commerce), EFFORT promoted 42 FPOs across Andhra Pradesh, equipping them with seed processing units, custom hiring centers, and organic certification facilities.`,
      date: "April 2026",
      author: "FPO Ecosystem Specialist",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
  ];

  const categories = [
    { label: "🔥 All Trending News", val: "all" },
    { label: "🌾 Sustainable Farming & IPM", val: "farming" },
    { label: "💧 Water & Watersheds", val: "water" },
    { label: "👧 Girl Child & Education", val: "education" },
    { label: "🏢 Corporate CSR Releases", val: "csr" },
  ];

  const filteredNews = newsItems
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featuredStory = newsItems.find((item) => item.featured) || newsItems[0];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fcf8f0] text-[#221c0c] relative overflow-hidden">
      {/* Background Liquid Ambient Aurora */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full bg-amber-200/40 blur-[150px]" />
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] rounded-full bg-emerald-200/30 blur-[150px]" />
        <div className="absolute inset-0 bg-noise opacity-[0.18]" />
      </div>

      {/* --- LIVE BREAKING FIELD NEWS TICKER --- */}
      <div className="bg-[#1a140b] text-[#f7e4a3] border-b border-[#d4af6a]/40 py-2.5 px-4 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black uppercase text-[10px] tracking-wider shrink-0 shadow-sm animate-pulse">
            <Flame className="w-3.5 h-3.5 fill-slate-950" /> Live Field News
          </span>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee font-bold text-stone-200">
              {liveTickerItems.map((item, idx) => (
                <span key={idx} className="mx-6 inline-flex items-center gap-2">
                  <span className="text-amber-400">✦</span> {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- HERO BANNER & SEARCH BAR --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#e5d4a1]">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#e5d4a1] text-xs font-black uppercase tracking-[0.2em] text-[#8a6a1f] shadow-sm">
              <Newspaper className="w-3.5 h-3.5 text-[#c9a24a]" /> EFFORT Field Journal & Newsroom
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#221c0c] leading-tight">
              Ground Dispatches & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-emerald-700 to-teal-700">Trending Impact Stories</span>
            </h1>
            <p className="text-sm sm:text-base text-[#5b6a60] font-medium max-w-2xl">
              Real-time updates, field case studies, statutory press releases, and scientific agricultural dispatches directly from EFFORT's 10 operational Indian states.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & field reports..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/90 border-2 border-[#e5d4a1] text-xs font-bold text-[#221c0c] placeholder-stone-400 focus:outline-none focus:border-[#d4af6a] shadow-sm transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL SPOTLIGHT: FEATURED COVER STORY --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div
          onClick={() => setSelectedArticle(featuredStory)}
          className="rounded-[40px] p-6 sm:p-10 bg-white/90 backdrop-blur-2xl border-2 border-[#e5d4a1] shadow-[0_30px_70px_-20px_rgba(180,140,40,0.2)] grid lg:grid-cols-12 gap-8 items-center cursor-pointer hover:border-[#d4af6a] transition-all group"
        >
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest shadow-xs">
                ⭐ Featured Cover Story
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-[10px] uppercase">
                {featuredStory.categoryName}
              </span>
              <span className="text-xs text-stone-400 font-bold flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {featuredStory.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#221c0c] group-hover:text-emerald-800 transition-colors leading-snug">
              {featuredStory.title}
            </h2>

            <p className="text-xs sm:text-sm text-[#5b6a60] font-medium leading-relaxed">
              {featuredStory.subtitle}
            </p>

            <p className="text-xs text-stone-500 line-clamp-3 leading-relaxed">
              {featuredStory.desc}
            </p>

            <div className="pt-3 flex items-center justify-between border-t border-[#e5d4a1]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-black text-xs">
                  E
                </div>
                <span className="text-xs font-bold text-[#221c0c]">{featuredStory.author}</span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 group-hover:translate-x-1 transition-transform">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden border-2 border-stone-200 shadow-md relative">
            <img
              src={featuredStory.image}
              alt={featuredStory.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
              📅 Published: {featuredStory.date}
            </div>
          </div>
        </div>
      </section>

      {/* --- CATEGORY FILTER BAR & NEWS GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.val;
            return (
              <button
                key={cat.val}
                onClick={() => setActiveCategory(cat.val)}
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

        {/* Stories Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-[#e5d4a1] space-y-3">
            <Search className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-lg font-black text-[#221c0c]">No Matching Field Stories Found</h3>
            <p className="text-xs text-[#5b6a60]">Try searching for different keywords like 'water', 'rice', 'CSR', or 'FPO'.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="bg-white/90 backdrop-blur-xl border-2 border-[#e5d4a1] rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#221c0c]/80 backdrop-blur-md text-[#f7e4a3] border border-[#d4af6a]/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                      {item.categoryName}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-stone-400 font-bold">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-600" /> {item.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-emerald-600" /> {item.readTime}</span>
                    </div>

                    <h3 className="text-lg font-black text-[#221c0c] group-hover:text-emerald-800 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5b6a60] font-medium line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-stone-500">{item.author}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-700 group-hover:translate-x-1 transition-transform">
                    Read Article <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- ARTICLE READER POPUP MODAL --- */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-[36px] border-2 border-[#e5d4a1] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto my-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-stone-100 border border-stone-300 text-stone-700 flex items-center justify-center hover:bg-stone-200 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-[10px] uppercase">
                {selectedArticle.categoryName}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#221c0c] leading-snug">{selectedArticle.title}</h2>
              <div className="flex items-center gap-4 text-xs text-stone-500 font-bold">
                <span>📅 {selectedArticle.date}</span>
                <span>✍️ {selectedArticle.author}</span>
                <span>⏱️ {selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden border border-stone-200">
              <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose max-w-none text-xs sm:text-sm text-[#3d3219] font-medium leading-relaxed whitespace-pre-line space-y-4">
              {selectedArticle.fullContent || selectedArticle.desc}
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs font-black text-[#8a6a1f]">EFFORT India NGO Official Dispatch</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-[#221c0c] text-[#f7e4a3] font-black text-xs uppercase"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- EDITORIAL NEWSLETTER DISPATCH BOX --- */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[40px] p-8 sm:p-12 bg-gradient-to-br from-[#1a140b] to-[#271d10] text-white border-2 border-[#d4af6a]/60 shadow-2xl text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-[#f7e4a3] flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            Subscribe to EFFORT Field Dispatches
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto font-medium leading-relaxed">
            Receive monthly updates on watershed progress, Direct Seeded Rice (DSR) impact metrics, FPO achievements, and official press releases directly in your inbox.
          </p>

          {newsletterSubmitted ? (
            <div className="p-4 rounded-2xl bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 text-xs font-black animate-fade-in max-w-md mx-auto">
              ✓ Subscribed Successfully! Thank you for following EFFORT's ground journey.
            </div>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your corporate or personal email..."
                className="flex-1 px-5 py-3.5 rounded-full bg-stone-900/90 border border-stone-700 text-xs font-medium text-white placeholder-stone-400 focus:outline-none focus:border-[#d4af6a]"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-[#d4af6a] text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                Subscribe <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- STATUTORY ACCREDITATION FOOTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-[36px] p-8 sm:p-10 bg-[#1a140b] text-white border-2 border-[#d4af6a]/60 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified Legal Standing & Regulatory Accreditation
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#f7e4a3]">
            EFFORT India NGO Statutory Registration Credentials
          </h3>
          <p className="text-sm sm:text-base text-stone-300 max-w-3xl mx-auto leading-relaxed font-medium">
            EFFORT India NGO maintains active Society Registration (340/1999), Section 80G Tax Exemption, Section 12AB Registration, FCRA Renewal, MCA Form CSR-1 Approval (CSR00034988), NITI Aayog DARPAN ID, Social Stock Exchange (SSE) listing, and TISS National Hub Empanlement.
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
