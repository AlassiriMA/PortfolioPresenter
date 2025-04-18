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
  
  // Get the appropriate background color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-primary/10 text-primary';
      case 'backend':
        return 'bg-primary/10 text-primary';
      case 'database':
        return 'bg-primary/10 text-primary';
      case 'devops':
        return 'bg-primary/10 text-primary';
      case 'cloud':
        return 'bg-primary/10 text-primary';
      case 'ai-ml':
        return 'bg-primary/10 text-primary';
      case 'mobile':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 ${className}`}>
      {filteredTechs.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className={`flex items-center justify-center px-3 py-2 border-2 border-accent ${getCategoryColor(tech.category)} 
            shadow-md rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg 
            hover:border-accent/80 relative text-center h-[42px]`}
          onMouseEnter={() => handleTechHover(tech.name)}
          onMouseLeave={handleTechLeave}
        >
          <span className="whitespace-nowrap font-bold">{tech.name}</span>
          
          {/* Tooltip that shows on hover */}
          {hoveredTech === tech.name && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 
              bg-white border-2 border-accent rounded-lg shadow-xl p-4 z-10 w-64">
              <div className="flex flex-col">
                <span className="font-black text-primary text-lg">{tech.name}</span>
                <span className="text-xs uppercase gold-text mb-2 font-bold">{tech.category.replace('-', ' & ')}</span>
                <span className="text-sm text-gray-700">{tech.description}</span>
              </div>
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 rotate-45 
                w-4 h-4 bg-white border-r-2 border-b-2 border-accent"></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechGrid;