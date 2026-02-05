import React from 'react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import WhyUs from '../components/WhyUs';
import ParallaxCTA from '../components/ParallaxCTA';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyUs />
      <Services />
      <ParallaxCTA />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;