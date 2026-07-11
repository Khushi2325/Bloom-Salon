import { Link } from "wouter";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <span className="font-serif text-3xl font-bold text-primary cursor-pointer">
                Bloom
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Experience luxury beauty like never before. We offer premium hair styling, bridal makeup, skincare, and spa services.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Gallery", "About", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                    <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                      {link}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Hair Styling & Spa</li>
              <li>Bridal & Party Makeup</li>
              <li>Premium Facials</li>
              <li>Nail Art & Extensions</li>
              <li>Waxing & Threading</li>
              <li>Body Spa & Massage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span>Parul University, Waghodia, Gujarat 391760</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-primary shrink-0" />
                <span>07984574789</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 text-primary shrink-0 mt-0.5" />
                <span>
                  Mon–Fri: 9am–8pm<br />
                  Sat: 9am–9pm<br />
                  Sun: 10am–6pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Bloom Salon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
