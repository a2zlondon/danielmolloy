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
      "What am I really buying, and what could go wrong later?",
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
      "Add technical evidence to legal due diligence, warranties, and terms.",
  },
  {
    href: "/for-founders",
    title: "For Founders",
    description:
      "Prepare before a buyer's technical survey finds the issues.",
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
              Technical due diligence is the software equivalent of a property survey. Before someone invests, acquires, advises on, or sells a technology business, we inspect the product, code, cloud, data, AI claims, security, documentation, and team dependency so everyone understands what is really being bought.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The report is the evidence. What you are really buying is confidence: what is solid, what is fragile, what needs fixing, and what questions should be answered before money changes hands.
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
