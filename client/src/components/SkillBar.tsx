import React from "react";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, percentage }) => {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{level}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
