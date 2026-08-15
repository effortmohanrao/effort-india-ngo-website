"use client";

import { useEffect, useState } from "react";
import { X, Copy, Check, Landmark, Smartphone, Globe2, Mail, ShieldCheck, Loader2 } from "lucide-react";
import { defaultDonationSettings, type DonationSettings, type BankAccount } from "@/lib/donationSettings";

function CopyField({ label, value, mono = true }: { label: string; value: string; mono?: boolean }) {
  const [copied, setCopied] = useState(false);
  if (!value) return null;

  return (
    <div className="flex items-center justify-between gap-3 py-2 border-b border-slate-100 last:border-0">
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">{label}</p>
        <p className={`text-sm text-slate-800 truncate ${mono ? "font-mono" : "font-semibold"}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="shrink-0 w-8 h-8 rounded-lg bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 flex items-center justify-center text-slate-500 hover:text-emerald-700 transition-colors cursor-pointer"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
}

function BankCard({ account, missingNote }: { account: BankAccount; missingNote?: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
      <CopyField label="Bank" value={account.bankName} mono={false} />
      <CopyField label="Account Name" value={account.accountName} mono={false} />
      <CopyField label="Account Number" value={account.accountNumber} />
      <CopyField label="IFSC Code" value={account.ifsc} />
      <CopyField label="Branch" value={account.branch} mono={false} />
      {account.swiftCode !== undefined && account.swiftCode && <CopyField label="SWIFT / BIC Code" value={account.swiftCode} />}
      {account.swiftCode === "" && missingNote && (
        <p className="text-[11px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-2">{missingNote}</p>
      )}
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
      fetch("/api/site/donation-settings", { cache: "no-store" }).then((r) => r.json()),
      fetch("/api/site/media?prefix=donation-qr", { cache: "no-store" }).then((r) => r.json()),
    ])
      .then(([settingsData, mediaData]) => {
        setSettings(settingsData);
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
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-emerald-700 to-emerald-800 text-white px-6 py-5 rounded-t-3xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black">Support EFFORT NGO</h2>
            <p className="text-[11px] text-emerald-100">27 years, 9 states, 100% transparent. 80G tax exemption applies.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-6 pt-5">
          <button
            type="button"
            onClick={() => setTab("india")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              tab === "india" ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> Donate from India
          </button>
          <button
            type="button"
            onClick={() => setTab("abroad")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              tab === "abroad" ? "bg-emerald-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" /> Donate from Abroad
          </button>
        </div>

        {loading ? (
          <div className="p-10 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading payment details...
          </div>
        ) : (
          <div className="p-6 space-y-5">
            {tab === "india" ? (
              <>
                {/* UPI / QR */}
                <div className="rounded-2xl border border-slate-200 p-4 flex flex-col items-center text-center gap-3">
                  {qrUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qrUrl} alt="UPI QR code to donate to EFFORT NGO" className="w-44 h-44 object-contain rounded-xl border border-slate-200" />
                  ) : (
                    <div className="w-44 h-44 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-[11px] text-slate-400 font-semibold text-center px-4">
                      QR code coming soon — use the UPI ID or bank details below for now
                    </div>
                  )}
                  <p className="text-xs text-slate-500">Scan with GPay, PhonePe, Paytm, BHIM, or any UPI app.</p>
                  {settings.upiId && (
                    <div className="w-full">
                      <CopyField label="UPI ID" value={settings.upiId} />
                    </div>
                  )}
                </div>

                {/* Bank transfer */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5" /> Or bank transfer (NEFT/RTGS/IMPS)
                  </h3>
                  <BankCard account={settings.domesticBank} />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-xl bg-sky-50 border border-sky-200 px-4 py-3 text-[11px] text-sky-800 leading-relaxed flex gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-sky-600" />
                  <p>
                    Under India&apos;s FCRA law, foreign contributions to an Indian NGO must be sent only to this
                    designated FCRA account. Please ask your bank to route the wire accordingly.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2 flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5" /> FCRA-designated account
                  </h3>
                  <BankCard
                    account={settings.fcraBank}
                    missingNote="SWIFT/BIC code not yet listed — please email us and we'll send it directly."
                  />
                </div>
              </>
            )}

            {/* Receipt note */}
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-[11px] text-emerald-800 leading-relaxed flex gap-2">
              <Mail className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <p>
                After transferring, please email your payment screenshot or UTR/reference number to{" "}
                <a href={`mailto:${settings.receiptEmail}`} className="font-bold underline">
                  {settings.receiptEmail}
                </a>{" "}
                so we can send your 80G tax-exemption receipt.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
