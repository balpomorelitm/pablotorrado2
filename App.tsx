
import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen transition-colors duration-300 bg-light dark:bg-darker selection:bg-primary selection:text-white">
          <Navbar />
          <main>
            <Hero />
            <Experience />
            <Projects />
            <Publications />
            <Skills />
            <About />
          </main>
          <Contact />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
