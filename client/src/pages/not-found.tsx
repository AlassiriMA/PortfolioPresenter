import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-secondary">
      <div className="bg-white border-l-8 border-primary p-10 shadow-xl max-w-2xl w-full">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="text-7xl font-black text-primary">4</span>
            <span className="text-7xl font-black text-primary ml-[-5px]">0</span>
            <span className="text-7xl font-black text-primary ml-[-5px]">4</span>
          </div>
          
          <h1 className="text-5xl font-black tracking-tight text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved to another location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="flex items-center justify-center accent-bg px-6 py-3 font-medium">
              <Home className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center justify-center bg-white border border-primary px-6 py-3 font-medium hover:bg-primary/5 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-muted-foreground">
          Need assistance? <a href="/#contact" className="text-primary font-medium hover:underline">Contact Mohammad</a> for help.
        </p>
      </div>
    </div>
  );
}
