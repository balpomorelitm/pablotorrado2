
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-slate-100 dark:bg-darker transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'Technical Arsenal' : 'Arsenal Técnico'}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-card p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 relative overflow-hidden group shadow-sm hover:shadow-lg">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                {t(category.name)}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.en} className="flex items-center gap-3 text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors">
                    <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                    <span className="text-base">{t(skill)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
