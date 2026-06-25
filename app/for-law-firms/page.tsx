import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BOOK_CALL_URL } from "@/lib/constants";

export const metadata = {
  title: "Technical due diligence for law firms",
  description:
    "Independent technical due diligence for law firms supporting software, SaaS, AI, and technology acquisitions. Code, architecture, cloud, security, technical debt, and AI capability review.",
};

const reviewAreas = [
  {
    title: "Software and SaaS acquisitions",
    description:
      "Codebase, architecture, deployment process, technical debt, contributor patterns, and delivery maturity.",
  },
  {
    title: "AI capability verification",
    description:
      "Whether AI claims are backed by real models, data, integration depth, operating costs, and defensible engineering.",
  },
  {
    title: "Cloud, security and resilience",
    description:
      "Infrastructure design, cloud spend, scalability limits, operational reliability, recovery posture, and security exposure.",
  },
  {
    title: "Team and knowledge risk",
    description:
      "Bus factor, documentation quality, key-person dependency, onboarding maturity, and post-completion continuity risk.",
  },
];

const handoffPoints = [
  "When legal due diligence identifies technology risk but needs engineering depth.",
  "When a client asks whether a SaaS or AI claim is technically real.",
  "When a buyer needs an independent technical report before signing or completion.",
  "When the deal team needs practical findings that can inform warranties, indemnities, price, or post-close planning.",
];

export default function ForLawFirmsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                For law firms
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Technical due diligence for software, SaaS and AI transactions
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
                We support corporate, M&A, technology, IP and data lawyers when a client needs a deeper technical review alongside legal due diligence. Our team assesses the code, architecture, cloud, security, AI claims, technical debt and delivery risk behind the transaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a confidential call</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/downloads/technical-due-diligence-report-coverage.pdf">
                    Download sample scope
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">
                      Legal due diligence answers legal questions.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      Contracts, IP ownership, data protection, licences and warranties are critical. But they do not show whether the product is maintainable, scalable, secure, or technically capable of supporting the valuation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl font-light">
                      Technical due diligence answers engineering questions.
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>
                      We give legal and deal teams a clear technical view: what works, what is fragile, what is overstated, what needs remediation, and what should be raised before completion.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-light mb-6">
                  When to bring us in
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {handoffPoints.map((point) => (
                    <Card key={point} className="border-0 shadow-sm">
                      <CardContent className="p-5">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {point}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-light mb-6">
                  What our technical review covers
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviewAreas.map((area) => (
                    <Card key={area.title} className="border-0 shadow-sm">
                      <CardHeader>
                        <CardTitle className="text-xl font-light">
                          {area.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {area.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-sm bg-card">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-3xl font-light mb-4">
                    Designed to support the transaction team
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Findings are written for lawyers, buyers, investment teams and advisers: risk ratings, commercial implications, remediation actions, questions for management, and post-close priorities. We work under NDA and can coordinate directly with the legal team, corporate finance adviser, buyer or client-side sponsor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild>
                      <a href={BOOK_CALL_URL}>Discuss a transaction</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/for-partners">View partner page</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
