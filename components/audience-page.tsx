import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BOOK_CALL_URL } from "@/lib/constants";

type AudiencePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  confidenceStatement: string;
  primaryCta?: string;
  secondaryCta?: {
    href: string;
    label: string;
  };
  sections: Array<{
    title: string;
    body: string;
  }>;
  proofPoints: string[];
  closingTitle: string;
  closingBody: string;
};

export function AudiencePage({
  eyebrow,
  title,
  intro,
  confidenceStatement,
  primaryCta = "Book a confidential call",
  secondaryCta = {
    href: "/downloads/technical-due-diligence-report-coverage.pdf",
    label: "Download sample scope",
  },
  sections,
  proofPoints,
  closingTitle,
  closingBody,
}: AudiencePageProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-light mb-6">{title}</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {intro}
          </p>

          <Card className="border-0 shadow-sm bg-foreground text-background mb-10">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg leading-relaxed">
                {confidenceStatement}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild>
              <a href={BOOK_CALL_URL}>{primaryCta}</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {sections.map((section) => (
              <Card key={section.title} className="border-0 shadow-sm h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-light mb-6">
              What the review helps you understand
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {proofPoints.map((point) => (
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

          <Card className="border-0 shadow-sm bg-card">
            <CardContent className="p-8 md:p-10">
              <h2 className="text-3xl font-light mb-4">{closingTitle}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {closingBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href={BOOK_CALL_URL}>Discuss a transaction</a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/who-we-are">Who we are</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
