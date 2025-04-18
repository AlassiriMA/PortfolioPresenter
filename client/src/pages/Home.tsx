import React, { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { apiRequest } from "@/lib/queryClient";

const Home: React.FC = () => {
  useEffect(() => {
    document.title = "Mohammad A. Alassiri | Full Stack Developer";
    
    // Track section views when hash changes
    const trackSectionView = () => {
      const currentSection = window.location.hash || '/';
      
      // Skip tracking during development
      if (import.meta.env.DEV) {
        return;
      }
      
      // Track the section view
      try {
        fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            page: currentSection,
            title: document.title 
          })
        });
      } catch (error) {
        console.debug('Section tracking error:', error);
      }
    };
    
    // Track initial section
    trackSectionView();
    
    // Listen for hash changes to track section views
    window.addEventListener('hashchange', trackSectionView);
    
    return () => {
      window.removeEventListener('hashchange', trackSectionView);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CVSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
