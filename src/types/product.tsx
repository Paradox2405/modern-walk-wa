export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type ProductCategory = "men's clothing" | "women's clothing";

export function isProductCategory(
  category: string
): category is ProductCategory {
  return ["men's clothing", "women's clothing"].includes(category);
}
