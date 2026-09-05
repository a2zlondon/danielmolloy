import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("technology-advisory");

export const metadata = {
  title: "Independent Technology Advisory",
  description:
    "Independent technology advice for boards, investors, and CEOs. Build or buy, vendor selection, technology cost, and second opinions on major programmes. No vendor agenda.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Independent Technology Advisory | Daniel Molloy",
    description:
      "Independent technology advice for boards, investors, and CEOs. Build or buy, vendor selection, technology cost, and second opinions on major programmes. No vendor agenda.",
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
