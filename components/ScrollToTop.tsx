import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Log for debugging
    console.log("ScrollToTop: Route changed to", location.pathname);

    // Force immediate scroll to top
    window.scrollTo(0, 0);

    // Also ensure all scrollable elements are reset
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Force a re-scroll after React renders
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log("ScrollToTop: Forced scroll after timeout");
    }, 0);

    // Another attempt after potential animations
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default ScrollToTop;
