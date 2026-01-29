import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const capabilities = [
  {
    category: "Core Leadership & Company-Building Skills",
    skills: [
      "Startup Leadership & Founder Decision-Making",
      "Company Strategy & Vision Execution",
      "Product Strategy & Roadmapping",
      "0→1 Product Development",
      "Technical Founder Leadership",
      "Hiring, Mentorship & Team Building",
      "Stakeholder & Investor Communication",
      "Ownership, Delivery & Accountability",
    ],
  },
  {
    category: "Product, Systems & Execution",
    skills: [
      "Systems Thinking & Architecture Design",
      "Complex Problem Decomposition",
      "Product–Engineering Alignment",
      "Platform & Data Strategy",
      "AI-Enabled Product Design",
      "Scalability & Technical Risk Management",
      "Decision Frameworks & Trade-off Analysis",
      "Documentation & Knowledge Systems",
    ],
  },
  {
    category: "Commercial & Founder-Level Execution",
    skills: [
      "Founder-Led Sales & Discovery",
      "Customer Problem Validation",
      "Go-to-Market Strategy (Early Stage)",
      "Pricing & Value Positioning",
      "Client & Partner Engagement",
      "Advisory & Board-Level Communication",
    ],
  },
  {
    category: "Technical Credibility",
    skills: [
      "Software Architecture (Cloud & SaaS)",
      "Data Platforms & Analytics Systems",
      "AI / ML Foundations (Applied, Product-Led)",
      "Cloud Platforms (Azure Ecosystem)",
      "Full-Stack Engineering Literacy",
    ],
  },
  {
    category: "Personal Operating Strengths",
    skills: [
      "Clear Written & Verbal Communication",
      "Calm Under Ambiguity",
      "Long-Term Thinking",
      "Ethical Leadership",
      "Continuous Learning & Self-Reflection",
    ],
  },
];

export function Capabilities() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            What I bring
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A structured approach to turning complexity into clarity.
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
