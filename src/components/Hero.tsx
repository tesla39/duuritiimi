
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle 
} from '@/components/ui/dialog';
import { HiringForm } from '@/components/HiringForm';
import { ScrollArea } from '@/components/ui/scroll-area';

type FormType = 'cleaner' | 'assistant' | 'other';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formType, setFormType] = useState<FormType>('cleaner');

  const openForm = (type: FormType) => {
    setFormType(type);
    setFormModalOpen(true);
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-black text-white">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="mb-6">
            {t('heroTitle')}
          </h1>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => openForm('cleaner')}
              className="px-5 py-2 text-black font-bold bg-yellow rounded-md transition-all duration-300 hover:opacity-90 shadow-lg"
            >
              {t('hireDirectly')}
            </button>
            
            <button
              onClick={() => openForm('assistant')}
              className="px-5 py-2 text-black font-bold bg-yellow rounded-md transition-all duration-300 hover:opacity-90 shadow-lg"
            >
              {t('hireAssistant')}
            </button>
            
            <button
              onClick={() => openForm('other')}
              className="px-5 py-2 text-yellow border border-yellow rounded-md transition-all duration-300 hover:bg-yellow hover:text-black"
            >
              {t('exploreServices')}
            </button>
          </div>
        </div>
      </div>

      <Dialog open={formModalOpen} onOpenChange={setFormModalOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] rounded-lg bg-black text-white border-yellow overflow-hidden">
          <DialogTitle className="text-2xl font-bold text-yellow">
            {formType === 'cleaner' ? t('hireDirectly') : 
             formType === 'assistant' ? t('hireAssistant') : 
             t('exploreServices')}
          </DialogTitle>
          <ScrollArea className="h-[calc(90vh-120px)] md:max-h-[60vh] pr-4">
            <div className="pb-2">
              <HiringForm type={formType} onSuccess={() => setFormModalOpen(false)} />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
