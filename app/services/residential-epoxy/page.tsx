import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";
import { photos } from "../../lib/gallery";

export const metadata: Metadata = {
  title: "Residential Epoxy Flooring — Toronto & Southern Ontario | Murray Floor Co.",
  description:
    "Flake, metallic, and solid-colour epoxy floors for garages, basements, and porches. Serving Toronto, the GTA, and Southern Ontario.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Residential"
      title="Epoxy floors that survive hockey sticks, salt, and snow tires."
      blurb="A day and a half on site, walkable within 24 hours of the topcoat, and built to last a decade-plus. Most of our residential jobs are flake-broadcast epoxy with a polyaspartic topcoat — the same system used in commercial kitchens and airplane hangars."
      heroImg="/gallery/residential/polyaspartic_flake_coating.jpg"
      heroAlt="Flake epoxy garage floor"
      highlights={[
        {
          label: "Decorative flake, metallic, or solid",
          body:
            "Hundreds of flake blends and base colours to pick from. Samples come on-site so you can see them in your actual light.",
        },
        {
          label: "Proper prep — every time",
          body:
            "We diamond-grind the slab, fill pits and cracks, and moisture-test before a single drop of coating goes down. Skipping prep is why cheap jobs fail in two winters.",
        },
        {
          label: "One-day install",
          body:
            "Morning prep, afternoon coat, flake broadcast and topcoat — usually done before dinner. Light use the next day, park on it in 48 hours.",
        },
      ]}
      bullets={[
        "Diamond grind of the existing slab",
        "Crack and pit repair with structural filler",
        "Moisture and adhesion testing",
        "100% solids epoxy basecoat",
        "Decorative flake broadcast (full or partial)",
        "UV-stable polyaspartic topcoat",
        "Five-year warranty on the coating system",
        "Full cleanup — we leave it spotless",
      ]}
      gallery={photos.filter((p) => p.category === "residential").slice(0, 9)}
    />
  );
}
