import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShopAll = () => {
  const [sortBy, setSortBy] = useState("alphabetically-asc");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "alphabetically-asc":
        return a.name.localeCompare(b.name);
      case "alphabetically-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-serif mb-12">Products</h1>

          {/* Filters and Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            {/* Filters */}
            <div className="flex items-center gap-4">
              <span className="text-sm">Filter:</span>
              <button className="flex items-center gap-1 text-sm hover:underline">
                Availability
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-sm hover:underline">
                Price
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm">Sort by:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-0 focus:ring-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alphabetically-asc">Alphabetically, A-Z</SelectItem>
                  <SelectItem value="alphabetically-desc">Alphabetically, Z-A</SelectItem>
                  <SelectItem value="price-asc">Price, low to high</SelectItem>
                  <SelectItem value="price-desc">Price, high to low</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-muted-foreground">
                {products.length} products
              </span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopAll;