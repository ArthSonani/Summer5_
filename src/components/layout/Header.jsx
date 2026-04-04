import { Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Header = ({ cartCount = 0 }) => {
  return (
    <header className="w-full">
      {/* Announcement Bar */}
      <div className="bg-announcement text-announcement-foreground py-3 text-center text-sm">
        <Link to="/shop" className="hover:underline inline-flex items-center gap-1">
          Enjoy Free Shipping Sitewide
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Main Header */}
      <div className="bg-background py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Search Icon */}
            <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>

          {/* Logo */}
          <Link to="/" className="text-3xl lg:text-4xl tracking-[0.3em] font-serif font-medium">
            SUMMER5
          </Link>

          {/* Account & Cart Icons */}
          <div className="flex items-center gap-4">
            <Link to="/signup" className="p-2 hover:opacity-70 transition-opacity" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:opacity-70 transition-opacity relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center gap-8 mt-4 text-sm">
          <NavLink 
            to="/shop" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Shop All
          </NavLink>
          <NavLink 
            to="/category/bathtubs" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Bathtubs
          </NavLink>
          <NavLink 
            to="/category/kitchen" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Kitchen
          </NavLink>
          <NavLink 
            to="/category/living-room" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Living
          </NavLink>
          <NavLink 
            to="/category/outdoor" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Outdoor
          </NavLink>
          <NavLink 
            to="/contact" 
            className="hover:underline underline-offset-4"
            activeClassName="underline"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
