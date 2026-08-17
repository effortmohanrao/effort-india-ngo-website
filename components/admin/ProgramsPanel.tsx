"use client";

import { useCallback, useEffect, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, CircleDashed, Circle } from "lucide-react";
import Link from "next/link";
import MediaSlotManager from "./MediaSlotManager";
import { completedProjects, ongoingProjects, type Project } from "@/app/programs/data";
import { programAlbums } from "@/lib/programAlbums";

type StatusTab = "completed" | "ongoing";

const GALLERY_TARGET = 6;

const ALBUM_BY_FOLDER = Object.fromEntries(programAlbums.map((a) => [a.folder, a]));

type PhotoStatus = { hasCover: boolean; galleryCount: number; source: "own" | "gallery"; folderLabel?: string };

function statusBadge(s: PhotoStatus | undefined) {
  const hasCover = s?.hasCover ?? false;
  const galleryCount = s?.galleryCount ?? 0;
  const isComplete = hasCover && galleryCount >= GALLERY_TARGET;
  const isStarted = hasCover || galleryCount > 0;

  if (isComplete && s?.source === "gallery") {
    return {
      icon: CheckCircle2,
      classes: "bg-sky-50 border-sky-300 text-sky-600",
      title: `Complete — synced from Gallery album "${s.folderLabel}" (${galleryCount} photos)`,
    };
  }
  if (isComplete) {
    return {
      icon: CheckCircle2,
      classes: "bg-emerald-50 border-emerald-300 text-emerald-600",
      title: `Complete — cover uploaded + ${galleryCount}/${GALLERY_TARGET} gallery photos`,
    };
  }
  if (isStarted) {
    return {
      icon: CircleDashed,
      classes: "bg-amber-50 border-amber-300 text-amber-600",
      title:
        s?.source === "gallery"
          ? `Linked to Gallery album "${s.folderLabel}" — only ${galleryCount}/${GALLERY_TARGET} photos there so far`
          : `In progress — ${hasCover ? "cover done" : "no cover yet"}, ${galleryCount}/${GALLERY_TARGET} gallery photos`,
    };
  }
  return {
    icon: Circle,
    classes: "bg-slate-50 border-slate-200 text-slate-300",
    title: "Not started — no cover or gallery photos yet",
  };
}

