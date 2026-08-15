"use client";

import { ExternalLink, FolderOpen, Layers } from "lucide-react";
import Link from "next/link";
import MediaSlotManager from "./MediaSlotManager";
import { programAlbums as albums } from "@/lib/programAlbums";

const categoryPools = [
  { slug: "agriculture", label: "Sustainable Agriculture", desc: "Fallback photos for the 35 completed + ongoing agriculture projects without their own dedicated album." },
  { slug: "nrm", label: "Natural Resource Management", desc: "Fallback photos for NRM/watershed projects without their own dedicated album." },
  { slug: "health", label: "Community Health", desc: "Fallback photos for health/WASH projects without their own dedicated album." },
  { slug: "child", label: "Child & Women Development", desc: "Fallback photos for child, women & livelihoods projects without their own dedicated album." },
];

function AlbumGroup({ title, status }: { title: string; status: "completed" | "ongoing" }) {
  const group = albums.filter((a) => a.status === status);
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
        <FolderOpen className="w-4 h-4 text-emerald-600" /> {title} ({group.length} albums)
      </h3>
      <div className="space-y-5">
        {group.map((album) => (
          <div key={album.folder} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800">{album.label}</p>
            <p className="text-[11px] text-slate-450 mt-0.5 mb-3">
              Covers: {album.covers.join(" · ")}
            </p>
            <MediaSlotManager prefix={`programs/${album.status}/${album.folder}`} label={album.label} multiple />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProgramsPanel() {
  return (
    <div className="p-6 space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Our Programs — Project Photo Albums</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {albums.reduce((n, a) => n + a.covers.length, 0)} projects have their own dedicated album below. The remaining
            projects automatically show a real photo from their category&apos;s fallback pool — see &quot;Category Fallback
            Photos&quot; further down.
          </p>
        </div>
        <Link
          href="/programs"
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      <AlbumGroup title="Ongoing Projects" status="ongoing" />
      <AlbumGroup title="Completed Projects" status="completed" />

      <div className="space-y-4 pt-2 border-t border-slate-200">
        <div>
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-600" /> Category Fallback Photos
          </h3>
          <p className="text-[11px] text-slate-450 mt-1">
            Real EFFORT field photos, one pool per category. Used automatically on any project card that doesn&apos;t have its
            own album above — each card in a category rotates through a different photo from its pool for variety.
          </p>
        </div>
        <div className="space-y-5">
          {categoryPools.map((cat) => (
            <div key={cat.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-bold text-slate-800">{cat.label}</p>
              <p className="text-[11px] text-slate-450 mt-0.5 mb-3">{cat.desc}</p>
              <MediaSlotManager prefix={`programs/category-covers/${cat.slug}`} label={`${cat.label} Fallback Pool`} multiple />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
