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
        <span className="text-xs font-mono text-accent tracking-widest shrink-0">
          {index}
        </span>
      )}
      <div>
        <h2 className="text-2xl font-medium tracking-tight text-foreground">{title}</h2>
        {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
      </div>
    </AnimateIn>
  );
}
