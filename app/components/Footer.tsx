import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-xl font-semibold tracking-tight flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-accent" />
            Murray Floor Co.
          </div>
          <p className="mt-4 max-w-md text-sm text-background/70">
            Epoxy and polyaspartic floors for homes and commercial spaces across
            the Greater Toronto Area. One-day installs. Five-year warranty.
          </p>
          <p className="mt-3 text-xs text-background/40">
            Formerly Garage Enhancements.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-background/50">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services/residential-epoxy" className="hover:text-accent">Residential Epoxy</Link></li>
            <li><Link href="/services/commercial-flooring" className="hover:text-accent">Commercial Flooring</Link></li>
            <li><Link href="/services/polished-concrete" className="hover:text-accent">Polished Concrete</Link></li>
            <li><Link href="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-background/50">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li><a href="tel:4165550123" className="hover:text-accent">(416) 555-0123</a></li>
            <li><a href="mailto:mikey@murrayfloor.co" className="hover:text-accent">mikey@murrayfloor.co</a></li>
            <li>Toronto &amp; GTA</li>
          </ul>
          <Link
            href="/quote"
            className="mt-6 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap items-center justify-between gap-2 text-xs text-background/50">
          <span>© {new Date().getFullYear()} Murray Floor Co.</span>
          <span>Serving the GTA since 2007</span>
        </div>
      </div>
    </footer>
  );
}
