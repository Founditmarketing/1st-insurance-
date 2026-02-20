import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import { CLAIM_CONTACTS, PHONE_NUMBER } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ExternalLink, AlertTriangle, FileText, Search, Building2, Home, Car, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const Claims: React.FC = () => {
   const [searchTerm, setSearchTerm] = useState('');

   const filteredContacts = CLAIM_CONTACTS.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const timelineSteps = [
      { title: "File Report", description: "Contact your carrier or our office to get your claim number started.", icon: FileText },
      { title: "Adjuster Assigned", description: "Wait for a call (usually 24-48h) to schedule your inspection.", icon: Phone },
      { title: "Inspection", description: "The damage is assessed in person or virtually via photos.", icon: Search },
      { title: "Resolution", description: "Repairs are authorized or a settlement is issued to you.", icon: CheckCircle2 }
   ];

   const accidentSteps = {
      auto: [
         "Ensure safety and call 911 if there are injuries.",
         "Take photos of all vehicles, plates, and the scene.",
         "Exchange contact and insurance info (don't admit fault).",
         "Get the police report number from the officer."
      ],
      home: [
         "Stop further damage (e.g., tarp a roof, shut off water).",
         "Take 'Before' photos before cleaning or moving items.",
         "Keep all receipts for temporary repairs or living expenses.",
         "Don't throw away damaged items until the adjuster sees them."
      ],
      commercial: [
         "Secure the property and mitigate further risks.",
         "Get witness statements and contact info immediately.",
         "Complete an internal incident report for your records.",
         "Preserve any video footage or relevant documentation."
      ]
   };

   return (
      <div className="pt-20">
         <SEO
            title="File a Claim"
            description="Need to file an insurance claim? Find direct contact numbers and online portals for Progressive, State Farm, GEICO, and more."
            canonical="/claims"
         />

         {/* Hero Section with Functional Search */}
         <Section className="bg-brand-navy relative overflow-hidden text-white text-center pb-32">
            <div className="absolute inset-0 opacity-20">
               <img src="/section image.jpg" alt="Claims Background" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent"></div>

            <div className="max-w-4xl mx-auto relative z-10">
               <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 border border-white/20">
                  <AlertTriangle size={16} className="text-brand-gold" />
                  <span className="text-sm font-bold uppercase tracking-wider text-brand-gold">Claims Support Center</span>
               </div>
               <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-8 text-white">
                  We're Here When It Matters Most.
               </TextReveal>

               <div className="max-w-2xl mx-auto relative group mb-12">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-brand-gold transition-colors" size={24} />
                  <input
                     type="text"
                     placeholder="Who is your insurance carrier? (e.g. Progressive, State Farm)"
                     className="w-full pl-16 pr-6 py-5 rounded-2xl text-brand-navy text-lg focus:outline-none focus:ring-4 focus:ring-brand-gold/30 shadow-2xl transition-all"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
         </Section>

         {/* Dynamic Results Section */}
         <Section className="bg-brand-offWhite -mt-20 relative z-10 pt-32">
            <div className="max-w-6xl mx-auto">
               <AnimatePresence mode="popLayout">
                  {searchTerm && (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                     >
                        {filteredContacts.map((carrier) => (
                           <motion.div
                              key={carrier.id}
                              layout
                              className="bg-white p-6 rounded-2xl shadow-xl border border-brand-gold/20 flex flex-col h-full ring-2 ring-brand-gold/5"
                           >
                              <div className="flex items-center justify-between mb-6">
                                 <img src={carrier.logo} alt={carrier.name} className="h-10 object-contain max-w-[150px]" />
                                 <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                    <ShieldCheck size={20} />
                                 </div>
                              </div>
                              <h3 className="text-xl font-bold text-brand-navy mb-4">{carrier.name}</h3>
                              <div className="space-y-3 mt-auto">
                                 <a
                                    href={`tel:${carrier.phone}`}
                                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand-navy hover:bg-brand-navyLight text-white font-bold rounded-xl transition-all shadow-md"
                                 >
                                    <Phone size={18} />
                                    {carrier.phone}
                                 </a>
                                 <a
                                    href={carrier.onlineLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 text-brand-navy hover:text-brand-gold font-bold transition-all"
                                 >
                                    File Claim Online
                                    <ExternalLink size={16} />
                                 </a>
                              </div>
                           </motion.div>
                        ))}
                        {filteredContacts.length === 0 && (
                           <div className="col-span-full bg-white p-12 rounded-3xl shadow-lg text-center">
                              <p className="text-xl text-slate-500 mb-4">We couldn't find a carrier matching "{searchTerm}".</p>
                              <p className="text-slate-400">Please call our office directly at {PHONE_NUMBER} and we'll find your info for you.</p>
                           </div>
                        )}
                     </motion.div>
                  )}
               </AnimatePresence>

               {/* Guidance: Call Us vs Carrier */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                  <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-brand-gold relative overflow-hidden">
                     <div className="absolute right-[-20px] top-[-20px] text-brand-gold/5 transform rotate-12">
                        <Phone size={150} />
                     </div>
                     <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                        <div className="bg-brand-gold/20 p-2 rounded-lg text-brand-gold"><Phone size={24} /></div>
                        Step 1: The "Call Us" Rule
                     </h3>
                     <p className="text-slate-600 leading-relaxed mb-6">
                        <strong>During business hours (8:30am - 5:00pm), call us FIRST.</strong> We can review your deductible versus the expected damage. If the repair cost is close to your deductible, filing a claim might not be in your best financial interest due to potential rate increases.
                     </p>
                     <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 text-brand-gold font-bold hover:gap-4 transition-all">
                        Call Local Agency {PHONE_NUMBER} <ExternalLink size={16} />
                     </a>
                  </div>

                  <div className="bg-brand-navy p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-brand-gold text-white relative overflow-hidden">
                     <div className="absolute right-[-20px] top-[-20px] text-white/5 transform rotate-12">
                        <Clock size={150} />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="bg-white/10 p-2 rounded-lg text-brand-gold"><Clock size={24} /></div>
                        After Hours?
                     </h3>
                     <p className="text-slate-300 leading-relaxed mb-6">
                        If you have a true emergency at night or over the weekend (like a major pipe burst or a fire), don't wait. Use the search bar above to find your carrier's 24/7 direct claims line and get your claim number immediately.
                     </p>
                     <button
                        onClick={() => {
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                           document.querySelector('input')?.focus();
                        }}
                        className="text-brand-gold font-bold hover:underline"
                     >
                        Search carrier numbers above
                     </button>
                  </div>
               </div>

               {/* Situation Specific Checklists */}
               <div className="mb-20">
                  <h3 className="text-3xl font-heading font-bold text-brand-navy text-center mb-12">What to do right now:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                     {/* Auto */}
                     <div className="bg-[#1a2b4b] p-8 rounded-3xl shadow-lg h-full border-b-4 border-brand-gold">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                           <Car size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-6">Auto Accident</h4>
                        <ul className="space-y-4">
                           {accidentSteps.auto.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                 <span className="text-brand-gold font-bold mt-0.5">•</span>
                                 {step}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Home */}
                     <div className="bg-[#1a2b4b] p-8 rounded-3xl shadow-lg h-full border-b-4 border-brand-gold">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                           <Home size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-6">Property Damage</h4>
                        <ul className="space-y-4">
                           {accidentSteps.home.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                 <span className="text-brand-gold font-bold mt-0.5">•</span>
                                 {step}
                              </li>
                           ))}
                        </ul>
                     </div>

                     {/* Commercial */}
                     <div className="bg-[#1a2b4b] p-8 rounded-3xl shadow-lg h-full border-b-4 border-brand-gold">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-gold">
                           <Building2 size={28} />
                        </div>
                        <h4 className="text-xl font-bold mb-6">Commercial Incident</h4>
                        <ul className="space-y-4">
                           {accidentSteps.commercial.map((step, i) => (
                              <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                                 <span className="text-brand-gold font-bold mt-0.5">•</span>
                                 {step}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               </div>

               {/* Timeline Section */}
               <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-slate-100 mb-20">
                  <div className="text-center mb-16">
                     <h3 className="text-3xl font-heading font-bold text-brand-navy mb-4">What happens next?</h3>
                     <p className="text-slate-500 max-w-2xl mx-auto italic">Understanding the claims journey from start to finish.</p>
                  </div>

                  <div className="relative">
                     {/* Connector Line */}
                     <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-slate-100"></div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {timelineSteps.map((step, i) => {
                           const Icon = step.icon;
                           return (
                              <div key={i} className="relative z-10">
                                 <div className="w-20 h-20 bg-brand-offWhite rounded-3xl flex items-center justify-center mx-auto mb-6 text-brand-navy border-2 border-white shadow-lg ring-1 ring-black/5 hover:scale-110 hover:bg-brand-gold transition-all duration-300 group">
                                    <Icon className="group-hover:text-white transition-colors" size={32} />
                                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-navy text-brand-gold text-xs font-bold rounded-full flex items-center justify-center border-4 border-white">
                                       {i + 1}
                                    </span>
                                 </div>
                                 <h4 className="font-bold text-brand-navy text-lg mb-2">{step.title}</h4>
                                 <p className="text-sm text-slate-500 leading-relaxed px-4">{step.description}</p>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>

               {/* Claims Toolkit */}
               <div className="max-w-4xl mx-auto text-center border-2 border-dashed border-brand-gold/30 rounded-[2rem] p-10 bg-brand-gold/5">
                  <h3 className="text-2xl font-bold text-brand-navy mb-6">The Claims Toolkit</h3>
                  <p className="text-slate-600 mb-8">Have this information ready when you call to make the process smoother:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     {["Policy Number", "Date & Time", "Police Report #", "Photos of Loss"].map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-brand-navy font-bold text-sm">
                           {item}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Section>
      </div>
   );
};

export default Claims;