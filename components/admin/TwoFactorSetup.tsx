"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, ShieldOff, QrCode, Loader2, Check } from "lucide-react";

type SetupData = { secret: string; otpauthUrl: string; qrDataUrl: string };

export default function TwoFactorSetup() {
  const [enabled, setEnabled] = useState<boolean | null>(null);
  const [setupData, setSetupData] = useState<SetupData | null>(null);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadStatus = () => {
    fetch("/api/admin/totp")
      .then((res) => res.json())
      .then((data) => setEnabled(!!data.enabled))
      .catch(() => setEnabled(false));
  };

  useEffect(() => {
    loadStatus();
  }, []);

  const handleStart = async () => {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/totp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "start" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to start setup");
      setSetupData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to start setup");
    } finally {
      setBusy(false);
    }
  };

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/totp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "confirm", code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Incorrect code");
      setSetupData(null);
      setCode("");
      loadStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Incorrect code");
    } finally {
      setBusy(false);
    }
  };

  const handleDisable = async () => {
    if (!confirm("Turn off two-factor authentication for your account? You'll only need your password to sign in again.")) return;
    setBusy(true);
    try {
      const res = await fetch("/api/admin/totp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "disable" }),
      });
      if (!res.ok) throw new Error("Failed to disable");
      loadStatus();
    } catch {
      alert("Failed to disable 2FA. Try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-white/95 border border-amber-900/15 rounded-2xl p-5 max-w-lg shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-700" /> Two-Factor Authentication (Your Account)
      </h3>

      {enabled === null ? (
        <div className="flex items-center gap-2 text-slate-500 text-xs"><Loader2 className="w-4 h-4 animate-spin" /> Checking status...</div>
      ) : enabled && !setupData ? (
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
            <Check className="w-3.5 h-3.5" /> Enabled
          </span>
          <button
            onClick={handleDisable}
            disabled={busy}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold border border-rose-200 disabled:opacity-60 transition-colors cursor-pointer"
          >
            <ShieldOff className="w-3.5 h-3.5" /> Turn Off
          </button>
        </div>
      ) : !setupData ? (
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
            Not Set Up
          </span>
          <button
            onClick={handleStart}
            disabled={busy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold disabled:opacity-60 transition-colors cursor-pointer"
          >
            {busy ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <QrCode className="w-3.5 h-3.5" />} Set Up 2FA
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-xs text-slate-600 leading-relaxed">
            Scan this QR code with Google Authenticator (or any authenticator app), then enter the 6-digit code it shows to confirm.
          </p>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={setupData.qrDataUrl} alt="2FA QR code" className="rounded-xl border border-slate-200 p-2 bg-white" />
          </div>
          <div className="text-center">
            <p className="text-[10px] font-black uppercase text-slate-400 mb-1">Or enter this key manually</p>
            <code className="text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 tracking-wider break-all">{setupData.secret}</code>
          </div>
          <form onSubmit={handleConfirm} className="space-y-3">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
              placeholder="000000"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center text-lg tracking-[0.3em] focus:outline-none focus:border-emerald-500"
            />
            {error && <p className="text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">{error}</p>}
            <div className="flex gap-2">
              <button
                type="submit"
                disabled={busy}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold disabled:opacity-60 transition-colors cursor-pointer"
              >
                {busy ? "Confirming..." : "Confirm & Enable"}
              </button>
              <button
                type="button"
                onClick={() => { setSetupData(null); setCode(""); setError(null); }}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
