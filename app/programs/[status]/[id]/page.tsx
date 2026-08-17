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
