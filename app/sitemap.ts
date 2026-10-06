import type { MetadataRoute } from "next";
import { supabase } from "./lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projects } = await supabase
    .from("projects")
    .select("id");

  const projectUrls =
    projects?.map((project) => ({
      url: `https://personal-branding-orpin-xi.vercel.app/proyek/${project.id}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: "https://personal-branding-orpin-xi.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://personal-branding-orpin-xi.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://personal-branding-orpin-xi.vercel.app/projects",
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}