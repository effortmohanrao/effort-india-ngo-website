export type Project = {
  name: string;
  beneficiaries: string;
  funder: string;
  category: string;
};

const AGRI = "Sustainable Agriculture";
const NRM = "Natural Resource Management";
const HEALTH = "Community Health";
const CHILD = "Child Development";
const CHILD_ONGOING = "Child, Women Development & Livelihoods";

export const completedProjects: Project[] = [
  { name: "Integrated Pest Management in Chilli; Promotion of Vermi Compost Units; Post-Harvesting Technologies in Chilli; Organic Farming Capacity Building of Chilli-Growing Farmers", beneficiaries: "4,500 small & marginal farmers covering 45 villages of Prakasam and Guntur Districts", funder: "Spices Board, Ministry of Commerce & Industry, Govt of India", category: AGRI },
  { name: "Livelihood Promotion of SC, ST and BC Women through Promotion of Vermi Compost Units", beneficiaries: "SC/ST/BC women members across 8 villages, covering 250 women", funder: "Department of Bio-Technology, Govt of India", category: AGRI },
  { name: "Capacity Building of Farmers on Organic Farming and Spread of Organic Cultivation", beneficiaries: "Small & marginal farmers across 10 villages, covering 1,500 farmers", funder: "National Centre on Organic Farming, Govt of India", category: AGRI },
  { name: "Capacity Building of Farmers on Water Management, Crop Management and Sustenance of the Schemes", beneficiaries: "3,000 small & marginal farmers covering 40 villages", funder: "APSIDC", category: NRM },
  { name: "Tank De-silt Project", beneficiaries: "4,250 small & marginal farmers covering 57 villages of Prakasam and Guntur Districts", funder: "Balavikasa", category: NRM },
  { name: "Capacity Building of Watershed Communities", beneficiaries: "Small & marginal farmers and landless agricultural labour covering 100 villages and nearly 20,000 families", funder: "DWMA, Prakasam District", category: NRM },
  { name: "Promotion of Farmers Associations", beneficiaries: "Small & marginal farmers in 152 villages, covering 2,000 farmers", funder: "NABARD", category: AGRI },
  { name: "Livelihood Promotion of Tsunami-Affected Youth", beneficiaries: "Fishermen communities covering 2,000 families in 8 villages", funder: "Caritas India", category: CHILD },
  { name: "Special Schools for Child Labour", beneficiaries: "SC/ST/BC communities covering 2 villages", funder: "Government of AP under NCLP", category: CHILD },
  { name: "Child Rights, Child Trafficking and Eradication of Child Labour", beneficiaries: "SC/ST/BC communities; parents and children targeted across 10 villages, covering 2,000 families", funder: "Save the Children", category: CHILD },
  { name: "IPM Cotton", beneficiaries: "4 villages in Prakasam, covering 150 farmers", funder: "AME, Bangalore", category: AGRI },
  { name: "Special Campaigns on HIV/AIDS, Sanitation, Gender Issues, Literacy, Disaster Management and Water Management, Child Development", beneficiaries: "6 districts covering 300 villages and about 2,00,000 population", funder: "HELP", category: HEALTH },
  { name: "NREGA Entitlements of the Poor", beneficiaries: "Pilot project ensuring provisions under the Act; promotion of CBOs to address gaps and take up asset-based development, benefiting 4,000 families across 10 villages in Tarlupadu mandal, Prakasam District", funder: "Ford Foundation through WASSAN", category: HEALTH },
  { name: "Community Based Tank Management", beneficiaries: "8 villages, covering 1,000 farmers", funder: "I&CAD, Govt of AP", category: NRM },
  { name: "Irrigation and Crop Management", beneficiaries: "20 villages of Prakasam and Nellore Districts", funder: "APSIDC", category: NRM },
  { name: "Sustainable Agriculture Practices in Groundnut Crop", beneficiaries: "Promoting knowledge, skills and confidence of groundnut farmers on sustainable cultivation via demonstrations, IPM and IDM practices in Tsunami-affected areas of Prakasam district, benefiting 1,000 families", funder: "CARE India", category: AGRI },
  { name: "Andhra Pradesh Community Health Intervention Project", beneficiaries: "12 villages covering 65,000 population, aimed at reducing incidence of TB, HIV/AIDS, Malaria, Filaria and Leprosy", funder: "DFID through RISE", category: HEALTH },
  { name: "Conservation of Natural Resources for Promotion of Livelihoods through Watershed Approach", beneficiaries: "272 families in Jaganadhapuram", funder: "Millepede Foundation", category: NRM },
  { name: "Pilot Project on SRI Paddy", beneficiaries: "400 farmers educated across 16 villages, covering 400 acres of demo plots", funder: "NABARD", category: AGRI },
  { name: "Dalmia CSR Project", beneficiaries: "Comprehensive community development through education, health and livelihoods interventions in 8 villages of Jammalamadugu region", funder: "CARE India", category: CHILD },
  { name: "Watershed Development Fund Projects Addressing Farmer Distress", beneficiaries: "90 watershed projects covering 3 districts of AP, with EFFORT acting as RSO", funder: "NABARD", category: AGRI },
  { name: "Swagati HIV/AIDS Interventions Project", beneficiaries: "8 mandals of Markapur revenue division, covering 1,020 female sex workers", funder: "APSACS", category: HEALTH },
  { name: "Umbrella Programme for Natural Resource Management", beneficiaries: "Sustainable livelihoods for rural poor dependent on natural resources across 13 villages, covering 500 families", funder: "NABARD", category: NRM },
  { name: "Farmers Training on Responsible Use of Pesticides", beneficiaries: "Changing the mindset of 1 lakh farmers on responsible pesticide use in Adoni region, Kurnool district", funder: "CropLife International", category: AGRI },
  { name: "SAHY — School Sanitation and Hygiene Programme", beneficiaries: "8 villages of Guntur district", funder: "Bayer CropScience", category: CHILD },
  { name: "Tribal Development Fund Project", beneficiaries: "Sustainable livelihoods for 1,000 tribal families through Horticulture crops via the Wadi approach", funder: "NABARD", category: AGRI },
  { name: "WASH — Water, Agriculture, Sanitation and Hygiene", beneficiaries: "Changing the mindset of 60,000 farmers in Adoni region, Kurnool district", funder: "Bayer CropScience", category: AGRI },
  { name: "E.Spice Project", beneficiaries: "Empowering 15,000 farmers with information and technology for enhanced productivity, quality and marketability", funder: "Spices Board, Government of India", category: AGRI },
  { name: "Farmers Training on Responsible Usage of Pesticides in the Context of IPM", beneficiaries: "Training 4.50 lakh farmers via farmer-to-farmer approach across Andhra Pradesh, Punjab and Maharashtra", funder: "CropLife India", category: AGRI },
  { name: "WASH — Punjab", beneficiaries: "Changing the mindset of 45,000 farmers in Abohar region, Punjab state", funder: "Bayer CropScience", category: AGRI },
  { name: "Mobile Veterinary Clinics under PPP", beneficiaries: "Operating Mobile Veterinary Clinics (MVC) in Public-Private Partnership with an Issue Tracking/Reporting System, increasing coverage of departmental services at farmers' doorsteps", funder: "Department of Animal Husbandry, Govt of AP", category: AGRI },
  { name: "Operation of Livestock Resource Centre", beneficiaries: "Capacity building activities for stakeholders under various Animal Husbandry department schemes", funder: "Department of Animal Husbandry, Govt of AP", category: AGRI },
  { name: "Capacity Building Centre", beneficiaries: "Animal hostel for livestock under government loan schemes, with farmer training", funder: "Department of Animal Husbandry, Govt of AP", category: AGRI },
  { name: "Improving Crop Productivity of Mustard through Bee Pollination", beneficiaries: "Improving crop productivity for 15,000 farmers across 4 states of India through beekeeping", funder: "Corteva Agriscience", category: AGRI },
  { name: "COVID-19 Rapid Response Project", beneficiaries: "Supporting the farming community during the pandemic — food distribution at AMCs, PPE kit promotion and hospital kits", funder: "Syngenta India Ltd. & Corteva Agriscience", category: AGRI },
  { name: "Andhra Pradesh Drought Mitigation Project (IFAD)", beneficiaries: "Improving incomes and drought resilience of 15,000 farm households; strengthening adaptive capacity and agricultural productivity across 45 GPs of Prakasam district", funder: "Department of Agriculture, Government of AP (EFFORT as Lead Facilitating Agency of a 4-NGO consortium)", category: AGRI },
  { name: "Sustainable Agriculture Focusing on IPM — Maharashtra", beneficiaries: "Changing the mindset of 10,000 farmers towards responsible pesticide usage in the context of IPM", funder: "Syngenta", category: AGRI },
  { name: "Sustainable Agriculture Focusing on IPM — Maharashtra", beneficiaries: "Changing the mindset of 50,000 farmers towards responsible pesticide usage in the context of IPM", funder: "DuPont", category: AGRI },
  { name: "COVID-19 Relief & Response Project", beneficiaries: "Supporting tobacco growers of Prakasam and Guntur districts, Andhra Pradesh", funder: "IPM India Wholesale Trading Private Limited", category: AGRI },
  { name: "Tree Plantation Programme", beneficiaries: "Educating students on the importance of green cover, utilising common and waste lands", funder: "IPM India Wholesale Trading Private Limited", category: CHILD },
  { name: "Climate Resilient Farming", beneficiaries: "Building resilience in cropping systems to address drought and farmer distress through effective natural resource management across 12 habitations of Prakasam district", funder: "CINI — Nodal Agency of Tata Trust", category: AGRI },
  { name: "Finance to WASH for the Poor", beneficiaries: "Understanding WASH supply chains and promoting entrepreneurship, finance and awareness models (government, SHG, MFI and JLG channels) for community WASH needs", funder: "Water.org", category: HEALTH },
  { name: "Pilot Project on Chilli Traceability through Blockchain Technology", beneficiaries: "Sensitising 500 chilli farmers to improve marketability and traceability of produce", funder: "GS1", category: AGRI },
  { name: "Providing Medical Equipment to Government Hospitals", beneficiaries: "Essential medical equipment for government hospitals to render effective services to deserving communities", funder: "HSBC", category: HEALTH },
  { name: "IWMP — Integrated Watershed Management Programme", beneficiaries: "Addressing soil, water and vegetative conservation across 5,000 Ha in Polavaram Mandal, West Godavari district", funder: "Government of AP, Department of Rural Development", category: NRM },
  { name: "Spreading Happiness through Sustainable Rice Farming (Direct Seeded Rice)", beneficiaries: "Enhancing skills & knowledge of 1,00,000 paddy-cultivating farmers on DSR practices across Punjab, Haryana, Madhya Pradesh and Uttar Pradesh", funder: "Corteva Agriscience under CSR", category: AGRI },
  { name: "Promotion of Wayside Market", beneficiaries: "Marketing infrastructure enabling small & marginal farmers to sell produce directly to customers", funder: "Syngenta India Ltd", category: AGRI },
  { name: "Sustainability in Oil Seed Production — Tamil Nadu", beneficiaries: "Increasing production & productivity of oilseed crops and improving farmer livelihoods through capacity building", funder: "GIZ, Germany", category: AGRI },
  { name: "Promotion and Strengthening of Sustainable Integrated Ginger Cultivation", beneficiaries: "Increasing ginger productivity by 20% and net income of 750 farmers by 25% across 28 villages of Vizag district", funder: "GIZ, Germany", category: AGRI },
  { name: "Integrated Pest Management (IPM) in Chilli Cultivation", beneficiaries: "Sensitising 500 chilli farmers to produce residue-free chilli and develop marketing linkages", funder: "Iffco Kisan", category: AGRI },
  { name: "Swagati HIV/AIDS Interventions Project", beneficiaries: "8 mandals of Markapur revenue division, covering 1,020 female sex workers", funder: "HLPPT", category: HEALTH },
  { name: "Personal Protection Equipment Project", beneficiaries: "Supporting 50,000 farmers with PPE kits to safeguard them during the Covid-19 period", funder: "PHI Seeds India Private Limited", category: AGRI },
  { name: "Honeybee Project in Mustard Cultivation", beneficiaries: "Supporting 5,000 mustard-cultivating farmers to improve yield", funder: "PHI Seeds India Limited", category: AGRI },
  { name: "Capacity Building for Adoption of Technology (CAT) for Banana Farmers", beneficiaries: "Training 200 banana farmers to adopt new technologies in banana cultivation, Guntur district", funder: "NABARD", category: AGRI },
  { name: "Skill Development Training for Rural Youth", beneficiaries: "Improving the livelihoods of 200 rural youth through identified vocational skills", funder: "NABARD", category: CHILD },
  { name: "Ambulance for Benefit of Needy & Deserved Communities", beneficiaries: "Supporting deserving communities during the Covid-19 period", funder: "Mahindra and Mahindra Finance Limited", category: HEALTH },
  { name: "Promotion of Rythu Bazaar at Khammam District", beneficiaries: "Marketing infrastructure enabling small & marginal farmers to sell produce directly to customers, Telangana", funder: "Syngenta India Ltd", category: AGRI },
  { name: "Campaign on Catch the Rain", beneficiaries: "Sensitising 1,000 farmers on the importance of rainwater harvesting", funder: "National Water Mission", category: NRM },
  { name: "Livelihood Promotion of Youth", beneficiaries: "Improving the livelihoods of 100 youth members through a skill development programme", funder: "Mulpuri Foundation", category: CHILD },
  { name: "Campaign on Black Thrips in Chilli Cultivation", beneficiaries: "Sensitising and capacitating 2,000 farmers on Black Thrips management in Prakasam and Guntur districts", funder: "CABI International", category: AGRI },
  { name: "Tree Plantation Programme through Seed Balls", beneficiaries: "Improving greenery and protecting the environment through seed-ball broadcasting", funder: "Syngenta India Pvt Ltd", category: NRM },
  { name: "Climate Literacy and Marine Litter Management Project", beneficiaries: "Educating 10,000 coastal community members on protecting coastal beaches", funder: "Academy of Gandhian Studies", category: NRM },
  { name: "Well-Being out of Waste Management Programme", beneficiaries: "Educating children in 100 schools and communities in 100 villages on waste management", funder: "ITC, through Academy of Gandhian Studies", category: CHILD },
  { name: "Livelihoods Promotion Project", beneficiaries: "Livelihood promotion of 30 women members through setting up a processing unit", funder: "Melania Foundation", category: CHILD },
  { name: "Community Development Interventions", beneficiaries: "Supporting farming communities with safe drinking water through RO plants, school sanitary block promotion and tank renovation", funder: "Universal Leaf Tobacco Company", category: HEALTH },
];

