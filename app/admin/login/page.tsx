"use client";

import { useActionState, useEffect, useState } from "react";
import { ShieldCheck, Lock, User, LogIn, Sparkles, Eye, EyeOff, Building2, KeyRound } from "lucide-react";
import { loginAction } from "../actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    fetch("/api/site/media?prefix=logo", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        const first = data.images?.[0];
        if (first) setLogoUrl(first.url);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#030705] via-[#081710] to-[#030705] px-4 sm:px-6 relative overflow-hidden font-sans">
      {/* Dynamic Ambient Background Glows & Noise Texture */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[550px] h-[550px] rounded-full bg-emerald-600/20 blur-[150px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-amber-500/15 blur-[150px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[160px]" />
        <div className="bg-noise absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="w-full max-w-md relative z-10 my-8">
        {/* Top Header & Official EFFORT NGO Brand Emblem Medallion */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Outer Rotating Dashed Gold Ring */}
            <div className="absolute -inset-2 rounded-3xl border-2 border-dashed border-amber-400/60 animate-gyro-cw pointer-events-none" />

            {/* Official Logo Medallion Box */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white border-3 border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.4)] p-2.5 overflow-hidden flex items-center justify-center group hover:scale-105 transition-transform duration-500">
              {logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logoUrl} alt="EFFORT NGO Official Logo" className="w-full h-full object-contain" />
              ) : (
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-emerald-800 to-slate-900 flex flex-col items-center justify-center text-white p-1 text-center">
                  <Building2 className="w-9 h-9 text-amber-400 mb-0.5" />
                  <span className="text-[10px] font-black text-amber-300 font-mono tracking-tight">EFFORT NGO</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center justify-center gap-2">
              EFFORT <span className="text-amber-400">Admin Portal</span>
            </h1>
            <p className="text-xs font-bold text-amber-200/80 uppercase tracking-widest flex items-center justify-center gap-1.5 mt-1.5 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Private Authorized Access Only
            </p>
          </div>
        </div>

        {/* Main Glassmorphic Login Card */}
        <div className="relative rounded-[36px] bg-slate-900/85 backdrop-blur-3xl border-2 border-amber-400/30 p-7 sm:p-9 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Top Rotating Laser Border Highlight Track */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-emerald-400 to-amber-500 animate-journey-rail-shimmer" />

          <form action={formAction} autoComplete="off" className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-[11px] font-black text-amber-200 uppercase tracking-wider flex items-center justify-between">
                <span>Staff Username</span>
                <KeyRound className="w-3.5 h-3.5 text-amber-400/70" />
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  required
                  className="w-full bg-slate-950/80 border-2 border-slate-700/80 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 font-medium transition-all"
                  placeholder="Enter authorized username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-[11px] font-black text-amber-200 uppercase tracking-wider flex items-center justify-between">
                <span>Password</span>
                <Lock className="w-3.5 h-3.5 text-amber-400/70" />
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="w-full bg-slate-950/80 border-2 border-slate-700/80 rounded-2xl pl-11 pr-12 py-3.5 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20 font-medium transition-all"
                  placeholder="••••••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-amber-300 transition-colors cursor-pointer"
                  title={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {state?.error && (
              <div className="text-xs font-bold text-rose-200 bg-rose-950/80 border-2 border-rose-500/50 rounded-2xl p-3.5 flex items-center gap-2.5 animate-shake">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
                <span>{state.error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 hover:from-amber-500 hover:to-amber-600 disabled:opacity-50 text-white font-black text-sm uppercase tracking-wider rounded-2xl py-4 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.45)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.6)] transition-all cursor-pointer group"
            >
              <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              {pending ? "Authenticating Session..." : "Access Control Dashboard"}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              256-Bit Encrypted Session &bull; Statutory Audit Verified Portal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
