import { Metadata } from "next";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

/**
 * Metadata for SEO optimization.
 * High-performance eCommerce requires clean, descriptive metadata for crawling.
 */
export const metadata: Metadata = {
  title: "Shop All Products | Pep Tide High, LLC",
  description: "Browse our premium collection of essential apparel and accessories designed for ambition and grit.",
};

/**
 * Products Listing Page
 * 
 * Design Philosophy: 
 * - Minimalist, high-contrast layout to reduce cognitive load.
 * - Mobile-first responsive grid (1 col mobile, 2 col tablet, 3-4 col desktop).
 * - Clean typography and whitespace to emphasize product offerings.
 */
export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Brand Header Section */}
      <header className="border-b border-zinc-100 bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <Image
              src="/logo.png" // Assuming .png based on standard assets, works with other ext if provided
              alt="Pep Tide High, LLC Logo"
              width={60}
              height={60}
              priority
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
              Pep Tide High, LLC
            </h1>
            <p className="text-zinc-500 max-w-md text-sm md:text-base">
              Essential gear for your next chapter. Built for comfort, designed for ambition.
            </p>
          </div>
        </div>
      </header>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-8 border-b border-zinc-100 pb-4">
          <h2 className="text-xl font-semibold text-zinc-900">Our Collection</h2>
          <p className="text-sm text-zinc-500">{products.length} Products</p>
        </div>

        {/* 
            Responsive Grid:
            - 1 column on mobile (default)
            - 2 columns on small tablets (sm)
            - 3 columns on large tablets/small laptops (lg)
            - 4 columns on desktop (xl)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              short_description={product.short_description}
              price={product.price}
              slug={product.slug}
              images={product.images}
            />
          ))}
        </div>

        {/* Empty State - Defensive programming for when inventory is zero */}
        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-zinc-500 text-lg">No products found in our collection at this time.</p>
          </div>
        )}
      </section>

      {/* Footer/Trust Signal Section */}
      <footer className="border-t border-zinc-100 py-12 mt-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs text-zinc-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Pep Tide High, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}