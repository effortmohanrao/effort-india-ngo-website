import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import Reveal from "@/components/home/Reveal";

type Photo = { key: string; url: string };

function Row({ photos, reverse }: { photos: Photo[]; reverse?: boolean }) {
  // Duplicated once so the CSS marquee can loop seamlessly (-50% translate).
  return (
    <div className="relative overflow-hidden">
      <ul className={`${reverse ? "lux-marquee-rev" : "lux-marquee"} flex w-max gap-4 sm:gap-5`} style={{ animationDuration: "70s" }}>
        {[...photos, ...photos].map((p, i) => (
          <li
            key={`${p.key}-${i}`}
            aria-hidden={i >= photos.length}
            className="group relative shrink-0 w-64 h-44 sm:w-80 sm:h-52 rounded-[22px] overflow-hidden border border-amber-300/20 bg-[#0b3d2a]"
          >
            <Image src={p.url} alt="EFFORT NGO field photo" fill sizes="320px" className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </li>
        ))}
      </ul>
    </div>
  );
}

// `photos` = the first two real photos of every program album (website/programs/...), looked up on the server.
export default function AboutGallery({ photos }: { photos: Photo[] }) {
  const half = Math.ceil(photos.length / 2);
  return (
    <section data-keep-motion className="relative isolate overflow-hidden bg-[#03140d] text-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[110vw] max-w-[1300px] aspect-[2/1] -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.14),transparent_60%)]" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

      <div className="py-20 sm:py-28">
        <Reveal className="max-w-2xl mx-auto px-4 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-200">
            <Camera className="w-3.5 h-3.5 text-amber-300" /> Our Journey Through Images
          </p>
          <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] [text-wrap:balance]">
            Every Picture Tells <span className="lux-gold-text">A Story Of Hope</span>
          </h2>
          <p className="mt-5 text-emerald-50/75 leading-relaxed sm:text-lg">Real moments from our field programs across rural India — hover to pause.</p>
        </Reveal>

        {photos.length === 0 ? (
          <p className="mt-12 text-center text-emerald-50/70">Field photos coming soon.</p>
        ) : (
          <div className="mt-12 space-y-4 sm:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <Row photos={photos.slice(0, half)} />
            <Row photos={photos.slice(half)} reverse />
          </div>
        )}

        <div className="mt-12 text-center px-4">
          <Link
            href="/gallery"
            className="lux-sheen relative overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e9b949] via-[#f7d774] to-[#d4a017] text-[#062619] font-extrabold px-8 py-4 shadow-[0_12px_28px_-10px_rgba(212,160,23,0.8)]"
          >
            View Complete Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
