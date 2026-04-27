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
    <div className="overflow-hidden glass border-x-0 rounded-none">
      <div className="flex gap-12 animate-marquee whitespace-nowrap w-max py-4">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-mono tracking-[0.2em] uppercase text-muted flex items-center gap-12"
          >
            {item}
            <span className="text-accent" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
