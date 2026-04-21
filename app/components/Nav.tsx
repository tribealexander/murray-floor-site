"use client";

import Link from "next/link";
import { useState } from "react";
import { Magnetic } from "./unlumen/Magnetic";

const links = [
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/finishes", label: "Finishes" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" />
          Murray Floor Co.
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Magnetic radius={90} strength={0.25}>
            <Link
              href="/quote"
              className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
            >
              Get a Free Quote
            </Link>
          </Magnetic>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-foreground/80"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
