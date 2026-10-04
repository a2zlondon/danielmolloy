import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ServiceSection } from "@/components/service-page";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Case Studies",
  description:
    "Case studies from Daniel Molloy Ltd are shared privately under NDA, and anonymised where confidentiality requires it.",
  alternates: { canonical: `${SITE_URL}/case-studies` },
};

const structure = [
  {
    title: "Investment or business context",
    description: "The deal, the decision, or the situation the client faced.",
  },
  {
    title: "Technical assessment",
    description: "What was examined, with what access, in what timeframe.",
  },
  {
    title: "Key findings",
    description: "What the evidence showed, and what it meant commercially.",
  },
  {
    title: "Recommended execution path",
    description: "The plan, with priorities, owners, costs, and timelines.",
  },
  {
    title: "Actions taken",
    description: "What the client and the company actually did.",
  },
  {
    title: "Outcome",
    description: "What changed, measured against the original decision.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Case studies
              </h1>
              <p className="text-xl text-muted-foreground">
                The work is confidential. Case studies are shared privately,
                under NDA, and anonymised where confidentiality requires it.
              </p>
            </div>
          </div>
        </section>

        <ServiceSection
          heading="What a case study covers"
          lead="Every written case follows the same structure, so you can compare the work to the decision in front of you."
          tone="card"
          items={structure}
        />

        <ServiceSection heading="How to see relevant work" tone="background">
          <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
            <p>
              Ask, and Daniel will walk you through work relevant to your
              transaction or situation. References from named leaders are on
              the{" "}
              <Link
                href="/"
                className="underline underline-offset-4 hover:no-underline"
              >
                home page
              </Link>
              .
            </p>
          </div>
        </ServiceSection>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
