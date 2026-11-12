import { ongoingProjects } from "@/app/programs/data";

// Home page content — kept word-for-word from the original home page; only the design changed.

export const heroLines: { text: string; accent?: boolean }[] = [
  { text: "Transforming Lives" },
  { text: "Through Sustainable", accent: true },
  { text: "Development Initiatives" },
];

export const heroSubtext =
  "Empowering farming communities and creating sustainable livelihoods of small and marginal farmers, landless agriculture labor, women, and youth by upholding natural resources, sustainable agriculture, and ecological balance in rural India.";

export const heroCredibility: string[] = [
  "Registered Society (340/1999)",
  "100% Project Success Rate",
  "27 Years of Service",
  "Recognized by Government, Foreign Funding Agencies & Corporate Companies",
];

const carbonIndex = ongoingProjects.findIndex((p) => p.photoFolder === "varaha-carbon-sequestration");
export const carbonProjectHref = carbonIndex >= 0 ? `/programs/ongoing/${carbonIndex + 1}` : "/programs";

export const impactHeadline = { num: 267000, suffix: "+", label: "Families & Lives Impacted (2.67 Lakh+)" };
export const impactStats: { num: number; suffix: string; label: string; desc: string; icon: "villages" | "done" | "active" | "districts" | "years" }[] = [
  { num: 1909, suffix: "+", label: "Villages Covered", desc: "Across 10 Indian States", icon: "villages" },
  { num: 65, suffix: "", label: "Completed Projects", desc: "65 Delivered End-to-End", icon: "done" },
  { num: 15, suffix: "", label: "Ongoing Projects", desc: "15 Active Field Projects", icon: "active" },
  { num: 37, suffix: "", label: "Districts Reached", desc: "Across 37 Districts", icon: "districts" },
  { num: 27, suffix: " Yrs", label: "Years of Service", desc: "Founded in 1999", icon: "years" },
];

export type ComplianceCategory = "govt" | "tax" | "csr";
export type ComplianceCard = {
  id: string;
  title: string;
  number: string;
  category: ComplianceCategory;
  authority: string;
  details: string;
};

export const complianceCards: ComplianceCard[] = [
  { id: "rc", title: "Society Registration (RC)", number: "Society Reg. No. 340/1999 (AP Act XXI of 1860)", category: "govt", authority: "Registrar of Societies, Govt of Andhra Pradesh", details: "Effort (A Society for the Development of Agriculture and Youth) is registered under Societies Registration Act XXI of 1860 with Reg. No. 340/1999. Official website: effortindia.org. Fully compliant with annual filings, statutory reporting, and public audit standards." },
  { id: "80g", title: "80G Tax Exemption", number: "Section 80G Renewal (Income Tax Act 1961)", category: "tax", authority: "Income Tax Department, Govt of India", details: "Deduction under Section 80G of the Income Tax Act, 1961 allowing 50% tax exemption for qualifying corporate and individual donations." },
  { id: "12ab", title: "12AB Registration", number: "Section 12AB Renewal (Govt of India)", category: "tax", authority: "Central Board of Direct Taxes (CBDT)", details: "Tax exemption status for non-profit organizations under Section 12AB of the Income Tax Act, 1961 ensuring tax-free income utilization for public welfare." },
  { id: "fcra", title: "FCRA Registration", number: "FCRA Renewal (Ministry of Home Affairs)", category: "govt", authority: "Ministry of Home Affairs (MHA), Govt of India", details: "Authorized under Foreign Contribution Regulation Act (FCRA) to receive foreign grants, institutional aid, and international philanthropic funding." },
  { id: "darpan", title: "NITI Aayog DARPAN", number: "NITI Aayog Govt of India Unique ID", category: "govt", authority: "NITI Aayog, Govt of India", details: "Empaneled on NGO Darpan portal maintaining a verified Unique ID for central and state government department partnerships and grants." },
  { id: "csr1", title: "Form CSR-1 Approval", number: "Ministry of Corporate Affairs CSR Approved", category: "csr", authority: "Ministry of Corporate Affairs (MCA), Govt of India", details: "Registration certificate under Rule 4(2) of Companies (CSR Policy) Rules for executing corporate CSR initiatives under Schedule VII." },
  { id: "tiss", title: "TISS Hub Certificate", number: "Empaneled by Tata Institute of Social Sciences", category: "csr", authority: "Tata Institute of Social Sciences (TISS)", details: "Empaneled NGO partner audited for high governance, operational capability, and financial transparency by the TISS National CSR Hub." },
  { id: "google-nonprofit", title: "Google for Nonprofits", number: "Google Charity ID: 010330140", category: "govt", authority: "Google for Nonprofits & Goodera", details: "Officially verified nonprofit organization under Google for Nonprofits (Charity ID: 010330140) with authorized primary domain effortindia.org." },
];

