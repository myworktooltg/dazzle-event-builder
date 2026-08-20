import { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "./Reveal";
import { galleryItems } from "@/lib/site-images";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? undefined : galleryItems[openIndex];

  const step = (dir: number) => {
    setOpenIndex((i) =>
      i === null ? i : (i + dir + galleryItems.length) % galleryItems.length,
    );
  };

  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-16 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">
            Our Portfolio
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-medium text-ink">
            Moments We Have Brought To Life
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-warm sm:text-base">
            A glimpse into the weddings, parties and ceremonies we have styled and coordinated
            across Nigeria.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {galleryItems.map((item, i) => (
            <Reveal key={item.url} delay={(i % 3) * 120} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`View larger image: ${item.caption}`}
                className="group relative block w-full overflow-hidden bg-charcoal focus:ring-2 focus:ring-gold focus:outline-none"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-left text-xs tracking-[0.14em] text-warm-white uppercase">
                    {item.caption}
                  </span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(o) => !o && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl border-gold-line bg-rich-black p-2 sm:p-4">
          <DialogTitle className="sr-only">{current?.caption ?? "Gallery image"}</DialogTitle>
          {current ? (
            <div className="relative">
              <img
                src={current.url}
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="max-h-[75vh] w-full object-contain"
              />
              <p className="py-4 text-center text-xs tracking-[0.18em] text-gold uppercase">
                {current.caption}
              </p>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-line bg-rich-black/70 text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="absolute top-1/2 right-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold-line bg-rich-black/70 text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
