import React from "react";
import { Clock, Globe, Briefcase, Code } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container items-start">
          <div className="md:col-span-7">
            <p className="text-muted-foreground mb-6">
              Versatile and innovative Full-Stack Developer with a proven track record of building and deploying high-performance, full-featured web applications. 
              Proficient in modern tech stacks like React, TypeScript, Node.js, Express, and PostgreSQL.
            </p>
            <p className="text-muted-foreground mb-6">
              Demonstrates strong UI/UX design skills alongside backend engineering. Creator of 10+ live demo apps covering real-world use cases. Blends technical depth with clean architecture and automation.
            </p>
            <p className="text-muted-foreground">
              Actively explores cloud, DevOps, and AI technologies to create scalable, intelligent systems.
            </p>
          </div>
          
          <div className="md:col-span-5 mt-8 md:mt-0">
            <div className="bg-white border border-border">
              <div className="aspect-square flex items-center justify-center bg-muted">
                <span className="text-7xl font-medium tracking-tighter text-primary">MA</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid-container mt-16 gap-y-8">
          <div className="md:col-span-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <Briefcase className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Work Experience</h3>
            </div>
            <div className="border-l border-border pl-4">
              <div className="mb-4">
                <h4 className="font-medium">Operations Manager</h4>
                <p className="text-sm text-muted-foreground">Lenador Systems | Sep 2020 – Present</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Managing technical support teams across large-scale events</li>
                  <li>• Overseeing POS devices and networking infrastructure setup</li>
                  <li>• Delivering live technical support and training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Full-Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Freelance | 2020 – Present</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Building REST APIs and component systems</li>
                  <li>• Containerizing applications with Docker</li>
                  <li>• Integrating AI capabilities into applications</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <Code className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Education & Certifications</h3>
            </div>
            <div className="border-l border-border pl-4">
              <div className="mb-4">
                <h4 className="font-medium">Knowledge Engineering</h4>
                <p className="text-sm text-muted-foreground">Maastricht University | Completed Coursework</p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium">Business Administration</h4>
                <p className="text-sm text-muted-foreground">Abu Dhabi University | Completed Coursework</p>
              </div>
              <div>
                <h4 className="font-medium">Certifications</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• CS50's Introduction to Computer Science – Harvard</li>
                  <li>• Google Cloud Certified Associate Cloud Engineer</li>
                  <li>• Introduction to Gen AI - Microsoft</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Languages</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">English</span>
                <span className="text-xs text-muted-foreground">Fluent</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Arabic</span>
                <span className="text-xs text-muted-foreground">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dutch</span>
                <span className="text-xs text-muted-foreground">Conversational</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Interests</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• AI agents and automation</li>
              <li>• Cloud infrastructure and DevOps</li>
              <li>• DeFi trading bots</li>
              <li>• UI/UX application design</li>
              <li>• Business & startups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
