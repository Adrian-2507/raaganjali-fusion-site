import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Music } from "lucide-react";
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
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Music className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient-primary font-playfair">
              Raaganjali
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive("/") 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive("/about") 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isActive("/services") 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              to="/events"
              className={`font-medium transition-colors ${
                isActive("/events") 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact") 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden sm:inline-flex">
              <Button variant="hero">
                Book Now
              </Button>
            </Link>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left font-medium transition-colors ${
                  isActive("/") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left font-medium transition-colors ${
                  isActive("/about") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left font-medium transition-colors ${
                  isActive("/services") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Services
              </Link>
              <Link
                to="/events"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left font-medium transition-colors ${
                  isActive("/events") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Events
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left font-medium transition-colors ${
                  isActive("/contact") 
                    ? "text-primary" 
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" className="w-full mt-4">
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