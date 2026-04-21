"use client";

import Image from "next/image";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  defaultPos?: number;
};

export type BeforeAfterHandle = {
  setPos: (p: number) => void;
  el: HTMLDivElement | null;
};

export const BeforeAfter = forwardRef<BeforeAfterHandle, Props>(function BeforeAfter(
  { beforeSrc, afterSrc, beforeAlt, afterAlt, defaultPos = 50 },
  handleRef,
) {
  const [pos, setPos] = useState(defaultPos);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useImperativeHandle(handleRef, () => ({
    setPos: (p: number) => setPos(Math.max(0, Math.min(100, p))),
    el: containerRef.current,
  }));

  const updateFromEvent = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl select-none bg-black/30 cursor-ew-resize"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromEvent(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromEvent(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromEvent(e.touches[0].clientX);
      }}
      onTouchMove={(e) => dragging.current && updateFromEvent(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover pointer-events-none"
      />

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>

      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] uppercase tracking-widest text-white">
        Before
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] uppercase tracking-widest text-white">
        After
      </span>

      <div
        className="absolute inset-y-0 w-0.5 bg-white pointer-events-none transition-[left] duration-75"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg grid place-items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L2 8l4 5M10 3l4 5-4 5"
              stroke="#0a0a0a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});
