import { AudiencePage } from "@/components/audience-page";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

export const metadata = {
  title: "For Founders",
  description:
    "Independent technical assessments that help founders prepare software, SaaS, AI and technology businesses for investment, acquisition or commercial due diligence.",
};

export default function ForFoundersPage() {
  return (
    <>
      <Nav />
      <main>
        <AudiencePage
          eyebrow="For founders"
          title="Prepare before the buyer's technology survey"
          intro="Independent technical assessments for founders who need to prepare for investment, acquisition or commercial due diligence before a buyer's reviewer finds the issues."
          confidenceStatement="If you do not have an in-house technical leadership team, due diligence can feel opaque. We show you what an investor, buyer, lawyer, or alternative technical due diligence firm is likely to inspect — and what to fix, explain, or evidence before the process begins."
          primaryCta="Book a preparation call"
          secondaryCta={{
            href: "/fix-your-tech-fast",
            label: "View rapid audit offer",
          }}
          sections={[
            {
              title: "Know what they will look for",
              body: "We review code, architecture, deployment, security, cloud, AI claims, documentation, and team dependency through the lens of a buyer's technical survey.",
            },
            {
              title: "Turn gaps into a plan",
              body: "The goal is not cosmetic tidying. It is a practical view of what needs fixing, what needs better evidence, and what can be explained confidently in diligence.",
            },
          ]}
          proofPoints={[
            "Which technical risks a buyer, investor, or due diligence firm is likely to challenge.",
            "Whether documentation, deployment, security, ownership, and engineering process are diligence-ready.",
            "What should be fixed now, what can be planned, and what simply needs clearer explanation.",
            "How to present technical maturity honestly without creating avoidable concerns.",
          ]}
          closingTitle="Make your company investment-ready before due diligence begins."
          closingBody="We help founders prepare for scrutiny with a practical technical survey, prioritised actions, and a clearer story for investors, buyers, lawyers, and advisers."
        />
      </main>
      <Footer />
    </>
  );
}
