import React from "react";
import { Monitor, Server, Cloud, Zap } from "lucide-react";
import SkillBar from "./SkillBar";
import { frontendSkills, backendSkills, devOpsSkills, specialtySkills } from "../data/skills";

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-divider"></div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          A comprehensive overview of my technical skills and proficiency levels across different domains of software development.
        </p>
        
        <div className="grid-container gap-y-10">
          {/* Frontend Skills */}
          <div className="md:col-span-6 border-t border-l border-r border-border">
            <div className="p-6 flex items-center">
              <Monitor className="h-5 w-5 text-primary mr-3" />
              <h3 className="text-lg font-medium">Frontend Development</h3>
            </div>
            
            <div className="px-6 pb-6 space-y-6">
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
          <div className="md:col-span-6 border-t border-l border-r md:border-l-0 border-border">
            <div className="p-6 flex items-center">
              <Server className="h-5 w-5 text-primary mr-3" />
              <h3 className="text-lg font-medium">Backend Development</h3>
            </div>
            
            <div className="px-6 pb-6 space-y-6">
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
          <div className="md:col-span-6 border border-border">
            <div className="p-6 flex items-center">
              <Cloud className="h-5 w-5 text-primary mr-3" />
              <h3 className="text-lg font-medium">Cloud & DevOps</h3>
            </div>
            
            <div className="px-6 pb-6 space-y-6">
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
          <div className="md:col-span-6 border border-t-0 md:border-t border-l border-r border-b md:border-l-0 border-border">
            <div className="p-6 flex items-center">
              <Zap className="h-5 w-5 text-primary mr-3" />
              <h3 className="text-lg font-medium">Specialty Skills</h3>
            </div>
            
            <div className="px-6 pb-6 space-y-6">
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
