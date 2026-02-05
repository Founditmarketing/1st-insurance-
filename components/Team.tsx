import React from 'react';
import Section from './ui/Section';
import { TEAM, PHONE_NUMBER } from '../constants';
import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <Section id="team" light={false} className="overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6 md:gap-8">
        <div className="max-w-2xl">
          <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-3 block"
          >
             Our Agency
          </motion.span>
          <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy leading-none mb-4">
            Meet Your Neighbors
          </TextReveal>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 mt-4 text-lg md:text-xl font-light"
          >
            We live here, shop here, and go to church here. When you call, you speak to a familiar voice, not a call center.
          </motion.p>
        </div>
        <motion.div 
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="hidden md:block"
        >
            <a href="#contact" className="group inline-flex items-center text-brand-navy font-bold text-lg hover:text-brand-gold transition-colors">
              Join our family of clients 
              <ArrowUpRight className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEAM.map((member, index) => (
          <motion.div 
            key={member.id} 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
            className="group relative h-[380px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Layer */}
            <div className="absolute inset-0">
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
               />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            
            {/* Content Layer */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-white font-heading mb-1">{member.name}</h3>
                 <p className="text-brand-gold font-medium text-sm uppercase tracking-wide mb-4">{member.role}</p>
                 
                 {/* Hover Reveal Content - Note: On mobile tap mimics hover */}
                 <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {member.quote && (
                      <p className="text-slate-300 text-sm italic mb-4 border-l-2 border-brand-gold pl-3">
                        "{member.quote}"
                      </p>
                    )}
                    
                    <div className="flex gap-3 pt-2">
                       <a href={`tel:${PHONE_NUMBER}`} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-brand-gold transition-colors" title="Call">
                          <Phone size={16} />
                       </a>
                       <a href="#contact" className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-brand-gold transition-colors" title="Email">
                          <Mail size={16} />
                       </a>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Team;