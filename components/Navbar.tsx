import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check active state
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-white tracking-wide group">
              1st<span className="text-brand-gold group-hover:text-white transition-colors">Insurance</span>
            </Link>
          </div>

          {/* Desktop Nav - Reduced space-x to fit more links */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wider relative group py-2 ${
                  isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                  isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
             <a 
              href={`tel:${PHONE_NUMBER}`}
              className="relative overflow-hidden flex items-center space-x-2 bg-brand-gold hover:bg-brand-goldHover text-white px-5 py-2.5 rounded-full font-bold transition-all duration-300 shadow-lg shadow-brand-gold/20 transform hover:scale-105 group"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              
              <Phone size={18} className="relative z-20" />
              <span className="relative z-20 hidden xl:inline">{PHONE_NUMBER}</span>
              <span className="relative z-20 inline xl:hidden">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button - Visible on MD screens now due to extra links */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold focus:outline-none transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy/98 backdrop-blur-xl absolute top-full left-0 w-full shadow-2xl border-t border-white/10 h-[calc(100vh-80px)] overflow-y-auto animate-fade-in z-40 pb-20">
          <div className="px-4 pt-8 pb-3 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-4 rounded-xl text-lg font-bold text-center transition-all ${
                  isActive(link.href) 
                    ? 'bg-white/10 text-brand-gold' 
                    : 'text-white hover:bg-white/5 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
             <a
                href={`tel:${PHONE_NUMBER}`}
                className="block px-3 py-5 mt-8 mx-4 rounded-xl text-xl font-bold bg-brand-gold text-white text-center shadow-lg shadow-brand-gold/30 active:scale-95 transition-transform"
              >
                Call Us Now
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;