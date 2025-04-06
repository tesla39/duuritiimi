
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { HireForm } from '@/components/HireForm';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [hireModalOpen, setHireModalOpen] = React.useState(false);

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-black text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-fade-in">
            {t('heroTitle').split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word === 'asiantuntijuutta' || word === 'digituotteita' || word === 'expertise' || word === 'products' ? (
                  <span className="text-yellow">{word} </span>
                ) : (
                  <span>{word} </span>
                )}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="button-primary">
              {t('contactUs')}
            </a>
            <button
              onClick={() => setHireModalOpen(true)}
              className="px-5 py-2 text-white bg-gradient-to-r from-yellow to-yellow-dark rounded-md transition-all duration-300 hover:opacity-90"
            >
              {t('hireDirectly')}
            </button>
            <a href="#services" className="button-secondary">
              {t('exploreServices')}
            </a>
          </div>
        </div>
      </div>

      <Dialog open={hireModalOpen} onOpenChange={setHireModalOpen}>
        <DialogContent className="sm:max-w-[500px] rounded-lg bg-black text-white border-yellow">
          <DialogTitle className="text-2xl font-bold mb-6 text-yellow">{t('hireDirectly')}</DialogTitle>
          <HireForm onSuccess={() => setHireModalOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
