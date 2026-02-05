import React from 'react';
import Section from './ui/Section';
import { Layers, ShieldCheck, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './ui/TiltCard';
import TextReveal from './ui/TextReveal';

const features = [
  {
    icon: Layers,
    title: "Unlimited Choices",
    description: "Captive agents (like State Farm) only have one price. We shop 100+ carriers including Progressive and Travelers to find the absolute best rate for you."
  },
  {
    icon: ShieldCheck,
    title: "Your Advocate",
    description: "We work for you, not the insurance company. If you have a claim, we are on your side of the table fighting to get you paid fairly and quickly."
  },
  {
    icon: MapPinned,
    title: "Local Expertise",
    description: "National call centers don't understand Louisiana flood zones or hurricane deductibles. We do, because we live here too."
  }
];

const WhyUs: React.FC = () => {
  return (
    <Section className="relative overflow-visible perspective-1000">
       <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          The Independent Advantage
        </motion.span>
        
        <div className="flex justify-center mb-6">
           <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold text-brand-navy leading-tight justify-center">
              Why Choose 1st Insurance?
           </TextReveal>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-lg md:text-xl font-light"
        >
           The difference between a policy that looks good on paper and one that actually protects you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10 px-4">
        {features.map((feature, index) => (
          <TiltCard key={index} className="group">
             <div className="bg-white rounded-3xl p-8 h-full shadow-xl shadow-brand-navy/5 border border-gray-100 group-hover:border-brand-gold/30 transition-colors duration-500 relative overflow-hidden">
                {/* 3D Floating Content */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                   <div className="w-16 h-16 bg-brand-offWhite rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:bg-brand-gold group-hover:text-white transition-colors duration-500">
                      <feature.icon size={32} className="text-brand-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                   </div>
                   
                   <h3 className="text-2xl font-heading font-bold text-brand-navy mb-4">{feature.title}</h3>
                   <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                      {feature.description}
                   </p>
                </div>
                
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};

export default WhyUs;