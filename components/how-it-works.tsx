import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Scope & Access",
    description:
      "We agree the deal context, timeline, and access requirements — source code, infrastructure, documentation, and key personnel interviews.",
  },
  {
    number: "02",
    title: "Technical Review",
    description:
      "Our team examines product, engineering, infrastructure, and team dimensions in parallel. We ask the questions founders hope you won't.",
  },
  {
    number: "03",
    title: "Findings Report",
    description:
      "A structured written report with risk ratings, evidence, and commercial implications — not jargon, but what you need to negotiate or walk away.",
  },
  {
    number: "04",
    title: "Management Briefing",
    description:
      "We present findings to your deal team, investment committee, or client. Available for follow-up questions throughout the transaction.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A disciplined process designed for deal timelines and confidentiality.
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
