"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Inbox,
  Mail,
  Phone,
  Briefcase,
  HeartHandshake,
  MessageSquareText,
  Loader2,
  Trash2,
  ChevronDown,
  CircleDot,
  RefreshCw,
} from "lucide-react";

type Submission = {
  id: string;
  form_type: "contact" | "careers" | "get-involved" | string;
  name: string | null;
  email: string | null;
  data: Record<string, unknown>;
  is_read: boolean;
  created_at: string;
};

const FORM_META: Record<string, { label: string; icon: typeof Mail; color: string; bg: string; border: string }> = {
  contact: { label: "Contact Us", icon: MessageSquareText, color: "text-sky-700", bg: "bg-sky-50", border: "border-sky-200" },
  careers: { label: "Careers", icon: Briefcase, color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  "get-involved": { label: "Get Involved / CSR", icon: HeartHandshake, color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
};

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  department: "Department",
  subject: "Subject",
  message: "Message",
  college: "College / Institution",
  role: "Role",
  portfolio: "Portfolio / LinkedIn",
  statement: "Statement",
  organization: "Organization",
  pathway: "Pathway",
  sector: "Sector",
  location: "Location",
  skills: "Selected Skills",
};

function timeAgo(iso: string) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

export default function FormSubmissionsPanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    fetch("/api/admin/form-submissions")
      .then((res) => res.json())
      .then((data) => setSubmissions(data.submissions ?? []))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: submissions.length };
    for (const s of submissions) c[s.form_type] = (c[s.form_type] ?? 0) + 1;
    return c;
  }, [submissions]);

  const unreadTotal = useMemo(() => submissions.filter((s) => !s.is_read).length, [submissions]);

  const filtered = filter === "all" ? submissions : submissions.filter((s) => s.form_type === filter);

  const markRead = async (id: string, is_read: boolean) => {
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, is_read } : s)));
    await fetch("/api/admin/form-submissions", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, is_read }),
    }).catch(() => {});
  };

  const toggleExpand = (s: Submission) => {
    const next = expandedId === s.id ? null : s.id;
    setExpandedId(next);
    if (next && !s.is_read) markRead(s.id, true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Permanently delete this submission?")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/admin/form-submissions", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete");
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
    } catch {
      alert("Failed to delete submission.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Inbox className="w-5 h-5 text-emerald-700" /> Form Submissions
            {unreadTotal > 0 && (
              <span className="inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-rose-600 text-white text-[11px] font-black">
                {unreadTotal}
              </span>
            )}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Every Contact, Careers, and Get Involved / CSR form submitted on the live site — in one place.
          </p>
        </div>
        <button
          type="button"
          onClick={load}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-700 hover:border-emerald-300 text-xs font-bold transition-colors cursor-pointer shrink-0"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Refresh
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
            filter === "all" ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
          }`}
        >
          All ({counts.all ?? 0})
        </button>
        {Object.entries(FORM_META).map(([key, meta]) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
              filter === key ? `${meta.bg} ${meta.color} ${meta.border} border-2` : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
            }`}
          >
            <meta.icon className="w-3.5 h-3.5" /> {meta.label} ({counts[key] ?? 0})
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center gap-2 text-slate-500 text-sm py-16 justify-center">
          <Loader2 className="w-5 h-5 animate-spin" /> Loading submissions...
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 rounded-3xl border-2 border-dashed border-slate-200 bg-white/60">
          <Inbox className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="text-sm font-bold text-slate-500">No submissions yet</p>
          <p className="text-xs text-slate-400 mt-1">Real visitor submissions will appear here the moment someone fills a form.</p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filtered.map((s) => {
            const meta = FORM_META[s.form_type] ?? FORM_META.contact;
            const Icon = meta.icon;
            const isExpanded = expandedId === s.id;
            const extraFields = Object.entries(s.data).filter(
              ([key]) => !["formType", "name", "email"].includes(key)
            );
            return (
              <div
                key={s.id}
                className={`rounded-2xl border bg-white transition-all overflow-hidden ${
                  !s.is_read ? "border-emerald-300 shadow-[0_4px_20px_-8px_rgba(16,185,129,0.35)]" : "border-slate-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(s)}
                  className="w-full flex items-center gap-3.5 px-4 sm:px-5 py-4 text-left cursor-pointer"
                >
                  {!s.is_read && <CircleDot className="w-3 h-3 text-emerald-600 shrink-0" />}
                  <div className={`w-9 h-9 rounded-xl ${meta.bg} ${meta.color} border ${meta.border} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-sm font-bold text-slate-800 ${!s.is_read ? "font-black" : ""}`}>{s.name || "(no name)"}</span>
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${meta.bg} ${meta.color}`}>
                        {meta.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5 truncate">
                      <span className="flex items-center gap-1 truncate"><Mail className="w-3 h-3 shrink-0" /> {s.email || "—"}</span>
                      {typeof s.data.phone === "string" && s.data.phone && (
                        <span className="flex items-center gap-1 shrink-0"><Phone className="w-3 h-3" /> {s.data.phone}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 shrink-0">{timeAgo(s.created_at)}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100">
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-3">
                      {extraFields.map(([key, value]) => {
                        const displayValue = Array.isArray(value) ? value.join(", ") : String(value ?? "");
                        if (!displayValue) return null;
                        const isLong = key === "message" || key === "statement";
                        return (
                          <div key={key} className={isLong ? "sm:col-span-2" : ""}>
                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">{FIELD_LABELS[key] ?? key}</p>
                            <p className="text-sm text-slate-700 whitespace-pre-wrap mt-0.5">{displayValue}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
                      <p className="text-[11px] text-slate-400">
                        Submitted {new Date(s.created_at).toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => markRead(s.id, !s.is_read)}
                          className="text-[11px] font-bold text-slate-500 hover:text-emerald-700 cursor-pointer"
                        >
                          Mark as {s.is_read ? "unread" : "read"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(s.id)}
                          disabled={deletingId === s.id}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 disabled:opacity-50 transition-colors cursor-pointer"
                          title="Delete submission"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
