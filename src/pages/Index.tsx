
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import SoftSkillsSection from '../components/SoftSkillsSection';
import CertificationsSection from '../components/CertificationsSection';
import ProjectsSection from '../components/ProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import LeadershipSection from '../components/LeadershipSection';
import ContactSection from '../components/ContactSection';
import ReferencesSection from '../components/ReferencesSection';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Track cursor position and scroll for enhanced effects
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, .hover\\:scale-105, .group, .card, .cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} overflow-x-hidden`}>
      {/* Enhanced Custom cursor follower with multiple layers */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-200 ease-out ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        }}
      >
        {/* Outer glow */}
        <div className={`w-8 h-8 rounded-full transition-all duration-300 ${isHovering ? 'opacity-80' : 'opacity-40'}`}
             style={{
               background: `radial-gradient(circle, rgba(168, 85, 247, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 70%)`
             }}
        />
        {/* Inner core */}
        <div className={`absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isHovering ? 'scale-150 opacity-100' : 'scale-100 opacity-90'}`}
        />
      </div>

      {/* Enhanced parallax floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"
          style={{
            transform: `translate(${20 + scrollY * 0.15}px, ${100 + scrollY * 0.08}px)`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"
          style={{
            transform: `translate(${window.innerWidth - 100 + scrollY * 0.12}px, ${200 + scrollY * 0.05}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-4 h-4 bg-pink-400/30 rounded-full animate-pulse"
          style={{
            transform: `translate(${150 + scrollY * 0.18}px, ${300 + scrollY * 0.09}px)`,
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-2.5 h-2.5 bg-yellow-400/40 rounded-full animate-pulse"
          style={{
            transform: `translate(${window.innerWidth - 200 + scrollY * 0.1}px, ${400 + scrollY * 0.06}px)`,
            animationDelay: '0.5s'
          }}
        />
        <div 
          className="absolute w-1.5 h-1.5 bg-green-400/45 rounded-full animate-pulse"
          style={{
            transform: `translate(${80 + scrollY * 0.14}px, ${500 + scrollY * 0.07}px)`,
            animationDelay: '1.5s'
          }}
        />
      </div>
      
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <SoftSkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <PublicationsSection />
        <WorkExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      <ReferencesSection />
    </div>
  );
};

export default Index;
