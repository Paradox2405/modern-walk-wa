import type { Product, ProductCategory } from "../types/product";
import { LocalStorageService } from "./LocalStorageService";

export const fetchProductsByCategory = async (
  category: ProductCategory
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(
        category
      )}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchAllClothingProducts = async (): Promise<Product[]> => {
  try {
    const [mensProducts, womensProducts] = await Promise.all([
      fetchProductsByCategory("men's clothing"),
      fetchProductsByCategory("women's clothing"),
    ]);
    const allProducts = [...mensProducts, ...womensProducts];
    LocalStorageService.saveMensClothing(mensProducts);
    LocalStorageService.saveWomensClothing(womensProducts);
    return allProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
