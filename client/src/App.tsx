import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAnalytics } from "@/hooks/use-analytics"; 
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function Router() {
  const [location] = useLocation();
  
  // Handle hash-based navigation for SPA with GitHub Pages
  useEffect(() => {
    // If we have a hash in the URL but no actual path, rewrite to use the Home component
    if (location === "/" && window.location.hash) {
      document.title = `${window.location.hash.slice(1).charAt(0).toUpperCase() + window.location.hash.slice(2)} | Mohammad A. Alassiri`;
    } else if (location === "/") {
      document.title = "Mohammad A. Alassiri | Full Stack Developer";
    }
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Track page views at application level
  useAnalytics();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
