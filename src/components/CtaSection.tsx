
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const CtaSection: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-yellow">
      <div className="container text-center">
        <h2 className="text-black mb-6">{t('ctaTitle')}</h2>
        <p className="text-black text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          {t('ctaSubtitle')}
        </p>
        <a 
          href="#contact" 
          className="inline-block px-8 py-3 bg-black text-yellow font-bold rounded-md hover:bg-opacity-90 transition-all"
        >
          {t('contactUs')}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
