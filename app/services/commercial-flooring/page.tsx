import type { Metadata } from "next";
import { ServicePage } from "../../components/ServicePage";
import { photos } from "../../lib/gallery";

export const metadata: Metadata = {
  title: "Commercial & Industrial Flooring — Toronto & GTA | Garage Enhancements",
  description:
    "Chemical-resistant, high-traffic floor coatings for warehouses, shops, showrooms, and food-service spaces.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Commercial & Industrial"
      title="Floors engineered for the way your business actually runs."
      blurb="Forklift traffic, hot tires, chemical spills, food-safe sanitation. We spec the coating to match the workload, not the other way around. Staged installs to keep your operation open whenever possible."
      heroImg="/gallery/commercial/img_2081.jpg"
      heroAlt="Commercial industrial floor coating"
      highlights={[
        {
          label: "Right system for the job",
          body:
            "100% solids epoxy, urethane cement, MMA, polyaspartic — we don't sell a single product, we match the coating to your environment.",
        },
        {
          label: "Staged installs",
          body:
            "We work in zones so your production line, shop, or kitchen keeps running through the project whenever site conditions allow.",
        },
        {
          label: "Canadian-winter ready",
          body:
            "Salt, de-icer, and thermal shock from forklifts coming in off the yard — our systems are rated for it.",
        },
      ]}
      bullets={[
        "Warehouse and distribution centres",
        "Auto shops, dealerships, and showrooms",
        "Commercial kitchens and food service",
        "Breweries and beverage production",
        "Healthcare and pharma clean spaces",
        "Line striping and safety zones",
        "Chemical-resistant and slip-resistant options",
        "Maintenance contracts available",
      ]}
      gallery={photos.filter((p) => p.category === "commercial")}
    />
  );
}
