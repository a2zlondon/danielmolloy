import Link from "next/link";
import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("technology-advisory");

export const metadata = {
  title: "Independent Technology Advisory",
  description:
    "Independent technology advice for investors, boards, and CEOs. Decisions, fractional CTO leadership, AI governance, and post-investment planning. No vendor agenda.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Independent Technology Advisory | Daniel Molloy",
    description:
      "Independent technology advice for investors, boards, and CEOs. Decisions, fractional CTO leadership, AI governance, and post-investment planning. No vendor agenda.",
  },
};

const decisions = [
  {
    title: "Build or buy",
    description:
      "Whether to build the capability in-house, buy it, or license it, and what each path costs over time.",
  },
  {
    title: "Replace or repair",
    description:
      "Whether an ageing platform needs replacing, or whether targeted work extends its life.",
  },
  {
    title: "Vendors and contracts",
    description:
      "Which supplier to choose, and what to check before you sign.",
  },
  {
    title: "Cost and headcount",
    description:
      "Whether technology spend matches the plan, and where it does not.",
  },
  {
    title: "A programme in doubt",
    description:
      "A second opinion on a project the board no longer believes.",
  },
  {
    title: "A claim to test",
    description:
      "An independent check of what a team, a target, or a supplier is telling you.",
  },
];

export default function TechnologyAdvisoryPage() {
  return (
    <ServicePage
      slug="technology-advisory"
      name="Technology Advisory"
      schemaDescription={metadata.description}
      h1="Technology advisory"
      intro="Independent advice for boards and executive teams making decisions they cannot easily reverse."
    >
      <ServiceSection
        heading="The decisions"
        lead="Most engagements start with a question like one of these."
        tone="card"
        items={decisions}
      />

      <ServiceSection heading="How the advice arrives" tone="background">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            A scoped engagement or a standing retainer. Written opinions you can
            put in front of a board. Daniel attends board or investment
            committee meetings when it helps.
          </p>
          <p>
            The advice is specific. What to do, what it costs, what to watch,
            and what to stop doing.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="Fractional leadership" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            When the gap is leadership rather than a single decision, Daniel
            takes a fractional CTO role. Days per week or days per month,
            agreed in advance, with clear outcomes and honest reporting on
            progress against them.
          </p>
          <p>
            A fractional role should end. The exit is agreed at the start.
            Usually a permanent hire, a stable team, or a completed change.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="AI, adopted carefully" tone="background">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Boards are under pressure to move on AI, and most proposals
            overstate what exists today. The advice covers what to adopt, what
            to decline, and what to monitor, with governance and risk
            management to match.
          </p>
          <p>
            Daniel has built and reviewed AI systems. The advice starts from
            how the technology actually behaves, not from the pitch.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="After a deal" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Diligence findings become an executable plan for the first hundred
            days and beyond. Each finding gets a priority, an owner, a cost, a
            timeline, and a success measure, so the board sees progress rather
            than a list of intentions.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="Delivery, when the advice calls for it" tone="background">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            A small team of senior specialists builds under the same standards
            as the advice. Complex architecture, migration, and recovery.
            Delivery supports the advice. It never leads.
          </p>
          <p>
            <Link
              href="/about"
              className="underline underline-offset-4 hover:no-underline"
            >
              Meet the practice
            </Link>
            .
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="Why independence matters" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Daniel is not selling software, licences, or a delivery team. The
            advice is the product.
          </p>
          <p>
            That means the answer can be small. If the right answer is
            &ldquo;do nothing&rdquo;, that is the advice you get.
          </p>
        </div>
      </ServiceSection>
    </ServicePage>
  );
}
