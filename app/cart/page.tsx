"use client"

import React, { useEffect, useState } from "react";
import { ShoppingCart, Trash2, Plus, Minus, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem("wc_cart");
    if (storedCart) {
      try {
        const parsed = JSON.parse(storedCart);
        setItems(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error("Failed to parse cart", e);
        setItems([]);
      }
    }
    setIsLoading(false);
  }, []);

  const updateQuantity = (slug: string, delta: number) => {
    const newItems = items.map((item) => {
      if (item.slug === slug) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem("wc_cart", JSON.stringify(newItems));
  };

  const removeItem = (slug: string) => {
    const newItems = items.filter((item) => item.slug !== slug);
    setItems(newItems);
    localStorage.setItem("wc_cart", JSON.stringify(newItems));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handleCheckout = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (response.ok && data.payment_url) {
        window.location.href = data.payment_url;
      } else {
        setError(data.error || "An unexpected error occurred during checkout.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 px-4 text-center">
        <div className="rounded-full bg-muted p-4">
          <ShoppingCart className="h-10 w-10 text-muted-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Your cart is empty</h2>
          <p className="text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        </div>
        <Button variant="outline" className="mt-4">
          Start Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">Shopping Cart</h1>

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8">
          <div className="space-y-6">
            {items.map((item) => (
              <div 
                key={item.slug} 
                className="flex items-start gap-6 border-b border-border pb-6 last:border-0 last:pb-0"
              >
                <div className="h-24 w-24 flex-shrink-0 bg-muted rounded-sm" aria-hidden="true" />
                
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-foreground">
                    <h3 className="text-lg leading-6">{item.name}</h3>
                    <p className="ml-4">${item.price.toFixed(2)}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground italic">SKU: {item.slug}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-input rounded-md">
                      <button
                        onClick={() => updateQuantity(item.slug, -1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.slug, 1)}
                        className="p-2 hover:bg-muted transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.slug)}
                      className="flex items-center gap-1 text-sm font-medium text-destructive hover:underline"
                    >
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <Card className="border-2">
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {error && (
                <div className="mt-6 flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}

              <Button 
                className="mt-6 w-full" 
                size="lg" 
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}