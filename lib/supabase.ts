import { createClient } from "@supabase/supabase-js";

// Public client — safe to use in browser code (Android app / website client-side).
// Respects Row Level Security, so it can only do what RLS policies allow.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Admin client — server-side only (API routes, admin panel). Bypasses Row Level Security,
// so it must never be imported into client-side/browser code.
export function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
