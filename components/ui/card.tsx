import { cn } from "@/lib/utils";
import * as React from "react";

/** Glass card — standard depth level */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("glass rounded-2xl", className)} {...props} />
  )
);
Card.displayName = "Card";

/** Stronger glass — elevated sections (hero bio, contact, footer CTA) */
const CardElevated = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("glass-strong rounded-3xl", className)} {...props} />
  )
);
CardElevated.displayName = "CardElevated";

export { Card, CardElevated };
