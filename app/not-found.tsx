// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-900">404</h1>
      <p className="mt-4 text-gray-900">Halaman tidak ditemukan</p>
      <a
        href="/"
        className="mt-6 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
      >
        Kembali ke Home
      </a>
    </div>
  );
}
