import React from "react";
import { Globe, BookOpenCheck, Bot, BarChart3 } from "lucide-react";

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
    title: "Portfolio Website",
    description: "A personal showcase with 10+ demo apps using React, TailwindCSS, TypeScript, Express & PostgreSQL. Features include a dynamic dashboard, Drizzle ORM integration, and Oracle VPS deployment with CI/CD.",
    tech: ["React", "TypeScript", "PostgreSQL"],
    demo: "https://alassiri.nl",
    github: "#",
    icon: React.createElement(Globe, { className: "h-10 w-10 text-primary" })
  },
  {
    id: 2,
    title: "AI English Tutor",
    description: "AI-powered language tutor that provides conversational practice and feedback for English learners. Uses natural language processing to give personalized guidance and corrections.",
    tech: ["OpenAI", "Next.js", "TailwindCSS"],
    demo: "#",
    github: "#",
    icon: React.createElement(BookOpenCheck, { className: "h-10 w-10 text-primary" })
  },
  {
    id: 3,
    title: "Statistical Arbitrage Trading Tool",
    description: "Advanced tool for analyzing and executing market-neutral DeFi/CeFi trading strategies. Automated on Telegram and AWS to identify and capitalize on price discrepancies.",
    tech: ["Python", "AWS", "Trading APIs"],
    demo: "#",
    github: "#",
    icon: React.createElement(BarChart3, { className: "h-10 w-10 text-primary" })
  },
  {
    id: 4,
    title: "DYDX Pairs Trading Bot",
    description: "Custom-built trading bot that monitors and executes trades on correlated pairs with price deviations. Integrates with dYdX exchange API and includes risk management features.",
    tech: ["Python", "AWS", "Web3"],
    demo: "#",
    github: "#",
    icon: React.createElement(Bot, { className: "h-10 w-10 text-primary" })
  }
];
