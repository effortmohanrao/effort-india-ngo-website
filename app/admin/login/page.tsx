"use client";

import { useActionState } from "react";
import { ShieldCheck, Lock, User, LogIn } from "lucide-react";
import { loginAction } from "../actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(loginAction, undefined);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-black text-xl shadow-lg">
            E
          </div>
          <h1 className="text-white font-bold text-lg">EFFORT Admin Panel</h1>
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Staff access only
          </p>
        </div>

        <form
          action={formAction}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl"
        >
          <div className="space-y-1.5">
            <label htmlFor="username" className="text-xs font-semibold text-slate-400">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-600 outline-hidden focus:border-emerald-600 transition-colors"
                placeholder="admin"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-xs font-semibold text-slate-400">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-600 outline-hidden focus:border-emerald-600 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          {state?.error && (
            <p className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-lg px-3 py-2">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 text-white font-bold text-sm rounded-xl py-2.5 transition-colors cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            {pending ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
