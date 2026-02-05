import React from 'react';
import { CARRIERS } from '../constants';

const TrustStrip: React.FC = () => {
  // Duplicate carriers to create seamless loop
  const duplicatedCarriers = [...CARRIERS, ...CARRIERS, ...CARRIERS];

  return (
    <div className="bg-white border-b border-gray-100 py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest">
          We shop 100+ Top Rated Carriers For You
        </p>
      </div>

      {/* Fade edges for smooth look */}
      <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      
      {/* Infinite Scroll Container */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
           {duplicatedCarriers.map((carrier, index) => (
             <div key={`${carrier.id}-${index}`} className="flex items-center justify-center h-16 mx-8 md:mx-12 w-32 md:w-40 flex-shrink-0">
               <img 
                 src={carrier.url} 
                 alt={carrier.name} 
                 className="max-h-10 md:max-h-12 w-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <span className="hidden text-xl font-bold text-slate-400">{carrier.name}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;