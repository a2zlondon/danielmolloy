import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, faqs } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FaqPageJsonLd } from "@/components/structured-data";
import { WorkingStyle } from "@/components/working-style";
import { DealConfidence } from "@/components/deal-confidence";
import { ConsultationPrompt } from "@/components/consultation-prompt";
import { ExperienceIncludes } from "@/components/client-logo-banner";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const capabilities = [
  {
    title: "Technical Due Diligence",
    description:
      "An independent assessment of the technical value of a company before you invest or acquire — code, cloud, security, IP, AI claims, and team dependency.",
  },
  {
    title: "Embedded Technical Leadership",
    description:
      "Hands-on technical leadership inside your firm or a portfolio company, for as long as the gap needs filling.",
  },
  {
    title: "Portfolio Technical Support",
    description:
      "Ongoing technical oversight across a portfolio — pre-deal screening, board support, and a second opinion whenever technology risk needs one.",
  },
  {
    title: "AI & Data Advisory",
    description:
      "Verification and strategy for AI and data claims — what is genuinely proprietary, what is fragile, and what is marketing.",
  },
];

const sectors = [
  "Venture Capital",
  "Private Equity",
  "Family Offices",
  "Asset Managers",
  "Portfolio Companies",
];

export default function Home() {
  return (
    <>
      <FaqPageJsonLd faqs={faqs} />
      <Nav />
      <main>
        <Hero />
        <ExperienceIncludes />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center bg-card border-b border-border">
          <p className="text-sm text-muted-foreground">
            A specialist team, not a solo generalist —{" "}
            <Link href="/who-we-are" className="underline underline-offset-4 hover:no-underline">
              meet the consultants
            </Link>
            .
          </p>
        </div>
        <WorkingStyle />
        <DealConfidence />
        <Testimonials />
        <section id="who-we-work-with" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light mb-8">What we do</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 h-full">
                    <h3 className="text-xl font-medium mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <h2 className="text-3xl font-light mt-14 mb-6">Who we work with</h2>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <Badge key={sector} variant="outline" className="text-sm px-3 py-1.5">
                  {sector}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <ConsultationPrompt />
      <Footer />
    </>
  );
}
