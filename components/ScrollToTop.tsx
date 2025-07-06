"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Log for debugging
    console.log("ScrollToTop: Route changed to", pathname);

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
  }, [pathname, searchParams]);

  return null;
}

export default ScrollToTop;
