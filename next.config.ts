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
        source: "/connect-with-our-charity",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect-with-our-charity/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect_with_our_charity",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect_with_our_charity/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/connect/:path*",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/infrastructure",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/infrastructure/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/charity",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/charity/:path*",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/training-centre",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/training-center",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/facilities",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resource",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resource/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/resources/:path*",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/major-milestones",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/major-milestones/:path*",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/milestones",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/support-us",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/support-us/:path*",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/donate",
        permanent: true,
      },
      {
        source: "/sustainable-agriculture",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/sustainable-agriculture/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/women-empowerment",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/women-empowerment/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/service-view",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/service-view/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/services/:path*",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/community-health-and-child-development",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/community-health-and-child-development/:path*",
        destination: "/impact",
        permanent: true,
      },
      {
        source: "/natural-resource-management",
        destination: "/programs",
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
