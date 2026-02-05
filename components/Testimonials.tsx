import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <div id="testimonials" className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
        
        {/* Decorative Circle */}
        <div className="absolute -left-20 top-20 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-white">What Marksville is Saying</h2>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative min-h-[300px]">
                <div className="absolute -top-6 left-8 bg-brand-gold rounded-full p-3 shadow-lg z-20">
                    <Quote className="text-white" size={24} />
                </div>

                <div className="overflow-hidden relative h-full">
                  <AnimatePresence mode='wait' custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="flex flex-col md:flex-row items-center gap-8 h-full"
                    >
                        <div className="flex-shrink-0">
                            <img 
                                src={current.avatar} 
                                alt={current.author} 
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-brand-offWhite shadow-md object-cover"
                            />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <p className="text-xl md:text-2xl text-brand-navy font-medium italic mb-6 leading-relaxed">
                                "{current.text}"
                            </p>
                            <div>
                                <h4 className="font-bold text-brand-navy text-lg">{current.author}</h4>
                                <span className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block"></span>
                                  {current.location}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex justify-center md:justify-end gap-3 mt-8 md:absolute md:bottom-12 md:right-12 z-20">
                    <button 
                        onClick={prev}
                        className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-navy hover:bg-slate-50 hover:border-brand-navy transition-all active:scale-95"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                         onClick={next}
                        className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-navy hover:bg-slate-50 hover:border-brand-navy transition-all active:scale-95"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
            
             <div className="mt-8 flex justify-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                          setDirection(idx > currentIndex ? 1 : -1);
                          setCurrentIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-brand-navyLight/30 w-2 hover:bg-brand-navyLight'
                        }`}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Testimonials;