"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { experiences } from "@/data/profile";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  // Accent line grows as you scroll through the timeline.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section bg-ink text-bone">
      <div className="container-x">
        <SectionLabel>Experience</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Where I've worked and what I've built.
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          {/* Track */}
          <div className="absolute left-0 top-2 h-full w-px bg-ink-line sm:left-1" />
          <motion.div
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-0 top-2 h-full w-px bg-accent sm:left-1"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative">
                  {/* Node */}
                  <span className="absolute -left-8 top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center sm:-left-11">
                    <span
                      className={`h-3 w-3 rounded-full ${
                        exp.current
                          ? "bg-accent ring-4 ring-accent/20"
                          : "bg-bone/40"
                      }`}
                    />
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm font-medium uppercase tracking-wider text-accent">
                      {exp.period}
                    </span>
                    {exp.current && (
                      <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-medium uppercase tracking-wider text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-display text-2xl tracking-wide text-bone sm:text-3xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-base font-medium text-bone">
                    {exp.org}
                    <span className="text-mist"> · {exp.meta}</span>
                  </p>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-mist">
                    {exp.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
