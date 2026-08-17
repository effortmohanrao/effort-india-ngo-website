"use client";

import { useEffect, useState } from "react";
import { Loader2, Save, CheckCircle2, Landmark, Smartphone, Mail, AlertTriangle } from "lucide-react";
import MediaSlotManager from "./MediaSlotManager";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

function BankFields({
  label,
  value,
  onChange,
  showSwift,
}: {
  label: string;
  value: BankAccount;
  onChange: (next: BankAccount) => void;
  showSwift?: boolean;
}) {
  const field = (key: keyof BankAccount, placeholder: string, mono = false) => (
    <div>
      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">{key === "ifsc" ? "IFSC Code" : key === "swiftCode" ? "SWIFT / BIC Code" : key.replace(/([A-Z])/g, " $1")}</label>
      <input
        type="text"
        value={value[key] ?? ""}
        onChange={(e) => onChange({ ...value, [key]: e.target.value })}
        placeholder={placeholder}
        className={`w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm ${mono ? "font-mono" : ""}`}
      />
    </div>
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3.5">
      <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
        <Landmark className="w-4 h-4 text-emerald-600" /> {label}
      </h4>
      <div className="grid sm:grid-cols-2 gap-3.5">
        {field("bankName", "e.g. State Bank of India")}
        {field("accountName", "e.g. EFFORT")}
        {field("accountNumber", "Account number", true)}
        {field("ifsc", "e.g. SBIN0000691", true)}
        <div className="sm:col-span-2">{field("branch", "Branch name & address")}</div>
        {showSwift && (
          <div className="sm:col-span-2">
            {field("swiftCode", "Get this from the bank if donors will wire from abroad", true)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function DonatePanel() {
  const [settings, setSettings] = useState<DonationSettings>(defaultDonationSettings);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/site/donation-settings", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: DonationSettings) => setSettings(data))
      .finally(() => setLoading(false));
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/admin/donation-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-6 flex items-center gap-2 text-sm text-slate-500">
        <Loader2 className="w-4 h-4 animate-spin" /> Loading donation settings...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-3xl">
      <div>
        <h2 className="text-lg font-bold text-slate-800">Donate — Bank Details, UPI &amp; QR Code</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Everything here feeds live into the &quot;Donate Now&quot; popup on the website. No code changes needed — edit and save.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 flex gap-3 text-xs text-amber-800 leading-relaxed">
        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
        <p>
          Double-check every digit before saving — this is what donors will pay into. The Abroad (FCRA) account is the
          one legally allowed to receive foreign contributions; the Domestic account is for Indian donors only.
        </p>
      </div>

      {/* UPI */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3.5">
        <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-emerald-600" /> UPI (India)
        </h4>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">UPI ID</label>
          <input
            type="text"
            value={settings.upiId}
            onChange={(e) => setSettings({ ...settings, upiId: e.target.value })}
            placeholder="e.g. effortindia@sbi — generate this in your UPI app (GPay/PhonePe/BHIM)"
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm font-mono"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">UPI QR Code Image</label>
          <p className="text-[11px] text-slate-450 mb-2">
            Generate a &quot;receive money&quot; QR for this account in your UPI app, screenshot it, and upload it here.
          </p>
          <MediaSlotManager prefix="donation-qr" label="UPI QR Code" />
        </div>
      </div>

      {/* Domestic bank */}
      <BankFields
        label="Domestic Bank Transfer (Indian Donors)"
        value={settings.domesticBank}
        onChange={(next) => setSettings({ ...settings, domesticBank: next })}
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 -mt-3">
        <label className="block text-[10px] font-bold text-slate-400 uppercase">Union Bank of India — Logo</label>
        <p className="text-[11px] text-slate-450">Shown next to the domestic account details on the Donate page.</p>
        <MediaSlotManager prefix="bank-logos/union-bank" label="Union Bank of India Logo" />
      </div>

      {/* FCRA bank */}
      <BankFields
        label="Foreign / FCRA Bank Transfer (Donors Abroad)"
        value={settings.fcraBank}
        onChange={(next) => setSettings({ ...settings, fcraBank: next })}
        showSwift
      />
      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 -mt-3">
        <label className="block text-[10px] font-bold text-slate-400 uppercase">State Bank of India — Logo</label>
        <p className="text-[11px] text-slate-450">Shown next to the FCRA account details on the Donate page.</p>
        <MediaSlotManager prefix="bank-logos/sbi" label="State Bank of India Logo" />
      </div>

      {/* Receipt email */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3.5">
        <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
          <Mail className="w-4 h-4 text-emerald-600" /> Receipt Email
        </h4>
        <div>
          <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1.5">
            Where donors should send their transfer screenshot/UTR for an 80G receipt
          </label>
          <input
            type="email"
            value={settings.receiptEmail}
            onChange={(e) => setSettings({ ...settings, receiptEmail: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-emerald-600 focus:outline-hidden text-sm"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSave}
        disabled={saving}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : saved ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
        {saving ? "Saving..." : saved ? "Saved" : "Save Donation Settings"}
      </button>
    </div>
  );
}
