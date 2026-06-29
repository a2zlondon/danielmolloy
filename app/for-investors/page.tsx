import { AudiencePage } from "@/components/audience-page";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "For Investors",
  description:
    "Independent technical due diligence for investors evaluating software, SaaS, AI and technology businesses before committing capital.",
};

export default function ForInvestorsPage() {
  return (
    <>
      <Nav />
      <main>
        <AudiencePage
          eyebrow="For investors"
          title="Invest with confidence in software, SaaS and AI businesses"
          intro="Independent technical due diligence to help you invest with confidence and avoid costly technology risks."
          confidenceStatement="You are not buying a report. You are buying confidence at a critical decision point — with evidence strong enough to support the investment case, challenge the valuation, or walk away."
          sections={[
            {
              title: "Know what you are really buying",
              body: "We review the product, codebase, architecture, AI claims, infrastructure, team dependency, technical debt, and delivery maturity behind the company.",
            },
            {
              title: "Separate upside from hidden risk",
              body: "Findings are written for investors and committees: what works, what is fragile, what is overstated, and what should affect valuation or post-close planning.",
            },
          ]}
          proofPoints={[
            "Whether the technology can support the commercial plan.",
            "Whether AI, automation, or platform claims are real or mostly marketing.",
            "Where technical debt, security, cloud cost, or scalability risks may create future spend.",
            "Whether the team, documentation, and delivery process can survive investment or acquisition pressure.",
          ]}
          closingTitle="Know whether the software company is worth investing in."
          closingBody="We give investors a clear technical view before capital is committed. The output is practical, independent, and designed to help you make the decision with fewer unknowns."
        />
      </main>
      <Footer />
    </>
  );
}