export const ongoingProjects: Project[] = [
  { name: "Promotion & Strengthening of Farmers Producer Organisations", beneficiaries: "Sensitising and organising small & marginal farmers to address farmer-related issues across 150 villages", funder: "NABARD, under CSS and PODF", category: AGRI },
  { name: "Promotion of Bio-diversity Conservation Park and Water Harvesting Structures", beneficiaries: "Creating biodiversity parks to boost ecosystems and promote soil, water and native flora conservation", funder: "Godfrey Phillips India Ltd", category: NRM },
  { name: "COVID Resilience Funding for Organic Orchards", beneficiaries: "Sustained improvement of living, working and economic conditions for small-scale farmers and producers, supporting food security, self-reliance and environmental sustainability across Tamil Nadu, Kerala and Karnataka", funder: "Fairtrade International", category: AGRI },
  { name: "Integrated Climate-Resilient Farming Systems for Sustainable Livelihoods and Water Conservation", beneficiaries: "Improving livelihoods of 1,904 small & marginal farmers and 1,435 landless agricultural labourers across 24 marginalised villages of Prakasam district through climate-resilient farming and resource conservation", funder: "Azim Premji Foundation", category: AGRI },
  { name: "Coffee Development Project", beneficiaries: "Improving coffee quality and building capacity of coffee-producing farmers across Karnataka, Kerala and Tamil Nadu", funder: "NAAP — Network of Asia and Pacific Producers Pvt. Ltd.", category: AGRI },
  { name: "Improving Self-Reliance and Resilience of Rural Communities in Prakasam District", beneficiaries: "Building resilient communities with the strength to overcome social, educational, health, environmental and economic hardships", funder: "Reliance Foundation", category: AGRI },
  { name: "Promotion of Water Harvesting Structures", beneficiaries: "Educating farmers on the importance of water harvesting structures and promoting water conservation", funder: "IPM India Wholesale Trading Private Limited", category: NRM },
  { name: "Promotion of Climate Resilient Farming through Effective Natural Resource Management", beneficiaries: "Climate-resilient agro-ecological approaches across 5 villages of Aluru Mandal, Kurnool district, covering 250 small & marginal farmers", funder: "DKA Austria", category: NRM },
  { name: "Strengthening Amenities in Government Schools", beneficiaries: "Providing amenities and infrastructure in government schools to ensure 100% school education", funder: "Prakasam Global NRI Forum", category: CHILD_ONGOING },
  { name: "Integrated Agri Extension Project in Chilli Value Chain", beneficiaries: "Increasing farming incomes through better price discovery and stabilised yields of red chillies via GAP adoption across select regions of South India", funder: "IDH, Netherlands", category: AGRI },
  { name: "Water Governance and Management Project", beneficiaries: "Developing 'Water Plus Villages' ensuring water security, ecological restoration and biodiversity protection", funder: "JSW Foundation", category: NRM },
  { name: "Climate Resilient Agriculture Integrating Natural Resource Management", beneficiaries: "Promoting climate-resilient agricultural approaches integrating NRM practices in the drought-prone villages of Kalujuvvalapadu and Nagireddyapalli, Prakasam district", funder: "NABARD", category: AGRI },
  { name: "Promotion of Sustainable Livelihoods of Women", beneficiaries: "Improving economic status of 275 women, enabling additional income through Income Generation Units", funder: "PMI", category: CHILD_ONGOING },
  { name: "Sustainable Well-Being of Women", beneficiaries: "Women's empowerment and improved livelihoods through livelihood interventions", funder: "EKAMUSA and Orange Elephant", category: CHILD_ONGOING },
  { name: "Carbon Sequestration Project", beneficiaries: "Reducing carbon through horticulture and timber species, promoting carbon credits", funder: "VARAHA", category: NRM },
];

