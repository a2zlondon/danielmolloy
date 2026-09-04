import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Before you invest, sign, or build — talk it through.
        </h2>
        <p className="text-xl mb-8 text-background/80 max-w-2xl mx-auto">
          Book a confidential call. Bring the decision. Daniel will say how he
          can help — or tell you plainly if he cannot.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
          <a href={BOOK_CALL_URL}>Book a call</a>
        </Button>
      </div>
    </section>
  );
}
