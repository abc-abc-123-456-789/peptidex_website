"use client"

import React, { useState } from "react";
import { ShoppingCart, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  name: string;
  short_description: string;
  long_description: string;
  price: number;
  slug: string;
}

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

interface ProductClientDetailsProps {
  product: Product;
}

export default function ProductClientDetails({ product }: ProductClientDetailsProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price || 5.00);

  const handleAddToCart = () => {
    try {
      // 1. Read existing cart
      const storedCart = localStorage.getItem("wc_cart");
      const cart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

      // 2. Find existing entry
      const existingItemIndex = cart.findIndex((item) => item.slug === product.slug);

      if (existingItemIndex > -1) {
        // Increment quantity
        cart[existingItemIndex].quantity += quantity;
      } else {
        // Append new
        cart.push({
          name: product.name,
          price: product.price || 5.00,
          quantity: quantity,
          slug: product.slug,
        });
      }

      // 3. Write back to localStorage
      localStorage.setItem("wc_cart", JSON.stringify(cart));

      // 4. Show confirmation
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Cart error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="flex flex-col space-y-6">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          {product.name}
        </h1>
        <p className="text-xl font-medium text-zinc-600">
          {formattedPrice}
        </p>
      </header>

      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-zinc-800">
          {product.short_description}
        </p>
      </div>

      <hr className="border-zinc-200" />

      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">
          Details
        </h2>
        <p className="text-zinc-600 leading-relaxed">
          {product.long_description}
        </p>
      </div>

      <div className="pt-6 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col space-y-1">
            <label 
              htmlFor="quantity" 
              className="text-xs font-bold uppercase tracking-tighter text-zinc-500"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black transition-all"
            />
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={status === "success"}
          className={cn(
            "w-full md:w-auto px-12 py-4 font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2",
            status === "success" 
              ? "bg-zinc-900 text-white cursor-default" 
              : "bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.98]"
          )}
        >
          {status === "success" ? (
            <>
              <CheckCircle className="w-5 h-5" />
              Added to Cart
            </>
          ) : status === "error" ? (
            <>
              <AlertCircle className="w-5 h-5" />
              Error
            </>
          ) : (
            <>
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </button>

        {/* Brief Confirmation Message */}
        {status === "success" && (
          <p className="text-sm font-medium text-green-600 animate-in fade-in slide-in-from-top-1">
            Item added to your bag successfully.
          </p>
        )}
      </div>
    </div>
  );
}