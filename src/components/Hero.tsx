
import React from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-fade-in">
            Digitaalista <span className="text-teal">asiantuntijuutta</span> ja <span className="text-teal">digituotteita</span> yrityksellesi
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Autamme yrityksiä kasvamaan ja kehittymään digitaalisilla ratkaisuilla
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="button-primary">Ota yhteyttä</a>
            <a href="#services" className="button-secondary">Tutustu palveluihimme</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