export const complianceTrustStrip: string[] = [
  "Society Reg. 340/1999",
  "Google Charity ID: 010330140",
  "80G & 12AB Certified",
  "FCRA Renewal Active",
  "NITI Aayog Darpan ID",
  "MCA CSR-1 Approved",
  "TISS Empaneled",
];

export const processSteps: { step: string; badge: string; topic: string }[] = [
  { step: "01", badge: "Attitude & Skills", topic: "Change the attitudes of rural communities and enhance technical skills & Knowledge through regular capacity-building workshops, field demonstrations, and sustainable agriculture awareness." },
  { step: "02", badge: "CBO & Planning", topic: "Formation & Nurturing of Community-Based Organisations (FPOs, SHGs, & User Groups) alongside grassroots Participatory Programme Planning for long-term community ownership." },
  { step: "03", badge: "Resource Utilisation", topic: "Optimum Utilisation of Local Resources by mobilizing indigenous seed banks, natural soil organic carbon enrichment, rainwater harvesting structures, and community watershed management." },
  { step: "04", badge: "Monitoring", topic: "Participatory Monitoring & Real-Time Field Audits conducted directly with village development committees, digital record-keeping, geotagged evidence, and transparent progress tracking." },
  { step: "05", badge: "Sustenance", topic: "Implementation of measures for the long-term sustenance of project Initiatives, establishing community maintenance funds, institutional handovers, and self-reliant market linkages." },
];

export const processChips: string[] = [
  "Geo-Tagged Field Verification",
  "100% Financial Auditability",
  "Real-Time Partner Dashboards",
  "27 Years Field Legacy",
  "FPO & SHG Integration",
  "NITI Aayog DARPAN Compliant",
];

export const partnershipSlides: { slug: string; title: string; desc: string }[] = [
  { slug: "government", title: "Government", desc: "Working alongside government departments on ground-level implementation and reporting." },
  { slug: "csr-partners", title: "CSR Partners", desc: "Delivering measurable, auditable outcomes for corporate CSR mandates." },
  { slug: "educational-institutions", title: "Educational & Research Institutions", desc: "Collaborating with universities and colleges on research and field programs." },
  { slug: "international-organizations", title: "International Organizations", desc: "Aligning with global development frameworks and cross-border initiatives." },
  { slug: "foundations", title: "Foundations", desc: "Partnering with grant-making foundations on long-term, outcome-driven funding." },
];

export const partnershipStats: { label: string; value: string; desc: string }[] = [
  { label: "Operating States", value: "10 States", desc: "Across India" },
  { label: "Districts Reached", value: "37 Districts", desc: "Field Operations" },
  { label: "Villages Transformed", value: "1,909 Villages", desc: "Grassroots Coverage" },
  { label: "Community Collectives", value: "1,368 Orgs", desc: "42 FPOs & 1,275 SHGs" },
  { label: "Families & Lives Impacted", value: "2.67 Lakh+", desc: "Direct Beneficiaries" },
  { label: "Total Field Projects", value: "80 Projects", desc: "65 Delivered & 15 Active" },
];

export const partnershipBadges: string[] = [
  "Transparent Governance",
  "Verified NGO",
  "CSR Schedule VII",
  "Government Compliant",
  "Impact Driven",
  "Sustainable Development",
];

export const partnerNames: string[] = [
  "NABARD", "GIZ Germany", "Reliance Foundation", "Corteva Agriscience", "Syngenta India", "Azim Premji Foundation",
  "Bayer CropScience", "Water.org", "Balavikasa", "Godfrey Phillips", "JSW Foundation", "TISS CSR Hub",
];

