import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Pep Tide High",
  description: "Learn about Pep Tide High, a brand built for the ambitious, the curious, and the relentlessly driven.",
};

/**
 * PEP TIDE HIGH - ABOUT PAGE
 * Design System: Minimal, High-Contrast, Grid-Based
 * Philosophy: Movement, Grit, and Vision
 */

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-black selection:text-white">
      {/* Hero Section - High Contrast Grid */}
      <section className="relative w-full border-b border-black overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[60vh] md:min-h-[80vh]">
          <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-end border-b md:border-b-0 md:border-r border-black">
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
              The Pursuit <br />
              of <span className="text-transparent stroke-black stroke-1" style={{ WebkitTextStroke: '1px black' }}>Possibility</span>
            </h1>
          </div>
          <div className="md:col-span-5 bg-black text-white p-8 md:p-16 flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              Greatness isn&apos;t a destination; it is a mindset forged in the pursuit of what&apos;s next.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Clean Typography Focus */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-black">
        <div className="md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col items-start justify-between">
          <div className="w-16 h-16 relative">
            <Image
              src="/logo.jpg"
              alt="Pep Tide High Logo"
              fill
              className="object-contain grayscale"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-mono uppercase tracking-widest">Est. 2024</p>
            <p className="text-sm font-mono uppercase tracking-widest">Pep Tide High, LLC</p>
          </div>
        </div>

        <div className="md:col-span-8 p-8 md:p-16 bg-zinc-50">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-800 font-light">
              <p>
                At <strong className="font-bold text-black">Pep Tide High</strong>, we believe that greatness isn&apos;t a destination; it is a mindset forged in the pursuit of possibility. Founded on the belief that every individual carries a spark of untapped potential, our brand serves as the uniform for the ambitious, the curious, and the relentlessly driven.
              </p>
              <p>
                We don&apos;t just represent a place; we represent a movement of growth, grit, and vision. Our collection is designed for those who are constantly in motion, transitioning from the classroom of life to the arenas of their future careers.
              </p>
              <p>
                Whether you are dreaming of changing the world or simply mastering your craft, Pep Tide High provides the aesthetic for your journey. We celebrate the transition from <span className=&quot;italic&quot;&gt;&quot;what if&quot;&gt;</span> to <span className=&quot;italic&quot;&gt;&quot;watch me.&quot;&gt;</span>
              </p>
            </div>
            
            <div className="pt-8">
              <Link 
                href="/shop" 
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors"
              >
                Shop the Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid Based */}
      <section className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-black hover:bg-zinc-50 transition-colors">
          <Target className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold uppercase mb-4">Vision</h3>
          <p className="text-zinc-600 leading-relaxed">
            Fueling the courage it takes to make dreams take flight. We provide the aesthetic for your transition.
          </p>
        </div>
        <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-black hover:bg-zinc-50 transition-colors">
          <Zap className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold uppercase mb-4">Grit</h3>
          <p className="text-zinc-600 leading-relaxed">
            Durable essentials like our trucker caps, built to withstand the hustle and the challenges that build character.
          </p>
        </div>
        <div className="p-8 md:p-16 hover:bg-zinc-50 transition-colors">
          <Shield className="w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold uppercase mb-4">Identity</h3>
          <p className="text-zinc-600 leading-relaxed">
            Our signature white tees offer a clean, essential canvas for self-expression and fresh starts.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-8 md:px-16 text-center bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
            Wear your ambition on your sleeve.
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Join the movement. Step into the arena of your future with gear designed for the relentless.
          </p>
          <Link
            href="/products"
            className="inline-block border-2 border-white px-12 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Explore Gear
          </Link>
        </div>
      </section>

      {/* Footer-ish Brand Attribution */}
      <footer className="p-8 md:p-16 border-t border-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400">
            © {new Date().getFullYear()} Pep Tide High, LLC. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8">
          <Link href="/contact" className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/terms" className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="/privacy" className="text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}