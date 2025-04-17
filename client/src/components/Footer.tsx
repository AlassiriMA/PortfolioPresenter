import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="font-bold text-xl gradient-text">
              MA<span className="text-white">.</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {new Date().getFullYear()} Mohammad A. Alassiri. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
