import { apiFetch } from "@/lib/apiClient";

type ApiValidationErrorPayload = {
  message?: string;
  error?: string | boolean;
  details?: {
    fieldErrors?: Record<string, string[]>;
  };
};

function buildErrorMessage(
  payload: ApiValidationErrorPayload,
  fallback: string,
) {
  const base =
    typeof payload?.message === "string"
      ? payload.message
      : typeof payload?.error === "string"
        ? payload.error
        : fallback;
  const fieldErrors = payload?.details?.fieldErrors;
  if (!fieldErrors || typeof fieldErrors !== "object") return base;
  const details = Object.entries(fieldErrors)
    .flatMap(([field, messages]) =>
      (messages ?? []).map((message) => `${field}: ${message}`),
    )
    .join("; ");
  return details ? `${base} (${details})` : base;
}

export type AdminBlogCategory = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  isActive: boolean;
  isArchived: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type BlogSeoMetadata = {
  title: string;
  description: string;
  keywords: string[];
  robots: string;
  ogTitle: string;
  ogDescription: string;
};

export const EMPTY_BLOG_SEO: BlogSeoMetadata = {
  title: "",
  description: "",
  keywords: [],
  robots: "index,follow",
  ogTitle: "",
  ogDescription: "",
};

export type BlogTextBlock = { type: "text"; body: string };
export type BlogImageBlock = {
  type: "image";
  imageId: string;
  image?: { url: string; alt?: string | null };
};
export type BlogTextImageBlock = {
  type: "text_image";
  imagePosition: "left" | "right";
  body: string;
  imageId: string;
  image?: { url: string; alt?: string | null };
};
export type BlogContentBlock =
  | BlogTextBlock
  | BlogImageBlock
  | BlogTextImageBlock;

export type AdminBlogImage = {
  id: string;
  blogId: string;
  url: string | null;
  alt?: string | null;
  s3Key?: string | null;
  resolvedUrl: string;
};

export type AdminBlog = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  readTime?: number;
  isActive: boolean;
  isArchived: boolean;
  content: BlogContentBlock[];
  seoMetadata: BlogSeoMetadata;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  mainImageId?: string | null;
  mainImage?: { id?: string; url: string; alt?: string | null } | null;
  category?: AdminBlogCategory;
  categoryId?: string;
  images?: AdminBlogImage[];
};

export type AdminBlogsResponse = {
  page: number;
  limit: number;
  total: number;
  items: AdminBlog[];
};

export async function fetchAdminBlogCategories() {
  const response = await apiFetch("/admin/blog-categories");
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to load blog categories"));
  }
  return (await response.json()) as AdminBlogCategory[];
}

export async function createAdminBlogCategory(data: {
  name: string;
  slug: string;
  description?: string;
  isActive?: boolean;
}) {
  const response = await apiFetch("/admin/blog-categories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to create category"));
  }
  return (await response.json()) as AdminBlogCategory;
}

export async function updateAdminBlogCategory(
  categoryId: string,
  data: Partial<{
    name: string;
    slug: string;
    description: string;
    isActive: boolean;
    isArchived: boolean;
  }>,
) {
  const response = await apiFetch(`/admin/blog-categories/${categoryId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to update category"));
  }
  return (await response.json()) as AdminBlogCategory;
}

export async function fetchAdminBlogs(params?: {
  page?: number;
  limit?: number;
  q?: string;
  isActive?: boolean;
}) {
  const search = new URLSearchParams();
  if (params?.page) search.set("page", String(params.page));
  if (params?.limit) search.set("limit", String(params.limit));
  if (params?.q) search.set("q", params.q);
  if (params?.isActive !== undefined) search.set("isActive", String(params.isActive));
  const url = `/admin/blogs${search.toString() ? `?${search.toString()}` : ""}`;
  const response = await apiFetch(url);
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to load blogs"));
  }
  return (await response.json()) as AdminBlogsResponse;
}

export async function fetchAdminBlog(blogId: string) {
  const response = await apiFetch(`/admin/blogs/${blogId}`);
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Blog not found"));
  }
  return (await response.json()) as AdminBlog;
}

export async function createAdminBlog(data: {
  categoryId: string;
  title: string;
  slug: string;
  excerpt?: string;
  readTime?: number;
}) {
  const response = await apiFetch("/admin/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to create blog"));
  }
  return (await response.json()) as AdminBlog;
}

export async function updateAdminBlog(
  blogId: string,
  data: Record<string, unknown>,
) {
  const response = await apiFetch(`/admin/blogs/${blogId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to update blog"));
  }
  return (await response.json()) as AdminBlog;
}

export async function deleteAdminBlog(blogId: string) {
  const response = await apiFetch(`/admin/blogs/${blogId}`, { method: "DELETE" });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to delete blog"));
  }
  return response.json().catch(() => ({}));
}

export async function fetchAdminBlogImages(blogId: string) {
  const response = await apiFetch(`/admin/blogs/${blogId}/images`);
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to load images"));
  }
  return (await response.json()) as AdminBlogImage[];
}

export async function uploadAdminBlogImage(
  blogId: string,
  file: File,
  alt?: string,
) {
  const formData = new FormData();
  formData.append("image", file);
  if (alt != null) formData.append("alt", alt);
  const response = await apiFetch(`/admin/blogs/${blogId}/images`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to upload image"));
  }
  return (await response.json()) as AdminBlogImage;
}

export async function updateAdminBlogImage(
  blogId: string,
  imageId: string,
  data: { alt?: string | null },
) {
  const response = await apiFetch(`/admin/blogs/${blogId}/images/${imageId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to update image"));
  }
  return (await response.json()) as AdminBlogImage;
}

export async function deleteAdminBlogImage(blogId: string, imageId: string) {
  const response = await apiFetch(`/admin/blogs/${blogId}/images/${imageId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as ApiValidationErrorPayload;
    throw new Error(buildErrorMessage(err, "Failed to delete image"));
  }
}
