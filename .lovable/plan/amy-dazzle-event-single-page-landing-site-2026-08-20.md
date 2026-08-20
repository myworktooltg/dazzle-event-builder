# Amy Dazzle Event — Single-Page Landing Site

A one-route premium landing page for an Onitsha-based event planning brand: gold on black/charcoal/cream, Playfair Display + Cormorant Garamond + Inter, scroll animations, and a validated inquiry form.

## Decisions made for you
- Contact form is front-end only: full validation, success toast, no backend or database (matches the "no CMS/admin" scope). Easy to upgrade to stored leads later.
- Placeholder contact details used until you provide real ones: +234 801 234 5678, hello@amydazzleevent.com, Onitsha, Anambra State, Nigeria, and Instagram/Facebook/WhatsApp links pointing to placeholders.

## Page sections
1. **Sticky nav** — gold Cormorant wordmark left; Home, Gallery, Services, Contact links with left-to-right gold underline on hover; gold outlined "Book A Consultation" button. Transparent over hero, solid rich black with gold hairline after scroll. Below 768px it collapses to a hamburger opening a full-height black sheet menu.
2. **Hero** — full-viewport, auto-rotating (6s crossfade) background carousel of Nigerian celebration scenes with charcoal gradient overlay. Large gold wordmark fading up on load, Playfair headline "Crafting Unforgettable Celebrations Across Nigeria", Inter subheadline, gold-filled "Book A Consultation" + ghost "View Our Work", bouncing scroll indicator.
3. **Portfolio gallery** — cream background, gold eyebrow "Our Portfolio", headline "Moments We Have Brought To Life". Responsive 3/2/1 column grid with varied aspect ratios, hover zoom + gradient caption ("Traditional Wedding, Onitsha") with gold View button, and a lightbox dialog with chevron prev/next and keyboard arrows. Images lazy-loaded.
4. **Services** — charcoal background, 6 cards (Wedding Planning, Corporate Events, Traditional Ceremonies, Birthdays and Anniversaries, Decor and Styling, Full Event Coordination) with circular gold-outlined Lucide icon badges, gradient card surface, lift + border brighten on hover.
5. **Contact** — rich black with radial gold glow. Left: eyebrow, headline "Let Us Plan Your Next Celebration", contact details with phone/mail/map-pin icons, circular gold social buttons. Right: card with Name, Email, Phone, Event Type select, Message, and a gold "Send Inquiry" button.
6. **Footer** — gold wordmark and tagline, quick links, small social icons, centered copyright with the current year.

## Imagery
About 12 images generated for hero and gallery, depicting Igbo, Yoruba, Hausa and Efik men and women in weddings, traditional ceremonies, birthdays and corporate galas, plus decor and venue shots. Generated images are uploaded as CDN assets so the repo stays light. A simple gold monogram logo mark is generated for the nav and footer.

## Technical notes
- Everything lands in `src/routes/index.tsx` (replacing the placeholder) with section components under `src/components/`; no extra routes.
- Palette and fonts added as Tailwind v4 tokens in `src/styles.css` (`--color-gold`, `--color-charcoal`, `--color-rich-black`, `--color-cream`, etc.), with light/dark base tokens remapped to the brand. Google Fonts loaded via `<link>` in `src/routes/__root.tsx` head, never a CSS `@import`.
- shadcn/ui primitives: Button, Card, Input, Textarea, Select, Dialog, Sheet, Sonner toast. Icons from lucide-react only, no emojis.
- Scroll reveal via a small `useInView` intersection-observer hook with staggered delays; smooth scroll through `scroll-behavior: smooth` and `scroll-mt` offsets for the fixed nav.
- Form validation with zod + react-hook-form: required name, valid email, Nigerian-friendly phone check, required event type, message length limits; inline error messages, accessible labels.
- SEO: route-level `head()` with an Onitsha event-planning title/description, og and twitter tags, single H1, alt text on every image, and LocalBusiness JSON-LD.
