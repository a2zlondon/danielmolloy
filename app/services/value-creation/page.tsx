import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("value-creation");

export const metadata = {
  title: "Technology Value Creation & 100-Day Planning",
  description:
    "Post-investment technology value creation for investors. Diligence findings become a 100-day plan with owners, costs, timelines, and success measures.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Technology Value Creation & 100-Day Planning | Daniel Molloy",
    description:
      "Post-investment technology value creation for investors. Diligence findings become a 100-day plan with owners, costs, timelines, and success measures.",
  },
};

const whenItFits = [
  {
    title: "After diligence",
    description:
      "The findings are fresh, the deal is signed, and the plan writes itself fastest while the evidence is current.",
  },
  {
    title: "After completion",
    description:
      "A new owner needs the technology issues sequenced against the investment case, not discovered again from scratch.",
  },
  {
    title: "Mid-hold",
    description:
      "A portfolio company that has drifted from its plan needs an honest reset of priorities, costs, and timelines.",
  },
  {
    title: "Before exit",
    description:
      "Fixing the findings a buyer will raise, in order of what moves the valuation.",
  },
];

export default function ValueCreationPage() {
  return (
    <ServicePage
      slug="value-creation"
      name="Technology Value Creation"
      serviceType="Post-investment technology planning"
      schemaDescription={metadata.description}
      h1="Technology value creation"
      intro="Diligence findings become an executable plan for the first hundred days and beyond."
    >
      <ServiceSection heading="The gap this closes" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Most diligence reports end at signing. The findings sit in a PDF
            while the company wrestles with the same issues the report named.
            The value of the diligence is only realised when someone turns it
            into work.
          </p>
          <p>
            This engagement is the bridge between pre-investment diligence and
            post-investment execution.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection heading="How the plan is built" tone="background">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Each finding becomes an action with a priority, an owner, a cost,
            a timeline, and a success measure. Nothing stays abstract. The
            board sees progress against the plan rather than a list of
            intentions.
          </p>
          <p>
            The plan covers the first hundred days in detail and the first
            year in outline. It is reviewed with the investor and the
            management team together, so both sides commit to the same
            version of reality.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="When it fits"
        tone="card"
        items={whenItFits}
      />
    </ServicePage>
  );
}
