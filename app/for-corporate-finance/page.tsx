import { AudiencePage } from "@/components/audience-page";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "For Corporate Finance & M&A Advisers",
  description:
    "Independent technology due diligence for corporate finance and M&A advisers supporting software, SaaS, AI and technology transactions.",
};

export default function ForCorporateFinancePage() {
  return (
    <>
      <Nav />
      <main>
        <AudiencePage
          eyebrow="For corporate finance & M&A advisers"
          title="Give clients confidence in the technology behind the deal"
          intro="Independent technology due diligence for corporate finance and M&A advisers who need specialist technical evidence to support the transaction."
          confidenceStatement="Our work gives the buyer or seller a clearer view of the technology being transferred. We assess the technology and translate the findings into evidence your client can understand and use."
          sections={[
            {
              title: "A technical due diligence layer for your deal team",
              body: "We support corporate finance advisers, M&A brokers, and transaction teams when software, SaaS, AI, cloud or platform risk needs deeper independent review.",
            },
            {
              title: "Clear findings your client can use",
              body: "Findings translate technical evidence into commercial implications, management questions, remediation priorities, and deal risks your client can act on.",
            },
          ]}
          proofPoints={[
            "Whether the target's product and architecture support the story being sold.",
            "Whether technology claims should increase confidence, affect valuation, or trigger further questions.",
            "Whether cloud, security, team, or delivery risks could disrupt completion or post-close integration.",
            "What evidence your client needs before signing, completion, or investment committee.",
          ]}
          closingTitle="Give your clients confidence in the technology behind the deal."
          closingBody="We work quietly alongside advisers under NDA, with fast scoping, clear reporting, and practical findings that make transaction advice stronger."
        />
      </main>
      <Footer />
    </>
  );
}
