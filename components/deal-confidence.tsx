import { Card, CardContent } from "@/components/ui/card";

const signals = [
  {
    title: "Scoped to the engagement",
    description:
      "From a rapid technical review to an embedded role inside a portfolio company, the engagement is scoped around the access, timeline, and decision in front of you.",
  },
  {
    title: "Plain-English findings",
    description:
      "Clear findings, risk ratings, commercial implications, and next steps that non-technical partners and operators can use.",
  },
  {
    title: "AI-aware technical depth",
    description:
      "We test AI claims against architecture, data, integration depth, costs, security, and defensibility, not just the demo.",
  },
  {
    title: "Senior team",
    description:
      "Small senior teams move quickly, ask direct questions, and keep the process proportionate rather than turning it into a heavyweight consulting exercise.",
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
              Senior technical judgement, on your timeline.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Investment teams need more than a technical opinion. They need a clear view of what is working, what is risky, and what needs attention — delivered at the speed the decision requires, whether that decision is a deal, a hire, or a build.
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
