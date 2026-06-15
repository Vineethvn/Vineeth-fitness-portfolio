"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { HiArrowDown } from "react-icons/hi";
import { profile, ctas, stats } from "@/data/profile";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: background drifts slower than scroll, content fades out.
  // contentY drift is kept small (well under the stats→marquee clearance) so the
  // stats row never gets pushed down into the marquee strip on short viewports.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const word = {
    hidden: { y: "110%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.2 + i * 0.12,
      },
    }),
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      {/* Background media (parallax) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        {profile.heroVideo ? (
          <video
            className="h-full w-full object-cover"
            src={profile.heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <Image
            src={profile.heroImage}
            alt="Vineeth Vijayan Nair training"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        )}
        {/* Tonal overlays for legibility + brand mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 vignette" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-x relative z-10 w-full pb-16 pt-32 md:pb-24"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-mist">
            {profile.role} · {profile.location}
          </span>
        </motion.div>

        {/* Name — huge, line-by-line reveal. clamp keeps it bold but never
            overflows on small phones or grows absurd on ultrawide. */}
        <h1 className="font-display text-[clamp(3.25rem,15vw,11rem)] leading-[0.82] tracking-tight text-bone">
          <span className="block overflow-hidden">
            <motion.span custom={0} variants={word} initial="hidden" animate="visible" className="block">
              {profile.firstName.toUpperCase()}
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={word}
              initial="hidden"
              animate="visible"
              className="block"
              // Outlined "ghost" type — inline style so it survives CSS processing.
              style={{
                WebkitTextStroke: "2px #f4f2ed",
                WebkitTextFillColor: "transparent",
              }}
            >
              {profile.lastName.toUpperCase()}
            </motion.span>
          </span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-6 max-w-xl text-lg text-mist sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={ctas.primary.href}
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-ink transition-all hover:bg-accent-bright hover:shadow-[0_10px_40px_-10px_rgba(255,90,31,0.6)]"
          >
            {ctas.primary.label}
          </a>
          <a
            href={ctas.secondary.href}
            className="rounded-full border border-bone/30 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bone backdrop-blur-sm transition-all hover:border-bone hover:bg-bone hover:text-ink"
          >
            {ctas.secondary.label}
          </a>
        </motion.div>

        {/* Inline stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-bone/15 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl text-accent sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-mist">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-mist"
        >
          <HiArrowDown size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
