import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { logoMark } from "@/lib/site-images";

const links = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-gold-line bg-rich-black/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logoMark}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
            aria-hidden="true"
          />
          <span className="truncate font-wordmark text-lg font-semibold tracking-[0.22em] text-gold uppercase sm:text-xl">
            Amy Dazzle Event
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-underline text-xs font-medium tracking-[0.18em] text-[#e5e0d5] uppercase transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="rounded-none border-gold bg-transparent text-xs tracking-[0.16em] text-gold uppercase transition-all duration-300 hover:scale-[1.03] hover:bg-gold hover:text-charcoal"
          >
            <a href="#contact">Book A Consultation</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-gold-line text-gold"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-gold-line bg-rich-black text-[#e5e0d5] sm:max-w-sm"
            >
              <SheetTitle className="px-6 pt-6 font-wordmark text-xl tracking-[0.2em] text-gold uppercase">
                Amy Dazzle Event
              </SheetTitle>
              <div className="flex flex-col gap-6 px-6 pt-10">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-[#e5e0d5] transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  asChild
                  className="mt-4 rounded-none bg-gold text-xs tracking-[0.16em] text-charcoal uppercase hover:bg-gold-deep"
                >
                  <a href="#contact" onClick={() => setOpen(false)}>
                    Book A Consultation
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
