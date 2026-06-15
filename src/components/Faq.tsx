"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiPlus } from "react-icons/hi";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { faqs } from "@/data/profile";

/**
 * Visible FAQ accordion. Pairs with FAQPage JSON-LD in StructuredData for
 * Answer-Engine Optimisation — same questions/answers users and AI both read.
 */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-bone text-ink">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionLabel dark>FAQ</SectionLabel>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              Questions, answered.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-graphite">
              A few things people usually ask before we start working together.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-bone-line border-y border-bone-line">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} delay={i * 0.04}>
                  <div>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl tracking-wide text-ink sm:text-2xl">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-bone"
                      >
                        <HiPlus size={18} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-base leading-relaxed text-graphite">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
