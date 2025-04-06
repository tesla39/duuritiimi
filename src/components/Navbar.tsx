
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, toggleLanguage, language } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black bg-opacity-90 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="font-bold text-xl md:text-2xl text-white">
          duuritiimi<span className="text-yellow">.</span>
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            <li><a href="#services" className="nav-link">{t('services')}</a></li>
            <li><a href="#team" className="nav-link">{t('team')}</a></li>
            <li><a href="#contact" className="nav-link">{t('contact')}</a></li>
          </ul>
          
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-sm font-medium text-white hover:text-yellow transition-colors"
          >
            <Globe size={16} className="mr-1" />
            {language === 'fi' ? '🇫🇮 FI' : '🇬🇧 EN'}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleLanguage} 
            className="flex items-center text-sm font-medium text-white hover:text-yellow transition-colors"
          >
            <Globe size={16} className="mr-1" />
            {language === 'fi' ? '🇫🇮 FI' : '🇬🇧 EN'}
          </button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="p-0 h-auto w-auto text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-16 bg-black text-white">
              <ul className="flex flex-col space-y-6 items-center">
                <li>
                  <a href="#services" className="text-xl text-white hover:text-yellow">
                    {t('services')}
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-xl text-white hover:text-yellow">
                    {t('team')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xl text-white hover:text-yellow">
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
