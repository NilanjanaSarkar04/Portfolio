import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable section eyebrow label.
 * Replaces the repeated `text-xs font-mono tracking-[0.2em] uppercase text-accent` pattern.
 */
export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <p
      className={cn("text-accent font-mono text-xs tracking-[0.2em] uppercase", className)}
      {...props}
    >
      {children}
    </p>
  );
}
