import React, { useState } from 'react';
import { allTechnologies } from '@/data/technologies';

interface TechGridProps {
  category?: string;
  limit?: number;
  className?: string;
}

const TechGrid: React.FC<TechGridProps> = ({ 
  category,
  limit = 32,
  className = ''
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  // Filter technologies by category if provided
  const filteredTechs = category 
    ? allTechnologies.filter(tech => tech.category === category).slice(0, limit)
    : allTechnologies.slice(0, limit);
  
  const handleTechHover = (techName: string) => {
    setHoveredTech(techName);
  };

  const handleTechLeave = () => {
    setHoveredTech(null);
  };
  
  // Get the appropriate styling based on category
  const getTechStyles = (category: string) => {
    const baseClasses = "border-2 shadow-md rounded-md cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg";
    
    switch (category) {
      case 'frontend':
        return `${baseClasses} bg-primary/5 text-primary border-primary/30 hover:border-primary`;
      case 'backend':
        return `${baseClasses} bg-primary/5 text-primary border-primary/30 hover:border-primary`;
      case 'database':
        return `${baseClasses} bg-primary/5 text-primary border-primary/30 hover:border-primary`;
      case 'devops':
        return `${baseClasses} bg-accent/5 gold-text border-accent/30 hover:border-accent`;
      case 'cloud':
        return `${baseClasses} bg-accent/5 gold-text border-accent/30 hover:border-accent`;
      case 'ai-ml':
        return `${baseClasses} bg-accent/5 gold-text border-accent/30 hover:border-accent`;
      case 'mobile':
        return `${baseClasses} bg-primary/5 text-primary border-primary/30 hover:border-primary`;
      default:
        return `${baseClasses} bg-primary/5 text-primary border-primary/30 hover:border-primary`;
    }
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-3 ${className}`}>
      {filteredTechs.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className={`flex items-center justify-center px-3 py-2 ${getTechStyles(tech.category)} relative text-center h-[40px]`}
          onMouseEnter={() => handleTechHover(tech.name)}
          onMouseLeave={handleTechLeave}
        >
          <span className="whitespace-nowrap font-bold text-sm">{tech.name}</span>
          
          {/* Tooltip that shows on hover */}
          {hoveredTech === tech.name && (
            <div className="absolute -bottom-1 left-1/2 transform translate-y-full -translate-x-1/2
              bg-white border-2 border-accent rounded-lg shadow-xl p-4 z-10 w-64">
              <div className="flex flex-col">
                <span className="font-black text-primary text-lg">{tech.name}</span>
                <span className="text-xs uppercase gold-text mb-2 font-bold">{tech.category.replace('-', ' & ')}</span>
                <span className="text-sm text-gray-700">{tech.description}</span>
              </div>
              <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 -rotate-45 
                w-4 h-4 bg-white border-l-2 border-t-2 border-accent"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechGrid;