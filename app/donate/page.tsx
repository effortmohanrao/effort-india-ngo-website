"use client";

import { useEffect } from "react";
import { Loader2 } from "lucide-react";

// The donate experience is now a popup opened from the header's "Donate Now" button
// (see components/DonateModal.tsx), not a standalone page. This route only exists so
// old bookmarks/shared links to /donate still work — it redirects home and asks the
// header to open the modal there.
export default function DonateRedirect() {
  useEffect(() => {
    window.location.replace("/?openDonate=1");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 gap-2 text-sm">
      <Loader2 className="w-4 h-4 animate-spin" /> Taking you to the donate page...
    </div>
  );
}
