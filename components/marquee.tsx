const ITEMS = [
  "UI/UX DESIGN",
  "DESIGN RESEARCH",
  "BRAND STRATEGY",
  "TREND ANALYSIS AND FORECASTING",
  "VISUAL DESIGN",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="glass overflow-hidden rounded-none border-x-0">
      <div className="animate-marquee flex w-max gap-12 py-4 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-muted flex items-center gap-12 font-mono text-xs tracking-[0.2em] uppercase"
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
