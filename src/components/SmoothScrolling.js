"use client";

import { useEffect } from "react";

const SmoothScrolling = () => {
  useEffect(() => {
    const enableSmoothScroll =
      window.matchMedia("(min-width: 1024px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enableSmoothScroll) return;

    let lenis = null;
    let gsapInstance = null;
    let ticker = null;
    let destroyed = false;

    const setupSmoothScroll = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (destroyed) return;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis();
      gsapInstance = gsap;

      lenis.on("scroll", ScrollTrigger.update);

      ticker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    };

    setupSmoothScroll();

    return () => {
      destroyed = true;
      if (gsapInstance && ticker) {
        gsapInstance.ticker.remove(ticker);
      }
      lenis?.destroy();
    };
  }, []);

  return null;
};

export default SmoothScrolling;
