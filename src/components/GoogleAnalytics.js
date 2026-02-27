"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics({ measurementId }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || !pathname) return;

    const queryString =
      typeof window !== "undefined" ? window.location.search : "";
    const url = `${pathname}${queryString}`;

    window.gtag?.("config", measurementId, {
      page_path: url,
    });
  }, [measurementId, pathname]);

  return null;
}
