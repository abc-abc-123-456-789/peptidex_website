import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Pep Tide High, LLC`,
    description: product.short_description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const price = product.price > 0 ? product.price : 5;

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Product image placeholder */}
          <div className="aspect-square w-full bg-slate-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm uppercase tracking-widest">Product Image</span>
          </div>

          {/* Product details + cart interaction */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight uppercase">{product.name}</h1>
              <p className="text-2xl font-semibold">${price.toFixed(2)}</p>
              <p className="text-lg text-zinc-600 leading-relaxed">{product.short_description}</p>
            </div>

            <hr className="border-zinc-200" />

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">Details</h2>
              <p className="text-zinc-700 leading-relaxed">{product.long_description}</p>
            </div>

            <AddToCartButton name={product.name} price={price} slug={product.slug} />
          </div>
        </div>
      </div>
    </main>
  );
}
