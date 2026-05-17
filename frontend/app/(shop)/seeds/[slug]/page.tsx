import { fetchAllProducts } from "@/services/products";
import { seedItems } from "@/lib/seeds";
import SeedDetailContent from "./SeedDetailContent";

type SeedDetailProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const products = await fetchAllProducts();
    const slugs = products
      .map((product) => product.slug)
      .filter((slug): slug is string => Boolean(slug));

    if (slugs.length > 0) {
      return slugs.map((slug) => ({ slug }));
    }
  } catch {}

  return seedItems.map((item) => ({ slug: item.slug }));
}

export default async function SeedDetailPage({ params }: SeedDetailProps) {
  const resolvedParams = await params;
  return <SeedDetailContent slug={resolvedParams.slug} />;
}
