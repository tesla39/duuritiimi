
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
      title: t('serviceWebshops'),
      description: t('descWebshops'),
      icon: <Code size={24} />
    },
    {
      title: t('serviceWebsites'),
      description: t('descWebsites'),
      icon: <PenTool size={24} />
    },
    {
      title: t('serviceDigitalMarketing'),
      description: t('descDigitalMarketing'),
      icon: <SearchCheck size={24} />
    },
    {
      title: t('serviceConsulting'),
      description: t('descConsulting'),
      icon: <BadgeCheck size={24} />
    },
    {
      title: t('serviceTechSolutions'),
      description: t('descTechSolutions'),
      icon: <Cpu size={24} />
    },
    {
      title: t('serviceDigitalStrategy'),
      description: t('descDigitalStrategy'),
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
