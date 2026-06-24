import { Card, CardContent } from "@/components/ui/card";

const questions = [
  "Where is the source code?",
  "How many contributors?",
  "When was the last commit?",
  "What's the deployment process?",
  "What technical debt exists?",
  "What's the cloud bill?",
  "What's the bus factor?",
  "Is there documentation?",
  "Is the AI real or ChatGPT wrapped in marketing?",
];

export function DueDiligenceQuestions() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Technical transparency before the deal closes.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We assess the target&apos;s code, architecture, delivery process, infrastructure, data, AI claims, and team resilience so investors understand what they are really buying.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {questions.map((question) => (
              <Card key={question} className="border-0 shadow-sm bg-card">
                <CardContent className="py-4 px-5">
                  <p className="text-sm">{question}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-lg">
            The output is practical: risk ratings, upside potential, mitigation actions, and a roadmap your deal team can use.
          </p>
        </div>
      </div>
    </section>
  );
}
