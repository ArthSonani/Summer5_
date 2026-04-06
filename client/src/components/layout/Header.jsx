import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, User, ShoppingBag } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/context/AuthContext";

const Header = ({ cartCount = 0 }) => {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main Header */}
      <div className="bg-background py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Search Icon */}
          <div className="flex-1">
            <button
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl lg:text-4xl tracking-[0.3em] font-serif font-medium text-center flex-1"
          >
            SUMMER5
          </Link>

          {/* Account & Cart Icons */}
          <div className="flex-1 flex items-center justify-end gap-4">
            {user ? (
              <Link
                to="/account"
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
            ) : (
              <div className="hidden sm:flex items-center gap-3 text-sm">
                <Link to="/login" className="hover:underline">Sign in</Link>
                <Link to="/signup" className="hover:underline">Sign up</Link>
              </div>
            )}
            {!user && (
              <div className="relative sm:hidden">
                <button
                  type="button"
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Open account menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <span className="block h-[2px] w-5 bg-current" />
                  <span className="mt-1 block h-[2px] w-5 bg-current" />
                  <span className="mt-1 block h-[2px] w-5 bg-current" />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-md border bg-background shadow-lg z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm hover:bg-muted"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            )}
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
        <nav className="mt-4 flex gap-6 overflow-x-auto px-2 text-sm sm:justify-center sm:gap-8 sm:overflow-visible">
          <NavLink 
            to="/shop" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
            activeClassName="underline"
          >
            Shop All
          </NavLink>
          <NavLink 
            to="/category/bathroom" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
            activeClassName="underline"
          >
            Bathrooms
          </NavLink>
          <NavLink 
            to="/category/kitchen" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
            activeClassName="underline"
          >
            Kitchen
          </NavLink>
          <NavLink 
            to="/category/living-room" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
            activeClassName="underline"
          >
            Living
          </NavLink>
          <NavLink 
            to="/category/outdoor" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
            activeClassName="underline"
          >
            Outdoor
          </NavLink>
          <NavLink 
            to="/contact" 
            className="hover:underline underline-offset-4 whitespace-nowrap"
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
