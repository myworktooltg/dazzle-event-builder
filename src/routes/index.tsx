import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Gallery } from "@/components/site/Gallery";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "Amy Dazzle Event | Event Planning in Onitsha, Anambra";
const description =
  "Premium event planning in Onitsha, Anambra State. Weddings, traditional ceremonies, corporate events, birthdays, decor and full coordination across Nigeria.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Amy Dazzle Event",
          description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Onitsha",
            addressRegion: "Anambra State",
            addressCountry: "NG",
          },
          telephone: "+234 801 234 5678",
          email: "hello@amydazzleevent.com",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream">
      <SiteNav />
      <main>
        <Hero />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
