import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Start with the decision",
    description:
      "What you are deciding, by when, and what happens if you get it wrong. The scope, timeline, and access follow from that.",
  },
  {
    number: "02",
    title: "Examine the evidence",
    description:
      "Code, architecture, contracts, costs, teams, claims: whatever bears on the decision.",
  },
  {
    number: "03",
    title: "Advise in plain English",
    description:
      "What is solid, what is fragile, what it means commercially, and what Daniel would do in your position.",
  },
  {
    number: "04",
    title: "Support the outcome",
    description:
      "A report and briefing, a seat at the table, or delivery under the same standards.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            How an engagement runs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The same structure whether it is a two-week review or a standing
            role. Confidential throughout.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Card key={step.number} className="border-0 shadow-sm">
              <CardHeader>
                <div className="text-6xl font-light text-muted-foreground mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
