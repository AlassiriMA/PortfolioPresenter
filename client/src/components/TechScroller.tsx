import React, { useState } from 'react';
import { allTechnologies } from '../data/technologies';

interface TechScrollerProps {
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const TechScroller: React.FC<TechScrollerProps> = ({ 
  direction = 'left', 
  speed = 30,
  className = ''
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  
  // Get a subset of technologies for this row
  const technologies = allTechnologies.slice(
    direction === 'left' ? 0 : Math.floor(allTechnologies.length / 2), 
    direction === 'left' ? Math.floor(allTechnologies.length / 2) : allTechnologies.length
  );

  const handleTechHover = (techName: string) => {
    setHoveredTech(techName);
  };

  const handleTechLeave = () => {
    setHoveredTech(null);
  };
  
  // Return the appropriate design based on category
  const getTechClass = (category: string) => {
    const baseClass = "bg-white border-accent"; // Common styles
    
    switch (category) {
      case 'frontend':
        return `${baseClass} text-primary`;
      case 'backend':
        return `${baseClass} text-primary`;
      case 'database':
        return `${baseClass} text-primary`;
      case 'devops':
        return `${baseClass} text-primary`;
      case 'cloud':
        return `${baseClass} text-primary`;
      case 'ai-ml':
        return `${baseClass} text-primary`;
      case 'mobile':
        return `${baseClass} text-primary`;
      case 'other':
        return `${baseClass} text-primary`;
      default:
        return `${baseClass} text-primary`;
    }
  };

  const animationDuration = `${Math.max(40, technologies.length * (speed / 10))}s`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration,
          animationPlayState: hoveredTech ? 'paused' : 'running',
        }}
      >
        {/* Double the items to create a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`inline-flex px-4 py-2 border-2 ${getTechClass(tech.category)} shadow-md rounded-full cursor-pointer transition-all duration-200 transform hover:scale-110 hover:border-accent hover:shadow-lg relative`}
            onMouseEnter={() => handleTechHover(tech.name)}
            onMouseLeave={handleTechLeave}
          >
            <span className="whitespace-nowrap font-bold">{tech.name}</span>
            
            {/* Tooltip that shows on hover */}
            {hoveredTech === tech.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white border-2 border-accent rounded-lg shadow-xl p-4 z-10 w-64">
                <div className="flex flex-col">
                  <span className="font-black text-primary text-lg">{tech.name}</span>
                  <span className="text-xs uppercase gold-text mb-2 font-bold">{tech.category.replace('-', ' & ')}</span>
                  <span className="text-sm text-gray-700">{tech.description}</span>
                </div>
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r-2 border-b-2 border-accent"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroller;