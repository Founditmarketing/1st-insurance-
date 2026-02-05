import React from 'react';
import Team from '../components/Team';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-navy relative overflow-hidden text-white min-h-[50vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Marksville Office" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Est. 1985
            </motion.span>
            <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-8">
               More Than Insurance. We Are Your Neighbors.
            </TextReveal>
             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-slate-300 font-light"
            >
               Serving Avoyelles Parish with integrity, transparency, and a handshake you can trust.
            </motion.p>
        </div>
      </Section>

      <Section className="bg-white">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-heading font-bold text-brand-navy mb-6">Our History</h2>
               <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                     1st Insurance was founded on a simple principle: <strong>Local people serve local people better.</strong> 
                  </p>
                  <p>
                     In 1985, we opened our doors on Main Street with a single desk and a commitment to helping Marksville families navigate the confusing world of insurance. Over nearly four decades, we have weathered hurricanes, floods, and economic changes alongside our community.
                  </p>
                  <p>
                     Today, while we utilize modern technology to shop over 100 carriers instantly, our core philosophy remains unchanged. We don't use call centers. When you call 318-253-9202, you speak to someone who knows exactly where you live and what you need.
                  </p>
               </div>
            </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-brand-gold/10 rounded-2xl transform rotate-3"></div>
                <img 
                   src="https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Historic Marksville" 
                   className="rounded-2xl shadow-xl relative z-10 w-full"
                />
             </div>
         </div>
      </Section>

      <Team />
    </div>
  );
};

export default About;