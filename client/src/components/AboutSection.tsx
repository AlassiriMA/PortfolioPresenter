import React from "react";
import { Bot, Cloud, Code, Layers } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container max-w-7xl">
        <h2 className="section-title text-4xl md:text-5xl mb-4">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container items-center gap-12">
          <div className="md:col-span-6">
            <div className="bg-white border border-border shadow-lg overflow-hidden">
              <div className="aspect-square w-full h-full bg-muted overflow-hidden">
                {/* Display profile image */}
                <img 
                  src="/assets/profile-image.jpg" 
                  alt="Mohammad A. Alassiri" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = "w-full h-full bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center";
                      fallback.innerHTML = '<span class="text-8xl font-medium tracking-tighter text-primary">MA</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6">
            <p className="text-xl leading-relaxed mb-8">
              Versatile and innovative Full-Stack Developer with a proven track record of building and deploying high-performance, full-featured web applications. 
              Proficient in modern tech stacks like React, TypeScript, Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-xl leading-relaxed mb-8">
              Demonstrates strong UI/UX design skills alongside backend engineering. Creator of 10+ live demo apps covering real-world use cases. Blends technical depth with clean architecture and automation.
            </p>
            <p className="text-xl leading-relaxed">
              Actively explores cloud, DevOps, and AI technologies to create scalable, intelligent systems.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center p-6 bg-white border border-border hover:border-primary transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Web Development</h3>
            <p className="text-muted-foreground">Building modern web applications with performant UI/UX</p>
          </div>
          
          <div className="text-center p-6 bg-white border border-border hover:border-primary transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <Layers className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Full Stack</h3>
            <p className="text-muted-foreground">Expertise in both frontend and backend development</p>
          </div>
          
          <div className="text-center p-6 bg-white border border-border hover:border-primary transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <Cloud className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Cloud & DevOps</h3>
            <p className="text-muted-foreground">Building scalable cloud infrastructure and CI/CD pipelines</p>
          </div>
          
          <div className="text-center p-6 bg-white border border-border hover:border-primary transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-4">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">AI Integration</h3>
            <p className="text-muted-foreground">Creating intelligent applications with modern AI capabilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
