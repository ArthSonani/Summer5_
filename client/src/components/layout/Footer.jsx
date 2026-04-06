import { Link } from "react-router-dom";
import { Instagram, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#392720] text-footer-foreground">
      {/* Main Footer */}
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Subscribe Section */}
            <div>
            <h1 className="text-6xl mb-5 ">Summer 5</h1>
              <h3 className="font-serif text-xl mb-6">Unlock Exclusive Offers Straight to Your Inbox</h3>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-footer-foreground/30 text-footer-foreground placeholder:text-footer-foreground/50 rounded-none focus-visible:ring-0 focus-visible:border-footer-foreground"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="border border-l-0 border-footer-foreground/30 rounded-none hover:bg-footer-foreground/10"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left mx-20">
              <h3 className="font-serif text-xl mb-6 font-medium">Quick links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/search" className="hover:underline text-sm">
                    Search
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:underline text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:underline text-sm">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy" className="hover:underline text-sm">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="hover:underline text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex justify-end items-start">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-footer-foreground/20 px-6 lg:px-12 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Payment Icons */}
          <div className="flex items-center gap-2">
            <div className="bg-[#003087] text-white px-3 py-1 rounded text-xs font-bold">
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
