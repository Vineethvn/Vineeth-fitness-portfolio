"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { contact } from "@/data/profile";

export function Contact() {
  const [sent, setSent] = useState(false);

  // UI-only for now — wire to an email service / API route later.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section bg-ink text-bone">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: pitch + direct links */}
        <div className="lg:col-span-5">
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
              {contact.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 font-semibold text-ink transition-colors hover:bg-accent-bright"
              >
                <FaWhatsapp size={22} /> Message me on WhatsApp
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-xl border border-ink-line bg-ink-soft p-4 transition-colors hover:border-accent"
              >
                <FaEnvelope className="text-accent" size={20} />
                <span className="text-sm text-bone">{contact.email}</span>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-xl border border-ink-line bg-ink-soft p-4 transition-colors hover:border-accent"
              >
                <FaPhone className="text-accent" size={18} />
                <span className="text-sm text-bone">{contact.phone}</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-ink-line bg-ink-soft p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me your goal, timeline and where you're based…"
                  className="w-full resize-none rounded-xl border border-ink-line bg-ink px-4 py-3 text-bone placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-accent px-6 py-4 font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-accent-bright sm:w-auto sm:px-10"
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>

              {sent && (
                <p className="mt-4 text-sm text-accent">
                  Thanks! This is a demo form — connect it to an email service to
                  receive real messages.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-mist">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-line bg-ink px-4 py-3 text-bone placeholder:text-mist/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
    </div>
  );
}
