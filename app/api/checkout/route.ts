// app/api/checkout/route.ts
// Keeps WooCommerce credentials server-side.
import { NextRequest, NextResponse } from "next/server";
import { createWooCommerceOrder, CartItem } from "@/lib/woocommerce";

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await req.json();
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }
    const order = await createWooCommerceOrder(items);
    return NextResponse.json({ payment_url: order.payment_url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
