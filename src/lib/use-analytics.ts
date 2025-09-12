"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    window.gtag?.("config", "G-EKX1W7G2KJ", { page_path: url });
  }, [pathname, searchParams]);
}
