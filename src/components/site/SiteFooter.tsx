import { Instagram, Facebook, MessageCircle } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/2348012345678" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-gold-line bg-rich-black">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="font-wordmark text-xl font-semibold tracking-[0.2em] text-gold uppercase">
              Amy Dazzle Event
            </p>
            <p className="mt-3 text-sm text-muted-warm">Elegant events, expertly delivered.</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.16em] text-[#e5e0d5] uppercase transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gold-line text-gold transition-colors duration-300 hover:bg-gold hover:text-charcoal"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gold-line pt-6 text-center text-xs text-muted-warm">
          Copyright, {new Date().getFullYear()}, Amy Dazzle Event. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
