import { Card, CardContent } from "@/components/ui/card";

const signals = [
  {
    title: "Independent",
    description:
      "No software to sell. No stake in the outcome beyond getting the decision right.",
  },
  {
    title: "Evidence-based",
    description:
      "Findings come from code, architecture, contracts, and costs — not from interviews alone.",
  },
  {
    title: "Plain English",
    description:
      "Board-ready findings. Clear risks, clear costs, clear next steps.",
  },
  {
    title: "Discreet",
    description:
      "Under NDA as standard. Most of the work is never spoken about.",
  },
];

export function DealConfidence() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] max-w-6xl mx-auto">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Why it works
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Judgement first. Technology second.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              An expensive technology decision needs more than a confident
              opinion. It needs evidence, examined by someone with nothing to
              sell on the back of it. That is what this practice does.
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
