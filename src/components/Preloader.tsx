"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";

/** Full-screen intro animation shown on first load. */
export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Count 0 -> 100 over ~1.6s
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);

    document.body.style.overflow = "hidden";
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden"
          >
            <span className="font-display text-5xl leading-none text-bone sm:text-7xl">
              {profile.firstName.toUpperCase()}{" "}
              <span className="text-accent">.</span>
            </span>
          </motion.div>

          <div className="mt-8 h-px w-56 overflow-hidden bg-ink-line sm:w-72">
            <motion.div
              className="h-full bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: "left" }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="mt-4 flex w-56 items-center justify-between text-xs uppercase tracking-[0.3em] text-mist sm:w-72">
            <span>Loading</span>
            <span className="tabular-nums">{count}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
