
import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-teal">
      <div className="container text-center">
        <h2 className="text-white mb-6">Kasvata liiketoimintaasi digitaalisilla ratkaisuilla</h2>
        <p className="text-white text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Oletko valmis viemään yrityksesi seuraavalle tasolle? Ota yhteyttä niin keskustellaan kuinka voimme auttaa.
        </p>
        <a href="#contact" className="inline-block px-8 py-3 bg-white text-teal font-bold rounded-md hover:bg-opacity-90 transition-all">
          Ota yhteyttä
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
