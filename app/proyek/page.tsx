import Image from "next/image";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function ProyekPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("id, title, description")
    .order("id", { ascending: true })
    .limit(3);

  const images = [
    "/project4.jpg",
    "/project5.jpg",
    "/project6.jpg",
  ];

  if (error) {
    return (
      <main className="min-h-screen bg-sky-50 px-6 py-24">
        <p className="text-center text-red-600">
          Data gagal dimuat: {error.message}
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-sky-50 px-6 py-24">
      <h1 className="mb-12 text-4xl font-bold text-slate-800">
        My Projects
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="relative h-48 w-full">
              <Image
                src={images[index]}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">
                {project.title}
              </h2>

              <p className="mb-4 text-slate-600">
                {project.description}
              </p>

              <Link
                href={`/proyek/${project.id}`}
                className="rounded bg-sky-600 px-3 py-1 text-sm text-white hover:bg-sky-700"
              >
                Lihat Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}