"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

export function ParallaxHero({ src, alt, children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!sectionRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ scale: "1.08" }}>
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-end pb-20">
        {children}
      </div>
    </section>
  );
}
