import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
import { Capabilities } from "@/components/capabilities";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, faqs } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FaqPageJsonLd } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <FaqPageJsonLd faqs={faqs} />
      <Nav />
      <main>
        <Hero />
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Daniel Molloy is a fractional CTO for scale-ups, Series A+ companies, banks, fintech, and enterprises. He offers retainer-led technical leadership and strategy—turning complexity into clarity—remotely or on-site in the UK, Europe, UAE, Saudi Arabia, and the US. Often referred by VCs, accelerators, and advisory firms.
            </p>
          </div>
        </section>
        <PricingTiers />
        <Testimonials />
        <Capabilities />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
