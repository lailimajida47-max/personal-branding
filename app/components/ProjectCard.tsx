import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm 
                    transition-transform duration-700 hover:-translate-y-2 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <div className="relative h-48 w-full bg-sky-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Project Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-sky-600">{title}</h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Optional tech stack info */}
        <p className="mt-5 text-sm font-semibold text-sky-600">
          Next.js · Tailwind CSS
        </p>
      </div>
    </div>
  );
}
