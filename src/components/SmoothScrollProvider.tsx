"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // Smoothing factor — 0 = no smoothing, 1 = max smoothing
      // 0.1 gives a premium, weighty feel without being sluggish
      lerp: 0.1,

      // Scroll multiplier — how far each wheel tick scrolls
      wheelMultiplier: 1.0,

      // Touch multiplier for mobile momentum
      touchMultiplier: 1.5,

      // Use smooth wheel on touch devices
      smoothWheel: true,

      // Prevent overscroll bounce that interrupts flow
      overscroll: false,
    });

    // Sync Lenis RAF loop with the browser's animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Make lenis accessible globally for anchor link clicks
    // so Next.js <Link href="#section"> scrolls smoothly
    (window as unknown as Record<string, unknown>).lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
