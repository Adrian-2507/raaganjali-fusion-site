import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="/images/Raaganjali Logo.png"
                alt="Raaganjali Logo"
                className="w-12 h-12 object-contain rounded-full"
              />
              <span className="text-2xl font-bold font-playfair">Raaganjali</span>
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Celebrating Indian Music and Culture in Finland. We bring the rich
              tapestry of Indian classical and devotional music to life through
              performance, collaboration, and community.
            </p>
            <Link to="/contact">
              <Button variant="gold">Get in Touch</Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <Link
                to="/about"
                className="block text-white/80 hover:text-gold transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-white/80 hover:text-gold transition-colors"
              >
                Our Services
              </Link>
              <Link
                to="/events"
                className="block text-white/80 hover:text-gold transition-colors"
              >
                Events
              </Link>
              <Link
                to="/contact"
                className="block text-white/80 hover:text-gold transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                className="block text-white/80 hover:text-gold transition-colors"
              >
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">info@raaganjali.fi</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">+358 406 720 695</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                <span className="text-white/80 text-sm">Vantaa, Finland</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/raaganjalsuomi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                />
              </a>
              <a
                href="https://www.facebook.com/share/1BACGW6q2k/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                />
              </a>
              <a
                href="https://youtube.com/@raaganjalisuomi"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/youtube.svg"
                  alt="YouTube"
                  className="w-6 h-6 opacity-80 hover:opacity-100 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold mb-3 text-gold">Performance Services</h5>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Cultural celebrations (Diwali, Independence Day)</li>
                <li>• Wedding ceremonies and receptions</li>
                <li>• Corporate events and community gatherings</li>
                <li>• Festival performances</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-3 text-gold">Equipment & Support</h5>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Professional sound system rental</li>
                <li>• Audio equipment and mixing</li>
                <li>• Technical setup and support</li>
                <li>• Flexible rental duration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Raaganjali. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-gold" />
              <span>in Finland</span>
            </div>
          </div>
          <div className="text-center mt-6 text-white/60 text-sm">
            <p>
              Bringing Indian classical traditions and contemporary fusion
              together • Celebrating culture through music • Building community
              through art
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
