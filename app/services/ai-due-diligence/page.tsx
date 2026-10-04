import Link from "next/link";
import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("ai-due-diligence");

export const metadata = {
  title: "AI Due Diligence",
  description:
    "Independent AI due diligence for investors and acquirers. Model architecture, data provenance, evaluation, infrastructure, defensibility, and AI technical debt.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI Due Diligence | Daniel Molloy",
    description:
      "Independent AI due diligence for investors and acquirers. Model architecture, data provenance, evaluation, infrastructure, defensibility, and AI technical debt.",
  },
};

const examined = [
  {
    title: "Model architecture",
    description:
      "What the system actually is. Owned models, fine-tuned models, or a layer over a public model, and what that means for the valuation.",
  },
  {
    title: "Data provenance",
    description:
      "Where the data came from, who owns it, whether customers consented, and whether it can legally be used for training and improvement.",
  },
  {
    title: "Evaluation methodology",
    description:
      "How the company knows its AI works. Test sets, benchmarks, and monitoring in production rather than claims from the demo.",
  },
  {
    title: "Infrastructure and running costs",
    description:
      "Inference costs, routing, caching, and how the spend moves as usage grows. AI that works but loses money is a finding.",
  },
  {
    title: "Model and vendor dependencies",
    description:
      "What happens when a model provider changes prices, terms, or behaviour. Dependence is normal. Unpriced dependence is not.",
  },
  {
    title: "Security and privacy",
    description:
      "How prompts, outputs, and personal data are handled, and whether the AI surface creates exposure the rest of the product does not have.",
  },
  {
    title: "Defensibility",
    description:
      "Whether a competitor with the same public models could rebuild the product in a quarter, and where the durable value actually sits.",
  },
  {
    title: "AI technical debt",
    description:
      "Prototype pipelines, unversioned prompts, missing evaluation, and the cost of making the AI maintainable after completion.",
  },
];

export default function AiDueDiligencePage() {
  return (
    <ServicePage
      slug="ai-due-diligence"
      name="AI Due Diligence"
      serviceType="AI due diligence"
      schemaDescription={metadata.description}
      h1="AI due diligence"
      intro="An independent view of whether claimed AI capability is real, defensible, and safe to buy."
    >
      <ServiceSection heading="Why it is its own review" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            AI claims now carry a meaningful share of valuation in software
            deals, and they are the hardest claims to check from a data room
            alone. A demo proves very little. The evidence sits in the models,
            the data rights, the telemetry, and the running costs.
          </p>
          <p>
            Daniel has built and reviewed AI systems. The review starts from
            how the technology actually behaves, not from the pitch.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="What gets examined"
        tone="background"
        items={examined}
      />

      <ServiceSection heading="What you receive" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Findings written for the deal team. Each finding is reported with
            the risk it carries, the commercial impact, and a recommendation.
            A briefing call follows the report, and the partners can question
            the findings directly.
          </p>
          <p>
            Buying AI is one question. Governing it after the deal is another.
            For boards adopting AI inside the business, see{" "}
            <Link
              href="/services/ai-governance"
              className="underline underline-offset-4 hover:no-underline"
            >
              AI governance and strategy
            </Link>
            .
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="Guides"
        lead="Longer reading on how the work is done."
        tone="background"
      >
        <ul className="max-w-2xl mx-auto space-y-3">
          <li>
            <Link
              href="/insights/verify-ai-claims-software-ma"
              className="underline underline-offset-4 hover:no-underline"
            >
              How to verify AI claims in software M&amp;A
            </Link>
          </li>
          <li>
            <Link
              href="/insights/how-to-evaluate-ai-startup-before-investing"
              className="underline underline-offset-4 hover:no-underline"
            >
              How to evaluate an AI startup before investing
            </Link>
          </li>
        </ul>
      </ServiceSection>
    </ServicePage>
  );
}
