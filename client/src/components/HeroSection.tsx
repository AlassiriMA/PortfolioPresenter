import React from "react";
import { Code, Layers, Layout, Cloud } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-bl-full -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-gray-100 rounded-full font-medium text-sm mb-6">
              <span className="gradient-text">FULL STACK DEVELOPER</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Crafting <span className="gradient-text">Smart</span> Digital Solutions with <span className="gradient-text">Code</span> & Precision
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Building modern web applications with a focus on performance, accessibility, and user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="gradient-bg text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition-all"
              >
                VIEW WORK
              </a>
              <a 
                href="#contact" 
                className="bg-white border-2 border-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:translate-y-[-2px] transition-all"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white rounded-2xl border-2 border-gray-900 p-6 shadow-xl">
              <div className="absolute -top-4 -right-4 w-20 h-20 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                <Code className="h-10 w-10 text-white" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-blue-500 transition-all">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-medium">React</h3>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-purple-500 transition-all">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 448 512" 
                      className="w-8 h-8 text-purple-500 fill-current"
                    >
                      <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
                    </svg>
                  </div>
                  <h3 className="font-medium">Node.js</h3>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-blue-500 transition-all">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Layout className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-medium">UI/UX</h3>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-purple-500 transition-all">
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                    <Cloud className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-medium">Cloud</h3>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl border-2 border-gray-900 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
