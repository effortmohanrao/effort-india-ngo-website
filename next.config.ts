import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our_projects",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our_projects/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-projects",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-projects/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our_focus",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our_focus/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-focus",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/our-focus/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/about_us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact_us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/human-resources",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/human-resources/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/human_resources",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/human_resources/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/community-health",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/community-health/:path*",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/community_health",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/community_health/:path*",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