export const completedBreakdown = [
  { label: AGRI, count: completedProjects.filter((p) => p.category === AGRI).length },
  { label: NRM, count: completedProjects.filter((p) => p.category === NRM).length },
  { label: HEALTH, count: completedProjects.filter((p) => p.category === HEALTH).length },
  { label: CHILD, count: completedProjects.filter((p) => p.category === CHILD).length },
];

export const ongoingBreakdown = [
  { label: AGRI, count: ongoingProjects.filter((p) => p.category === AGRI).length },
  { label: NRM, count: ongoingProjects.filter((p) => p.category === NRM).length },
  { label: CHILD_ONGOING, count: ongoingProjects.filter((p) => p.category === CHILD_ONGOING).length },
];

const KNOWN_PLACES = [
  "Prakasam", "Guntur", "Kurnool", "Nellore", "Vizag", "Visakhapatnam", "West Godavari",
  "Polavaram", "Adoni", "Abohar", "Markapur", "Jammalamadugu", "Tarlupadu", "Aluru",
  "Punjab", "Haryana", "Madhya Pradesh", "Uttar Pradesh", "Tamil Nadu", "Kerala",
  "Karnataka", "Maharashtra", "Andhra Pradesh",
];

export function extractLocation(project: Project): string {
  const text = `${project.name} ${project.beneficiaries}`;
  const found = KNOWN_PLACES.filter((place) => text.includes(place));
  if (found.length === 0) return "Andhra Pradesh, India";
  const unique = [...new Set(found)];
  if (unique.length > 3) return "Multiple States, India";
  return unique.join(", ") + ", India";
}

