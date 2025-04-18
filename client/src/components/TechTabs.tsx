import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import TechGrid from './TechGrid';
import { Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { FaBrain } from "react-icons/fa";

const categories = [
  { 
    id: 'all',
    title: "All", 
    icon: null
  },
  { 
    id: 'frontend',
    title: "Frontend", 
    icon: <Layers className="w-4 h-4 mr-2" />
  },
  { 
    id: 'backend',
    title: "Backend", 
    icon: <Server className="w-4 h-4 mr-2" />
  },
  { 
    id: 'database',
    title: "Database", 
    icon: <Database className="w-4 h-4 mr-2" />
  },
  { 
    id: 'devops',
    title: "DevOps", 
    icon: <Terminal className="w-4 h-4 mr-2" />
  },
  { 
    id: 'cloud',
    title: "Cloud", 
    icon: <Globe className="w-4 h-4 mr-2" />
  },
  { 
    id: 'ai-ml',
    title: "AI & ML", 
    icon: <FaBrain className="w-4 h-4 mr-2" />
  },
];

const TechTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Tabs 
      defaultValue="all" 
      className="w-full"
      onValueChange={setActiveTab}
    >
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 gap-1">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="flex items-center justify-center"
            >
              {category.icon}
              <span>{category.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id} className="mt-0">
          <div className="p-4 bg-white border-2 border-accent shadow-lg rounded-lg">
            <TechGrid 
              category={category.id === 'all' ? undefined : category.id} 
              limit={category.id === 'all' ? 30 : 24}
            />
          </div>
          
          {activeTab === category.id && category.id !== 'all' && (
            <p className="text-center mt-4 text-muted-foreground text-sm">
              Showing expertise in {category.title} technologies. 
              <span className="text-primary font-medium"> Hover over any technology to see more details.</span>
            </p>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TechTabs;