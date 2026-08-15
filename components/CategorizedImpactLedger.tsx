"use client";

import React, { useState } from "react";
import {
  Sprout,
  Droplets,
  Users,
  TrendingUp,
  HeartPulse,
  Award,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Trees,
  Coins,
  DollarSign,
  Percent,
  Waves,
  Globe,
  Home,
  Heart,
  Briefcase,
  Bike,
  Sparkles,
  Stethoscope,
  Activity,
  CheckCircle2,
  Building2,
  PieChart,
} from "lucide-react";

type CounterItem = {
  value: string;
  label: string;
  desc?: string;
  icon: typeof Sprout;
};

type ImpactCategory = {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Sprout;
  accentColor: string;
  counters: CounterItem[];
};

export const officialPDFImpactCategories: ImpactCategory[] = [
  {
    id: "agri",
    title: "1. Sustainable Agriculture & Farming Resilience",
    subtitle: "GAP farmer training, organic farming, Direct Seeded Rice & crop diversification across 10 states",
    icon: Sprout,
    accentColor: "#e6c687", // Warm Cream Gold
    counters: [
      { value: "1.68 Lakh+", label: "GAP FARMER TRAINING", desc: "1,68,000 Trained in Good Agricultural Practices", icon: BookOpen },
      { value: "1.03 Lakh", label: "SUSTAINABLE ACRES", desc: "1,03,062 Acres under Climate Resilient Farming", icon: Sprout },
      { value: "52,600", label: "ORGANIC & IPM FARMERS", desc: "Farmers practicing IPDM & organic inputs", icon: ShieldCheck },
      { value: "35,000", label: "DSR WATER FARMERS", desc: "Farmers shifted to DSR saving 50% water", icon: Droplets },
      { value: "50,000", label: "DSR FARMLAND ACRES", desc: "Acres under DSR reducing water usage", icon: Waves },
      { value: "18,750", label: "DIVERSIFIED ACRES", desc: "Promoted crop diversification (14,100 farmers)", icon: Trees },
      { value: "7,500", label: "OILSEED ACRES", desc: "Climate-resilient oilseeds (30% income growth)", icon: PieChart },
      { value: "3,000", label: "HORTICULTURE ACRES", desc: "High-value fruit, orchard & vegetable farming", icon: Sprout },
      { value: "30%", label: "COST REDUCTION", desc: "Cultivation cost savings via IPDM techniques", icon: Percent },
      { value: "15%", label: "PRICE REALIZATION", desc: "Higher produce pricing via quality linkages", icon: TrendingUp },
      { value: "60%", label: "ADDITIONAL INCOME", desc: "Net income increase in organic farming", icon: Coins },
    ]
  },
  {
    id: "nrm",
    title: "2. Natural Resource Management & Watersheds",
    subtitle: "Water harvesting capacity, check-dams, wasteland rehabilitation & ecological restoration",
    icon: Droplets,
    accentColor: "#e6c687",
    counters: [
      { value: "10.75M m³", label: "WATER HARVESTING CAPACITY", desc: "1.075 Cr m³ water storage created", icon: Waves },
      { value: "75,092", label: "WATER SECURITY FARMERS", desc: "Farmers benefiting from harvesting structures", icon: Droplets },
      { value: "1,03,062", label: "NRM SECURED ACRES", desc: "Farmland with secured water & soil health", icon: Sprout },
      { value: "1 Lakh+", label: "CONSERVATION TRAINED", desc: "Trained in water, soil & vegetation conservation", icon: GraduationCap },
      { value: "90,000 Ha", label: "ECOLOGICAL RESTORATION", desc: "Land treated under watershed measures", icon: Trees },
      { value: "20,000 Ha", label: "WASTELAND REHABILITATED", desc: "Wasteland brought into productive farming", icon: Globe },
      { value: "3.5M m³", label: "ADDITIONAL STORAGE WATER", desc: "Additional storage via check-dams", icon: Waves },
      { value: "10,000", label: "LANDLESS FAMILIES", desc: "Landless families empowered via NRM", icon: Home },
      { value: "5,000", label: "MIGRATION PREVENTED", desc: "Distress migration prevented", icon: ShieldCheck },
      { value: "30 Acres", label: "BIODIVERSITY PARKS", desc: "Wasteland transformed to flora parks", icon: Trees },
    ]
  },
  {
    id: "cbo",
    title: "3. Community Based Organisations & Collectives",
    subtitle: "Women Self-Help Groups, MACS Cooperatives, and Farmer Producer Organisations (FPOs)",
    icon: Users,
    accentColor: "#e6c687",
    counters: [
      { value: "1,275", label: "SELF-HELP GROUPS (SHGs)", desc: "Women Self-Help Groups established", icon: Users },
      { value: "15,000+", label: "WOMEN SHG MEMBERS", desc: "Women empowered via micro-enterprises", icon: Heart },
      { value: "51", label: "COOPERATIVE SOCIETIES", desc: "Mutually Aided Cooperative Societies", icon: Building2 },
      { value: "17,000+", label: "COOPERATIVE MEMBERS", desc: "Women members in MACS cooperatives", icon: Users },
      { value: "40", label: "FPOs PROMOTED", desc: "FPOs with 25,000 Farmer Shareholders", icon: Briefcase },
    ]
  },
  {
    id: "livelihoods",
    title: "4. Livelihoods & Skill Training (Calculated Total)",
    subtitle: "Combined income generation units and vocational skill training beneficiaries across 435 villages",
    icon: TrendingUp,
    accentColor: "#e6c687",
    counters: [
      { value: "6,817", label: "LIVELIHOOD & SKILL BENEFICIARIES", desc: "3,101 Women Units + 3,716 Skill Trained", icon: Award },
      { value: "3,101", label: "WOMEN INCOME UNITS", desc: "Dairy, Poultry, Veg & Petty Biz Units", icon: Briefcase },
      { value: "3,716", label: "SKILL TRAINED INDIVIDUALS", desc: "Tailoring, Computer, IPM & Lab Tech", icon: GraduationCap },
      { value: "1,630", label: "TAILORING & EMBROIDERY", desc: "Women trained in tailoring units", icon: Sparkles },
      { value: "1,630", label: "DAIRY INCOME UNITS", desc: "Women managing dairy units", icon: Home },
    ]
  },
  {
    id: "social",
    title: "5. Social Development Initiatives",
    subtitle: "Child welfare & rehabilitation, school enrollment, fluoride-safe water, RO plants, toilets & health camps",
    icon: HeartPulse,
    accentColor: "#e6c687",
    counters: [
      { value: "2,011", label: "CHILD LABOURERS REHABILITATED", desc: "Rescued from child labour & admitted to schools", icon: GraduationCap },
      { value: "367", label: "GIRL CHILDREN RESCUED", desc: "Girl children rehabilitated & educated", icon: Heart },
      { value: "21", label: "CHILD-LABOUR-FREE VILLAGES", desc: "Villages with 100% elementary education", icon: CheckCircle2 },
      { value: "1,000", label: "GIRL STUDENT BICYCLES", desc: "Bicycles distributed to girl students", icon: Bike },
      { value: "1.50 Lakh+", label: "WASH & HEALTH OUTREACH", desc: "Population reached with health education", icon: Activity },
      { value: "1.00 Lakh", label: "FLUORIDE-SAFE WATER", desc: "Population in 50 fluoride-affected villages", icon: Sparkles },
      { value: "16,000", label: "RO WATER FAMILIES", desc: "Families safe water via 50 RO plants", icon: Home },
      { value: "30,000", label: "FREE MEDICAL PATIENTS", desc: "Patients treated in free health camps", icon: Stethoscope },
      { value: "10,000", label: "BOREWELL WATER FAMILIES", desc: "Families supplied water via 150 borewells", icon: Droplets },
      { value: "13,580", label: "TOILETS RENOVATED & BUILT", desc: "7,051 Renovated + 6,529 Built Toilets", icon: Home },
      { value: "50", label: "RO PLANTS ESTABLISHED", desc: "RO plants in fluoride villages", icon: Sparkles },
      { value: "150", label: "BOREWELLS BUILT", desc: "Borewells installed across 115 villages", icon: Waves },
      { value: "500", label: "WASH SCHOOLS COVERED", desc: "Schools in AP & Punjab WASH campaigns", icon: BookOpen },
    ]
  }
];

