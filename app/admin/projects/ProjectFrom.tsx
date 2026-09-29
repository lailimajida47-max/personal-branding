"use client";

import { useEffect, useState } from "react";
import {
  addProject,
  updateProject,
} from "../../services/projectService";

type Project = {
  id: number;
  title: string;
  description: string;
};

type ProjectFromProps = {
  editingProject: Project | null;
  onSuccess: () => void;
  onCancel: () => void;
};

export default function ProjectFrom({
  editingProject,
  onSuccess,
  onCancel,
}: ProjectFromProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTitle(editingProject?.title ?? "");
    setDescription(editingProject?.description ?? "");
    setMessage("");
  }, [editingProject]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (editingProject) {
        await updateProject(editingProject.id, {
          title,
          description,
        });

        setMessage("Project berhasil diedit!");
      } else {
        await addProject({
          title,
          description,
        });

        setMessage("Project berhasil ditambahkan!");
      }

      setTitle("");
      setDescription("");

      onSuccess();
    } catch (error: any) {
      console.error("ERROR TAMBAH/EDIT PROJECT:", error);

      setMessage(
        `Gagal: ${
          error?.message || JSON.stringify(error)
        }`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl bg-white p-6 shadow"
    >
      <h2 className="mb-4 text-xl font-bold text-slate-800">
        {editingProject ? "Edit Project" : "Tambah Project"}
      </h2>

      <input
        type="text"
        placeholder="Judul project"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 bg-white p-3 text-slate-800 placeholder:text-slate-400"
        required
      />

      <textarea
        placeholder="Deskripsi project"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 bg-white p-3 text-slate-800 placeholder:text-slate-400"
        rows={4}
        required
      />

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-sky-600 px-4 py-2 text-white hover:bg-sky-700 disabled:opacity-50"
        >
          {loading
            ? "Menyimpan..."
            : editingProject
            ? "Simpan Perubahan"
            : "Tambah Project"}
        </button>

        {editingProject && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded bg-slate-500 px-4 py-2 text-white hover:bg-slate-600"
          >
            Batal
          </button>
        )}
      </div>

      {message && (
        <p className="mt-4 text-sm text-slate-600">
          {message}
        </p>
      )}
    </form>
  );
}