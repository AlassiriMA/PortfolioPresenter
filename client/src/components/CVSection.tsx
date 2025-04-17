import React from "react";
import { FileText, Download, Award, BookOpen, Code } from "lucide-react";

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="section">
      <div className="container">
        <h2 className="section-title">CV & Qualifications</h2>
        <div className="section-divider"></div>
        <p className="text-muted-foreground max-w-2xl mb-12">
          An overview of my professional journey, expertise, and educational background. Download my full CV for complete details.
        </p>
        
        <div className="grid-container gap-y-8">
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Award className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Professional Experience</h3>
            </div>
            <ul className="text-sm space-y-4">
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Operations Manager</span>
                <span className="text-muted-foreground">Lenador Systems | 2020 - Present</span>
              </li>
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Full-Stack Developer</span>
                <span className="text-muted-foreground">Freelance | 2020 - Present</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <BookOpen className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Education</h3>
            </div>
            <ul className="text-sm space-y-4">
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Knowledge Engineering</span>
                <span className="text-muted-foreground">Maastricht University | Completed Coursework</span>
              </li>
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Business Administration</span>
                <span className="text-muted-foreground">Abu Dhabi University | Completed Coursework</span>
              </li>
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Associate of Science in Tourism</span>
                <span className="text-muted-foreground">The Intermediate Institute of Tourism & Hotel Management</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <Code className="h-5 w-5 text-primary mr-2" />
              <h3 className="text-lg font-medium">Certifications</h3>
            </div>
            <ul className="text-sm space-y-4">
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">CS50's Introduction to Computer Science</span>
                <span className="text-muted-foreground">Harvard University (edX)</span>
              </li>
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Google Cloud Certified Associate Cloud Engineer</span>
                <span className="text-muted-foreground">Google</span>
              </li>
              <li className="border-l border-border pl-4 py-1">
                <span className="font-medium block">Introduction to Gen AI</span>
                <span className="text-muted-foreground">Microsoft</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/mohammad-alassiri-cv.pdf" 
            download
            className="inline-flex items-center bg-secondary text-foreground px-6 py-3 text-sm font-medium border border-transparent hover:border-primary transition-colors"
          >
            <FileText className="h-4 w-4 mr-2" />
            Download Full CV
            <Download className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;