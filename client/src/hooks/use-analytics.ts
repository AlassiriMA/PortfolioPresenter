import { useEffect } from 'react';

/**
 * Client-side analytics tracking hook
 * @param page Current page path (defaults to current path)
 */
export function useAnalytics(page?: string) {
  useEffect(() => {
    // Skip tracking during development
    if (import.meta.env.DEV) {
      return;
    }
    
    const currentPage = page || window.location.pathname || '/';
    const pageTitle = document.title;
    const referrer = document.referrer;
    
    // Check if we've recently tracked this page to avoid duplicate counts
    const TRACKING_INTERVAL = 30 * 60 * 1000; // 30 minutes in milliseconds
    const lastTrackedTime = localStorage.getItem(`lastTracked_${currentPage}`);
    const lastTrackedTitle = localStorage.getItem(`lastTrackedTitle_${currentPage}`);
    const now = new Date().getTime();
    
    // Only track if:
    // 1. We haven't tracked this page yet, or
    // 2. It's been more than the tracking interval since we last tracked it, or
    // 3. The page title has changed (indicating content changes)
    if (
      !lastTrackedTime || 
      now - parseInt(lastTrackedTime || '0') > TRACKING_INTERVAL ||
      lastTrackedTitle !== pageTitle
    ) {
      // Track the page view
      trackPageView(currentPage, pageTitle, referrer);
      
      // Update localStorage with tracking info
      localStorage.setItem(`lastTracked_${currentPage}`, now.toString());
      localStorage.setItem(`lastTrackedTitle_${currentPage}`, pageTitle);
    }
  }, [page]);
}

/**
 * Send page view data to the server
 */
function trackPageView(page: string, title?: string, referrer?: string) {
  try {
    // Using plain fetch API to track views
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
        title,
        referrer
      }),
    };
    
    // Using fetch directly as a fire-and-forget operation
    // We don't await the response since we don't want to block rendering
    fetch('/api/track', requestOptions)
      .catch(error => {
        console.debug('Analytics tracking error:', error);
      });
  } catch (error) {
    // Silently fail - analytics should never break the app
    console.debug('Analytics tracking error:', error);
  }
}