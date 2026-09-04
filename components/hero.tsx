import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
        <div className="max-w-5xl space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight">
            Independent technology advisory for investors
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            Daniel Molloy helps investors, boards, and technology companies
            make the right decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href={BOOK_CALL_URL}>Book a call</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="/services">How the practice works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
