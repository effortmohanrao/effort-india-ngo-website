"use client";

import React, { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowLeft,
  MapPin,
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Loader2,
} from "lucide-react";
import { programAlbums } from "@/lib/programAlbums";

type Photo = { key: string; url: string };

export default function DedicatedAlbumPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const albumIndex = programAlbums.findIndex((a) => a.folder === id);
  const album = albumIndex >= 0 ? programAlbums[albumIndex] : undefined;

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = React.useRef<number | null>(null);

  const goPrev = () => setActiveIndex((i) => (i === null ? null : i > 0 ? i - 1 : photos.length - 1));
  const goNext = () => setActiveIndex((i) => (i === null ? null : i < photos.length - 1 ? i + 1 : 0));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    if (!album) return;
    setLoading(true);
    fetch(`/api/site/media?prefix=programs/${album.status}/${album.folder}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setPhotos(data.images ?? []))
      .finally(() => setLoading(false));
  }, [album]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, photos.length]);

  if (!album) {
    return (
      <div className="bg-[#FAF8F5] min-h-screen pt-36 pb-20 text-center space-y-6">
        <h1 className="text-3xl font-black text-slate-900">Album Not Found</h1>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Return to All Albums
        </Link>
      </div>
    );
  }

  const others = programAlbums.filter((a) => a.folder !== album.folder);
  const prevAlbum = others[(albumIndex - 1 + others.length) % others.length];
  const nextAlbum = others[albumIndex % others.length];

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-28 relative overflow-hidden">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[750px] h-[750px] bg-amber-200/40 rounded-full blur-[180px] animate-liquid-drift-a" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[750px] h-[750px] bg-emerald-200/40 rounded-full blur-[170px] animate-liquid-drift-b" />
        <div className="bg-noise absolute inset-0 opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-slate-800 text-xs font-black uppercase tracking-wider shadow-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back To All Field Albums</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-black uppercase tracking-wider">
            {album.year}
          </span>
        </div>

        {/* ALBUM HERO */}
        <div className="relative rounded-[36px] overflow-hidden bg-slate-950 border-2 border-slate-200/90 shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            {photos[0] && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={photos[0].url} alt={album.label} className="w-full h-full object-cover opacity-60" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 space-y-3 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-black uppercase tracking-widest shadow-md">
              <Sparkles className="w-4 h-4 text-amber-600" /> {album.status === "ongoing" ? "Ongoing Project" : "Completed Project"}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {album.label}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" /> {album.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" /> {photos.length} Photos
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium pt-1">{album.desc}</p>

            {album.covers.length > 1 && (
              <div className="flex items-start gap-2 pt-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Covers {album.covers.length} related initiatives: {album.covers.join(" · ")}</span>
              </div>
            )}
          </div>
        </div>

        {/* PHOTO GRID */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Full Field Photo Gallery</span>
              <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">{photos.length} Photos</span>
            </h2>
            <p className="text-xs font-semibold text-slate-500 hidden sm:block">Click any photo to view full-screen</p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm py-16">
              <Loader2 className="w-5 h-5 animate-spin" /> Loading photos...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={photo.key}
                  onClick={() => setActiveIndex(index)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo.url} alt={`${album.label} — photo ${index + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center font-black text-xs shadow-sm">
                      {index + 1}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PREV / NEXT ALBUM NAV */}
        <div className="pt-10 border-t border-slate-300/80 flex items-center justify-between gap-4">
          <Link
            href={`/gallery/${prevAlbum.folder}`}
            className="px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-800 font-black text-xs uppercase tracking-wider shadow-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Field Album
          </Link>
          <Link
            href={`/gallery/${nextAlbum.folder}`}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
          >
            Next Field Album <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* TRUE FULL-SCREEN PHOTO VIEWER — edge to edge, not a boxed popup */}
      {activeIndex !== null && photos[activeIndex] && (
        <div className="fixed inset-0 z-[300] bg-black flex flex-col animate-fade-in">
          <div className="flex items-center justify-between gap-4 px-5 py-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 inset-x-0 z-10">
            <div className="min-w-0">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">{album.label}</span>
              <h3 className="text-sm font-bold text-white/90">Photo {activeIndex + 1} of {photos.length}</h3>
            </div>
            <button
              onClick={() => setActiveIndex(null)}
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            className="relative flex-1 flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[activeIndex].url} alt="" className="max-h-full max-w-full object-contain" draggable={false} />

            <button
              onClick={goPrev}
              className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={goNext}
              className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
            <div className="sm:hidden absolute bottom-6 inset-x-0 flex justify-center">
              <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[11px] font-bold">
                Swipe to browse
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
