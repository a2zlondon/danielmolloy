import Link from "next/link";
import { ServicePage, ServiceSection, servicePageUrl } from "@/components/service-page";

const PAGE_URL = servicePageUrl("cloud-software-delivery");

export const metadata = {
  title: "Cloud & Software Delivery",
  description:
    "Senior delivery capability behind an advisory practice. Complex architecture, cloud transformation, and recovery work, done under the same evidence standards as the advice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Cloud & Software Delivery | Daniel Molloy",
    description:
      "Senior delivery capability behind an advisory practice. Complex architecture, cloud transformation, and recovery work, done under the same evidence standards as the advice.",
  },
};

const theWork = [
  {
    title: "Complex architecture",
    description:
      "Systems designed for the load, the data, and the growth plan, including cloud platforms such as Azure.",
  },
  {
    title: "Cloud transformation",
    description:
      "Replatforming and migration work that finishes, while the business keeps running.",
  },
  {
    title: "Recovery",
    description:
      "Taking a failing system or programme, finding the cause, and putting it right.",
  },
  {
    title: "Delivery oversight",
    description:
      "Senior review of an existing team's work: architecture, quality, security, and pace.",
  },
];

export default function CloudSoftwareDeliveryPage() {
  return (
    <ServicePage
      slug="cloud-software-delivery"
      name="Cloud & Software Delivery"
      serviceType="Cloud and software delivery"
      schemaDescription={metadata.description}
      h1="Cloud & software delivery"
      intro="When the advice calls for building, a senior team does the work."
    >
      <ServiceSection heading="Where delivery fits" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            Most engagements end with a decision. Some continue into build.
            Delivery supports the advice. It never leads it.
          </p>
          <p>
            That order matters. It means the recommendation was not written to
            create the work.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection
        heading="The work"
        tone="background"
        items={theWork}
      />

      <ServiceSection heading="Standards" tone="card">
        <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
          <p>
            The same NDA. The same evidence discipline. The same plain-English
            reporting. Daniel stays accountable for the work, and a small team
            of senior specialists delivers it.
          </p>
          <p>
            <Link
              href="/who-we-are"
              className="underline underline-offset-4 hover:no-underline"
            >
              Meet the practice
            </Link>
            .
          </p>
        </div>
      </ServiceSection>
    </ServicePage>
  );
}
