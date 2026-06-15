import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { profile, navLinks, contact, content } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-line bg-ink text-bone">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-4xl tracking-wide">
              {profile.firstName.toUpperCase()}
              <span className="text-accent">.</span>
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
              {profile.role} — {profile.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: FaInstagram, href: content.instagram.url, label: "Instagram" },
                { Icon: FaYoutube, href: content.youtube.url, label: "YouTube" },
                { Icon: FaWhatsapp, href: contact.whatsapp, label: "WhatsApp" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-mist transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-mist">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-bone transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-mist">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-bone transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-bone transition-colors hover:text-accent"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="text-mist">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-8 text-xs text-mist sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            NASM Certified Personal Trainer · Built for performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