export const csrStages: { step: string; title: string; desc: string; tag: string }[] = [
  { step: "01", title: "Legal CSR Alignment", desc: "Matching your company's CSR goals with official government guidelines and NGO registration standards.", tag: "Fully Compliant" },
  { step: "02", title: "Village Survey & Planning", desc: "Conducting ground surveys in target villages to set clear targets, timelines, and measurable impact goals.", tag: "Ground Surveys" },
  { step: "03", title: "Direct Village Execution", desc: "Working directly on the ground with experienced team members, women self-help groups, and farmer cooperatives.", tag: "Direct Fieldwork" },
  { step: "04", title: "Transparent Reports & Audits", desc: "Providing regular spending certificates, photo evidence, and verified progress reports to funding partners.", tag: "Full Transparency" },
];

export const csrMetrics: { label: string; value: string; sub: string }[] = [
  { label: "Legal CSR Registration", value: "100%", sub: "Form CSR-1 Registered" },
  { label: "Financial Spending Reports", value: "Quarterly", sub: "Timely Audit Updates" },
  { label: "Field Photo & Map Proof", value: "Verified", sub: "Photo & Location Proof" },
  { label: "Clean Track Record", value: "100%", sub: "Zero-Tolerance Policy" },
];

// Real farmer testimonials, sourced from EFFORT's own case-study and testimonial documents.
export const voiceStories: { slug: string; name: string; role: string; place: string; quote: string }[] = [
  { slug: "ambati-thasamma", name: "Ambati Thasamma", role: "Chilli Farmer", place: "P. Bommalapuram, Dornala Mandal, Prakasam District", quote: "By intercropping my chilli with tomato and cluster beans, I earned an extra ₹16,700 net profit — and improved my soil health at the same time." },
  { slug: "u-ramaiah", name: "U. Ramaiah", role: "Dairy Farmer", place: "Sanikavaram, Peddaraveedu Mandal, Prakasam District", quote: "Growing my own COFS 31 fodder saved me ₹30,000 a year I used to spend buying dry grass, and selling the surplus seed gave me a whole new income stream." },
  { slug: "srinivasa-reddy", name: "Srinivasa Reddy", role: "Chilli Farmer", place: "P. Bommalapuram, Dornala Mandal, Prakasam District", quote: "After thrips destroyed my chilli crop, EFFORT's IPM and intercropping training helped me rebuild — and earn more than I ever had before." },
  { slug: "ananthalakshmi", name: "Ananthalakshmi", role: "Dairy Farmer", place: "Kothamallapuram, Bestavaripeta Mandal, Prakasam District", quote: "I used to spend hours every day collecting grass for my buffaloes. Now it takes 10 minutes, and our milk income has grown by over ₹4,000 a month." },
  { slug: "venkatesh", name: "Venkatesh", role: "Millet Farmer", place: "Manekurthy Village", quote: "My father grew millets but I never did — until EFFORT's team convinced me to try. Now I farm it on 2 acres with less investment and better health at home." },
  { slug: "rameswaramma", name: "Rameswaramma", role: "Farmer", place: "Hulibeedu Village", quote: "I convinced my husband to try millets and pulses after seeing our neighbours succeed. We earned ₹70,000 in net returns that year, thanks to EFFORT and DKA." },
  { slug: "sudhakar-reddy", name: "Sudhakar Reddy", role: "Farmer", place: "Muddanageri Village", quote: "After our borewell dried up, EFFORT's team helped us recharge it. With drip irrigation and IPM practices, we finally got out of debt." },
  { slug: "marthamma", name: "Marthamma", role: "Farmer", place: "Kuruvalli Village", quote: "We recharged our borewell ourselves with EFFORT's technical guidance. Water discharge improved 100%, and it transformed our lives." },
  { slug: "kishtappa", name: "Kishtappa", role: "Farmer", place: "Hathibelagal Village", quote: "Applying tank silt to my fields cut my fertiliser costs by 60% and raised my yield by 30%." },
  { slug: "shekanna", name: "Shekanna", role: "Farmer", place: "Hulebeedu Village", quote: "After seeing tank silt work in a neighbour's field, I applied it myself — better soil, better moisture, and now I'm sharing it with other farmers too." },
  { slug: "n-mallaiah", name: "N. Mallaiah", role: "Chilli Farmer", place: "Hulebeedu Village, Aluru Mandal", quote: "Recharging my borewell and switching to chilli changed my life — from barely surviving on that land to nearly ₹10 lakh in net returns in a single season." },
  { slug: "shaiksha-vali", name: "Shaiksha Vali", role: "Farmer, Engineering Graduate", place: "Hathi Belagal Village", quote: "I left a ₹7 lakh software job in Bangalore to farm. Growing green manure crops before my main crop has already cut my fertiliser costs and improved my soil." },
];
