import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { ServiceSection } from "@/components/service-page";
import { Button } from "@/components/ui/button";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata = {
  title: "Working With Law Firms & Deal Advisers",
  description:
    "How Daniel Molloy Ltd works inside a transaction team. Reliance for named parties, conflicts checks, professional indemnity insurance, and reporting built for counsel and deal advisers.",
  alternates: { canonical: `${SITE_URL}/partners` },
  openGraph: {
    title: "Working With Law Firms & Deal Advisers | Daniel Molloy",
    description:
      "How Daniel Molloy Ltd works inside a transaction team. Reliance for named parties, conflicts checks, professional indemnity insurance, and reporting built for counsel and deal advisers.",
  },
};

const team = [
  {
    title: "Legal counsel",
    description:
      "Findings written to support warranties, indemnities, and disclosure. The legal team identifies the risks on paper. We validate the engineering reality behind them.",
  },
  {
    title: "Corporate finance advisers",
    description:
      "Technology findings in deal language, delivered inside the transaction timetable rather than alongside it.",
  },
  {
    title: "Investment teams",
    description:
      "An independent technical view the committee can question directly, with the evidence behind every answer.",
  },
  {
    title: "Cybersecurity specialists",
    description:
      "Scope is coordinated so penetration testing and technical diligence reinforce each other without overlap or gaps.",
  },
  {
    title: "Financial and tax diligence",
    description:
      "Technology costs, commitments, and dependencies reconciled with the financial picture the deal is priced on.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Working with counsel and advisers
              </h1>
              <p className="text-xl text-muted-foreground">
                Technical diligence is one part of a transaction team. Daniel
                Molloy Ltd works alongside the lawyers, corporate finance
                advisers, and specialists who run the deal.
              </p>
            </div>
          </div>
        </section>

        <ServiceSection
          heading="Who we work beside"
          tone="card"
          items={team}
        />

        <ServiceSection heading="Engagement and reliance" tone="background">
          <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
            <p>
              Reports can be addressed to named parties in the transaction,
              and reliance can be agreed where the engagement requires it.
            </p>
            <p>
              A conflicts check runs before every engagement. Professional
              indemnity insurance is held, with details available on request.
              Every engagement runs under NDA, and evidence is handled inside
              your data room where one exists.
            </p>
          </div>
        </ServiceSection>

        <ServiceSection heading="Built for the deal timetable" tone="card">
          <div className="max-w-2xl mx-auto text-muted-foreground space-y-4">
            <p>
              Scope and fee are fixed before work starts, usually within one
              business day of the first call. A rapid red-flag review takes
              five to seven days. A full report typically takes two to three
              weeks.
            </p>
            <p>
              Findings arrive as the work progresses. Nothing material waits
              for the final document.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss a transaction</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </ServiceSection>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
