import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Explore some of my recent projects showcasing my skills in full-stack development and specialized domains.
        </p>
        
        <div className="grid-container">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="md:col-span-6 border border-border bg-white hover:border-primary transition-all"
            >
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">{project.title}</h3>
                  <div className="p-2 bg-secondary flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 min-h-[80px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-0.5 bg-secondary text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex border-t border-border divide-x divide-border">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center p-3 text-xs font-medium hover:bg-secondary transition-colors flex items-center justify-center"
                >
                  View Demo <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center p-3 text-xs font-medium hover:bg-secondary transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://alassiri.nl" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block accent-bg px-6 py-3 text-sm font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
