import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { QuoteForm } from "../../components/QuoteForm";
import { locations, getLocation } from "../../lib/locations";

type Params = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return { title: "Not found" };
  return {
    title: `Epoxy Flooring in ${loc.name} — Murray Floor Co.`,
    description: `Fixed-price epoxy, polyaspartic, and polished concrete floors in ${loc.name}. Quote in 24 hours, finished in a day and a half.`,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: Params) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return (
    <div>
      <section className="relative">
        <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
          <Image
            src={loc.heroImg}
            alt={loc.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
          <div className="relative z-10 h-full">
            <div className="mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16">
              <p className="text-white/80 text-sm uppercase tracking-[0.2em]">
                {loc.region}
              </p>
              <h1 className="mt-4 font-display text-5xl md:text-7xl font-semibold text-white tracking-tight max-w-4xl">
                Epoxy flooring in {loc.name}.
              </h1>
              <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
                Fixed-price quote in 24 hours. Finished in a day and a half.
                Five-year warranty. {loc.name} homeowners and commercial
                clients, with a local crew.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#quote"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-medium hover:bg-accent-hover transition-colors"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:4165550123"
                  className="inline-flex items-center rounded-full bg-white/10 backdrop-blur border border-white/20 px-6 py-3 text-white font-medium hover:bg-white/20 transition-colors"
                >
                  (416) 555-0123
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Trust label="Quote turnaround" value="24 hours" />
          <Trust label="Typical job" value="1.5 days" />
          <Trust label="Warranty" value="5 years" />
          <Trust label="Price" value="Fixed, in writing" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
              {loc.name}, on the ground
            </p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              What we see on {loc.name} jobs.
            </h2>
            <p className="mt-6 text-muted leading-relaxed">{loc.localLine}</p>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.15em] text-muted">
                Areas we cover
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {loc.areas.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {loc.projectPhotos.map((src, i) => (
              <div
                key={src}
                className={`relative aspect-square overflow-hidden rounded-lg bg-foreground/5 ${
                  i === 0 ? "col-span-2 aspect-[4/3]" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`Recent project in ${loc.name}`}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {loc.testimonial && (
        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <p className="font-display text-2xl md:text-3xl leading-relaxed">
              &ldquo;{loc.testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.15em] text-muted">
              {loc.testimonial.author} — {loc.testimonial.neighbourhood}
            </p>
          </div>
        </section>
      )}

      <section id="quote" className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
            Get a quote
          </p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Tell us about your {loc.name} floor.
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-muted">
            Rough dimensions and a couple of photos are enough. A real,
            fixed-price quote in your inbox within 24 hours.
          </p>
        </div>
        <div className="mt-10">
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

function Trust({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl font-semibold">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
