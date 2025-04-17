import React from "react";
import { ArrowDown, FileText } from "lucide-react";

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="section bg-white">
      <div className="container max-w-7xl">
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container">
          <div className="md:col-span-6">
            <h3 className="text-2xl font-medium mb-6">Professional Summary</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Full Stack Developer and technology enthusiast with experience in building modern web applications, 
              cloud infrastructure solutions, and integrating AI capabilities into software products.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Specialized in JavaScript/TypeScript ecosystem and React-based applications, 
              with a strong understanding of backend development using Node.js, Express, and databases 
              like PostgreSQL and MongoDB.
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about clean code, automation, and creating intuitive user experiences.
            </p>
          </div>
          
          <div className="md:col-span-6 mt-10 md:mt-0">
            <div className="border border-border p-8 h-full flex flex-col justify-between bg-secondary/50">
              <div>
                <h3 className="text-2xl font-medium mb-6">Download CV</h3>
                <p className="text-muted-foreground mb-8">
                  For a more detailed overview of my experience, skills, and qualifications, 
                  download my complete curriculum vitae in PDF format.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="/assets/alassiri_cv_apr_25.pdf" 
                  download 
                  className="inline-flex items-center px-8 py-4 accent-bg gap-2 hover:opacity-90 transition-opacity"
                >
                  <FileText className="h-5 w-5" />
                  <span className="font-medium">Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;