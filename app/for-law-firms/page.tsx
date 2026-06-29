import { AudiencePage } from "@/components/audience-page";
import { Footer } from "@/components/footer";
import { FurtherReading } from "@/components/further-reading";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "For Law Firms",
  description:
    "Independent technical expertise for law firms supporting legal due diligence on software, SaaS, AI and technology transactions.",
};

export default function ForLawFirmsPage() {
  return (
    <>
      <Nav />
      <main>
        <AudiencePage
          eyebrow="For law firms"
          title="Technical expertise that supports legal due diligence"
          intro="Independent technical expertise that supports legal due diligence by identifying technology risks that could affect valuation, warranties and transaction terms."
          confidenceStatement="Legal due diligence answers legal questions. Technical due diligence answers whether the product, code, cloud, security, data, AI, and delivery capability can support the deal."
          sections={[
            {
              title: "When legal review needs engineering depth",
              body: "We support corporate, M&A, technology, IP and data lawyers when a client needs technical evidence alongside legal due diligence.",
            },
            {
              title: "Findings that inform transaction terms",
              body: "We identify technical risks that may affect valuation, warranties, indemnities, completion planning, integration risk, or post-close remediation.",
            },
          ]}
          proofPoints={[
            "Whether software, SaaS, AI, or platform claims are technically supported.",
            "Whether code, architecture, cloud, security, or technical debt creates deal risk.",
            "Whether technical findings should inform warranties, disclosure, price, or post-close obligations.",
            "What questions lawyers and clients should ask management before completion.",
          ]}
          closingTitle="Identify technical risks your legal review cannot uncover alone."
          closingBody="We work under NDA with legal teams, buyers, sellers, advisers, and client-side sponsors. The report provides the evidence; the value is confidence before transaction terms are finalised."
        />
        <FurtherReading />
      </main>
      <Footer />
    </>
  );
}
