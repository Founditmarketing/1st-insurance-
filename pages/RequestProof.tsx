import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Shield, Send, CheckCircle2 } from 'lucide-react';

const RequestProof: React.FC = () => {
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
                        Thank you for your request. Our team will process your Proof of Insurance and send it to the email provided shortly.
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
                title="Request Proof of Insurance"
                description="Easily request your proof of insurance online. Fill out our simple form and we'll process your request quickly."
                canonical="/request-proof"
            />

            {/* Header */}
            <Section className="bg-brand-navy relative overflow-hidden text-white pt-24 pb-16">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-gold/30"
                    >
                        <Shield size={16} />
                        Fast & Secure Requests
                    </motion.div>
                    <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
                        Request Proof of Insurance
                    </TextReveal>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Need to provide proof of coverage for a new loan or registration? Fill out the details below and we'll handle the rest.
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
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Insured Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Full Name as it appears on policy"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Insured Phone */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Phone Number (Optional)</label>
                                    <input
                                        type="tel"
                                        placeholder="(555) 000-0000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Insured Email */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Collateral Description */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Collateral Description</label>
                                    <textarea
                                        required
                                        rows={4}
                                        placeholder="Example: 2024 Ford F-150, VIN #..."
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none resize-none"
                                    />
                                </div>
                                {/* Collateral Location */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Collateral Location</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="City, State"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Financial Institution */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Financial Institution</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Bank or Lender Name"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all outline-none"
                                    />
                                </div>
                                {/* Specific Wording */}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Any specific wording and/or requirements</label>
                                    <textarea
                                        rows={3}
                                        placeholder="Enter any additional requirements here..."
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
                                        By checking this box, I agree to receive conversational and/or marketing text messages from 1st Insurance using the contact information provided. Message frequency may vary. Message and data rates may apply. Text HELP for help. Text STOP to opt out at any time.
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
                                        Submit Request
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

export default RequestProof;
