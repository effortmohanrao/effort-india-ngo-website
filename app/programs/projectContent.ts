import { Project, extractLocation, extractHeadlineStat, derivePartnerType, extractVillageCount } from "./data";

export type PillarIconKey =
  | "tractor" | "users" | "leaf" | "droplets" | "trending" | "handshake"
  | "heartPulse" | "baby" | "shield" | "sprout" | "trees" | "coins"
  | "recycle" | "store" | "graduationCap" | "cloudRain" | "bug" | "qrCode"
  | "book" | "paw" | "briefcase";

export type ProjectContentDetails = {
  missionHeader: string;
  missionContextText: string;
  regionalNeedText: string;
  coreObjectivePoints: string[];
  interventionsPillars: {
    title: string;
    desc: string;
  }[];
  governancePoints: string[];
  blueprintStages: {
    stage: string;
    phase: string;
    title: string;
    desc: string;
    color: "amber" | "emerald" | "sky" | "violet";
    items: string[];
  }[];
  impactPillars: {
    icon: PillarIconKey;
    title: string;
    text: string;
    color: "emerald" | "amber" | "teal" | "sky" | "rose" | "violet";
  }[];
  galleryCaptions: {
    id: number;
    label: string;
    tag: string;
    modalDesc: string;
  }[];
};

