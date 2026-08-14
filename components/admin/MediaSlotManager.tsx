"use client";

import { useEffect, useRef, useState } from "react";
import { ImagePlus, Trash2, RefreshCw, Loader2 } from "lucide-react";

type MediaImage = { key: string; url: string };

type Props = {
  prefix: string; // e.g. "homepage/hero-section" or "logo" -> stored under website/{prefix}/
  label: string;
  multiple?: boolean; // true = "Add another image" allowed. false = single slot, upload = first image, then only Replace/Delete.
};

export default function MediaSlotManager({ prefix, label, multiple = false }: Props) {
  const [images, setImages] = useState<MediaImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyKey, setBusyKey] = useState<string | null>(null); // "new" while uploading a fresh image, or a key while that image is busy
  const addInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const replaceTargetKey = useRef<string | null>(null);

  async function load() {
    setLoading(true);
    const res = await fetch(`/api/site/media?prefix=${encodeURIComponent(prefix)}`, { cache: "no-store" });
    const data = await res.json();
    setImages(data.images ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefix]);

  async function uploadFile(file: File) {
    const form = new FormData();
    form.append("file", file);
    form.append("prefix", prefix);
    const res = await fetch("/api/admin/media/upload", { method: "POST", body: form });
    if (!res.ok) throw new Error("Upload failed");
    return (await res.json()) as MediaImage;
  }

  async function deleteKey(key: string) {
    await fetch("/api/admin/media/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key }),
    });
  }

  async function handleAddFile(file: File) {
    setBusyKey("new");
    try {
      const newImage = await uploadFile(file);
      setImages((prev) => [...prev, newImage]);
    } finally {
      setBusyKey(null);
    }
  }

  async function handleReplaceFile(file: File, oldKey: string) {
    setBusyKey(oldKey);
    try {
      const newImage = await uploadFile(file); // upload new first
      await deleteKey(oldKey); // only delete old once new upload succeeded
      setImages((prev) => prev.map((img) => (img.key === oldKey ? newImage : img)));
    } finally {
      setBusyKey(null);
    }
  }

  async function handleDelete(key: string) {
    if (!confirm("Delete this image? This removes it from Cloudflare R2 permanently.")) return;
    setBusyKey(key);
    try {
      await deleteKey(key);
      setImages((prev) => prev.filter((img) => img.key !== key));
    } finally {
      setBusyKey(null);
    }
  }

  const showAddButton = multiple || images.length === 0;

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-slate-500 py-6">
        <Loader2 className="w-4 h-4 animate-spin" /> Loading {label.toLowerCase()}...
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {images.map((img) => (
          <div key={img.key} className="rounded-2xl border border-slate-200 bg-white overflow-hidden group relative">
            <div className="aspect-video bg-slate-100 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt="" className="w-full h-full object-cover" />
              {busyKey === img.key && (
                <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 animate-spin text-emerald-600" />
                </div>
              )}
            </div>
            <div className="p-2.5 flex items-center gap-2">
              <button
                type="button"
                disabled={busyKey !== null}
                onClick={() => {
                  replaceTargetKey.current = img.key;
                  replaceInputRef.current?.click();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 rounded-lg px-2.5 py-1.5 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Replace
              </button>
              <button
                type="button"
                disabled={busyKey !== null}
                onClick={() => handleDelete(img.key)}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 hover:text-white bg-red-50 hover:bg-red-600 border border-red-200 hover:border-red-600 rounded-lg px-2.5 py-1.5 transition-colors disabled:opacity-50 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}

        {showAddButton && (
          <button
            type="button"
            disabled={busyKey !== null}
            onClick={() => addInputRef.current?.click()}
            className="aspect-video rounded-2xl border-2 border-dashed border-slate-300 hover:border-emerald-400 bg-slate-50 hover:bg-emerald-50/50 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer disabled:opacity-50"
          >
            {busyKey === "new" ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <ImagePlus className="w-6 h-6" />
                <span className="text-xs font-bold">{images.length === 0 ? "Upload Image" : "Add Another Image"}</span>
              </>
            )}
          </button>
        )}
      </div>

      <input
        ref={addInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleAddFile(file);
          e.target.value = "";
        }}
      />
      <input
        ref={replaceInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && replaceTargetKey.current) handleReplaceFile(file, replaceTargetKey.current);
          e.target.value = "";
        }}
      />
    </div>
  );
}
