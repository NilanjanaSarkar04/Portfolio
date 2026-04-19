const ITEMS = [
  "UI/UX Design",
  "Brand Identity",
  "Typography",
  "Visual Systems",
  "Motion",
  "Editorial",
  "Interaction Design",
  "Illustration",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-border py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono tracking-[0.2em] uppercase text-muted flex items-center gap-12"
          >
            {item}
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
