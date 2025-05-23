import type { Product } from "../types/product";

const STORAGE_KEYS = {
  MEN: "mens-clothing",
  WOMEN: "womens-clothing",
} as const;

export class LocalStorageService {
  static saveMensClothing(items: Product[]): void {
    this.saveToStorage(STORAGE_KEYS.MEN, items);
  }

  static getMensClothing(): Product[] | null {
    return this.getFromStorage(STORAGE_KEYS.MEN);
  }

  static saveWomensClothing(items: Product[]): void {
    this.saveToStorage(STORAGE_KEYS.WOMEN, items);
  }

  static getWomensClothing(): Product[] | null {
    return this.getFromStorage(STORAGE_KEYS.WOMEN);
  }

  static clearClothingData(): void {
    localStorage.removeItem(STORAGE_KEYS.MEN);
    localStorage.removeItem(STORAGE_KEYS.WOMEN);
  }

  private static saveToStorage(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`Error saving to localStorage (key: ${key}):`, error);
    }
  }

  private static getFromStorage(key: string): Product[] | null {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error reading from localStorage (key: ${key}):`, error);
    }
    return null;
  }
}
