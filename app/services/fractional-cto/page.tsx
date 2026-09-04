import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("fractional-cto");

export const metadata = {
  title: "Fractional CTO",
  description:
    "Fractional CTO leadership for growing and changing technology companies. Team, architecture, cost, and board reporting — scoped in days per month, with a defined end.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Fractional CTO | Daniel Molloy",
    description:
      "Fractional CTO leadership for growing and changing technology companies. Team, architecture, cost, and board reporting — scoped in days per month, with a defined end.",
  },
};

const whenItFits = [
  {
    title: "Between CTOs",
    description:
      "Cover and continuity while you hire properly — and help running the search.",
  },
  {
    title: "After investment",
    description:
      "Technical leadership to deliver the plan the investment was made against.",
  },
  {
    title: "Alongside a founder",
    description:
      "An experienced counterpart for a technical or non-technical founder.",
  },
  {
    title: "Preparing for sale",
    description:
      "Getting the technology, the team, and the evidence ready for a buyer's scrutiny.",
  },
];

const responsibilities = [
  {
    title: "Team and hiring",
    description:
      "Shaping the team, running hiring, and raising the standard of engineering leadership.",
  },
  {
    title: "Architecture direction",
    description:
      "Decisions on platform, structure, and technical debt that hold up as the company grows.",
  },
  {
    title: "Vendor and cost control",
    description:
      "Keeping suppliers, licences, and cloud spend in line with the plan.",
  },
  {
    title: "Board reporting",
    description:
      "Reporting technology honestly to the board and to investors, in plain English.",
  },
];

export default function FractionalCtoPage() {
  return (
    <ServicePage
      slug="fractional-cto"
      name="Fractional CTO"
      serviceType="Fractional CTO leadership"
      schemaDescription={metadata.description}
      h1="Fractional CTO"
      intro="Senior technical leadership through growth, change, or recovery — without the full-time hire."
    >
      <ServiceSection
        heading="When it fits"
        tone="card"
        items={whenItFits}
      />

      <ServiceSection
        heading="What Daniel takes on"
        tone="background"
        items={responsibilities}
      />

      <ServiceSection heading="How it runs" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Days per week or days per month, agreed in advance. Clear outcomes.
            Honest reporting on progress against them.
          </p>
          <p>
            A fractional role should end. The exit is agreed at the start —
            usually a permanent hire, a stable team, or a completed change.
          </p>
        </div>
      </ServiceSection>
    </ServicePage>
  );
}
