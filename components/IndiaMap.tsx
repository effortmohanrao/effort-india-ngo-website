"use client";

import React, { useState, useMemo } from "react";
import { MapPin, Sparkles, ArrowRight } from "lucide-react";
import { INDIA_GEO } from "./indiaMapGeo";

export type StateData = {
  id: string;
  code: string;
  name: string;
  projectsCount: number;
  beneficiaries: string;
  villages: string;
  districts: string[];
  partners: string[];
  categories: string[];
  flagshipProject: string;
  description: string;
  path: string;
  center: { x: number; y: number };
  // R2 folders under website/programs/{completed|ongoing}/ with real field photos
  // taken in this state. Left empty when no matched album covers this state.
  photoFolders?: { folder: string; status: "completed" | "ongoing" }[];
};

export const IMPACT_STATES: Record<string, StateData> = {
  "IN-AP": {
    id: "ap",
    code: "IN-AP",
    name: "Andhra Pradesh",
    projectsCount: 45,
    beneficiaries: "1,85,000+ Families",
    villages: "1,200+ Villages",
    districts: ["Prakasam", "Guntur", "Kurnool", "Nellore", "West Godavari", "Kadapa", "Chittoor"],
    partners: ["Spices Board", "NABARD", "IFAD", "Dept of Agriculture AP", "CARE India", "Bayer", "Godfrey Phillips"],
    categories: ["Sustainable Agriculture", "Natural Resource Management", "Women Livelihoods & FPOs"],
    flagshipProject: "IFAD Drought Mitigation, 42 FPOs (23,352 Shareholders) & 2,702 Water Structures",
    description: "State HQ and primary operational hub since 1999. Operating comprehensive watershed management, 2,702 water harvesting structures, 42 FPOs, 1,275 SHGs, and 3 Biodiversity Parks (50,000 species).",
    center: { x: 420, y: 650 },
    path: "",
    photoFolders: [
      { folder: "reliance-foundation", status: "ongoing" },
      { folder: "fpo-promotion-nabard", status: "ongoing" },
      { folder: "biodiversity-water-gpi", status: "ongoing" },
      { folder: "dka-nrm-kurnool", status: "ongoing" },
      { folder: "jsw-water-governance", status: "ongoing" },
      { folder: "prakasam-nri-schools", status: "ongoing" },
      { folder: "sustainable-wellbeing-women", status: "ongoing" },
      { folder: "apchip", status: "completed" },
      { folder: "apsacs-hiv-aids", status: "completed" },
      { folder: "millepede-watershed", status: "completed" },
      { folder: "spices-board-ipm-chilli", status: "completed" },
      { folder: "ipm-chilli-iffco", status: "completed" },
      { folder: "nabard-programs", status: "completed" },
    ],
  },
  "IN-TG": {
    id: "tg",
    code: "IN-TG",
    name: "Telangana",
    projectsCount: 1,
    beneficiaries: "Small & Marginal Farmers",
    villages: "Khammam District",
    districts: ["Khammam"],
    partners: ["Syngenta India Ltd"],
    categories: ["Sustainable Agriculture", "Farmer Market Access"],
    flagshipProject: "Promotion of Rythu Bazaar — Direct Farmer-to-Consumer Market Access",
    description: "Creating marketing infrastructure at Khammam District so small & marginal farmers can sell their produce directly to consumers, part of EFFORT's wayside/Rythu Bazaar market access initiative.",
    center: { x: 340, y: 520 },
    path: "",
  },
  "IN-MH": {
    id: "mh",
    code: "IN-MH",
    name: "Maharashtra",
    projectsCount: 8,
    beneficiaries: "60,000+ Farmers",
    villages: "180+ Villages",
    districts: ["Yavatmal", "Wardha", "Amravati", "Nashik", "Jalna"],
    partners: ["Syngenta", "DuPont", "CropLife India"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Responsible Pesticide Usage & IPM Cotton/Soybean Training",
    description: "Empowering 60,000+ cotton and soybean farmers with Integrated Pest Management (IPM), personal protective equipment, and responsible input usage.",
    center: { x: 250, y: 480 },
    path: "",
  },
  "IN-PB": {
    id: "pb",
    code: "IN-PB",
    name: "Punjab",
    projectsCount: 5,
    beneficiaries: "45,000+ Farmers",
    villages: "110+ Villages",
    districts: ["Abohar", "Bhatinda", "Ferozepur", "Muktsar"],
    partners: ["Bayer CropScience", "Corteva Agriscience"],
    categories: ["Sustainable Agriculture", "WASH & School Sanitation"],
    flagshipProject: "Direct Seeded Rice (DSR) & WASH Abohar Region",
    description: "Transforming water-intensive paddy to Direct Seeded Rice (DSR) saving 35% water, and setting up rural school sanitation & hygiene education (SAHY).",
    center: { x: 190, y: 130 },
    path: "",
    photoFolders: [{ folder: "dsr-punjab-haryana-mp-up", status: "completed" }],
  },
  "IN-HR": {
    id: "hr",
    code: "IN-HR",
    name: "Haryana",
    projectsCount: 4,
    beneficiaries: "25,000+ Farmers",
    villages: "75+ Villages",
    districts: ["Sirsa", "Fatehabad", "Hisar"],
    partners: ["Corteva Agriscience", "CropLife India"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Direct Seeded Rice (DSR) & Bee Pollination in Mustard",
    description: "Training paddy and mustard farmers on resource-conserving cultivation, soil health, and apiculture integration for crop yield boosting.",
    center: { x: 250, y: 180 },
    path: "",
    photoFolders: [
      { folder: "dsr-punjab-haryana-mp-up", status: "completed" },
      { folder: "mustard-bee-pollination", status: "completed" },
    ],
  },
  "IN-MP": {
    id: "mp",
    code: "IN-MP",
    name: "Madhya Pradesh",
    projectsCount: 4,
    beneficiaries: "30,000+ Farmers",
    villages: "95+ Villages",
    districts: ["Hoshangabad", "Sehore", "Ujjain"],
    partners: ["Corteva Agriscience"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Direct Seeded Rice (DSR) & Sustainable Farming Demonstration",
    description: "Empowering smallholders with direct seeding paddy techniques, soil conservation, and balanced plant nutrition across Central India.",
    center: { x: 300, y: 380 },
    path: "",
    photoFolders: [{ folder: "dsr-punjab-haryana-mp-up", status: "completed" }],
  },
  "IN-UP": {
    id: "up",
    code: "IN-UP",
    name: "Uttar Pradesh",
    projectsCount: 5,
    beneficiaries: "40,000+ Farmers",
    villages: "120+ Villages",
    districts: ["Varanasi", "Mirzapur", "Chandauli"],
    partners: ["Corteva Agriscience", "Spices Board"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Direct Seeded Rice & Responsible Chemical Usage Training",
    description: "Promoting DSR technology and IPM in Eastern UP rice belts to mitigate ground water depletion and increase farm net profitability.",
    center: { x: 380, y: 280 },
    path: "",
    photoFolders: [{ folder: "dsr-punjab-haryana-mp-up", status: "completed" }],
  },
  "IN-KA": {
    id: "ka",
    code: "IN-KA",
    name: "Karnataka",
    projectsCount: 4,
    beneficiaries: "15,000+ Farmers",
    villages: "60+ Villages",
    districts: ["Chikmagalur", "Hassan", "Kodagu"],
    partners: ["Fairtrade International", "NAAP"],
    categories: ["Sustainable Agriculture", "Coffee Value Chain"],
    flagshipProject: "Coffee Smallholder Resilient Cultivation & Fairtrade Empowerment",
    description: "Building resilient coffee farming communities through sustainable shade-grown coffee practices, organic accreditation, and fair price linkages.",
    center: { x: 320, y: 680 },
    path: "",
  },
  "IN-TN": {
    id: "tn",
    code: "IN-TN",
    name: "Tamil Nadu",
    projectsCount: 2,
    beneficiaries: "Shared multi-state footprint",
    villages: "Multi-district coverage",
    districts: ["Oilseed & coffee growing belt"],
    partners: ["GIZ, Germany", "Fairtrade International", "NAAP"],
    categories: ["Sustainable Agriculture", "Coffee & Oilseed Value Chain"],
    flagshipProject: "Sustainability in Oil Seed Production & Coffee Development",
    description: "Improving oilseed crop productivity and farmer incomes with GIZ, alongside coffee smallholder resilience and Fairtrade-certified organic orchard support shared with Karnataka and Kerala.",
    center: { x: 370, y: 830 },
    path: "",
  },
  "IN-KL": {
    id: "kl",
    code: "IN-KL",
    name: "Kerala",
    projectsCount: 2,
    beneficiaries: "Shared multi-state footprint",
    villages: "Multi-district coverage",
    districts: ["Coffee growing belt"],
    partners: ["Fairtrade International", "NAAP"],
    categories: ["Sustainable Agriculture", "Coffee Value Chain"],
    flagshipProject: "Coffee Development & Fairtrade Organic Orchard Resilience",
    description: "Coffee smallholder resilience building and Fairtrade-certified organic orchard support, delivered as part of a joint Karnataka–Kerala–Tamil Nadu programme.",
    center: { x: 280, y: 850 },
    path: "",
  },
};

interface IndiaMapProps {
  selectedStateCode?: string;
  onSelectState: (code: string) => void;
  variant?: "light" | "dark";
}

export default function IndiaMap({ selectedStateCode, onSelectState, variant = "light" }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [hoveredInactive, setHoveredInactive] = useState<string | null>(null);

  const nameToState = useMemo(() => {
    const map = new Map<string, StateData>();
    Object.values(IMPACT_STATES).forEach((s) => map.set(s.name, s));
    return map;
  }, []);

  const isLight = variant === "light";

  return (
    <div
      className={`relative w-full aspect-[1000/1136] rounded-[32px] border-2 p-4 sm:p-6 select-none flex flex-col justify-between transition-all duration-300 ${
        isLight
          ? "bg-[#fcf8f0] border-[#e5d4a1] shadow-[0_20px_50px_-15px_rgba(180,140,40,0.15)]"
          : "bg-[#141009]/95 backdrop-blur-2xl border-[#d4af6a]/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
      }`}
    >
      {/* Background Soft Glow */}
      {isLight ? (
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-emerald-50/20 to-transparent" />
      ) : (
        <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#362916] via-[#1a140b] to-[#0d0a06]" />
      )}

      {/* Header Overlay */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className={`text-xs font-black uppercase tracking-[0.18em] ${isLight ? "text-[#5a461e]" : "text-[#f7e4a3]"}`}>
            Official GIS Region India Map
          </span>
        </div>
        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
          isLight ? "bg-[#d4af6a]/20 border border-[#d4af6a]/60 text-[#8a6a1f]" : "bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-[#d4af6a]"
        }`}>
          <Sparkles className="w-3 h-3 text-[#c9a24a]" /> 10 Operating States
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center py-2">
        <svg viewBox="0 0 1000 1136" className="w-full h-full max-h-[640px] filter drop-shadow-md">
          <defs>
            <linearGradient id="activeStateGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af6a" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="selectedStateGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>

          {/* Render accurate India region geography */}
          <g id="region-map__map--flat-map" className="region-map__map--flat-map">
            {INDIA_GEO.map((region) => {
              const state = nameToState.get(region.name);

              if (!state) {
                // Non-operating state/UT: muted soft gray path
                return (
                  <path
                    key={region.id}
                    d={region.d}
                    fill={hoveredInactive === region.name ? (isLight ? "rgba(220,215,200,0.8)" : "rgba(255,255,255,0.12)") : (isLight ? "rgba(235,230,218,0.65)" : "rgba(255,255,255,0.05)")}
                    stroke={isLight ? "#d1c7b7" : "rgba(255,255,255,0.15)"}
                    strokeWidth="1"
                    className="transition-all duration-300 cursor-default"
                    onMouseEnter={() => setHoveredInactive(region.name)}
                    onMouseLeave={() => setHoveredInactive(null)}
                  >
                    <title>{region.name}</title>
                  </path>
                );
              }

              const isSelected = selectedStateCode === state.code;
              const isHovered = hoveredState?.code === state.code;

              return (
                <path
                  key={region.id}
                  d={region.d}
                  fill={isSelected ? "url(#selectedStateGradLight)" : isHovered ? "url(#activeStateGradLight)" : "#d4af6a"}
                  stroke={isSelected ? "#78350f" : isHovered ? "#047857" : "#ffffff"}
                  strokeWidth={isSelected || isHovered ? "3" : "1.8"}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: isSelected || isHovered ? "drop-shadow(0 4px 12px rgba(180,140,40,0.4))" : "none",
                  }}
                  onClick={() => onSelectState(state.code)}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                >
                  <title>{state.name}</title>
                </path>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Floating Hover Card Preview */}
      {hoveredState && (
        <div className={`absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-2xl border shadow-2xl flex items-center justify-between animate-fade-in-up ${
          isLight
            ? "bg-white/95 backdrop-blur-xl border-[#d4af6a] text-[#221c0c]"
            : "bg-[#1f1910]/95 backdrop-blur-xl border-[#d4af6a]/80 text-[#f7e4a3]"
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className={`text-xs font-black ${isLight ? "text-[#221c0c]" : "text-[#f7e4a3]"}`}>{hoveredState.name}</p>
              <p className={`text-[10px] font-bold ${isLight ? "text-[#7a6f55]" : "text-[#c9a24a]"}`}>{hoveredState.projectsCount} Projects · {hoveredState.beneficiaries}</p>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full border border-emerald-300">
            Click to Inspect
          </span>
        </div>
      )}

      {/* Footer Instruction Ribbon */}
      <div className={`relative z-20 pt-3 border-t flex items-center justify-between text-[11px] font-bold ${
        isLight ? "border-[#e5d4a1] text-[#7a6f55]" : "border-[#d4af6a]/30 text-[#c9a24a]"
      }`}>
        <span>✨ Click any highlighted state to inspect project footprint</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-emerald-700 font-black">
          {Object.keys(IMPACT_STATES).length} Active Field States <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
