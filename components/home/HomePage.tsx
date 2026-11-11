import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  Building2,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Quote,
  BadgeCheck,
  Sprout,
} from "lucide-react";
import {
  homeStats,
  homeFocusAreas,
  homeFeaturedProjects,
  homeApproach,
  homeTestimonials,
  homeRegistrations,
} from "./homeData";

export type HomeMedia = {
  hero: string | null;
  about: string | null;
  focus: (string | null)[];
  projects: (string | null)[];
  testimonials: (string | null)[];
  partners: { name: string; logo: string }[];
};

function SectionHeading({ eyebrow, title, intro, light }: { eyebrow: string; title: string; intro?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-amber-300" : "text-amber-700"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${light ? "text-emerald-50/85" : "text-slate-600"}`}>{intro}</p>}
    </div>
  );
}

function Photo({ src, alt, sizes, className, preload }: { src: string | null; alt: string; sizes: string; className?: string; preload?: boolean }) {
  if (!src) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br from-emerald-800 to-emerald-950 flex items-center justify-center ${className ?? ""}`}>
        <Sprout className="w-10 h-10 text-emerald-300/60" />
      </div>
    );
  }
  return <Image src={src} alt={alt} fill sizes={sizes} preload={preload} className={`object-cover ${className ?? ""}`} />;
}

// On phones a card grid becomes a horizontal swipe row; from sm up it is a normal grid.
const swipeRow = "-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
const swipeCard = "snap-start shrink-0 w-[80%] sm:w-auto";

function SwipeHint() {
  return <p className="mt-3 text-xs text-slate-500 sm:hidden">Swipe to see more →</p>;
}

export default function HomePage({ media }: { media: HomeMedia }) {
  const testimonials = homeTestimonials.map((t, i) => ({ ...t, photo: media.testimonials[i] }));

  return (
    <div className="bg-[#faf8f3] text-slate-800">
      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden bg-emerald-950 text-white">
        <Photo src={media.hero} alt="Farmers in the field with EFFORT" sizes="100vw" preload className="-z-10 opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-emerald-950/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-200 bg-white/10 border border-white/15 rounded-full px-3.5 py-1.5">
              <MapPin className="w-3.5 h-3.5" /> Since 1999 · Martur, Andhra Pradesh
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Empowering farming communities for a <span className="text-amber-300">sustainable rural India</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-emerald-50/90 leading-relaxed">
              EFFORT (A Society for the Development of Agriculture and Youth) works with small and marginal farmers, landless
              labourers, women and youth — protecting natural resources, promoting sustainable agriculture and building
              community institutions that last.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/donate" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 hover:bg-amber-400 text-emerald-950 font-bold px-7 py-3.5 transition-colors">
                <HeartHandshake className="w-5 h-5" /> Donate Now
              </Link>
              <Link href="/programs" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 hover:bg-white/10 font-semibold px-7 py-3.5 transition-colors">
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-emerald-50/80">
              {["Reg. No. 340/1999", "80G & 12AB", "FCRA registered", "CSR-1 registered"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-amber-300" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 2. IMPACT NUMBERS */}
      <section aria-label="Our impact in numbers" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4">
          {homeStats.map((s) => (
            <div key={s.label} className="text-center lg:border-r lg:last:border-r-0 border-slate-200 px-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-800 tracking-tight">{s.value}</p>
              <p className="mt-1.5 text-sm text-slate-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeading eyebrow="Who we are" title="27 years of working alongside rural communities" />
          <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
            <p>
              Founded in 1999 at Martur in Prakasam District, EFFORT began as a small registered society and has grown into a
              multi-state organisation working across 1,909 villages in 10 states.
            </p>
            <p>
              We believe communities are the primary agents of their own development. Our role is to strengthen their
              knowledge, institutions and access to resources — so that farmers, women and youth can manage their land, water
              and livelihoods on their own terms.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-emerald-900 text-white p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300">Vision</p>
              <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">Empowered communities building resilient, inclusive and sustainable futures.</p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Mission</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">To enable communities to sustainably manage natural resources and strengthen youth skills and livelihoods.</p>
            </div>
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">
            More about EFFORT <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Photo src={media.about ?? media.focus[1]} alt="EFFORT field work in a village" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </section>

      {/* 4. FOCUS AREAS */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <SectionHeading eyebrow="What we do" title="Our focus areas" intro="Every programme is planned with the community and delivered by our own field teams." />
          <div className={`mt-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 ${swipeRow}`}>
            {homeFocusAreas.map((f, i) => (
              <Link key={f.title} href="/programs" className={`${swipeCard} group rounded-2xl overflow-hidden bg-[#faf8f3] border border-slate-200 hover:shadow-lg transition-shadow flex flex-col`}>
                <div className="relative aspect-[4/3]">
                  <Photo src={media.focus[i]} alt={f.title} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{f.desc}</p>
                  <p className="mt-4 text-sm font-bold text-emerald-800">{f.projects} projects →</p>
                </div>
              </Link>
            ))}
          </div>
          <SwipeHint />
        </div>
      </section>

      {/* 5. CURRENT PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading eyebrow="On the ground now" title="Current projects" />
          <Link href="/programs" className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950 shrink-0">
            All 15 ongoing projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className={`mt-8 sm:mt-10 sm:grid-cols-2 md:grid-cols-3 ${swipeRow}`}>
          {homeFeaturedProjects.map((p, i) => (
            <Link key={p.href} href={p.href} className={`${swipeCard} group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-shadow flex flex-col`}>
              <div className="relative aspect-[16/10]">
                <Photo src={media.projects[i]} alt={p.name} sizes="(min-width: 768px) 33vw, 100vw" className="group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs font-bold bg-white/95 text-emerald-800 rounded-full px-3 py-1">Ongoing</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700">{p.category}</p>
                <h3 className="mt-2 font-bold text-slate-900 leading-snug">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">{p.beneficiaries}</p>
                <p className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                  Supported by <span className="font-semibold text-slate-800">{p.funder}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <SwipeHint />
      </section>

      {/* 6. HOW WE WORK */}
      <section className="bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <SectionHeading light eyebrow="Our approach" title="How we work" intro="A simple, proven process that keeps communities in charge — from the first meeting to long after the project ends." />
          <ol className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {homeApproach.map((s, i) => (
              <li key={s.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 sm:p-5 grid grid-cols-[auto_1fr] sm:block gap-x-3">
                <span className="text-sm font-extrabold text-amber-300 row-span-2">0{i + 1}</span>
                <h3 className="sm:mt-2 font-bold">{s.title}</h3>
                <p className="mt-1 sm:mt-2 text-sm text-emerald-50/75 leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. VOICES FROM THE FIELD */}
      <section id="voices" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <SectionHeading eyebrow="Voices from the field" title="In farmers' own words" />
        <div className={`mt-8 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 ${swipeRow}`}>
          {testimonials.map((t) => (
            <figure key={t.slug} className={`${swipeCard} rounded-2xl bg-white border border-slate-200 p-6 flex flex-col`}>
              <Quote className="w-7 h-7 text-amber-500" />
              <blockquote className="mt-3 text-slate-700 leading-relaxed flex-1">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-emerald-100 shrink-0">
                  {t.photo ? (
                    <Image src={t.photo} alt={t.name} fill sizes="48px" className="object-cover" />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center font-bold text-emerald-800">{t.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role} · {t.place}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <SwipeHint />
      </section>

      {/* 8. PARTNERS */}
      {media.partners.length > 0 && (
        <section id="partnerships" className="bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <SectionHeading eyebrow="Partners" title="Organisations that support our work" intro="Government departments, development agencies, foundations and corporate CSR partners." />
            <ul className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {media.partners.map((p) => (
                <li key={p.name} title={p.name} className="relative aspect-[3/2] rounded-xl border border-slate-200 bg-white">
                  <Image src={p.logo} alt={p.name} fill sizes="(min-width: 1024px) 15vw, 30vw" className="object-contain p-3 sm:p-4" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 9. TRANSPARENCY */}
      <section id="trust-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <SectionHeading eyebrow="Transparency" title="Registered, compliant and accountable" intro="EFFORT is a registered society with the statutory registrations required to receive Indian, foreign and CSR funds." />
            <Link href="/donate" className="mt-6 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">
              Bank & donation details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
            {homeRegistrations.map((r) => (
              <li key={r.title} className="flex gap-3 rounded-2xl bg-white border border-slate-200 p-3.5 sm:p-4">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-900">{r.title}</p>
                  <p className="text-sm text-slate-600 leading-snug mt-0.5">{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. WAYS TO HELP */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
          <SectionHeading eyebrow="Get involved" title="How you can help" />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { icon: HeartHandshake, title: "Donate", desc: "Support farmers and rural families directly. Donations are eligible for 80G tax benefit.", href: "/donate", cta: "Donate now" },
              { icon: Building2, title: "Partner through CSR", desc: "Run Schedule VII projects with a CSR-1 registered partner and receive documented impact reports.", href: "/get-involved", cta: "Partner with us" },
              { icon: Users, title: "Volunteer or intern", desc: "Bring your skills to the field — agriculture, water, documentation, IT and more.", href: "/get-involved#pathways", cta: "Join us" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-[#faf8f3] p-6 flex flex-col">
                <span className="w-11 h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
                  <c.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{c.desc}</p>
                <Link href={c.href} className="mt-5 inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-emerald-950">
                  {c.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT BAND */}
      <section className="bg-amber-500 text-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Let&apos;s work together</h2>
            <p className="mt-1 font-medium">Srujana, #9-240, G.T. Road, Martur – 523 301, Bapatla Dist., Andhra Pradesh</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+919959900081" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-950 text-white font-bold px-6 py-3">
              <Phone className="w-4 h-4" /> +91 99599 00081
            </a>
            <a href="mailto:contact@effortindia.org" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-950 font-bold px-6 py-3">
              <Mail className="w-4 h-4" /> contact@effortindia.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
