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
          title="Strengthen your transaction advice with technical confidence"
          intro="Independent technology due diligence that strengthens your transaction advice and gives your clients confidence to complete the deal."
          confidenceStatement="Your client needs to know whether the technology supports the story being sold. We provide the independent technical evidence that helps deals move forward with confidence."
          sections={[
            {
              title: "A specialist technical layer for your deal team",
              body: "We support corporate finance advisers, M&A brokers, and transaction teams when software, SaaS, AI, or platform risk needs deeper technical review.",
            },
            {
              title: "Clear findings your client can use",
              body: "Reports translate technical evidence into commercial implications, management questions, remediation priorities, and deal risks your client can act on.",
            },
          ]}
          proofPoints={[
            "Whether the target's product and architecture support the growth story.",
            "Whether technology claims should increase confidence, reduce valuation, or trigger further questions.",
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
