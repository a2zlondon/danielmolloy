import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Agree the scope",
    description:
      "We agree the reason for the engagement, the timeline, and the access required — whether that is a focused review, an embedded role, or ongoing portfolio support.",
  },
  {
    number: "02",
    title: "Get into the detail",
    description:
      "We inspect the code, architecture, cloud setup, security posture, AI claims, documentation, team dependency, and delivery process — or work directly alongside your team.",
  },
  {
    number: "03",
    title: "Explain what it means",
    description:
      "We translate technical and AI evidence into plain-English findings: what is solid, what is fragile, what needs fixing, and what could affect value.",
  },
  {
    number: "04",
    title: "Report and next steps",
    description:
      "You receive a concise report and briefing, or an ongoing working relationship, so your team knows what to do next.",
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
            A structured process designed for quick turnaround and confidential timelines, whether the engagement is a one-off review or an ongoing role.
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
