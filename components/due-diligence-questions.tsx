import { Card, CardContent } from "@/components/ui/card";

const questions = [
  {
    question: "Where is the source code?",
    explainer:
      "We confirm repository access, ownership, branching structure, dependency health, and whether the codebase matches what has been described in diligence.",
  },
  {
    question: "How many contributors?",
    explainer:
      "We look at commit history and contributor patterns to see whether knowledge is spread across a team or concentrated in one or two people.",
  },
  {
    question: "When was the last commit?",
    explainer:
      "Recent activity helps distinguish a living product from shelfware, abandoned prototypes, or systems that only move during fundraising.",
  },
  {
    question: "What's the deployment process?",
    explainer:
      "We review CI/CD, release controls, rollback paths, environments, and how safely the team can ship changes after investment.",
  },
  {
    question: "What technical debt exists?",
    explainer:
      "We identify debt that affects security, scalability, maintainability, delivery speed, and the future cost of product change.",
  },
  {
    question: "What's the cloud bill?",
    explainer:
      "We assess whether infrastructure spend is proportionate to usage, where costs may spike, and what optimisation or scaling risks exist.",
  },
  {
    question: "What's the bus factor?",
    explainer:
      "We test how much critical knowledge sits with specific individuals and what happens if they leave, disengage, or become unavailable.",
  },
  {
    question: "Is there documentation?",
    explainer:
      "We check whether architecture, onboarding, operations, APIs, and incident processes are documented enough for the team to keep moving.",
  },
  {
    question: "Is the AI real or ChatGPT wrapped in marketing?",
    explainer:
      "We inspect the data, models, prompts, integrations, costs, and defensibility behind AI claims so investors know what is genuinely proprietary.",
  },
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {questions.map((item) => (
              <Card
                key={item.question}
                className="group h-44 border-0 shadow-sm bg-card [perspective:1000px]"
              >
                <CardContent
                  tabIndex={0}
                  className="relative h-full p-0 outline-none"
                  aria-label={`${item.question} ${item.explainer}`}
                >
                  <div className="relative h-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0 flex items-center p-5 [backface-visibility:hidden]">
                      <p className="text-lg font-light leading-snug">
                        {item.question}
                      </p>
                    </div>
                    <div className="absolute inset-0 flex items-center rounded-xl bg-muted p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.explainer}
                      </p>
                    </div>
                  </div>
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
