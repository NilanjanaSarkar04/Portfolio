"use client";

/**
 * Aceternity UI — SparklesCore
 * Canvas-based twinkling particle field. Replaces @tsparticles.
 */
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  alpha: number;
  delta: number;
}

interface SparklesCoreProps {
  className?: string;
  background?: string;
  particleColor?: string;
  particleDensity?: number;
  minSize?: number;
  maxSize?: number;
}

export function SparklesCore({
  className,
  background = "transparent",
  particleColor = "#c44b32",
  particleDensity = 80,
  minSize = 0.5,
  maxSize = 1.4,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx!.scale(dpr, dpr);
      initParticles(w, h);
    }

    function initParticles(w: number, h: number) {
      particles = Array.from({ length: particleDensity }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: minSize + Math.random() * (maxSize - minSize),
        alpha: Math.random(),
        delta: (0.003 + Math.random() * 0.015) * (Math.random() < 0.5 ? 1 : -1),
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.alpha += p.delta;
        if (p.alpha <= 0) {
          p.alpha = 0;
          p.delta *= -1;
        }
        if (p.alpha >= 1) {
          p.alpha = 1;
          p.delta *= -1;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha * 0.65;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [particleDensity, particleColor, minSize, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      style={{ background }}
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  );
}
