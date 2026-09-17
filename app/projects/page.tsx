import Image from "next/image";
import { supabase } from "../lib/supabase";

export default async function Projects() {
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

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        My Projects
      </h1>

      {error ? (
        <p className="text-center text-red-600">
          Data gagal dimuat: {error.message}
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects?.map((project, index) => (
            <div key={project.id} className="text-center">
              <div className="relative h-48 w-full">
                <Image
                  src={images[index]}
                  alt={project.title || "Project"}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-lg object-cover shadow-lg transition-transform duration-700 hover:scale-105"
                />
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {project.title}
              </h2>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}