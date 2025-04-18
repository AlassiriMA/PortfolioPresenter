import React, { useState } from 'react';
import { allTechnologies } from '@/data/technologies';

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
  
  // Create specific tech subsets to avoid overwhelming the display
  const frontendTechs = allTechnologies.filter(tech => tech.category === 'frontend').slice(0, 15);
  const backendTechs = allTechnologies.filter(tech => tech.category === 'backend').slice(0, 15);
  const databaseTechs = allTechnologies.filter(tech => tech.category === 'database').slice(0, 8);
  const devopsTechs = allTechnologies.filter(tech => tech.category === 'devops').slice(0, 8);
  const cloudTechs = allTechnologies.filter(tech => tech.category === 'cloud').slice(0, 8);
  const aimlTechs = allTechnologies.filter(tech => tech.category === 'ai-ml').slice(0, 10);
  
  // Combine technologies based on direction
  const technologies = direction === 'left'
    ? [...frontendTechs, ...backendTechs, ...databaseTechs]
    : [...devopsTechs, ...cloudTechs, ...aimlTechs];

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
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`flex gap-5 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration: `${technologies.length * 2}s`,
          animationPlayState: hoveredTech ? 'paused' : 'running',
        }}
      >
        {/* Double the items to create a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className={`inline-flex items-center px-4 py-2 border-2 border-accent ${getCategoryColor(tech.category)} shadow-md rounded-full cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-accent/80 relative`}
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