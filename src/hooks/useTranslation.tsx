
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
  }
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
