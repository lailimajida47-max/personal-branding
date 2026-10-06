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
  image_url?: string;
  live_url?: string;
  status?: string;
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
  const [imageUrl, setImageUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [status, setStatus] = useState("published");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTitle(editingProject?.title ?? "");
    setDescription(editingProject?.description ?? "");
    setImageUrl(editingProject?.image_url ?? "");
    setLiveUrl(editingProject?.live_url ?? "");
    setStatus(editingProject?.status ?? "published");
    setMessage("");
  }, [editingProject]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const data = {
        title,
        description,
        image_url: imageUrl,
        live_url: liveUrl,
        status,
      };

      if (editingProject) {
        await updateProject(editingProject.id, data);
        setMessage("Project berhasil diedit!");
      } else {
        await addProject(data);
        setMessage("Project berhasil ditambahkan!");
      }

      setTitle("");
      setDescription("");
      setImageUrl("");
      setLiveUrl("");
      setStatus("published");

      onSuccess();
    } catch (error: any) {
      console.error(error);
      setMessage(`Gagal: ${error?.message || "Terjadi kesalahan"}`);
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
        className="mb-4 w-full rounded border border-slate-300 p-3 text-slate-800"
        required
      />

      <textarea
        placeholder="Deskripsi project"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 p-3 text-slate-800"
        rows={4}
        required
      />

      <input
        type="url"
        placeholder="URL gambar project"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 p-3 text-slate-800"
        required
      />

      <input
        type="url"
        placeholder="URL live project"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 p-3 text-slate-800"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-4 w-full rounded border border-slate-300 p-3 text-slate-800"
      >
        <option value="published">Published</option>
        <option value="draft">Draft</option>
      </select>

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
            className="rounded bg-slate-500 px-4 py-2 text-white"
          >
            Batal
          </button>
        )}
      </div>

      {message && (
        <p className="mt-4 text-sm text-slate-600">{message}</p>
      )}
    </form>
  );
}