import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const capabilities = [
  {
    category: "Product",
    skills: [
      "Active development & release cadence",
      "Roadmap credibility vs customer demand",
      "Feature claims vs actual capability",
      "Technical product-market fit signals",
    ],
  },
  {
    category: "Engineering",
    skills: [
      "Code quality & architecture review",
      "Test coverage & CI/CD maturity",
      "Security posture & vulnerability exposure",
      "Technical debt quantification",
      "Source control & contributor analysis",
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      "AWS, Azure & cloud architecture",
      "Cost profile & scalability limits",
      "Deployment process & reliability",
      "Disaster recovery & operational maturity",
    ],
  },
  {
    category: "Team",
    skills: [
      "Key personnel & bus factor",
      "Knowledge concentration risk",
      "Recruitment & retention exposure",
      "Documentation & onboarding quality",
    ],
  },
  {
    category: "Commercial",
    skills: [
      "Is the claimed technology defensible?",
      "Is the AI real or marketing wrapper?",
      "IP, licensing & third-party dependencies",
      "Integration risk for acquirers",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            What a report covers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured analysis across the dimensions that matter when capital is on the line.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {capabilities.map((cap, idx) => (
            <Card key={idx} className="border-0 shadow-none bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl font-medium">
                  {cap.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-3">
                  {cap.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-start text-sm">
                      <span className="mr-2 text-muted-foreground">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {idx < capabilities.length - 1 && (
                <Separator className="mt-8" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
