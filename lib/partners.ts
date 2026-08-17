// Single source of truth for EFFORT's real partner organizations (from "EFFORT PPT 25 Yrs of
// Journey.pptx", slide 5). Shared between the About page's partner marquee and its admin panel,
// so both stay in sync. `slug` maps to the logo uploaded at website/about/partner-logos/{slug}.*
// — omit slug for entries with no real logo on file yet.
export type PartnerEntry = { name: string; slug?: string };
export type PartnerCategory = { title: string; partners: PartnerEntry[] };

export const partnerCategories: PartnerCategory[] = [
  {
    title: "International Development Partners",
    partners: [
      { name: "German Cooperation (GIZ)", slug: "giz" },
      { name: "Great Place To Work", slug: "gptw" },
      { name: "IDH – Sustainable Trade Initiative", slug: "idh" },
      { name: "Fairtrade Foundation", slug: "fairtrade" },
      { name: "DKA Austria", slug: "dka-austria" },
      { name: "CropLife International", slug: "croplife-international" },
      { name: "EKAM USA", slug: "ekam-usa" },
      { name: "PGNF", slug: "pgnf" },
    ],
  },
  {
    title: "Corporate & CSR Partners",
    partners: [
      { name: "Godfrey Phillips India Ltd.", slug: "godfrey-phillips" },
      { name: "JSW Foundation", slug: "jsw-foundation" },
      { name: "Reliance Foundation", slug: "reliance-foundation-logo" },
      { name: "Azim Premji Foundation", slug: "azim-premji-foundation" },
      { name: "Syngenta", slug: "syngenta" },
      { name: "Universal Corporation", slug: "universal-corporation" },
      { name: "Corteva Agriscience", slug: "corteva" },
      { name: "ITC Limited", slug: "itc" },
      { name: "CropLife India", slug: "croplife-india" },
      { name: "Bayer", slug: "bayer" },
    ],
  },
  {
    title: "Government & Institutional Partners",
    partners: [
      { name: "NABARD", slug: "nabard" },
      { name: "Government of Andhra Pradesh", slug: "govt-ap" },
      { name: "Spices Board India", slug: "spices-board" },
      { name: "Bala Vikasa", slug: "bala-vikasa" },
      { name: "AGS", slug: "ags" },
    ],
  },
];

export const ALL_PARTNER_SLUGS = partnerCategories.flatMap((c) => c.partners.map((p) => p.slug)).filter((s): s is string => !!s);
