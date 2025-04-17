import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="section pt-32 md:pt-48">
      <div className="container">
        <div className="grid-container items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <div className="inline-flex items-center px-3 py-1 bg-secondary mb-6">
              <span className="text-xs font-medium uppercase tracking-wider">Full Stack Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6">
              Designing Systems.<br />Building <span className="text-primary">Solutions</span>.
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-lg mb-10">
              I craft clean, scalable, and user-focused applications powered by modern web technologies.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="accent-bg px-6 py-3 font-medium text-sm"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-secondary text-foreground px-6 py-3 font-medium text-sm border border-transparent hover:border-primary transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex w-full justify-center mt-24">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
