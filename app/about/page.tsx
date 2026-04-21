import Link from "next/link";
import type { Metadata } from "next";
import { TextReveal } from "../components/unlumen/TextReveal";
import { AnimatedLine } from "../components/unlumen/AnimatedLine";
import { Magnetic } from "../components/unlumen/Magnetic";

export const metadata: Metadata = {
  title: "About — Murray Floor Co. (formerly Garage Enhancements)",
  description:
    "The story behind the rebrand. Meet Michael Murray and the team behind Murray Floor Co.",
};

const team = [
  {
    initials: "MM",
    name: "Michael Murray",
    role: "Founder",
    body: "Runs the business end-to-end — quotes, job walk-throughs, crew scheduling, call-backs. Three years in coatings, hands on every residential job.",
  },
  {
    initials: "AP",
    name: "Alina Petrova",
    role: "Operations Manager",
    body: "Keeps the schedule honest. If your job says Tuesday at 8 AM, that's because Alina blocked it. She's the reason we can promise on-time.",
  },
  {
    initials: "JR",
    name: "Jordan Reeves",
    role: "Commercial Lead",
    body: "Runs commercial and industrial jobs — warehouses, shops, condo garages. Fifteen years in coatings, MCAA-certified, estimating and project management.",
  },
  {
    initials: "PH",
    name: "Patrick Huang",
    role: "Accounting & Warranty",
    body: "Fixed-price quotes, clean invoices, warranty registration on every install. If you need a copy of anything from a job we did, Patrick has it.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
            About
          </p>
          <TextReveal
            as="h1"
            text="A new name. The same standard."
            splitBy="words"
            staggerDelay={0.04}
            duration={0.7}
            className="mt-3 font-display text-5xl md:text-6xl font-semibold tracking-tight max-w-3xl"
          />
          <p className="mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Murray Floor Co. is the rebrand of Garage Enhancements — a
            Toronto-area floor company that&rsquo;s been pouring epoxy since
            2007. Here&rsquo;s the story.
          </p>
        </div>
      </section>

      {/* 01 — THE STORY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
              01 · The story
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Garage Enhancements, acquired.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Garage Enhancements poured its first epoxy floor in 2007 — one of
              the earliest residential epoxy shops serving the GTA. For nearly
              two decades it was a one-owner operation out of Cambridge.
            </p>
            <p>
              During the pandemic, the business was acquired by the Murray
              family. Michael Murray stepped in to lead the operation in 2023,
              and has been building out the team and service lines ever since.
            </p>
            <p>
              In 2026 we rebranded to Murray Floor Co. The old name pointed at
              one room in the house. The new one reflects what the business
              actually does now — garages, basements, patios, polished concrete,
              and commercial work across the GTA and Southern Ontario.
            </p>
          </div>
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* 02 — MICHAEL MURRAY */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full rounded-2xl bg-tan relative overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-foreground/25 text-[10rem] leading-none select-none">
                  MM
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-[11px] uppercase tracking-[0.18em] text-foreground/50">
                Portrait pending · placeholder
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              Michael Murray — founder
            </p>
          </div>
          <div className="md:col-span-7">
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
              02 · Leadership
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
              The guy who runs the shop.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/80">
              <p>
                Michael runs Murray Floor Co. He does the quote walk-throughs
                himself, sets the standard on every install, and stays on-call
                for warranty questions years after the floor goes down.
              </p>
              <p>
                Three years running coatings across the GTA. Residential,
                commercial, polished concrete. He built the team around one
                idea — a floor should outlast the room it&rsquo;s in, and the
                people who installed it should still be a phone call away when
                it does.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* 03 — THE TEAM */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          03 · The team
        </p>
        <TextReveal
          as="h2"
          text="Small, senior, staying put."
          splitBy="words"
          staggerDelay={0.04}
          className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl"
        />
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          Four people full-time, plus two install crews we&rsquo;ve worked with
          for years. No sales desk, no call centre — the person who quotes your
          job is the person who&rsquo;s accountable for it.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {team.map((m) => (
            <div
              key={m.initials}
              className="rounded-2xl border border-border bg-surface p-6 flex gap-5 items-start"
            >
              <div className="shrink-0 h-16 w-16 rounded-full bg-tan border border-border flex items-center justify-center font-display text-xl font-semibold text-foreground/60">
                {m.initials}
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="text-sm text-accent font-medium">{m.role}</p>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                  {m.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AnimatedLine className="mx-auto max-w-5xl" />

      {/* 04 — THE REBRAND */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
          04 · The rebrand
        </p>
        <TextReveal
          as="h2"
          text="What changed, what didn't."
          splitBy="words"
          staggerDelay={0.04}
          className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-xl font-semibold">What changed</h3>
            <ul className="mt-4 space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>New name: Murray Floor Co.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>New website, new email. Same phone number.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>
                  Broader scope — basements, patios, polished concrete,
                  commercial. Not just garages.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">What didn&rsquo;t</h3>
            <ul className="mt-4 space-y-3 text-foreground/80">
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>Same ownership, same leadership.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>Same service area — Toronto and the GTA.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>Same warranty. Same fixed-price quote approach.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">→</span>
                <span>Same finishes — epoxy, polyaspartic, polished concrete.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-surface border border-border p-8">
          <p className="text-sm uppercase tracking-[0.15em] text-muted">
            Existing customers
          </p>
          <p className="mt-2 font-display text-xl md:text-2xl font-semibold max-w-2xl">
            If you had your floor done under Garage Enhancements, your warranty
            carries over. Call the same number.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <TextReveal
            as="h2"
            text="Tell us about the floor."
            splitBy="words"
            staggerDelay={0.04}
            className="font-display text-3xl md:text-5xl font-semibold tracking-tight"
          />
          <p className="mt-4 text-background/70">
            Free fixed-price quote in 24 hours.
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
