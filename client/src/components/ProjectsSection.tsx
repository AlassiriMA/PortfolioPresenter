import React from "react";
import { MoveRight } from "lucide-react";
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore some of my recent projects showcasing my skills in full-stack development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 ${index % 2 === 0 ? 'bg-blue-500/80' : 'bg-purple-500/80'} rounded text-xs font-medium ${index > 0 ? 'ml-2' : ''}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-medium">Live Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline font-medium">GitHub</a>
                  </div>
                  <button className="text-purple-500 hover:text-blue-500 transition-colors" aria-label="View details">
                    <MoveRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block gradient-bg text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
