// components/ScrollProgressCircle.jsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

/**
 * Robust Scroll Progress Circle
 * - Circle empty at top, fills as you scroll (0 → 1)
 * - Uses useScroll() when available, falls back to window scroll listener
 * - Smoothed by useSpring
 */
export default function ScrollProgressCircle({ children }) {
  const [hydrated, setHydrated] = useState(false);
  const { scrollYProgress: scrollYProgressHook } = useScroll(); // may work or not depending on environment
  const localProgress = useMotionValue(0); // canonical motion value we drive
  const rafRef = useRef(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // If hook provides updates, mirror them. Otherwise fall back to window listener.
  useEffect(() => {
    let unsubHook = null;

    // If hook exists and seems usable, subscribe to it
    if (scrollYProgressHook && typeof scrollYProgressHook.onChange === "function") {
      unsubHook = scrollYProgressHook.onChange((v) => {
        // v is 0..1; mirror to localProgress
        localProgress.set(v ?? 0);
      });
    }

    // Fallback: if hook failed to provide useful updates, attach window scroll listener
    // We'll use rAF throttling for performance.
    const fallbackListener = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
        const scrollHeight = Math.max(
          document.documentElement.scrollHeight,
          document.body.scrollHeight
        );
        const winH = window.innerHeight || document.documentElement.clientHeight || 1;
        const denom = Math.max(scrollHeight - winH, 1);
        const progress = Math.max(0, Math.min(1, scrollTop / denom));
        localProgress.set(progress);
        rafRef.current = null;
      });
    };

    // Attach fallback listener only if hook isn't firing (we still attach but it won't conflict)
    window.addEventListener("scroll", fallbackListener, { passive: true });
    window.addEventListener("resize", fallbackListener);

    // run once to initialize
    fallbackListener();

    return () => {
      if (unsubHook) unsubHook();
      window.removeEventListener("scroll", fallbackListener);
      window.removeEventListener("resize", fallbackListener);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgressHook, localProgress]);

  // Smooth the motion
  const smooth = useSpring(localProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  // Circle math
  const radius = 38;
  const circumference = 2 * Math.PI * radius;

  // Map progress (0..1) to stroke offset (circumference -> 0)
  const strokeDashoffset = useTransform(smooth, [0, 1], [circumference, 0]);

  // Optional: button fades in slightly after small scroll (0 -> 0.05)
  const opacity = useTransform(smooth, [0, 0.03], [0, 1]);

  // Glow intensity mapping
  const glow = useTransform(
    smooth,
    [0, 1],
    [
      "drop-shadow(0 0 4px rgba(0,255,255,0.12))",
      "drop-shadow(0 0 20px rgba(0,255,255,0.95))",
    ]
  );

  // Ensure only render on client
  if (!hydrated) return <>{children}</>;

  return (
    <>
      {children}

      <motion.div
        aria-hidden
        title="Scroll progress"
        style={{ opacity }}
        className="fixed bottom-6 right-6 z-[9999] cursor-pointer select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileTap={{ scale: 0.92 }}
      >
        <svg
          width="84"
          height="84"
          viewBox="0 0 100 100"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* background (empty) ring */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="8"
            fill="none"
          />

          {/* progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#00fff0"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset,
              filter: glow,
            }}
          />
        </svg>
      </motion.div>
    </>
  );
}
