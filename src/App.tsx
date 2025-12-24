import React, { useState, useEffect, useRef } from 'react';
import { X , ExternalLink , Menu , Mail, Code2, 
  Github, MapPin, Heart, ArrowUp,
} from "lucide-react";
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from './components/Projects';
import Skills from './components/Skills'
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const url =  "prateek-portfolio";

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#121212]/80 backdrop-blur-md z-50 border-b border-[#2a2a2a]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white flex items-center">
            <span className="text-[#00FFB2]">Prateek</span>
            <span className="ml-1">Dhanker</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize relative py-1 cursor-pointer whitespace-nowrap ${
                  activeSection === item ? 'text-[#00FFB2]' : 'text-[#e0e0e0] hover:text-white'
                }`}
              >
                {item}
                <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#00FFB2] transform scale-x-0 transition-transform duration-300 ${
                  activeSection === item ? 'scale-x-100' : ''
                }`}></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#00FFB2]" />
          ) : (
            <Menu className="w-6 h-6 text-[#00FFB2]" />
          )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#1A1A1A] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 border-b border-[#2a2a2a]' : 'max-h-0'
        }`}>
          <div className="container mx-auto px-6 py-4">
            {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-3 capitalize cursor-pointer whitespace-nowrap ${
                  activeSection === item ? 'text-[#00FFB2]' : 'text-[#e0e0e0]'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#121212] to-[#1F1F1F] pt-20">
        <Hero
          url={url}
          setActiveSection={setActiveSection}
          setIsMenuOpen={setIsMenuOpen}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#1A1A1A]">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#121212]">
        <Projects url={url} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#1A1A1A]">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[#121212]">
        <Experience url={url} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A0A0A] border-t border-[#333333]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-[#e0e0e0]">
                &copy; {new Date().getFullYear()} Prateek Dhanker. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center">
              <span className="text-[#e0e0e0] mr-2">Built with</span>
              <Heart className="w-4 h-4 text-[#00FFB2] mx-1 fill-[#00FFB2]" />
              <span className="text-[#e0e0e0] ml-1">using React & TailwindCSS</span>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="flex flex-row items-center text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 cursor-pointer"
              >
                <ArrowUp className="h-4 w-4 mr-2" /> Back to top
              </button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;