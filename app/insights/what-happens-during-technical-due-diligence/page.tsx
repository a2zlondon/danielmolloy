import { Nav } from "@/components/nav";
import { ArticleJsonLd } from "@/components/structured-data";
import { INSIGHT_DATES } from "@/lib/insights";
import { SITE_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { InsightArticle } from "@/components/insight-article";

const SLUG = "what-happens-during-technical-due-diligence";

export const metadata = {
  title: "What Happens During Technical Due Diligence?",
  description:
    "A practical framework for technical due diligence: discovery, architecture review, code review, infrastructure review, risk assessment and executive summary.",
  alternates: { canonical: `${SITE_URL}/insights/${SLUG}` },
};

const sections = [
  {
    title: "1. Discovery",
    body: "The process starts by understanding the transaction context, product claims, buyer concerns, growth plan, available access and decision timeline. This keeps the review proportionate to the deal rather than turning it into a generic audit.",
  },
  {
    title: "2. Architecture review",
    body: "The architecture review maps the product, systems, integrations, data flows, dependencies and operational boundaries. It asks whether the platform is coherent, scalable, secure and understandable enough for the next stage of growth.",
  },
  {
    title: "3. Code review",
    body: "The code review samples structure, maintainability, testing, dependency risk, repository health, security patterns and technical debt. The goal is not line-by-line perfection; it is to identify risks that affect value, delivery speed or resilience.",
  },
  {
    title: "4. Infrastructure review",
    body: "The infrastructure review covers cloud architecture, deployment process, environments, observability, backups, access controls, cost profile and recovery paths. This is where many hidden SaaS and AI costs become visible.",
  },
  {
    title: "5. Risk assessment",
    body: "Findings are translated into commercial risk: what could affect valuation, integration, security, margin, roadmap execution or post-close investment. Each risk should have evidence, severity, likelihood and practical mitigation.",
  },
  {
    title: "6. Executive summary",
    body: "The final output should be usable by non-technical decision makers. A strong executive summary explains what is solid, what is fragile, what needs fixing, what questions remain and what should happen before or after completion.",
  },
];

export default function TechnicalDueDiligenceProcessPage() {
  return (
    <>
      <ArticleJsonLd
        headline={metadata.title}
        description={metadata.description}
        datePublished={INSIGHT_DATES[SLUG].published}
        dateModified={INSIGHT_DATES[SLUG].modified}
        url={`${SITE_URL}/insights/${SLUG}`}
      />
      <Nav />
      <main>
        <InsightArticle
          eyebrow="Framework"
          title="What Happens During Technical Due Diligence?"
          intro="Technical due diligence turns engineering evidence into deal confidence. A good process gives investors, acquirers and advisers a clear view of the product, code, infrastructure, security, AI claims, team dependencies and risks before money changes hands."
          sections={sections}
          ctaLabel="See our diligence process"
          ctaHref="/work-with-me"
        />
      </main>
      <Footer />
    </>
  );
}
