"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { beforeAfterPairs } from "../lib/gallery";
import { TextReveal } from "./unlumen/TextReveal";

export function BeforeAfterShowcase() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-2xl mb-12">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          Before &amp; after
        </p>
        <TextReveal
          as="h2"
          text="The same slab, a week apart."
          splitBy="words"
          staggerDelay={0.04}
          className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight"
        />
        <p className="mt-4 text-muted">
          Drag the handle. Every floor here started as stained, pitted concrete —
          most of them from homes in Oakville and across the GTA.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {beforeAfterPairs.map((pair) => (
          <figure
            key={pair.before.src}
            className="group rounded-2xl overflow-hidden border border-border bg-surface"
          >
            <div className="relative aspect-[4/5]">
              {mounted ? (
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={pair.before.src}
                      alt={pair.before.alt}
                      style={{ objectFit: "cover" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={pair.after.src}
                      alt={pair.after.alt}
                      style={{ objectFit: "cover" }}
                    />
                  }
                  style={{ height: "100%", width: "100%" }}
                />
              ) : (
                <Image
                  src={pair.after.src}
                  alt={pair.after.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              )}
              <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider">
                Before
              </span>
              <span className="pointer-events-none absolute top-3 right-3 rounded-full bg-foreground/85 text-background backdrop-blur px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider">
                After
              </span>
            </div>
            <figcaption className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="font-medium">{pair.label}</span>
              <span className="text-muted text-xs">Flake epoxy · 1.5 days on site</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
