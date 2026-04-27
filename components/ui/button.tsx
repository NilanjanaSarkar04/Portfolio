import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base — all buttons share these
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-medium transition-all duration-300 cursor-pointer disabled:pointer-events-none disabled:opacity-50 shrink-0",
  {
    variants: {
      variant: {
        /** Filled coral — primary CTA */
        default:
          "bg-accent text-white rounded-full hover:bg-accent-hover",
        /** Glass pill — secondary CTA */
        outline:
          "glass rounded-full text-muted hover:text-foreground",
        /** No background — nav / tertiary links */
        ghost:
          "text-muted hover:text-foreground hover:bg-surface-hover rounded-full",
        /** Inline text link */
        link:
          "text-accent hover:text-accent-hover underline-offset-4 hover:underline p-0 h-auto gap-1.5",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm:      "px-4 py-2 text-xs",
        lg:      "px-8 py-4 text-base",
        icon:    "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size:    "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Merge props onto a child element instead of rendering a <button> */
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
