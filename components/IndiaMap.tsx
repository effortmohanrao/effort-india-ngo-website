"use client";

import React, { useState } from "react";
import { MapPin, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

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
};

export const IMPACT_STATES: Record<string, StateData> = {
  "IN-AP": {
    id: "ap",
    code: "IN-AP",
    name: "Andhra Pradesh",
    projectsCount: 35,
    beneficiaries: "4,50,000+",
    villages: "650+ Villages",
    districts: ["Prakasam", "Guntur", "Kurnool", "Nellore", "West Godavari", "Kadapa", "Chittoor"],
    partners: ["Spices Board", "NABARD", "IFAD", "Dept of Agriculture AP", "CARE India", "Bayer"],
    categories: ["Sustainable Agriculture", "Natural Resource Management", "Community Health"],
    flagshipProject: "Andhra Pradesh Drought Mitigation Project (IFAD) & IPM Chilli",
    description: "State HQ and primary field hub. Operating comprehensive watershed management, IPM organic farming, drought resilience for 45 GPs, and mobile veterinary clinics.",
    center: { x: 300, y: 440 },
    path: "M 255 420 L 290 400 L 325 410 L 345 440 L 330 470 L 305 490 L 285 470 L 265 440 Z",
  },
  "IN-TG": {
    id: "tg",
    code: "IN-TG",
    name: "Telangana",
    projectsCount: 8,
    beneficiaries: "65,000+",
    villages: "140+ Villages",
    districts: ["Nalgonda", "Khammam", "Mahabubnagar", "Warangal"],
    partners: ["Balavikasa", "DWMA", "NABARD", "WASSAN"],
    categories: ["Natural Resource Management", "Community Health"],
    flagshipProject: "Tank De-silting & Community Water Management",
    description: "Restoring rural water bodies, organizing community tank management committees, and promoting micro-irrigation for marginal farmers.",
    center: { x: 280, y: 390 },
    path: "M 250 380 L 285 365 L 305 385 L 290 415 L 255 415 L 245 395 Z",
  },
  "IN-MH": {
    id: "mh",
    code: "IN-MH",
    name: "Maharashtra",
    projectsCount: 6,
    beneficiaries: "60,000+",
    villages: "180+ Villages",
    districts: ["Yavatmal", "Wardha", "Amravati", "Nashik", "Jalna"],
    partners: ["Syngenta", "DuPont", "CropLife India"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Responsible Pesticide Usage & Safe Spraying Campaign",
    description: "Empowering 60,000+ cotton and soybean farmers with Integrated Pest Management (IPM), personal protective equipment, and responsible stewardship.",
    center: { x: 210, y: 360 },
    path: "M 150 330 L 220 320 L 255 365 L 245 390 L 175 410 L 140 370 Z",
  },
  "IN-PB": {
    id: "pb",
    code: "IN-PB",
    name: "Punjab",
    projectsCount: 4,
    beneficiaries: "90,000+",
    villages: "110+ Villages",
    districts: ["Abohar", "Bhatinda", "Ferozepur", "Muktsar"],
    partners: ["Bayer CropScience", "Corteva Agriscience"],
    categories: ["Sustainable Agriculture", "Child Development"],
    flagshipProject: "WASH Farmer Mindset Change & Direct Seeded Rice (DSR)",
    description: "Transforming water-intensive paddy cultivation to Direct Seeded Rice (DSR) and establishing rural school sanitation and hygiene education.",
    center: { x: 175, y: 155 },
    path: "M 160 140 L 190 135 L 195 165 L 165 175 Z",
  },
  "IN-HR": {
    id: "hr",
    code: "IN-HR",
    name: "Haryana",
    projectsCount: 3,
    beneficiaries: "35,000+",
    villages: "75+ Villages",
    districts: ["Sirsa", "Fatehabad", "Hisar"],
    partners: ["Corteva Agriscience", "CropLife India"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Direct Seeded Rice (DSR) & Bee Pollination",
    description: "Training paddy and mustard farmers on resource-conserving cultivation and beekeeping for enhanced crop yields.",
    center: { x: 195, y: 185 },
    path: "M 185 170 L 210 165 L 215 195 L 185 200 Z",
  },
  "IN-MP": {
    id: "mp",
    code: "IN-MP",
    name: "Madhya Pradesh",
    projectsCount: 4,
    beneficiaries: "40,000+",
    villages: "120+ Villages",
    districts: ["Ujjain", "Dewas", "Indore", "Dhar"],
    partners: ["Corteva Agriscience", "Tata Trusts"],
    categories: ["Sustainable Agriculture", "Natural Resource Management"],
    flagshipProject: "Bee Pollination in Mustard & Climate Resilient Farming",
    description: "Enhancing mustard crop productivity via apiculture integration and training smallholder farmers in drought-resilient soil conservation.",
    center: { x: 200, y: 275 },
    path: "M 160 250 L 240 240 L 260 280 L 205 315 L 155 285 Z",
  },
  "IN-UP": {
    id: "up",
    code: "IN-UP",
    name: "Uttar Pradesh",
    projectsCount: 3,
    beneficiaries: "45,000+",
    villages: "90+ Villages",
    districts: ["Mathura", "Agra", "Aligarh"],
    partners: ["Corteva Agriscience", "CropLife India"],
    categories: ["Sustainable Agriculture"],
    flagshipProject: "Sustainable Rice Farming (DSR) & Mustard Productivity",
    description: "Scaling Direct Seeded Rice technology to conserve ground water and improve farm income security across western UP.",
    center: { x: 250, y: 215 },
    path: "M 215 190 L 290 200 L 295 245 L 235 240 Z",
  },
  "IN-KA": {
    id: "ka",
    code: "IN-KA",
    name: "Karnataka",
    projectsCount: 4,
    beneficiaries: "25,000+",
    villages: "85+ Villages",
    districts: ["Bengaluru Urban", "Ramanagara", "Kolar"],
    partners: ["AME Bangalore", "NABARD", "Local CBOs"],
    categories: ["Child, Women Development & Livelihoods", "Sustainable Agriculture"],
    flagshipProject: "Swavalamban Women Livelihoods & Smart Classrooms",
    description: "Empowering women SHGs with vermi-compost production units, micro-enterprise training, and digital smart class kits in primary schools.",
    center: { x: 235, y: 470 },
    path: "M 205 425 L 245 420 L 255 490 L 225 510 L 200 460 Z",
  },
  "IN-OR": {
    id: "or",
    code: "IN-OR",
    name: "Odisha",
    projectsCount: 3,
    beneficiaries: "20,000+",
    villages: "60+ Villages",
    districts: ["Ganjam", "Gajapati", "Khurda"],
    partners: ["Caritas India", "NABARD", "State Health Mission"],
    categories: ["Community Health", "Child, Women Development & Livelihoods"],
    flagshipProject: "Sanjeevani Mobile Medical Clinics & Tribal SHG Training",
    description: "Deploying Mobile Medical Clinic Vans to remote coastal and tribal hamlets while training women self-help collectives in garment tailoring.",
    center: { x: 335, y: 350 },
    path: "M 310 325 L 360 330 L 355 375 L 315 365 Z",
  },
  "IN-RJ": {
    id: "rj",
    code: "IN-RJ",
    name: "Rajasthan",
    projectsCount: 3,
    beneficiaries: "18,000+",
    villages: "50+ Villages",
    districts: ["Jaipur Rural", "Alwar", "Udaipur"],
    partners: ["Save the Children", "NABARD"],
    categories: ["Child Development", "Sustainable Agriculture"],
    flagshipProject: "Shiksha Mission Bridging Schools & Water Harvesting",
    description: "Rescuing children working at rural brick kilns, running bridging education centers, and constructing community rainwater harvesting structures.",
    center: { x: 155, y: 220 },
    path: "M 115 190 L 180 185 L 185 250 L 130 255 Z",
  },
};

interface IndiaMapProps {
  selectedStateCode: string;
  onSelectState: (code: string) => void;
}

export default function IndiaMap({ selectedStateCode, onSelectState }: IndiaMapProps) {
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);

  return (
    <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4] bg-[#141009]/95 backdrop-blur-2xl rounded-[36px] border-2 border-[#d4af6a]/50 p-4 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden select-none flex flex-col justify-between">
      {/* Map Background Grid & Particle Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#362916] via-[#1a140b] to-[#0d0a06]" />
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.15]" />

      {/* Header Overlay */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#f7e4a3]">
            Interactive India Field Footprint
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#d4af6a]/20 border border-[#d4af6a]/50 text-[10px] font-black uppercase tracking-wider text-[#d4af6a]">
          <Sparkles className="w-3 h-3 text-[#c9a24a]" /> 10 States Covered
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center py-2">
        <svg viewBox="0 0 450 560" className="w-full h-full max-h-[480px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
          <defs>
            <linearGradient id="activeStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4af6a" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="selectedStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* India Outer Outline Boundary (Decorative Base Layer) */}
          <path
            d="M 120 100 L 160 50 L 200 40 L 220 80 L 250 90 L 280 120 L 320 150 L 370 180 L 410 200 L 380 250 L 350 280 L 370 330 L 340 370 L 300 480 L 240 540 L 210 500 L 170 420 L 130 360 L 100 280 L 90 200 Z"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(212,175,106,0.2)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Render Active Interactive States */}
          {Object.values(IMPACT_STATES).map((state) => {
            const isSelected = selectedStateCode === state.code;
            const isHovered = hoveredState?.code === state.code;

            return (
              <g key={state.code} className="cursor-pointer transition-all duration-300" onClick={() => onSelectState(state.code)}>
                {/* State Polygon Shape */}
                <path
                  d={state.path}
                  fill={isSelected ? "url(#selectedStateGrad)" : isHovered ? "url(#activeStateGrad)" : "rgba(212,175,106,0.25)"}
                  stroke={isSelected ? "#f59e0b" : isHovered ? "#10b981" : "#d4af6a"}
                  strokeWidth={isSelected || isHovered ? "3" : "1.5"}
                  className="transition-all duration-300 hover:opacity-100"
                  style={{
                    filter: isSelected || isHovered ? "drop-shadow(0 0 12px rgba(212,175,106,0.8))" : "none",
                  }}
                  onMouseEnter={() => setHoveredState(state)}
                  onMouseLeave={() => setHoveredState(null)}
                />

                {/* Radar Hotspot Pulse Ring on State Center */}
                <g transform={`translate(${state.center.x}, ${state.center.y})`}>
                  <circle r="12" fill="none" stroke="#10b981" strokeWidth="1.5" className="animate-ping opacity-75" />
                  <circle r="5" fill={isSelected ? "#fbbf24" : "#10b981"} stroke="#141009" strokeWidth="1.5" />
                  <text
                    x="10"
                    y="4"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="900"
                    className="pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                  >
                    {state.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Floating Hover Card Preview */}
      {hoveredState && (
        <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-2xl bg-[#1f1910]/95 backdrop-blur-xl border border-[#d4af6a]/80 shadow-2xl flex items-center justify-between animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-black text-[#f7e4a3]">{hoveredState.name}</p>
              <p className="text-[10px] font-bold text-[#c9a24a]">{hoveredState.projectsCount} Field Projects · {hoveredState.beneficiaries} Reach</p>
            </div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
            Click to View
          </span>
        </div>
      )}

      {/* Footer Instruction Ribbon */}
      <div className="relative z-20 pt-3 border-t border-[#d4af6a]/30 flex items-center justify-between text-[11px] font-bold text-[#c9a24a]">
        <span>✨ Select any highlighted state to view field impact & project data</span>
        <span className="hidden sm:inline-flex items-center gap-1 text-emerald-400 font-black">
          {Object.keys(IMPACT_STATES).length} Active States <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
