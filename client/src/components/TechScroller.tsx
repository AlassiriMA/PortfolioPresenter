import React, { useState } from 'react';
import allTechnologies from '../data/technologies';

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
    direction === 'left' ? 0 : allTechnologies.length / 2, 
    direction === 'left' ? allTechnologies.length / 2 : allTechnologies.length
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
        return 'bg-blue-100 border-blue-300';
      case 'backend':
        return 'bg-green-100 border-green-300';
      case 'database':
        return 'bg-indigo-100 border-indigo-300';
      case 'devops':
        return 'bg-orange-100 border-orange-300';
      case 'cloud':
        return 'bg-cyan-100 border-cyan-300';
      case 'ai-ml':
        return 'bg-purple-100 border-purple-300';
      case 'mobile':
        return 'bg-pink-100 border-pink-300';
      case 'other':
        return 'bg-gray-100 border-gray-300';
      default:
        return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex gap-4 animate-scroll-${direction}`}
        style={{
          animationDuration: `${technologies.length * speed}s`,
          animationPlayState: hoveredTech ? 'paused' : 'running',
        }}
      >
        {/* Double the items to create a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`flex-shrink-0 px-4 py-2 border ${getTechColor(tech.category)} rounded-md cursor-pointer transition-all duration-200 transform hover:scale-110 relative`}
            onMouseEnter={() => handleTechHover(tech.name)}
            onMouseLeave={handleTechLeave}
          >
            <span className="text-gray-800 whitespace-nowrap font-medium">{tech.name}</span>
            
            {/* Tooltip that shows on hover */}
            {hoveredTech === tech.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-white border border-gray-200 rounded-md shadow-lg p-3 z-10 w-64">
                <div className="flex flex-col">
                  <span className="font-bold text-primary">{tech.name}</span>
                  <span className="text-xs uppercase text-gray-500 mb-1">{tech.category.replace('-', '/')}</span>
                  <span className="text-sm text-gray-700">{tech.description}</span>
                </div>
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-gray-200"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroller;