"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, Landmark, Smartphone, Globe2, Mail, ShieldCheck, Loader2, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

function CopyField({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  return (
    <div className="flex items-center justify-between gap-3 py-2.5 px-3 rounded-xl bg-slate-900/5 border border-slate-200/80 hover:border-amber-500/50 transition-all group">
      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-500">{label}</p>
        <p className={`text-xs sm:text-sm text-slate-900 truncate mt-0.5 ${mono ? "font-mono font-bold" : "font-bold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="shrink-0 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-extrabold flex items-center gap-1 transition-all cursor-pointer shadow-xs"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-white" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
}

{/* Official Union Bank Emblem Badge */}
function UnionBankLogo() {
  return (
    <div className="w-9 h-9 rounded-xl bg-[#003366] text-white flex flex-col items-center justify-center border-2 border-amber-400 shadow-md shrink-0 p-0.5">
      <span className="text-[9px] font-black tracking-tight leading-none text-amber-300 font-mono">UBI</span>
      <span className="text-[7px] font-bold text-white tracking-widest leading-none mt-0.5">BANK</span>
    </div>
  );
}

{/* Official SBI Blue Keyhole Emblem Badge */}
function SBIBankLogo() {
  return (
    <div className="w-9 h-9 rounded-xl bg-[#280071] text-white flex items-center justify-center border-2 border-sky-400 shadow-md shrink-0">
      <div className="w-5 h-5 rounded-full bg-[#00a3e0] flex items-center justify-center relative shadow-inner">
        <div className="w-1.5 h-2.5 bg-[#280071] rounded-t-full absolute bottom-0" />
      </div>
    </div>
  );
}

function BankCard({ account, type }: { account: BankAccount; type: "domestic" | "fcra" }) {
  const isDomestic = type === "domestic";
  return (
    <div className={`rounded-2xl border-2 p-4 sm:p-5 space-y-3.5 shadow-md ${
      isDomestic 
        ? "bg-gradient-to-br from-amber-50/90 via-white to-amber-50/40 border-amber-300/80" 
        : "bg-gradient-to-br from-sky-50/90 via-white to-sky-50/40 border-sky-300/80"
    }`}>
      {/* Card Header with Official Bank Emblem */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          {isDomestic ? <UnionBankLogo /> : <SBIBankLogo />}
          <div>
            <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">{account.bankName}</h4>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-0.5">
              {isDomestic ? "Domestic Transfer (INR / 80G)" : "FCRA Foreign Transfer (USD/EUR/GBP)"}
            </p>
          </div>
        </div>
        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-xs ${
          isDomestic 
            ? "bg-emerald-100 text-emerald-800 border-emerald-300" 
            : "bg-sky-100 text-sky-800 border-sky-300"
        }`}>
          {isDomestic ? "80G Tax Exempt" : "MHA FCRA Approved"}
        </span>
      </div>

      <div className="space-y-2">
        <CopyField label="Bank Name" value={account.bankName} mono={false} />
        <CopyField label="Account Beneficiary" value={account.accountName} mono={false} />
        <CopyField label="Account Number" value={account.accountNumber} />
        <CopyField label="IFSC Code" value={account.ifsc} />
        <CopyField label="Branch Location" value={account.branch} mono={false} />
        {account.swiftCode && <CopyField label="SWIFT / BIC Code (Foreign Transfer)" value={account.swiftCode} />}
      </div>
    </div>
  );
}

export default function DonateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [tab, setTab] = useState<"india" | "abroad">("india");
  const [settings, setSettings] = useState<DonationSettings>(defaultDonationSettings);
  const [qrUrl, setQrUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    Promise.all([
      fetch("/api/site/donation-settings", { cache: "no-store" }).then((r) => r.json()).catch(() => defaultDonationSettings),
      fetch("/api/site/media?prefix=donation-qr", { cache: "no-store" }).then((r) => r.json()).catch(() => ({ images: [] })),
    ])
      .then(([settingsData, mediaData]) => {
        if (settingsData && settingsData.domesticBank) setSettings(settingsData);
        setQrUrl(mediaData.images?.[0]?.url ?? null);
      })
      .finally(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-[32px] bg-white shadow-2xl border-2 border-amber-300/40"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[#381116] via-[#5c0d18] to-[#381116] text-white px-6 py-5 rounded-t-[30px] border-b border-amber-300/40 flex items-center justify-between shadow-md">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">
              <Sparkles className="w-3 h-3 text-slate-950" /> Official Donation Portal
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-1">Support EFFORT NGO</h2>
            <p className="text-xs text-amber-200 font-semibold">Section 80G Tax Exempt &bull; FCRA Govt Approved &bull; 27 Years Legacy</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 border border-white/20"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Executive 2-Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 p-4 sm:p-5 bg-slate-100/80 border-b border-slate-200">
          <button
            type="button"
            onClick={() => setTab("india")}
            className={`py-3 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
              tab === "india"
                ? "bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white shadow-lg border border-amber-400 scale-[1.02]"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <UnionBankLogo />
            <div className="text-left">
              <span className="block font-black text-xs leading-none">🇮🇳 National (INR)</span>
              <span className="block text-[9px] font-bold opacity-80 mt-1">Union Bank of India</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setTab("abroad")}
            className={`py-3 px-3 rounded-2xl text-xs font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
              tab === "abroad"
                ? "bg-gradient-to-r from-sky-700 via-indigo-800 to-sky-900 text-white shadow-lg border border-sky-400 scale-[1.02]"
                : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
            }`}
          >
            <SBIBankLogo />
            <div className="text-left">
              <span className="block font-black text-xs leading-none">🌍 Foreign (FCRA)</span>
              <span className="block text-[9px] font-bold opacity-80 mt-1">State Bank of India</span>
            </div>
          </button>
        </div>

        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-500">
            <Loader2 className="w-6 h-6 animate-spin text-amber-700" />
            <span className="font-bold">Loading verified bank details...</span>
          </div>
        ) : (
          <div className="p-5 sm:p-6 space-y-5">
            {tab === "india" ? (
              <>
                {/* UPI QR & Quick Transfer */}
                <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  {qrUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qrUrl} alt="UPI QR code to donate to EFFORT NGO" className="w-36 h-36 object-contain rounded-xl border-2 border-amber-300 shadow-md shrink-0 bg-white p-1" />
                  ) : (
                    <div className="w-36 h-36 rounded-xl border-2 border-dashed border-amber-300 bg-white flex items-center justify-center text-[10px] text-amber-800 font-bold text-center px-3 shrink-0">
                      Scan with any UPI App (GPay / PhonePe / Paytm / BHIM)
                    </div>
                  )}
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-200/80 px-2.5 py-0.5 rounded-full">
                      <Smartphone className="w-3 h-3 text-amber-900" /> Instant UPI Payment
                    </span>
                    <h4 className="text-sm font-black text-slate-900">Scan QR Code or Use NEFT/RTGS Transfer</h4>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      All domestic donations qualify for 50% Tax Exemption under Section 80G of Income Tax Act.
                    </p>
                    {settings.upiId && (
                      <CopyField label="Official UPI ID" value={settings.upiId} />
                    )}
                  </div>
                </div>

                {/* Domestic Union Bank Transfer Card */}
                <BankCard account={settings.domesticBank} type="domestic" />
              </>
            ) : (
              <>
                {/* FCRA Mandatory Notice */}
                <div className="rounded-2xl bg-sky-50 border-2 border-sky-200 p-4 text-xs text-sky-900 leading-relaxed flex gap-3 shadow-xs">
                  <ShieldCheck className="w-5 h-5 shrink-0 text-sky-600 mt-0.5" />
                  <div>
                    <h5 className="font-black text-xs text-sky-950 uppercase tracking-wider">MHA FCRA Government Statutory Requirement</h5>
                    <p className="mt-1 text-sky-800 font-medium">
                      Under Ministry of Home Affairs (MHA) regulations, all international &amp; NRI foreign contributions must be routed through this designated State Bank of India (SBI) New Delhi Main Branch account.
                    </p>
                  </div>
                </div>

                {/* Foreign SBI FCRA Bank Transfer Card */}
                <BankCard account={settings.fcraBank} type="fcra" />
              </>
            )}

            {/* Tax Receipt & Certificate Email Note */}
            <div className="rounded-2xl bg-slate-900 text-white p-4 text-xs leading-relaxed flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-bold text-slate-200">Need your 80G Tax Exemption Receipt?</p>
                  <p className="text-[11px] text-slate-400 font-medium">Email transaction reference / screenshot to <a href={`mailto:${settings.receiptEmail}`} className="text-amber-300 font-bold underline">{settings.receiptEmail}</a></p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950 border border-emerald-500/40 px-2.5 py-1 rounded-full shrink-0">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Instant Receipt
              </span>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
