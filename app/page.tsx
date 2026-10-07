export default function Home() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "Personal Branding",
      description: "Portfolio website built with Next.js and Tailwind CSS.",
      image: "/project1.jpg",
    },
    {
      title: "Dashboard Analytics",
      description: "Modern dashboard with a clean and responsive interface.",
      image: "/project2.jpg",
    },
    {
      title: "Student Internship",
      description: "Website concept for student internship information.",
      image: "/project3.jpg",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6fb] text-zinc-900">

      {/* NAVBAR */}
      <nav className="fixed left-1/2 top-4 z-50 w-[92%] max-w-5xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-zinc-200 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-xl">

          <a href="#home" className="text-lg font-black">
            Laili<span className="text-violet-600">.</span>
          </a>

          <div className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-violet-600">
              Home
            </a>
            <a href="#about" className="transition hover:text-violet-600">
              About
            </a>
            <a href="#skills" className="transition hover:text-violet-600">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-violet-600">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-violet-600">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-violet-600"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 py-28"
      >
        <div className="absolute -left-32 top-32 h-72 w-72 animate-pulse rounded-full bg-violet-300/30 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-72 w-72 animate-pulse rounded-full bg-fuchsia-300/20 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-2">

          {/* HERO TEXT */}
          <div className="animate-[fadeUp_0.8s_ease-out]">

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-sky-600">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
              LAILI
              <br />
              <span className="text-sky-300">
                MAJIDA.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              A Software Engineering student who loves creating modern,
              useful, and creative digital experiences.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-zinc-900 px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-xs font-bold transition duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-600"
              >
                About Me
              </a>
            </div>
          </div>

          {/* FOTO */}
          <div className="relative mx-auto w-full max-w-[290px]">

            <div className="absolute -inset-5 animate-pulse rounded-[2.5rem] bg-violet-300/30 blur-2xl" />

            <div className="relative animate-[float_4s_ease-in-out_infinite] overflow-hidden rounded-[2rem] border-[6px] border-white bg-white shadow-2xl">
              <img
                src="/profile.jpg"
                alt="Laili Majida"
                className="h-auto w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <p className="text-[10px] text-zinc-500">
                Currently
              </p>
              <p className="text-xs font-black">
                XI RPL 1
              </p>
            </div>

            <div className="absolute -right-4 -top-4 rounded-2xl bg-zinc-900 px-4 py-3 text-white shadow-xl">
              <p className="text-[10px] text-zinc-400">
                Based in
              </p>
              <p className="text-xs font-bold">
                Pasuruan
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MOVING TEXT */}
      <section className="overflow-hidden bg-zinc-900 py-4 text-white">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-xl font-black">
          <span>WEB DEVELOPER ✦</span>
          <span>CREATIVE CODER ✦</span>
          <span>RPL STUDENT ✦</span>
          <span>UI DESIGN ✦</span>
          <span>WEB DEVELOPER ✦</span>
          <span>CREATIVE CODER ✦</span>
          <span>RPL STUDENT ✦</span>
          <span>UI DESIGN ✦</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">

          <div className="animate-[fadeUp_0.8s_ease-out]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
              About Me
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Learning,
              <br />
              building,
              <br />
              growing.
            </h2>
          </div>

          <div className="text-sm leading-7 text-zinc-600 sm:text-base">
            <p>
              I'm Laili Majida, a Software Engineering student from
              SMK Negeri 1 Pasuruan.
            </p>

            <p className="mt-4">
              I enjoy learning web development and creating digital
              projects using Next.js, React, Tailwind CSS, and Supabase.
            </p>
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
            My Skills
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            Things I work with.
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-xs font-bold shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:text-violet-600"
                style={{
                  animation: "fadeUp 0.6s ease-out both",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="bg-zinc-900 px-6 py-20 text-white"
      >
        <div className="mx-auto max-w-5xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
            Selected Works
          </p>

          <h2 className="text-3xl font-black sm:text-4xl">
            My Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {projects.map((project) => (
              <a
                key={project.title}
                href="/proyek"
                className="group overflow-hidden rounded-3xl bg-white text-zinc-900 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-black">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-zinc-500">
                    {project.description}
                  </p>

                  <p className="mt-4 text-xs font-bold text-sky-600">
                    View Project →
                  </p>
                </div>

              </a>
            ))}

          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-600">
            Education
          </p>

          <div className="mt-7 rounded-[1.8rem] border border-zinc-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <p className="text-xs font-bold text-sky-600">
              2025 — Present
            </p>

            <h3 className="mt-2 text-xl font-black">
              SMK Negeri 1 Kota Pasuruan
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Rekayasa Perangkat Lunak · XI RPL 1
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 pb-20">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-sky-600 p-7 text-white sm:p-10">

          <div className="grid gap-8 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-200">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Let's create
                <br />
                something cool.
              </h2>

              <p className="mt-4 text-sm leading-6 text-violet-100">
                Have a project or idea? Feel free to contact me.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 text-zinc-900 shadow-xl">

              <a
                href="https://instagram.com/lailiiiima"
                target="_blank"
                rel="noreferrer"
                className="mb-3 block rounded-xl bg-zinc-100 px-4 py-3 text-sm font-bold transition hover:bg-violet-100 hover:text-sky-600"
              >
                Instagram
                <span className="mt-1 block text-xs font-normal text-zinc-500">
                  @lailiiiima
                </span>
              </a>

              <a
                href="mailto:laili@gmail.com"
                className="mb-3 block rounded-xl bg-zinc-100 px-4 py-3 text-sm font-bold transition hover:bg-violet-100 hover:text-sky-600"
              >
                Email
                <span className="mt-1 block text-xs font-normal text-zinc-500">
                  laili@gmail.com
                </span>
              </a>

              <a
                href="tel:+6285702506712"
                className="block rounded-xl bg-zinc-100 px-4 py-3 text-sm font-bold transition hover:bg-sky-100 hover:text-sky-600"
              >
                Phone
                <span className="mt-1 block text-xs font-normal text-zinc-500">
                  +62 857-0250-6712
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 px-6 py-7">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
          <p>© 2026 Laili Majida.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </main>
  );
}