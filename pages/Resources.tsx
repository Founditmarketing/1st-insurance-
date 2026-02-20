import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { ARTICLES } from '../constants';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Resources: React.FC = () => {
   return (
      <div className="pt-20">
         <SEO
            title="Insurance Resources"
            description="Expert insights and articles on insurance topics relevant to Louisiana residents and business owners."
            canonical="/resources"
         />
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
                  <Link
                     key={article.id}
                     to={`/resources/${article.slug}`}
                     className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100"
                  >
                     <div className="relative overflow-hidden aspect-video">
                        <img
                           src={article.image}
                           alt={article.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-navy flex items-center gap-1.5 shadow-sm border border-slate-100">
                           <Tag size={10} className="text-brand-gold" />
                           {article.category}
                        </div>
                     </div>

                     <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-[10px] text-slate-400 mb-4 font-bold uppercase tracking-widest">
                           <span>{article.date}</span>
                           <span className="w-1 h-1 rounded-full bg-brand-gold"></span>
                           <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                        </div>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">
                           {article.title}
                        </h2>

                        <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-lg">
                           {article.excerpt}
                        </p>

                        <div className="flex items-center text-brand-navy font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                           Read Article <ArrowRight size={16} className="ml-2 text-brand-gold" />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>
         </Section>
      </div>
   );
};

export default Resources;