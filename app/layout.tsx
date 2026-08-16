import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.effortindia.org"),
  title: {
    default: "EFFORT | Sustainable Agriculture, Watershed & Community Empowerment",
    template: "%s | EFFORT",
  },
  description:
    "EFFORT is a premier non-profit organization (Reg. 340/1999) empowering rural communities across 9 Indian states through sustainable agriculture, watershed management, women SHGs, and 80G/FCRA compliant CSR partnerships.",
  keywords: [
    "EFFORT NGO",
    "EFFORT",
    "EFFORT India",
    "Sustainable Agriculture NGO Andhra Pradesh",
    "Watershed Development NGO India",
    "CSR NGO Partner India",
    "80G Tax Exempt NGO Donation",
    "FCRA Registered NGO India",
    "Varaha Soil Carbon Credit NGO",
    "Martur NGO Prakasam",
    "NITI Aayog DARPAN NGO",
  ],
  authors: [{ name: "EFFORT", url: "https://www.effortindia.org" }],
  creator: "EFFORT",
  publisher: "EFFORT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EFFORT | Empowering Communities & Transforming Livelihoods",
    description:
      "27 years of proven field impact empowering 2.50+ Lakh farm families across 9 states in sustainable agriculture, natural resource management, and rural livelihoods.",
    url: "https://www.effortindia.org",
    siteName: "EFFORT",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.effortindia.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EFFORT Field Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EFFORT | Sustainable Agriculture & Watershed Impact",
    description: "Empowering 2.50+ Lakh farm families across 9 Indian states through community-led sustainable development.",
    images: ["https://www.effortindia.org/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.effortindia.org",
  },
};

// JSON-LD Structured Data Schema for Official NGO Trust Verification
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "EFFORT NGO (Society for Emancipation and Fraternal Organization for Rural Transformation)",
  alternateName: "EFFORT India NGO",
  url: "https://www.effortindia.org",
  logo: "https://www.effortindia.org/logo.png",
  foundingDate: "1999",
  founders: [
    {
      "@type": "Person",
      name: "J. V. Mohan Rao",
      jobTitle: "Executive Director",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "X4H2+53C, Central Office Headquarters",
    addressLocality: "Martur",
    addressRegion: "Andhra Pradesh",
    postalCode: "523301",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-99599-00081",
    contactType: "Donor Support & Secretariat",
    email: "effortap@gmail.com",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  taxID: "Section 80G Tax Exempt",
  vatID: "FCRA Approved: 40102285992",
  sameAs: [
    "https://github.com/effortmohanrao/effort-india-ngo-website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
