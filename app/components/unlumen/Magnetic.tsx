"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "motion/react";
import { cn } from "@/lib/utils";

export interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  radius?: number;
  springOptions?: SpringOptions;
  strength?: number;
}

export function Magnetic({
  children,
  className,
  radius = 100,
  springOptions = { stiffness: 150, damping: 15, mass: 0.1 },
  strength = 0.3,
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, springOptions);
  const y = useSpring(rawY, springOptions);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius) {
        const pull = (1 - dist / radius) * strength;
        rawX.set(dx * pull);
        rawY.set(dy * pull);
      }
    },
    [radius, strength, rawX, rawY],
  );

  const handleMouseLeave = React.useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      className={cn("inline-flex", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
