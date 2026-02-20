import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FileText, Send, CheckCircle2 } from 'lucide-react';

const RequestCOI: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate submission
        setTimeout(() => setFormState('success'), 1500);
    };

    if (formState === 'success') {
        return (
            <div className="pt-20 min-h-screen bg-brand-navy flex items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-2xl"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="text-green-600" size={40} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Request Sent!</h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for your request. Our team will process your Certificate of Insurance and send it out within 24 business hours.
                    </p>
                    <button
                        onClick={() => setFormState('idle')}
                        className="bg-brand-navy text-white px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors"
                    >
                        Back to Form
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <SEO
                title="Request Certificate of Insurance"
                description="Professional and quick Certificate of Insurance (COI) requests. Provide your details and we'll issue your certificate promptly."
                canonical="/request-coi"
            />

            {/* Header */}
            <Section className="bg-brand-navy relative overflow-hidden text-white pt-24 pb-16">
                <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-gold/30"
                    >
                        <FileText size={16} />
                        Commercial & Subcontractor COIs
                    </motion.div>
                    <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold justify-center leading-tight mb-6">
                        Request Certificate of Insurance
                    </TextReveal>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Ready to start a new contract? Provide the certificate holder information below and we'll get your COI issued quickly.
                    </p>
                </div>
            </Section>

            {/* Form Section */}
            <Section className="bg-brand-offWhite pb-32">
                <div className="max-w-4xl mx-auto -mt-10 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Insured Name */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Insured Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Your legal business or individual name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Holder Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Certificate Holders Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Entity requesting the certificate"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Holder Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Certificate Holders Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Holder Address */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Certificate Holders Address</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full mailing address of the holder"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Holder Email */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Certificate Holders Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="Where should we send the certificate?"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Specific Wording */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Any specific wording and/or requirements</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Example: Loss Payee, Additional Insured details, project numbers, etc."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none resize-none"
                                    />
                                </div>
                            </div>

                            {/* SMS Disclosure */}
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        className="mt-1 w-5 h-5 rounded border-slate-300 text-brand-gold focus:ring-brand-gold"
                                    />
                                    <span className="text-sm text-slate-500 leading-relaxed">
                                        By checking this box, I agree to receive conversational and/or marketing text messages from 1st Insurance using the contact information provided. Message frequency may vary. Message and data rates may apply. Text HELP for help. Text STOP to opt out at any time. View our <a href="/#/privacy" className="text-brand-gold hover:underline">Privacy Policy</a> and <a href="/#/terms" className="text-brand-gold hover:underline">Terms & Conditions</a>.
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="w-full bg-brand-navy hover:bg-brand-gold text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-xl group disabled:opacity-70"
                            >
                                {formState === 'submitting' ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Submit COI Request
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
};

export default RequestCOI;
