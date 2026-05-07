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
            {/* Social icons removed as requested */}
          </div>
        </div>
      </div>
    </footer>
  );
}