import React, { useState } from 'react';
import Section from '../components/ui/Section';
import FAQ from '../components/FAQ';
import TextReveal from '../components/ui/TextReveal';
import SpotlightCard from '../components/ui/SpotlightCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Home, Car, Phone, ArrowRight, Building2, User } from 'lucide-react';
import { PHONE_NUMBER, SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'personal' | 'commercial'>('personal');

  const filteredServices = SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="pt-20">
       <Section className="bg-brand-offWhite text-center pb-12">
          <div className="max-w-4xl mx-auto">
             <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold text-brand-navy justify-center leading-tight mb-6">
                Comprehensive Protection
             </TextReveal>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                We don't believe in "one size fits all." We build a wall of protection around your family and business using the best policies from over 100 carriers.
             </p>

             {/* Tab Switcher - Mobile Optimized */}
             <div className="inline-flex flex-col sm:flex-row bg-white p-1.5 rounded-2xl sm:rounded-full shadow-md border border-gray-100 w-full sm:w-auto">
                <button 
                  onClick={() => setActiveTab('personal')}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full font-bold transition-all duration-300 w-full sm:w-auto ${activeTab === 'personal' ? 'bg-brand-navy text-white shadow-md' : 'text-slate-500 hover:text-brand-navy'}`}
                >
                  <User size={18} />
                  For Families
                </button>
                <button 
                  onClick={() => setActiveTab('commercial')}
                  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl sm:rounded-full font-bold transition-all duration-300 w-full sm:w-auto ${activeTab === 'commercial' ? 'bg-brand-navy text-white shadow-md' : 'text-slate-500 hover:text-brand-navy'}`}
                >
                  <Building2 size={18} />
                  For Business
                </button>
             </div>
          </div>
       </Section>

       {/* Services Grid with Tab Animation */}
       <Section className="bg-brand-offWhite pt-0 relative z-10 min-h-[500px]">
          <AnimatePresence mode="wait">
             <motion.div 
               key={activeTab}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
             >
                {filteredServices.map((service) => (
                   <motion.div layout key={service.id}>
                      <SpotlightCard className="h-full p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                         <div className="relative z-10">
                            <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
                               <service.icon size={28} className="text-brand-navy group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="text-xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-goldHover transition-colors">
                               {service.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-6 group-hover:text-slate-600">
                               {service.description}
                            </p>
                            
                            <a href="#contact" className="inline-flex items-center text-sm font-bold text-brand-navy group-hover:text-brand-gold transition-colors uppercase tracking-wide">
                               Get a Quote <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                            </a>
                         </div>
                      </SpotlightCard>
                   </motion.div>
                ))}
             </motion.div>
          </AnimatePresence>
       </Section>

       {/* Simple Process Section */}
       <Section className="bg-white">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-heading font-bold text-brand-navy">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
                { icon: Phone, title: "1. Discovery", desc: "We chat about your assets, your risks, and your budget to understand exactly what you need." },
                { icon: Shield, title: "2. Shopping", desc: "We use our agency software to compare rates across 100+ carriers like Progressive and Travelers." },
                { icon: Home, title: "3. Protection", desc: "We present you with the best options. You choose the winner, and we handle all the paperwork." }
             ].map((step, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.2 }}
                   className="p-8 rounded-2xl bg-brand-offWhite border border-gray-100"
                >
                   <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                      <step.icon />
                   </div>
                   <h3 className="text-xl font-bold text-brand-navy mb-4">{step.title}</h3>
                   <p className="text-slate-600">{step.desc}</p>
                </motion.div>
             ))}
          </div>
       </Section>

       <FAQ />
       
       <Section className="bg-brand-navy text-center py-24">
          <h2 className="text-3xl md:text-4xl text-white font-heading font-bold mb-8">Ready to review your coverage?</h2>
          <a href={`tel:${PHONE_NUMBER}`} className="inline-block bg-brand-gold hover:bg-brand-goldHover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-brand-gold/50 transition-all transform hover:-translate-y-1">
             Call {PHONE_NUMBER}
          </a>
       </Section>
    </div>
  );
};

export default ServicesPage;