import { useEffect, useState } from "react";
import CategoryCard from "../components/ui/CategoryCard";
import ProductCard from "../components/ui/ProductCard";
import type { Product } from "../types/product";
import { fetchAllClothingProducts } from "../services/FakeStoreService";

export default function Home() {
  const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const allProducts = await fetchAllClothingProducts();
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-32">
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Flash Sale</h2>
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 -mx-2 scrollbar-hide">
            {flashSaleProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-2 w-1/4 min-w-[300px]"
              >
                <ProductCard
                  title={product.title}
                  description={product.description}
                  price={`$${product.price}`}
                  imageUrl={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <CategoryCard
          text="Mens Clothing"
          backgroundColor="bg-mens"
          path="/mens-clothing"
        />
        <CategoryCard
          text="Womens Clothing"
          backgroundColor="bg-womens"
          path="womens-clothing"
        />
      </section>
    </div>
  );
}
