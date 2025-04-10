
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedin?: string;
  email?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, title, imageSrc, linkedin, email }) => {
  return (
    <div className="text-center">
      <div className="relative mb-4 overflow-hidden rounded-full w-64 h-64 mx-auto group">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Social overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow hover:bg-yellow hover:text-black transition-colors"
            >
              <Linkedin size={20} />
            </a>
          )}
          
          {email && (
            <a 
              href={`mailto:${email}`}
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-yellow hover:bg-yellow hover:text-black transition-colors"
            >
              <Mail size={20} />
            </a>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-400">{title}</p>
    </div>
  );
};

const Team: React.FC = () => {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: "Kaisa Korhonen",
      title: t('roleCEO'),
      imageSrc: "/placeholder.svg",
      linkedin: "https://linkedin.com",
      email: "kaisa@duuritiimi.fi"
    },
    {
      name: "Mikko Virtanen",
      title: t('roleCTO'),
      imageSrc: "/placeholder.svg",
      linkedin: "https://linkedin.com",
      email: "mikko@duuritiimi.fi"
    },
    {
      name: "Emilia Järvinen",
      title: t('roleStrategy'),
      imageSrc: "/placeholder.svg",
      linkedin: "https://linkedin.com",
      email: "emilia@duuritiimi.fi"
    },
    {
      name: "Antti Mäkinen",
      title: t('roleDev'),
      imageSrc: "/placeholder.svg",
      linkedin: "https://linkedin.com",
      email: "antti@duuritiimi.fi"
    },
  ];

  return (
    <section id="team" className="section bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-white">{t('teamTitle')}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('teamSubtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              linkedin={member.linkedin}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
