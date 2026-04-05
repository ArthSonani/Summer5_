import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/data/products";

const categoryTitles = {
  bathtubs: "Bathtubs",
  kitchen: "Kitchen",
  "living-room": "Living Room",
  outdoor: "Outdoor",
};

const Category = () => {
  const { category } = useParams();
  const products = getProductsByCategory(category || "");
  const title = categoryTitles[category || ""] || category;

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif mb-12">{title}</h1>

          {products.length === 0 ? (
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