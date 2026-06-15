"use client";

import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { transformations } from "@/data/profile";

export function Transformations() {
  return (
    <section id="transformations" className="section bg-ink text-bone">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel>Results</SectionLabel>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                What my clients have achieved.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-mist">
              Hover (or tap) a card to see the goal, timeline and result behind
              each transformation.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {transformations.map((t, i) => (
            <RevealItem key={i}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink-soft">
                {/* Before / After split */}
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative">
                    <Image
                      src={t.before}
                      alt={`${t.goal} before`}
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="absolute left-2 top-2 rounded bg-ink/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-mist">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <Image
                      src={t.after}
                      alt={`${t.goal} after`}
                      fill
                      sizes="(max-width:1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <span className="absolute right-2 top-2 rounded bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink">
                      After
                    </span>
                  </div>
                </div>

                {/* Hover reveal overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/70 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
                    {t.goal}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-wide">
                    {t.duration}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {t.result}
                  </p>
                </div>

                {/* Always-visible label (when not hovered) */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                  <span className="font-display text-lg tracking-wide text-bone">
                    {t.goal}
                  </span>
                  <span className="ml-2 text-xs text-mist">{t.duration}</span>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
