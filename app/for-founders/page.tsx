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
          title="Prepare your company before buyers find the issues"
          intro="Independent technical assessments that prepare your business for investment, acquisition or commercial due diligence before buyers uncover the issues themselves."
          confidenceStatement="Founders do not need surprises during diligence. We help you understand what a buyer, investor, or adviser will see — and what to fix, explain, or evidence before the process begins."
          primaryCta="Book a preparation call"
          secondaryCta={{
            href: "/fix-your-tech-fast",
            label: "View rapid audit offer",
          }}
          sections={[
            {
              title: "Know your technical weak points first",
              body: "We review code, architecture, deployment, security, cloud, AI claims, documentation, and team dependency through the lens of an investor or acquirer.",
            },
            {
              title: "Turn risk into a credible plan",
              body: "The goal is not cosmetic tidying. It is a clear view of what needs remediation, what needs better evidence, and what can be explained confidently in diligence.",
            },
          ]}
          proofPoints={[
            "Which technical risks a buyer or investor is likely to challenge.",
            "Whether documentation, deployment, security, and engineering process are diligence-ready.",
            "What should be fixed now, what can be planned, and what simply needs clearer evidence.",
            "How to present technical maturity without overstating the product or creating avoidable concerns.",
          ]}
          closingTitle="Make your company investment-ready before due diligence begins."
          closingBody="We help founders prepare for scrutiny with a practical technical assessment, prioritised actions, and a clearer story for investors, buyers, and advisers."
        />
      </main>
      <Footer />
    </>
  );
}
