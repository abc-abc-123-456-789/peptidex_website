"use client";

import * as React from "react";
import { ShoppingCart, CheckCircle, AlertCircle } from "lucide-react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

interface AddToCartButtonProps {
  name: string;
  price: number;
  slug: string;
}

export default function AddToCartButton({ name, price, slug }: AddToCartButtonProps) {
  const [quantity, setQuantity] = React.useState(1);
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");

  function handleAddToCart() {
    try {
      const stored = localStorage.getItem("wc_cart");
      const cart: CartItem[] = stored ? JSON.parse(stored) : [];
      const idx = cart.findIndex((item) => item.slug === slug);
      if (idx > -1) {
        cart[idx].quantity += quantity;
      } else {
        cart.push({ name, price, quantity, slug });
      }
      localStorage.setItem("wc_cart", JSON.stringify(cart));
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-widest text-zinc-500">
          Quantity
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-24 border border-black bg-white px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={status === "success"}
        className="flex items-center gap-2 bg-black text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors disabled:opacity-60"
      >
        {status === "success" ? (
          <><CheckCircle className="w-5 h-5" /> Added to Cart</>
        ) : status === "error" ? (
          <><AlertCircle className="w-5 h-5" /> Error — try again</>
        ) : (
          <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
        )}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600 font-medium">Item added to your cart.</p>
      )}
    </div>
  );
}
