import React, { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const ref = useRef(null);

  // Scroll Logic - Only used for text opacity fading now
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div
      ref={ref}
      id="home"
      className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-brand-navy"
    >
      {/* Background with Overlay - Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-navy/60 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Blake-Knoll-homepage-loop-2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between">

        {/* Text Content */}
        <motion.div style={{ opacity }} className="text-center md:text-left text-white max-w-2xl mt-32 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6"
          >
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-bold tracking-wide uppercase text-brand-gold">Trusted by 4,500+ Locals</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-tight mb-6 tracking-tight"
          >
            Protecting Louisiana <br /> Families & Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-brand-gold animate-shimmer bg-[length:200%_100%]">
              Since 1985.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed"
          >
            We handle both personal and commercial lines. Independent agents who shop <span className="text-white font-semibold">100+ carriers</span> to find you the best rate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white hover:text-brand-navy transition-all duration-300 w-full sm:w-auto text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explore Coverage
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Quote Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="mt-12 md:mt-0 w-full max-w-md perspective-1000 hidden md:block"
        >
          <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/40 transform transition-transform hover:scale-[1.02] relative overflow-hidden">
            {/* Glossy sheen effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

            <h3 className="text-2xl font-heading font-bold text-brand-navy mb-2 relative z-10">Get Your Free Quote</h3>
            <p className="text-slate-600 mb-6 text-sm relative z-10">Speak directly with a local agent about your personal or business needs.</p>

            <div className="space-y-4 relative z-10">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full bg-brand-navy hover:bg-brand-navyLight text-white text-center py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Call {PHONE_NUMBER}
              </a>
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-slate-300"></div>
                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase font-bold tracking-wider">Or</span>
                <div className="flex-grow border-t border-slate-300"></div>
              </div>
              <button
                className="block w-full bg-brand-gold hover:bg-brand-goldHover text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-gold/30 transition-all flex items-center justify-center gap-2 group hover:shadow-brand-gold/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Online Request
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block text-white"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;