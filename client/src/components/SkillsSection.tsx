import React from "react";
import { Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { FaBrain } from "react-icons/fa";
import { technologiesByCategory } from "@/data/technologies";
import TechTabs from "./TechTabs";

const categories = [
  { 
    title: "Frontend", 
    icon: <Layers className="w-8 h-8 text-white" />, 
    count: technologiesByCategory.frontend.length,
    bgColor: "bg-primary"
  },
  { 
    title: "Backend", 
    icon: <Server className="w-8 h-8 text-white" />, 
    count: technologiesByCategory.backend.length,
    bgColor: "bg-primary" 
  },
  { 
    title: "Database", 
    icon: <Database className="w-8 h-8 text-white" />, 
    count: technologiesByCategory.database.length,
    bgColor: "bg-primary" 
  },
  { 
    title: "DevOps", 
    icon: <Terminal className="w-8 h-8 text-white" />, 
    count: technologiesByCategory.devops.length,
    bgColor: "bg-primary" 
  },
  { 
    title: "Cloud", 
    icon: <Globe className="w-8 h-8 text-white" />, 
    count: technologiesByCategory.cloud.length,
    bgColor: "bg-primary" 
  },
  { 
    title: "AI & ML", 
    icon: <FaBrain className="w-7 h-7 text-white" />, 
    count: technologiesByCategory["ai-ml"].length,
    bgColor: "bg-primary" 
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container max-w-7xl">
        <h2 className="section-title">Technology Stack</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 flex flex-col items-center text-center border-2 border-accent shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-5`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-black mb-2 text-primary">{category.title}</h3>
              <p className="text-lg gold-text font-bold">{category.count} <span className="text-muted-foreground font-normal text-base">Technologies</span></p>
            </div>
          ))}
        </div>
        
        <div className="mb-16 mt-24 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg shadow-md border border-accent">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-primary">
              Expertise in <span className="gold-text">100+</span> Technologies
            </h3>
            <p className="text-muted-foreground text-lg mt-4">
              Browse my technology expertise by category
            </p>
          </div>
          
          <TechTabs />
        </div>
        
        <div className="text-center mt-16 p-6">
          <p className="text-2xl mx-auto max-w-3xl font-medium">
            My expertise spans across multiple domains, from 
            <span className="font-black text-primary"> full-stack development</span> to
            <span className="font-black gold-text"> cloud architecture</span> and
            <span className="font-black text-primary"> artificial intelligence</span> integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
