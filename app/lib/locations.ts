export type Location = {
  slug: string;
  name: string;
  region: string;
  areas: string[];
  heroImg: string;
  heroAlt: string;
  localLine: string;
  projectPhotos: string[];
  testimonial?: {
    quote: string;
    author: string;
    neighbourhood: string;
  };
};

export const locations: Location[] = [
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    areas: [
      "Glen Abbey",
      "West Oak Trails",
      "Bronte",
      "Old Oakville",
      "Joshua Creek",
      "River Oaks",
    ],
    heroImg: "/gallery/before-after/oakville_after.jpg",
    heroAlt: "Finished flake epoxy garage floor in Oakville",
    localLine:
      "Most of our Oakville jobs are detached-home garages — West Oak Trails, Glen Abbey, and Bronte especially. Flake-broadcast epoxy with a polyaspartic topcoat, finished in a day and a half.",
    projectPhotos: [
      "/gallery/before-after/oakville_after.jpg",
      "/gallery/before-after/oakville_after2.jpg",
      "/gallery/before-after/oakville_after3.jpg",
    ],
    testimonial: {
      quote:
        "Michael quoted on a Tuesday, was finished Friday afternoon. Fixed price matched the estimate to the dollar. Floor looks better than the rest of the house.",
      author: "Homeowner",
      neighbourhood: "Glen Abbey, Oakville",
    },
  },
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    areas: [
      "Leaside",
      "The Beaches",
      "High Park",
      "Forest Hill",
      "Rosedale",
      "Lawrence Park",
    ],
    heroImg: "/gallery/residential/condo_polish.jpg",
    heroAlt: "Polished concrete floor in a Toronto condo unit",
    localLine:
      "Toronto splits into two kinds of floors: detached-home garages on the edges, and polished concrete in downtown condos and lofts. We do both.",
    projectPhotos: [
      "/gallery/residential/condo_polish.jpg",
      "/gallery/residential/polyaspartic_flake_coating.jpg",
      "/gallery/residential/polished_floor_2.jpg",
    ],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "City of Toronto",
    areas: [
      "Mimico",
      "Long Branch",
      "Kingsway",
      "Humber Bay",
      "Islington-City Centre",
    ],
    heroImg: "/gallery/residential/img_0375.jpg",
    heroAlt: "Finished flake epoxy garage floor in Etobicoke",
    localLine:
      "Most Etobicoke quotes are mid-century detached garages — older slabs that need real prep before a coating will stick. We diamond-grind every floor, no exceptions.",
    projectPhotos: [
      "/gallery/residential/img_0375.jpg",
      "/gallery/residential/clean_garage_fllor_and_cabinets.jpg",
      "/gallery/residential/epoxy_floor_with_coves.jpg",
    ],
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    areas: [
      "Port Credit",
      "Streetsville",
      "Erin Mills",
      "Lorne Park",
      "Meadowvale",
    ],
    heroImg: "/gallery/residential/polyaspartic_flake_coating.jpg",
    heroAlt: "Polyaspartic flake garage floor in Mississauga",
    localLine:
      "Mississauga jobs range from new-build garages in Erin Mills to older Port Credit slabs. Same system, same warranty, prep tuned to the slab.",
    projectPhotos: [
      "/gallery/residential/polyaspartic_flake_coating.jpg",
      "/gallery/residential/img_0375.jpg",
      "/gallery/residential/clean_garage_fllor_and_cabinets.jpg",
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    areas: ["Maple", "Woodbridge", "Kleinburg", "Thornhill", "Concord"],
    heroImg: "/gallery/residential/clean_garage_fllor_and_cabinets.jpg",
    heroAlt: "Finished flake epoxy garage floor in Vaughan",
    localLine:
      "New builds in Maple and Kleinburg are where we do most of our Vaughan work. The slabs are new, the owners just finished the kitchen, and the garage is the last room on the list.",
    projectPhotos: [
      "/gallery/residential/clean_garage_fllor_and_cabinets.jpg",
      "/gallery/residential/polyaspartic_flake_coating.jpg",
      "/gallery/residential/img_0375.jpg",
    ],
  },
  {
    slug: "north-york",
    name: "North York",
    region: "City of Toronto",
    areas: [
      "Willowdale",
      "Bayview Village",
      "York Mills",
      "Don Mills",
      "Hogg's Hollow",
    ],
    heroImg: "/gallery/residential/img_0375.jpg",
    heroAlt: "Finished flake epoxy garage floor in North York",
    localLine:
      "North York splits between mid-century bungalows on wide lots (big garages, aging slabs) and newer infills. Both need proper prep — we do the same grind-and-test on every job.",
    projectPhotos: [
      "/gallery/residential/img_0375.jpg",
      "/gallery/residential/epoxy_floor_with_coves.jpg",
      "/gallery/residential/clean_garage_fllor_and_cabinets.jpg",
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
