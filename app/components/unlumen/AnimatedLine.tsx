"use client";

import * as React from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedLineProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedLine({
  direction = "horizontal",
  className,
  delay = 0,
  duration = 1.2,
}: AnimatedLineProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn(
        direction === "horizontal" ? "h-px w-full bg-border" : "w-px h-full bg-border",
        className,
      )}
      initial={{
        scaleX: direction === "horizontal" ? 0 : 1,
        scaleY: direction === "vertical" ? 0 : 1,
      }}
      animate={isInView ? { scaleX: 1, scaleY: 1 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: direction === "horizontal" ? "left" : "top" }}
    />
  );
}
