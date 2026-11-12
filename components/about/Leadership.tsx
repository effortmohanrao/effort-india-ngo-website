"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, ChevronDown, Globe2, GraduationCap, Quote, Trophy, Users } from "lucide-react";
import Reveal from "@/components/home/Reveal";

// ---------- Executive Director ----------
const director = {
  name: "J. V. Mohan Rao",
  title: "Executive Director, EFFORT NGO",
  statement:
    "Postgraduate in Sociology, with a Diploma in Social Development from St. Francis Xavier University, Canada, and recipient of an Honorary Doctor of Philosophy specializing in Environmental and Sustainable Development from Kennedy University, Paris, France. 40 years of experience in the field of Social Development, with expertise in planning, designing, monitoring and evaluating sustainable development initiatives.",
};

const credentials = [
  { tag: "40+ Years", title: "Social Development Leader", desc: "4 Decades of Field Execution & Planning across 9 Indian States", icon: Award },
  { tag: "PhD (Hon.) • Paris", title: "Sustainable Development", desc: "Honorary Doctorate from Kennedy University, Paris, France", icon: GraduationCap },
  { tag: "Diploma • Canada", title: "Social Development", desc: "Diploma from St. Francis Xavier University, Canada", icon: Globe2 },
];

export const directorAwards = [
  {
    id: 1,
    title: "State Government Recognition Award",
    organization: "Government of Andhra Pradesh (Hon'ble CM Sri N. Chandrababu Naidu)",
    year: "State Honor",
    badge: "State Govt. Award",
    description:
      "Conferred by the Hon'ble Chief Minister of Andhra Pradesh, Sri N. Chandrababu Naidu, in recognition of exemplary public service, watershed management, and rural community empowerment.",
  },
  {
    id: 2,
    title: "District Administration Merit Award",
    organization: "District Administration, Prakasam District",
    year: "Independence Day Honor",
    badge: "District Merit Award",
    description:
      "Awarded by the Prakasam District Administration on the occasion of Independence Day in recognition of distinguished community service and rural development leadership.",
  },
  {
    id: 3,
    title: "Vocational Excellence Award",
    organization: "Rotary International District 3150",
    year: "District 3150",
    badge: "Vocational Excellence",
    description:
      "Honored with the prestigious Vocational Excellence Award by Rotary International District 3150 for outstanding vocational dedication, social ethics, and transformative grassroots impact.",
  },
  {
    id: 4,
    title: "Honorary Ph.D. in Environmental & Sustainable Development",
    organization: "Kennedy University",
    year: "Honorary Doctorate",
    badge: "Ph.D. Citation",
    description:
      "Conferred with an Honorary Doctor of Philosophy (Ph.D.) specializing in Environmental and Sustainable Development for pioneering four decades of sustainable natural resource management.",
  },
];

// ---------- Team (mirrors "Meet Our Team", page 7 of the EFFORT 27 Years book) ----------
// Photos live in /public/images/team/{photo}.jpg.
type TeamMember = { photo: string; name: string; role: string; officeBearer?: boolean; bio?: string };

const executiveCommittee: TeamMember[] = [
  { photo: "bala", name: "Dr. Bala Subramanian", role: "President", officeBearer: true, bio: "M.Sc (Ag), PhD — retired Professor, TNAU, and Director, Centre for Plant Molecular Biology, Tamil Nadu Agricultural University. Expert in Sustainable Agriculture, guiding EFFORT's Sustainable Agriculture Team." },
  { photo: "kathyayini", name: "Katyayini", role: "Vice President", officeBearer: true },
  { photo: "madhavi", name: "N. Madhavi", role: "Executive Secretary", officeBearer: true },
  { photo: "vijaya", name: "B. Vijaya Kumari", role: "Joint Secretary", officeBearer: true, bio: "Postgraduate in M.Sc Resource Management and MA Social Work. 28 years of experience in Social Development, expert in Gender, Equity, Social Inclusion and Water Governance & Community-Led Management." },
  { photo: "rajyalakshmi", name: "K. Rajyalakshmi", role: "Treasurer", officeBearer: true },
  { photo: "murali", name: "Y. Murali Krishna", role: "Executive Committee Member", bio: "Graduate in Commerce and Law, with a Diploma in Social Development from St. Francis Xavier University, Canada. 35 years of experience in Social Development, expert in Human Resource and Community Development." },
  { photo: "veeranjaneyulu", name: "Danda Veeranjaneyulu", role: "Executive Committee Member", bio: "Progressive Farmer and recipient of the Best Farmer Award from the Chief Minister of Andhra Pradesh. Maintains model sustainable agriculture farms." },
  { photo: "lakshmaiah", name: "S. Lakshmaiah", role: "Executive Committee Member" },
  { photo: "subbarao", name: "I. Subbarao", role: "Executive Committee Member" },
];

