import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useInView from "@/hooks/use-in-view";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[420px] md:h-[80vh] md:min-h-[520px] lg:min-h-[600px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center object-fill"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1628592102751-ba83b0314276?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fG1vZGVybiUyMGludGVyaW9yfGVufDB8fDB8fHwwfit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end justify-center pb-10 sm:pb-12 md:pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif text-center max-w-4xl px-6">
          Home Essentials that Combine Functionality
        </h1>
      </div>
    </section>
  );
};

const DiscoverSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out delay-300 ${
          isInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 font-medium">
          Crafted for the Discerning
        </h2>
        <Button asChild className="bg-[#392720] px-8 sm:px-10 md:px-12 py-5 sm:py-6 transition-transform duration-100 hover:scale-105 rounded-xl shadow-xl shadow-gray-900/50">
          <Link to="/shop">Discover</Link>
        </Button>
      </div>
    </section>
  );
};

const CategorySection = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12 bg-[#392720]">

      <div className="max-w-7xl mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Image */}
          <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3Dfit=crop"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-12 text-center lg:text-left">
            <span className="text-xs sm:text-sm tracking-widest text-[#b3aeaa] mb-3 sm:mb-4 block font-medium">
              HOME ESSENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-white font-medium">
              Living Room
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-[#b3aeaa] font-medium">
              Transform Your Living Room with Our High-Quality Decor Products.
            </p>
            <Button variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent hover:bg-white/50 text-white">
              <Link to="/category/living-room">Explore</Link>
            </Button>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Content */}
          <div className="lg:pl-12 text-center lg:text-left">
            <span className="text-xs sm:text-sm tracking-widest text-[#b3aeaa] mb-3 sm:mb-4 block font-medium">
              HOME ESSENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-white font-medium">
              Bathroom
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-[#b3aeaa] font-medium">
              Immerse Yourself in Luxury with our Premium Bathroom Collection.
            </p>
            <Button variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent hover:bg-white/50 text-white">
              <Link to="/category/bathroom">Explore</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmF0aHJvb218ZW58MHx8MHx8fDA%3Dfit=crop"
              alt="Bathroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Image */}
          <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1632583824020-937ae9564495?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtpdGNoZW58ZW58MHx8MHx8fDA%3Dfit=crop"
              alt="Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="lg:pl-12 text-center lg:text-left">
            <span className="text-xs sm:text-sm tracking-widest text-[#b3aeaa] mb-3 sm:mb-4 block font-medium">
              HOME ESSENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-white font-medium">
              Kitchen
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-[#b3aeaa] font-medium">
              Unleash your inner chef with Elegant Cookware and Upscale Kitchen Gadgets.
            </p>
            <Button variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent hover:bg-white/50 text-white">
              <Link to="/category/kitchen">Explore</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Content */}
          <div className="lg:pl-12 text-center lg:text-left">
            <span className="text-xs sm:text-sm tracking-widest text-[#b3aeaa] mb-3 sm:mb-4 block font-medium">
              HOME ESSENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 sm:mb-6 text-white font-medium">
              Outdoor
            </h2>
            <p className="text-sm sm:text-base mb-6 sm:mb-8 text-[#b3aeaa] font-medium">
              Transform Your Outdoor with Our High-Quality Decor Products.
            </p>
            <Button variant="outline" asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-5 bg-transparent hover:bg-white/50 text-white">
              <Link to="/category/outdoor">Explore</Link>
            </Button>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] sm:aspect-video overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1602860739945-9a61573cd62d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0aW98ZW58MHx8MHx8fDA%3Dfit=crop"
              alt="Bathroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { HeroSection, DiscoverSection, CategorySection };