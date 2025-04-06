
import { useState, createContext, useContext, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface Translations {
  [key: string]: {
    fi: string;
    en: string;
  };
}

const translations: Translations = {
  services: {
    fi: 'Palvelut',
    en: 'Services',
  },
  team: {
    fi: 'Tiimi',
    en: 'Team',
  },
  contact: {
    fi: 'Yhteystiedot',
    en: 'Contact',
  },
  contactUs: {
    fi: 'Ota yhteyttä',
    en: 'Contact Us',
  },
  heroTitle: {
    fi: 'Digitaalista asiantuntijuutta ja digituotteita yrityksellesi',
    en: 'Digital expertise and digital products for your business',
  },
  heroSubtitle: {
    fi: 'Autamme yrityksiä kasvamaan ja kehittymään digitaalisilla ratkaisuilla',
    en: 'We help businesses grow and develop with digital solutions',
  },
  exploreServices: {
    fi: 'Tutustu palveluihimme',
    en: 'Explore Our Services',
  },
  ctaTitle: {
    fi: 'Kasvata liiketoimintaasi digitaalisilla ratkaisuilla',
    en: 'Grow your business with digital solutions',
  },
  ctaSubtitle: {
    fi: 'Oletko valmis viemään yrityksesi seuraavalle tasolle? Ota yhteyttä niin keskustellaan kuinka voimme auttaa.',
    en: 'Are you ready to take your business to the next level? Contact us to discuss how we can help.',
  },
  hireDirectly: {
    fi: 'Palkkaa meiltä suoraan',
    en: 'Hire from us directly',
  },
  companyName: {
    fi: 'Yrityksen nimi',
    en: 'Company Name',
  },
  workRole: {
    fi: 'Työnkuva',
    en: 'Work Role',
  },
  timePeriod: {
    fi: 'Ajanjakso',
    en: 'Time Period',
  },
  salary: {
    fi: 'Palkka',
    en: 'Salary',
  },
  numberOfWorkers: {
    fi: 'Työntekijöiden määrä',
    en: 'Number of Workers',
  },
  sendRequest: {
    fi: 'Lähetä pyyntö',
    en: 'Send Request',
  },
  thankYou: {
    fi: 'Kiitos kiinnostuksestasi! Otamme sinuun pian yhteyttä.',
    en: 'Thanks for your interest! We\'ll be in touch shortly.',
  },
  // Added translations for Services section
  servicesTitle: {
    fi: 'Palvelumme',
    en: 'Our Services',
  },
  servicesSubtitle: {
    fi: 'Tarjoamme kokonaisvaltaisia digitaalisia ratkaisuja, jotka auttavat yritystäsi kasvamaan ja menestymään.',
    en: 'We offer comprehensive digital solutions that help your business grow and succeed.',
  },
  // Service titles
  serviceWebshops: {
    fi: 'Verkkokaupat',
    en: 'Online Stores',
  },
  serviceWebsites: {
    fi: 'Verkkosivut',
    en: 'Websites',
  },
  serviceDigitalMarketing: {
    fi: 'Digimarkkinointi',
    en: 'Digital Marketing',
  },
  serviceConsulting: {
    fi: 'Konsultointi',
    en: 'Consulting',
  },
  serviceTechSolutions: {
    fi: 'Teknologiaratkaisut',
    en: 'Technology Solutions',
  },
  serviceDigitalStrategy: {
    fi: 'Digitaalinen strategia',
    en: 'Digital Strategy',
  },
  // Service descriptions
  descWebshops: {
    fi: 'Rakennamme tehokkaat ja käyttäjäystävälliset verkkokaupparatkaisut, jotka tukevat liiketoimintaasi.',
    en: 'We build efficient and user-friendly e-commerce solutions that support your business.',
  },
  descWebsites: {
    fi: 'Suunnittelemme ja toteutamme tyylikkäät ja käyttäjäystävälliset verkkosivut, jotka vahvistavat yrityksesi brändiä.',
    en: 'We design and implement stylish and user-friendly websites that strengthen your company\'s brand.',
  },
  descDigitalMarketing: {
    fi: 'Rakennamme strategian ja toteutamme tehokkaita markkinointikampanjoita, jotka tavoittavat oikean kohderyhmän.',
    en: 'We build strategies and implement effective marketing campaigns that reach the right target audience.',
  },
  descConsulting: {
    fi: 'Tarjoamme asiantuntijanäkemyksiä ja strategisia neuvoja digitaalisen liiketoimintasi kehittämiseen.',
    en: 'We offer expert insights and strategic advice for developing your digital business.',
  },
  descTechSolutions: {
    fi: 'Kehitämme räätälöityjä ohjelmistoja ja integraatioita, jotka automatisoivat ja tehostavat liiketoimintaprosessejasi.',
    en: 'We develop customized software and integrations that automate and streamline your business processes.',
  },
  descDigitalStrategy: {
    fi: 'Autamme luomaan kattavan digitaalisen transformaatiosuunnitelman, joka tukee liiketoimintatavoitteitasi.',
    en: 'We help create a comprehensive digital transformation plan that supports your business goals.',
  },
  // Team section
  teamTitle: {
    fi: 'Tiimimme',
    en: 'Our Team',
  },
  teamSubtitle: {
    fi: 'Olemme intohimoisia digitaalisen maailman ammattilaisia, joiden tavoitteena on auttaa asiakkaitamme menestymään.',
    en: 'We are passionate digital world professionals whose goal is to help our customers succeed.',
  },
  // Team member roles
  roleCEO: {
    fi: 'Toimitusjohtaja & Digimarkkinointi',
    en: 'CEO & Digital Marketing',
  },
  roleCTO: {
    fi: 'Teknologiajohtaja',
    en: 'CTO',
  },
  roleStrategy: {
    fi: 'Digitaalinen Strategia',
    en: 'Digital Strategy',
  },
  roleDev: {
    fi: 'Web-kehittäjä',
    en: 'Web Developer',
  },
};

interface TranslationContextType {
  language: Language;
  t: (key: string) => string;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fi' ? 'en' : 'fi');
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <TranslationContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
