import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Placeholder for Google Analytics or other analytics services
    // When ready to implement, add your tracking ID and initialize here
    
    // Example for Google Analytics 4:
    // window.gtag?.('config', 'GA_MEASUREMENT_ID', {
    //   page_path: location.pathname + location.search,
    // });

    // For now, log page views to console (development only)
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics: Page view", location.pathname);
    }

    // Track page view timing for performance monitoring
    if (typeof window !== "undefined" && "performance" in window) {
      const navTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navTiming) {
        console.log("Page Load Time:", navTiming.loadEventEnd - navTiming.fetchStart, "ms");
      }
    }
  }, [location]);

  return null;
};

export default Analytics;
