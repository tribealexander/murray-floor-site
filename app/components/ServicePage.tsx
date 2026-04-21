import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../lib/gallery";

type Props = {
  eyebrow: string;
  title: string;
  blurb: string;
  heroImg: string;
  heroAlt: string;
  highlights: { label: string; body: string }[];
  bullets: string[];
  gallery: Photo[];
};

export function ServicePage({ eyebrow, title, blurb, heroImg, heroAlt, highlights, bullets, gallery }: Props) {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <Image src={heroImg} alt={heroAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-16">
          <p className="text-white/80 text-sm uppercase tracking-[0.2em]">{eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-semibold text-white tracking-tight max-w-3xl">
            {title}
          </h1>
          <p className="mt-5 text-white/80 max-w-xl">{blurb}</p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-medium hover:bg-accent-hover transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-10">
        {highlights.map((h) => (
          <div key={h.label}>
            <h3 className="font-display text-2xl font-semibold">{h.label}</h3>
            <p className="mt-3 text-muted leading-relaxed">{h.body}</p>
          </div>
        ))}
      </section>

      {/* What's included */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">What&rsquo;s included</p>
            <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight">
              No surprises on the invoice.
            </h2>
          </div>
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="text-accent mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Recent installs</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((p) => (
              <div key={p.src} className="relative aspect-square overflow-hidden rounded-lg bg-foreground/5">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/gallery" className="text-sm font-medium hover:text-accent">
              See full gallery →
            </Link>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-foreground text-background py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Ready for a floor that lasts?
          </h2>
          <p className="mt-4 text-background/70 max-w-xl mx-auto">
            Send us rough dimensions and a couple of photos — we&rsquo;ll come back
            with a fixed-price quote within 24 hours.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-white font-medium hover:bg-accent-hover transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
