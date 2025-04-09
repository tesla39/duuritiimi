
import React from 'react';
import { Code, Cpu, Rocket, PenTool, SearchCheck, BadgeCheck } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-black p-6 rounded-lg shadow-sm border border-gray-800 hover-scale group">
      <div className="text-yellow mb-4 w-12 h-12 flex items-center justify-center bg-yellow bg-opacity-10 rounded-full group-hover:bg-yellow group-hover:text-black transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('Homecare'),
      description: t("We connect compassionate professionals with families and individuals who need assistance with daily living, personal care, and companionship. Our candidates are experienced, reliable, and dedicated to enhancing the quality of life."),
      icon: <Code size={24} />
    },
    {
      title: t('Helper'),
      description: t("Our helpers provide essential support in various roles, from cleaning and errands to basic maintenance and general assistance — ideal for households, offices, or anyone needing a reliable helping hand."),
      icon: <PenTool size={24} />
    },
    {
      title: t('Event planning'),
      description: t("From corporate events to private gatherings, we offer skilled staff who assist with planning, coordination, and on-site support to ensure events run smoothly and professionally."),
      icon: <SearchCheck size={24} />
    },
    {
      title: t('Customer service'),
      description: t("We supply friendly and well-trained customer service representatives who excel in communication, problem-solving, and delivering positive customer experiences across industries."),
      icon: <BadgeCheck size={24} />
    },
    {
      title: t('Assistant support'),
      description: t("Whether for administrative, executive, or remote assistance, we provide organized and tech-savvy assistants ready to support your business operations and boost productivity."),
      icon: <Cpu size={24} />
    },
    {
      title: t('Other'),
      description: t("Can't find the role you're looking for? We also match unique talent for specialized or unconventional jobs. Let us know your needs — we're flexible and ready to help."),
      icon: <Rocket size={24} />
    }    
  ];

  return (
    <section id="services" className="section bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">{t('servicesTitle')}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
