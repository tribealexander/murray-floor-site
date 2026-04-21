import type { Metadata } from "next";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Contact — Murray Floor Co.",
  description:
    "Get a fixed-price quote in 24 hours. Call, email, or fill in the form — whichever you prefer.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">
        Contact
      </p>
      <h1 className="mt-2 font-display text-5xl md:text-6xl font-semibold tracking-tight">
        Let&rsquo;s talk floors.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Fastest path to a real price is the form — rough dimensions and a
        couple of photos are enough. Prefer to call or email? Those work too.
      </p>

      {/* 3 methods */}
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-display text-lg font-semibold">Call</h3>
          <p className="mt-2 text-muted text-sm">Monday–Saturday, 8am–6pm.</p>
          <a
            href="tel:4165550123"
            className="mt-4 inline-block font-medium text-accent"
          >
            (416) 555-0123
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-display text-lg font-semibold">Email</h3>
          <p className="mt-2 text-muted text-sm">Reply within a business day.</p>
          <a
            href="mailto:mikey@murrayfloor.co"
            className="mt-4 inline-block font-medium text-accent break-all"
          >
            mikey@murrayfloor.co
          </a>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6">
          <h3 className="font-display text-lg font-semibold">Service area</h3>
          <p className="mt-2 text-muted text-sm leading-relaxed">
            Toronto, the wider GTA, Hamilton, Kawarthas, and Southern Ontario.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="mt-16">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Request a quote.
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          A real quote in your inbox within 24 hours. No pressure, no sales
          calls.
        </p>

        <div className="mt-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
