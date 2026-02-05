import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { PHONE_NUMBER, ADDRESS } from '../constants';

const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg flex pb-safe">
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 bg-brand-navy text-white flex flex-col items-center justify-center py-3 active:bg-brand-navyLight transition-colors"
      >
        <Phone size={20} className="mb-1 text-brand-gold" />
        <span className="text-xs font-bold uppercase tracking-wider">Call Now</span>
      </a>
      <a 
        href={`https://maps.google.com/?q=${ADDRESS}`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 bg-white text-brand-navy flex flex-col items-center justify-center py-3 border-l border-gray-100 active:bg-gray-50 transition-colors"
      >
        <MapPin size={20} className="mb-1" />
        <span className="text-xs font-bold uppercase tracking-wider">Directions</span>
      </a>
    </div>
  );
};

export default MobileStickyBar;