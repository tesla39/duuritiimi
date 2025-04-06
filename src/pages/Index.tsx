
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import CtaSection from '@/components/CtaSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <CtaSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
