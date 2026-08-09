export type AdminPage = {
  id: string;
  label: string;
  href: string;
};

export const adminPages: AdminPage[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "programs", label: "Our Programs", href: "/programs" },
  { id: "impact", label: "Impact & Map", href: "/impact" },
  { id: "get-involved", label: "Get Involved", href: "/get-involved" },
  { id: "contact", label: "Contact Us", href: "/contact" },
  { id: "transparency", label: "Transparency", href: "/transparency" },
  { id: "csr", label: "CSR", href: "/csr" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "news", label: "News & Media", href: "/news" },
  { id: "donor-login", label: "Donor Portal", href: "/donor-login" },
  { id: "donate", label: "Donate", href: "/donate" },
];
