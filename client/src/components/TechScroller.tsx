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
  
  const getTechColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-50 border-primary';
      case 'backend':
        return 'bg-green-50 border-primary';
      case 'database':
        return 'bg-indigo-50 border-primary';
      case 'devops':
        return 'bg-orange-50 border-primary';
      case 'cloud':
        return 'bg-cyan-50 border-primary';
      case 'ai-ml':
        return 'bg-purple-50 border-primary';
      case 'mobile':
        return 'bg-pink-50 border-primary';
      case 'other':
        return 'bg-gray-50 border-primary';
      default:
        return 'bg-gray-50 border-primary';
    }
  };

  const animationDuration = `${Math.max(20, technologies.length * (speed / 5))}s`;

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
            className={`inline-flex px-4 py-2 border-2 ${getTechColor(tech.category)} shadow-sm rounded cursor-pointer transition-all duration-200 transform hover:scale-110 hover:border-accent relative`}
            onMouseEnter={() => handleTechHover(tech.name)}
            onMouseLeave={handleTechLeave}
          >
            <span className="text-gray-800 whitespace-nowrap font-bold">{tech.name}</span>
            
            {/* Tooltip that shows on hover */}
            {hoveredTech === tech.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white border-2 border-accent rounded shadow-lg p-4 z-10 w-64">
                <div className="flex flex-col">
                  <span className="font-black text-primary text-lg">{tech.name}</span>
                  <span className="text-xs uppercase text-gray-500 mb-2 font-bold">{tech.category.replace('-', '/')}</span>
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