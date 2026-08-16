import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Privacy Policy & Terms",
  description: "How EFFORT collects, uses, and protects information submitted through this website, and the terms governing its use.",
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-lg sm:text-xl font-black text-[#221c0c]">{title}</h2>
      <div className="text-sm text-[#4a3f28] leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyTerms() {
  return (
    <div className="min-h-screen bg-[#faf7ee] text-[#221c0c] font-sans">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a1409] via-[#2a200d] to-[#151007] text-white py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[150px]" />
          <div className="bg-noise absolute inset-0 opacity-15" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Trust &amp; Legal
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Privacy Policy &amp; Terms</h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Plain-language explanation of what information this website collects, why, and the terms that govern using it.
          </p>
          <p className="text-xs text-amber-300/80 font-semibold">Effective &amp; last updated: 16 August 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-14">

        {/* Quick nav */}
        <div className="flex flex-wrap gap-3 text-xs font-bold">
          <a href="#privacy-policy" className="px-4 py-2 rounded-full bg-white border border-amber-900/20 hover:border-amber-500 transition-colors">Privacy Policy</a>
          <a href="#terms" className="px-4 py-2 rounded-full bg-white border border-amber-900/20 hover:border-amber-500 transition-colors">Terms &amp; Conditions</a>
        </div>

        {/* ================= PRIVACY POLICY ================= */}
        <div id="privacy-policy" className="scroll-mt-24 space-y-10">
          <h2 className="text-2xl font-black text-[#221c0c] flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-700" /> Privacy Policy
          </h2>

          <Section id="who-we-are" title="1. Who we are">
            <p>
              This website (effortindia.org) is operated by EFFORT, a non-profit society registered under the
              Societies Registration Act XXI of 1860 (Reg. No. 340/1999), Section 80G tax-exempt and FCRA
              approved, headquartered at Martur, Bapatla District, Andhra Pradesh, India.
            </p>
          </Section>

          <Section id="what-we-collect" title="2. What information we collect">
            <p>We only collect information you choose to type into one of three forms on this site:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><b>Contact form</b> — name, email, phone, department/subject, and your message.</li>
              <li><b>Careers form</b> — name, email, phone, college/institution, role applied for, portfolio link, and your statement.</li>
              <li><b>Get Involved form</b> — name, email, phone, organization, role, sector/pathway of interest, location, message, and any skills you select.</li>
            </ul>
            <p>
              We do not use cookies, analytics, or any visitor-tracking technology on this website today. If that
              ever changes, this policy will be updated before it does.
            </p>
          </Section>

          <Section id="how-we-use" title="3. How we use it">
            <p>
              Submitting one of these forms sends its contents directly by email to EFFORT&apos;s central desk
              (effortap@gmail.com) so our team can respond to your enquiry, application, or partnership request.
              That email is the only place your submission goes — this website does not save form
              submissions in any database. We use your details solely to respond to you; we do not sell,
              rent, or share them with third parties, and we won&apos;t add you to any mailing list without asking first.
            </p>
          </Section>

          <Section id="donations" title="4. Donations & payment information">
            <p>
              This website does not process payments and never asks for card, UPI PIN, or net-banking
              credentials. The Donate page simply displays EFFORT&apos;s official bank account (domestic)
              and FCRA account (international) details so you can transfer funds directly through your own
              bank or UPI app. To request a Section 80G tax-exemption receipt, you email your transaction
              reference or screenshot to effortap@gmail.com — that email is handled the same way as any
              other enquiry (see Section 3).
            </p>
          </Section>

          <Section id="third-parties" title="5. Service providers behind the scenes">
            <p>These providers help run the site and only process what&apos;s technically necessary to do so:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><b>Vercel</b> — hosts and serves the website.</li>
              <li><b>Cloudflare R2</b> — stores project photos and other media shown on the site.</li>
              <li><b>Resend</b> — delivers the Contact/Careers/Get Involved form emails described above.</li>
            </ul>
          </Section>

          <Section id="your-rights" title="6. Your choices">
            <p>
              Since we only hold what you send us by email to respond to your own enquiry, you can ask us at
              any time to tell you what we have, or to delete it, by writing to effortap@gmail.com.
            </p>
          </Section>

          <Section id="privacy-contact" title="7. Contact us about privacy">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-amber-700" /> effortap@gmail.com</span>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-amber-700" /> +91 99599 00081</span>
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-700" /> Martur, Bapatla District, Andhra Pradesh</span>
            </div>
          </Section>
        </div>

        {/* ================= TERMS & CONDITIONS ================= */}
        <div id="terms" className="scroll-mt-24 space-y-10 pt-6 border-t border-amber-900/15">
          <h2 className="text-2xl font-black text-[#221c0c] flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-emerald-700" /> Terms &amp; Conditions
          </h2>

          <Section id="use-of-site" title="1. Using this website">
            <p>
              This website is provided by EFFORT to share information about our programs, field impact, and
              ways to give or partner with us. It is provided &quot;as is&quot;, for informational purposes, without
              warranty of any kind.
            </p>
          </Section>

          <Section id="content-accuracy" title="2. Content & project information">
            <p>
              Project details, statistics, and photographs describe EFFORT&apos;s real, ongoing field work.
              Ongoing projects are labelled as such and are updated as they progress; figures are refreshed
              periodically and may not reflect the latest field data at every moment. If you spot something
              that looks out of date, please tell us at effortap@gmail.com.
            </p>
          </Section>

          <Section id="ip" title="3. Intellectual property">
            <p>
              Photographs, project content, and branding on this site belong to EFFORT unless a source is
              credited otherwise, and may not be reproduced for commercial use without written permission.
              You&apos;re welcome to share links to this site freely.
            </p>
          </Section>

          <Section id="external-links" title="4. External links">
            <p>
              Where this site links to third-party services (for example, a UPI app or an external partner),
              we aren&apos;t responsible for the content or practices of those external sites.
            </p>
          </Section>

          <Section id="changes" title="5. Changes to these terms">
            <p>
              We may update this Privacy Policy and these Terms as the website evolves. The &quot;last updated&quot;
              date at the top of this page will always reflect the latest version.
            </p>
          </Section>

          <Section id="governing-law" title="6. Governing law">
            <p>These terms are governed by the laws of India.</p>
          </Section>
        </div>

        <div className="pt-4">
          <Link href="/" className="text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
