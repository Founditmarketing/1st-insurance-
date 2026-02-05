import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { ARTICLES } from '../constants';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';

const Resources: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-offWhite text-center">
         <div className="max-w-4xl mx-auto mb-10">
             <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold text-brand-navy justify-center leading-tight mb-6">
                Insurance Insights
             </TextReveal>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Expert advice on protecting your home, auto, and business in Louisiana.
             </p>
         </div>
      </Section>

      <Section className="bg-white pt-0">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article, index) => (
               <motion.article 
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full"
               >
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video shadow-lg">
                     <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-navy flex items-center gap-1 shadow-sm">
                        <Tag size={12} className="text-brand-gold" />
                        {article.category}
                     </div>
                  </div>

                  <div className="flex flex-col flex-grow">
                     <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                     </div>
                     
                     <h2 className="text-2xl font-heading font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors leading-tight">
                        {article.title}
                     </h2>
                     
                     <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                        {article.excerpt}
                     </p>
                     
                     <div className="flex items-center text-brand-navy font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Read Article <ArrowRight size={16} className="ml-2 text-brand-gold" />
                     </div>
                  </div>
               </motion.article>
            ))}
         </div>
      </Section>
    </div>
  );
};

export default Resources;