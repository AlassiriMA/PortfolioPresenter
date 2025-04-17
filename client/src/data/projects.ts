import React from "react";
import { ShoppingBasket, MessageSquare, BarChart3, Database } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
  icon: React.ReactNode;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TermPOS",
    description: "A modern terminal point of sale system for retail businesses. Features include inventory management, sales tracking, and employee management.",
    tech: ["React", "Node.js"],
    demo: "#",
    github: "#",
    icon: React.createElement(Database, { className: "w-24 h-24 text-gray-400" })
  },
  {
    id: 2,
    title: "Green Market",
    description: "An e-commerce platform for sustainable and eco-friendly products. Includes user authentication, shopping cart, and payment processing.",
    tech: ["Next.js", "MongoDB"],
    demo: "#",
    github: "#",
    icon: React.createElement(ShoppingBasket, { className: "w-24 h-24 text-gray-400" })
  },
  {
    id: 3,
    title: "Social Media Manager",
    description: "AI-powered social media management tool for content scheduling, analytics, and audience engagement across multiple platforms.",
    tech: ["React", "Express"],
    demo: "#",
    github: "#",
    icon: React.createElement(MessageSquare, { className: "w-24 h-24 text-gray-400" })
  },
  {
    id: 4,
    title: "DeFi Trading Bot",
    description: "Automated trading bot for decentralized finance markets. Features algorithmic trading strategies, market analysis, and secure wallet integration.",
    tech: ["Node.js", "Web3"],
    demo: "#",
    github: "#",
    icon: React.createElement(BarChart3, { className: "w-24 h-24 text-gray-400" })
  }
];
