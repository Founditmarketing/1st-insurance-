import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, light = true }) => {
  return (
    <motion.section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${light ? 'bg-brand-offWhite' : 'bg-white'} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;