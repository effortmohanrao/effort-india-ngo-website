import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";
import { completedProjects, ongoingProjects } from "@/app/programs/data";
import { listR2Objects, publicUrlFor } from "@/lib/r2";

// Caches each project page for 60s so opening one doesn't wait on a live Cloudflare round-trip
// every time — the photos an admin uploads still show up within a minute.
export const revalidate = 60;

function getList(status: string) {
  if (status === "completed") return completedProjects;
  if (status === "ongoing") return ongoingProjects;
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ status: string; id: string }>;
}): Promise<Metadata> {
  const { status, id } = await params;
  const list = getList(status);
  const index = parseInt(id, 10) - 1;
  const project = list && Number.isInteger(index) ? list[index] : undefined;

  if (!project) {
    return { title: "Project Not Found" };
  }

  const statusLabel = status === "ongoing" ? "Active Ongoing Project" : "Completed Project";
  const shortName = project.name.length > 55 ? `${project.name.slice(0, 55)}...` : project.name;
  const description = `${statusLabel}: ${project.name}. Partner/Funder: ${project.funder}. Impact: ${project.beneficiaries}.`;

  return {
    title: `${shortName} | EFFORT Programs`,
    description: description.slice(0, 160),
    keywords: [
      project.category,
      project.funder,
      "EFFORT NGO Project",
      "Sustainable Agriculture India",
      "CSR Project Partner India",
    ],
    alternates: {
      canonical: `https://www.effortindia.org/programs/${status}/${id}`,
    },
    openGraph: {
      title: `${project.name} | EFFORT NGO`,
      description: description.slice(0, 160),
      url: `https://www.effortindia.org/programs/${status}/${id}`,
      siteName: "EFFORT",
      locale: "en_IN",
      type: "article",
    },
  };
}

async function fetchInitialPhotos(status: string, index: number, photoFolder?: string) {
  const prefix = photoFolder ? `programs/${status}/${photoFolder}` : `programs/${status}/p${index + 1}/gallery`;
  const objects = await listR2Objects(`website/${prefix}/`);
  return objects
    .filter((o) => o.Key)
    .sort((a, b) => (a.Key! < b.Key! ? -1 : 1))
    .map((o) => ({ key: o.Key!, url: publicUrlFor(o.Key!) }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ status: string; id: string }>;
}) {
  const { status, id } = await params;
  const list = getList(status);
  const index = parseInt(id, 10) - 1;
  const project = list && Number.isInteger(index) ? list[index] : undefined;

  if (!list || !project) notFound();

  const initialPhotos = await fetchInitialPhotos(status, index, project.photoFolder);

  return <ProjectDetailClient status={status} id={id} initialPhotos={initialPhotos} />;
}
