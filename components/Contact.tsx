import React, { useState } from 'react';
import Section from './ui/Section';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_EMBED } from '../constants';
import { MapPin, Phone, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const form = React.useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          setFormState('success');
        }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again or call us directly.");
          setFormState('idle');
        });
    }
  };

  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* Contact Info & Map */}
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy mb-6">
            Stop by and say hello.
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            We prefer a handshake over an email. Visit our office on Main Street or give us a call to start your quote.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="bg-brand-offWhite p-3 rounded-lg mr-4">
                <MapPin className="text-brand-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Visit Us</h4>
                <p className="text-slate-600">{ADDRESS}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-offWhite p-3 rounded-lg mr-4">
                <Phone className="text-brand-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Call Us</h4>
                <a href={`tel:${PHONE_NUMBER}`} className="text-slate-600 hover:text-brand-gold transition-colors">{PHONE_NUMBER}</a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-brand-offWhite p-3 rounded-lg mr-4">
                <Clock className="text-brand-gold" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy">Office Hours</h4>
                <p className="text-slate-600">Mon - Fri: 8:30am - 5:00pm</p>
                <p className="text-slate-600">Sat - Sun: Closed</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-brand-offWhite p-8 md:p-10 rounded-2xl shadow-inner relative overflow-hidden">

          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-brand-offWhite text-center p-8"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-2">Request Received!</h3>
              <p className="text-slate-600">
                Thank you. One of our agents (likely Mrs. Judy or Blake) will be in touch shortly to discuss your options.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 text-brand-gold font-bold hover:underline"
              >
                Send another request
              </button>
            </motion.div>
          ) : null}

          <h3 className="text-2xl font-bold text-brand-navy mb-2">Request a Quote</h3>
          <p className="text-slate-500 mb-8 text-sm">Fill out the simple form below and a team member will reach out within 24 hours.</p>

          <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-brand-navy mb-2">First Name</label>
                <input
                  required
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-brand-navy mb-2">Last Name</label>
                <input
                  required
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-2">Email Address</label>
              <input
                required
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-2">Phone Number</label>
              <input
                required
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all"
                placeholder="(318) 555-0123"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-brand-navy mb-2">Interested In</label>
              <select
                id="service"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
              >
                <option>Home Insurance</option>
                <option>Auto Insurance</option>
                <option>Commercial Insurance</option>
                <option>Life Insurance</option>
                <option>Other</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={formState === 'loading'}
              className="w-full bg-brand-gold hover:bg-brand-goldHover text-white font-bold text-lg py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {formState === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Sending...
                </>
              ) : (
                'Get My Free Quote'
              )}
            </button>

            <p className="text-xs text-center text-slate-400 mt-4">
              By submitting this form, you agree to be contacted by 1st Insurance. We value your privacy.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;