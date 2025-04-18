import React, { useCallback } from "react";
import { Download, FileText } from "lucide-react";
import cvPdfPath from "@assets/alassiri_cv_apr_25.pdf";

const CVSection: React.FC = () => {
  // Track CV download for analytics
  const trackCVDownload = useCallback(() => {
    try {
      // Send analytics event for CV download
      const gtag = (window as any).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'cv_download', {
          'event_category': 'engagement',
          'event_label': 'CV Download',
        });
      }
    } catch (error) {
      // Silent fail for analytics
      console.debug('Analytics tracking failed silently');
    }
  }, []);

  return (
    <section id="cv" className="section bg-white">
      <div className="container max-w-7xl">
        <h2 className="section-title">Curriculum Vitae</h2>
        <div className="section-divider"></div>
        
        <div className="grid-container">
          <div className="md:col-span-6">
            <h3 className="text-2xl font-black mb-6 text-primary">Professional Summary</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Full Stack Developer and technology enthusiast with experience in building modern web applications, 
              cloud infrastructure solutions, and integrating AI capabilities into software products.
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Specialized in JavaScript/TypeScript ecosystem and React-based applications, 
              with a strong understanding of backend development using Node.js, Express, and databases 
              like PostgreSQL and MongoDB.
            </p>
            <p className="text-xl text-muted-foreground">
              Passionate about <span className="font-black text-primary">clean code</span>, 
              <span className="font-black gold-text"> automation</span>, and 
              <span className="font-black text-primary"> intuitive user experiences</span>.
            </p>
          </div>
          
          <div className="md:col-span-6 mt-10 md:mt-0">
            <div className="border-2 border-accent p-8 h-full flex flex-col justify-between bg-white shadow-lg">
              <div>
                <h3 className="text-2xl font-black mb-6 text-primary">Download CV</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  For a more detailed overview of my experience, skills, and qualifications, 
                  download my complete curriculum vitae in PDF format.
                </p>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href={cvPdfPath}
                  download="Mohammad_Alassiri_CV.pdf"
                  onClick={trackCVDownload}
                  className="inline-flex items-center px-10 py-5 gold-bg gap-3 hover:opacity-90 transition-opacity shadow-md"
                  aria-label="Download CV"
                  onContextMenu={(e) => {
                    // Right-click tracking
                    trackCVDownload();
                  }}
                >
                  <Download className="h-6 w-6" />
                  <span className="font-black text-lg">Download CV</span>
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