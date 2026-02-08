import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { CLAIM_CONTACTS, PHONE_NUMBER } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ExternalLink, AlertTriangle, FileText, Search, Building2, Home } from 'lucide-react';
import SEO from '../components/SEO';

const Claims: React.FC = () => {
   const [searchTerm, setSearchTerm] = useState('');

   const filteredContacts = CLAIM_CONTACTS.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className="pt-20">
         <SEO
            title="File a Claim"
            description="Need to file an insurance claim? Find direct contact numbers and online portals for Progressive, Travelers, Liberty Mutual, and more."
            canonical="/claims"
         />
         <Section className="bg-brand-navy text-white text-center pb-32">
            <div className="max-w-4xl mx-auto">
               <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                  <AlertTriangle size={16} className="text-brand-gold" />
                  <span className="text-sm font-bold uppercase tracking-wider text-brand-gold">Claims Center</span>
               </div>
               <TextReveal className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold justify-center leading-tight mb-6">
                  Supporting Louisiana Families & Businesses
               </TextReveal>
               <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
                  We protect both your personal life and your commercial livelihood. Whether you need to file a claim for your home, auto, or business, we are here to guide you through the process.
               </p>

               {/* Search Bar */}
               <div className="max-w-md mx-auto relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-brand-gold transition-colors" size={20} />
                  <input
                     type="text"
                     placeholder="Find your insurance carrier..."
                     className="w-full pl-12 pr-4 py-4 rounded-full text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-gold/30 shadow-lg transition-all"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
         </Section>

         <Section className="bg-brand-offWhite -mt-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Agency Help Card - Always visible */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-brand-gold mb-8 flex flex-col md:flex-row items-center justify-between gap-6 ring-1 ring-black/5"
               >
                  <div>
                     <h3 className="text-2xl font-bold text-brand-navy mb-2 flex items-center gap-2">
                        <span className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold"><Phone size={24} /></span>
                        Call Us First (Optional)
                     </h3>
                     <p className="text-slate-600 max-w-2xl leading-relaxed">
                        During business hours, we recommend calling our office before filing. Whether it is a <strong>personal auto accident</strong> or a <strong>commercial liability issue</strong>, we can review your policy limits and help you decide the best next steps.
                     </p>
                  </div>
                  <a
                     href={`tel:${PHONE_NUMBER}`}
                     className="flex-shrink-0 bg-brand-navy hover:bg-brand-navyLight text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                     <Phone size={20} />
                     Call Agency: {PHONE_NUMBER}
                  </a>
               </motion.div>

               {/* Carrier Cards */}
               <AnimatePresence>
                  {filteredContacts.map((carrier, index) => (
                     <motion.div
                        layout
                        key={carrier.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                     >
                        <div className="flex items-center justify-between mb-6">
                           <img src={carrier.logo} alt={carrier.name} className="h-8 object-contain max-w-[140px]" />
                           <div className="w-10 h-10 rounded-full bg-brand-offWhite flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                              <FileText size={20} className="text-slate-400 group-hover:text-brand-gold" />
                           </div>
                        </div>

                        <h3 className="text-lg font-bold text-brand-navy mb-auto">{carrier.name}</h3>

                        <div className="space-y-3 mt-6">
                           <a
                              href={`tel:${carrier.phone}`}
                              className="flex items-center justify-center gap-2 w-full py-3 bg-brand-offWhite hover:bg-brand-navy hover:text-white text-brand-navy font-bold rounded-lg transition-colors"
                           >
                              <Phone size={18} />
                              {carrier.phone}
                           </a>
                           <a
                              href={carrier.onlineLink}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 text-slate-600 hover:text-brand-gold hover:border-brand-gold font-medium rounded-lg transition-all"
                           >
                              File Online
                              <ExternalLink size={16} />
                           </a>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>

               {filteredContacts.length === 0 && (
                  <div className="col-span-full text-center py-12 text-slate-500">
                     <p>No carrier found matching "{searchTerm}". Please call us for assistance.</p>
                  </div>
               )}
            </div>
         </Section>

         {/* Emergency Checklist Section */}
         <Section className="bg-white pt-0">
            <div className="max-w-4xl mx-auto">
               <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-navy font-heading mb-2">Immediate Steps After an Incident</h3>
                  <p className="text-slate-500">Applicable for both personal and commercial accidents.</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                     { title: "Ensure Safety", text: "Move to a safe location. If this is a workplace incident or auto accident, check for injuries and call 911 immediately." },
                     { title: "Document Everything", text: "Take photos of damage, the scene, and equipment. For businesses, secure incident reports. Do not admit fault at the scene." },
                     { title: "Exchange Information", text: "Get names and contact info of all parties. If commercial, get witness statements." },
                     { title: "Call The Police", text: "A police or incident report is often required for filing a claim, especially if there are injuries or significant property damage." }
                  ].map((step, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-4 p-6 border border-gray-100 rounded-xl hover:bg-brand-offWhite transition-colors hover:shadow-sm"
                     >
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold flex-shrink-0 text-lg">
                           {i + 1}
                        </div>
                        <div>
                           <h4 className="font-bold text-brand-navy text-lg mb-1">{step.title}</h4>
                           <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </div>
         </Section>
      </div>
   );
};

export default Claims;