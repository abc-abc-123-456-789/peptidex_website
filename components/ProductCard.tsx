"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  name: string;
  short_description: string;
  price: number;
  slug: string;
  images: string[];
}

/**
 * ProductCard Component
 * 
 * A high-conversion, minimal product card designed for CPG eCommerce.
 * Features a clean, grid-ready layout with high contrast and clear CTAs.
 * 
 * @param {ProductCardProps} props - The product data required to render the card.
 */
export default function ProductCard({
  name,
  short_description,
  price,
  slug,
  images,
}: ProductCardProps) {
  // Business Logic: Default price to $5.00 if 0 or missing per requirements
  const effectivePrice = price > 0 ? price : 5.00;

  // Formatter for currency to ensure consistent UX
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <Link href={`/products/${slug}`} className="group block h-full transition-transform duration-200 hover:-translate-y-1">
      <Card className="h-full overflow-hidden border-slate-200 transition-colors group-hover:border-slate-900">
        {/* Product Image */}
        <div className="relative aspect-square w-full bg-slate-200 overflow-hidden transition-colors group-hover:bg-slate-300">
          {images && images.length > 0 ? (
            <Image
              src={images[0]}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : null}
        </div>

        <CardContent className="flex flex-1 flex-col p-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold leading-tight text-slate-900">
              {name}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-2">
              {short_description}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 p-4 pt-4">
          <span className="text-lg font-bold text-slate-900">
            {formatPrice(effectivePrice)}
          </span>
          
          <button 
            type="button"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-900 underline-offset-4 transition-all hover:underline"
            aria-label={`View details for ${name}`}
          >
            View
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </CardFooter>
      </Card>
    </Link>
  );
}