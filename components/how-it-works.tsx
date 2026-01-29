import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We explore your challenges, goals, and technology needs. No commitment—just clarity on whether we're the right fit.",
  },
  {
    number: "02",
    title: "Tailored Proposal",
    description: "A custom roadmap and engagement structure aligned with your priorities, with flexibility to fit your needs.",
  },
  {
    number: "03",
    title: "Collaborative Engagement",
    description: "We act as your strategic partner, defining the tech roadmap, establishing KPIs, and ensuring every milestone drives measurable results.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Actionable documentation and insights delivered. Whether you need continued advisory or ad-hoc services, we're here for your long-term success.",
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
            A streamlined, professional process designed for impact.
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
