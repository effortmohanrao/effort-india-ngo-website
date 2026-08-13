"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  ArrowLeft,
  MapPin,
  Calendar,
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  Globe2,
} from "lucide-react";
import { galleryAlbumsData, GalleryAlbum, AlbumPhoto } from "../data";

export default function DedicatedAlbumPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const albumId = parseInt(resolvedParams.id, 10);
  const album = galleryAlbumsData.find((a) => a.id === albumId);

  const [activePhoto, setActivePhoto] = useState<AlbumPhoto | null>(null);

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

  const prevAlbumId = albumId > 1 ? albumId - 1 : galleryAlbumsData.length;
  const nextAlbumId = albumId < galleryAlbumsData.length ? albumId + 1 : 1;

  const currentPhotoIndex = activePhoto
    ? album.photos.findIndex((p) => p.id === activePhoto.id)
    : -1;

  function handlePrevPhoto() {
    if (currentPhotoIndex > 0) {
      setActivePhoto(album!.photos[currentPhotoIndex - 1]);
    } else {
      setActivePhoto(album!.photos[album!.photos.length - 1]);
    }
  }

  function handleNextPhoto() {
    if (currentPhotoIndex < album!.photos.length - 1) {
      setActivePhoto(album!.photos[currentPhotoIndex + 1]);
    } else {
      setActivePhoto(album!.photos[0]);
    }
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-24 pb-28 relative overflow-hidden">
      
      {/* BACKGROUND LIQUID AMBIENT GLOWS & RISING BUBBLES */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[750px] h-[750px] bg-amber-200/40 rounded-full blur-[180px] animate-liquid-drift-a" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[750px] h-[750px] bg-emerald-200/40 rounded-full blur-[170px] animate-liquid-drift-b" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/35 rounded-full blur-[190px] animate-aurora-silk-1" />
        <div className="bg-noise absolute inset-0 opacity-10" />

        {/* Continuous Rising Floating Translucent Bubbles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-[8%] w-14 h-14 rounded-full bg-amber-400/20 border border-amber-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0s", animationDuration: "7.5s" }} />
          <div className="absolute bottom-0 left-[30%] w-18 h-18 rounded-full bg-emerald-400/20 border border-emerald-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "1.5s", animationDuration: "8.8s" }} />
          <div className="absolute bottom-0 left-[58%] w-16 h-16 rounded-full bg-sky-400/20 border border-sky-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "0.7s", animationDuration: "9.2s" }} />
          <div className="absolute bottom-0 left-[82%] w-20 h-20 rounded-full bg-purple-400/20 border border-purple-300/40 backdrop-blur-xs animate-float-rising-bubble" style={{ animationDelay: "2.3s", animationDuration: "7.9s" }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* NAVIGATION BACK BAR */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-300/80 text-slate-800 text-xs font-black uppercase tracking-wider shadow-sm hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back To All Field Albums</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider">
              {album.impactTag}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-black uppercase tracking-wider">
              {album.year}
            </span>
          </div>
        </div>

        {/* ALBUM HERO TITLE & COVER BANNER */}
        <div className="relative rounded-[36px] overflow-hidden bg-slate-950 border-2 border-slate-200/90 shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            <img
              src={album.coverImage}
              alt={album.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 space-y-3 z-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-black uppercase tracking-widest shadow-md">
              <Sparkles className="w-4 h-4 text-amber-600 animate-spin" /> {album.album}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {album.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-emerald-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-400" /> {album.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-400" /> {album.photos.length} High-Res Photos
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium pt-1">
              {album.desc}
            </p>
          </div>
        </div>

        {/* STEP-BY-STEP FLOATING ANIMATED IMAGE GALLERY MATRIX */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Full Field Photo Gallery</span>
              <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full uppercase">
                {album.photos.length} Photos
              </span>
            </h2>
            <p className="text-xs font-semibold text-slate-500 hidden sm:block">
              Click any photo to open full-screen HD viewer
            </p>
          </div>

          {/* Photos Grid with Staggered 3D Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {album.photos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Image Frame */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Top Photo Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-400/40 text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {photo.tag}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center font-black text-xs shadow-sm">
                      {index + 1}
                    </span>
                  </div>

                  {/* Center Zoom Emblem */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Photo Caption Body */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{photo.location}</span>
                  </div>

                  <p className="text-xs font-bold text-slate-800 leading-relaxed group-hover:text-emerald-700 transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM PREVIOUS / NEXT ALBUM NAVIGATION FOOTER */}
        <div className="pt-10 border-t border-slate-300/80 flex items-center justify-between gap-4">
          <Link
            href={`/gallery/${prevAlbumId}`}
            className="px-6 py-3 rounded-full bg-white border border-slate-300 text-slate-800 font-black text-xs uppercase tracking-wider shadow-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" /> Previous Field Album
          </Link>

          <Link
            href={`/gallery/${nextAlbumId}`}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer"
          >
            Next Field Album <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* FULLSCREEN HD PHOTO LIGHTBOX INTERACTION */}
      {activePhoto && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in">
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-[36px] border-2 border-emerald-500/40 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
              <div className="min-w-0">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  {activePhoto.tag} • {activePhoto.location}
                </span>
                <h3 className="text-sm sm:text-base font-black text-white truncate">
                  {activePhoto.caption}
                </h3>
              </div>

              <button
                onClick={() => setActivePhoto(null)}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Stage */}
            <div className="relative grow bg-black flex items-center justify-center min-h-[350px] overflow-hidden">
              <img
                src={activePhoto.url}
                alt={activePhoto.caption}
                className="max-h-full max-w-full object-contain p-2"
              />

              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-emerald-600 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
