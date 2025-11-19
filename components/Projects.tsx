
import React from 'react';
import { ExternalLink, Gamepad2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import ConstellationBackground from './ConstellationBackground';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-light dark:bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <ConstellationBackground />
      
      {/* Light Mode Background Gradient Overlay for "Precious" feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 dark:from-transparent dark:to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {language === 'en' ? 'Educational Projects' : 'Proyectos Educativos'}
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Gamified tools and applications designed to enhance the learning experience for students of Spanish as a Foreign Language.'
              : 'Herramientas y aplicaciones gamificadas diseñadas para mejorar la experiencia de aprendizaje de estudiantes de Español como Lengua Extranjera.'}
          </p>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-card rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl dark:shadow-xl dark:hover:shadow-primary/10 hover:border-primary/50 transition-all duration-300 flex flex-col">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-darker/50 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-darker/80 backdrop-blur p-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                  <Gamepad2 size={20} className="text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3 flex-1">
                  {t(project.description)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-secondary rounded-full border border-slate-200 dark:border-slate-700 uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-md hover:shadow-lg shadow-primary/20"
                    >
                      {language === 'en' ? 'Play / View' : 'Jugar / Ver'}
                      <ExternalLink size={16} />
                    </a>
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

export default Projects;
