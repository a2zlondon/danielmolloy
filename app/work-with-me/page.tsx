import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "What We Do",
  description:
    "Technical expertise for investment firms — technical due diligence, embedded technical leadership, and portfolio technical support, in the office or inside the portfolio.",
};

const capabilities = [
  {
    title: "Technical Due Diligence",
    description:
      "An independent assessment of the technical value of a company before you invest or acquire — code, cloud, security, IP, AI claims, and team dependency.",
  },
  {
    title: "Embedded Technical Leadership",
    description:
      "Hands-on technical leadership inside your firm or a portfolio company, for as long as the gap needs filling — architecture decisions, engineering hiring, delivery oversight.",
  },
  {
    title: "Portfolio Technical Support",
    description:
      "Ongoing technical oversight across a portfolio — pre-deal screening, board support, and a second opinion whenever technology risk needs one.",
  },
  {
    title: "AI & Data Advisory",
    description:
      "Verification and strategy for AI and data claims — what is genuinely proprietary, what is fragile, and what is marketing.",
  },
];

const assessmentDimensions = [
  {
    title: "Code Quality & Technical Debt",
    description:
      "How well the software is built, where the debt sits, and what it would cost to fix — in terms a deal team can use.",
  },
  {
    title: "Security",
    description:
      "Vulnerabilities, data handling, access control, and the security practices behind the product.",
  },
  {
    title: "AI Capability Verification",
    description:
      "Whether AI claims are real — model architecture, training data, inference costs, and genuine capability vs marketing.",
  },
  {
    title: "Team & Key-Person Risk",
    description:
      "Bus factor, knowledge concentration, documentation, and how dependent the technology is on individual people.",
  },
  {
    title: "Scalability & Cloud Cost",
    description:
      "Whether the architecture supports the growth plan, and how cloud spend behaves as the business scales.",
  },
  {
    title: "Commercial Defensibility",
    description:
      "Whether the technology genuinely supports the story being sold — differentiation, IP, and platform risk.",
  },
];

const ipChecks = [
  {
    title: "Code ownership & IP assignment",
    description:
      "Whether contractors, employees, and past collaborators have properly assigned their intellectual property — so the company actually owns the code it depends on.",
  },
  {
    title: "Open-source licence compliance",
    description:
      "Which open-source licences sit in the codebase, and whether copyleft obligations (GPL, AGPL) create disclosure or commercial risk.",
  },
  {
    title: "Third-party & AI-generated code",
    description:
      "The provenance of third-party components and AI-generated code, and whether their terms are compatible with how the software is licensed and sold.",
  },
  {
    title: "Evidence for IP warranties",
    description:
      "Findings lawyers and deal teams can use to support IP warranties, indemnities, and disclosure before transaction terms are finalised.",
  },
];

export default function WorkWithMe() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                What we do
              </h1>
              <p className="text-xl text-muted-foreground">
                Technical expertise for investment firms — in the office or inside the portfolio. Every engagement is scoped to your firm, your timeline, and the decision in front of you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {capabilities.map((capability) => (
                <Card key={capability.title} className="border-0 shadow-sm h-full">
                  <CardContent className="p-6 h-full">
                    <h2 className="text-xl font-medium mb-3">
                      {capability.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-4 text-center">
                Technical due diligence: what we assess
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                When the engagement is a due diligence review, this is what it covers.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {assessmentDimensions.map((dimension) => (
                  <Card key={dimension.title}>
                    <CardHeader>
                      <CardTitle>{dimension.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{dimension.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="intellectual-property" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-4 text-center">
                Intellectual property & code ownership
              </h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                In a software deal, the intellectual property is the asset. Every due diligence engagement checks whether the company owns what it is selling — and whether anything in the codebase could undermine the IP position after completion.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {ipChecks.map((check) => (
                  <Card key={check.title}>
                    <CardHeader>
                      <CardTitle>{check.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{check.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
