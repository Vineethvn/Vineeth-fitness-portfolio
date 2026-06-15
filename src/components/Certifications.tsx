"use client";

import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="section bg-bone text-ink">
      <div className="container-x">
        <SectionLabel dark>Credentials</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Qualified — and still learning.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <RevealItem key={cert.name}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-bone-line bg-bone-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_50px_-20px_rgba(255,90,31,0.35)]">
                {/* Badge */}
                <div className="flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-ink text-3xl">
                    {cert.icon}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                      cert.status === "Certified"
                        ? "bg-accent text-ink"
                        : "border border-graphite/30 text-graphite"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl tracking-wide text-ink sm:text-3xl">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-graphite">
                  {cert.body}
                </p>

                {/* Decorative accent line */}
                <div className="mt-6 h-px w-full bg-bone-line">
                  <div className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