export function extractHeadlineStat(project: Project): { value: string; unit: string; numeric: number | null } | null {
  const match = project.beneficiaries.match(/([\d,]+(?:\.\d+)?)\s*(lakh|crore)?\s*(small & marginal farmers|farmers|families|villages|women|population|farm households|labourers)/i);
  if (!match) return null;
  const [, num, scale, unit] = match;
  let numeric: number | null = parseFloat(num.replace(/,/g, ""));
  if (scale?.toLowerCase() === "lakh") numeric *= 100000;
  if (scale?.toLowerCase() === "crore") numeric *= 10000000;
  if (Number.isNaN(numeric)) numeric = null;
  return { value: `${num}${scale ? " " + scale : ""}`, unit: unit.replace(/^small & marginal /i, ""), numeric };
}

const GOV_MARKERS = [
  "Govt", "Government", "Department of", "NABARD", "APSIDC", "Spices Board", "APSACS",
  "I&CAD", "DWMA", "NCLP",
];
const INTL_MARKERS = [
  "International", "GIZ", "Germany", "Austria", "Netherlands", "IFAD", "DFID",
  "Fairtrade", "IDH", "NAAP",
];

export function derivePartnerType(funder: string): string {
  if (GOV_MARKERS.some((m) => funder.includes(m))) return "Government & Statutory Partner";
  if (INTL_MARKERS.some((m) => funder.includes(m))) return "International Partner";
  if (funder.includes("Foundation") || funder.includes("CSR")) return "CSR & Foundation Partner";
  return "Corporate Partner";
}

