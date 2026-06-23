import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:order-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
              I reduce uncertainty before you{" "}
              <span className="font-medium">invest, acquire, or build</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
              Technical due diligence for private equity, corporate finance advisers, and investors evaluating software businesses. Show me the repo — I&apos;ll tell you what&apos;s actually going on.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">M&A tech due diligence</Badge>
              <Badge variant="secondary">20+ years in software</Badge>
              <Badge variant="secondary">Trusted by investors & advisers</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              London, UK — working with PE firms, brokers, and investors across Europe and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href={BOOK_CALL_URL}>Book a call</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="/who-we-are">Who we are</a>
              </Button>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Calm analysis. Clear findings. Decisions you can defend.
              </p>
            </div>
          </div>

          <div className="relative max-w-md mx-auto w-full lg:order-2">
            <div className="relative rounded-2xl overflow-hidden bg-foreground shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground via-foreground to-foreground/80" />
              <Image
                src="/images/portrait-suit.png"
                alt="Portrait of Daniel Molloy"
                width={900}
                height={1200}
                priority
                className="relative w-full h-auto object-cover object-top opacity-95 grayscale"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center rounded-full bg-background/10 px-4 py-2 text-background backdrop-blur">
                  <span className="text-sm opacity-80">Daniel Molloy</span>
                  <span className="mx-2 opacity-60">•</span>
                  <span className="text-sm font-medium">Lead Technical Advisor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
