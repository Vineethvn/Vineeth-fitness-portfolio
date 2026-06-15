import { Reveal } from "./Reveal";

/** Editorial eyebrow label with an accent tick — used above section headings. */
export function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-accent" />
        <span
          className={`text-xs font-medium uppercase tracking-[0.3em] ${
            dark ? "text-graphite" : "text-mist"
          }`}
        >
          {children}
        </span>
      </div>
    </Reveal>
  );
}
