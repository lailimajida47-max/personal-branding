// app/projects/page.tsx
import Image from "next/image";

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/project4.jpg"
              alt="Project 4"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105 object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Project 1</h2>
          <p className="text-gray-600">Deskripsi singkat project pertama.</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/project5.jpg"
              alt="Project 5"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105 object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Project 2</h2>
          <p className="text-gray-600">Deskripsi singkat project kedua.</p>
        </div>

        <div className="text-center">
          <div className="relative w-full h-48">
            <Image
              src="/project6.jpg"
              alt="Project 6"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105 object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Project 3</h2>
          <p className="text-gray-600">Deskripsi singkat project ketiga.</p>
        </div>
      </div>
    </div>
  );
}
