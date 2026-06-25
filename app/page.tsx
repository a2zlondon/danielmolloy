import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
import { Capabilities } from "@/components/capabilities";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, faqs } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { ActiveReviews } from "@/components/active-reviews";
import { DueDiligenceQuestions } from "@/components/due-diligence-questions";
import { FaqPageJsonLd } from "@/components/structured-data";
import { WorkingStyle } from "@/components/working-style";
import { DealConfidence } from "@/components/deal-confidence";

export default function Home() {
  return (
    <>
      <FaqPageJsonLd faqs={faqs} />
      <Nav />
      <main>
        <Hero />
        <WorkingStyle />
        <DealConfidence />
        <Testimonials />
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide technology due diligence for private equity firms, corporate finance advisers, and investors evaluating software businesses. Our work identifies risks, value potential, mitigation actions, and the practical roadmap required after close — grounded in hands-on engineering and technical consulting experience.
            </p>
          </div>
        </section>
        <DueDiligenceQuestions />
        <ActiveReviews />
        <PricingTiers />
        <Capabilities />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