function ProjectDetail({
  project,
  index,
  status,
  onBack,
}: {
  project: Project;
  index: number;
  status: StatusTab;
  onBack: () => void;
}) {
  const base = `programs/${status}/p${index + 1}`;

  return (
    <div className="p-6 max-w-3xl">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emerald-700 mb-4 cursor-pointer"
      >
        <ChevronLeft className="w-3.5 h-3.5" /> Back to {status === "completed" ? "Completed" : "Ongoing"} Projects
      </button>

      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
            {status === "completed" ? "Completed" : "Ongoing"} Project #{index + 1}
          </p>
          <h2 className="text-lg font-bold text-slate-800 leading-snug">{project.name}</h2>
          <p className="text-xs text-slate-500 mt-1">{project.funder}</p>
        </div>
        <Link
          href={`/programs/${status}/${index + 1}`}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 shrink-0 whitespace-nowrap"
        >
          View live page <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>

      {project.photoFolder ? (
        <div className="space-y-4">
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-bold text-sky-900 mb-1">📷 Synced from the main Gallery page</p>
            <p className="text-[11px] text-sky-800 leading-relaxed">
              This project already has real photos in the Gallery album <b>&quot;{ALBUM_BY_FOLDER[project.photoFolder]?.label ?? project.photoFolder}&quot;</b> —
              those same photos are shown automatically here and on the project&apos;s live page. No separate upload needed.
              Add or remove photos below and it updates both places at once (nothing gets duplicated).
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800 mb-1">Gallery Images (Shared Album)</p>
            <p className="text-[11px] text-slate-450 mb-3">The first image here doubles as this project&apos;s cover thumbnail. Aim for 6+.</p>
            <MediaSlotManager prefix={`programs/${status}/${project.photoFolder}`} label="Gallery Images" multiple />
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800 mb-1">Cover Image</p>
            <p className="text-[11px] text-slate-450 mb-3">Shown as this project&apos;s thumbnail everywhere it&apos;s listed. One image only.</p>
            <MediaSlotManager prefix={`${base}/cover`} label="Cover Image" />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-800 mb-1">Gallery Images</p>
            <p className="text-[11px] text-slate-450 mb-3">Shown on this project&apos;s case-study page. Aim for 6 for a complete gallery — upload as many as you have.</p>
            <MediaSlotManager prefix={`${base}/gallery`} label="Gallery Images" multiple />
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectList({
  status,
  projects,
  statuses,
  onSelect,
}: {
  status: StatusTab;
  projects: Project[];
  statuses: Record<string, PhotoStatus>;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="space-y-1.5">
      {projects.map((p, i) => {
        const badge = statusBadge(statuses[`${status}-${i}`]);
        const BadgeIcon = badge.icon;
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            className="w-full text-left flex items-center gap-3 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm px-4 py-3 transition-all cursor-pointer group"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0">
              {i + 1}
            </span>
            <span
              title={badge.title}
              className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${badge.classes}`}
            >
              <BadgeIcon className="w-4.5 h-4.5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-800 leading-snug truncate group-hover:text-emerald-700">{p.name}</p>
              <p className="text-[11px] text-slate-450 truncate">{p.funder}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 shrink-0" />
          </button>
        );
      })}
    </div>
  );
}

async function fetchOneStatus(status: StatusTab, index: number, project: Project): Promise<[string, PhotoStatus]> {
  if (project.photoFolder) {
    const album = ALBUM_BY_FOLDER[project.photoFolder];
    const res = await fetch(`/api/site/media?prefix=programs/${status}/${project.photoFolder}`, { cache: "no-store" }).then((r) => r.json());
    const count = (res.images ?? []).length;
    return [
      `${status}-${index}`,
      { hasCover: count > 0, galleryCount: count, source: "gallery", folderLabel: album?.label ?? project.photoFolder },
    ];
  }

  const base = `programs/${status}/p${index + 1}`;
  const [coverRes, galleryRes] = await Promise.all([
    fetch(`/api/site/media?prefix=${base}/cover`, { cache: "no-store" }).then((r) => r.json()),
    fetch(`/api/site/media?prefix=${base}/gallery`, { cache: "no-store" }).then((r) => r.json()),
  ]);
  return [
    `${status}-${index}`,
    { hasCover: (coverRes.images ?? []).length > 0, galleryCount: (galleryRes.images ?? []).length, source: "own" },
  ];
}

export default function ProgramsPanel() {
  const [statusTab, setStatusTab] = useState<StatusTab>("completed");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [statuses, setStatuses] = useState<Record<string, PhotoStatus>>({});

  const refreshStatuses = useCallback(() => {
    const jobs = [
      ...completedProjects.map((p, i) => fetchOneStatus("completed", i, p)),
      ...ongoingProjects.map((p, i) => fetchOneStatus("ongoing", i, p)),
    ];
    Promise.all(jobs).then((entries) => {
      setStatuses(Object.fromEntries(entries));
    });
  }, []);

  useEffect(() => {
    refreshStatuses();
  }, [refreshStatuses]);

  const projects = statusTab === "completed" ? completedProjects : ongoingProjects;
  const completeCount = projects.filter((_, i) => {
    const s = statuses[`${statusTab}-${i}`];
    return s && s.hasCover && s.galleryCount >= GALLERY_TARGET;
  }).length;

  if (openIndex !== null) {
    return (
      <ProjectDetail
        project={projects[openIndex]}
        index={openIndex}
        status={statusTab}
        onBack={() => {
          setOpenIndex(null);
          refreshStatuses();
        }}
      />
    );
  }

  return (
    <div className="p-6 max-w-3xl">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-800">Our Programs — Project Photos</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Click a project below to upload its cover image and gallery photos. Changes go live immediately.
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

      <div className="flex flex-wrap items-center gap-2 mb-2">
        <button
          type="button"
          onClick={() => {
            setStatusTab("completed");
            setOpenIndex(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusTab === "completed" ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Completed Projects ({completedProjects.length})
        </button>
        <button
          type="button"
          onClick={() => {
            setStatusTab("ongoing");
            setOpenIndex(null);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            statusTab === "ongoing" ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          Ongoing Projects ({ongoingProjects.length})
        </button>
      </div>

      <div className="flex items-center gap-4 mb-4 px-1 text-[11px] font-bold text-slate-450">
        <span className="inline-flex items-center gap-1.5 text-emerald-600">
          <CheckCircle2 className="w-3.5 h-3.5" /> {completeCount}/{projects.length} complete
        </span>
        <span className="inline-flex items-center gap-1.5 text-amber-600">
          <CircleDashed className="w-3.5 h-3.5" /> in progress
        </span>
        <span className="inline-flex items-center gap-1.5 text-slate-350">
          <Circle className="w-3.5 h-3.5" /> not started
        </span>
      </div>

      <ProjectList status={statusTab} projects={projects} statuses={statuses} onSelect={setOpenIndex} />
    </div>
  );
}
