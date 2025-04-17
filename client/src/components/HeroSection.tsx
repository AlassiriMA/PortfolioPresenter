import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="section pt-32 md:pt-48">
      <div className="container max-w-7xl">
        <div className="grid-container items-center">
          <div className="md:col-span-9 lg:col-span-8">
            <div className="inline-flex items-center px-4 py-2 bg-secondary mb-8">
              <span className="text-sm font-medium uppercase tracking-wider">Full Stack Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-8">
              Designing Systems.<br />Building <span className="text-primary">Solutions</span>.
            </h1>
            
            <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mb-12 leading-relaxed">
              I craft clean, scalable, and user-focused applications powered by modern web technologies and artificial intelligence.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="#projects" 
                className="accent-bg px-8 py-4 font-medium text-base"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="bg-secondary text-foreground px-8 py-4 font-medium text-base border border-transparent hover:border-primary transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex w-full justify-center mt-32">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="h-8 w-8 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
