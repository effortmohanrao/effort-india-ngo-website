import { Project, extractLocation, extractHeadlineStat, derivePartnerType, extractVillageCount } from "./data";

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
  const categoryLower = project.category.toLowerCase();
  const location = extractLocation(project);
  const stat = extractHeadlineStat(project);
  const villageCount = extractVillageCount(project);
  const partnerType = derivePartnerType(project.funder);

  // Topic detection flags
  const isChilli = nameLower.includes("chilli") || nameLower.includes("chilly");
  const isVermi = nameLower.includes("vermi") || nameLower.includes("compost");
  const isPaddy = nameLower.includes("sri paddy") || nameLower.includes("rice") || nameLower.includes("dsr") || nameLower.includes("paddy");
  const isWater = nameLower.includes("water") || nameLower.includes("tank") || nameLower.includes("de-silt") || nameLower.includes("watershed") || nameLower.includes("wash");
  const isHealth = categoryLower.includes("health") || nameLower.includes("hiv") || nameLower.includes("aids") || nameLower.includes("medical") || nameLower.includes("hospital") || nameLower.includes("covid");
  const isChild = categoryLower.includes("child") || nameLower.includes("child") || nameLower.includes("school") || nameLower.includes("trafficking");
  const isVet = nameLower.includes("veterinary") || nameLower.includes("livestock") || nameLower.includes("animal");
  const isBee = nameLower.includes("bee") || nameLower.includes("mustard") || nameLower.includes("pollination");
  const isTech = nameLower.includes("blockchain") || nameLower.includes("e.spice") || nameLower.includes("traceability");
  const isTribal = nameLower.includes("tribal") || nameLower.includes("wadi") || nameLower.includes("horticulture");
  const isGender = nameLower.includes("women") || nameLower.includes("female") || nameLower.includes("livelihood promotion of sc");

  // Determine Primary Project Focus Subject
  let subject = "Sustainable Rural Development";
  if (isChilli && isTech) subject = "Blockchain Chilli Traceability & Market Linkages";
  else if (isChilli && isVermi) subject = "Chilli IPM & Vermi-Compost Technology";
  else if (isChilli) subject = "Residue-Free Chilli Cultivation & IPM";
  else if (isVermi) subject = "Vermi-Composting & Organic Waste Management";
  else if (isPaddy && nameLower.includes("dsr")) subject = "Direct Seeded Rice (DSR) & Sustainable Farming";
  else if (isPaddy) subject = "System of Rice Intensification (SRI) Paddy";
  else if (isVet) subject = "Mobile Veterinary Services & Livestock Care";
  else if (isBee) subject = "Mustard Crop Productivity via Bee Pollination";
  else if (isTribal) subject = "Tribal Horticulture Livelihoods via Wadi Approach";
  else if (isTech) subject = "Digital Information Technology & Farmer Virtualization";
  else if (isWater) subject = "Community Watershed & Rainwater Harvesting";
  else if (isChild) subject = "Child Protection, Education & Rights Support";
  else if (isHealth) subject = "Community Health, Sanitation & Hygiene";
  else if (isGender) subject = "Women-Led Micro-Enterprise & Livelihood Units";

  // Mission Header & Context
  const missionHeader = `Delivering ${subject} across ${location}`;
  const missionContextText = `${project.name}. Delivered in direct partnership with ${project.funder}, this project addresses core socio-economic and environmental challenges by supporting ${project.beneficiaries}.`;
  
  const regionalNeedText = `In the targeted eco-regions of ${location}, rural households faced critical bottlenecks in ${
    isWater ? "water scarcity, tank siltation, and declining groundwater tables" :
    isHealth ? "access to preventive health services, sanitation awareness, and disease mitigation" :
    isChild ? "schooling infrastructure, child labour vulnerabilities, and youth skill building" :
    isVet ? "timely livestock healthcare, diagnostic coverage, and veterinary extension services" :
    "crop productivity, pest resistance, soil degradation, and market price discovery"
  }. EFFORT deployed structured, on-ground field solutions to build long-term community resilience.`;

  const coreObjectivePoints = [
    `Mobilize and empower ${stat ? `${stat.value} ${stat.unit}` : "local community members"} across ${villageCount ? `${villageCount} villages` : location}.`,
    `Introduce specialized, climate-resilient practices tailored to ${subject}.`,
    `Build self-sustaining Community-Based Organisations (CBOs) to maintain assets post-completion.`,
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

  // 4-Stage Execution Blueprint
  const stage01Items = isWater
    ? [
        `Executed baseline hydrological and topographical surveys in ${villageCount ? `${villageCount} villages` : location}.`,
        `Formed Village Watershed Committees and aligned local panchayats.`,
        `Mapped priority water harvesting locations and tank silt levels.`
      ]
    : isHealth
    ? [
        `Conducted community health baseline mapping across ${location}.`,
        `Enlisted local ASHA workers, ANMs, and SHG leaders as health volunteers.`,
        `Identified high-risk households and prepared intervention schedules.`
      ]
    : isChild
    ? [
        `Surveyed out-of-school children and child labor hotspots in target villages.`,
        `Engaged parents, community leaders, and local schools for child enrollment.`,
        `Established baseline learning and nutritional assessment profiles.`
      ]
    : isVet
    ? [
        `Mapped livestock population and veterinary service deficits across mandals.`,
        `Configured Issue Tracking & Reporting System software for mobile clinic vans.`,
        `Formed livestock rearer groups for scheduled door-step visit routes.`
      ]
    : [
        `Conducted baseline agricultural and soil health surveys in ${villageCount ? `${villageCount} target villages` : location}.`,
        `Formed Farmers' Interest Groups and selected lead demonstration farmers.`,
        `Finalized crop selection and IPM/IDM field demonstration schedules.`
      ];

  const stage02Items = isWater
    ? [
        `Trained watershed committee members on water budgeting and structure maintenance.`,
        `Demonstrated soil moisture retention methods to local farmers.`,
        `Provided tools and engineering guidance for tank de-silting.`
      ]
    : isHealth
    ? [
        `Organized community hygiene workshops and medical screening camps.`,
        `Distributed PPE kits, hospital sanitation kits, and preventive care guides.`,
        `Trained youth volunteers on disease awareness and first response.`
      ]
    : isChild
    ? [
        `Opened special learning centers with trained instructors and learning aids.`,
        `Provided school sanitation kits, water facilities, and hygiene education.`,
        `Conducted child rights sensitisation campaigns for parents and employers.`
      ]
    : isVet
    ? [
        `Trained livestock rearers on preventive vaccination and animal nutrition.`,
        `Demonstrated animal hostel management under government loan schemes.`,
        `Trained paravets on digital issue logging and prescription delivery.`
      ]
    : [
        `Organized practical Farmer Field Schools directly on selected demo plots.`,
        `Demonstrated ${isVermi ? "vermi-compost unit construction and worm inoculation" : isPaddy ? "SRI line planting & DSR seed drill operation" : "IPM bio-pesticide preparation and responsible chemical usage"}.`,
        `Distributed starter bio-input kits, vermi beds, or high-yielding seed varieties.`
      ];

  const stage03Items = isWater
    ? [
        `Completed excavation and de-silting of ${villageCount ? `${villageCount} community tanks` : "targeted water structures"}.`,
        `Constructed check dams, percolation tanks, and recharge shafts.`,
        `Monitored groundwater table recharge and irrigation water availability.`
      ]
    : isHealth
    ? [
        `Delivered essential medical equipment to government hospitals and PHCs.`,
        `Operated mobile health vans offering free diagnostic tests and consultations.`,
        `Established WASH infrastructure in target schools and community centers.`
      ]
    : isChild
    ? [
        `Maintained 100% student retention and transitioned children into formal schools.`,
        `Upgraded school physical amenities, drinking water systems, and toilets.`,
        `Monitored child protection cases and prevented child trafficking attempts.`
      ]
    : isVet
    ? [
        `Operated Mobile Veterinary Clinics (MVC) providing doorstep treatment and emergency care.`,
        `Logged all animal health complaints via the real-time Issue Tracking System.`,
        `Supplied subsidized veterinary medicines, mineral mixtures, and fodder support.`
      ]
    : [
        `Installed unit-level vermi-compost beds or ${isTech ? "blockchain QR code tagging systems" : isBee ? "bee hives across demo mustard fields" : "drip irrigation sets"}.`,
        `Monitored crop growth, pest incidence, and reduction in chemical pesticide costs.`,
        `Facilitated direct produce aggregation at village collection centers.`
      ];

  const stage04Items = isWater
    ? [
        `Handed over maintained water harvesting assets to Village Watershed Committees.`,
        `Instituted community water-user fees for sustained maintenance.`,
        `Verified 100% completion with ${project.funder} representatives.`
      ]
    : isHealth
    ? [
        `Established self-reliant Village Health Committees for ongoing monitoring.`,
        `Transferred hospital medical equipment to government health authorities.`,
        `Verified reduction in disease incidence and completed final audit.`
      ]
    : isChild
    ? [
        `Secured 100% school enrollment in target villages with zero child labor.`,
        `Handed over upgraded school amenities to School Management Committees (SMCs).`,
        `Published project outcome report verified by ${project.funder}.`
      ]
    : isVet
    ? [
        `Integrated Mobile Veterinary Clinic routes into Animal Husbandry Department operations.`,
        `Achieved sustained increase in doorstep veterinary coverage across blocks.`,
        `Formally closed project with detailed service coverage reports.`
      ]
    : [
        `Established formal buyer linkages with ${project.funder} and commercial aggregators.`,
        `Transferred CBO management to trained farmer leaders for ongoing operations.`,
        `Verified 100% completion with formal handover documentation.`
      ];

  const blueprintStages = [
    {
      stage: "01",
      phase: "Phase 1: Mobilization",
      title: isWater ? "Watershed Survey & Baseline" : isHealth ? "Health Baseline & Mapping" : isChild ? "Child & School Survey" : isVet ? "Livestock Needs Mapping" : "Baseline & Farmer Selection",
      desc: `Surveying target areas in ${location} and mobilizing beneficiaries with ${project.funder}.`,
      color: "amber" as const,
      items: stage01Items,
    },
    {
      stage: "02",
      phase: "Phase 2: Capacity",
      title: isWater ? "Technical Guidance & Training" : isHealth ? "Hygiene & Care Workshops" : isChild ? "Special Learning & Rights" : isVet ? "Paravet & Rearer Training" : "Field Schools & Demos",
      desc: "Hands-on training sessions and practical demonstrations conducted directly in project villages.",
      color: "emerald" as const,
      items: stage02Items,
    },
    {
      stage: "03",
      phase: "Phase 3: Delivery",
      title: isWater ? "Structure Construction & De-silting" : isHealth ? "Equipment & Mobile Clinics" : isChild ? "Amenities & School Upgrade" : isVet ? "Doorstep MVC Operations" : "Asset & Input Distribution",
      desc: `Deploying technical assets, infrastructure, or bio-inputs across target communities.`,
      color: "sky" as const,
      items: stage03Items,
    },
    {
      stage: "04",
      phase: "Phase 4: Handover",
      title: "Handover & Autonomy",
      desc: "Establishing community management for sustained post-project operations.",
      color: "violet" as const,
      items: stage04Items,
    },
  ];

  // Impact Pillars (6 domain-specific cards)
  const impactPillars = [
    {
      title: isWater ? "Water Security" : isHealth ? "Health & Well-being" : isChild ? "Child Protection" : isVet ? "Livestock Health" : "Improved Yields",
      text: isWater ? "Enhanced groundwater recharge and increased irrigation water availability for crops." :
            isHealth ? "Reduced incidence of preventable diseases and improved access to essential medical care." :
            isChild ? "Eradicated child labour in target villages and secured 100% formal school education." :
            isVet ? "Increased livestock productivity and provided doorstep medical care for domestic animals." :
            "Adoption of improved practices leading to higher crop yields and better produce quality.",
      color: "emerald" as const,
    },
    {
      title: isGender ? "Women Empowerment" : "Farmer Empowerment",
      text: `Built lasting technical skills and confidence among ${stat ? stat.unit : "beneficiaries"} through hands-on education.`,
      color: "amber" as const,
    },
    {
      title: "Resource Sustainability",
      text: "Protected local ecosystems through reduced chemical reliance, water conservation, and soil protection.",
      color: "teal" as const,
    },
    {
      title: isWater ? "Irrigation Efficiency" : isHealth ? "WASH Awareness" : "Input Cost Reduction",
      text: isWater ? "Efficient water management techniques reducing crop vulnerability during drought periods." :
            isHealth ? "Widespread adoption of clean drinking water practices, sanitation, and personal hygiene." :
            "Reduced reliance on synthetic chemicals, significantly lowering seasonal cultivation expenses.",
      color: "sky" as const,
    },
    {
      title: "Household Income Growth",
      text: "Enhanced agricultural productivity and market linkages translating into steady household income growth.",
      color: "rose" as const,
    },
    {
      title: "Community Ownership",
      text: `Formed self-governing CBOs to maintain project benefits independently alongside ${project.funder}.`,
      color: "violet" as const,
    },
  ];

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
