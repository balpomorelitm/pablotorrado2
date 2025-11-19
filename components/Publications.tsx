
import React from 'react';
import { Download, Mic2, BookOpen, ShoppingCart, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Publications: React.FC = () => {
  const { t, language } = useLanguage();

  const books = PUBLICATIONS.filter(p => p.type === 'Book');
  const otherPublications = PUBLICATIONS.filter(p => p.type !== 'Book');

  return (
    <section id="publications" className="py-24 bg-slate-50 dark:bg-darker border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
             {language === 'en' ? 'Publications & Talks' : 'Publicaciones y Ponencias'}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Contributions to the field of Spanish as a Foreign Language (ELE) through manuals, conferences, and articles.' 
              : 'Contribuciones al campo del Español como Lengua Extranjera (ELE) a través de manuales, conferencias y artículos.'}
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Books Section */}
        {books.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {language === 'en' ? 'Books & Manuals' : 'Libros y Manuales'}
              </h3>
            </div>

            <div className="grid gap-12">
              {books.map((book) => (
                <div key={book.id} className="bg-white dark:bg-card rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Book Cover Image Area */}
                    <div className="md:w-1/3 bg-slate-100 dark:bg-slate-800 p-8 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-900"></div>
                       <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                         {book.imageUrl ? (
                           <img 
                            src={book.imageUrl} 
                            alt={book.title}
                            className="rounded-lg shadow-2xl max-h-80 object-contain border-2 border-white dark:border-slate-600/50"
                           />
                         ) : (
                           <div className="w-48 h-72 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-300 dark:border-slate-600 shadow-xl">
                             <BookOpen size={48} className="text-slate-400 dark:text-slate-500" />
                           </div>
                         )}
                       </div>
                    </div>

                    {/* Book Details */}
                    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                      <div className="mb-6">
                        <h4 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
                          {language === 'es' ? book.spanishTitle : book.title}
                        </h4>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                          {book.title === "Creator of Manuals and Teaching Materials" && language === 'es' ? book.title : (language === 'es' ? book.title : book.spanishTitle)} 
                        </h3>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                          {book.description ? t(book.description) : ''}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {book.publisherUrl && (
                          <a 
                            href={book.publisherUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors shadow-lg flex items-center gap-2"
                          >
                            <ShoppingCart size={18} />
                            {language === 'en' ? 'Buy from Publisher' : 'Comprar en la Editorial'}
                          </a>
                        )}
                        {book.amazonUrl && (
                          <a 
                            href={book.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 border-2 border-red-600 rounded-lg font-bold transition-colors shadow-lg flex items-center gap-2"
                          >
                            <ShoppingBagIcon />
                            {language === 'en' ? 'Buy on Amazon' : 'Comprar en Amazon'}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Publications Grid */}
        <div className="grid gap-6">
          {otherPublications.length > 0 && (
             <div className="flex items-center gap-3 mb-6">
                <Mic2 className="text-secondary" size={24} />
                <h3 className="text-xl font-bold text-slate-700 dark:text-gray-300">
                  {language === 'en' ? 'Conferences & Articles' : 'Conferencias y Artículos'}
                </h3>
             </div>
          )}
          {otherPublications.map((pub) => (
            <div key={pub.id} className="bg-white dark:bg-card hover:bg-slate-50 dark:hover:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 group shadow-sm hover:shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                     <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                       pub.type === 'Conference' ? 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400' : 
                       pub.type === 'Workshop' ? 'bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400' : 
                       'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400'
                     }`}>
                       {pub.type}
                     </span>
                     <span className="text-slate-500 dark:text-gray-500 text-sm font-mono">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-1">
                    {language === 'es' ? pub.spanishTitle : pub.title}
                  </h3>
                  <h4 className="text-md text-slate-500 dark:text-gray-400 italic mb-2">
                    {language === 'es' ? pub.title : pub.spanishTitle}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-gray-500">
                    <Mic2 size={14} />
                    <span>{t(pub.event)}</span>
                  </div>
                </div>
                
                <div>
                   {pub.downloadUrl ? (
                     <a href={pub.downloadUrl} className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white dark:hover:bg-primary text-slate-700 dark:text-white rounded-lg transition-colors text-sm font-medium">
                       <Download size={16} />
                       {language === 'en' ? 'Access Material' : 'Descargar'}
                     </a>
                   ) : (
                     <span className="text-xs text-gray-400 dark:text-gray-600 italic">
                        {language === 'en' ? 'No download available' : 'Sin descarga'}
                     </span>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export default Publications;
