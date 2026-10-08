import type { MetadataRoute } from "next";
import { supabase } from "./lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: projects } = await supabase
    .from("projects")
    .select("id");

  const projectUrls =
    projects?.map((project) => ({
      url: `https://www.lailimajidaa.my.id/proyek/${project.id}`,
      lastModified: new Date(),
    })) ?? [];

  return [
    {
      url: "https://www.lailimajidaa.my.id/",
      lastModified: new Date(),
    },
    {
      url: "https://www.lailimajidaa.my.id/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.lailimajidaa.my.id/projects",
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}