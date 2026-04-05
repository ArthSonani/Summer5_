import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end justify-center pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif text-center max-w-4xl px-6">
          Home Essentials that Combine Functionality
        </h1>
      </div>
    </section>
  );
};

const DiscoverSection = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
        Crafted for the Discerning
      </h2>
      <Button asChild className="bg-primary text-primary-foreground px-12 py-6 text-base hover:bg-primary/90">
        <Link to="/shop">Discover</Link>
      </Button>
    </section>
  );
};

const CategorySection = () => {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop" 
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-12">
            <span className="text-sm tracking-widest text-muted-foreground mb-4 block">
              HOME ESSENTIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Living Room
            </h2>
            <p className="text-muted-foreground mb-8">
              Transform Your Living Room with Our High-Quality Decor Products.
            </p>
            <Button variant="outline" asChild className="px-8 py-5 bg-transparent hover:bg-black/50 ">
              <Link to="/category/living-room">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const KitchenSection = () => {
  return (
    <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left on desktop */}
          <div className="lg:pr-12 order-2 lg:order-1">
            <span className="text-sm tracking-widest text-muted-foreground mb-4 block">
              HOME ESSENTIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Kitchen
            </h2>
            <p className="text-muted-foreground mb-8">
              Elevate Your Kitchen with Our Premium Essentials.
            </p>
            <Button variant="outline" asChild className="px-8 py-5">
              <Link to="/category/kitchen">Explore Kitchen</Link>
            </Button>
          </div>

          {/* Image - Right on desktop */}
          <div className="aspect-[4/3] overflow-hidden order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop" 
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection, DiscoverSection, CategorySection, KitchenSection };