export default function CategorizedImpactLedger() {
  // Strict Single Category Tab Selection (Default: "agri" Sustainable Agriculture)
  const [selectedTab, setSelectedTab] = useState<string>("agri");

  // Find the exact single selected category object
  const currentCategory = officialPDFImpactCategories.find((c) => c.id === selectedTab) ?? officialPDFImpactCategories[0];
  const IconComp = currentCategory.icon;
  const currentCategoryIndex = officialPDFImpactCategories.findIndex((c) => c.id === currentCategory.id);

  return (
    <div className="mt-8 space-y-6 relative">
      
      {/* Cream & Maroon Ambient Lighting Background Glow */}
      <div className="pointer-events-none absolute -top-16 left-1/4 w-[450px] h-[450px] bg-[#8c1c2b]/20 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#e6c687]/10 rounded-full blur-[130px]" />

      {/* Cream & Maroon Tab Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-2xl bg-[#1c0407]/90 border border-[#8c1c2b]/40 backdrop-blur-2xl max-w-5xl mx-auto shadow-2xl">
        {officialPDFImpactCategories.map((c, i) => {
          const TabIcon = c.icon;
          const isActive = selectedTab === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedTab(c.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-black tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1.5 border ${
                isActive
                  ? "bg-gradient-to-r from-[#fdfbf7] via-[#f5e6ca] to-[#e6c687] text-[#2d0a0e] border-[#fdfbf7] shadow-[0_0_20px_rgba(253,251,247,0.3)] scale-105"
                  : "bg-[#2a080c]/60 text-[#f5d796]/80 border-[#8c1c2b]/30 hover:border-[#e6c687]/50 hover:text-white"
              }`}
            >
              <TabIcon className={`w-3.5 h-3.5 ${isActive ? "text-[#2d0a0e]" : "text-[#e6c687]"}`} />
              <span>0{i + 1}. {c.title.split(". ")[1]?.split(" &")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Category View ONLY (Cream & Maroon Theme, Compact Boxes with Specific Icons) */}
      <div className="animate-fade-in">
        <div className="rounded-[28px] border border-[#8c1c2b]/40 bg-gradient-to-br from-[#2a080c] via-[#1f0508] to-[#140305] backdrop-blur-2xl overflow-hidden shadow-2xl">
          
          {/* Header Banner */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#3b0910] via-[#2a080c] to-[#3b0910] border-b border-[#8c1c2b]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#e6c687]/40 bg-[#8c1c2b]/30 text-[#e6c687] shrink-0 shadow-md">
                <IconComp className="w-5 h-5 text-[#e6c687]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black text-[#2d0a0e] bg-[#e6c687] uppercase tracking-widest">
                    SECTOR 0{currentCategoryIndex + 1}
                  </span>
                  <span className="text-[11px] font-black text-[#e6c687] uppercase tracking-wider">Verified PDF Record</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#fdfbf7] tracking-tight mt-0.5">
                  {currentCategory.title}
                </h3>
              </div>
            </div>

            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-[#e6c687] bg-[#8c1c2b]/40 border border-[#8c1c2b]/60">
              {currentCategory.counters.length} Compact Metrics
            </span>
          </div>

          {/* Compact Counter Cards Grid with Related Icons (Cream & Maroon Theme) */}
          <div className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {currentCategory.counters.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-2xl border border-[#8c1c2b]/40 bg-gradient-to-b from-[#2d0a0e]/90 to-[#190407]/90 p-3.5 sm:p-4 hover:border-[#e6c687]/70 shadow-lg hover:shadow-[0_10px_25px_rgba(230,198,135,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  {/* Top Header inside box: Icon + Number */}
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="w-7 h-7 rounded-lg bg-[#8c1c2b]/30 border border-[#e6c687]/30 flex items-center justify-center text-[#e6c687] group-hover:scale-110 group-hover:bg-[#e6c687] group-hover:text-[#2d0a0e] transition-all">
                        <StatIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <p className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-[#fdfbf7] group-hover:text-[#e6c687] transition-colors leading-none">
                      {stat.value}
                    </p>
                    
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e6c687] group-hover:text-[#fdfbf7] transition-colors mt-2 leading-tight">
                      {stat.label}
                    </p>
                  </div>

                  {stat.desc && (
                    <p className="text-[9px] sm:text-[10px] text-[#f5d796]/70 mt-2 pt-1.5 border-t border-[#8c1c2b]/40 font-medium leading-tight line-clamp-2">
                      {stat.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
}
