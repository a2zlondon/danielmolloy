import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Technical due diligence for startups and investors
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            We reduce uncertainty before you invest, acquire, or build. Technology due diligence for private equity, corporate finance advisers, and investors evaluating software businesses. Our team creates transparency around technical maturity, debt, scalability, risk, and value potential.
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
              <Link href="/who-we-are">Who we are</Link>
            </Button>
          </div>
          <div className="pt-2">
            <p className="text-sm text-muted-foreground">
              Technical consulting depth. Clear findings. Decisions your deal team can defend.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
