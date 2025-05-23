import type { Product, ProductCategory } from "../types/product";
import { LocalStorageService } from "./LocalStorageService";

export const fetchProductsByCategory = async (
  category: ProductCategory
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${encodeURIComponent(
        category
      )}?sort=desc`
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

export const fetchFlashSaleProducts = async (): Promise<Product[]> => {
  try {
    const [mensProducts, womensProducts] = await Promise.all([
      fetchProductsByCategory("men's clothing"),
      fetchProductsByCategory("women's clothing"),
    ]);

    LocalStorageService.saveMensClothing(mensProducts);
    LocalStorageService.saveWomensClothing(womensProducts);
    return mensProducts
      .flatMap((mensItem, i) => [mensItem, womensProducts[i]])
      .filter(Boolean);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const fetchMensClothing = async (): Promise<Product[]> => {
  const products = await fetchProductsByCategory("men's clothing");
  LocalStorageService.saveMensClothing(products);
  return products;
};

export const fetchWomensClothing = async (): Promise<Product[]> => {
  const products = await fetchProductsByCategory("women's clothing");
  LocalStorageService.saveWomensClothing(products);
  return products;
};
