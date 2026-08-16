import { MetadataRoute } from "next";
import { completedProjects, ongoingProjects } from "./programs/data";
import { programAlbums } from "@/lib/programAlbums";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.effortindia.org";

  const routes = [
    "",
    "/about",
    "/impact",
    "/donate",
    "/programs",
    "/csr",
    "/get-involved",
    "/contact",
    "/transparency",
    "/careers",
    "/gallery",
    "/news",
    "/privacy",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/donate" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/donate" || route === "/impact" ? 0.9 : 0.8,
  }));

  const projectEntries: MetadataRoute.Sitemap = [
    ...completedProjects.map((_, i) => `${baseUrl}/programs/completed/${i + 1}`),
    ...ongoingProjects.map((_, i) => `${baseUrl}/programs/ongoing/${i + 1}`),
  ].map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const albumEntries: MetadataRoute.Sitemap = programAlbums.map((album) => ({
    url: `${baseUrl}/gallery/${album.folder}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries, ...albumEntries];
}
