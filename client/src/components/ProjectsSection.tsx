import React from "react";
import { Github } from "lucide-react";
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="container max-w-7xl">
        <h2 className="section-title">Featured Projects</h2>
        <div className="section-divider"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mb-16">
          Explore some of my recent projects showcasing my skills in full-stack development, cloud architecture, and AI integration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card border border-border bg-white hover:border-primary transition-all flex flex-col"
            >
              <div className="p-8 border-b border-border flex-grow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  <div className="p-2 bg-secondary rounded-sm flex items-center justify-center">
                    {project.icon}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 min-h-[100px] text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-border mt-auto">
                <a 
                  href="https://github.com/AlassiriMA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex text-center p-4 text-sm font-medium hover:bg-secondary transition-colors items-center justify-center w-full"
                >
                  <Github className="h-4 w-4 mr-1" /> View Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://alassiri.nl" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block accent-bg px-8 py-4 text-base font-medium"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
