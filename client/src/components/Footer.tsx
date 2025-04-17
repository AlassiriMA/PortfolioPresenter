import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="py-8 bg-white border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="font-medium text-xl tracking-tight">
              Mohammad A. Alassiri<span className="text-primary">.</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-xs hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-xs hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-xs hover:text-primary transition-colors">Projects</a>
            <a href="#cv" className="text-xs hover:text-primary transition-colors">CV</a>
            <a href="#contact" className="text-xs hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <button 
              onClick={scrollToTop}
              className="p-2 text-muted-foreground hover:text-primary border border-border hover:border-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Mohammad A. Alassiri</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
