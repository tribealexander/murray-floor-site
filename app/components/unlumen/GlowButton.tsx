"use client";

import * as React from "react";
import { motion } from "motion/react";

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
  blur?: string;
  opacity?: number;
}

export function GlowButton({
  children,
  className = "",
  colors = ["#c94a1b", "#e86c1c", "#f2a045", "#c94a1b"],
  duration = 5,
  blur = "8px",
  opacity = 0.5,
}: GlowButtonProps) {
  const gradient = `conic-gradient(from 0deg at 50% 50%, ${colors.join(", ")})`;
  const gradientEnd = `conic-gradient(from 360deg at 50% 50%, ${colors.join(", ")})`;

  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ filter: `blur(${blur})`, opacity }}
        animate={{ background: [gradient, gradientEnd] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
