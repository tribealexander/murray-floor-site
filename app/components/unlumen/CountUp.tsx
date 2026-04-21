"use client";

import * as React from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

type DigitEffect = "none" | "fade" | "blur";

interface CountUpProps {
  to: number;
  from?: number;
  delay?: number;
  duration?: number;
  digitEffect?: DigitEffect;
  className?: string;
  separator?: string;
  suffix?: string;
  prefix?: string;
}

function CharSlot({
  char,
  charKey,
  effect,
}: {
  char: string;
  charKey: string;
  effect: "fade" | "blur";
}) {
  const isDigit = /\d/.test(char);
  if (!isDigit) return <span style={{ display: "inline-block" }}>{char}</span>;

  const variants =
    effect === "blur"
      ? {
          initial: { opacity: 0, filter: "blur(8px)", y: -8 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
          exit: { opacity: 0, filter: "blur(8px)", y: 8 },
          transition: { duration: 0.18, ease: "easeOut" as const },
        }
      : {
          initial: { opacity: 0, scale: 0.7 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.7 },
          transition: { duration: 0.14, ease: "easeOut" as const },
        };

  return (
    <span style={{ position: "relative", display: "inline-block", overflow: "visible" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={charKey}
          initial={variants.initial}
          animate={variants.animate}
          transition={variants.transition}
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function CountUp({
  to,
  from = 0,
  delay = 0,
  duration = 2,
  digitEffect = "blur",
  className,
  separator = ",",
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);
  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const formatValue = React.useCallback(
    (latest: number) => {
      const formatted = Intl.NumberFormat("en-US", {
        useGrouping: !!separator,
        maximumFractionDigits: 0,
      }).format(latest);
      return separator ? formatted.replace(/,/g, separator) : formatted;
    },
    [separator],
  );

  const [chars, setChars] = React.useState<string[]>(formatValue(from).split(""));

  React.useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(to), delay * 1000);
      return () => clearTimeout(t);
    }
  }, [isInView, motionValue, to, delay]);

  React.useEffect(() => {
    if (digitEffect === "none") {
      const unsub = springValue.on("change", (latest: number) => {
        if (ref.current) ref.current.textContent = prefix + formatValue(latest) + suffix;
      });
      return unsub;
    }
    const unsub = springValue.on("change", (latest: number) => {
      setChars(formatValue(latest).split(""));
    });
    return unsub;
  }, [springValue, formatValue, digitEffect, suffix, prefix]);

  if (digitEffect === "none") {
    return <span ref={ref} className={cn(className)} />;
  }

  return (
    <span ref={ref} className={cn("inline-flex items-center", className)}>
      {prefix && <span>{prefix}</span>}
      {chars.map((char, i) => (
        <CharSlot key={i} char={char} charKey={`${i}-${char}`} effect={digitEffect as "fade" | "blur"} />
      ))}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
