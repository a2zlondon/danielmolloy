import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
import { Capabilities } from "@/components/capabilities";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
