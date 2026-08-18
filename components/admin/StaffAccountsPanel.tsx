"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, UserPlus, Trash2, KeyRound, Loader2 } from "lucide-react";
import TwoFactorSetup from "./TwoFactorSetup";

type Account = {
  username: string;
  display_name: string | null;
  created_at: string;
  last_login_at: string | null;
};

export default function StaffAccountsPanel() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentUsername, setCurrentUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ username: "", password: "", displayName: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingUsername, setDeletingUsername] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    fetch("/api/admin/staff-accounts")
      .then((res) => res.json())
      .then((data) => {
        setAccounts(data.accounts ?? []);
        setCurrentUsername(data.currentUsername ?? null);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/staff-accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: form.username, password: form.password, displayName: form.displayName }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add account");
      setForm({ username: "", password: "", displayName: "" });
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add account");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (username: string) => {
    if (!confirm(`Remove admin access for "${username}"? They will lose access once their current session expires (within 24 hours).`)) return;
    setDeletingUsername(username);
    try {
      const res = await fetch("/api/admin/staff-accounts", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to remove account");
      load();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to remove account");
    } finally {
      setDeletingUsername(null);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700" /> Admin Access
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Staff accounts that can sign in to this admin panel. Passwords are stored hashed — nobody, including this
          panel, can ever show a password back to you once it&apos;s set.
        </p>
      </div>

      <TwoFactorSetup />

      {/* Add new account */}
      <form onSubmit={handleAdd} className="bg-white/95 border border-amber-900/15 rounded-2xl p-5 space-y-3 max-w-lg shadow-sm">
        <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
          <UserPlus className="w-4 h-4 text-emerald-700" /> Add Staff Account
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            required
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-500"
          />
          <input
            type="text"
            placeholder="Display Name (optional)"
            value={form.displayName}
            onChange={(e) => setForm({ ...form, displayName: e.target.value })}
            className="px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>
        <input
          type="password"
          required
          minLength={8}
          placeholder="Password (min 8 characters)"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-500"
        />
        {error && <p className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-60 text-white text-xs font-bold transition-colors cursor-pointer"
        >
          <UserPlus className="w-3.5 h-3.5" /> {submitting ? "Adding..." : "Add Account"}
        </button>
      </form>

      {/* Existing accounts */}
      <div className="max-w-2xl">
        <h3 className="text-sm font-bold text-slate-800 mb-2">Current Staff Accounts</h3>
        {loading ? (
          <div className="flex items-center gap-2 text-slate-500 text-xs py-6"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</div>
        ) : (
          <div className="space-y-2">
            {accounts.map((acc) => (
              <div key={acc.username} className="flex items-center justify-between gap-3 bg-white/95 border border-slate-200 rounded-xl px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                      {acc.display_name || acc.username}
                      {acc.username === currentUsername && (
                        <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full">You</span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      @{acc.username} · {acc.last_login_at ? `last signed in ${new Date(acc.last_login_at).toLocaleDateString()}` : "never signed in"}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(acc.username)}
                  disabled={deletingUsername === acc.username}
                  className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 disabled:opacity-50 transition-colors cursor-pointer"
                  title="Remove admin access"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
