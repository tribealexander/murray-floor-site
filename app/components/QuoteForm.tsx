"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const MAX_PHOTOS = 6;

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [photos, setPhotos] = useState<File[]>([]);

  function handlePhotos(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []).slice(0, MAX_PHOTOS);
    setPhotos(files);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const payload = Object.fromEntries(
        Array.from(data.entries()).filter(([k]) => k !== "photos")
      );
      const res = await fetch("/api/quote", {
        method: "POST",
        body: JSON.stringify({ ...payload, photoCount: photos.length }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setPhotos([]);
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8">
        <h3 className="font-display text-2xl font-semibold">Got it — thanks.</h3>
        <p className="mt-3 text-muted">
          We&rsquo;ll reach out within 24 hours with next steps and a fixed
          price. If it&rsquo;s urgent, call{" "}
          <a href="tel:4165550123" className="text-accent">
            (416) 555-0123
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-surface p-6 md:p-8 space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <Field label="Email" name="email" type="email" required />

      <div>
        <label className="block text-sm font-medium mb-1.5">
          How should we reach you? <span className="text-accent">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(["Text", "Email", "Phone"] as const).map((method, i) => (
            <label
              key={method}
              className="relative flex items-center justify-center rounded-lg border border-border bg-background px-3 py-2.5 text-sm cursor-pointer hover:border-accent has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:text-accent has-[:checked]:font-medium transition-colors"
            >
              <input
                type="radio"
                name="contactMethod"
                value={method.toLowerCase()}
                defaultChecked={i === 0}
                className="sr-only"
                required
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Field
          label="Postal code"
          name="postalCode"
          required
          hint="First 3 is fine (e.g. M4T)"
          maxLength={7}
          placeholder="M4T"
        />
        <Field
          label="Approx. size (sq ft)"
          name="size"
          hint="Ballpark is fine"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          What are you looking at? <span className="text-accent">*</span>
        </label>
        <select
          name="service"
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          defaultValue=""
          required
        >
          <option value="" disabled>
            Choose one…
          </option>
          <option value="residential-epoxy">
            Residential epoxy (garage / basement)
          </option>
          <option value="commercial">Commercial or industrial</option>
          <option value="polished-concrete">Polished concrete</option>
          <option value="patio">Patio / pool deck</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Photos of the floor
          <span className="text-muted font-normal"> — optional, speeds up the quote</span>
        </label>
        <label className="group flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background/60 hover:bg-background cursor-pointer px-4 py-6 text-sm text-muted transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="mb-2 text-foreground/60 group-hover:text-accent transition-colors"
          >
            <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            <path d="M12 4v12" />
            <path d="m7 9 5-5 5 5" />
          </svg>
          <span className="text-foreground/80">
            {photos.length > 0
              ? `${photos.length} photo${photos.length > 1 ? "s" : ""} ready`
              : "Tap to add up to 6 photos"}
          </span>
          <span className="text-xs text-muted mt-1">
            JPG or PNG · a couple of the floor, a couple of the room
          </span>
          <input
            type="file"
            name="photos"
            accept="image/jpeg,image/png,image/heic,image/webp"
            multiple
            className="hidden"
            onChange={handlePhotos}
          />
        </label>
        {photos.length > 0 && (
          <ul className="mt-2 text-xs text-muted space-y-0.5">
            {photos.map((p) => (
              <li key={p.name} className="flex justify-between">
                <span className="truncate max-w-[16rem]">{p.name}</span>
                <span className="tabular-nums ml-3">
                  {(p.size / 1024 / 1024).toFixed(1)} MB
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">Anything else?</label>
        <textarea
          name="notes"
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
          placeholder="Timing, colour ideas, current floor condition…"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-foreground text-background py-3 font-medium hover:bg-accent transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request my quote"}
      </button>

      <p className="text-xs text-muted text-center">
        We&rsquo;ll only ask for your full address after you accept the quote.
      </p>

      {status === "error" && (
        <p className="text-sm text-accent">
          Something broke on our end. Try emailing{" "}
          <a href="mailto:mikey@murrayfloor.co" className="underline">
            mikey@murrayfloor.co
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  hint,
  placeholder,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  hint?: string;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
      />
      {hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
    </div>
  );
}