const fieldExpertiseTeam: TeamMember[] = [
  { photo: "anuradha", name: "J. Anuradha", role: "Lead, Community Based Organisation", bio: "Postgraduate in Sociology with 35 years of experience in Social Development. Expert in Social Mobilisation and the promotion & strengthening of Community Based Organisations (CBOs)." },
  { photo: "srinivasrao", name: "J. V. Srinivas Rao", role: "Expert in Watershed Development" },
  { photo: "ramarao", name: "P. Rama Rao", role: "Expert in Sustainable Agriculture" },
  { photo: "sureshbabu", name: "N. Suresh Babu", role: "Expert in Water Harvesting Structures" },
  { photo: "annapurna", name: "P. Annapurna", role: "Finance", bio: "Postgraduate in MBA Finance with 33 years of experience in Finance Management." },
  { photo: "hanumantha", name: "B. Hanumantha Rao", role: "Lead, Water Governance & Management", bio: "Graduate in Civil Engineering with 30 years of rich experience in Water & Soil Conservation Projects." },
  { photo: "bhanodaya", name: "J. Bhanodaya", role: "Expert in Community Mobilization", bio: "Postgraduate in Sociology. 20 years of experience in Social Development. Expertise in Community Mobilisation, Sustainable Agriculture and Institutional Building." },
  { photo: "koteswara", name: "T. Koteswara Rao", role: "Community-Led Management", bio: "Postgraduate in MBA Finance. 25 years of experience in Social Development. Expertise in Community Led Management Projects and Institutional Building." },
  { photo: "nitish", name: "B. Nitish Reddy", role: "Expert in Climate-Resilient Farming", bio: "Postgraduate in Agri Business Management. Expertise in Climate Resilient Farming Projects, Reporting and Documentation." },
  { photo: "mohanreddy", name: "M. V. Mohan Reddy", role: "Lead, IT & Digital Platforms", bio: "Graduate in Computer Science and Postgraduate in Human Rights & Duties." },
  { photo: "malansha", name: "Patan Malansha", role: "Lead, Water Conservation & Management", bio: "Graduate in Civil Engineering, 28 years of experience in Watershed Development, Irrigation Management, Water Budgeting and strengthening Watershed Committees & Water User Associations." },
];

const fieldTeamNumbers = [
  { value: "45", label: "Social mobilizers & community experts" },
  { value: "5", label: "Agriculture & NRM experts" },
  { value: "3", label: "Women's development team" },
  { value: "4", label: "Livelihood team" },
  { value: "3", label: "Technical team" },
];

