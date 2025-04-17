import React from "react";
import TechScroller from "./TechScroller";
import { Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { FaBrain } from "react-icons/fa";
import { technologiesByCategory } from "@/data/technologies";

interface CategoryProps {
  title: string;
  icon: React.ReactNode;
  count: number;
}

const categories: CategoryProps[] = [
  { title: "Frontend", icon: <Layers className="w-6 h-6 text-primary" />, count: technologiesByCategory.frontend.length },
  { title: "Backend", icon: <Server className="w-6 h-6 text-primary" />, count: technologiesByCategory.backend.length },
  { title: "Database", icon: <Database className="w-6 h-6 text-primary" />, count: technologiesByCategory.database.length },
  { title: "DevOps", icon: <Terminal className="w-6 h-6 text-primary" />, count: technologiesByCategory.devops.length },
  { title: "Cloud", icon: <Globe className="w-6 h-6 text-primary" />, count: technologiesByCategory.cloud.length },
  { title: "AI & ML", icon: <FaBrain className="w-5 h-5 text-primary" />, count: technologiesByCategory["ai-ml"].length },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container max-w-7xl">
        <h2 className="section-title">My Technology Stack</h2>
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="border border-border bg-white p-6 flex flex-col items-center text-center hover:border-primary transition-colors"
            >
              <div className="mb-3">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium mb-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.count} Technologies</p>
            </div>
          ))}
        </div>
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium">Over 100 Technologies & Frameworks</h3>
            <p className="text-muted-foreground text-lg">Hover over any technology to learn more</p>
          </div>
          <div className="py-6 overflow-hidden">
            <TechScroller direction="left" speed={40} className="mb-8" />
            <TechScroller direction="right" speed={35} />
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl">
            My expertise spans across multiple domains, including full-stack web development, cloud infrastructure,
            containerization, and integrating artificial intelligence solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
