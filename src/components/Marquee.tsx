const WORDS = [
  "FAT LOSS",
  "STRENGTH",
  "DISCIPLINE",
  "TRANSFORMATION",
  "NUTRITION",
  "ACCOUNTABILITY",
  "MINDSET",
];

/** Edge-to-edge moving accent strip used as a section divider. */
export function Marquee() {
  const line = [...WORDS, ...WORDS];
  return (
    <div className="overflow-hidden border-y border-ink-line bg-accent py-4">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {line.map((w, i) => (
          <span
            key={i}
            className="mx-6 font-display text-2xl tracking-wide text-ink sm:text-3xl"
          >
            {w}
            <span className="mx-6 text-ink/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
