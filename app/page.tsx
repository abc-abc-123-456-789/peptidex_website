import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Where Dreams Take Flight | Pep Tide High, LLC",
  description: "Pep Tide is where ambition meets action. Discover our official gear and start your journey.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 selection:bg-zinc-950 selection:text-white">
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 border-b border-zinc-200">
        <div className="lg:col-span-7 p-8 md:p-16 lg:p-24 flex flex-col justify-center items-start space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Dreams <br />
              Take Flight.
            </h1>
            <p className="max-w-md text-lg text-zinc-600 leading-relaxed">
              Pep Tide is where ambition meets action. From the first bell to graduation night, 
              we transform &ldquo;what if&rdquo; into &ldquo;watch me.&rdquo;
            </p>
          </div>
          <div className="pt-4">
            <Button asChild size="lg" className="rounded-none px-8 py-6 text-lg font-bold uppercase tracking-widest transition-all hover:bg-zinc-950">
              <Link href="/products">
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full bg-zinc-100 flex items-center justify-center p-8 border-l border-zinc-200">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/logo.jpg"
              alt="Pep Tide High School Official Logo"
              fill
              className="object-contain p-12 grayscale hover:grayscale-0 transition-all duration-500"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 border-b border-zinc-950 pb-8">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">Curated Selection</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Essential Gear
            </h2>
          </div>
          <Link 
            href="/products" 
            className="text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-2"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group">
              <Card className="rounded-none border-zinc-200 shadow-none flex flex-col h-full">
                <CardHeader className="p-0">
                  <div className="aspect-square w-full bg-slate-200 border border-zinc-100 relative overflow-hidden group-hover:bg-slate-300 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Package className="h-12 w-12 text-zinc-300" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-black uppercase tracking-tight mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {product.short_description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <span className="text-lg font-bold">
                    ${(product.price > 0 ? product.price : 5).toFixed(2)}
                  </span>
                  <Button variant="outline" className="rounded-none border-zinc-950 hover:bg-zinc-950 hover:text-white transition-colors">
                    View
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Ready to make your mark?
          </h2>
          <p className="text-zinc-400 text-lg">
            Join the thousands of students and alumni carrying the Pep Tide spirit worldwide. 
            Quality gear for a lifetime of ambition.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" variant="secondary" className="rounded-none px-12 py-7 text-lg font-black uppercase">
              <Link href="/products">
                Shop Full Catalog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12 px-6 md:px-12 lg:px-24 text-zinc-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-950 rounded-full" />
            <span className="font-bold text-zinc-950 uppercase tracking-tighter">Pep Tide</span>
          </div>
          <div className="flex gap-8 uppercase text-[10px] font-bold tracking-[0.2em]">
            <Link href="#" className="hover:text-zinc-950 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-zinc-950 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-zinc-950 transition-colors">Shipping</Link>
          </div>
          <p>© {new Date().getFullYear()} Pep Tide High School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}