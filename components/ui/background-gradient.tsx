"use client";

/**
 * Aceternity UI — BackgroundGradient
 * Animated gradient glow border that activates on hover.
 * Wrap any card component to give it a premium gradient border effect.
 */
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Set false to skip the slow background-position animation (perf) */
  animate?: boolean;
}

const gradientStyle = {
  backgroundImage: "linear-gradient(135deg, #c44b32 0%, #8b5cf6 35%, #14b8a6 65%, #c44b32 100%)",
  backgroundSize: "300% 300%",
} as const;

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  return (
    <div className={cn("group/bg-gradient relative rounded-2xl p-px", containerClassName)}>
      {/* Blurred glow layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 blur-lg transition-opacity duration-500 group-hover/bg-gradient:opacity-60"
        style={gradientStyle}
        animate={animate ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : undefined}
        transition={animate ? { duration: 6, repeat: Infinity, ease: "linear" } : undefined}
      />
      {/* Sharp border layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover/bg-gradient:opacity-35"
        style={gradientStyle}
        animate={animate ? { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : undefined}
        transition={animate ? { duration: 6, repeat: Infinity, ease: "linear" } : undefined}
      />
      {/* Content */}
      <div className={cn("relative z-10 h-full rounded-2xl", className)}>{children}</div>
    </div>
  );
}
