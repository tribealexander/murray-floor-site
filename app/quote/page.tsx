import type { Metadata } from "next";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote — Murray Floor Co.",
  description:
    "Tell us about the floor. We'll send a fixed-price quote within 24 hours.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium">Get a quote</p>
      <h1 className="mt-2 font-display text-5xl md:text-6xl font-semibold tracking-tight">
        Tell us about the floor.
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Rough dimensions and a couple of photos are enough to get a price. No
        pressure, no sales calls — a real quote in your inbox in 24 hours.
      </p>

      <div className="mt-12">
        <QuoteForm />
      </div>

      <div className="mt-10 text-sm text-muted">
        Prefer to call? <a href="tel:4165550123" className="text-foreground font-medium">(416) 555-0123</a> — or
        email <a href="mailto:mikey@murrayfloor.co" className="text-foreground font-medium">mikey@murrayfloor.co</a>.
      </div>
    </div>
  );
}
