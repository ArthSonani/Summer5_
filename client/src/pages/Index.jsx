import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { HeroSection, DiscoverSection, CategorySection } from "@/components/home/HomeSections";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { apiUrl } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${apiUrl}/api/products`);
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        const normalized = data.map((product) => ({
          ...product,
          id: product.id || product._id,
        }));
        setProducts(normalized);
      } catch (err) {
        setError(err.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  return (
    <Layout>
      <HeroSection />
      <DiscoverSection />
      <CategorySection />
      
      {/* Featured Products */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <p className="text-sm text-muted-foreground">Loading products...</p>
          ) : error ? (
            <p className="text-sm text-destructive">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;