export type AlbumPhoto = {
  id: number;
  url: string;
  caption: string;
  location: string;
  tag: string;
};

export type GalleryAlbum = {
  id: number;
  slug: string;
  album: string;
  title: string;
  location: string;
  year: string;
  desc: string;
  coverImage: string;
  impactTag: string;
  photoCount: number;
  photos: AlbumPhoto[];
};

export const classNameData: Record<string, string> = {
  water: "from-blue-600 via-teal-600 to-emerald-600",
  education: "from-amber-600 via-yellow-600 to-orange-600",
  health: "from-emerald-600 via-teal-600 to-cyan-600",
  livelihood: "from-purple-600 via-fuchsia-600 to-pink-600",
};

export const galleryAlbumsData: GalleryAlbum[] = [
  {
    id: 1,
    slug: "watershed-check-dam-operations",
    album: "Watershed & Check Dam Operations",
    title: "Check Dam Reservoir & Water Conservation",
    location: "Anantapur, Andhra Pradesh",
    year: "2024",
    desc: "Community watershed development harvesting 10.75M m³ water annually for smallholder farmers across 500+ agricultural acres.",
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
    impactTag: "528 Villages Benefited",
    photoCount: 8,
    photos: [
      {
        id: 101,
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
        caption: "Main Check Dam Reservoir storing monsoon runoff water for 500+ agricultural acres.",
        location: "Anantapur Watershed Zone A",
        tag: "Check Dam",
      },
      {
        id: 102,
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
        caption: "Community members & Panchayati Raj leaders inspecting spillway water channels.",
        location: "Kadiri Block, AP",
        tag: "Community Inspection",
      },
      {
        id: 103,
        url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200",
        caption: "Desilted percolation tank replenishing underground aquifers across 3 hamlets.",
        location: "Penumuru Watershed",
        tag: "Aquifer Recharge",
      },
      {
        id: 104,
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1200",
        caption: "Farmer User Groups operating solar water pump for micro-irrigation.",
        location: "Gorantla Village",
        tag: "Solar Micro-Irrigation",
      },
      {
        id: 105,
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        caption: "Village assembly celebrating water security milestone and crop harvest bumper yield.",
        location: "Anantapur Central Panchayat",
        tag: "Village Assembly",
      },
      {
        id: 106,
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
        caption: "Field technical team measuring ground water table rise with digital sensors.",
        location: "Dharmavaram Zone",
        tag: "Ground Water Monitoring",
      },
    ],
  },
  {
    id: 2,
    slug: "child-development-education",
    album: "Child Development & Education",
    title: "Child Welfare & School Support Programmes",
    location: "Prakasam & Guntur Districts, Andhra Pradesh",
    year: "2023",
    desc: "Eradicating child labour, strengthening government school amenities and sanitation, and supporting girl-child education across EFFORT's operating villages.",
    coverImage: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    impactTag: "2,011 Children Rehabilitated",
    photoCount: 6,
    photos: [
      {
        id: 201,
        url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
        caption: "NCLP Special School classroom supporting children rehabilitated from child labour.",
        location: "Prakasam District",
        tag: "Special School",
      },
      {
        id: 202,
        url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1200",
        caption: "School sanitation block handover under the SAHY programme.",
        location: "Guntur District",
        tag: "School Sanitation",
      },
      {
        id: 203,
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
        caption: "Bicycle distribution supporting girl students' access to school.",
        location: "Prakasam District",
        tag: "Girl Child Education",
      },
      {
        id: 204,
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
        caption: "Community awareness session on child rights and eradication of child labour.",
        location: "Prakasam District",
        tag: "Child Rights",
      },
      {
        id: 205,
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        caption: "Government school amenities strengthened for a full learning environment.",
        location: "Guntur District",
        tag: "School Amenities",
      },
      {
        id: 206,
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        caption: "Village-level engagement on child welfare with local leaders.",
        location: "Prakasam District",
        tag: "Community Engagement",
      },
    ],
  },
  {
    id: 3,
    slug: "community-health-wash",
    album: "Community Health & Safe Drinking Water",
    title: "Health Interventions & WASH Infrastructure",
    location: "Prakasam District, Andhra Pradesh",
    year: "2024",
    desc: "Community reverse-osmosis drinking water plants, health interventions addressing TB, HIV/AIDS and malaria, and medical equipment support for government hospitals.",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
    impactTag: "16,000 Families with Safe Drinking Water",
    photoCount: 4,
    photos: [
      {
        id: 301,
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        caption: "Community RO drinking water plant serving a fluoride-affected village.",
        location: "Prakasam District",
        tag: "RO Water Plant",
      },
      {
        id: 302,
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1200",
        caption: "Community health intervention session on TB, HIV/AIDS and malaria awareness.",
        location: "Prakasam District",
        tag: "Health Intervention",
      },
      {
        id: 303,
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
        caption: "Medical equipment handover to a government hospital serving rural communities.",
        location: "Prakasam District",
        tag: "Hospital Equipment",
      },
      {
        id: 304,
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
        caption: "COVID-19 relief support distributed to vulnerable households.",
        location: "Prakasam & Guntur Districts",
        tag: "COVID-19 Relief",
      },
    ],
  },
  {
    id: 4,
    slug: "womens-shg-enterprises",
    album: "Women's SHG & Micro-Enterprises",
    title: "Women's SHG Tailoring & Craft Units",
    location: "Chittoor, Andhra Pradesh",
    year: "2023",
    desc: "Self-help group women launching micro-enterprises with institutional credit linkages and market partnerships.",
    coverImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    impactTag: "1,275 Active SHGs",
    photoCount: 6,
    photos: [
      {
        id: 401,
        url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
        caption: "SHG women operating garment manufacturing machines at collective enterprise center.",
        location: "Chittoor SHG Hub",
        tag: "Garment Unit",
      },
      {
        id: 402,
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200",
        caption: "Financial literacy and bank credit linkage training workshop for women entrepreneurs.",
        location: "Madanapalle Skill Center",
        tag: "Financial Literacy",
      },
      {
        id: 403,
        url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200",
        caption: "Handicrafts product display stall at regional district exhibition.",
        location: "Tirupati Exhibition Ground",
        tag: "Product Expo",
      },
    ],
  },
  {
    id: 5,
    slug: "percolation-tanks-restoration",
    album: "Percolation Tanks & Lake Restoration",
    title: "Desilting Village Percolation Tanks",
    location: "Prakasam, Andhra Pradesh",
    year: "2022",
    desc: "Restoring historic water bodies with 100% community labor and Panchayati Raj cooperation.",
    coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    impactTag: "2,702 Water Structures",
    photoCount: 6,
    photos: [
      {
        id: 501,
        url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
        caption: "Silt removal operations restoring traditional village lake holding capacity.",
        location: "Ongole Water Basin",
        tag: "Lake Desilting",
      },
      {
        id: 502,
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200",
        caption: "Reformed lake bund with native tree saplings planted to prevent soil erosion.",
        location: "Markapur Watershed",
        tag: "Bund Reform",
      },
    ],
  },
  {
    id: 6,
    slug: "farmer-producer-assemblies",
    album: "Farmer Producer Assemblies (FPOs)",
    title: "Annual Farmer Co-Design Assemblies",
    location: "Vijayawada, Andhra Pradesh",
    year: "2024",
    desc: "Over 800 FPO farmer delegates coming together for sustainable agriculture planning.",
    coverImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    impactTag: "42 FPO Cooperatives",
    photoCount: 6,
    photos: [
      {
        id: 601,
        url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
        caption: "800+ FPO farmer delegates participating in annual organic agriculture summit.",
        location: "Vijayawada Convention Hall",
        tag: "Farmer Summit",
      },
      {
        id: 602,
        url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1200",
        caption: "Demonstration of organic bio-inputs and soil health testing kits.",
        location: "Guntur Agronomy Center",
        tag: "Soil Testing",
      },
    ],
  },
];
