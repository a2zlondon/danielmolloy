import Link from "next/link";
import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("technical-due-diligence");

export const metadata = {
  title: "Technical Due Diligence for Investors",
  description:
    "Independent technical due diligence for venture capital, private equity, and family offices. Code, architecture, security, AI claims, and team risk before you invest.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Technical Due Diligence for Investors | Daniel Molloy",
    description:
      "Independent technical due diligence for venture capital, private equity, and family offices. Code, architecture, security, AI claims, and team risk before you invest.",
  },
};

const whenInvestorsCall = [
  {
    title: "Before a term sheet",
    description:
      "A short review to confirm the technology supports the story being sold.",
  },
  {
    title: "Before completion",
    description:
      "A full assessment of code, architecture, security, IP, and the team behind them.",
  },
  {
    title: "A concern in the portfolio",
    description:
      "An independent check when a portfolio company's technology stops matching its reporting.",
  },
  {
    title: "Before a follow-on round",
    description:
      "Evidence that the platform can carry the next stage of growth.",
  },
];

const assessmentDimensions = [
  {
    title: "Code quality & technical debt",
    description:
      "How well the software is built, where the debt sits, and what it would cost to fix — in terms a deal team can use.",
  },
  {
    title: "Security",
    description:
      "Vulnerabilities, data handling, access control, and the security practices behind the product.",
  },
  {
    title: "AI capability verification",
    description:
      "Whether AI claims are real — model architecture, training data, inference costs, telemetry, and genuine capability against marketing.",
  },
  {
    title: "Team & key-person risk",
    description:
      "Knowledge concentration, documentation, and how dependent the technology is on individual people.",
  },
  {
    title: "Scalability & cloud cost",
    description:
      "Whether the architecture supports the growth plan, and how cloud spend behaves as the business scales.",
  },
  {
    title: "Commercial defensibility",
    description:
      "Whether the technology genuinely supports the story being sold — differentiation, IP, data, and platform risk.",
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

const guides = [
  {
    title: "Technical due diligence checklist for investors",
    href: "/insights/technical-due-diligence-checklist-saas-acquisitions",
  },
  {
    title: "What happens during technical due diligence?",
    href: "/insights/what-happens-during-technical-due-diligence",
  },
  {
    title: "Red flags in SaaS acquisitions",
    href: "/insights/red-flags-saas-acquisitions",
  },
  {
    title: "How to verify AI claims in software M&A",
    href: "/insights/verify-ai-claims-software-ma",
  },
];

export default function TechnicalDueDiligencePage() {
  return (
    <ServicePage
      slug="technical-due-diligence"
      name="Technical Due Diligence"
      schemaDescription={metadata.description}
      h1="Technical due diligence"
      intro="An independent view of the technology behind a deal — before the money is committed."
    >
      <ServiceSection
        heading="When investors call"
        lead="Technology due diligence is most useful before a decision becomes hard to reverse. These are the usual moments."
        tone="card"
        items={whenInvestorsCall}
      />

      <ServiceSection heading="What you receive" tone="background">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            A written report in plain English. Risk ratings a deal team can act
            on. A briefing call with the partners, and answers to the questions
            the report raises.
          </p>
          <p>
            A full report typically takes two to three weeks. A rapid red-flag
            review takes five to seven days. Every engagement runs under NDA.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="What gets examined"
        lead="The review covers the whole platform, not just the code. Six areas, each reported with evidence."
        tone="card"
        items={assessmentDimensions}
      />

      <ServiceSection
        id="intellectual-property"
        heading="Intellectual property & code ownership"
        lead="In a software deal, the intellectual property is the asset. Every engagement checks whether the company owns what it is selling — and whether anything in the codebase could weaken the IP position after completion."
        tone="background"
        items={ipChecks}
      />

      <ServiceSection
        heading="Guides"
        lead="Longer reading on how the work is done."
        tone="card"
      >
        <ul className="max-w-2xl mx-auto space-y-3">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="underline underline-offset-4 hover:no-underline"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </ServiceSection>
    </ServicePage>
  );
}
