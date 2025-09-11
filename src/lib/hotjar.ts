"use client";

import { useEffect } from "react";
import Hotjar from "@hotjar/browser";
import { usePathname } from "next/navigation";

const siteId = 6516561;   // Your Hotjar site ID
const hotjarVersion = 6;  // Keep as 6 unless Hotjar changes this

export function useHotjar() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Hotjar only once in production
    if (process.env.NODE_ENV === "production" && !window.hj) {
      Hotjar.init(siteId, hotjarVersion);
    }
  }, []);

  // Track route changes in production
  useEffect(() => {
    if (process.env.NODE_ENV === "production" && window.hj) {
      window.hj("stateChange", pathname);
    }
  }, [pathname]);
}
