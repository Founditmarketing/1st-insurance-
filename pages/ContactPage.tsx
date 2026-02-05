import React from 'react';
import Contact from '../components/Contact';
import Section from '../components/ui/Section';
import TextReveal from '../components/ui/TextReveal';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Section className="bg-brand-offWhite text-center pb-0">
          <div className="max-w-4xl mx-auto mb-10">
             <TextReveal className="text-4xl md:text-6xl font-heading font-extrabold text-brand-navy justify-center leading-tight mb-6">
                Let's Start a Conversation
             </TextReveal>
             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Have questions about your policy? Need a quote? Just want to say hello? We're here for you.
             </p>
          </div>
      </Section>
      <Contact />
    </div>
  );
};

export default ContactPage;