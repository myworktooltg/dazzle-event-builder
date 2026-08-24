# Dazzle & Shine Landing

Business Requirements Document (BRD)

Amy Dazzle Event – Landing Page

Client: Amy Dazzle Event (Event Planning, Onitsha, Anambra State, Nigeria) Deliverable: Single-page marketing website Build platform: Lovable AI

1. Project Overview

Amy Dazzle Event needs a single-page, modern, aesthetic website that introduces the brand, showcases past work, lists services, and captures leads through a contact form.

2. Objectives

Present a premium, trustworthy first impression for a Nigerian event planning brand

Showcase portfolio work visually

Clearly communicate service offerings

Convert visitors into inquiries via a contact form

3. Target Audience

Individuals and organizations in Nigeria (and diaspora) planning weddings, parties, corporate events, and traditional/cultural ceremonies.

4. Site Structure (Single Page, No Routing)

Hero Section — Brand name "Amy Dazzle Event" in bold, gold-colored lettering, tagline, background imagery, primary CTA button

Portfolio Gallery — Grid/masonry of past event photography, diverse Nigerian imagery

Services Section — Icon-led cards for each service offering

Contact Form — Name, email, phone, event type, message fields, submit action

Footer — Social links, contact info, copyright

5. Design Requirements

2026-modern aesthetic: clean layout, generous whitespace, subtle motion/scroll animation

Color palette anchored by gold (brand accent) with a sophisticated neutral base (black/charcoal/cream)

High-quality, modern icon set (e.g., Lucide-style outline icons) — no emojis

Premium, legible font pairing (distinctive display font for headings, clean sans-serif for body)

Fully responsive (mobile, tablet, desktop)

6. Imagery Requirements

Photography should visually represent Nigeria's diversity, including people of Igbo, Yoruba, Hausa, and Efik descent, both male and female, in event/celebration settings (weddings, parties, traditional attire where appropriate).

7. Functional Requirements

Smooth-scroll single-page navigation (Home, Gallery, Services, Contact)

Working contact form with field validation

Optimized image loading for gallery

Fast load performance, SEO-friendly meta tags

8. Out of Scope

Multi-page navigation or routing

CMS/admin backend

E-commerce/booking payment integration

9. Success Criteria

Visually polished, on-brand, mobile-responsive single page

Functional contact form

Clear service and portfolio presentation

 

10. Lovable Build Prompt (Plain Text)

Build a single-page website (one route, no multi-page navigation) for "Amy Dazzle Event," a premium event planning company based in Onitsha, Anambra State, Nigeria. Client has given full approval to generate all imagery, copy, and the logo.

 

TECH STACK

React with Tailwind CSS and shadcn/ui components. Use functional components, responsive utility classes, and shadcn/ui primitives (Button, Card, Input, Textarea, Select, NavigationMenu) wherever they fit naturally.

 

COLOR PALETTE (use these exact hex values as Tailwind custom theme colors)

- Gold (primary accent, brand color): #D4AF37

- Deep Gold (hover/active state): #B8952C

- Champagne Gold (subtle highlight, light backgrounds): #E9D9A0

- Charcoal (primary dark background): #14110F

- Rich Black (hero/footer background): #0B0A08

- Cream (light section background): #FAF6EE

- Warm White (card background on dark sections): #FFFDF8

- Body text on dark: #E5E0D5

- Body text on light: #3A3630

- Muted text/secondary: #8A8375

- Border/divider on dark: rgba(212,175,55,0.25)

 

TYPOGRAPHY

- Headings and display text: "Playfair Display" (serif, weights 500 to 700)

- Logo wordmark: "Cormorant Garamond" (serif, weight 600, letter-spacing wide)

- Body text, nav, buttons, form labels: "Inter" (sans-serif, weights 400 to 600)

Import all three from Google Fonts. Use Playfair Display for every section headline, Inter for paragraphs, nav links, form fields, and captions.

 

GLOBAL STYLE NOTES

- No emojis anywhere. Use a consistent line-icon set (lucide-react) for all iconography.

- No em dashes in any copy. Use periods, commas, or colons instead.

- Smooth scroll behavior between sections via anchor links.

