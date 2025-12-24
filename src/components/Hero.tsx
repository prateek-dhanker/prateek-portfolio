import React from 'react';
import {Download, Mail, Code2, ChevronDown} from "lucide-react";

interface HeroProps {
    url: string;
    setActiveSection: (section: string) => void;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({url, setActiveSection, setIsMenuOpen}) => {
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
        <>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://readdy.ai/api/search-image?query=abstract%20dark%20tech%20background%20with%20subtle%20neon%20blue%20and%20green%20particles%20floating%20in%20a%20deep%20space%20environment%2C%20creating%20a%20digital%20atmosphere%20with%20low%20opacity%20particles%2C%20perfect%20for%20a%20tech%20portfolio%20background&width=1920&height=1080&seq=hero-bg&orientation=landscape')]"></div>
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <h2 className="text-xl md:text-2xl font-light text-[#00FFB2] mb-4">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Prateek Dhanker</h1>
                        <h3 className="text-xl md:text-2xl font-medium text-[#e0e0e0] mb-6">
                            Final-Year CS Student | Full-Stack & AI Developer
                        </h3>
                        <p className="text-lg md:text-xl text-[#cccccc] mb-8 max-w-lg">
                            Turning complex problems into elegant software solutions.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="https://drive.google.com/file/d/1TTVNCnyUOyxg7pXCdr0YddmL2ZFi2zze/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-6 py-3 bg-[#00FFB2] text-[#121212] font-medium rounded-lg hover:bg-[#00FFB2]/90 transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                                    <Download className="w-4 h-4 mr-2" /> Download Resume
                                </button>
                            </a>

                            <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-transparent border border-[#00FFB2] text-[#00FFB2] font-medium rounded-lg hover:bg-[#00FFB2]/10 transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                                <Mail className="w-4 h-4 mr-2" /> Contact Me
                            </button>
                            <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-[#1A1A1A] text-white font-medium rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 flex items-center cursor-pointer whitespace-nowrap !rounded-button">
                                <Code2 className="w-4 h-4 mr-2" /> View Projects
                            </button>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFB2] to-[#7B42F6] opacity-20 blur-xl animate-pulse"></div>
                            <div className="absolute inset-2 rounded-full bg-[#1A1A1A] border-2 border-[#00FFB2]/30"></div>
                            <div className="absolute inset-4 rounded-full overflow-hidden">
                                <img
                                    src={`/${url}/prateekPic.jpeg`}
                                    alt="Prateek Dhanker"
                                    className="w-full h-full object-cover object-top zoom-510 transition-transform duration-500 hover:scale-105 rounded-full shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <button onClick={() => scrollToSection('about')} className="text-[#e0e0e0] hover:text-[#00FFB2] transition-colors duration-300 cursor-pointer">
                        <ChevronDown className="text-2xl" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Hero;