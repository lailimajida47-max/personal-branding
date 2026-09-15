import { notFound } from "next/navigation";
import Image from "next/image";
import { daftarProyek, Proyek } from "../../data/proyek"; 

type Props = {
  params: {
    id: string;
  };
};

export default function ProyekDetail({ params }: Props) {
  const proyek = daftarProyek.find(
    (p: Proyek) => p.id === Number(params.id)
  );

  if (!proyek) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-sky-50 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-800 mb-6">
          {proyek.judul}
        </h1>

        <div className="relative h-64 w-full mb-6">
          <Image
            src={proyek.gambar}
            alt={proyek.judul}
            width={800}
            height={500}
            sizes="(max-width: 768px) 100vw, 800px"
            className="h-full w-full object-cover rounded-xl shadow-lg"
          />
        </div>

        <p className="text-slate-600 mb-4">{proyek.deskripsi}</p>
        <p className="text-sky-600 font-semibold">
          Teknologi: {proyek.teknologi}
        </p>
      </div>
    </main>
  );
}

