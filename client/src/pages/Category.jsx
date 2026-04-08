import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/context/AuthContext";

const categoryTitles = {
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  "living-room": "Living Room",
  outdoor: "Outdoor",
};

const Category = () => {
  const { category } = useParams();
  const { apiUrl } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const title = categoryTitles[category || ""] || category;

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `${apiUrl}/api/products?category=${category}`
        );
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
  }, [apiUrl, category]);

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif mb-12">{title}</h1>

          {loading ? (
            <p className="text-muted-foreground text-center py-12">
              Loading products...
            </p>
          ) : error ? (
            <p className="text-destructive text-center py-12">{error}</p>
          ) : products.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Category;