"use client";

import { useEffect, useState } from "react";
import {
  getProjects,
  deleteProject,
} from "../../services/projectService";
import ProjectFrom from "./ProjectFrom";

type Project = {
  id: number;
  title: string;
  description: string;
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [editingProject, setEditingProject] =
    useState<Project | null>(null);

  async function loadProjects() {
    setLoading(true);

    try {
      const data = await getProjects();
      setProjects(data || []);
    } catch (error) {
      setMessage(
        `Gagal mengambil data: ${
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan"
        }`
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function handleDelete(id: number) {
    const yakin = window.confirm(
      "Yakin mau menghapus project ini?"
    );

    if (!yakin) return;

    try {
      await deleteProject(id);

      setMessage("Project berhasil dihapus!");
      await loadProjects();
    } catch (error) {
      setMessage(
        `Gagal menghapus: ${
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan"
        }`
      );
    }
  }

  function handleEdit(project: Project) {
    setEditingProject(project);
    setMessage("");
  }

  function handleCancel() {
    setEditingProject(null);
  }

  async function handleSuccess() {
    setEditingProject(null);
    setMessage("");
    await loadProjects();
  }

  return (
    <main className="min-h-screen bg-sky-50 p-8">
      <h1 className="mb-8 text-3xl font-bold text-slate-800">
        Admin Projects
      </h1>

      <ProjectFrom
        editingProject={editingProject}
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />

      {message && (
        <p className="mb-4 text-sm text-slate-600">
          {message}
        </p>
      )}

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-sky-100">
            <tr>
              <th className="px-6 py-4 text-slate-800">
                ID
              </th>

              <th className="px-6 py-4 text-slate-800">
                Title
              </th>

              <th className="px-6 py-4 text-slate-800">
                Description
              </th>

              <th className="px-6 py-4 text-slate-800">
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-6 text-center text-slate-600"
                >
                  Loading...
                </td>
              </tr>
            ) : projects.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-6 text-center text-slate-600"
                >
                  Belum ada project.
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-t"
                >
                  <td className="px-6 py-4 text-slate-800">
                    {project.id}
                  </td>

                  <td className="px-6 py-4 font-medium text-slate-800">
                    {project.title}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {project.description}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(project)
                        }
                        className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(project.id)
                        }
                        className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}