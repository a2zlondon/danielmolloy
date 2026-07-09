import { PricingTiers } from "@/components/pricing-tiers";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ReportSampleDownload } from "@/components/report-sample-download";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Technical Due Diligence",
  description:
    "One service: independent technical due diligence that assesses the technical value of a software, SaaS or AI company before you invest, acquire, advise, or sell.",
};

const assessmentDimensions = [
  {
    title: "Code Quality & Technical Debt",
    description:
      "How well the software is built, where the debt sits, and what it would cost to fix — in terms a deal team can use.",
  },
  {
    title: "Security",
    description:
      "Vulnerabilities, data handling, access control, and the security practices behind the product.",
  },
  {
    title: "AI Capability Verification",
    description:
      "Whether AI claims are real — model architecture, training data, inference costs, and genuine capability vs marketing.",
  },
  {
    title: "Team & Key-Person Risk",
    description:
      "Bus factor, knowledge concentration, documentation, and how dependent the technology is on individual people.",
  },
  {
    title: "Scalability & Cloud Cost",
    description:
      "Whether the architecture supports the growth plan, and how cloud spend behaves as the business scales.",
  },
  {
    title: "Commercial Defensibility",
    description:
      "Whether the technology genuinely supports the story being sold — differentiation, IP, and platform risk.",
  },
];

export default function WorkWithMe() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Technical Due Diligence
              </h1>
              <p className="text-xl text-muted-foreground">
                One service: an independent assessment of the technical value of a company. We combine senior experience, modern tooling, and specialist reviewers to tell you what the technology is really worth — before the deal completes.
              </p>
            </div>
          </div>
        </section>

        <PricingTiers />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8 text-center">
                What we assess
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {assessmentDimensions.map((dimension) => (
                  <Card key={dimension.title}>
                    <CardHeader>
                      <CardTitle>{dimension.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{dimension.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ReportSampleDownload />
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
