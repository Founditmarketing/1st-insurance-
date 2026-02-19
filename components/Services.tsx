import React from 'react';
import Section from './ui/Section';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './ui/SpotlightCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services: React.FC = () => {
  // Show only the first 6 items for a balanced 3x2 grid on the homepage
  const displayedServices = SERVICES.slice(0, 6);

  return (
    <Section id="services" className="bg-brand-offWhite relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-4"
        >
          Coverage Tailored to Your Life
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-lg"
        >
          Whether you're buying your first home in Avoyelles Parish or insuring your family car, we ensure you have the right protection at the best price.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {displayedServices.map((service) => (
          <motion.div
            variants={itemVariants}
            key={service.id}
          >
            <SpotlightCard className="h-full p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
              {service.image && (
                <>
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80"></div>
                  </div>
                </>
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-14 h-14 ${service.image ? 'bg-white/10' : 'bg-brand-navy/5'} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                  <service.icon size={28} className={`${service.image ? 'text-white' : 'text-brand-navy'} group-hover:text-white transition-colors duration-300`} strokeWidth={1.5} />
                </div>

                <h3 className={`text-xl font-heading font-bold ${service.image ? 'text-white' : 'text-brand-navy'} mb-3 group-hover:text-brand-gold transition-colors`}>
                  {service.title}
                </h3>
                <p className={`${service.image ? 'text-slate-200' : 'text-slate-500'} leading-relaxed mb-6 group-hover:text-white transition-colors`}>
                  {service.description}
                </p>

                <div className="mt-auto">
                  <a href="#contact" className={`inline-flex items-center text-sm font-bold ${service.image ? 'text-white' : 'text-brand-navy'} group-hover:text-brand-gold transition-colors uppercase tracking-wide`}>
                    Get a Quote <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center relative z-10">
        <a href="#/services" className="inline-flex items-center gap-2 font-bold text-brand-navy hover:text-brand-gold transition-colors border-b-2 border-brand-gold pb-1">
          View All Coverage Options <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
};

export default Services;