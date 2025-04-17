import React from "react";
import { Clock, Globe, Smile } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Mohammad A. Alassiri</h3>
              <p className="text-gray-600 mb-4">
                I'm a passionate Full Stack Developer at Lenador Systems, specializing in building robust web applications with modern technologies.
              </p>
              <p className="text-gray-600 mb-4">
                With experience in both frontend and backend development, I create seamless user experiences while ensuring scalable, maintainable code architecture.
              </p>
              <p className="text-gray-600">
                I'm constantly exploring new technologies and methodologies to enhance my skills and deliver exceptional digital solutions.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 p-[2px]">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-7xl font-bold gradient-text">MA</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 gradient-bg text-white p-3 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold">Experience</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>3+ Years Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>15+ Projects Completed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Current: Lenador Systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold">Languages</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>English (Fluent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Arabic (Native)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>French (Basic)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center mr-3">
                  <Smile className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold">Interests</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Software Architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cloud Computing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>AI & Machine Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
