"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  fetchAdminBlogCategories,
  createAdminBlog,
  type AdminBlogCategory,
} from "@/services/adminBlog";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isSlugConflict(message: string) {
  const m = message.toLowerCase();
  return (
    m.includes("conflict") ||
    m.includes("already exists") ||
    m.includes("slug") ||
    m.includes("409")
  );
}

export default function AdminBlogNewPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<AdminBlogCategory[]>([]);
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [readTime, setReadTime] = useState(0);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetchAdminBlogCategories()
      .then((items) => {
        const active = items.filter((c) => !c.isArchived);
        setCategories(active);
        if (active.length > 0) setCategoryId(active[0].id);
      })
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Failed to load categories"),
      );
  }, []);

  const handleCreate = async () => {
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError("Title is required");
      return;
    }
    if (!categoryId) {
      setError("Category is required (create one first)");
      return;
    }
    setCreating(true);
    setError("");
    const baseSlug = slugify(trimmedTitle) || `blog-${Date.now()}`;
    const readTimeValue = Number.isFinite(readTime)
      ? Math.max(0, Math.trunc(readTime))
      : 0;

    const attempt = async (slug: string) =>
      createAdminBlog({
        categoryId,
        title: trimmedTitle,
        slug,
        excerpt: excerpt.trim() || undefined,
        readTime: readTimeValue,
      });

    try {
      let created;
      try {
        created = await attempt(baseSlug);
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (!isSlugConflict(msg)) throw err;
        let lastErr: unknown = err;
        for (let i = 0; i < 5; i++) {
          const suffix = `-${Math.random().toString(36).slice(2, 6)}`;
          try {
            created = await attempt(`${baseSlug}${suffix}`);
            break;
          } catch (e) {
            lastErr = e;
            const m = e instanceof Error ? e.message : String(e);
            if (!isSlugConflict(m)) throw e;
          }
        }
        if (!created) throw lastErr;
      }
      router.push(`/admin/blogs/edit?id=${created.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create blog");
    } finally {
      setCreating(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-pr_w/20 bg-transparent px-3 py-2 text-sm outline-none";

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">New Blog</h1>
        <Link
          href="/admin/blogs"
          className="text-sm text-pr_w/60 hover:text-pr_w"
        >
          ← Back
        </Link>
      </div>

      <p className="mt-2 text-xs text-pr_w/50">
        Step 1: pick a category and title to create the draft. You&apos;ll then
        land on the full editor where you can upload images, add content blocks,
        fill SEO and publish.
      </p>

      <p className="mt-2 text-[11px] text-yellow-300/80">
        Blogs are created as drafts (inactive). They only appear on the public
        /blog list after you toggle &quot;Active&quot; or click &quot;Publish
        now&quot; on the editor.
      </p>

      {error ? <p className="mt-4 text-sm text-pr_dr">{error}</p> : null}

      {categories.length === 0 ? (
        <p className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-300">
          No active categories. Create one in{" "}
          <Link href="/admin/blog-categories" className="underline">
            Blog Categories
          </Link>{" "}
          first.
        </p>
      ) : null}

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-xs text-pr_w/60">Category</label>
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className={inputClass}
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id} className="bg-pr_dg">
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs text-pr_w/60">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs text-pr_w/60">Excerpt</label>
          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
            className={inputClass}
          />
        </div>
        <div>
          <label className="text-xs text-pr_w/60">Read time (minutes)</label>
          <input
            type="number"
            min={0}
            value={readTime}
            onChange={(e) =>
              setReadTime(Math.max(0, Number(e.target.value) || 0))
            }
            className={inputClass}
          />
        </div>

        <button
          type="button"
          onClick={handleCreate}
          disabled={creating || categories.length === 0}
          className="rounded-full bg-pr_lg px-6 py-2 text-sm font-semibold text-pr_dg disabled:opacity-60"
        >
          {creating ? "Creating…" : "Save & continue to editor →"}
        </button>
      </div>
    </div>
  );
}
