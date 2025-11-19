
import React from 'react';
import { MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'Academic & Professional Path' : 'Trayectoria Académica y Profesional'}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          <div className="space-y-8">
            {EXPERIENCE.map((exp, index) => {
              const isProminent = exp.isProminent;
              const Icon = exp.type === 'education' ? GraduationCap : Briefcase;
              
              return (
                <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center group`}>
                  
                  {/* Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 rounded-full z-10 mt-6 md:mt-0 flex items-center justify-center border-4 border-white dark:border-darker transition-all duration-300 ${isProminent ? 'w-5 h-5 bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'w-3 h-3 bg-slate-400 dark:bg-slate-600'}`}>
                  </div>

                  {/* Content */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 p-4 w-full`}>
                    <div 
                      className={`
                        rounded-xl border transition-all duration-300 relative
                        ${isProminent 
                          ? 'bg-white dark:bg-card p-6 border-slate-200 dark:border-slate-700 shadow-lg hover:border-primary/50 hover:shadow-xl dark:hover:shadow-primary/10' 
                          : 'bg-slate-100 dark:bg-slate-800/30 p-4 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800/50 shadow-sm'
                        }
                        ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}
                      `}
                    >
                      {/* Metadata Header */}
                      <div className={`flex flex-wrap items-center gap-3 mb-2 text-sm ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                         <div className={`flex items-center gap-1 px-2 py-0.5 rounded ${isProminent ? 'bg-secondary/10 text-secondary font-semibold' : 'bg-slate-200 dark:bg-slate-700/50 text-slate-500 dark:text-gray-500'}`}>
                           <Calendar size={12} />
                           <span>{exp.period}</span>
                         </div>
                         {exp.location && isProminent && (
                           <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500 dark:text-gray-400">
                             <MapPin size={12} />
                             <span>{t(exp.location)}</span>
                           </div>
                         )}
                      </div>

                      {/* Title & Company */}
                      <h3 className={`${isProminent ? 'text-xl font-bold text-slate-900 dark:text-white' : 'text-base font-semibold text-slate-700 dark:text-gray-300'} mb-1`}>
                        {t(exp.role)}
                      </h3>
                      <h4 className={`${isProminent ? 'text-lg text-primary mb-3 font-medium' : 'text-sm text-slate-500 dark:text-gray-500 mb-2'}`}>
                        {t(exp.company)}
                      </h4>

                      {/* Description (Only for prominent items or on hover/click could be expanded, but keeping concise for secondary) */}
                      {(isProminent || exp.description) && (
                        <p className={`${isProminent ? 'text-slate-600 dark:text-gray-400 text-sm leading-relaxed' : 'text-slate-500 dark:text-gray-500 text-xs leading-snug'}`}>
                          {t(exp.description)}
                        </p>
                      )}
                      
                      {/* Type Icon (Decorative) */}
                      {isProminent && (
                        <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} opacity-5 dark:opacity-10 text-slate-900 dark:text-white`}>
                           <Icon size={48} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
