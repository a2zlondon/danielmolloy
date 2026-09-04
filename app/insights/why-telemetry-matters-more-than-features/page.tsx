import { Nav } from "@/components/nav";
import { ArticleJsonLd } from "@/components/structured-data";
import { INSIGHT_DATES } from "@/lib/insights";
import { SITE_URL } from "@/lib/constants";
import { Footer } from "@/components/footer";
import { InsightArticle } from "@/components/insight-article";

const SLUG = "why-telemetry-matters-more-than-features";

export const metadata = {
  title: "Why Telemetry Matters More Than Features",
  description:
    "Why investors and acquirers should value telemetry, usage evidence and operating signals over feature lists during technical due diligence.",
  alternates: { canonical: `${SITE_URL}/insights/${SLUG}` },
};

const sections = [
  {
    title: "Features are claims; telemetry is evidence",
    body: "A feature list says what the product can theoretically do. Telemetry shows what customers actually use, where they get value, what fails, what gets ignored and what creates support load. During diligence, that evidence is more useful than a roadmap slide.",
  },
  {
    title: "Telemetry reveals product-market reality",
    body: "Usage data can show whether customers return to the product, which workflows matter, which accounts are expanding, and whether new capabilities change behaviour. It turns product diligence from opinion into a sharper commercial conversation.",
  },
  {
    title: "Telemetry exposes operational risk",
    body: "Error rates, queue failures, latency, deployment incidents and manual interventions show how healthy the platform is under real conditions. A buyer needs to know whether growth will amplify value or amplify fragility.",
  },
  {
    title: "AI products need telemetry even more",
    body: "AI features can produce plausible demos while failing quietly in production. Investors should ask for telemetry on model performance, human overrides, hallucination handling, fallback paths, inference costs and customer outcomes.",
  },
  {
    title: "Good telemetry makes the deal more investable",
    body: "A company that measures the right signals is easier to diligence, easier to improve and easier to govern after investment. Telemetry is not just instrumentation; it is evidence that the team understands its own product.",
  },
];

export default function WhyTelemetryMattersPage() {
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
          eyebrow="Thought leadership"
          title="Why Telemetry Matters More Than Features"
          intro="Investors often ask what features a software company has built. The better question is what the product knows about itself. Telemetry turns software from a black box into an evidence base for product value, operational maturity and technical risk."
          sections={sections}
          ctaLabel="Assess telemetry and platform risk"
          ctaHref="/services/technical-due-diligence"
        />
      </main>
      <Footer />
    </>
  );
}