- Buttons: gold fill (#D4AF37) with charcoal text on primary CTAs, hover transitions to #B8952C with a slight scale (1.03) and soft gold glow shadow, transition duration 300ms ease.

- Section entrance animations: fade up plus slight opacity/translate-y on scroll into view (use an intersection observer or framer-motion), staggered for grids of cards or images.

- Consistent 96px to 128px vertical section padding on desktop, 48px to 64px on mobile.

 

SECTION 1: NAVIGATION BAR

- Fixed/sticky top nav, transparent over the hero, transitions to solid Rich Black (#0B0A08) with a subtle bottom border in gold at 25 percent opacity once the user scrolls past the hero.

- Left: small gold "Amy Dazzle Event" wordmark in Cormorant Garamond.

- Right: nav links "Home," "Gallery," "Services," "Contact," each in Inter, uppercase, letter-spacing wide, gold underline animating in from the left on hover.

- A gold outlined "Book A Consultation" button on the far right that smooth-scrolls to the contact section.

- Collapse to a hamburger menu (shadcn/ui Sheet or similar) below 768px width, opening a full-height Rich Black overlay menu.

 

SECTION 2: HERO

- Full viewport height section on Rich Black (#0B0A08) background with a full-bleed high-quality background image or slow auto-rotating image carousel of Nigerian celebration scenes (weddings, traditional ceremonies, elegant event decor), darkened with a charcoal gradient overlay for text legibility.

- Centered content stack:

  - Wordmark "Amy Dazzle Event" in bold gold (#D4AF37) Cormorant Garamond, large scale (roughly 56px to 88px responsive), letter-spacing wide, with a subtle fade-in and gentle upward drift animation on page load.

  - Headline directly beneath in Playfair Display, warm white: "Crafting Unforgettable Celebrations Across Nigeria"

  - Subheadline in Inter, muted cream tone: "From traditional Igbo, Yoruba, Hausa and Efik ceremonies to modern weddings and corporate events, we design and deliver every detail with elegance and precision."

  - Two buttons side by side: primary gold-filled "Book A Consultation" (scrolls to Contact) and a secondary ghost/outline gold button "View Our Work" (scrolls to Gallery).

  - Small scroll-down indicator icon at the bottom center, gently bouncing.

- Background carousel, if used, auto-advances every 6 seconds with a smooth crossfade, and includes photography representing a mix of Igbo, Yoruba, Hausa, and Efik men and women in celebratory settings.

 

SECTION 3: PORTFOLIO GALLERY

- Background: Cream (#FAF6EE), text dark charcoal.

- Section eyebrow label in gold, uppercase, small: "Our Portfolio"

- Headline in Playfair Display: "Moments We Have Brought To Life"

- Short supporting line in Inter: "A glimpse into the weddings, parties and ceremonies we have styled and coordinated across Nigeria."

- Responsive masonry or CSS grid gallery, 3 columns desktop, 2 columns tablet, 1 column mobile, with images of varied aspect ratios for visual rhythm.

- Populate with a diverse set of AI-generated or stock-style images depicting Nigerian celebrations, explicitly including men and women who read as Igbo, Yoruba, Hausa, and Efik, in event settings such as weddings, traditional attire ceremonies, birthdays, and corporate galas.

- Hover behavior: image scales slightly (1.05) within a fixed-overflow container, a charcoal gradient overlay fades in from the bottom, revealing a small caption (event type, e.g. "Traditional Wedding, Onitsha") in Inter with a gold "View" icon button.

- Clicking an image opens a lightbox/modal (shadcn/ui Dialog) with a larger view and left/right arrow navigation using lucide-react ChevronLeft/ChevronRight icons.

 

SECTION 4: SERVICES

- Background: Charcoal (#14110F), text warm white and cream.

- Section eyebrow label in gold: "What We Offer"

- Headline in Playfair Display: "Services Designed Around Your Vision"

- Grid of 6 service cards (shadcn/ui Card), 3 columns desktop, 2 tablet, 1 mobile:

  1. Wedding Planning, icon: heart, copy: "Full-service planning for traditional and white wedding ceremonies, from concept to execution."

  2. Corporate Events, icon: briefcase, copy: "Seamless coordination for conferences, launches and corporate celebrations."

  3. Traditional Ceremonies, icon: landmark or gem, copy: "Authentic styling and coordination for igba nkwu and other cultural rites across ethnic traditions."

  4. Birthdays and Anniversaries, icon: cake or gift, copy: "Memorable milestone celebrations tailored to your story and style."

  5. Decor and Styling, icon: flower or wand, copy: "Bespoke decor concepts, floral design and venue transformation."

  6. Full Event Coordination, icon: calendar-check, copy: "End-to-end logistics management so you can enjoy your own event."

- Each card: charcoal-to-near-black gradient background, thin gold border at low opacity, icon in a circular gold-outlined badge at the top, card lifts slightly (translate-y minus 4px) and border brightens to full gold opacity on hover, transition 300ms ease.

 

SECTION 5: CONTACT

- Background: Rich Black (#0B0A08) with a subtle radial gold glow behind the form.

- Two-column layout on desktop (stacked on mobile):

  - Left column: eyebrow label "Get In Touch," headline in Playfair Display "Let Us Plan Your Next Celebration," supporting Inter paragraph inviting inquiries, followed by a stacked list of contact details each with a lucide-react icon (phone icon plus phone number, mail icon plus email address, map-pin icon plus "Onitsha, Anambra State, Nigeria"), and a row of social icons (instagram, facebook, whatsapp) in circular gold-outlined buttons that fill solid gold on hover.

  - Right column: contact form card (shadcn/ui Card) on a slightly lighter charcoal surface with:

    - Full Name (Input)

    - Email Address (Input)

    - Phone Number (Input)

    - Event Type (Select: Wedding, Traditional Ceremony, Corporate Event, Birthday or Anniversary, Other)

    - Message (Textarea)

    - Gold-filled submit button labeled "Send Inquiry" with a paper-plane lucide icon, hover scale and glow consistent with global button style.

    - Input fields: transparent dark background, thin gold-toned border, border brightens to full gold and adds a soft glow on focus.

 

SECTION 6: FOOTER

- Background: Rich Black (#0B0A08), top border thin gold line at low opacity.

- Left: "Amy Dazzle Event" wordmark in gold Cormorant Garamond, small tagline underneath in Inter: "Elegant events, expertly delivered."

- Center or right: quick links (Home, Gallery, Services, Contact) and social icons repeated in smaller scale.

- Bottom bar: centered small copyright line in muted tone, "Copyright, current year, Amy Dazzle Event. All rights reserved."

 

RESPONSIVENESS AND PERFORMANCE

- Fully responsive across mobile, tablet and desktop breakpoints.

- Optimize and lazy-load gallery images.

- Use semantic HTML and accessible labels on all form fields and interactive icons.

- Include appropriate meta title and description referencing event planning services in Onitsha, Nigeria for SEO.

 

Deliver this as a polished, cohesive single-page experience that feels premium, warm and distinctly Nigerian, while remaining visually modern, minimal and elegant in its layout and motion.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dazzle-event-builder.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a94ebcc3-c48b-4b92-87b4-6a5c912c75ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
