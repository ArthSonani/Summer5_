import Layout from "@/components/layout/Layout";
import { HeroSection, DiscoverSection, CategorySection } from "@/components/home/HomeSections";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DiscoverSection />
      <CategorySection />
      
      {/* Featured Products */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;