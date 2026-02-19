import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

const ParallaxCTA: React.FC = () => {
   const containerRef = useRef<HTMLElement>(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

   return (
      <section
         ref={containerRef}
         className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center"
      >
         {/* Parallax Background Image */}
         <div className="absolute inset-0 z-0">
            <motion.div
               style={{ y }}
               className="absolute inset-0 w-full h-[130%]"
            >
               <img
                  src="/me-and-christi-1.png"
                  alt="1st Insurance Team"
                  className="w-full h-full object-cover"
               />
            </motion.div>
         </div>

         {/* Dark Overlay for Text Readability */}
         <div className="absolute inset-0 bg-brand-navy/60 z-10 mix-blend-multiply" />
         <div className="absolute inset-0 bg-black/20 z-10" />

         {/* Content */}
         <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            >
               Don't wait for the storm <br /> to check your coverage.
            </motion.h2>

            <motion.p
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-2xl text-slate-100 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md"
            >
               We review policies for free, even if you aren't our client yet. Ensure you're protected before it matters.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
            >
               <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-3 bg-brand-gold hover:bg-brand-goldHover text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transform hover:-translate-y-1 group"
               >
                  <Phone size={24} className="group-hover:rotate-12 transition-transform" />
                  Speak to an Agent Now
               </a>
            </motion.div>
         </div>
      </section>
   );
};

export default ParallaxCTA;