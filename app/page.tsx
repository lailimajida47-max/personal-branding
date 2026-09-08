import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-sky-50 text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-sky-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide text-sky-600">
            Laili<span className="text-slate-800">.</span>
          </h1>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-sky-600">
              Home
            </a>
            <a href="#about" className="transition hover:text-sky-600">
              About
            </a>
            <a href="#education" className="transition hover:text-sky-600">
              Education
            </a>
            <a href="#skills" className="transition hover:text-sky-600">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-sky-600">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-sky-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Personal Portfolio
            </p>

            <h2 className="text-5xl font-bold leading-tight md:text-6xl">
              Hello, I&apos;m
              <span className="mt-2 block text-sky-600">
                Laili Majida.
              </span>
            </h2>

            <h3 className="mt-5 text-2xl font-bold text-slate-700">
              Aspiring Web Developer
            </h3>

            <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
              Saya ingin mengembangkan karier sebagai Web Developer dan
              terus meningkatkan kemampuan dalam membuat website yang
              modern, responsif, dan mudah digunakan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Lihat Project
              </a>

              <a
                href="#contact"
                className="rounded-full border border-sky-200 bg-white px-7 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Foto Profil */}
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-sky-100 to-white p-4 shadow-xl md:h-96 md:w-96">
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white shadow-inner">
                <Image
                  src="/profile.jpg"
                  alt="Foto Laili Majida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold">
            Mengenal Saya Lebih Dekat
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Halo! Saya Laili Majida, siswa kelas XI RPL di SMK Negeri 1
            Pasuruan. Saya tertarik dengan dunia teknologi, khususnya
            pengembangan website dan desain antarmuka. Saat ini saya terus
            belajar dan mengembangkan kemampuan di bidang web development
            melalui berbagai project.
          </p>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-sky-50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Education
          </p>

          <h2 className="text-4xl font-bold">My Education</h2>

          <div className="mt-10 rounded-3xl border border-sky-100 bg-white p-8 text-left shadow-sm transition hover:shadow-lg">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  SMK Negeri 1 Pasuruan
                </h3>

                <p className="mt-2 font-medium text-sky-600">
                  Rekayasa Perangkat Lunak
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  Saya sedang menempuh pendidikan di jurusan Rekayasa
                  Perangkat Lunak dan mempelajari berbagai hal tentang
                  pemrograman, pengembangan website, database, dan
                  teknologi digital.
                </p>
              </div>

              <span className="w-fit rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
                XI RPL 1
              </span>vgit remote add origin https://github.com/lailimajida47-max/personal-branding.git
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Skills
            </p>

            <h2 className="text-4xl font-bold">
              Yang Sedang Saya Pelajari
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">⌨️</div>
              <h3 className="text-xl font-bold">HTML</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Membangun struktur dasar sebuah website.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">🎨</div>
              <h3 className="text-xl font-bold">CSS</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Membuat tampilan website menjadi menarik dan responsif.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">⚡</div>
              <h3 className="text-xl font-bold">JavaScript</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Membuat website menjadi interaktif dan dinamis.
              </p>
            </div>

            <div className="rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 text-3xl">▲</div>
              <h3 className="text-xl font-bold">Next.js</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Mengembangkan website modern menggunakan React.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-sky-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold">My Projects</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-40 items-center justify-center bg-sky-100">
                <span className="text-5xl">💻</span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold">
                  Personal Branding
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Website personal branding menggunakan Next.js dan
                  Tailwind CSS.
                </p>

                <p className="mt-5 text-sm font-semibold text-sky-600">
                  Next.js · Tailwind CSS
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-40 items-center justify-center bg-sky-100">
                <span className="text-5xl">🛍️</span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold">
                  Aplikasi Daftar Belanja
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Konsep desain aplikasi daftar belanja yang dibuat
                  menggunakan Figma.
                </p>

                <p className="mt-5 text-sm font-semibold text-sky-600">
                  Figma · UI Design
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-40 items-center justify-center bg-sky-100">
                <span className="text-5xl">📰</span>
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold">
                  Website Berita
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Website berita sederhana dengan tampilan responsif
                  dan modern.
                </p>

                <p className="mt-5 text-sm font-semibold text-sky-600">
                  HTML · CSS · JavaScript 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-slate-900 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
            Terima kasih sudah mengunjungi portfolio saya. Semoga kita
            bisa terhubung dan berbagi pengalaman.
          </p>

          <a
            href="https://instagram.com/lailiima"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Laili Majida. All rights reserved.
      </footer>
    </main>
  );
}