import productsData from "../products.json";

export interface Product {
  name: string;
  short_description: string;
  long_description: string;
  price: number;
  slug: string;
  images: string[];
}

const products: Product[] = productsData as Product[];

export { products };

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}