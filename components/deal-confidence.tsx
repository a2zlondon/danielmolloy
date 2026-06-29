import { Card, CardContent } from "@/components/ui/card";

const signals = [
  {
    title: "Plain-English findings",
    description:
      "Clear findings, risk ratings, commercial implications, and follow-up questions that non-technical investors, founders, advisers, and lawyers can use.",
  },
  {
    title: "Survey without disruption",
    description:
      "Focused document requests, targeted interviews, and read-only technical access where possible, designed around live deal timelines and busy founders.",
  },
  {
    title: "Technical operators",
    description:
      "Assessments are led by people who understand architecture, code quality, cloud cost, delivery trade-offs, and AI implementation depth.",
  },
  {
    title: "Confidential handling",
    description:
      "NDA-led process, controlled access, no public client disclosure, and data handling expectations agreed before review work starts.",
  },
];

export function DealConfidence() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] max-w-6xl mx-auto">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Why it helps
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Confidence without slowing the decision.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Buyers and founders need more than a technical opinion. They need a clear due diligence view of what is working, what is risky, and what needs attention before investment, acquisition, or legal due diligence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {signals.map((signal) => (
              <Card key={signal.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-3">{signal.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {signal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
