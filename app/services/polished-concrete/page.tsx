import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";
import { photos } from "../../lib/gallery";

export const metadata: Metadata = {
  title: "Polished Concrete — Toronto & GTA | Garage Enhancements",
  description:
    "Grind, refine, densify, polish. A permanent concrete floor with a mirror finish — ideal for retail, showrooms, and modern homes.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Polished Concrete"
      title="Mirror finish. Zero topcoat. A floor that gets better with age."
      blurb="Polished concrete isn't a coating — it's the slab itself, ground and refined through progressively finer diamonds until it shines. No peeling, no chipping, and no repainting every few years."
      heroImg="/gallery/residential/condo_polish.jpg"
      heroAlt="Polished concrete floor in a condo with exposed brick"
      highlights={[
        {
          label: "The real thing",
          body:
            "We grind, densify with chemical hardeners, then polish up to 3000 grit. What you see is the concrete itself — not a film that wears off.",
        },
        {
          label: "Low maintenance",
          body:
            "Dust-mop and the occasional auto-scrub. No recoating, no stripping, no resealing. The shine deepens the more it's used.",
        },
        {
          label: "Gloss levels to match the space",
          body:
            "Salt-and-pepper or full exposure of aggregate. Satin, semi-gloss, or mirror. We'll bring samples of each so you can pick what fits.",
        },
      ]}
      bullets={[
        "Showrooms, retail, and hospitality",
        "Modern residential — open concept homes, basements",
        "Warehouses and distribution centres",
        "Institutional: schools, libraries, community centres",
        "Integral dye and stain options",
        "Crack and joint repair included",
        "Densifier and stain-guard treatment",
        "Finish gloss specified in writing, not guessed at",
      ]}
      gallery={photos.filter((p) => p.category === "polished")}
    />
  );
}
