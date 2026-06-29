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
          title="What am I really buying?"
          intro="Independent technical due diligence for investors who want to understand a software, SaaS or AI business before committing capital."
          confidenceStatement="Our technical due diligence assesses the product, code, cloud, security, AI claims, documentation and team dependency before you invest, so you understand what is solid, what is risky, and what may need funding after the deal."
          sections={[
            {
              title: "Technical diligence before you invest",
              body: "For seed, SEIS, angel, family office or acquisition decisions, we give you an independent technical view before you rely on the founder's pitch or product demo.",
            },
            {
              title: "Plain-English risk and confidence",
              body: "You get clear findings on what works, what is fragile, what is overstated, what could cost money later, and which questions to ask before you invest.",
            },
          ]}
          proofPoints={[
            "Whether the technology can support the growth plan you are being asked to fund.",
            "Whether AI, automation, or platform claims are real, fragile, or mostly marketing.",
            "Where technical debt, security, cloud cost, or scalability issues may create future spend.",
            "Whether the company depends on one person, undocumented knowledge, or manual processes.",
            "Whether a rapid red-flag review is enough now, or whether the deal needs a deeper full technical due diligence report.",
          ]}
          closingTitle="Is this organisation worth investing in?"
          closingBody="We help you make the decision with fewer unknowns. The report gives you evidence; the real value is knowing what you are paying for before you buy it."
        />
      </main>
      <Footer />
    </>
  );
}
