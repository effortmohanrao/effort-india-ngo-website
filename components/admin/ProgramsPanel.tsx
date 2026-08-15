"use client";

import { ExternalLink, FolderOpen } from "lucide-react";
import Link from "next/link";
import MediaSlotManager from "./MediaSlotManager";
import { programAlbums as albums } from "@/lib/programAlbums";

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
            Only projects with real photographs on file get an album here. The other {65 + 15 - albums.reduce((n, a) => n + a.covers.length, 0)}+
            {" "}projects show an honest &quot;no photos yet&quot; state on the site rather than a stock image.
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
    </div>
  );
}
