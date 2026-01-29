import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              I build companies by turning{" "}
              <span className="font-medium">complexity into clarity</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
              I work at the intersection of software, data, and decision-making. I help teams design systems that scale, endure, and get used in the real world.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">20+ years in software</Badge>
              <Badge variant="secondary">Founder-level operator</Badge>
              <Badge variant="secondary">Strategy + execution</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href={BOOK_CALL_URL}>Book a call</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="#how-it-works">See how I work</a>
              </Button>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Calm decision-making. Clear systems. Measurable delivery.
              </p>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="relative max-w-md mx-auto w-full lg:order-2">
            <div className="relative rounded-2xl overflow-hidden bg-foreground shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground to-foreground/80" />
              <Image
                src="/images/portrait-hero.png"
                alt="Portrait of Daniel Molloy"
                width={900}
                height={1200}
                priority
                className="relative w-full h-auto object-cover opacity-95 -scale-x-100"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center rounded-full bg-background/10 px-4 py-2 text-background backdrop-blur">
                  <span className="text-sm opacity-80">Daniel Molloy</span>
                  <span className="mx-2 opacity-60">•</span>
                  <span className="text-sm font-medium">CTO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
