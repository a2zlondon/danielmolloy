import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Agree the scope",
    description:
      "We agree the reason for the review, decision deadline, and access required — usually documents, source code, cloud details, product evidence, and a few focused interviews.",
  },
  {
    number: "02",
    title: "Inspect the technology",
    description:
      "We inspect the code, architecture, cloud setup, security posture, AI claims, documentation, team dependency, and delivery process.",
  },
  {
    number: "03",
    title: "Explain what it means",
    description:
      "We translate technical and AI evidence into plain-English findings: what is solid, what is fragile, what needs fixing, and what could affect value.",
  },
  {
    number: "04",
    title: "Report and briefing",
    description:
      "You receive a concise report and live briefing so investors, founders, advisers, or lawyers know what questions to ask next.",
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
            A structured technical due diligence process designed for quick turnaround, founder preparation, and confidential deal timelines.
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
