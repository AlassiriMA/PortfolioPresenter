import React from "react";
import TechScroller from "./TechScroller";
import { Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { FaBrain } from "react-icons/fa";
import { technologiesByCategory } from "@/data/technologies";

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const categories: CategoryProps[] = [
  { title: "Frontend", icon: <Layers className="w-7 h-7 text-primary" />, count: technologiesByCategory.frontend.length, color: "border-blue-300" },
  { title: "Backend", icon: <Server className="w-7 h-7 text-primary" />, count: technologiesByCategory.backend.length, color: "border-green-300" },
  { title: "Database", icon: <Database className="w-7 h-7 text-primary" />, count: technologiesByCategory.database.length, color: "border-indigo-300" },
  { title: "DevOps", icon: <Terminal className="w-7 h-7 text-primary" />, count: technologiesByCategory.devops.length, color: "border-orange-300" },
  { title: "Cloud", icon: <Globe className="w-7 h-7 text-primary" />, count: technologiesByCategory.cloud.length, color: "border-cyan-300" },
  { title: "AI & ML", icon: <FaBrain className="w-6 h-6 text-primary" />, count: technologiesByCategory["ai-ml"].length, color: "border-purple-300" },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container max-w-7xl">
        <h2 className="section-title">Technology Stack</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`border-2 ${category.color} bg-white p-7 flex flex-col items-center text-center hover:border-accent transition-colors shadow-md`}
            >
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-muted-foreground">{category.count} Technologies</p>
            </div>
          ))}
        </div>
        
        <div className="mb-16 mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-primary">
              Expert in <span className="gold-text">100+</span> Technologies & Frameworks
            </h3>
            <p className="text-muted-foreground text-lg mt-3">
              Hover over any technology to learn more about my expertise
            </p>
          </div>
          
          <div className="bg-white border border-border p-6 shadow-md rounded">
            <div className="h-16 overflow-hidden">
              <TechScroller direction="left" speed={25} className="mb-8" />
            </div>
            
            <div className="h-16 overflow-hidden mt-8">
              <TechScroller direction="right" speed={20} />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <p className="text-xl mx-auto max-w-3xl">
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
