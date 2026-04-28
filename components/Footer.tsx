import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Footer Component
 * 
 * Design Pattern: Minimal, high-contrast, grid-based.
 * Optimized for CPG brands requiring high trust signals and easy navigation.
 */

const FOOTER_LINKS = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'New Arrivals', href: '/new' },
    { name: 'Best Sellers', href: '/best-sellers' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping Policy', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'FAQs', href: '/faq' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const CONTACT_INFO = {
  email: "test@test.com",
  phone: "+1 366 299 9999",
  address: "123 main st ny nt 20001",
  company_name: "Pep Tide High, LLC"
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-white text-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.svg" 
                alt={`${CONTACT_INFO.company_name} Logo`} 
                width={140} 
                height={40} 
                priority
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-600">
              Premium quality products delivered straight to your door. Experience the standard of excellence with {CONTACT_INFO.company_name}.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-950">
                Shop
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.shop.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-950">
                Support
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-950">
                Legal
              </h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-950">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-zinc-600">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-zinc-950" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0 text-zinc-950" />
                {CONTACT_INFO.email}
              </a>
              <a 
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0 text-zinc-950" />
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} {CONTACT_INFO.company_name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            {/* Social Placeholders (Using Lucide safe icons as instructed) */}
            <button aria-label="Twitter" className="text-zinc-400 hover:text-zinc-950 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </button>
            <button aria-label="Instagram" className="text-zinc-400 hover:text-zinc-950 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}