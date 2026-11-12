import type { Metadata } from "next";
import { programAlbums } from "@/lib/programAlbums";
import AlbumDetailClient from "@/components/AlbumDetailClient";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

export const revalidate = 60;

// Pre-build every album page so visitors get a cached page instead of a fresh render.
export function generateStaticParams() {
  return programAlbums.map((a) => ({ id: a.folder }));
}

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

  let photos: { key: string; url: string }[] = [];
  if (album) {
    try {
      const objs = await listR2Objects(`website/programs/${album.status}/${album.folder}/`);
      photos = objs
        .map((o) => o.Key)
        .filter((k): k is string => !!k)
        .sort()
        .map((key) => ({ key, url: publicUrlFor(key) }));
    } catch {
      photos = [];
    }
  }

  return <AlbumDetailClient album={album} albumIndex={albumIndex} photos={photos} />;
}
