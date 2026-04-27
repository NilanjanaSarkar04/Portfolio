import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-mono tracking-widest uppercase transition-colors",
  {
    variants: {
      variant: {
        /** Default glass pill — skills / tool tags */
        default:
          "glass rounded-full px-3 py-1 text-[11px] text-tag-text",
        /** Accent tint — category labels on light bg */
        accent:
          "rounded-full px-3 py-1 text-[11px] bg-accent/10 text-accent border border-accent/25",
        /** Dark overlay — category pill on top of images */
        overlay:
          "rounded-full px-2.5 py-1 text-[10px] text-white/90 bg-black/35 border border-white/15 backdrop-blur-sm",
        /** Simple outline — minimal */
        outline:
          "rounded-full px-3 py-1 text-[11px] border border-border text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
