import React from "react";
import { Monitor, Server, Database, Zap } from "lucide-react";
import SkillBar from "./SkillBar";
import { frontendSkills, backendSkills, devOpsSkills, specialtySkills } from "../data/skills";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider-center"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Frontend Skills */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Frontend</h3>
            </div>
            
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Backend</h3>
            </div>
            
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* DevOps & Cloud */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">DevOps & Cloud</h3>
            </div>
            
            <div className="space-y-5">
              {devOpsSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* Specialty Skills */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Specialty Skills</h3>
            </div>
            
            <div className="space-y-5">
              {specialtySkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