export function extractVillageCount(project: Project): number | null {
  const match = project.beneficiaries.match(/(\d[\d,]*)\s*villages/i);
  if (!match) return null;
  return parseInt(match[1].replace(/,/g, ""), 10);
}

export type FieldStory = {
  title: string;
  quote: string;
  person: string;
  place: string;
  keywords: string[];
};

// Real, documented EFFORT field case studies (from the organisation's own case-study
// records for its Prakasam district sustainable-agriculture and livelihoods work).
// Matched to a project by theme, not by exact funding line — captioned accordingly.
export const fieldStories: FieldStory[] = [
  {
    title: "Turning Pest Losses Into a Thriving Chilli Farm",
    quote:
      "This journey has changed my life and given me hope for a better future. I can support my family, contribute to my child's education, and purchase essential amenities for my home.",
    person: "Srinivasa Reddy, Chilli Farmer",
    place: "Dornala Mandal, Prakasam District",
    keywords: ["chilli", "pest", "ipm", "cultivation"],
  },
  {
    title: "Good Agricultural Practices, A New Season of Income",
    quote:
      "By adopting intercropping, she effectively utilised her land and resources, reduced risks, and improved soil health — a story that inspires other farmers to embrace sustainable techniques.",
    person: "Ambati Thasamma, Farmer",
    place: "Dornala Mandal, Prakasam District",
    keywords: ["chilli", "sustainable", "organic", "farming"],
  },
  {
    title: "From Hours of Grass-Cutting to Minutes a Day",
    quote:
      "She now spends only 10–15 minutes cutting grass, compared to hours spent earlier — and her family's monthly income has grown by over ₹4,000.",
    person: "Ananthalakshmi, Dairy Farmer",
    place: "Bestavaripeta Mandal, Prakasam District",
    keywords: ["dairy", "fodder", "livestock", "livelihood", "women"],
  },
  {
    title: "Turning Fodder Seed Into a New Revenue Stream",
    quote:
      "Determined not to depend on expensive market seed, he harvested and sold his own — resolving to keep improving his financial independence.",
    person: "U. Ramaiah, Dairy Farmer",
    place: "Peddaraveedu Mandal, Prakasam District",
    keywords: ["dairy", "fodder", "livestock", "animal husbandry", "veterinary"],
  },
];

export function findFieldStory(project: Project): FieldStory | null {
  const text = (project.name + " " + project.beneficiaries).toLowerCase();
  for (const story of fieldStories) {
    if (story.keywords.some((k) => text.includes(k))) return story;
  }
  return null;
}
