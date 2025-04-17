import React from "react";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, percentage }) => {
  return (
    <div className="skill-item">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
