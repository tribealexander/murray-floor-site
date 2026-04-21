import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Murray Floor Co. — Epoxy & Polyaspartic Floors | Toronto & GTA",
  description:
    "Epoxy, polyaspartic, and polished concrete floors across Toronto and the GTA. One installer on every job. Serving the GTA since 2007.",
  metadataBase: new URL("https://garageenhancements.ca"),
  openGraph: {
    title: "Murray Floor Co. — Epoxy & Polyaspartic Floors",
    description:
      "A floor that belongs to the rest of the house. One installer, every job, across Toronto and the GTA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
