
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
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
        scrolled ? "bg-white bg-opacity-90 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="font-bold text-xl md:text-2xl">
          duuritiimi<span className="text-teal">.</span>
        </a>
        
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#services" className="nav-link">Palvelut</a></li>
          <li><a href="#team" className="nav-link">Tiimi</a></li>
          <li><a href="#contact" className="nav-link">Yhteystiedot</a></li>
        </ul>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white pt-20 px-4 md:hidden transition-transform duration-300 ease-in-out transform z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col space-y-6 items-center">
          <li>
            <a href="#services" className="text-xl" onClick={toggleMenu}>
              Palvelut
            </a>
          </li>
          <li>
            <a href="#team" className="text-xl" onClick={toggleMenu}>
              Tiimi
            </a>
          </li>
          <li>
            <a href="#contact" className="text-xl" onClick={toggleMenu}>
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
