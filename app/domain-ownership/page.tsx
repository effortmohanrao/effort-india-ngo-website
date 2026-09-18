import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Domain Ownership",
  description:
    "Official statement that effortindia.org is owned and operated by Effort (A Society for the Development of Agriculture and Youth).",
  robots: { index: true, follow: true },
};

export default function DomainOwnershipPage() {
  return (
    <div className="min-h-screen bg-[#faf7ee] text-[#221c0c] font-sans">
      <section className="bg-gradient-to-br from-[#1a1409] via-[#2a200d] to-[#151007] text-white py-14 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
            Official domain statement
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
            Domain ownership
          </h1>
          <p className="text-sm text-slate-300">
            Public confirmation that this website belongs to the registered nonprofit named below.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8 text-sm leading-relaxed text-[#4a3f28]">
        <p>
          This domain, <strong className="text-[#221c0c]">effortindia.org</strong> (including{" "}
          <strong className="text-[#221c0c]">www.effortindia.org</strong>), is the official website of{" "}
          <strong className="text-[#221c0c]">
            Effort (A Society for the Development of Agriculture and Youth)
          </strong>
          , also known as <strong className="text-[#221c0c]">EFFORT</strong>.
        </p>

        <p>
          Effort (A Society for the Development of Agriculture and Youth) owns, operates, and
          controls this domain for the organization&apos;s primary mission and activities: sustainable
          agriculture, natural resource management, and community empowerment for small and
          marginal farmers, women, and rural youth in India.
        </p>

        <section className="rounded-2xl border border-amber-900/15 bg-white p-6 space-y-3">
          <h2 className="text-lg font-black text-[#221c0c]">Registered organization</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[11rem_1fr] gap-x-4 gap-y-2">
            <dt className="font-bold text-[#221c0c]">Legal name</dt>
            <dd>Effort (A Society for the Development of Agriculture and Youth)</dd>
            <dt className="font-bold text-[#221c0c]">Short name</dt>
            <dd>EFFORT</dd>
            <dt className="font-bold text-[#221c0c]">Registration</dt>
            <dd>Societies Registration Act XXI of 1860 — Reg. No. 340/1999</dd>
            <dt className="font-bold text-[#221c0c]">Google Charity ID</dt>
            <dd className="font-semibold text-emerald-800">010330140</dd>
            <dt className="font-bold text-[#221c0c]">Registered office</dt>
            <dd>Srujana, # 9-240, G.T. Road, MARTUR - 523 301, Bapatla Dist., Andhra Pradesh, India</dd>
            <dt className="font-bold text-[#221c0c]">Official website</dt>
            <dd>
              <a href="https://www.effortindia.org" className="text-emerald-800 font-semibold underline">
                https://www.effortindia.org
              </a>
            </dd>
            <dt className="font-bold text-[#221c0c]">Official Domain Email</dt>
            <dd className="font-semibold text-emerald-800">contact@effortindia.org</dd>
            <dt className="font-bold text-[#221c0c]">Registered Secretariat Desk</dt>
            <dd>effortap@gmail.com (Historical registered society desk since 1999)</dd>
            <dt className="font-bold text-[#221c0c]">Authorized Admin</dt>
            <dd className="font-semibold text-emerald-800">mohanreddymaareddy29@gmail.com</dd>
            <dt className="font-bold text-[#221c0c]">Phone</dt>
            <dd>+91 99599 00081</dd>
            <dt className="font-bold text-[#221c0c]">Tax &amp; Statutory Status</dt>
            <dd>Section 12AB &amp; 80G Tax-Exempt, MCA Form CSR-1 (CSR00034988), NITI Aayog DARPAN registered</dd>
          </dl>
        </section>

        <section className="rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/60 p-6 space-y-3">
          <h2 className="text-base font-black text-emerald-950">Google Workspace for Nonprofits Authorization &amp; Email Transition</h2>
          <p className="text-emerald-900 leading-relaxed text-sm">
            This statement confirms that the domain <strong className="text-emerald-950">effortindia.org</strong> (including <strong className="text-emerald-950">www.effortindia.org</strong>) is the sole official web property owned, operated, and controlled by <strong className="text-emerald-950">Effort (A Society for the Development of Agriculture and Youth)</strong> (Charity ID: <strong className="text-emerald-950">010330140</strong>).
          </p>
          <p className="text-emerald-900 leading-relaxed text-sm">
            This website is a custom-engineered official platform representing our 27 years of community development across 1,909 villages in India. The application for Google Workspace for Nonprofits is made specifically to transition our organization from our historical registered desk email (effortap@gmail.com) to official domain-based inboxes (contact@effortindia.org / info@effortindia.org). This request is explicitly authorized under administrator account <strong className="text-emerald-950">mohanreddymaareddy29@gmail.com</strong>.
          </p>
        </section>

        <p>
          No other organization is authorized to represent Effort (A Society for the Development of
          Agriculture and Youth) on this domain. Google Workspace and other services requested for{" "}
          <strong className="text-[#221c0c]">effortindia.org</strong> are for this nonprofit only.
        </p>

        <p>
          <Link href="/about" className="text-emerald-800 font-semibold underline">
            About EFFORT
          </Link>
          {" · "}
          <Link href="/contact" className="text-emerald-800 font-semibold underline">
            Contact
          </Link>
          {" · "}
          <Link href="/privacy" className="text-emerald-800 font-semibold underline">
            Privacy &amp; terms
          </Link>
        </p>
      </article>
    </div>
  );
}