function TeamCard({ m }: { m: TeamMember }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`group h-full rounded-2xl bg-white border p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-28px_rgba(90,61,0,0.55)] ${m.officeBearer ? "border-amber-300" : "border-[#efe2bd] hover:border-amber-300"}`}>
      <span className={`relative rounded-full p-[3px] ${m.officeBearer ? "bg-gradient-to-br from-[#fff3c4] via-[#d4a017] to-[#7a5a12]" : "bg-gradient-to-br from-[#0b5d3f] to-[#a1781e]"}`}>
        <span className="block rounded-full p-[2px] bg-white">
          <span className="relative block w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[#efe2bd]">
            <Image src={`/images/team/${m.photo}.jpg`} alt={m.name} fill sizes="96px" className="object-cover object-[center_22%] group-hover:scale-110 transition-transform duration-500" />
          </span>
        </span>
      </span>
      <h4 className="mt-2 sm:mt-3 text-sm sm:text-base font-extrabold text-[#14120c] leading-snug">{m.name}</h4>
      <p className={`mt-1 text-xs sm:text-sm leading-snug ${m.officeBearer ? "font-extrabold text-[#a1781e]" : "font-semibold text-[#0b5d3f]"}`}>{m.role}</p>
      {m.bio && (
        <>
          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#7a5a12] hover:text-[#062619] cursor-pointer"
          >
            {open ? "Hide profile" : "Read profile"} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <div className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <p className="overflow-hidden text-xs text-[#5a5240] leading-relaxed">
              <span className="block pt-2">{m.bio}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

function GroupHeading({ title, count }: { title: string; count?: number }) {
  return (
    <div className="flex items-end justify-between gap-3 border-b-2 border-[#e5d7b0] pb-3 mb-6">
      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14120c]">{title}</h3>
      {count !== undefined && <span className="shrink-0 rounded-full bg-[#062619] text-amber-200 px-3 py-1 text-xs font-extrabold tracking-wider">{count} MEMBERS</span>}
    </div>
  );
}

export default function Leadership({ directorPhoto, awardImages }: { directorPhoto: string | null; awardImages: Record<number, string> }) {
  return (
    <section id="leadership" data-keep-motion className="relative isolate overflow-hidden bg-[#fbf8f0] scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-60 lux-guilloche" />
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 w-[50vw] aspect-square -z-10 rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.14),transparent_65%)] lux-drift-a" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5a12]">
            <Users className="w-3.5 h-3.5 text-amber-600" /> Leadership &amp; Governance
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#14120c] leading-[1.1] [text-wrap:balance]">
            Leadership That Inspires{" "}
            <span className="bg-gradient-to-r from-[#0b5d3f] via-[#a1781e] to-[#d4a017] bg-clip-text text-transparent">Ground Action</span>
          </h2>
          <p className="mt-5 text-[#5a5240] leading-relaxed sm:text-lg">
            Steering EFFORT NGO for over 27 years under Society Registration 340/1999 with transparent governance, field operational excellence, and community-owned institutions across 1,909 villages.
          </p>
        </Reveal>

        {/* ===== EXECUTIVE DIRECTOR ===== */}
        <Reveal delay={120} className="mt-14">
          <div className="rounded-[32px] p-[1.5px] bg-gradient-to-br from-[#fff3c4] via-[#a1781e] to-[#f7d774] shadow-[0_50px_100px_-50px_rgba(6,38,25,0.85)]">
            <div className="relative overflow-hidden rounded-[31px] bg-gradient-to-br from-[#0b3d2a] via-[#062619] to-[#03140d] text-white grid lg:grid-cols-12">
              <div aria-hidden className="pointer-events-none absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(247,215,116,0.16),transparent_65%)]" />

              {/* Portrait */}
              <div className="relative lg:col-span-4 min-h-[340px] sm:min-h-[460px] lg:min-h-full bg-[#0b3d2a]">
                {directorPhoto && (
                  <Image src={directorPhoto} alt={director.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover object-[center_20%]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03140d] via-[#03140d]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#062619]/40" />
                <div className="absolute left-5 right-5 bottom-5 lg:hidden">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">{director.title}</p>
                  <p className="mt-1 text-3xl font-extrabold">{director.name}</p>
                </div>
              </div>

              {/* Profile */}
              <div className="relative lg:col-span-8 p-6 sm:p-10">
                <div className="hidden lg:block">
                  <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-amber-300">
                    <span className="h-px w-8 bg-amber-300" /> Executive Director
                  </p>
                  <h3 className="mt-2 text-4xl xl:text-5xl font-extrabold tracking-tight">
                    <span className="lux-gold-text">{director.name}</span>
                  </h3>
                </div>
                <p className="hidden lg:block mt-1 text-sm font-bold uppercase tracking-wider text-emerald-100/70">{director.title}</p>

                <figure className="lg:mt-6 relative rounded-2xl border border-amber-300/20 bg-white/[0.04] p-5 sm:p-6">
                  <Quote aria-hidden className="absolute right-4 top-4 w-8 h-8 text-amber-300/25 rotate-180" />
                  <blockquote className="text-base sm:text-[17px] leading-relaxed text-emerald-50/90">&ldquo;{director.statement}&rdquo;</blockquote>
                  <figcaption className="mt-3 text-xs font-extrabold uppercase tracking-wider text-amber-300">
                    — Executive Leadership Statement • Society Reg. 340/1999
                  </figcaption>
                </figure>

                <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300">Official Credentials &amp; Global Distinctions</p>
                <ul className="mt-3 grid sm:grid-cols-3 gap-3">
                  {credentials.map((c) => (
                    <li key={c.tag} className="rounded-2xl border border-amber-300/30 bg-gradient-to-b from-amber-300/10 to-transparent p-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-gradient-to-r from-[#f7d774] to-[#d4a017] text-[#062619] px-2.5 py-0.5 text-xs font-extrabold">{c.tag}</span>
                        <c.icon className="w-5 h-5 text-amber-300" />
                      </div>
                      <p className="mt-3 font-extrabold leading-snug">{c.title}</p>
                      <p className="mt-1 text-sm text-emerald-50/70 leading-snug">{c.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== DIRECTOR'S AWARDS & HONOURS ===== */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#0b5d3f]">
                <Trophy className="w-4 h-4 text-amber-600" /> Director&apos;s Awards &amp; Honours
              </p>
              <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#14120c]">National &amp; Global Recognitions</h3>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-[#062619] text-amber-200 px-3 py-1 text-xs font-extrabold tracking-wider">{directorAwards.length} VERIFIED HONOURS</span>
          </div>

          <div className="mt-8 -mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {directorAwards.map((a, i) => {
              const img = awardImages[a.id];
              return (
                <Reveal key={a.id} delay={i * 110} className="snap-start shrink-0 w-[82%] sm:w-auto">
                  <article className="group h-full rounded-[22px] p-[1.5px] bg-gradient-to-br from-[#f7d774] via-[#e9dcb5] to-[#b8860b] shadow-[0_30px_60px_-38px_rgba(90,61,0,0.65)]">
                    <div className="h-full rounded-[21px] bg-[#fffdf7] overflow-hidden flex flex-col">
                      <div className="relative aspect-[4/3] bg-[#062619] overflow-hidden">
                        {img ? (
                          <Image src={img} alt={a.title} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 82vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Trophy className="w-12 h-12 text-amber-300/60" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f7d774] to-[#d4a017] text-[#062619] px-3 py-1 text-xs font-extrabold shadow-lg">
                          <Award className="w-3.5 h-3.5" /> {a.badge}
                        </span>
                        <span className="absolute bottom-3 left-3 rounded-full bg-[#03140d]/80 text-white px-2.5 py-1 text-xs font-bold backdrop-blur-sm">{a.year}</span>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <p className="text-xs font-extrabold uppercase tracking-wider text-[#a1781e] leading-snug">{a.organization}</p>
                        <h4 className="mt-2 text-lg font-extrabold text-[#14120c] leading-snug">{a.title}</h4>
                        <p className="mt-2 text-sm text-[#5a5240] leading-relaxed">{a.description}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-[#6b6047] sm:hidden">Swipe to see all honours →</p>
        </div>

        {/* ===== TEAM ===== */}
        <div className="mt-20 space-y-14">
          <div>
            <GroupHeading title="Executive Committee" count={executiveCommittee.length} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {executiveCommittee.map((m) => (
                <TeamCard key={m.name} m={m} />
              ))}
            </div>
          </div>

          <div>
            <GroupHeading title="Field Expertise Team" count={fieldExpertiseTeam.length} />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
              {fieldExpertiseTeam.map((m) => (
                <TeamCard key={m.name} m={m} />
              ))}
            </div>
          </div>

          <div>
            <GroupHeading title="Field Team in Numbers" />
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {fieldTeamNumbers.map((n, i) => (
                <div key={n.label} className={`relative overflow-hidden rounded-2xl bg-[#062619] text-white p-5 ${i === 0 ? "col-span-2 sm:col-span-1" : ""}`}>
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10b981] via-[#d4a017] to-[#f7d774]" />
                  <dd className="text-4xl font-extrabold bg-gradient-to-b from-[#fff3c4] to-[#d4a017] bg-clip-text text-transparent">{n.value}</dd>
                  <dt className="mt-2 text-xs font-bold uppercase tracking-wider text-emerald-50/70 leading-snug">{n.label}</dt>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
