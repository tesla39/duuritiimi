
import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              duuritiimi<span className="text-teal">.</span>
            </h3>
            <p className="text-gray-400 max-w-md">
              Digitaalista asiantuntijuutta ja digituotteita yrityksellesi. Kasvata liiketoimintaasi kanssamme.
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400">
              &copy; {currentYear} duuritiimi. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
