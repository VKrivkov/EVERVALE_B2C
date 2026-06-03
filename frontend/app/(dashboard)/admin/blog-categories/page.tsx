"use client";

import { useEffect, useState } from "react";
import {
  fetchAdminBlogCategories,
  createAdminBlogCategory,
  updateAdminBlogCategory,
  type AdminBlogCategory,
} from "@/services/adminBlog";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminBlogCategoriesPage() {
  const [categories, setCategories] = useState<AdminBlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<string | null>(null);

  const [newName, setNewName] = useState("");
  const [newSlug, setNewSlug] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [creating, setCreating] = useState(false);

  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const items = await fetchAdminBlogCategories();
      setCategories(items);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    const name = newName.trim();
    const slug = (newSlug.trim() || slugify(name)).toLowerCase();
    if (!name || !slug) {
      setError("Name and slug are required");
      return;
    }
    setCreating(true);
    setError("");
    try {
      await createAdminBlogCategory({
        name,
        slug,
        description: newDescription.trim() || undefined,
        isActive: true,
      });
      setNewName("");
      setNewSlug("");
      setNewDescription("");
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create");
    } finally {
      setCreating(false);
    }
  };

  const handleSave = async (
    cat: AdminBlogCategory,
    patch: Partial<{
      name: string;
      slug: string;
      description: string;
      isActive: boolean;
      isArchived: boolean;
    }>,
  ) => {
    setBusyId(cat.id);
    setError("");
    try {
      await updateAdminBlogCategory(cat.id, patch);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Blog Categories ({categories.length})</h1>

      {error ? <p className="mt-4 text-sm text-pr_dr">{error}</p> : null}

      <div className="mt-6 rounded-2xl border border-dashed border-pr_w/20 px-4 py-3">
        <p className="text-xs text-pr_w/60">Create category</p>
        <div className="mt-2 grid gap-2 md:grid-cols-[1fr_1fr_2fr_auto] md:items-end">
          <div>
            <label className="text-[10px] text-pr_w/40">Name</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
                if (!newSlug) setNewSlug(slugify(e.target.value));
              }}
              className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-pr_w/40">Slug</label>
            <input
              type="text"
              value={newSlug}
              onChange={(e) => setNewSlug(e.target.value)}
              className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
            />
          </div>
          <div>
            <label className="text-[10px] text-pr_w/40">Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleCreate}
            disabled={creating}
            className="rounded-full bg-pr_lg px-5 py-1.5 text-xs font-semibold text-pr_dg disabled:opacity-60"
          >
            {creating ? "Adding…" : "+ Add"}
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {loading ? (
          <p className="text-sm text-pr_w/60">Loading…</p>
        ) : categories.length === 0 ? (
          <p className="text-sm text-pr_w/60">No categories yet.</p>
        ) : (
          categories.map((cat) => (
            <CategoryRow
              key={cat.id}
              cat={cat}
              busy={busyId === cat.id}
              onSave={(patch) => handleSave(cat, patch)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function CategoryRow({
  cat,
  busy,
  onSave,
}: {
  cat: AdminBlogCategory;
  busy: boolean;
  onSave: (
    patch: Partial<{
      name: string;
      slug: string;
      description: string;
      isActive: boolean;
      isArchived: boolean;
    }>,
  ) => void;
}) {
  const [name, setName] = useState(cat.name);
  const [slug, setSlug] = useState(cat.slug);
  const [description, setDescription] = useState(cat.description ?? "");

  return (
    <div
      className={`rounded-2xl border px-4 py-3 ${
        cat.isArchived
          ? "border-red-500/20 opacity-70"
          : cat.isActive
            ? "border-pr_w/10"
            : "border-pr_w/10 opacity-70"
      }`}
    >
      <div className="grid gap-2 md:grid-cols-[1fr_1fr_2fr_auto] md:items-end">
        <div>
          <label className="text-[10px] text-pr_w/40">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] text-pr_w/40">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
          />
        </div>
        <div>
          <label className="text-[10px] text-pr_w/40">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-1.5 text-sm outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() =>
              onSave({
                name: name.trim(),
                slug: slug.trim(),
                description: description.trim(),
              })
            }
            disabled={busy}
            className="rounded-full bg-pr_lg px-3 py-1.5 text-xs font-semibold text-pr_dg disabled:opacity-60"
          >
            {busy ? "…" : "Save"}
          </button>
          <button
            type="button"
            onClick={() => onSave({ isActive: !cat.isActive })}
            disabled={busy}
            className="rounded-full border border-pr_w/20 px-3 py-1.5 text-xs text-pr_w disabled:opacity-60"
          >
            {cat.isActive ? "Deactivate" : "Activate"}
          </button>
          {!cat.isArchived ? (
            <button
              type="button"
              onClick={() => {
                if (window.confirm(`Archive category "${cat.name}"?`)) {
                  onSave({ isArchived: true });
                }
              }}
              disabled={busy}
              className="rounded-full border border-red-500/30 px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 disabled:opacity-60"
            >
              Archive
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onSave({ isArchived: false })}
              disabled={busy}
              className="rounded-full border border-pr_w/20 px-3 py-1.5 text-xs text-pr_w disabled:opacity-60"
            >
              Unarchive
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
