// lib/woocommerce.ts
// Server-side only. Never import this in client components.
const WC_BASE = process.env.NEXT_PUBLIC_WC_BASE_URL!;
const WC_KEY = process.env.WC_CONSUMER_KEY!;
const WC_SECRET = process.env.WC_CONSUMER_SECRET!;

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  slug: string;
}

export interface WooOrder {
  id: number;
  payment_url: string;
  status: string;
}

export async function createWooCommerceOrder(
  items: CartItem[]
): Promise<WooOrder> {
  const payload = {
    payment_method: "bacs",
    payment_method_title: "Online Payment",
    set_paid: false,
    line_items: items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price.toFixed(2),
    })),
  };

  const url = new URL(`${WC_BASE}/wp-json/wc/v3/orders`);
  url.searchParams.set("consumer_key", WC_KEY);
  url.searchParams.set("consumer_secret", WC_SECRET);

  const res = await fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`WooCommerce order creation failed: ${error}`);
  }

  return res.json() as Promise<WooOrder>;
}
