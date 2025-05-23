import { useEffect, useState } from "react";
import ProductCard from "../components/ui/ProductCard";
import type { Product } from "../types/product";
import { LocalStorageService } from "../services/LocalStorageService";
import { fetchWomensClothing } from "../services/FakeStoreService";

export default function WomensClothing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const savedProducts = LocalStorageService.getWomensClothing();

        if (savedProducts && savedProducts.length > 0) {
          setProducts(savedProducts);
          setLoading(false);
          return;
        }
        const womensProducts = await fetchWomensClothing();
        setProducts(womensProducts);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load products"
        );
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading)
    return <div className="text-center py-20">Loading products...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Women's Clothing</h1>

      <section className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.image}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
