"use client";

import Image from "next/image";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { about, profile } from "@/data/profile";

/** Light "bone" section for high-contrast editorial break from the dark hero. */
export function About() {
  return (
    <section id="about" className="section bg-bone text-ink">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: portrait */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-bone-soft">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-ink/90 px-4 py-2 text-xs font-medium uppercase tracking-wider text-bone backdrop-blur">
                NASM Certified · CPT
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: copy */}
        <div className="lg:col-span-7 lg:pt-4">
          <SectionLabel dark>{about.eyebrow}</SectionLabel>

          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-graphite sm:text-lg">
            {about.bio.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 max-w-xl rounded-xl border border-bone-line bg-bone-soft p-6">
              <p className="text-base leading-relaxed text-ink">
                {about.highlight}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <blockquote className="mt-10 max-w-xl border-l-2 border-accent pl-6 font-display text-2xl leading-snug tracking-wide text-ink sm:text-3xl">
              {about.philosophy}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
