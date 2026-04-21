import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "./components/QuoteForm";
import { BeforeAfterShowcase } from "./components/BeforeAfterShowcase";
import { TextReveal } from "./components/unlumen/TextReveal";
import { Magnetic } from "./components/unlumen/Magnetic";
import { GlowButton } from "./components/unlumen/GlowButton";
import { Tilt } from "./components/unlumen/Tilt";
import { CountUp } from "./components/unlumen/CountUp";
import { AnimatedLine } from "./components/unlumen/AnimatedLine";
import { photos } from "./lib/gallery";

export default function Home() {
  const galleryPreview = photos.filter((p) => p.category !== "before-after").slice(0, 8);

  return (
    <div>
      {/* HERO — bento */}
      <section className="mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="md:col-span-6">
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
              Murray Floor Co. — Toronto &amp; GTA
            </p>
            <TextReveal
              as="h1"
              text="A floor that belongs to the rest of the house."
              splitBy="words"
              staggerDelay={0.04}
              duration={0.7}
              className="mt-4 font-display text-5xl md:text-7xl font-semibold tracking-tight"
            />
            <TextReveal
              text="Epoxy, polyaspartic, and polished concrete for homes, shops, and warehouses across the GTA and Southern Ontario."
              splitBy="words"
              staggerDelay={0.015}
              duration={0.5}
              className="mt-6 text-lg text-muted max-w-xl leading-relaxed"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic radius={120} strength={0.35}>
                <GlowButton blur="10px" opacity={0.55}>
                  <Link
                    href="/quote"
                    className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-medium hover:bg-accent-hover transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </GlowButton>
              </Magnetic>
              <Magnetic radius={90} strength={0.25}>
                <Link
                  href="/gallery"
                  className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 font-medium hover:bg-surface transition-colors"
                >
                  See Our Work
                </Link>
              </Magnetic>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 aspect-[4/5] md:aspect-square">
              <div className="relative row-span-2 overflow-hidden rounded-xl bg-foreground/5">
                <Image
                  src="/gallery/residential/img_0375.jpg"
                  alt="Finished flake epoxy garage floor with storage cabinets"
                  fill
                  priority
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl bg-foreground/5">
                <Image
                  src="/gallery/residential/condo_polish.jpg"
                  alt="Polished concrete floor in a Toronto condo"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl bg-foreground/5">
                <Image
                  src="/gallery/residential/polyaspartic_flake_coating.jpg"
                  alt="Polyaspartic flake coating detail"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 text-center">
          <Stat value={<><CountUp to={18} duration={2} digitEffect="blur" /><span>+</span></>} label="years in business" />
          <Stat value="Family-owned" label="owner-led" />
          <Stat value="Guaranteed" label="on time, on budget" />
          <Stat value="Southern Ontario" label="GTA · Hamilton · Kawarthas · SW Ont." />
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <BeforeAfterShowcase />

      {/* PROCESS */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">How it works</p>
          <TextReveal
            as="h2"
            text="Four steps, one phone call, zero mystery."
            className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl"
            staggerDelay={0.03}
          />
          <p className="mt-4 text-muted max-w-2xl">
            Most jobs go from first photo to finished floor in under three
            weeks. Here&rsquo;s what the path looks like.
          </p>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Send a few photos", d: "Snap your floor and the room from the form. We quote remotely for most residential jobs — no one has to come by unless the slab is complex." },
              { n: "02", t: "Fixed-price quote in 24 hours", d: "One price, no line items to argue about later. If it turns out to be more work on site, that’s on us — not on you." },
              { n: "03", t: "Prep & coat", d: "Diamond grinding, crack repair, moisture test. Then basecoat, decorative flake, UV-stable polyaspartic topcoat. Usually a day and a half on site." },
              { n: "04", t: "Walkaway", d: "Light use the next day, heavy use in 48 hours. Five-year warranty. If anything comes up, we pick up." },
            ].map((s) => (
              <li
                key={s.n}
                className="group relative rounded-xl border border-border bg-background p-6 transition-colors hover:bg-surface"
              >
                <div className="font-display text-accent text-xl font-semibold">{s.n}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">Gallery</p>
            <TextReveal
              as="h2"
              text="A few of the floors we’ve finished."
              className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight"
              staggerDelay={0.04}
            />
          </div>
          <Link href="/gallery" className="text-sm font-medium hover:text-accent">
            View full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryPreview.map((p) => (
            <Tilt key={p.src} rotationFactor={4} springOptions={{ stiffness: 220, damping: 22 }}>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-foreground/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-7xl" />

      {/* CTA / QUOTE */}
      <section id="quote" className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
            Get a quote
          </p>
          <TextReveal
            as="h2"
            text="Tell us about the floor."
            className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight"
            staggerDelay={0.04}
          />
          <p className="mt-4 mx-auto max-w-xl text-muted">
            Rough dimensions and a couple of photos are enough to get a price.
            No pressure, no sales calls — a real quote in your inbox in 24
            hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <span className="text-accent">✓</span> Residential, commercial, industrial
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-accent">✓</span> Fixed-price, no surprises
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="text-accent">✓</span> GTA &amp; Southern Ontario
            </span>
          </div>
        </div>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-xl md:text-2xl font-semibold flex items-baseline justify-center whitespace-nowrap">{value}</div>
      <div className="mt-1 text-xs md:text-sm text-muted">{label}</div>
    </div>
  );
}
