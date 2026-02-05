import React, { useState } from 'react';
import Section from './ui/Section';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={`text-lg font-heading font-bold transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-navy group-hover:text-brand-gold'}`}>
          {question}
        </span>
        <span className={`ml-4 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all ${isOpen ? 'border-brand-gold bg-brand-gold text-white' : 'border-gray-200 text-gray-400 group-hover:border-brand-gold group-hover:text-brand-gold'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <Section id="faq" light={true}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy">
            Insurance Simplified
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;