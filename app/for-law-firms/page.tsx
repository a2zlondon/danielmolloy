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
          title="A technology survey alongside legal due diligence"
          intro="Independent technical expertise for law firms when a client needs to understand technology risks that could affect valuation, warranties, disclosure or transaction terms."
          confidenceStatement="Legal due diligence answers legal questions. We answer the technical survey questions: what has been built, how robust it is, what risks sit behind it, and whether the technology supports the deal."
          sections={[
            {
              title: "When legal review needs technical evidence",
              body: "We support corporate, M&A, technology, IP and data lawyers when a client asks whether the software, SaaS, AI, cloud or data claims stand up technically.",
            },
            {
              title: "Findings that inform transaction terms",
              body: "We identify technical risks that may affect valuation, warranties, indemnities, disclosure, completion planning, integration risk or post-close remediation.",
            },
          ]}
          proofPoints={[
            "Whether software, SaaS, AI, or platform claims are technically supported by evidence.",
            "Whether code, architecture, cloud, security, data, or technical debt creates deal risk.",
            "Whether technical findings should inform warranties, disclosure, price, or post-close obligations.",
            "What questions lawyers and clients should ask management before completion.",
          ]}
          closingTitle="Add technical evidence to the legal process."
          closingBody="We work under NDA with legal teams, buyers, sellers, advisers, and client-side sponsors. The report provides the evidence; the value is confidence before transaction terms are finalised."
        />
        <FurtherReading />
      </main>
      <Footer />
    </>
  );
}
