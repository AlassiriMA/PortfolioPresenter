import React from "react";
import { Bot, Cloud, Code, Layers } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container max-w-7xl">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container items-center gap-16">
          <div className="md:col-span-5 flex justify-center">
            <div className="max-w-[280px] rounded-full overflow-hidden border-4 border-accent shadow-xl">
              <img 
                src="./assets/profile-image.jpg" 
                alt="Mohammad A. Alassiri" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = "w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary/50 flex items-center justify-center";
                    fallback.innerHTML = '<span class="text-6xl font-black tracking-tighter text-primary">MA</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
          </div>
          
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Versatile and innovative <span className="font-black text-primary">Full-Stack Developer</span> with a proven track record of building and deploying high-performance, full-featured web applications. 
              Proficient in modern tech stacks like React, TypeScript, Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Demonstrates strong <span className="font-black gold-text">UI/UX design skills</span> alongside backend engineering. Creator of 10+ live demo apps covering real-world use cases. Blends technical depth with clean architecture and automation.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Actively explores <span className="font-black text-primary">cloud</span>, <span className="font-black gold-text">DevOps</span>, and <span className="font-black text-primary">AI technologies</span> to create scalable, intelligent systems.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          <div className="text-center p-8 bg-white border-2 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-full">
              <Code className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-black mb-3 text-primary">Web Development</h3>
            <p className="text-muted-foreground">Building modern web applications with performant UI/UX</p>
          </div>
          
          <div className="text-center p-8 bg-white border-2 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-full">
              <Layers className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-black mb-3 text-primary">Full Stack</h3>
            <p className="text-muted-foreground">Expertise in both frontend and backend development</p>
          </div>
          
          <div className="text-center p-8 bg-white border-2 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-full">
              <Cloud className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-black mb-3 text-primary">Cloud & DevOps</h3>
            <p className="text-muted-foreground">Building scalable cloud infrastructure and CI/CD pipelines</p>
          </div>
          
          <div className="text-center p-8 bg-white border-2 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-full">
              <Bot className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-black mb-3 text-primary">AI Integration</h3>
            <p className="text-muted-foreground">Creating intelligent applications with modern AI capabilities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
