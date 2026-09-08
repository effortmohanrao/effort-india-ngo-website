import type { Metadata } from "next";
import { programAlbums } from "@/lib/programAlbums";
import AlbumDetailClient from "@/components/AlbumDetailClient";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const album = programAlbums.find((a) => a.folder === id);

  if (!album) {
    return { title: "Album Not Found" };
  }

  const title = `${album.label} | EFFORT Photo Gallery`;
  const description = `${album.label} (${album.year}) — ${album.location}. ${album.desc}`;

  return {
    title,
    description: description.slice(0, 160),
    keywords: [
      album.label,
      album.category,
      album.location,
      "EFFORT Field Photos",
      "EFFORT NGO Gallery",
      "Sustainable Agriculture Photos India",
    ],
    alternates: {
      canonical: `https://www.effortindia.org/gallery/${id}`,
    },
    openGraph: {
      title,
      description: description.slice(0, 160),
      url: `https://www.effortindia.org/gallery/${id}`,
      siteName: "EFFORT",
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function DedicatedAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const albumIndex = programAlbums.findIndex((a) => a.folder === id);
  const album = albumIndex >= 0 ? programAlbums[albumIndex] : undefined;

  return <AlbumDetailClient album={album} albumIndex={albumIndex} />;
}
