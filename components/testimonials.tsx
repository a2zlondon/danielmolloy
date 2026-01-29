import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

type Testimonial = {
  headline: string;
  name: string;
  role: string;
  content: string;
  imageSrc?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const testimonials: Array<{
    headline: string;
    name: string;
    role: string;
    content: string;
  }> = [
    {
      headline: "Clarity and confidence",
      name: "Matt Platt",
      role: "Transformation Director",
      content:
        "Daniel and I worked together on some highly visible customer deliveries. Some of these were extremely complex but Daniel picked each up and turned them around in next to no time and to a great standard, meaning minimum time for on-site implementation and troubleshooting and maximum positive impact on Snell’s reputation with the customer (and colleagues!).",
    },
    {
      headline: "Transformation",
      name: "Rob Jones",
      role: "Director",
      content:
        "Daniel was a very helpful contact within the development team, willing to manage his time to assist us with ad-hoc queries without impacting his primary tasks. His cheerful nature, patience and willingness to explain solutions were appreciated in what could be a pressing environment.",
    },
    {
      headline: "AI & automation",
      name: "Glenn",
      role: "COO, X4 Group",
      content:
        "Dan has been an invaluable technical expert for the business in helping build out a core management information system, as well as taking the lead on AI and automation proof of concepts. Great to work with and very knowledgeable, would recommend!",
    },
  ];

  const hydrated: Testimonial[] = testimonials.map((t) => {
    if (t.name === "Glenn") return { ...t, imageSrc: "/images/testimonials/glenn.png" };
    if (t.name === "Matt Platt") return { ...t, imageSrc: "/images/testimonials/matt.png" };
    if (t.name === "Rob Jones") return { ...t, imageSrc: "/images/testimonials/rob.png" };
    return t;
  });

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-foreground shadow-2xl lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground to-foreground/70" />
            <Image
              src="/images/misura-stage.png"
              alt="Speaking at Misura.ai"
              width={1200}
              height={800}
              className="relative w-full h-auto object-cover opacity-85"
            />
          </div>
          <div className="lg:order-2">
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              What folks are saying
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Trust is built in the hard moments.
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              References from real deliveries—high-stakes, complex, and under pressure.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {hydrated.map((testimonial, idx) => (
            <Card key={idx} className="border-0 shadow-sm h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  {testimonial.headline}
                </p>

                <div className="flex items-center gap-1 text-foreground/80 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed flex-1">
                  “{testimonial.content}”
                </p>

                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border">
                  {testimonial.imageSrc ? (
                    // Use <img> for maximum compatibility with remote WP media.
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover bg-muted"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm">
                      {initials(testimonial.name)}
                    </div>
                  )}
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role || "Reference"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