export function getProjectContent(project: Project): ProjectContentDetails {
  const nameLower = project.name.toLowerCase();
  // Detection scans the name AND the real beneficiaries text — many projects have a generic
  // administrative name (e.g. "Capacity Building Centre") but state their actual subject
  // (e.g. "Animal hostel for livestock...") in the beneficiaries field.
  const searchText = `${nameLower} ${project.beneficiaries.toLowerCase()}`;
  const location = extractLocation(project);
  const stat = extractHeadlineStat(project);
  const villageCount = extractVillageCount(project);
  const partnerType = derivePartnerType(project.funder);

  // Topic detection flags. Category text is deliberately NOT used here: shared category
  // labels like "Child, Women Development & Livelihoods" or "Community Health" also cover
  // projects (women's-livelihood, NREGA entitlements) that have nothing to do with children
  // or health, so trusting the category alone mis-tags those.
  const isCarbon = searchText.includes("carbon sequestration") || searchText.includes("carbon credit");
  const isEnviro = searchText.includes("waste management") || searchText.includes("marine litter") || searchText.includes("climate literacy");
  const isChilli = searchText.includes("chilli") || searchText.includes("chilly");
  const isVermi = searchText.includes("vermi") || searchText.includes("compost");
  const isPaddy = searchText.includes("sri paddy") || searchText.includes("rice") || searchText.includes("dsr") || searchText.includes("paddy");
  const isWater = searchText.includes("water") || searchText.includes("tank") || searchText.includes("de-silt") || searchText.includes("watershed") || searchText.includes("wash");
  const isHealth = searchText.includes("hiv") || searchText.includes("aids") || searchText.includes("medical") || searchText.includes("hospital") || searchText.includes("covid") || searchText.includes("malaria") || searchText.includes("filaria") || searchText.includes("leprosy") || searchText.includes("tb,");
  const isChild = searchText.includes("child") || searchText.includes("school") || searchText.includes("trafficking");
  const isVet = searchText.includes("veterinary") || searchText.includes("livestock") || searchText.includes("animal");
  const isBee = searchText.includes("bee") || searchText.includes("mustard") || searchText.includes("pollination");
  const isTech = searchText.includes("blockchain") || searchText.includes("e.spice") || searchText.includes("traceability");
  const isTribal = searchText.includes("tribal") || searchText.includes("wadi");
  const isGender = searchText.includes("women") || searchText.includes("female");
  const isPlantation = searchText.includes("tree plantation");
  const isMarket = searchText.includes("market") || searchText.includes("producer organisation") || searchText.includes("farmers association");
  const isYouth = searchText.includes("youth");
  const isNRM = searchText.includes("natural resource management") || searchText.includes("climate resilient") || searchText.includes("drought");
  const isIPM = searchText.includes("ipm") || searchText.includes("pesticide");

  // Single topic bucket per project, used throughout this function (mission text, blueprint
  // stages, and impact pillars) so every section stays consistent with the same real topic.
  type TopicKey = "carbon" | "environment" | "water" | "health" | "child" | "vet" | "chilli" | "vermi" | "paddy" | "bee" | "tech" | "tribal" | "gender" | "plantation" | "market" | "youth" | "nrm" | "ipm" | "generic";
  const topicKey: TopicKey =
    isCarbon ? "carbon" :
    isEnviro ? "environment" :
    isWater ? "water" :
    isHealth ? "health" :
    isChild ? "child" :
    isVet ? "vet" :
    isChilli ? "chilli" :
    isVermi ? "vermi" :
    isPaddy ? "paddy" :
    isBee ? "bee" :
    isTech ? "tech" :
    isTribal ? "tribal" :
    isGender ? "gender" :
    isPlantation ? "plantation" :
    isMarket ? "market" :
    isYouth ? "youth" :
    isNRM ? "nrm" :
    isIPM ? "ipm" :
    "generic";

  // Determine Primary Project Focus Subject
  let subject = "Sustainable Rural Development";
  if (isCarbon) subject = "Horticulture & Timber Carbon Credit Project";
  else if (isEnviro) subject = "Environmental Awareness & Waste Management";
  else if (isChilli && isTech) subject = "Blockchain Chilli Traceability & Market Linkages";
  else if (isChilli && isVermi) subject = "Chilli IPM & Vermi-Compost Technology";
  else if (isChilli) subject = "Residue-Free Chilli Cultivation & IPM";
  else if (isVermi) subject = "Vermi-Composting & Organic Waste Management";
  else if (isPaddy && searchText.includes("dsr")) subject = "Direct Seeded Rice (DSR) & Sustainable Farming";
  else if (isPaddy) subject = "System of Rice Intensification (SRI) Paddy";
  else if (isVet) subject = "Mobile Veterinary Services & Livestock Care";
  else if (isBee) subject = "Mustard Crop Productivity via Bee Pollination";
  else if (isTribal) subject = "Tribal Horticulture Livelihoods via Wadi Approach";
  else if (isTech) subject = "Digital Information Technology & Farmer Virtualization";
  else if (isWater) subject = "Community Watershed & Rainwater Harvesting";
  else if (isChild) subject = "Child Protection, Education & Rights Support";
  else if (isHealth) subject = "Community Health, Sanitation & Hygiene";
  else if (isGender) subject = "Women-Led Micro-Enterprise & Livelihood Units";
  else if (isPlantation) subject = "Community Tree Plantation & Green Cover";
  else if (isMarket) subject = "Farmer Market Linkages & Collective Organising";
  else if (isYouth) subject = "Rural Youth Livelihood & Skill Development";
  else if (isNRM) subject = "Climate-Resilient Natural Resource Management";
  else if (isIPM) subject = "Responsible Pesticide Use & IPM Training";

  // Mission Header & Context
  const missionHeader = `Delivering ${subject} across ${location}`;
  const missionContextText = `${project.name}. Delivered in direct partnership with ${project.funder}, this project addresses core socio-economic and environmental challenges by supporting ${project.beneficiaries}.`;
  
  const bottleneckByTopic: Record<TopicKey, string> = {
    carbon: "limited access to carbon-credit markets and a lack of tree cover on household land",
    environment: "waste accumulation, litter, and low community awareness of environmental practices",
    water: "water scarcity, tank siltation, and declining groundwater tables",
    health: "access to preventive health services, sanitation awareness, and disease mitigation",
    child: "schooling infrastructure, child labour vulnerabilities, and youth skill building",
    vet: "timely livestock healthcare, diagnostic coverage, and veterinary extension services",
    chilli: "chilli pest pressure, pesticide overuse, and residue-driven market rejection",
    vermi: "chemical fertilizer dependence and limited access to organic soil inputs",
    paddy: "excessive water use and input costs in conventional paddy cultivation",
    bee: "declining natural pollination and under-utilised mustard crop potential",
    tech: "supply-chain traceability and verified market access for smallholder produce",
    tribal: "limited land productivity and income options on tribal household land",
    gender: "limited independent income and financial inclusion for women",
    plantation: "low green cover and under-utilised common and waste lands",
    market: "limited direct market access and weak bargaining power for small farmers",
    youth: "limited local livelihood and vocational skill opportunities for rural youth",
    nrm: "climate variability, drought vulnerability, and natural resource degradation",
    ipm: "unsafe and excessive pesticide use among farming households",
    generic: "crop productivity, pest resistance, soil degradation, and market price discovery",
  };
  const regionalNeedText = `In the targeted eco-regions of ${location}, rural households faced critical bottlenecks in ${bottleneckByTopic[topicKey]}. EFFORT deployed structured, on-ground field solutions to build long-term community resilience.`;

  const objectivePoint3ByTopic: Record<TopicKey, string> = {
    carbon: "Build long-term farmer stewardship of plantation sites for sustained carbon sequestration.",
    environment: "Build self-sustaining school and community awareness champions to sustain the campaign.",
    water: "Build self-sustaining Village Watershed Committees to maintain assets post-completion.",
    health: "Build self-reliant Village Health Committees to sustain outcomes post-completion.",
    child: "Build self-sustaining School Management Committees to sustain outcomes post-completion.",
    vet: "Integrate service delivery into ongoing Animal Husbandry Department operations.",
    chilli: "Build self-sustaining Community-Based Organisations (CBOs) to maintain assets post-completion.",
    vermi: "Build self-sustaining women's SHGs to maintain vermi-compost operations post-completion.",
    paddy: "Build self-sustaining farmer groups to maintain SRI/DSR practices post-completion.",
    bee: "Build self-sustaining farmer groups to maintain hive management post-completion.",
    tech: "Build self-sustaining farmer and staff ownership of the traceability system post-completion.",
    tribal: "Build self-sustaining tribal household stewardship of Wadi orchards post-completion.",
    gender: "Build self-sustaining women's SHGs to maintain livelihood activities post-completion.",
    plantation: "Build self-sustaining school and community stewardship of plantation sites.",
    market: "Build self-sustaining Farmers Producer Organisation governance post-completion.",
    youth: "Build self-sustaining community-based mentorship networks for trained youth.",
    nrm: "Build self-sustaining community institutions to maintain resilient practices post-completion.",
    ipm: "Build self-sustaining farmer-to-farmer training networks on responsible pesticide use.",
    generic: "Build self-sustaining Community-Based Organisations (CBOs) to maintain assets post-completion.",
  };
  const coreObjectivePoints = [
    `Mobilize and empower ${stat ? `${stat.value} ${stat.unit}` : "local community members"} across ${villageCount ? `${villageCount} villages` : location}.`,
    `Introduce specialized, climate-resilient practices tailored to ${subject}.`,
    objectivePoint3ByTopic[topicKey],
  ];

  // Interventions Pillars (Tab 2)
  const interventionsPillars = [
    {
      title: isWater ? "Water Infrastructure & Tank Restoration" :
             isHealth ? "Health Clinics & Awareness Drives" :
             isChild ? "Educational & Skill Enrichment" :
             isVet ? "Mobile Veterinary Doorstep Care" :
             isTech ? "Digital Traceability & Market Tech" :
             "Farmer Capacity Building & Demos",
      desc: isWater ? "Constructed water harvesting structures, de-silted traditional community tanks, and established soil moisture conservation plots." :
            isHealth ? "Organized mobile clinics, distributed hospital sanitation kits, and conducted grassroots disease prevention campaigns." :
            isChild ? "Established learning centers, provided school sanitation facilities, and conducted child rights sensitisation." :
            isVet ? "Deployed mobile veterinary vans with issue-tracking software for real-time livestock diagnostic support." :
            isTech ? "Implemented QR code traceability, virtualized stock management, and linked farmers directly to market buyers." :
            "Established hands-on demonstration plots, trained farmers on IPM/IDM protocols, and provided vermi-compost units."
    },
    {
      title: isVermi ? "Organic Bio-Inputs & Vermi Units" :
             isPaddy ? "Water-Saving Cultivation Tech" :
             isHealth ? "Sanitation & Hygiene Infrastructure" :
             isChild ? "Child Protection & Rehabilitation" :
             "Resource & Input Facilitation",
      desc: isVermi ? "Installed unit-level vermi-compost structures, supplied earthworm cultures, and trained women SHGs on organic fertilizer production." :
            isPaddy ? "Promoted SRI paddy line planting and DSR seed drill techniques, reducing water consumption by up to 35%." :
            isHealth ? "Constructed village sanitation facilities and educated households on WASH hygiene practices." :
            isChild ? "Rehabilitated child laborers into formal government schools with necessary educational kits and nutritional support." :
            "Supplied high-quality seeds, bio-pesticides, and essential agricultural tools to marginal farmers."
    },
    {
      title: "Market Linkages & Sustainability",
      desc: `Connected beneficiary groups directly to statutory schemes, ${project.funder} network support, and institutional commodity buyers for sustained economic independence.`
    }
  ];

  // Governance Points (Tab 3)
  const governancePoints = [
    `Transparent project delivery in strict alignment with ${project.funder} guidelines.`,
    `Joint field verification by EFFORT coordinators and local government / partner representatives.`,
    `Formally audited beneficiary rosters and verified project handover to community institutions.`
  ];

  // 4-Stage Execution Blueprint — one topic bucket per project, so the "generic agriculture"
  // catch-all (previously covering chilli, vermi, paddy, bee, tech and tribal projects alike
  // with identical wording) now splits into its real, name-derived sub-topics.
  const stage01ItemsByTopic: Record<TopicKey, string[]> = {
    carbon: [
      `Surveyed candidate land parcels for horticulture and timber species suitability across ${location}.`,
      `Formed Farmers' Interest Groups and enrolled lead plantation households.`,
      `Finalized species selection and the carbon credit monitoring methodology with ${project.funder}.`,
    ],
    environment: [
      `Surveyed baseline awareness and existing waste/litter conditions across ${location}.`,
      `Engaged schools, community leaders, and local institutions as awareness partners.`,
      `Finalized the awareness campaign schedule and target audience groups.`,
    ],
    water: [
      `Executed baseline hydrological and topographical surveys in ${villageCount ? `${villageCount} villages` : location}.`,
      `Formed Village Watershed Committees and aligned local panchayats.`,
      `Mapped priority water harvesting locations and tank silt levels.`,
    ],
    health: [
      `Conducted community health baseline mapping across ${location}.`,
      `Enlisted local ASHA workers, ANMs, and SHG leaders as health volunteers.`,
      `Identified high-risk households and prepared intervention schedules.`,
    ],
    child: [
      `Surveyed out-of-school children and child labor hotspots in target villages.`,
      `Engaged parents, community leaders, and local schools for child enrollment.`,
      `Established baseline learning and nutritional assessment profiles.`,
    ],
    vet: [
      `Mapped livestock population and veterinary service deficits across mandals.`,
      `Configured Issue Tracking & Reporting System software for mobile clinic vans.`,
      `Formed livestock rearer groups for scheduled door-step visit routes.`,
    ],
    chilli: [
      `Conducted baseline chilli crop and pest-pressure surveys across ${villageCount ? `${villageCount} villages` : location}.`,
      `Formed Farmers' Interest Groups and selected lead chilli demonstration plots.`,
      `Finalized the IPM and residue-reduction demonstration schedule.`,
    ],
    vermi: [
      `Surveyed households for organic waste availability and compost demand in ${location}.`,
      `Formed women SHGs to anchor vermi-compost unit management.`,
      `Selected vermi-compost unit sites and finalized earthworm culture sourcing.`,
    ],
    paddy: [
      `Conducted baseline water-use and soil surveys across paddy-growing plots in ${location}.`,
      `Formed Farmers' Interest Groups and selected lead SRI/DSR demonstration farmers.`,
      `Finalized seed variety selection and line-planting or seed-drill schedules.`,
    ],
    bee: [
      `Surveyed mustard-growing plots and existing pollination practices in ${location}.`,
      `Formed farmer groups to host demonstration hives and pollination plots.`,
      `Finalized hive placement sites and bee colony sourcing.`,
    ],
    tech: [
      `Mapped existing supply-chain and traceability gaps for beneficiary farmers.`,
      `Formed Farmers' Interest Groups and onboarded lead demonstration participants.`,
      `Finalized the digital tools and QR/traceability workflow for rollout.`,
    ],
    tribal: [
      `Surveyed tribal households and available Wadi orchard land in ${location}.`,
      `Formed Farmers' Interest Groups and selected lead demonstration households.`,
      `Finalized horticulture species selection and plantation schedules.`,
    ],
    gender: [
      `Conducted baseline household and livelihood-needs surveys among target women in ${location}.`,
      `Formed or strengthened women's Self-Help Groups (SHGs) as the project's core unit.`,
      `Finalized the livelihood/income-generation activities to be piloted.`,
    ],
    plantation: [
      `Identified common and waste lands suitable for tree plantation in ${location}.`,
      `Engaged schools and communities as plantation and upkeep partners.`,
      `Finalized sapling species selection and plantation schedule.`,
    ],
    market: [
      `Surveyed existing market access and price-discovery gaps for small farmers in ${location}.`,
      `Formed or engaged Farmers Producer Organisations and farmer associations.`,
      `Finalized the market infrastructure or collective-organising plan.`,
    ],
    youth: [
      `Surveyed unemployed and under-employed rural youth in ${villageCount ? `${villageCount} villages` : location}.`,
      `Identified vocational and livelihood skill-training demand among youth.`,
      `Finalized the skill-training curriculum and enrollment list.`,
    ],
    nrm: [
      `Conducted baseline natural resource and drought-vulnerability assessments in ${location}.`,
      `Formed community institutions to lead natural resource management planning.`,
      `Finalized climate-resilient farming practices for demonstration.`,
    ],
    ipm: [
      `Surveyed pesticide-use practices and farmer awareness levels in ${location}.`,
      `Formed Farmers' Interest Groups and selected lead demonstration farmers.`,
      `Finalized the IPM and responsible pesticide-use training curriculum.`,
    ],
    generic: [
      `Conducted baseline agricultural and soil health surveys in ${villageCount ? `${villageCount} target villages` : location}.`,
      `Formed Farmers' Interest Groups and selected lead demonstration farmers.`,
      `Finalized crop selection and IPM/IDM field demonstration schedules.`,
    ],
  };

  const stage02ItemsByTopic: Record<TopicKey, string[]> = {
    carbon: [
      `Trained enrolled farmers on horticulture and timber species plantation techniques.`,
      `Demonstrated plot preparation, spacing, and sapling care requirements.`,
      `Briefed farmers on the carbon credit verification and monitoring process.`,
    ],
    environment: [
      `Conducted awareness workshops and clean-up drives with schools and communities.`,
      `Demonstrated waste segregation, composting, or litter-reduction practices.`,
      `Trained student and community volunteers as awareness champions.`,
    ],
    water: [
      `Trained watershed committee members on water budgeting and structure maintenance.`,
      `Demonstrated soil moisture retention methods to local farmers.`,
      `Provided tools and engineering guidance for tank de-silting.`,
    ],
    health: [
      `Organized community hygiene workshops and medical screening camps.`,
      `Distributed PPE kits, hospital sanitation kits, and preventive care guides.`,
      `Trained youth volunteers on disease awareness and first response.`,
    ],
    child: [
      `Opened special learning centers with trained instructors and learning aids.`,
      `Provided school sanitation kits, water facilities, and hygiene education.`,
      `Conducted child rights sensitisation campaigns for parents and employers.`,
    ],
    vet: [
      `Trained livestock rearers on preventive vaccination and animal nutrition.`,
      `Demonstrated animal hostel management under government loan schemes.`,
      `Trained paravets on digital issue logging and prescription delivery.`,
    ],
    chilli: [
      `Organized Farmer Field Schools on IPM and residue-free chilli cultivation.`,
      `Demonstrated bio-pesticide preparation and safe pesticide-use practices.`,
      `Distributed IPM kits and post-harvest handling training to chilli growers.`,
    ],
    vermi: [
      `Organized hands-on vermi-compost unit construction and worm inoculation demonstrations.`,
      `Trained women SHG members on organic fertilizer production and quality control.`,
      `Distributed starter earthworm cultures and unit-construction materials.`,
    ],
    paddy: [
      `Organized practical Farmer Field Schools on SRI line planting and DSR seed drill operation.`,
      `Demonstrated water-saving irrigation scheduling for paddy plots.`,
      `Distributed certified seed and seed-drill access to demonstration farmers.`,
    ],
    bee: [
      `Trained farmer groups on bee colony management and pollination scheduling.`,
      `Demonstrated hive placement alongside mustard bloom cycles.`,
      `Distributed starter bee colonies and hive-management kits.`,
    ],
    tech: [
      `Trained farmers and field staff on QR code traceability and digital record-keeping.`,
      `Demonstrated stock virtualization and buyer-linkage software workflows.`,
      `Piloted the traceability system with a first batch of demonstration farmers.`,
    ],
    tribal: [
      `Organized Wadi orchard training covering horticulture and land-preparation techniques.`,
      `Demonstrated intercropping and soil/water conservation on model Wadi plots.`,
      `Distributed saplings, bio-inputs, and horticulture starter kits.`,
    ],
    gender: [
      `Trained women SHG members on income-generation skills and micro-enterprise basics.`,
      `Organized exposure visits and mentoring sessions with established women entrepreneurs.`,
      `Distributed starter kits or working capital support for the chosen livelihood activity.`,
    ],
    plantation: [
      `Organized plantation drives with schools and community volunteers.`,
      `Demonstrated sapling care, watering schedules, and survival tracking.`,
      `Distributed seed balls or saplings for common and waste land planting.`,
    ],
    market: [
      `Trained FPO/association members on collective bargaining and record-keeping.`,
      `Demonstrated direct-to-customer selling models and pricing transparency.`,
      `Facilitated registration and governance structure for farmer collectives.`,
    ],
    youth: [
      `Delivered vocational and skill-development training sessions for enrolled youth.`,
      `Organized exposure visits and mentoring with local employers or enterprises.`,
      `Distributed training materials and starter toolkits for chosen trades.`,
    ],
    nrm: [
      `Organized Farmer Field Schools on climate-resilient and drought-tolerant practices.`,
      `Demonstrated natural resource conservation techniques on model plots.`,
      `Distributed climate-resilient seed varieties and bio-input kits.`,
    ],
    ipm: [
      `Organized Farmer Field Schools on IPM and responsible pesticide handling.`,
      `Demonstrated safe spraying practices and personal protective equipment use.`,
      `Distributed IPM kits and pesticide-safety training materials.`,
    ],
    generic: [
      `Organized practical Farmer Field Schools directly on selected demo plots.`,
      `Demonstrated IPM bio-pesticide preparation and responsible chemical usage.`,
      `Distributed starter bio-input kits and high-yielding seed varieties.`,
    ],
  };

  const stage03ItemsByTopic: Record<TopicKey, string[]> = {
    carbon: [
      `Completed plantation of horticulture and timber species across the enrolled acreage.`,
      `Monitored sapling survival rates and carbon sequestration progress.`,
      `Prepared verification data for carbon credit issuance with ${project.funder}.`,
    ],
    environment: [
      `Conducted mass awareness campaigns and clean-up drives across target sites.`,
      `Monitored community adoption of waste-reduction and litter-management practices.`,
      `Facilitated local institutional ownership of ongoing awareness efforts.`,
    ],
    water: [
      `Completed excavation and de-silting of ${villageCount ? `${villageCount} community tanks` : "targeted water structures"}.`,
      `Constructed check dams, percolation tanks, and recharge shafts.`,
      `Monitored groundwater table recharge and irrigation water availability.`,
    ],
    health: [
      `Delivered essential medical equipment to government hospitals and PHCs.`,
      `Operated mobile health vans offering free diagnostic tests and consultations.`,
      `Established WASH infrastructure in target schools and community centers.`,
    ],
    child: [
      `Maintained 100% student retention and transitioned children into formal schools.`,
      `Upgraded school physical amenities, drinking water systems, and toilets.`,
      `Monitored child protection cases and prevented child trafficking attempts.`,
    ],
    vet: [
      `Operated Mobile Veterinary Clinics (MVC) providing doorstep treatment and emergency care.`,
      `Logged all animal health complaints via the real-time Issue Tracking System.`,
      `Supplied subsidized veterinary medicines, mineral mixtures, and fodder support.`,
    ],
    chilli: [
      `Installed IPM traps and residue-reduction demonstration plots across target villages.`,
      `Monitored pest incidence, chemical usage, and produce quality against baseline.`,
      `Facilitated direct market/buyer linkages for residue-compliant chilli produce.`,
    ],
    vermi: [
      `Installed unit-level vermi-compost beds across participating households.`,
      `Monitored compost maturation cycles and organic fertilizer output quality.`,
      `Facilitated direct sale and local aggregation of finished vermi-compost.`,
    ],
    paddy: [
      `Rolled out SRI line planting and DSR seed drills across demonstration plots.`,
      `Monitored water consumption, crop growth, and yield against baseline.`,
      `Facilitated produce aggregation and market linkage for harvested paddy.`,
    ],
    bee: [
      `Deployed bee hives across demonstration mustard fields.`,
      `Monitored pollination activity, hive health, and crop yield impact.`,
      `Facilitated honey and pollination-linked income opportunities for farmer groups.`,
    ],
    tech: [
      `Deployed blockchain/QR code tagging systems across the beneficiary supply chain.`,
      `Monitored traceability data accuracy and farmer adoption rates.`,
      `Facilitated direct market linkages using verified traceability records.`,
    ],
    tribal: [
      `Completed Wadi orchard plantation of horticulture and timber species.`,
      `Monitored sapling survival rates and intercrop growth on tribal land.`,
      `Facilitated market linkages for early intercrop produce.`,
    ],
    gender: [
      `Rolled out the chosen income-generation activity across participating women's SHGs.`,
      `Monitored production quality, savings, and loan-repayment discipline within groups.`,
      `Facilitated market and institutional linkages for SHG-produced goods or services.`,
    ],
    plantation: [
      `Completed planting across identified common and waste land sites.`,
      `Monitored sapling survival rates and green cover growth.`,
      `Facilitated ongoing community stewardship of planted sites.`,
    ],
    market: [
      `Established or upgraded market infrastructure for direct farmer-to-customer sales.`,
      `Monitored FPO/association membership growth and transaction volumes.`,
      `Facilitated linkages between farmer collectives and institutional buyers.`,
    ],
    youth: [
      `Placed or self-employed trained youth in their chosen vocational trade.`,
      `Monitored income and employment outcomes against baseline.`,
      `Facilitated access to government skill-certification schemes.`,
    ],
    nrm: [
      `Rolled out climate-resilient farming practices across demonstration villages.`,
      `Monitored soil health, water availability, and crop resilience during dry spells.`,
      `Facilitated produce aggregation and market linkage for resilient crop varieties.`,
    ],
    ipm: [
      `Installed IPM traps and pesticide-safety demonstration plots across target villages.`,
      `Monitored pesticide-use reduction and adoption of safe-handling practices.`,
      `Facilitated farmer-to-farmer spread of responsible pesticide-use practices.`,
    ],
    generic: [
      `Installed unit-level bio-input kits or drip irrigation sets across demo plots.`,
      `Monitored crop growth, pest incidence, and reduction in chemical pesticide costs.`,
      `Facilitated direct produce aggregation at village collection centers.`,
    ],
  };

  const stage04ItemsByTopic: Record<TopicKey, string[]> = {
    carbon: [
      `Established the ongoing carbon credit monitoring and reporting cycle with ${project.funder}.`,
      `Transferred plantation care responsibilities to enrolled farmer households.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    environment: [
      `Established self-sustaining local awareness champions in schools and communities.`,
      `Transferred campaign ownership to community and institutional partners.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    water: [
      `Handed over maintained water harvesting assets to Village Watershed Committees.`,
      `Instituted community water-user fees for sustained maintenance.`,
      `Verified 100% completion with ${project.funder} representatives.`,
    ],
    health: [
      `Established self-reliant Village Health Committees for ongoing monitoring.`,
      `Transferred hospital medical equipment to government health authorities.`,
      `Verified reduction in disease incidence and completed final audit.`,
    ],
    child: [
      `Secured 100% school enrollment in target villages with zero child labor.`,
      `Handed over upgraded school amenities to School Management Committees (SMCs).`,
      `Published project outcome report verified by ${project.funder}.`,
    ],
    vet: [
      `Integrated Mobile Veterinary Clinic routes into Animal Husbandry Department operations.`,
      `Achieved sustained increase in doorstep veterinary coverage across blocks.`,
      `Formally closed project with detailed service coverage reports.`,
    ],
    chilli: [
      `Established formal buyer linkages with ${project.funder} and Spices Board channels.`,
      `Transferred IPM and residue-management practices to farmer-led groups.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    vermi: [
      `Transferred vermi-compost unit management to trained women SHGs.`,
      `Established ongoing organic fertilizer supply chains for participating villages.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    paddy: [
      `Established formal seed and produce buyer linkages with ${project.funder} and aggregators.`,
      `Transferred SRI/DSR field-management knowledge to farmer-led groups.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    bee: [
      `Transferred hive management to trained farmer groups for ongoing pollination cycles.`,
      `Established honey and pollination-linked income tracking for beneficiaries.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    tech: [
      `Transferred traceability system ownership to trained farmer groups and staff.`,
      `Established ongoing buyer linkages built on verified traceability records.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    tribal: [
      `Transferred Wadi orchard management to trained tribal households.`,
      `Established ongoing market linkages for horticulture and timber produce.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    gender: [
      `Transferred income-generation activity management to trained women SHG leaders.`,
      `Established ongoing market and institutional linkages for SHG-produced goods.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    plantation: [
      `Transferred plantation site stewardship to schools and community groups.`,
      `Established ongoing watering and maintenance responsibility for planted sites.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    market: [
      `Transferred market/FPO governance to trained farmer leaders.`,
      `Established ongoing buyer and institutional linkages for the collective.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    youth: [
      `Transferred ongoing skill-development mentorship to community-based trainers.`,
      `Established alumni networks for continued peer support among trained youth.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    nrm: [
      `Transferred natural resource management planning to community institutions.`,
      `Established ongoing monitoring of climate-resilient practice adoption.`,
      `Verified 100% completion with ${project.funder} representatives.`,
    ],
    ipm: [
      `Transferred IPM and pesticide-safety training ownership to farmer leaders.`,
      `Established ongoing farmer-to-farmer training for responsible pesticide use.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
    generic: [
      `Established formal buyer linkages with ${project.funder} and commercial aggregators.`,
      `Transferred CBO management to trained farmer leaders for ongoing operations.`,
      `Verified 100% completion with formal handover documentation.`,
    ],
  };

  const stage01Items = stage01ItemsByTopic[topicKey];
  const stage02Items = stage02ItemsByTopic[topicKey];
  const stage03Items = stage03ItemsByTopic[topicKey];
  const stage04Items = stage04ItemsByTopic[topicKey];

  const stage1TitleByTopic: Record<TopicKey, string> = {
    carbon: "Plantation Land & Species Survey",
    environment: "Baseline Awareness Survey",
    water: "Watershed Survey & Baseline",
    health: "Health Baseline & Mapping",
    child: "Child & School Survey",
    vet: "Livestock Needs Mapping",
    chilli: "Chilli Plot & Pest Survey",
    vermi: "Compost Unit & SHG Survey",
    paddy: "Paddy Plot & Water-Use Survey",
    bee: "Mustard Plot & Pollination Survey",
    tech: "Traceability Gap Mapping",
    tribal: "Tribal Land & Household Survey",
    gender: "Women's SHG & Livelihood Survey",
    plantation: "Plantation Site Survey",
    market: "Market Access Survey",
    youth: "Youth Skills Survey",
    nrm: "NRM & Drought Vulnerability Survey",
    ipm: "Pesticide Use Baseline Survey",
    generic: "Baseline & Farmer Selection",
  };
  const stage2TitleByTopic: Record<TopicKey, string> = {
    carbon: "Plantation Training",
    environment: "Awareness Workshops & Drives",
    water: "Technical Guidance & Training",
    health: "Hygiene & Care Workshops",
    child: "Special Learning & Rights",
    vet: "Paravet & Rearer Training",
    chilli: "Chilli IPM Field Schools",
    vermi: "Compost Construction Training",
    paddy: "SRI/DSR Field Schools",
    bee: "Beekeeping & Pollination Training",
    tech: "Digital Tools & QR Training",
    tribal: "Wadi Orchard Training",
    gender: "Livelihood Skills Training",
    plantation: "Plantation Drives",
    market: "FPO & Market Training",
    youth: "Vocational Skills Training",
    nrm: "Climate-Resilient Field Schools",
    ipm: "IPM Field Schools",
    generic: "Field Schools & Demos",
  };
  const stage3TitleByTopic: Record<TopicKey, string> = {
    carbon: "Plantation Rollout",
    environment: "Campaign & Clean-Up Rollout",
    water: "Structure Construction & De-silting",
    health: "Equipment & Mobile Clinics",
    child: "Amenities & School Upgrade",
    vet: "Doorstep MVC Operations",
    chilli: "IPM Kit & Market Rollout",
    vermi: "Compost Unit Rollout",
    paddy: "Line Planting & Seed Drill Rollout",
    bee: "Hive Deployment & Monitoring",
    tech: "QR Tagging & System Rollout",
    tribal: "Orchard Plantation Rollout",
    gender: "Livelihood Activity Rollout",
    plantation: "Plantation Completion",
    market: "Market Infrastructure Rollout",
    youth: "Placement & Self-Employment",
    nrm: "Resilient Practice Rollout",
    ipm: "Pesticide-Safety Rollout",
    generic: "Asset & Input Distribution",
  };
  const stage4TitleByTopic: Record<TopicKey, string> = {
    carbon: "Carbon Credit Handover",
    environment: "Awareness Handover",
    water: "Watershed Handover",
    health: "Health Committee Handover",
    child: "School Handover",
    vet: "Service Integration",
    chilli: "Buyer & CBO Handover",
    vermi: "SHG Handover",
    paddy: "Farmer Group Handover",
    bee: "Hive Handover",
    tech: "System Handover",
    tribal: "Household Handover",
    gender: "SHG Leadership Handover",
    plantation: "Site Handover",
    market: "FPO Governance Handover",
    youth: "Mentorship Handover",
    nrm: "Institutional Handover",
    ipm: "Training Handover",
    generic: "Handover & Autonomy",
  };
  const stage2DescByTopic: Record<TopicKey, string> = {
    carbon: "Hands-on plantation training sessions conducted directly with enrolled farmer households.",
    environment: "Awareness workshops and clean-up drives conducted directly with schools and communities.",
    water: "Hands-on training sessions and practical demonstrations conducted directly with Watershed Committees.",
    health: "Hands-on hygiene and care workshops conducted directly with ASHA workers and communities.",
    child: "Special learning sessions and rights sensitisation conducted directly in target villages.",
    vet: "Hands-on training sessions conducted directly with livestock rearers and paravets.",
    chilli: "Hands-on Farmer Field Schools on IPM conducted directly on chilli demonstration plots.",
    vermi: "Hands-on compost-construction training conducted directly with women's SHGs.",
    paddy: "Hands-on Farmer Field Schools on SRI/DSR conducted directly on demonstration plots.",
    bee: "Hands-on beekeeping training conducted directly with farmer groups.",
    tech: "Hands-on digital tools and QR-tagging training conducted directly with farmers and staff.",
    tribal: "Hands-on Wadi orchard training conducted directly with tribal households.",
    gender: "Hands-on livelihood skills training conducted directly with women's SHG members.",
    plantation: "Plantation drives conducted directly with schools and community volunteers.",
    market: "Hands-on FPO governance and market training conducted directly with member farmers.",
    youth: "Hands-on vocational skills training conducted directly with enrolled youth.",
    nrm: "Hands-on climate-resilient Farmer Field Schools conducted directly in project villages.",
    ipm: "Hands-on IPM Field Schools conducted directly with farmer groups.",
    generic: "Hands-on training sessions and practical demonstrations conducted directly in project villages.",
  };
  const stage3DescByTopic: Record<TopicKey, string> = {
    carbon: "Deploying horticulture and timber species plantation across the enrolled acreage.",
    environment: "Deploying awareness campaigns and clean-up drives across target sites.",
    water: "Deploying water harvesting structures and infrastructure across target communities.",
    health: "Deploying medical equipment and mobile clinics across target communities.",
    child: "Deploying school amenities and learning support across target communities.",
    vet: "Deploying Mobile Veterinary Clinics and doorstep care across target mandals.",
    chilli: "Deploying IPM kits and residue-reduction plots across target communities.",
    vermi: "Deploying vermi-compost units and bio-inputs across target communities.",
    paddy: "Deploying SRI line planting and DSR seed drills across demonstration plots.",
    bee: "Deploying bee hives across demonstration mustard fields.",
    tech: "Deploying QR-tagging and traceability systems across the beneficiary supply chain.",
    tribal: "Deploying Wadi orchard plantation across tribal household land.",
    gender: "Deploying the chosen income-generation activity across participating SHGs.",
    plantation: "Deploying plantation drives across identified common and waste land sites.",
    market: "Deploying market infrastructure and FPO systems across target communities.",
    youth: "Deploying vocational placement and self-employment support for trained youth.",
    nrm: "Deploying climate-resilient farming practices across demonstration villages.",
    ipm: "Deploying IPM traps and pesticide-safety demonstrations across target villages.",
    generic: "Deploying technical assets, infrastructure, or bio-inputs across target communities.",
  };
  const stage4DescByTopic: Record<TopicKey, string> = {
    carbon: "Establishing ongoing carbon credit monitoring and farmer stewardship of plantation sites.",
    environment: "Establishing self-sustaining awareness champions in schools and communities.",
    water: "Establishing community management of water assets for sustained post-project operations.",
    health: "Establishing community management of health outcomes for sustained post-project operations.",
    child: "Establishing School Management Committee oversight for sustained post-project operations.",
    vet: "Integrating service delivery into ongoing Animal Husbandry Department operations.",
    chilli: "Establishing community management of buyer linkages for sustained post-project operations.",
    vermi: "Establishing women's SHG management for sustained post-project operations.",
    paddy: "Establishing farmer group management for sustained post-project operations.",
    bee: "Establishing farmer group management of hives for sustained post-project operations.",
    tech: "Establishing farmer and staff ownership of the traceability system.",
    tribal: "Establishing tribal household stewardship for sustained post-project operations.",
    gender: "Establishing women's SHG leadership for sustained post-project operations.",
    plantation: "Establishing school and community stewardship for sustained post-project operations.",
    market: "Establishing FPO governance for sustained post-project operations.",
    youth: "Establishing community-based mentorship for sustained post-project support.",
    nrm: "Establishing community institution management for sustained post-project operations.",
    ipm: "Establishing farmer-to-farmer training networks for sustained post-project operations.",
    generic: "Establishing community management for sustained post-project operations.",
  };

  const blueprintStages = [
    {
      stage: "01",
      phase: "Phase 1: Mobilization",
      title: stage1TitleByTopic[topicKey],
      desc: `Surveying target areas in ${location} and mobilizing beneficiaries with ${project.funder}.`,
      color: "amber" as const,
      items: stage01Items,
    },
    {
      stage: "02",
      phase: "Phase 2: Capacity",
      title: stage2TitleByTopic[topicKey],
      desc: stage2DescByTopic[topicKey],
      color: "emerald" as const,
      items: stage02Items,
    },
    {
      stage: "03",
      phase: "Phase 3: Delivery",
      title: stage3TitleByTopic[topicKey],
      desc: stage3DescByTopic[topicKey],
      color: "sky" as const,
      items: stage03Items,
    },
    {
      stage: "04",
      phase: "Phase 4: Handover",
      title: stage4TitleByTopic[topicKey],
      desc: stage4DescByTopic[topicKey],
      color: "violet" as const,
      items: stage04Items,
    },
  ];

  // Impact Pillars (6 cards) — every one of the 6 slots is written per-topic, with its own
  // icon, so no two topic buckets share identical pillar cards. Slot roles stay consistent
  // (1 Primary Outcome, 2 People/Training, 3 Protection/Sustainability, 4 Cost/Access,
  // 5 Economic Effect, 6 Ownership/Governance) but the actual claim is topic-accurate —
  // e.g. child-development projects never claim "reduced reliance on synthetic chemicals".
  type Pillar = { icon: PillarIconKey; title: string; text: string; color: "emerald" | "amber" | "teal" | "sky" | "rose" | "violet" };
  const pillarsByTopic: Record<TopicKey, Pillar[]> = {
    carbon: [
      { icon: "trees", title: "Carbon Sequestration", text: "New horticulture and timber tree cover established, generating measurable, verifiable carbon credits.", color: "emerald" },
      { icon: "users", title: "Farmer Training", text: "Built plantation and land-stewardship skills among enrolled farmer households.", color: "amber" },
      { icon: "leaf", title: "Ecosystem Restoration", text: "Restored tree cover improved soil health and biodiversity on previously unused land.", color: "teal" },
      { icon: "coins", title: "New Farmer Income", text: "Carbon credit revenue created a new, tree-cover-linked income stream for enrolled households.", color: "sky" },
      { icon: "trending", title: "Long-Term Asset Growth", text: "Maturing tree cover becomes a growing household asset beyond the initial carbon credit.", color: "rose" },
      { icon: "handshake", title: "Plantation Stewardship", text: `Formed farmer groups to maintain plantation sites independently alongside ${project.funder}.`, color: "violet" },
    ],
    environment: [
      { icon: "recycle", title: "Environmental Awareness", text: "Built lasting waste-management and litter-reduction habits among students and community members.", color: "emerald" },
      { icon: "graduationCap", title: "Student & Youth Engagement", text: "Trained school students and youth volunteers as ongoing environmental awareness champions.", color: "amber" },
      { icon: "leaf", title: "Cleaner Local Surroundings", text: "Reduced litter and waste accumulation across targeted beaches, villages, and public spaces.", color: "teal" },
      { icon: "book", title: "Institutional Adoption", text: "Schools and community institutions adopted ongoing waste-management practices.", color: "sky" },
      { icon: "trending", title: "Ripple-Effect Awareness", text: "Trained volunteers continue spreading waste-management practices beyond the project's direct reach.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Formed local awareness champions to sustain the campaign independently alongside ${project.funder}.`, color: "violet" },
    ],
    water: [
      { icon: "droplets", title: "Water Security", text: "Enhanced groundwater recharge and increased irrigation water availability for crops.", color: "emerald" },
      { icon: "users", title: "Committee Capacity", text: "Built lasting water-budgeting and structure-maintenance skills among Village Watershed Committees.", color: "amber" },
      { icon: "leaf", title: "Resource Sustainability", text: "Protected local ecosystems through groundwater recharge and reduced water-table stress.", color: "teal" },
      { icon: "cloudRain", title: "Irrigation Efficiency", text: "Efficient water management techniques reducing crop vulnerability during drought periods.", color: "sky" },
      { icon: "trending", title: "Household Income Growth", text: "Reliable irrigation access translated into steadier crop yields and household income.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Formed self-governing Watershed Committees to maintain assets independently alongside ${project.funder}.`, color: "violet" },
    ],
    health: [
      { icon: "heartPulse", title: "Health & Well-being", text: "Reduced incidence of preventable diseases and improved access to essential medical care.", color: "emerald" },
      { icon: "users", title: "Health Worker Capacity", text: "Built lasting health-awareness and first-response skills among local ASHA workers and volunteers.", color: "amber" },
      { icon: "shield", title: "Disease Prevention", text: "Reduced incidence of preventable disease through sustained sanitation and hygiene practices.", color: "teal" },
      { icon: "droplets", title: "WASH Awareness", text: "Widespread adoption of clean drinking water practices, sanitation, and personal hygiene.", color: "sky" },
      { icon: "trending", title: "Reduced Health Expenditure", text: "Fewer preventable illnesses translated into lower household medical costs.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Formed self-reliant Village Health Committees to sustain outcomes independently alongside ${project.funder}.`, color: "violet" },
    ],
    child: [
      { icon: "baby", title: "Child Protection", text: "Eradicated child labour in target villages and secured 100% formal school education.", color: "emerald" },
      { icon: "users", title: "Parent & Community Engagement", text: "Built lasting awareness among parents, employers, and community leaders on child rights.", color: "amber" },
      { icon: "book", title: "School Retention", text: "Sustained 100% student retention and prevented children from re-entering child labour.", color: "teal" },
      { icon: "shield", title: "Safer Learning Environment", text: "Upgraded school sanitation, water access, and physical safety for enrolled children.", color: "sky" },
      { icon: "trending", title: "Long-Term Household Benefit", text: "Formal education for children improves long-term household earning potential.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Handed over school and child-protection oversight to School Management Committees alongside ${project.funder}.`, color: "violet" },
    ],
    vet: [
      { icon: "paw", title: "Livestock Health", text: "Increased livestock productivity and provided doorstep medical care for domestic animals.", color: "emerald" },
      { icon: "users", title: "Paravet Training", text: "Built lasting vaccination and animal-nutrition skills among livestock rearers and paravets.", color: "amber" },
      { icon: "shield", title: "Disease Prevention", text: "Reduced livestock disease incidence through preventive vaccination and doorstep care.", color: "teal" },
      { icon: "trending", title: "Doorstep Access", text: "Brought veterinary care directly to rearers, reducing travel time and treatment delays.", color: "sky" },
      { icon: "coins", title: "Household Income Growth", text: "Healthier livestock translated into steadier milk, meat, or breeding income for households.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Integrated Mobile Veterinary Clinic routes into ongoing Animal Husbandry Department operations.", color: "violet" },
    ],
    chilli: [
      { icon: "sprout", title: "Residue-Free Yields", text: "Adoption of IPM practices reducing pesticide residue while improving chilli yields and quality.", color: "emerald" },
      { icon: "users", title: "Farmer Training", text: "Built lasting IPM and residue-management skills among chilli-growing farmer groups.", color: "amber" },
      { icon: "leaf", title: "Reduced Chemical Reliance", text: "Lowered pesticide dependence protected soil health and farmer safety.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced pesticide costs through IPM adoption, lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "Market-Linked Income", text: "Residue-compliant produce opened access to better-paying buyers and Spices Board channels.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Established formal buyer linkages with ${project.funder} and transferred CBO management to farmer leaders.`, color: "violet" },
    ],
    vermi: [
      { icon: "sprout", title: "Organic Input Adoption", text: "Reduced dependence on chemical fertilizer through village-produced organic vermi-compost.", color: "emerald" },
      { icon: "users", title: "Women SHG Training", text: "Built lasting compost-production and quality-control skills among women's Self-Help Groups.", color: "amber" },
      { icon: "leaf", title: "Soil Health Improvement", text: "Organic compost use improved soil fertility and reduced chemical fertilizer runoff.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced reliance on chemical fertilizer, significantly lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "New SHG Income", text: "Vermi-compost sales created a new income stream for participating women's groups.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred vermi-compost unit management to trained women SHGs for ongoing operations.", color: "violet" },
    ],
    paddy: [
      { icon: "sprout", title: "Water-Efficient Yields", text: "Adoption of SRI/DSR paddy cultivation reducing water use while maintaining or improving yields.", color: "emerald" },
      { icon: "users", title: "Farmer Training", text: "Built lasting SRI line-planting and DSR seed-drill skills among demonstration farmers.", color: "amber" },
      { icon: "droplets", title: "Water Conservation", text: "Reduced water consumption per acre compared to conventional paddy cultivation.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced seed and water costs through SRI/DSR practices compared to conventional paddy cultivation.", color: "sky" },
      { icon: "trending", title: "Market-Linked Income", text: "Formal buyer linkages improved price realization for harvested paddy.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Established formal seed and produce buyer linkages with ${project.funder} and aggregators.`, color: "violet" },
    ],
    bee: [
      { icon: "sprout", title: "Pollination-Linked Yields", text: "Improved mustard crop yields through managed bee pollination alongside new honey income.", color: "emerald" },
      { icon: "users", title: "Beekeeping Training", text: "Built lasting hive-management and pollination-scheduling skills among farmer groups.", color: "amber" },
      { icon: "leaf", title: "Pollinator Conservation", text: "Managed bee colonies supported local pollinator health alongside crop productivity.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced reliance on synthetic pollination aids, lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "Honey Income Stream", text: "Beekeeping created a new honey-linked income stream alongside improved mustard yields.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred hive management to trained farmer groups for ongoing pollination cycles.", color: "violet" },
    ],
    tech: [
      { icon: "qrCode", title: "Supply Chain Traceability", text: "End-to-end traceability from farm to market, giving buyers verified crop origin data.", color: "emerald" },
      { icon: "users", title: "Digital Skills Training", text: "Built lasting QR-tagging and digital record-keeping skills among farmers and field staff.", color: "amber" },
      { icon: "shield", title: "Data Transparency", text: "Verified, tamper-resistant records improved trust between farmers and buyers.", color: "teal" },
      { icon: "coins", title: "Digital Adoption", text: "Farmer and staff adoption of digital record-keeping and QR-based traceability tools.", color: "sky" },
      { icon: "trending", title: "Premium Market Access", text: "Verified traceability opened access to buyers paying a premium for documented origin.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred traceability system ownership to trained farmer groups and staff.", color: "violet" },
    ],
    tribal: [
      { icon: "trees", title: "Horticulture Livelihoods", text: "New tree-crop income streams established on tribal household land through the Wadi approach.", color: "emerald" },
      { icon: "users", title: "Household Training", text: "Built lasting horticulture and land-preparation skills among tribal households.", color: "amber" },
      { icon: "leaf", title: "Land Restoration", text: "Wadi orchard plantation improved soil and water conservation on tribal household land.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced reliance on purchased inputs through intercropping and on-farm resource use.", color: "sky" },
      { icon: "trending", title: "Multi-Year Asset Growth", text: "Maturing horticulture and timber trees become a growing household asset over time.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred Wadi orchard management to trained tribal households.", color: "violet" },
    ],
    gender: [
      { icon: "users", title: "Women-Led Livelihoods", text: "New income-generation activities established and led by women's Self-Help Groups.", color: "emerald" },
      { icon: "graduationCap", title: "Skill & Confidence Building", text: "Built lasting micro-enterprise and financial-literacy skills among women's SHG members.", color: "amber" },
      { icon: "shield", title: "Reduced Vulnerability", text: "New independent income reduced women's economic dependence and vulnerability.", color: "teal" },
      { icon: "coins", title: "Household Savings Growth", text: "Built SHG savings discipline and reduced dependence on informal high-interest credit.", color: "sky" },
      { icon: "trending", title: "Steady Income Growth", text: "SHG-led livelihood activities created steadier, women-controlled household income.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred income-generation activity management to trained women SHG leaders.", color: "violet" },
    ],
    plantation: [
      { icon: "trees", title: "Green Cover Growth", text: "New tree cover established on common and waste lands, improving local greenery.", color: "emerald" },
      { icon: "graduationCap", title: "Student Engagement", text: "Engaged school students and community volunteers directly in plantation drives.", color: "amber" },
      { icon: "leaf", title: "Environmental Benefit", text: "Improved local green cover and awareness of environmental stewardship among students and communities.", color: "teal" },
      { icon: "shield", title: "Land Utilization", text: "Converted underused common and waste lands into productive green cover.", color: "sky" },
      { icon: "trending", title: "Long-Term Ecological Value", text: "Maturing trees provide shade, air quality, and ecological benefits for years to come.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred plantation site stewardship to schools and community groups.", color: "violet" },
    ],
    market: [
      { icon: "store", title: "Direct Market Access", text: "Small farmers gained direct-to-customer selling channels and stronger collective bargaining power.", color: "emerald" },
      { icon: "users", title: "Collective Organising", text: "Built lasting governance and bargaining skills among Farmers Producer Organisation members.", color: "amber" },
      { icon: "shield", title: "Price Transparency", text: "Direct-to-customer sales reduced dependence on opaque middleman pricing.", color: "teal" },
      { icon: "coins", title: "Reduced Middleman Dependence", text: "Farmers retained more of the final sale price by selling closer to end customers.", color: "sky" },
      { icon: "trending", title: "Steadier Farmer Income", text: "Improved price realization translated into steadier household income for member farmers.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred market/FPO governance to trained farmer leaders.", color: "violet" },
    ],
    youth: [
      { icon: "graduationCap", title: "Youth Employability", text: "Rural youth gained vocational skills and improved access to livelihood opportunities.", color: "emerald" },
      { icon: "users", title: "Mentorship & Exposure", text: "Connected trained youth with local employers and established entrepreneurs for mentorship.", color: "amber" },
      { icon: "briefcase", title: "Reduced Migration Pressure", text: "New local livelihood options reduced pressure on youth to migrate for work.", color: "teal" },
      { icon: "book", title: "Vocational Skill Access", text: "Delivered vocational training directly in target villages, reducing barriers to skill access.", color: "sky" },
      { icon: "trending", title: "Independent Income", text: "Trained youth gained independent income through employment or self-employment.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred ongoing skill-development mentorship to community-based trainers.", color: "violet" },
    ],
    nrm: [
      { icon: "cloudRain", title: "Climate Resilience", text: "Strengthened cropping-system resilience to drought through natural resource management practices.", color: "emerald" },
      { icon: "users", title: "Community Training", text: "Built lasting climate-resilient farming skills among community institutions and farmer groups.", color: "amber" },
      { icon: "leaf", title: "Resource Conservation", text: "Protected soil, water, and natural resources through community-led management practices.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced reliance on synthetic chemicals, significantly lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "Drought-Season Stability", text: "Resilient practices reduced household income volatility during drought years.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred natural resource management planning to community institutions.", color: "violet" },
    ],
    ipm: [
      { icon: "bug", title: "Responsible Pesticide Use", text: "Farmers adopted safer pesticide-handling practices and reduced chemical dependence.", color: "emerald" },
      { icon: "users", title: "Farmer-to-Farmer Training", text: "Built lasting IPM and pesticide-safety skills spread through a farmer-to-farmer approach.", color: "amber" },
      { icon: "shield", title: "Farmer Health & Safety", text: "Safer pesticide-handling practices reduced health risks for farmers and their families.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced pesticide costs through IPM adoption, lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "Sustained Yield Quality", text: "Responsible pesticide use protected long-term soil health and produce quality.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: "Transferred IPM and pesticide-safety training ownership to farmer leaders.", color: "violet" },
    ],
    generic: [
      { icon: "tractor", title: "Improved Yields", text: "Adoption of improved practices leading to higher crop yields and better produce quality.", color: "emerald" },
      { icon: "users", title: "Farmer Empowerment", text: `Built lasting technical skills and confidence among ${stat ? stat.unit : "beneficiaries"} through hands-on education.`, color: "amber" },
      { icon: "leaf", title: "Resource Sustainability", text: "Protected local ecosystems through reduced chemical reliance, water conservation, and soil protection.", color: "teal" },
      { icon: "coins", title: "Input Cost Reduction", text: "Reduced reliance on synthetic chemicals, significantly lowering seasonal cultivation expenses.", color: "sky" },
      { icon: "trending", title: "Household Income Growth", text: "Enhanced agricultural productivity and market linkages translating into steady household income growth.", color: "rose" },
      { icon: "handshake", title: "Community Ownership", text: `Formed self-governing CBOs to maintain project benefits independently alongside ${project.funder}.`, color: "violet" },
    ],
  };

  const impactPillars = pillarsByTopic[topicKey];

  // Gallery Captions (6 tiles)
  const galleryCaptions = [
    { id: 0, label: `${subject} — Baseline Village Meeting`, tag: "Mobilization", modalDesc: `Documented during initial community baseline mobilization in ${location} with EFFORT coordinators and local leaders.` },
    { id: 1, label: `${subject} — Field Demonstration & Training`, tag: "Capacity Building", modalDesc: `Hands-on training session conducted directly in project villages, educating beneficiaries on improved technical protocols.` },
    { id: 2, label: `${subject} — Distribution of Bio-Inputs & Kits`, tag: "Resource Delivery", modalDesc: `Facilitating essential equipment, bio-inputs, vermi beds, or educational kits to supported households.` },
    { id: 3, label: `${subject} — On-Ground Infrastructure Check`, tag: "Asset Deployment", modalDesc: `Inspection of constructed water structures, vermi-compost units, or mobile service vehicles by project engineers.` },
    { id: 4, label: `${subject} — Quality & Outcome Verification`, tag: "Field Inspection", modalDesc: `Evaluating harvest quality, health metrics, or school retention progress directly with target beneficiaries.` },
    { id: 5, label: `${subject} — Official Handover & CBO Meeting`, tag: "Governance", modalDesc: `Formal project handover ceremony transferring asset governance to local Community-Based Organisations.` },
  ];

  return {
    missionHeader,
    missionContextText,
    regionalNeedText,
    coreObjectivePoints,
    interventionsPillars,
    governancePoints,
    blueprintStages,
    impactPillars,
    galleryCaptions,
  };
}
