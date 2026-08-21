import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/site-images";
import { cn } from "@/lib/utils";

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-rich-black"
    >
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.url}
            src={slide.url}
            alt={slide.alt}
            width={1920}
            height={1088}
            {...(i === 0 ? {} : { loading: "lazy" as const })}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms]",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-rich-black/85 via-charcoal/70 to-rich-black/95" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="hero-enter font-wordmark text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.05] font-semibold tracking-[0.14em] text-gold uppercase">
          Amy Dazzle Event
        </p>
        <div className="mx-auto mt-6 h-px w-24 bg-gold-line" />
        <h1 className="mt-8 font-display text-[clamp(1.7rem,3.6vw,2.9rem)] leading-tight font-medium text-warm-white">
          Crafting Unforgettable Celebrations Across Nigeria
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#e5e0d5]/85 sm:text-base">
          From traditional Igbo, Yoruba, Hausa and Efik ceremonies to modern weddings and corporate
          events, we design and deliver every detail with elegance and precision.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-none bg-gold px-8 text-xs tracking-[0.18em] text-charcoal uppercase transition-all duration-300 hover:scale-[1.03] hover:bg-gold-deep hover:gold-glow"
          >
            <a href="#contact">Book A Consultation</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-gold bg-transparent px-8 text-xs tracking-[0.18em] text-gold uppercase transition-all duration-300 hover:scale-[1.03] hover:bg-gold/10 hover:text-gold"
          >
            <a href="#gallery">View Our Work</a>
          </Button>
        </div>
      </div>

      <a
        href="#gallery"
        aria-label="Scroll to gallery"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
