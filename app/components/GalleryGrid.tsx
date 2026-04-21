"use client";

import Image from "next/image";
import { useState } from "react";
import type { Category, Photo } from "../lib/gallery";

const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "polished", label: "Polished Concrete" },
  { key: "patio", label: "Patio / Pool" },
  { key: "before-after", label: "Before & After" },
];

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [lightbox, setLightbox] = useState<Photo | null>(null);

  const shown = filter === "all" ? photos : photos.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              filter === f.key
                ? "bg-foreground text-background border-foreground"
                : "border-border text-foreground/70 hover:border-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        {shown.map((p) => (
          <button
            key={p.src}
            onClick={() => setLightbox(p)}
            className="block w-full mb-3 break-inside-avoid overflow-hidden rounded-lg bg-foreground/5 group"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={800}
              height={600}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-6xl w-full h-[85vh]">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 rounded-full bg-white/10 border border-white/20 text-white px-4 py-2 text-sm"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
