import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Phone numbers may contain digits, spaces, plus and dashes only."),
  eventType: z.string().min(1, "Please select an event type."),
  message: z.string().trim().min(10, "Please tell us a little more.").max(1000),
});

type FormValues = z.infer<typeof schema>;

const eventTypes = [
  "Wedding",
  "Traditional Ceremony",
  "Corporate Event",
  "Birthday or Anniversary",
  "Other",
];

const details = [
  { icon: Phone, label: "+234 801 234 5678", href: "tel:+2348012345678" },
  { icon: Mail, label: "hello@amydazzleevent.com", href: "mailto:hello@amydazzleevent.com" },
  { icon: MapPin, label: "Onitsha, Anambra State, Nigeria" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/2348012345678" },
];

const fieldClass =
  "mt-2 rounded-none border-gold/35 bg-transparent text-[#e5e0d5] placeholder:text-muted-warm focus-visible:border-gold focus-visible:ring-2 focus-visible:ring-gold/40";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", eventType: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Inquiry sent", {
      description: `Thank you ${values.name}. Our team will reach out shortly.`,
    });
    reset();
  };

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-rich-black py-16 md:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase">Get In Touch</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight font-medium text-warm-white">
            Let Us Plan Your Next Celebration
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#e5e0d5]/75 sm:text-base">
            Share a few details about your event and our planning team will get back to you with
            ideas, availability and a tailored proposal.
          </p>

          <ul className="mt-10 space-y-5">
            {details.map((item) => (
              <li key={item.label} className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-line text-gold">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="min-w-0 text-sm text-[#e5e0d5] transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="min-w-0 text-sm text-[#e5e0d5]">{item.label}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold text-gold transition-colors duration-300 hover:bg-gold hover:text-charcoal"
              >
                <social.icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Card className="rounded-none border border-gold-line bg-charcoal p-6 shadow-none sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-xs tracking-[0.14em] text-[#e5e0d5] uppercase">
                  Full Name
                </Label>
                <Input id="name" className={fieldClass} {...register("name")} />
                {errors.name ? (
                  <p className="mt-2 text-xs text-destructive">{errors.name.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="email" className="text-xs tracking-[0.14em] text-[#e5e0d5] uppercase">
                  Email Address
                </Label>
                <Input id="email" type="email" className={fieldClass} {...register("email")} />
                {errors.email ? (
                  <p className="mt-2 text-xs text-destructive">{errors.email.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs tracking-[0.14em] text-[#e5e0d5] uppercase">
                  Phone Number
                </Label>
                <Input id="phone" type="tel" className={fieldClass} {...register("phone")} />
                {errors.phone ? (
                  <p className="mt-2 text-xs text-destructive">{errors.phone.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="eventType" className="text-xs tracking-[0.14em] text-[#e5e0d5] uppercase">
                  Event Type
                </Label>
                <Select
                  value={watch("eventType")}
                  onValueChange={(v) => setValue("eventType", v, { shouldValidate: true })}
                >
                  <SelectTrigger id="eventType" className={`${fieldClass} w-full`}>
                    <SelectValue placeholder="Select an event type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-none border-gold-line bg-charcoal text-[#e5e0d5]">
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eventType ? (
                  <p className="mt-2 text-xs text-destructive">{errors.eventType.message}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="message" className="text-xs tracking-[0.14em] text-[#e5e0d5] uppercase">
                  Message
                </Label>
                <Textarea id="message" rows={4} className={fieldClass} {...register("message")} />
                {errors.message ? (
                  <p className="mt-2 text-xs text-destructive">{errors.message.message}</p>
                ) : null}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full rounded-none bg-gold text-xs tracking-[0.18em] text-charcoal uppercase transition-all duration-300 hover:scale-[1.03] hover:bg-gold-deep hover:gold-glow"
              >
                <Send className="mr-2 h-4 w-4" />
                {submitting ? "Sending" : "Send Inquiry"}
              </Button>
            </form>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
