import { notFound } from "next/navigation";
import { productCards } from "@/data/site";
import { ProductDetailClient } from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return productCards.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productCards.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.title} - Siddhivinayak Foreign Exports`,
    description: product.desc
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productCards.find((item) => item.slug === params.slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
