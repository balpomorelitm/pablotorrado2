
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PROFILE_NAME, PROFILE_ROLE, PROFILE_BIO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-light dark:bg-darker">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        {/* Light Mode Gradient Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-indigo-200/40 dark:bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-200/40 dark:bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10 order-2 md:order-1 mt-8 md:mt-0">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-primary uppercase bg-indigo-50 dark:bg-primary/10 rounded-full border border-indigo-100 dark:border-primary/20">
            {language === 'en' ? 'Researcher & Professor' : 'Investigador y profesor'}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
            {language === 'en' ? "Hi, I'm" : "Hola, soy"} <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{PROFILE_NAME}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-500 dark:text-gray-400 mb-6">
            {t(PROFILE_ROLE)}
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {t(PROFILE_BIO)}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="group px-8 py-3 text-base font-medium text-white bg-primary hover:bg-indigo-600 rounded-lg transition-all duration-300 flex items-center shadow-lg shadow-primary/25"
            >
              {language === 'en' ? 'Educational Games' : 'Juegos Educativos'}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://docs.google.com/document/d/1jwrvdmvTSFjtMYG62rgrlHyg6fn60nhK/edit?usp=sharing&ouid=101671731662601134153&rtpof=true&sd=true" 
              target="_blank"
              className="px-8 py-3 text-base font-medium text-slate-700 dark:text-gray-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-all duration-300 flex items-center border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md"
            >
              {language === 'en' ? 'Download CV' : 'Descargar CV'}
              <Download className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Image/Avatar Area */}
        <div className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2">
           <div className="relative w-64 h-80 md:w-80 md:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-50"></div>
              <img
                src="https://pablotorrado.site/imagenes/pixelpic.webp"
                alt={PROFILE_NAME}
                className="relative w-full h-full object-cover rounded-[2rem] border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800"
              />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
