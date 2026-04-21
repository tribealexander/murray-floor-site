export type Category = "residential" | "commercial" | "polished" | "patio" | "before-after";

export type Photo = {
  src: string;
  alt: string;
  category: Category;
};

export const photos: Photo[] = [
  // Residential epoxy — actual residential garages/basements
  { src: "/gallery/residential/img_0375.jpg", alt: "Flake epoxy garage floor with storage cabinets and overhead door", category: "residential" },
  { src: "/gallery/residential/clean_garage_fllor_and_cabinets.jpg", alt: "Finished garage with grey cabinets and light epoxy floor", category: "residential" },
  { src: "/gallery/residential/polyaspartic_flake_coating.jpg", alt: "Polyaspartic flake garage floor with white cabinetry", category: "residential" },
  { src: "/gallery/residential/workbench_and_cabinets.jpg", alt: "Garage flake epoxy floor with diamond-plate cabinets and workbench", category: "residential" },
  { src: "/gallery/residential/epoxy_floor_with_coves.jpg", alt: "Flake epoxy floor with integral wall cove detail", category: "residential" },
  { src: "/gallery/residential/condo_polish.jpg", alt: "Polished concrete condo unit with exposed brick", category: "residential" },
  { src: "/gallery/residential/polished_floor_2.jpg", alt: "Polished concrete basement floor", category: "residential" },
  { src: "/gallery/residential/stained_polished_feb_2014_191.jpg", alt: "Stained and polished concrete basement floor", category: "residential" },

  // Commercial — large-format and industrial installs
  { src: "/gallery/residential/img_1118.jpg", alt: "Brewery floor coating around wrapped fermentation tanks", category: "commercial" },
  { src: "/gallery/residential/img_1234.jpg", alt: "High-gloss commercial epoxy floor", category: "commercial" },
  { src: "/gallery/residential/2017-10-18_11.13.30.jpg", alt: "Mechanical-room epoxy floor coating", category: "commercial" },
  { src: "/gallery/residential/2018-02-19_07.34.46.jpg", alt: "Dealership service bay with grey flake epoxy", category: "commercial" },
  { src: "/gallery/residential/2010-06-20_12.59.11.jpg", alt: "Warehouse solid-colour epoxy with lane markings", category: "commercial" },
  { src: "/gallery/commercial/2015-09-01_09.09.35.jpg", alt: "Commercial epoxy floor installation", category: "commercial" },
  { src: "/gallery/commercial/2017-06-07_13.34.21.jpg", alt: "Commercial floor coating in progress", category: "commercial" },
  { src: "/gallery/commercial/2017-10-31_12.26.27.jpg", alt: "Commercial facility floor finished", category: "commercial" },
  { src: "/gallery/commercial/2018-02-19_07.34.46.jpg", alt: "Industrial epoxy coating", category: "commercial" },
  { src: "/gallery/commercial/img_2081.jpg", alt: "Large-format industrial floor", category: "commercial" },
  { src: "/gallery/commercial/membrane_in_industrial.jpg", alt: "Waterproof membrane, industrial install", category: "commercial" },
  { src: "/gallery/commercial/waterproof_membrane_commercial.jpg", alt: "Commercial waterproof membrane finish", category: "commercial" },

  // Polished concrete
  { src: "/gallery/polished/2015-05-30_11.45.02.jpg", alt: "Polished concrete in commercial space", category: "polished" },
  { src: "/gallery/polished/2017-01-05_14.18.11.jpg", alt: "Warm-tone polished concrete in a seating area", category: "polished" },
  { src: "/gallery/polished/2017-01-10_12.53.41.jpg", alt: "Polished concrete warehouse floor", category: "polished" },
  { src: "/gallery/polished/2017-01-10_13.00.56.jpg", alt: "Polished concrete close detail", category: "polished" },

  // Patio
  { src: "/gallery/patio/polyaspartic_swimming_pool_coating.jpg", alt: "Polyaspartic pool deck coating", category: "patio" },
  { src: "/gallery/patio/40yearoldswimmingpool.jpg", alt: "Refinished concrete pool deck", category: "patio" },

  // Before/After pairs (Oakville)
  { src: "/gallery/before-after/oakville_before.jpg", alt: "Oakville garage — before", category: "before-after" },
  { src: "/gallery/before-after/oakville_after.jpg", alt: "Oakville garage — after epoxy install", category: "before-after" },
  { src: "/gallery/before-after/oakville_before2.jpg", alt: "Oakville garage angle 2 — before", category: "before-after" },
  { src: "/gallery/before-after/oakville_after2.jpg", alt: "Oakville garage angle 2 — after", category: "before-after" },
  { src: "/gallery/before-after/oakville_before3.jpg", alt: "Oakville garage angle 3 — before", category: "before-after" },
  { src: "/gallery/before-after/oakville_after3.jpg", alt: "Oakville garage angle 3 — after", category: "before-after" },
];

export const beforeAfterPairs: { before: Photo; after: Photo; label: string }[] = [
  {
    before: photos.find((p) => p.src.endsWith("oakville_before.jpg"))!,
    after: photos.find((p) => p.src.endsWith("oakville_after.jpg"))!,
    label: "Oakville residence",
  },
  {
    before: photos.find((p) => p.src.endsWith("oakville_before2.jpg"))!,
    after: photos.find((p) => p.src.endsWith("oakville_after2.jpg"))!,
    label: "Oakville residence",
  },
  {
    before: photos.find((p) => p.src.endsWith("oakville_before3.jpg"))!,
    after: photos.find((p) => p.src.endsWith("oakville_after3.jpg"))!,
    label: "Oakville residence",
  },
];
