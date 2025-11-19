
import React from 'react';
import { Mail, Github, Linkedin, Instagram, Bird } from 'lucide-react';
import { SOCIALS, PROFILE_NAME } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {language === 'en' ? 'Contact & Collaboration' : 'Contacto y Colaboración'}
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              {language === 'en' 
                ? "I'm always open to discussing educational technology, gamification in language learning, or academic collaborations."
                : "Siempre estoy abierto a discutir sobre tecnología educativa, gamificación en el aprendizaje de idiomas o colaboraciones académicas."}
            </p>
            <a 
              href="mailto:pablot@hku.hk" 
              className="inline-flex items-center gap-2 text-primary hover:text-indigo-700 dark:hover:text-white text-xl font-semibold transition-colors"
            >
              <Mail className="w-6 h-6" />
              pablot@hku.hk
            </a>
          </div>

          <div className="flex flex-col justify-center md:items-end">
             <div className="flex gap-6">
                {SOCIALS.map((social) => {
                  const Icon = social.icon === 'Github' ? Github : 
                               social.icon === 'Linkedin' ? Linkedin : 
                               social.icon === 'Instagram' ? Instagram :
                               social.icon === 'Bird' ? Bird : Mail;
                  return (
                    <a 
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-500 dark:text-gray-400 hover:text-white hover:bg-primary dark:hover:bg-primary hover:-translate-y-1 transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-700"
                      aria-label={social.platform}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
             </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-gray-500 text-sm">
            © {new Date().getFullYear()} {PROFILE_NAME}. {language === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
