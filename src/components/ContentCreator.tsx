"use client";

import Image from "next/image";
import { FaInstagram, FaYoutube, FaWhatsapp, FaPlay } from "react-icons/fa";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { content, contact } from "@/data/profile";

export function ContentCreator() {
  const { instagram, youtube } = content;

  return (
    <section id="content" className="section bg-bone text-ink">
      <div className="container-x">
        <SectionLabel dark>Content Creator</SectionLabel>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.05}>
            <h2 className="max-w-2xl font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              Sharing what I know, online.
            </h2>
          </Reveal>

          {/* Social quick links */}
          <Reveal delay={0.1}>
            <div className="flex gap-3">
              {[
                { Icon: FaInstagram, href: instagram.url, label: "Instagram" },
                { Icon: FaYoutube, href: youtube.url, label: "YouTube" },
                { Icon: FaWhatsapp, href: contact.whatsapp, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-bone-line bg-bone-soft text-ink transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-ink"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Instagram block */}
        <div className="mt-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaInstagram size={24} className="text-accent" />
              <span className="font-display text-2xl tracking-wide">
                As Seen On Instagram
              </span>
            </div>
            <a
              href={instagram.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium uppercase tracking-wider text-graphite hover:text-accent"
            >
              {instagram.handle} →
            </a>
          </div>

          {/* Stats */}
          <RevealGroup className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { value: instagram.followers, label: "Followers" },
              { value: instagram.engagement, label: "Avg. Engagement" },
              { value: "Daily", label: "Posting Cadence" },
            ].map((s) => (
              <RevealItem key={s.label}>
                <div className="rounded-xl border border-bone-line bg-bone-soft p-5">
                  <div className="font-display text-3xl text-accent sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-graphite">
                    {s.label}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Post grid */}
          <RevealGroup
            className="mt-6 grid grid-cols-3 gap-3 sm:gap-4"
            stagger={0.05}
          >
            {instagram.posts.map((src, i) => (
              <RevealItem key={i}>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-xl bg-ink"
                >
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    sizes="(max-width:640px) 33vw, 20vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/50 group-hover:opacity-100">
                    <FaInstagram size={28} className="text-bone" />
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* YouTube block */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FaYoutube size={26} className="text-accent" />
              <span className="font-display text-2xl tracking-wide">
                Watch on YouTube
              </span>
            </div>
            <a
              href={youtube.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium uppercase tracking-wider text-graphite hover:text-accent"
            >
              {youtube.handle} →
            </a>
          </div>

          <RevealGroup className="mt-6 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {youtube.videos.map((v, i) => (
              <RevealItem key={i}>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-bone-line bg-bone-soft"
                >
                  <div className="relative aspect-video overflow-hidden bg-ink">
                    <Image
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/20">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink transition-transform group-hover:scale-110">
                        <FaPlay size={18} className="ml-1" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-medium leading-snug text-ink">
                      {v.title}
                    </h3>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
