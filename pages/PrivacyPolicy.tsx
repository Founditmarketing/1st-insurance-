import React from 'react';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for 1st Insurance. Learn how we collect, use, and protect your personal information."
                canonical="/privacy"
            />

            {/* Header Section */}
            <Section className="bg-brand-navy relative overflow-hidden text-white py-20 flex items-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <TextReveal className="text-4xl md:text-5xl font-heading font-extrabold justify-center leading-tight mb-4 text-white">
                        Privacy Policy
                    </TextReveal>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-brand-gold font-bold uppercase tracking-wider text-sm"
                    >
                        Last Updated: August 1, 2025
                    </motion.p>
                </div>
            </Section>

            {/* Content Section */}
            <Section className="bg-white">
                <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
                    <div className="mb-12 text-slate-600 leading-relaxed">
                        <p className="mb-6">
                            At 1st Insurance, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with us online at <a href="https://marksvilleinsurance.com" className="text-brand-gold hover:underline">https://marksvilleinsurance.com</a>, over the phone, by email, or in person. We are committed to transparency and respectful handling of all customer data, especially when it comes to sensitive information and communication preferences.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">1. INFORMATION WE COLLECT</h2>
                        <p className="mb-4">We collect personal information you voluntarily provide, such as:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Mailing address</li>
                            <li>Contact preferences</li>
                        </ul>
                        <p className="mb-6">
                            We may also collect sensitive personal information (such as health-related data or insurance history) with your explicit consent and only when necessary to provide insurance services or process claims. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware that we have inadvertently collected such information, we will promptly delete it. Please contact us at <a href="mailto:info@marksvilleinsurance.com" className="text-brand-gold hover:underline">info@marksvilleinsurance.com</a> if you believe this applies.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">2. HOW WE USE YOUR INFORMATION</h2>
                        <p className="mb-4">Your information is used for the following purposes:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>To provide insurance quotes and services</li>
                            <li>To communicate about your policy or request</li>
                            <li>To send administrative updates</li>
                            <li>To send optional marketing or promotional communications, including SMS (if opted in)</li>
                        </ul>
                        <p className="mb-6">
                            We respect your preferences and only use your mobile phone number for SMS communications if you have explicitly agreed to it via a form that includes a dedicated checkbox or toggle. You can opt out of any communication at any time.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">3. TEXT MESSAGE DISCLOSURE AND CONSENT</h2>
                        <p className="mb-6">
                            Forms that collect your contact information may include a texting disclosure statement. Opting in is optional, and you can submit the form even if you choose not to agree to receive SMS messages.
                        </p>
                        <p className="mb-4">By checking the opt-in box on our form, you agree to receive conversational and/or marketing text messages from 1st Insurance using the contact information provided.</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Message frequency varies (e.g., up to 2 messages per week)</li>
                            <li>Message and data rates may apply</li>
                            <li>Text HELP for help</li>
                            <li>Text STOP to opt out at any time</li>
                            <li>View our Privacy Policy at <a href="https://marksvilleinsurance.com" className="text-brand-gold hover:underline">https://marksvilleinsurance.com</a></li>
                        </ul>
                        <p className="font-bold text-brand-navy">Your mobile phone information and opt-in data will never be shared with third parties or affiliates for marketing or promotional purposes.</p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">4. HOW WE PROTECT YOUR INFORMATION</h2>
                        <p className="mb-4">We implement appropriate technical and organizational measures to protect your information. This includes:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>SSL encryption</li>
                            <li>Firewalls and secure servers</li>
                            <li>Access restrictions for authorized personnel only</li>
                        </ul>
                        <p className="mb-6">
                            We retain your data only as long as necessary to fulfill the services you requested or to meet legal and regulatory obligations.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">5. SHARING YOUR INFORMATION</h2>
                        <p className="mb-4">We do not sell your information. Your data may be shared only when necessary to:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Provide services (e.g., with licensed carriers or legal representatives)</li>
                            <li>Comply with regulatory or legal obligations</li>
                            <li>Complete business transfers (e.g., mergers)</li>
                        </ul>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">6. YOUR RIGHTS & OPTING OUT</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2">
                            <li>Access, correct, or request deletion of your personal data</li>
                            <li>Withdraw consent to receive marketing or text messages</li>
                            <li>File a complaint regarding misuse of your information</li>
                        </ul>
                        <p className="mb-6">
                            To opt out of receiving SMS messages, simply reply STOP to any message. To manage other preferences or make a formal request, contact us at <a href="mailto:info@marksvilleinsurance.com" className="text-brand-gold hover:underline">info@marksvilleinsurance.com</a> or (318) 253-9202.
                        </p>

                        <h2 className="text-2xl font-heading font-bold text-brand-navy mt-12 mb-6">7. CONTACT US</h2>
                        <p className="mb-4">If you have any questions or concerns regarding this Privacy Policy or your personal data, you can reach us at:</p>
                        <div className="bg-brand-offWhite p-6 rounded-xl border border-slate-100">
                            <p className="font-bold text-brand-navy mb-2">1st Insurance</p>
                            <p className="mb-1">121 S Main St</p>
                            <p className="mb-1">Marksville, LA 71351</p>
                            <p className="mb-1">Email: <a href="mailto:info@marksvilleinsurance.com" className="text-brand-gold hover:underline">info@marksvilleinsurance.com</a></p>
                            <p className="mb-1">Phone: <a href="tel:318-253-9202" className="text-brand-gold hover:underline">(318) 253-9202</a></p>
                            <p>Website: <a href="https://marksvilleinsurance.com" className="text-brand-gold hover:underline">https://marksvilleinsurance.com</a></p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default PrivacyPolicy;
