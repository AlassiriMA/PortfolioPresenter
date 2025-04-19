import React from "react";
import { Bot, Cloud, Code, Layers, Database, Terminal, Globe, Cpu } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container max-w-7xl">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container items-center gap-16">
          <div className="md:col-span-12 lg:col-span-12">
            <div className="bg-white p-10 border-l-8 border-primary shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl font-black tracking-tighter text-white">MA</span>
                </div>
                
                <div>
                  <h3 className="text-4xl font-black tracking-tight mb-4">Mohammad A. <span className="text-primary">Alassiri</span></h3>
                  <p className="text-xl md:text-2xl leading-relaxed mb-6">
                    Versatile and innovative <span className="font-black text-primary">Full-Stack Developer</span> with a proven track record of building and deploying high-performance, full-featured web applications. 
                    Proficient in modern tech stacks like React, TypeScript, Node.js, Express, and PostgreSQL.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Demonstrates strong <span className="font-black gold-text">UI/UX design skills</span> alongside backend engineering. Creator of 10+ live demo apps covering real-world use cases. Blends technical depth with clean architecture and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-4xl font-black tracking-tight mb-4 text-center">Services I Provide</h3>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">Comprehensive web development solutions tailored to meet your specific business needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 bg-white border-t-4 border-primary shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-lg">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-primary">Web Development</h3>
              <p className="text-muted-foreground">Custom, responsive websites and web applications built with modern frameworks and best practices.</p>
            </div>
            
            <div className="p-8 bg-white border-t-4 border-primary shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-lg">
                <Layers className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-primary">Full Stack Solutions</h3>
              <p className="text-muted-foreground">End-to-end development encompassing frontend interfaces, backend systems, and database architecture.</p>
            </div>
            
            <div className="p-8 bg-white border-t-4 border-primary shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-lg">
                <Cloud className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-primary">Cloud & DevOps</h3>
              <p className="text-muted-foreground">Scalable cloud infrastructure, CI/CD pipelines, and automated deployment workflows.</p>
            </div>
            
            <div className="p-8 bg-white border-t-4 border-primary shadow-lg hover:shadow-xl hover:translate-y-[-5px] transition-all">
              <div className="w-16 h-16 flex items-center justify-center mb-6 bg-primary/10 rounded-lg">
                <Bot className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-primary">AI Integration</h3>
              <p className="text-muted-foreground">Creating intelligent applications with modern AI capabilities to enhance user experiences.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-4xl font-black tracking-tight mb-4 text-center">Technical Expertise</h3>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-12">Specialized knowledge across multiple domains</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border-l-4 border-accent shadow-lg">
              <div className="flex items-center mb-6">
                <Terminal className="h-8 w-8 text-primary mr-4" />
                <h4 className="text-xl font-black">Frontend Development</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  React, TypeScript, Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  TailwindCSS, SCSS, Styled Components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Responsive UI/UX Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  State Management (Redux, Context API)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-accent shadow-lg">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-primary mr-4" />
                <h4 className="text-xl font-black">Backend Development</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Node.js, Express, NestJS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  PostgreSQL, MongoDB, Redis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  RESTful API Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Authentication & Authorization Systems
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-accent shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-primary mr-4" />
                <h4 className="text-xl font-black">Cloud & Infrastructure</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  AWS, Azure, Digital Ocean
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Docker, Kubernetes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  CI/CD Pipeline Setup
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Serverless Architecture
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 border-l-4 border-accent shadow-lg">
              <div className="flex items-center mb-6">
                <Cpu className="h-8 w-8 text-primary mr-4" />
                <h4 className="text-xl font-black">DevOps & Tooling</h4>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Git, GitHub Actions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Automated Testing (Jest, Cypress)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Security Best Practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
