import type { Metadata } from "next";
import { GalleryGrid } from "../components/GalleryGrid";
import { photos } from "../lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — Murray Floor Co.",
  description:
    "A selection of residential, commercial, and polished concrete floors we’ve finished across the GTA.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">Gallery</p>
      <h1 className="mt-2 font-display text-5xl md:text-6xl font-semibold tracking-tight">
        A few of the floors we&rsquo;ve finished.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        A cross-section of recent residential, commercial, and polished
        concrete work. Filter by project type — tap a photo to expand.
      </p>

      <div className="mt-12">
        <GalleryGrid photos={photos} />
      </div>
    </div>
  );
}
