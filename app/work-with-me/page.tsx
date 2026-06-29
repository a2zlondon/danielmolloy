import { PricingTiers } from "@/components/pricing-tiers";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ReportSampleDownload } from "@/components/report-sample-download";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description:
    "Technology due diligence services — technology surveys, acquisition reviews, investor assessments, AI capability verification, and founder readiness reviews.",
};

const additionalServices = [
  {
    title: "Acquisition Reviews",
    description:
      "Full technical due diligence for investors and acquirers evaluating software businesses.",
  },
  {
    title: "CTO Due Diligence",
    description:
      "Assessment of technical leadership, team structure, bus factor, and knowledge concentration.",
  },
  {
    title: "Startup Technical Assessments",
    description:
      "Rapid screening for investors evaluating pre-revenue or early-stage software companies.",
  },
  {
    title: "Investor Technical Reviews",
    description:
      "Independent technology assessment for VCs, family offices, and angel syndicates.",
  },
  {
    title: "AI Capability Assessments",
    description:
      "Verification of AI claims — model architecture, training data, inference costs, and genuine capability vs marketing.",
  },
  {
    title: "Broker Partnerships",
    description:
      "Technology specialist support for M&A brokers and corporate finance advisers on software deals.",
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
                Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Structured technology due diligence for investors, advisers, law firms, and founders. From rapid investor screens to full technology surveys and acquisition reports.
              </p>
              <p className="mt-6 text-muted-foreground">
                Supporting a legal due diligence process?{" "}
                <Link href="/for-law-firms" className="text-foreground underline hover:no-underline">
                  View technical due diligence for law firms
                </Link>
                .
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
                {additionalServices.map((service) => (
                  <Card key={service.title}>
                    <CardHeader>
                      <CardTitle>{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
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
