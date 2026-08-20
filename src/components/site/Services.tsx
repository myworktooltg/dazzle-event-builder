import { Heart, Briefcase, Gem, Gift, Flower2, CalendarCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    copy: "Full-service planning for traditional and white wedding ceremonies, from concept to execution.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    copy: "Seamless coordination for conferences, launches and corporate celebrations.",
  },
  {
    icon: Gem,
    title: "Traditional Ceremonies",
    copy: "Authentic styling and coordination for igba nkwu and other cultural rites across ethnic traditions.",
  },
  {
    icon: Gift,
    title: "Birthdays and Anniversaries",
    copy: "Memorable milestone celebrations tailored to your story and style.",
  },
  {
    icon: Flower2,
    title: "Decor and Styling",
    copy: "Bespoke decor concepts, floral design and venue transformation.",
  },
  {
    icon: CalendarCheck,
    title: "Full Event Coordination",
    copy: "End-to-end logistics management so you can enjoy your own event.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-charcoal py-16 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">What We Offer</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-medium text-warm-white">
            Services Designed Around Your Vision
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 120}>
              <Card className="group h-full rounded-none border border-gold-line bg-gradient-to-b from-charcoal to-rich-black p-8 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-gold">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 text-gold transition-colors duration-300 group-hover:border-gold">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-warm-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#e5e0d5]/75">{service.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
