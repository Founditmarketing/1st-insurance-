import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PHONE_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
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

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen || !isHomePage
        ? 'bg-brand-navy border-b border-white/10 py-3 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-full px-6 md:px-10 lg:px-12">
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
              <div
                key={link.label}
                className="relative group py-2"
                onMouseEnter={() => link.sublinks && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.sublinks ? (
                  <button
                    className={`font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wider flex items-center gap-1 ${isActive(link.href) || activeDropdown === link.label ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors duration-200 text-xs xl:text-sm uppercase tracking-wider relative group ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.sublinks && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-brand-navy border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href}
                              className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-white hover:pl-8 transition-all duration-200"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
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
        <div className="lg:hidden bg-brand-navy absolute top-full left-0 w-full shadow-2xl border-t border-white/10 h-[calc(100vh-80px)] overflow-y-auto animate-fade-in z-40 pb-10">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.sublinks ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === link.label ? null : link.label)}
                      className={`w-full flex justify-center items-center gap-2 px-4 py-3 rounded-xl text-lg font-bold transition-all ${mobileDropdownOpen === link.label ? 'bg-white/10 text-brand-gold' : 'text-white'}`}
                    >
                      {link.label}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${mobileDropdownOpen === link.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-white/5 mx-2 rounded-xl mt-1"
                        >
                          {link.sublinks.map((sublink) => (
                            <Link
                              key={sublink.label}
                              to={sublink.href}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className="block px-6 py-3 text-white text-center hover:text-brand-gold border-b border-white/5 last:border-0"
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-lg font-bold text-center transition-all ${isActive(link.href)
                      ? 'bg-white/10 text-brand-gold'
                      : 'text-white hover:bg-white/5 hover:text-brand-gold'
                      }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="block px-3 py-4 mt-4 mx-4 rounded-xl text-xl font-bold bg-brand-gold text-white text-center shadow-lg shadow-brand-gold/30 active:scale-95 transition-transform"
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