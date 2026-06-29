import { Hero } from "@/components/hero";
import { PricingTiers } from "@/components/pricing-tiers";
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
import { ReportSampleDownload } from "@/components/report-sample-download";
import { ConsultationPrompt } from "@/components/consultation-prompt";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const audienceLinks = [
  {
    href: "/for-investors",
    title: "For Investors",
    description:
      "Is this organisation worth investing in?",
  },
  {
    href: "/for-corporate-finance",
    title: "For Corporate Finance & M&A Advisers",
    description:
      "Give your clients confidence in the technology behind the deal.",
  },
  {
    href: "/for-law-firms",
    title: "For Law Firms",
    description:
      "Identify technical risks your legal review cannot uncover alone.",
  },
  {
    href: "/for-founders",
    title: "For Founders",
    description:
      "Make your company investment-ready before due diligence begins.",
  },
];

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
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We provide technology due diligence for investors, corporate finance advisers, law firms, and founders evaluating or preparing software businesses. Our work creates confidence at the decision point — with evidence on risks, value potential, mitigation actions, and the practical roadmap required after close.
            </p>
            <div className="grid gap-4 md:grid-cols-2 mt-10">
              {audienceLinks.map((audience) => (
                <Card key={audience.href} className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 h-full">
                    <Link href={audience.href} className="group block h-full">
                      <h2 className="text-xl font-medium mb-3 group-hover:underline">
                        {audience.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {audience.description}
                      </p>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <DueDiligenceQuestions />
        <ActiveReviews />
        <PricingTiers />
        <ReportSampleDownload />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <ConsultationPrompt />
      <Footer />
    </>
  );
}
