import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InsightArticle } from "@/components/insight-article";

export const metadata = {
  title: "Red Flags in SaaS Acquisitions",
  description:
    "Common technical red flags in SaaS acquisitions, including one-person knowledge risk, lack of testing, weak observability and excessive cloud spend.",
};

const sections = [
  {
    title: "One engineer knows everything",
    body: "A SaaS business can look stable until the only person who understands the deployment, database, customer-specific patches or production incidents leaves. Knowledge concentration turns people risk into operational risk, integration risk and post-close cost.",
  },
  {
    title: "No automated testing",
    body: "A lack of automated tests does not automatically make a company uninvestable, but it changes the risk profile. Every product change becomes slower, releases become more fragile, and the buyer inherits hidden regression risk.",
  },
  {
    title: "No observability",
    body: "If the team cannot see errors, latency, job failures, usage patterns or infrastructure health, they are operating by anecdote. Observability is how a buyer knows whether the platform is reliable, scalable and improving.",
  },
  {
    title: "Excessive cloud spend",
    body: "Cloud cost should be reviewed against revenue, customer count, workload shape and margin assumptions. High spend may signal inefficient architecture, poor data lifecycle management, over-provisioning or AI inference costs that will worsen with growth.",
  },
  {
    title: "Manual deployment and recovery",
    body: "Manual releases, unclear rollback paths and production changes performed from a developer laptop create avoidable deal risk. Buyers should understand how safely the team can ship, recover and scale after completion.",
  },
];

export default function RedFlagsSaasAcquisitionsPage() {
  return (
    <>
      <Nav />
      <main>
        <InsightArticle
          eyebrow="SaaS acquisitions"
          title="Red Flags in SaaS Acquisitions"
          intro="A SaaS acquisition should include a practical infrastructure and engineering checklist before completion. The goal is not to punish imperfection; it is to understand which technical issues could affect valuation, integration, customer retention or future investment."
          sections={sections}
          ctaLabel="Review SaaS acquisition risk"
          ctaHref="/work-with-me"
        />
      </main>
      <Footer />
    </>
  );
}
