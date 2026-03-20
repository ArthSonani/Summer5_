import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product && product.status !== "soldout") {
      addToCart(product, quantity);
      toast({ title: `${product.name} added to cart` });
    }
  };

  if (!product) {
    return (
      <Layout>
        <div className="px-6 lg:px-12 py-12 text-center">
          <h1 className="text-2xl">Product not found</h1>
        </div>
      </Layout>
    );
  }

  const images = product.images || [product.image];

  const formatPrice = (price) => {
    return `$${price.toFixed(2)} USD`;
  };

  return (
    <Layout>
      <div className="px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Product Images */}
            <div>
              <div className="aspect-square overflow-hidden bg-card mb-4">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden bg-card border-2 ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="text-sm tracking-widest text-muted-foreground mb-2 block">
                SUMMER5
              </span>

              <h1 className="text-3xl md:text-4xl font-serif mb-6">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-4">
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-lg">{formatPrice(product.price)}</span>

                {product.status === "sale" && (
                  <span className="bg-sale text-sale-foreground px-3 py-1 text-xs">
                    Sale
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-6">
                <span className="underline">Shipping</span> calculated at
                checkout.
              </p>

              {/* Color */}
              {product.color && (
                <div className="mb-6">
                  <span className="text-sm block mb-2">Color</span>
                  <div className="flex gap-2">
                    {product.colors?.map((color) => (
                      <Button
                        key={color}
                        variant={color === product.color ? "default" : "outline"}
                        className="px-6"
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <span className="text-sm block mb-2">
                  Quantity {quantity > 0 && `(${quantity} in cart)`}
                </span>

                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-muted transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="px-6 py-3 min-w-[60px] text-center">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-muted transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="space-y-3 mb-8">
                <Button
                  variant="outline"
                  className="w-full py-6 text-base"
                  disabled={product.status === "soldout"}
                  onClick={handleAddToCart}
                >
                  {product.status === "soldout" ? "Sold out" : "Add to cart"}
                </Button>

                <Button className="w-full py-6 text-base bg-[#ffc439] hover:bg-[#f0b72f] text-black">
                  Pay with
                  <span className="font-bold text-[#003087] ml-1">PayPal</span>
                </Button>

                <button className="w-full text-sm underline text-center block">
                  More payment options
                </button>
              </div>

              {/* Description */}
              {product.description && (
                <div className="border-t border-border pt-8">
                  <h2 className="text-2xl font-serif mb-4">
                    Tired of messy sinks and inefficient kitchen setups?
                  </h2>

                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;