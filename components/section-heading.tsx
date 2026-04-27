import { cn } from "@/lib/utils";
import AnimateIn from "./animate-in";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  index?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, index, className }: SectionHeadingProps) {
  return (
    <AnimateIn className={cn("mb-12 flex items-baseline gap-5", className)}>
      {index && (
        <span className="text-accent shrink-0 font-mono text-xs tracking-widest">{index}</span>
      )}
      <div>
        <h2 className="text-foreground text-2xl font-medium tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted mt-2 text-sm">{subtitle}</p>}
      </div>
    </AnimateIn>
  );
}
