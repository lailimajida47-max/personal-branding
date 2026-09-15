// data/proyek.ts
export type Proyek = {
  id: number;
  judul: string;
  deskripsi: string;
  gambar: string;
  teknologi: string;
};

export const daftarProyek: Proyek[] = [
  {
    id: 1,
    judul: "Website Portfolio",
    deskripsi: "Website pribadi untuk menampilkan karya dan profil.",
    gambar: "/project4.jpg",
    teknologi: "Next.js, TailwindCSS",
  },
  {
    id: 2,
    judul: "Aplikasi To-Do",
    deskripsi: "Aplikasi sederhana untuk mencatat tugas harian.",
    gambar: "/project5.jpg",
    teknologi: "React, Supabase",
  },
  {
    id: 3,
    judul: "Peta Interaktif",
    deskripsi: "Peta dengan marker lokasi menggunakan Leaflet.",
    gambar: "/project6.jpg",
    teknologi: "Leaflet, IndexedDB",
  },
];
