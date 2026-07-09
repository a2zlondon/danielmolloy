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

const audiences = [
  {
    title: "Investors",
    description:
      "Independent technical due diligence for investors evaluating software, SaaS and AI businesses before committing capital. Whether it is a seed round, an SEIS investment, a family office deal, or an acquisition, we assess whether the technology can support the growth plan, whether AI and platform claims are real or mostly marketing, and where technical debt, security, or cloud cost could create spend after the deal.",
  },
  {
    title: "Corporate Finance & M&A Advisers",
    description:
      "Independent technology due diligence that gives your clients confidence in the technology behind the deal. We support corporate finance advisers, M&A brokers, and transaction teams when software, SaaS, AI, or cloud risk needs deeper review without slowing the deal timetable — translating technical evidence into commercial implications, management questions, and remediation priorities.",
  },
  {
    title: "Law Firms",
    description:
      "Technical due diligence alongside legal due diligence. We support corporate, M&A, technology, IP and data lawyers when a client needs technical evidence on risks that could affect valuation, warranties, indemnities, disclosure, or transaction terms — working under NDA with legal teams, buyers, sellers, and advisers.",
  },
  {
    title: "Founders",
    description:
      "Prepare before a buyer's technical due diligence finds the issues. We review code, architecture, security, cloud, AI claims, documentation, and team dependency through the lens of a buyer's due diligence process, so you know what to fix, what to evidence, and what to explain before investment, acquisition, or commercial due diligence begins.",
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
        <section id="who-we-work-with" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technical due diligence is one service with one question behind it: what is the technology of this company really worth? Before money changes hands, we assess the product, code, cloud, data, AI claims, security, documentation, and team dependency so everyone understands what is really being bought.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The closest analogy is a property survey: the report is the evidence, but what you are really buying is confidence — what is solid, what is fragile, what needs fixing, and what questions should be answered before completion.
            </p>
            <h2 className="text-3xl font-light mt-14 mb-8">Who we work with</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {audiences.map((audience) => (
                <Card key={audience.title} className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 h-full">
                    <h3 className="text-xl font-medium mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {audience.description}
                    </p>
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
