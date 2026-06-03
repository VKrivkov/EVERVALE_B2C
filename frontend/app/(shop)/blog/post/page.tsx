"use client";

import { useEffect, useState } from "react";
import BlogDetailContent from "../[slug]/BlogDetailContent";

export default function BlogPostFallbackPage() {
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const path = window.location.pathname.replace(/\/+$/, "");
    const segments = path.split("/").filter(Boolean);
    const idx = segments.lastIndexOf("blog");
    const candidate =
      idx >= 0 && idx < segments.length - 1 ? segments[idx + 1] : null;
    if (candidate && candidate !== "post") setSlug(candidate);
  }, []);

  if (!slug) {
    return (
      <div className="bg-pr_dg text-pr_w">
        <section className="w-full px-4 pt-[120px] pb-20 sm:px-6 md:px-8 lg:px-12 xl:px-[130px]">
          <p className="text-sm text-pr_w/70">Loading…</p>
        </section>
      </div>
    );
  }

  return <BlogDetailContent slug={slug} />;
}
