import { createClient } from "@/app/lib/supabase-browser";

const supabase = createClient();

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw error;

  return data;
}

export async function addProject(project: {
  title: string;
  description: string;
}) {
  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select();

  if (error) throw error;

  return data;
}

export async function updateProject(
  id: number,
  project: {
    title: string;
    description: string;
  }
) {
  const { data, error } = await supabase
    .from("projects")
    .update(project)
    .eq("id", id)
    .select();

  if (error) throw error;

  return data;
}

export async function deleteProject(id: number) {
  const { error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id);

  if (error) throw error;
}