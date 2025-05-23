import { useEffect, useState } from "react";
import CategoryCard from "../components/ui/CategoryCard";
import ProductCard from "../components/ui/ProductCard";
import type { Product } from "../types/product";
import { fetchFlashSaleProducts } from "../services/FakeStoreService";

export default function Home() {
  const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const allProducts = await fetchFlashSaleProducts();
        setFlashSaleProducts(allProducts);
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

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="w-lvw mx-auto px-8 md:px-6 lg:px-16 my-12">
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-12">Flash Sale</h2>
        <div className="relative">
          <div className="flex overflow-x-auto gap-8 scrollbar-hide pb-6">
            {flashSaleProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-[300px]">
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
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-12">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CategoryCard
            text="Men's Clothing"
            backgroundColor="bg-mens"
            path="/mens-clothing"
          />
          <CategoryCard
            text="Women's Clothing"
            backgroundColor="bg-womens"
            path="/womens-clothing"
          />
        </div>
      </section>
    </div>
  );
}
