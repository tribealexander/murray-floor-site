import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { TextReveal } from "../components/unlumen/TextReveal";
import { AnimatedLine } from "../components/unlumen/AnimatedLine";
import { Magnetic } from "../components/unlumen/Magnetic";

export const metadata: Metadata = {
  title: "Finishes & Materials — Murray Floor Co.",
  description:
    "A reference guide to the floor systems we install — flake epoxy, metallic, solid colour, polyaspartic, polished concrete — plus the suppliers we buy from and the partners we refer.",
};

const finishes = [
  {
    name: "Flake-broadcast epoxy",
    subtitle: "The one most people mean when they say 'epoxy'",
    img: "/gallery/residential/img_0375.jpg",
    price: "$6 – $9 / sq ft installed",
    bestFor: "Garages, basements, workshops",
    desc: "A 100% solids epoxy basecoat, decorative flake broadcast until the floor is full, then a UV-stable polyaspartic topcoat. Hides small imperfections, wipes clean, and handles salt, oil, and winter tires without fuss.",
  },
  {
    name: "Metallic epoxy",
    subtitle: "High-gloss, marble-like depth",
    img: "/gallery/residential/polyaspartic_flake_coating.jpg",
    price: "$9 – $14 / sq ft installed",
    bestFor: "Showrooms, home gyms, finished basements",
    desc: "Pigmented metallic particles suspended in clear epoxy, worked by hand to create a liquid-marble look. No two floors are identical. Stunning indoors, less forgiving of prep mistakes — the finish shows every flaw in the slab.",
  },
  {
    name: "Solid-colour epoxy",
    subtitle: "Clean, industrial, uniform",
    img: "/gallery/commercial/img_2081.jpg",
    price: "$5 – $8 / sq ft installed",
    bestFor: "Commercial kitchens, utility rooms, simple garages",
    desc: "The straightforward option. Epoxy basecoat, pigmented topcoat, no decorative broadcast. Easiest to clean, easiest to touch up, and the budget-friendly pick when the look isn't the point.",
  },
  {
    name: "Polyaspartic coating",
    subtitle: "Faster cure, tougher top layer",
    img: "/gallery/residential/epoxy_floor_with_coves.jpg",
    price: "$7 – $11 / sq ft installed",
    bestFor: "Anywhere you can't lose the space for two days",
    desc: "Polyaspartic is what we use as a topcoat on almost every system. UV-stable (won't yellow like older epoxies), cures fast, and is more abrasion-resistant than epoxy. On rare jobs we install it standalone — colder weather, tight timelines.",
  },
  {
    name: "Polished concrete",
    subtitle: "Grind, refine, densify, polish",
    img: "/gallery/residential/condo_polish.jpg",
    price: "$6 – $12 / sq ft installed",
    bestFor: "Condos, retail, warehouses, modern homes",
    desc: "Mechanical polish of the slab itself — no coating. Four to seven grinding passes, chemical densifier, then progressively finer polish. The floor gets better with age, never peels, and is what most LEED projects spec.",
  },
  {
    name: "Patio & pool-deck coatings",
    subtitle: "Traction, UV stability, waterproof",
    img: "/gallery/patio/polyaspartic_swimming_pool_coating.jpg",
    price: "$8 – $12 / sq ft installed",
    bestFor: "Pool decks, porches, stamped concrete repair",
    desc: "A textured polyaspartic system built for wet, UV-exposed exteriors. Slip-rated, won't yellow, and can be recoated every 8-10 years rather than torn out and replaced.",
  },
];

const suppliers = [
  {
    name: "Dur-A-Flex",
    role: "Commercial epoxy & urethane systems — our go-to for heavy-traffic and chemical-resistant work.",
  },
  {
    name: "Sherwin-Williams General Polymers",
    role: "Residential flake systems and pigmented topcoats.",
  },
  {
    name: "Sika",
    role: "Crack repair, structural fillers, moisture mitigation primers.",
  },
  {
    name: "Torginol",
    role: "Decorative flake blends — where most of the colour choices come from.",
  },
  {
    name: "HTC / Husqvarna",
    role: "Diamond grinders and tooling for prep and polished concrete.",
  },
];

const partners = [
  {
    name: "Cabinetry & storage",
    who: "[Partner name — Toronto garage cabinet specialist]",
    note: "Gladiator, NewAge, or custom millwork — we coordinate timing so cabinets drop in the week after the floor cures.",
  },
  {
    name: "Slatwall & organization",
    who: "[Partner name — GTA slatwall installer]",
    note: "Horizontal wall systems for bikes, tools, and seasonal gear. Installed after the coating for a clean finish around brackets.",
  },
  {
    name: "Overhead storage & lifts",
    who: "[Partner name — garage lift installer]",
    note: "Platform lifts and overhead racks. We hand off after the floor is fully cured so nothing gets dropped on fresh coatings.",
  },
  {
    name: "Drywall & paint",
    who: "[Partner name — GTA drywall/paint]",
    note: "For clients doing a full garage refresh, we sequence paint and drywall before our grind so dust doesn't settle into your fresh walls.",
  },
];

