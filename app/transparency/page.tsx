"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Transparency() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#trust-section");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center p-8">
      <div className="text-center space-y-3">
        <p className="text-sm font-bold text-amber-900">Redirecting to Verified Trust &amp; Compliance Registry...</p>
      </div>
    </div>
  );
}
