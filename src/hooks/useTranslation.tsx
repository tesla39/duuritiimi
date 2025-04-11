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

  // HERO section
  heroTitle: {
    fi: 'Palkkaa helposti ja nopeasti ilman vaivaa — suoraan meiltä.',
    en: 'Hire easily and quickly without the hassle—directly from us.',
  },
  exploreServices: {
    fi: 'Muu',
    en: 'Other',
  },
  hireDirectly: {
    fi: 'Palkkaa siivooja',
    en: 'Hire a Cleaner',
  },
  hireAssistant: {
    fi: 'Palkkaa henkilökohtainen avustaja',
    en: 'Hire a Personal Assistant',
  },

  // Call to action
  ctaTitle: {
    fi: 'Löydä oikeat tekijät oikeaan aikaan',
    en: 'Find the Right People at the Right Time',
  },
  ctaSubtitle: {
    fi: 'Tarvitsetko osaavaa työvoimaa nopeasti? Ota yhteyttä niin löydämme juuri sinun tarpeisiisi sopivat työntekijät.',
    en: "Need skilled staff fast? Contact us and we'll match the right people to your specific needs.",
  },

  // Form fields
  fullName: {
    fi: 'Asiakkaan nimi',
    en: 'Full Name of Client',
  },
  address: {
    fi: 'Työn osoite',
    en: 'Address of Work Location',
  },
  phoneNumber: {
    fi: 'Asiakkaan puhelinnumero',
    en: 'Phone Number of Client',
  },
  email: {
    fi: 'Asiakkaan sähköposti',
    en: 'Email of Client',
  },
  serviceDetails: {
    fi: 'Palvelun tiedot',
    en: 'Service Details',
  },
  serviceDuration: {
    fi: 'Palvelun kesto',
    en: 'Service Duration',
  },
  fromDate: {
    fi: 'Aloituspäivä',
    en: 'From Date',
  },
  toDate: {
    fi: 'Lopetuspäivä',
    en: 'To Date',
  },
  additionalInfo: {
    fi: 'Lisätiedot',
    en: 'Additional Info',
  },
  hireFor: {
    fi: 'Palkkaa',
    en: 'Hire For',
  },
  
  // Hire request form
  companyName: {
    fi: 'Yrityksen nimi',
    en: 'Company Name',
  },
  workRole: {
    fi: 'Työnkuva',
    en: 'Job Role',
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
    fi: 'Tarvittavien työntekijöiden määrä',
    en: 'Number of Required Workers',
  },
  sendRequest: {
    fi: 'Lähetä pyyntö',
    en: 'Send Request',
  },
  thankYou: {
    fi: 'Kiitos yhteydenotosta! Otamme sinuun pian yhteyttä.',
    en: "Thanks for getting in touch! We'll contact you shortly.",
  },

  // Services section
  servicesTitle: {
    fi: 'Palvelumme',
    en: 'Our Services',
  },
  servicesSubtitle: {
    fi: 'Tarjoamme luotettavaa ja joustavaa työvoimaa erilaisiin tehtäviin yrityksille ja kotitalouksille.',
    en: 'We provide reliable and flexible staffing solutions for companies and households alike.',
  },

  // Recruitment agency service categories
  serviceHomecare: {
    fi: 'Kotipalvelu',
    en: 'Homecare',
  },
  serviceHelper: {
    fi: 'Avustaja',
    en: 'Helper',
  },
  serviceEventPlanning: {
    fi: 'Tapahtumatyövoima',
    en: 'Event Staff',
  },
  serviceCustomerService: {
    fi: 'Asiakaspalvelu',
    en: 'Customer Service',
  },
  serviceAssistantSupport: {
    fi: 'Assistenttipalvelut',
    en: 'Office Assistants',
  },
  serviceOther: {
    fi: 'Muut tehtävät',
    en: 'Other Roles',
  },

  // Descriptions
  descHomecare: {
    fi: 'Tarjoamme avustavia työntekijöitä kotipalveluihin tukemaan ikääntyviä ja apua tarvitsevia arjessa.',
    en: 'We provide support workers for homecare to assist the elderly and those in need.',
  },
  descHelper: {
    fi: 'Avustajat auttavat siivouksessa, järjestelyssä ja kevyissä kotitöissä tai yritysaskareissa.',
    en: 'Helpers assist with cleaning, organizing, and light tasks in homes or workplaces.',
  },
  descEventPlanning: {
    fi: 'Tapahtuma-avustajamme tukevat järjestelyissä, asiakaspalvelussa ja logistiikassa.',
    en: 'Our event staff support setup, guest services, and logistics at events.',
  },
  descCustomerService: {
    fi: 'Tarjoamme asiakaspalveluhenkilöitä, jotka edustavat yritystäsi ammattitaidolla.',
    en: 'We supply professional customer service staff to represent your brand.',
  },
  descAssistantSupport: {
    fi: 'Assistenttimme hoitavat toimistotyöt, aikataulut ja asiakirjahallinnan.',
    en: 'Our assistants manage office tasks, scheduling, and document handling.',
  },
  descOther: {
    fi: 'Kerro meille erityistarpeistasi, niin etsimme juuri oikean henkilön tehtävään.',
    en: "Tell us your special needs — we'll find the right fit for the role.",
  },

  // Footer translations
  footerTagline: {
    fi: 'Luotettava rekrytointikumppani. Yhdistämme osaajat ja työnantajat tehokkaasti.',
    en: 'Your trusted recruitment partner. Connecting talent with opportunity.',
  },
  footerRights: {
    fi: 'Kaikki oikeudet pidätetään.',
    en: 'All rights reserved.',
  },

  // About us section
  aboutUsTitle: {
    fi: 'Meistä',
    en: 'About Us',
  },
  aboutUsContent: {
    fi: 'Olemme rekrytointialan asiantuntijoita, jotka auttavat yrityksiä ja kotitalouksia löytämään oikeat työntekijät oikeaan aikaan. Tavoitteenamme on tarjota joustavia ja luotettavia henkilöstöratkaisuja eri tarpeisiin.',
    en: 'We are recruitment professionals helping companies and households find the right people at the right time. Our goal is to provide flexible and reliable staffing solutions for your diverse needs.',
  },

  // Contact section additional translations
  contactDescription: {
    fi: 'Kerro meille projektistasi ja tavoitteistasi. Olemme valmiita auttamaan sinua.',
    en: 'Tell us about your project and goals. We are ready to help you.',
  },
  contactInfo: {
    fi: 'Yhteystiedot',
    en: 'Contact Information',
  },
  contactDirectly: {
    fi: 'Voit ottaa meihin yhteyttä lomakkeen kautta tai suoraan alla olevilla yhteystiedoilla.',
    en: 'You can reach us through the form or directly using the contact details below.',
  },
  phoneLabel: {
    fi: 'Puhelin',
    en: 'Phone',
  },
  name: {
    fi: 'Nimi',
    en: 'Name',
  },
  message: {
    fi: 'Viesti',
    en: 'Message',
  },
  sendMessage: {
    fi: 'Lähetä viesti',
    en: 'Send Message',
  },
  sending: {
    fi: 'Lähetetään...',
    en: 'Sending...',
  },
  willContactSoon: {
    fi: 'Palaamme sinulle mahdollisimman pian.',
    en: 'We will get back to you as soon as possible.',
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
