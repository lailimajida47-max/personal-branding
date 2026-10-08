import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

function SkillCard({
  name,
  level,
}: {
  name: string;
  level: string;
}) {
  return (
    <div className="group rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
      <div className="mb-5 text-3xl transition duration-500 group-hover:rotate-12 group-hover:scale-125">
        ✦
      </div>

      <h3 className="text-xl font-bold text-slate-800">
        {name}
      </h3>

      <p className="mt-2 text-sm font-medium text-sky-600">
        {level}
      </p>
    </div>
  );
}

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

      {/* HERO */}
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

              <span className="mt-2 block animate-pulse text-sky-600">
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
                className="rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
              >
                Lihat Project
              </a>

              <a
                href="#contact"
                className="rounded-full border border-sky-200 bg-white px-7 py-3 text-sm font-semibold text-sky-700 transition duration-300 hover:-translate-y-1 hover:bg-sky-50 hover:shadow-lg"
              >
                Hubungi Saya
              </a>

            </div>

          </div>

          {/* FOTO */}
          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 via-sky-100 to-white p-4 shadow-xl transition duration-500 hover:scale-105 md:h-96 md:w-96">

              <div className="relative h-full w-full overflow-hidden rounded-full bg-white shadow-inner">

                <Image
                  src="/profile.jpg"
                  alt="Foto Laili Majida"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                  priority
                />

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-white px-6 py-24"
      >
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

      {/* EDUCATION */}
      <section
        id="education"
        className="bg-sky-50 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
            Education
          </p>

          <h2 className="animate-pulse text-4xl font-bold">
            My Education
          </h2>

          <div className="mt-10 rounded-3xl border border-sky-100 bg-white p-8 text-left shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="animate-pulse text-2xl font-bold">
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

              <span className="w-fit rounded-full bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700 transition duration-300 hover:scale-110">
                XI RPL 1
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Skills
            </p>

            <h2 className="text-4xl font-bold">
              Yang Sedang Saya Pelajari
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <SkillCard
              name="React"
              level="Intermediate-Advanced"
            />

            <SkillCard
              name="Next.js"
              level="Intermediate-Advanced"
            />

            <SkillCard
              name="TailwindCSS"
              level="Intermediate-Advanced"
            />

            <SkillCard
              name="IndexedDB"
              level="Intermediate"
            />

            <SkillCard
              name="Leaflet Maps"
              level="Intermediate"
            />

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-sky-50 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-500">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold">
              My Projects
            </h2>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {/* PROJECT 1 */}
            <div className="group transition-all duration-500 hover:-translate-y-4">

              <div className="overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sky-200">

                <div className="transition duration-500 group-hover:scale-[1.02]">

                  <ProjectCard
                    title="Manajemen Siswa"
                    description="Konsep manajemen siswa untuk mengelola data siswa dengan melihat data siswa, kelas, rata-rata perkelas, dan pelanggaran dengan menggunakan Next.js dan Tailwind CSS."
                    image="/project1.jpg"
                  />

                </div>

              </div>

            </div>

            {/* PROJECT 2 */}
            <div className="group transition-all duration-500 hover:-translate-y-4">

              <div className="overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sky-200">

                <div className="transition duration-500 group-hover:scale-[1.02]">

                  <ProjectCard
                    title="Website Peta Sederhana"
                    description="Konsep peta sederhana yang menampilkan lokasi tertentu dengan tampilan interaktif dan mudah digunakan."
                    image="/project2.jpg"
                  />

                </div>

              </div>

            </div>

            {/* PROJECT 3 */}
            <div className="group transition-all duration-500 hover:-translate-y-4">

              <div className="overflow-hidden rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sky-200">

                <div className="transition duration-500 group-hover:scale-[1.02]">

                  <ProjectCard
                    title="Aplikasi Daftar Belanja"
                    description="Konsep desain aplikasi daftar belanja yang dibuat menggunakan Figma."
                    image="/project3.jpg"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-slate-900 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
              Contact
            </p>

            <h2 className="text-4xl font-bold">
              Let&apos;s Connect
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Terima kasih sudah mengunjungi portfolio saya. Jika ingin
              menghubungi saya, silakan isi form di bawah ini.
            </p>

          </div>

          {/* FORM */}
          <form className="mx-auto mt-10 grid max-w-3xl gap-5">

            <div className="grid gap-5 md:grid-cols-2">

              {/* NAME */}
              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                />

              </div>

            </div>

            {/* MESSAGE */}
            <div>

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />

            </div>

            {/* SEND BUTTON */}
            <button
              type="submit"
              className="w-fit rounded-full bg-sky-500 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Send Message
            </button>

          </form>

          {/* CONTACT LINKS */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href="https://instagram.com/lailiiiima"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg"
            >
              Instagram
            </a>

            <a
              href="mailto:laili@gmail.com"
              className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg"
            >
              Email
            </a>

            <a
              href="tel:+6285702506712"
              className="rounded-full bg-sky-500 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-400 hover:shadow-lg"
            >
              Telepon
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Laili Majida. All rights reserved.
      </footer>

    </main>
  );
}