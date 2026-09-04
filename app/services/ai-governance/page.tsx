import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("ai-governance");

export const metadata = {
  title: "AI Governance & Strategy",
  description:
    "AI governance and strategy for boards and investors. Policy, risk, oversight, and adoption of AI, grounded in how the technology actually works.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI Governance & Strategy | Daniel Molloy",
    description:
      "AI governance and strategy for boards and investors. Policy, risk, oversight, and adoption of AI, grounded in how the technology actually works.",
  },
};

const theWork = [
  {
    title: "Adoption strategy",
    description:
      "Where AI genuinely helps your business, where it does not, and the order to do things in.",
  },
  {
    title: "Risk and controls",
    description:
      "What could go wrong, what it would cost, and the controls that keep the risk acceptable.",
  },
  {
    title: "Model and vendor assessment",
    description:
      "Independent checks on the models, suppliers, and claims you are being asked to trust.",
  },
  {
    title: "Policy and data protection",
    description:
      "Clear rules for staff and systems, aligned with your regulatory and data obligations.",
  },
];

export default function AiGovernancePage() {
  return (
    <ServicePage
      slug="ai-governance"
      name="AI Governance & Strategy"
      serviceType="AI governance and strategy"
      schemaDescription={metadata.description}
      h1="AI governance & strategy"
      intro="Adopt AI where the evidence supports it. Govern it with the same discipline as any other risk."
    >
      <ServiceSection heading="The pressure" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Boards are being told to move on AI. Most proposals overstate what
            exists today. The damage from a wrong commitment — to data, to
            reputation — arrives later, when it is harder to undo.
          </p>
          <p>
            The useful question is not whether AI matters. It is which uses are
            real for your business, what they cost, and what has to be true
            before you rely on them.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="The work"
        tone="background"
        items={theWork}
      />

      <ServiceSection heading="What you get" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            A position you can defend: what to adopt, what to decline, what to
            monitor — and the evidence behind each call.
          </p>
          <p>
            This is governance and judgement work, not evangelism. Daniel has
            built and reviewed AI systems. The advice starts from how the
            technology actually behaves.
          </p>
        </div>
      </ServiceSection>
    </ServicePage>
  );
}
