import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, PHONE_NUMBER, ADDRESS } from '../constants';
import { Facebook, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-32 md:pb-12 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none">
         <span className="text-[20rem] font-heading font-black text-white leading-none -mb-16 -mr-10">1st</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-heading font-bold text-3xl text-white tracking-wide block mb-6">
              1st<span className="text-brand-gold">Insurance</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted independent insurance agency in Marksville, LA. Protecting what matters most to you since 1985.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="bg-white/10 p-3 rounded-full text-white hover:bg-brand-gold hover:text-white transition-all duration-300">
                  <Facebook size={20} />
               </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/services" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Home Insurance</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Auto Insurance</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Business Insurance</Link></li>
              <li><Link to="/services" className="hover:text-brand-gold hover:translate-x-1 inline-block transition-all">Life Insurance</Link></li>
            </ul>
          </div>

          {/* Trust Badges Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Why Choose Us</h4>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-brand-gold/10 p-3 rounded-lg group-hover:bg-brand-gold/20 transition-colors">
                    <ShieldCheck className="text-brand-gold" size={28} />
                </div>
                <div>
                  <span className="block font-bold text-white">Independent Agency</span>
                  <span className="text-xs text-slate-400">We work for you, not the carrier.</span>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-bold text-brand-navy text-sm shadow-lg group-hover:scale-105 transition-transform">BBB</div>
                 <div>
                  <span className="block font-bold text-white">A+ Rating</span>
                  <span className="text-xs text-slate-400">Better Business Bureau</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} 1st Insurance - Marksville. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-right">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">{ADDRESS}</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Phone: {PHONE_NUMBER}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;