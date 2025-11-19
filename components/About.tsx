
import React from 'react';
import { Camera, Bird, Coffee } from 'lucide-react';
import { ABOUT_ME, PHOTOGRAPHY_BIO } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  // Placeholder images for the instagram grid since we don't have local assets
  const instaImages = Array(8).fill(null).map((_, i) => `https://images.unsplash.com/photo-${1580000000000 + i}?w=300&h=300&fit=crop`);

  return (
    <section id="hobbies" className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 dark:opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'About Me & Hobbies' : 'Sobre mí, Personal, Hobbies'}
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="bg-slate-50 dark:bg-card p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
               <div className="flex items-center gap-3 mb-4 text-primary">
                 <Coffee size={24} />
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                   {language === 'en' ? 'Personal' : 'Personal'}
                 </h3>
               </div>
               <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg">
                 {t(ABOUT_ME)}
               </p>
            </div>

            <div className="bg-slate-50 dark:bg-card p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
               <div className="flex items-center gap-3 mb-4 text-secondary">
                 <Camera size={24} />
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                   {language === 'en' ? 'Photography' : 'Fotografía'}
                 </h3>
               </div>
               <p className="text-slate-600 dark:text-gray-300 leading-relaxed mb-6">
                 {t(PHOTOGRAPHY_BIO)}
               </p>
               
               <div className="flex flex-wrap gap-4">
                 <a 
                   href="https://www.instagram.com/pablotorrapics" 
                   target="_blank"
                   className="px-6 py-2 bg-white dark:bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-slate-700 dark:text-white hover:text-white rounded-lg transition-all border border-slate-300 dark:border-slate-600 font-medium flex items-center gap-2 shadow-sm"
                 >
                   <Camera size={16} /> Instagram
                 </a>
                 <a 
                   href="https://www.instagram.com/pablotorrabirdies/" 
                   target="_blank"
                   className="px-6 py-2 bg-white dark:bg-slate-800 hover:bg-green-600 text-slate-700 dark:text-white hover:text-white rounded-lg transition-all border border-slate-300 dark:border-slate-600 font-medium flex items-center gap-2 shadow-sm"
                 >
                   <Bird size={16} /> {language === 'en' ? 'Birding' : 'Pájaros'}
                 </a>
               </div>
            </div>
          </div>

          {/* Image Grid (Simulating Instagram) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 opacity-100 dark:opacity-80 dark:hover:opacity-100 transition-opacity duration-500">
            {instaImages.map((img, idx) => (
              <div key={idx} className={`rounded-lg overflow-hidden aspect-square hover:scale-105 transition-transform duration-300 border border-slate-200 dark:border-slate-800 shadow-sm ${idx % 3 === 0 ? 'col-span-2 row-span-2' : ''}`}>
                 <img 
                   src={`https://source.unsplash.com/random/400x400?nature,bird,macro&sig=${idx}`} 
                   alt="Photography sample" 
                   className="w-full h-full object-cover"
                   onError={(e) => {
                     // Fallback if unsplash source is flaky
                     (e.target as HTMLImageElement).src = `https://via.placeholder.com/400/1e293b/6366f1?text=Photo+${idx+1}`
                   }}
                 />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
