
import React from 'react';
import { Code, Cpu, Rocket, PenTool, SearchCheck, BadgeCheck } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover-scale group">
      <div className="text-teal mb-4 w-12 h-12 flex items-center justify-center bg-teal bg-opacity-10 rounded-full group-hover:bg-teal group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: "Verkkokaupat",
      description: "Rakennamme tehokkaat ja käyttäjäystävälliset verkkokaupparatkaisut, jotka tukevat liiketoimintaasi.",
      icon: <Code size={24} />
    },
    {
      title: "Verkkosivut",
      description: "Suunnittelemme ja toteutamme tyylikkäät ja käyttäjäystävälliset verkkosivut, jotka vahvistavat yrityksesi brändiä.",
      icon: <PenTool size={24} />
    },
    {
      title: "Digimarkkinointi",
      description: "Rakennamme strategian ja toteutamme tehokkaita markkinointikampanjoita, jotka tavoittavat oikean kohderyhmän.",
      icon: <SearchCheck size={24} />
    },
    {
      title: "Konsultointi",
      description: "Tarjoamme asiantuntijanäkemyksiä ja strategisia neuvoja digitaalisen liiketoimintasi kehittämiseen.",
      icon: <BadgeCheck size={24} />
    },
    {
      title: "Teknologiaratkaisut",
      description: "Kehitämme räätälöityjä ohjelmistoja ja integraatioita, jotka automatisoivat ja tehostavat liiketoimintaprosessejasi.",
      icon: <Cpu size={24} />
    },
    {
      title: "Digitaalinen strategia",
      description: "Autamme luomaan kattavan digitaalisen transformaatiosuunnitelman, joka tukee liiketoimintatavoitteitasi.",
      icon: <Rocket size={24} />
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Palvelumme</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tarjoamme kokonaisvaltaisia digitaalisia ratkaisuja, jotka auttavat yritystäsi kasvamaan ja menestymään.
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
