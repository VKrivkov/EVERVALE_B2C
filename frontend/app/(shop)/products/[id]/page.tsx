import SeedDetailPage from "../../seeds/[slug]/page";
import { fetchAllProducts } from "@/services/products";
import { seedItems } from "@/lib/seeds";

type ProductDetailProps = {
  params: { id: string } | Promise<{ id: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  try {
    const products = await fetchAllProducts();
    const slugs = products
      .map((product) => product.slug)
      .filter((slug): slug is string => Boolean(slug));

    if (slugs.length > 0) {
      return slugs.map((slug) => ({ id: slug }));
    }
  } catch {}

  return seedItems.map((item) => ({ id: item.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const resolved = await params;
  return <SeedDetailPage params={Promise.resolve({ slug: resolved.id })} />;
}
