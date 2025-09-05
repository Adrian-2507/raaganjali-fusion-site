import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/Raaganjali Logo.png"
              alt="Raaganjali Logo"
              className="w-10 h-10 rounded-full object-contain"
            />
            <span className="text-xl font-bold text-gold font-playfair">
              Raaganjali
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/events", label: "Events" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`font-medium transition-colors ${
                  isActive(to)
                    ? "text-gold border-b-2 border-gold pb-1"
                    : "text-white/70 hover:text-gold"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden sm:inline-flex">
              <Button variant="gold">Book Now</Button>
            </Link>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/events", label: "Events" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-left font-medium transition-colors ${
                    isActive(to)
                      ? "text-gold border-b border-gold pb-1"
                      : "text-white/70 hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="gold" className="w-full mt-4">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
