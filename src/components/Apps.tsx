"use client";

import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { apps } from "@/data/profile";

function StoreBadge({
  href,
  Icon,
  top,
  bottom,
}: {
  href: string;
  Icon: typeof FaApple;
  top: string;
  bottom: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-ink-line bg-ink px-4 py-2.5 transition-colors hover:border-accent"
    >
      <Icon size={24} className="text-bone" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-mist">
          {top}
        </span>
        <span className="block text-sm font-semibold text-bone">{bottom}</span>
      </span>
    </a>
  );
}

export function Apps() {
  return (
    <section id="apps" className="section bg-ink text-bone">
      <div className="container-x">
        <SectionLabel>Apps & Projects</SectionLabel>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            Coaching that doesn't stop at the gym door.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2">
          {apps.map((app) => (
            <RevealItem key={app.name}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-line bg-ink-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                {/* Glow accent on hover */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: app.accent }}
                />

                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
                    <Image
                      src={app.logo}
                      alt={app.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl tracking-wide text-bone">
                      {app.name}
                    </h3>
                    <p
                      className="text-sm font-medium uppercase tracking-wider"
                      style={{ color: app.accent }}
                    >
                      {app.role}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-mist">
                  {app.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <StoreBadge
                    href={app.appStore}
                    Icon={FaApple}
                    top="Download on the"
                    bottom="App Store"
                  />
                  <StoreBadge
                    href={app.playStore}
                    Icon={FaGooglePlay}
                    top="Get it on"
                    bottom="Google Play"
                  />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
