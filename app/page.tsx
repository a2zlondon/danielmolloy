import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ, faqs } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FaqPageJsonLd } from "@/components/structured-data";
import { DealConfidence } from "@/components/deal-confidence";
import { ExperienceIncludes } from "@/components/client-logo-banner";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_URL } from "@/lib/constants";
import Link from "next/link";

export const metadata = {
  alternates: { canonical: SITE_URL },
};

const services = [
  {
    title: "Technical due diligence",
    href: "/services/technical-due-diligence",
    description:
      "An independent view of the technology behind a deal, before the money is committed.",
  },
  {
    title: "Technology advisory",
    href: "/services/technology-advisory",
    description:
      "Independent advice for boards and executive teams making decisions they cannot easily reverse.",
  },
  {
    title: "Fractional CTO",
    href: "/services/fractional-cto",
    description:
      "Senior technical leadership through growth, change, or recovery, without the full-time hire.",
  },
  {
    title: "AI governance & strategy",
    href: "/services/ai-governance",
    description:
      "Adopt AI where the evidence supports it. Govern it with the same discipline as any other risk.",
  },
  {
    title: "Cloud & software delivery",
    href: "/services/cloud-software-delivery",
    description:
      "When the advice calls for building, a senior team does the work. Delivery supports the advice. It never leads.",
  },
];

export default function Home() {
  return (
    <>
      <FaqPageJsonLd faqs={faqs} />
      <Nav />
      <main>
        <Hero />
        <ExperienceIncludes />
        <DealConfidence />
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8">
                One practice. Five ways to engage.
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {services.map((service) => (
                  <Card key={service.href} className="border-0 shadow-sm h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <h3 className="text-xl font-medium mb-3">
                        <Link
                          href={service.href}
                          className="hover:text-foreground/80 transition-colors"
                        >
                          {service.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {service.description}
                      </p>
                      <p className="mt-4">
                        <Link
                          href={service.href}
                          className="text-sm underline underline-offset-4 hover:no-underline"
                        >
                          Read more
                        </Link>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="who-we-work-with"
          className="py-24 bg-background"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-6">
                Who Daniel works with
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Investors first: venture capital partners, family offices,
                private equity, and angel investors. Then the CEOs, founders,
                boards, and CTOs facing the same decisions from the other side.
                The work is the same in both directions: an independent view of
                a technology decision that is hard to reverse.
              </p>
            </div>
          </div>
        </section>
        <Testimonials />
        <div className="bg-card pb-24 -mt-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Case studies are shared privately. Ask, and Daniel will walk you
              through relevant work under NDA.
            </p>
          </div>
        </div>
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