export default function FinishesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
            Finishes &amp; materials
          </p>
          <TextReveal
            as="h1"
            text="A plain-English guide to what goes on your floor."
            splitBy="words"
            staggerDelay={0.04}
            duration={0.7}
            className="mt-3 font-display text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl"
          />
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            There are a dozen coating systems on the market and a lot of
            contractors who use the terms interchangeably. Here&rsquo;s what
            each one is, what it costs, where it makes sense, and who we buy
            from.
          </p>
        </div>
      </section>

      {/* FINISHES GRID */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          Finish types
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Six systems, one rule — prep decides everything.
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Every system below starts with the same prep — diamond grind the
          slab, repair cracks and pits, moisture-test. Skipping prep is why
          cheap jobs fail in two winters, regardless of which coating went on
          top.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {finishes.map((f) => (
            <article
              key={f.name}
              className="rounded-2xl overflow-hidden border border-border bg-surface"
            >
              <div className="relative aspect-[16/10] bg-foreground/5">
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{f.name}</h3>
                <p className="text-sm text-muted">{f.subtitle}</p>
                <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                  {f.desc}
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-muted">
                      Typical price
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{f.price}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-muted">
                      Best for
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{f.bestFor}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted max-w-2xl">
          Prices are typical ranges for GTA residential jobs, including prep.
          Commercial pricing scales differently — the bigger the slab, the
          lower the per-sq-ft number. A real quote lands in your inbox within
          24 hours.
        </p>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* EPOXY VS POLYASPARTIC */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          The one question we get every week
        </p>
        <TextReveal
          as="h2"
          text="Epoxy or polyaspartic — which one do I want?"
          splitBy="words"
          staggerDelay={0.03}
          className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-3xl"
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">Epoxy</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>Thicker build, better at hiding slab imperfections.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>Longer working time — better for decorative flake broadcasts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>Lower material cost.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted mt-0.5">−</span>
                <span>Ambers (yellows) under UV if used as a standalone topcoat.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted mt-0.5">−</span>
                <span>Longer cure — can&rsquo;t walk on it for 12-24 hours.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-xl font-semibold">Polyaspartic</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>UV-stable — won&rsquo;t yellow.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>Cures fast — walkable in hours, not days.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">+</span>
                <span>More abrasion and chemical resistant.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted mt-0.5">−</span>
                <span>Shorter pot life — harder to work with decorative flake.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-muted mt-0.5">−</span>
                <span>Higher material cost.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-foreground text-background p-8">
          <p className="text-sm uppercase tracking-[0.15em] text-background/60">
            Our answer
          </p>
          <p className="mt-3 font-display text-xl md:text-2xl font-semibold max-w-3xl">
            Epoxy as the basecoat for build and adhesion, polyaspartic as the
            topcoat for UV stability and durability. You get the best of both —
            which is what we install on nearly every residential job.
          </p>
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* SUPPLIERS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          What we buy, and from whom
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Trusted suppliers.
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          We don&rsquo;t buy big-box-store coatings. These are the
          manufacturers and tooling partners we&rsquo;ve used for years.
        </p>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {suppliers.map((s) => (
            <li key={s.name} className="py-5 grid md:grid-cols-3 gap-4">
              <span className="font-display text-lg font-semibold">
                {s.name}
              </span>
              <span className="md:col-span-2 text-foreground/80">{s.role}</span>
            </li>
          ))}
        </ul>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* PARTNERS */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          Beyond the floor
        </p>
        <TextReveal
          as="h2"
          text="The partners we hand off to."
          splitBy="words"
          staggerDelay={0.04}
          className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl"
        />
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          We&rsquo;re floor specialists — we don&rsquo;t try to be a one-stop
          renovation shop. But we work with a small group of trades we trust
          for the rest of the garage. We coordinate timing so nothing gets
          damaged mid-install, and we don&rsquo;t take a referral fee.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-accent font-medium">{p.who}</p>
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                {p.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* CARE */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          After install
        </p>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Care &amp; maintenance.
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold">Day-to-day</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Sweep or dust-mop as needed. Warm water and a pH-neutral cleaner
              for anything stubborn. No acidic cleaners, no citrus degreasers
              — they dull the topcoat over time.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Winter</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Salt melt is fine on the floor. Wipe up standing brine within a
              day to avoid a residue film. A rubber-backed mat inside the door
              catches most of it.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Long-term</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
              A flake/polyaspartic system lasts 10-15+ years in a residential
              garage. If the topcoat ever wears thin in a traffic lane, we can
              scuff and recoat rather than tear it out.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <TextReveal
            as="h2"
            text="Still not sure which system is right?"
            splitBy="words"
            staggerDelay={0.04}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight max-w-3xl mx-auto"
          />
          <p className="mt-4 text-background/70 max-w-xl mx-auto">
            Send a photo of your floor and we&rsquo;ll tell you honestly which
            finish fits the job — and what you should budget.
          </p>
          <div className="mt-8 flex justify-center">
            <Magnetic radius={120} strength={0.35}>
              <Link
                href="/quote"
                className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-medium hover:bg-accent-hover transition-colors"
              >
                Get a Free Quote
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
