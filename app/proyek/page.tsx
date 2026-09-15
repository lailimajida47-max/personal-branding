// app/proyek/page.tsx
import Image from "next/image";
import Link from "next/link";
import { daftarProyek } from "../../data/proyek";

export default function ProyekPage() {
  return (
    <main className="min-h-screen bg-sky-50 px-6 py-24">
      <h1 className="text-4xl font-bold text-slate-800 mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {daftarProyek.map((proyek) => (
          <div
            key={proyek.id}
            className="rounded-xl shadow-lg bg-white overflow-hidden"
          >
            <div className="relative h-48 w-full">
              <Image
                src={proyek.gambar}
                alt={proyek.judul}
                fill
                sizes="(max-width: 768px) 100vw, 33vw" // <== di sini
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{proyek.judul}</h2>
              <p className="text-slate-600 mb-2">{proyek.deskripsi}</p>
              <p className="text-sky-600 font-semibold mb-4">
                {proyek.teknologi}
              </p>
              <Link
                href={`/proyek/${proyek.id}`}
                className="text-sm text-white bg-sky-600 px-3 py-1 rounded hover:bg-sky-700"
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
