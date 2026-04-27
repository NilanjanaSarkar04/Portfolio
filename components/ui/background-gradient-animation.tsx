"use client";
import { cn } from "@/lib/utils";

export function BackgroundGradientAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}>
      {/* blur container — single pass blur over all blobs */}
      <div className="absolute inset-0 [filter:blur(100px)_saturate(130%)]">
        {/* coral — top-left */}
        <div className="absolute top-[-5%] left-[-5%] h-[38vmax] w-[38vmax] animate-[moveInCircle_22s_reverse_infinite] rounded-full bg-[var(--orb-coral)]" />
        {/* periwinkle — top-right */}
        <div className="absolute top-[-8%] right-[-4%] h-[36vmax] w-[36vmax] animate-[moveInCircle_30s_linear_infinite] rounded-full bg-[var(--orb-periwinkle)]" />
        {/* sage — bottom-center */}
        <div className="absolute bottom-[-6%] left-[35%] h-[34vmax] w-[34vmax] animate-[moveHorizontal_26s_ease_infinite] rounded-full bg-[var(--orb-sage)]" />
        {/* periwinkle — bottom-left */}
        <div className="absolute bottom-[-4%] left-[-6%] h-[32vmax] w-[32vmax] animate-[moveVertical_21s_ease_infinite] rounded-full bg-[var(--orb-periwinkle)]" />
        {/* coral — mid-right */}
        <div className="absolute top-[38%] right-[-6%] h-[30vmax] w-[30vmax] animate-[moveInCircle_18s_linear_infinite] rounded-full bg-[var(--orb-coral)]" />
      </div>
    </div>
  );
}
