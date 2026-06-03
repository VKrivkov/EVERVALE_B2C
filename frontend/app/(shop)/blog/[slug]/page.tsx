import { fetchPublicBlogs } from "@/services/blog";
import { blogPosts } from "@/lib/blog";
import BlogDetailContent from "./BlogDetailContent";

type BlogPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const res = await fetchPublicBlogs({ page: 1, limit: 200 });
    const slugs = res.items
      .map((item) => item.slug)
      .filter((slug): slug is string => Boolean(slug));
    if (slugs.length > 0) {
      return slugs.map((slug) => ({ slug }));
    }
  } catch {}
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  return <BlogDetailContent slug={resolvedParams.slug} />;
}
