"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { navLinks, profile, ctas } from "@/data/profile";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="font-display text-2xl leading-none tracking-wide text-bone md:text-3xl"
        >
          {profile.firstName.toUpperCase()}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-wider text-mist transition-colors hover:text-bone"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={ctas.secondary.href}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-accent-bright sm:inline-block"
          >
            {ctas.secondary.label}
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="text-bone lg:hidden"
          >
            <HiMenuAlt4 size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-x flex h-16 items-center justify-between">
              <span className="font-display text-2xl text-bone">
                {profile.firstName.toUpperCase()}
                <span className="text-accent">.</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-bone"
              >
                <HiX size={28} />
              </button>
            </div>
            <ul className="container-x mt-8 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-ink-line py-4 font-display text-4xl tracking-wide text-bone transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x pb-10">
              <a
                href={ctas.secondary.href}
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent py-4 text-center font-semibold text-ink"
              >
                {ctas.secondary.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
