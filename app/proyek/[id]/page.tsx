import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const { data: project } = await supabase
    .from("projects")
    .select("title, description")
    .eq("id", Number(id))
    .single();

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProyekDetail({ params }: Props) {
  const { id } = await params;

  const { data: project, error } = await supabase
    .from("projects")
    .select("id, title, description")
    .eq("id", Number(id))
    .single();

  if (error || !project) {
    return notFound();
  }

  const images: Record<number, string> = {
    1: "/project4.jpg",
    2: "/project5.jpg",
    3: "/project6.jpg",
  };

  return (
    <main className="min-h-screen bg-sky-50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-slate-800">
          {project.title}
        </h1>

        <div className="relative mb-6 h-64 w-full">
          <Image
            src={images[project.id]}
            alt={project.title}
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 800px"
            className="h-full w-full rounded-xl object-contain shadow-lg"
          />
        </div>

        <p className="mb-4 text-slate-600">
          {project.description}
        </p>
      </div>
    </main>
  );
}