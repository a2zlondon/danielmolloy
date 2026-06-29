import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { HeroTypewriter } from "@/components/hero-typewriter";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-5xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            The technology survey for software businesses
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Before you invest in, acquire, advise on, or sell a software business, we inspect the technology so you know what you are really dealing with. We create transparency around{" "}
            <HeroTypewriter />.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">M&A tech due diligence</Badge>
            <Badge variant="secondary">20+ years in software</Badge>
            <Badge variant="secondary">Trusted by investors & advisers</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            London, UK — working with investors, founders, advisers, and law firms across Europe and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={BOOK_CALL_URL}>Book a call</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/who-we-are">Who we are</Link>
            </Button>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Like a property survey, but for software, SaaS, AI, cloud, code, and technical risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
