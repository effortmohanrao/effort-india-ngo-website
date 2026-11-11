import { completedProjects, ongoingProjects } from "@/app/programs/data";

// All home-page facts come from EFFORT's own records (27 Years book, project list, registrations).
// Nothing here is a placeholder — change a number here and it changes everywhere on the page.

export const homeStats: { value: string; label: string }[] = [
  { value: "27", label: "Years of service since 1999" },
  { value: "1,909", label: "Villages reached" },
  { value: "2.67 Lakh", label: "Families impacted" },
  { value: "80", label: "Projects — 65 completed, 15 ongoing" },
  { value: "37", label: "Districts in 10 states" },
  { value: "1,368", label: "Community institutions built" },
];

const countBy = (cats: string[]) =>
  [...completedProjects, ...ongoingProjects].filter((p) => cats.includes(p.category)).length;

export const homeFocusAreas: { title: string; coverSlug: string; desc: string; projects: number }[] = [
  {
    title: "Sustainable Agriculture",
    coverSlug: "agriculture",
    desc: "Climate-resilient farming, IPM, organic practices and farmer producer organisations that raise incomes of small and marginal farmers.",
    projects: countBy(["Sustainable Agriculture"]),
  },
  {
    title: "Natural Resource Management",
    coverSlug: "nrm",
    desc: "Watershed development, water harvesting structures, borewell recharge, biodiversity parks and water governance in drought-prone villages.",
    projects: countBy(["Natural Resource Management"]),
  },
  {
    title: "Community Health",
    coverSlug: "health",
    desc: "Safe drinking water, HIV/AIDS awareness and community health programmes delivered with local institutions.",
    projects: countBy(["Community Health"]),
  },
  {
    title: "Women, Children & Livelihoods",
    coverSlug: "child",
    desc: "Women's self-help groups, income-generation units, school amenities and child development in rural communities.",
    projects: countBy(["Child Development", "Child, Women Development & Livelihoods"]),
  },
];

// Featured ongoing projects — must have a photoFolder with real photos in R2.
const featuredFolders = ["azim-premji-climate-resilient", "jsw-water-governance", "reliance-foundation"];
export const homeFeaturedProjects = featuredFolders.map((folder) => {
  const index = ongoingProjects.findIndex((p) => p.photoFolder === folder);
  const p = ongoingProjects[index];
  return { ...p, photoFolder: folder, href: `/programs/ongoing/${index + 1}` };
});

export const homeApproach: { title: string; desc: string }[] = [
  { title: "Attitude & skills", desc: "Capacity-building workshops and field demonstrations that build farmers' technical knowledge." },
  { title: "Community institutions", desc: "Forming and nurturing FPOs, SHGs and user groups that plan their own programmes." },
  { title: "Local resources", desc: "Seed banks, soil carbon, rainwater harvesting and watershed management using what villages already have." },
  { title: "Participatory monitoring", desc: "Progress tracked with village committees, geotagged evidence and transparent records." },
  { title: "Sustenance", desc: "Maintenance funds, institutional handover and market linkages so results last after we leave." },
];

// Real farmer testimonials from EFFORT's case-study documents (condensed, not invented).
export const homeTestimonials: { slug: string; name: string; role: string; place: string; quote: string }[] = [
  { slug: "n-mallaiah", name: "N. Mallaiah", role: "Chilli farmer", place: "Hulebeedu, Aluru Mandal", quote: "Recharging my borewell and switching to chilli changed my life — from barely surviving on that land to nearly ₹10 lakh in net returns in a single season." },
  { slug: "ananthalakshmi", name: "Ananthalakshmi", role: "Dairy farmer", place: "Kothamallapuram, Prakasam", quote: "I used to spend hours every day collecting grass for my buffaloes. Now it takes 10 minutes, and our milk income has grown by over ₹4,000 a month." },
  { slug: "ambati-thasamma", name: "Ambati Thasamma", role: "Chilli farmer", place: "P. Bommalapuram, Prakasam", quote: "By intercropping my chilli with tomato and cluster beans, I earned an extra ₹16,700 net profit — and improved my soil health at the same time." },
  { slug: "u-ramaiah", name: "U. Ramaiah", role: "Dairy farmer", place: "Sanikavaram, Prakasam", quote: "Growing my own COFS 31 fodder saved me ₹30,000 a year I used to spend buying dry grass, and selling the surplus seed gave me a new income." },
  { slug: "marthamma", name: "Marthamma", role: "Farmer", place: "Kuruvalli Village", quote: "We recharged our borewell ourselves with EFFORT's technical guidance. Water discharge improved 100%, and it transformed our lives." },
  { slug: "shaiksha-vali", name: "Shaiksha Vali", role: "Farmer, engineering graduate", place: "Hathi Belagal Village", quote: "I left a software job in Bangalore to farm. Growing green manure crops before my main crop has already cut my fertiliser costs and improved my soil." },
];

export const homeRegistrations: { title: string; detail: string }[] = [
  { title: "Society Registration", detail: "Reg. No. 340/1999, Societies Registration Act XXI of 1860, Govt. of Andhra Pradesh" },
  { title: "80G", detail: "Donations eligible for tax deduction under Section 80G, Income Tax Act 1961" },
  { title: "12AB", detail: "Registered under Section 12AB, Income Tax Act 1961" },
  { title: "FCRA", detail: "Registered with the Ministry of Home Affairs to receive foreign contributions" },
  { title: "NGO DARPAN", detail: "Registered on the NITI Aayog NGO Darpan portal" },
  { title: "CSR-1", detail: "Registered with the Ministry of Corporate Affairs — CSR00034988" },
  { title: "TISS CSR Hub", detail: "Empanelled with the Tata Institute of Social Sciences National CSR Hub" },
  { title: "Google for Nonprofits", detail: "Verified nonprofit — Charity ID 010330140" },
];
