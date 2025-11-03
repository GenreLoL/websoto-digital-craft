import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-2xl font-bold">WebSoto</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Building websites that build businesses. Your digital success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-smooth" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-smooth" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-smooth" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-smooth" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-accent transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-accent transition-smooth">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-accent transition-smooth">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Website Design</li>
              <li className="text-sm text-primary-foreground/80">Web Development</li>
              <li className="text-sm text-primary-foreground/80">E-commerce</li>
              <li className="text-sm text-primary-foreground/80">Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail size={18} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm">hello@websoto.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={18} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 text-accent flex-shrink-0" />
                <span className="text-sm">123 Digital Avenue, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} WebSoto. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm hover:text-accent transition-smooth">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm hover:text-accent transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
