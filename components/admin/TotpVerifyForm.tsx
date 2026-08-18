"use client";

import { useActionState } from "react";
import { ShieldCheck, KeyRound, LogIn } from "lucide-react";
import { verifyTotpAction } from "@/app/admin/actions";

export default function TotpVerifyForm() {
  const [state, formAction, pending] = useActionState(verifyTotpAction, undefined);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0b1712] px-4 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/25 blur-[140px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/15 blur-[140px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.08]" />
      </div>

      <div className="w-full max-w-sm relative z-10">
        <div className="flex flex-col items-center gap-3 mb-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] border border-emerald-400/40">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-white font-black text-xl tracking-tight">Two-Factor Verification</h1>
            <p className="text-emerald-200/60 text-xs font-semibold mt-1">
              Enter the 6-digit code from your authenticator app
            </p>
          </div>
        </div>

        <form
          action={formAction}
          autoComplete="off"
          className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-7 space-y-5 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]"
        >
          <div className="space-y-1.5">
            <label htmlFor="code" className="text-xs font-bold text-emerald-100/70 uppercase tracking-wider">
              Authentication Code
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-emerald-400/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="code"
                name="code"
                type="text"
                inputMode="numeric"
                pattern="[0-9]{6}"
                maxLength={6}
                autoComplete="off"
                autoFocus
                required
                className="w-full bg-black/30 border border-white/10 rounded-xl pl-10 pr-3 py-3 text-lg tracking-[0.4em] text-center text-white placeholder-white/25 outline-hidden focus:border-emerald-500/70 focus:bg-black/40 transition-colors"
                placeholder="000000"
              />
            </div>
          </div>

          {state?.error && (
            <p className="text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 rounded-xl px-3.5 py-2.5">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 disabled:opacity-60 text-white font-black text-sm rounded-xl py-3.5 shadow-[0_10px_25px_-8px_rgba(16,185,129,0.5)] transition-all cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            {pending ? "Verifying..." : "Verify & Sign In"}
          </button>
        </form>

        <p className="text-center text-[11px] text-white/25 font-medium mt-6">
          This step expires in 5 minutes — if it times out, sign in again.
        </p>
      </div>
    </div>
  );
}
