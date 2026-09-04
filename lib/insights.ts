// Registry for the hand-authored /insights pages.
//
// Unlike blog posts, these pages carry no frontmatter, so their listing data
// lives here: title and description feed the blog index, sitemap and llms.txt,
// and the dates feed each page's Article JSON-LD. Dates were taken from git
// history (first and most recent commit touching each page). Update `modified`
// when you make a substantive edit to a page.
//
// Adding an insight page = create app/insights/<slug>/page.tsx and add one
// entry here. Order below is display order on /blog.

export interface Insight {
  slug: string;
  title: string;
  description: string;
  published: string;
  modified: string;
}

export const INSIGHTS: Insight[] = [
  {
    slug: "technical-due-diligence-checklist-saas-acquisitions",
    title: "Technical Due Diligence Checklist for Investors",
    description:
      "Source code ownership, deployment, technical debt, security, AI claims, team risk and cloud costs.",
    published: "2026-06-25",
    modified: "2026-07-10",
  },
  {
    slug: "how-to-evaluate-ai-startup-before-investing",
    title: "How to Evaluate an AI Startup Before Investing",
    description: "A practical AI due diligence guide for VCs and investors.",
    published: "2026-07-10",
    modified: "2026-07-10",
  },
  {
    slug: "red-flags-saas-acquisitions",
    title: "Red Flags in SaaS Acquisitions",
    description:
      "One-person knowledge risk, no automated testing, no observability and excessive cloud spend.",
    published: "2026-07-10",
    modified: "2026-07-10",
  },
  {
    slug: "why-telemetry-matters-more-than-features",
    title: "Why Telemetry Matters More Than Features",
    description:
      "Why usage evidence and operating signals matter more than feature lists.",
    published: "2026-07-10",
    modified: "2026-07-10",
  },
  {
    slug: "what-happens-during-technical-due-diligence",
    title: "What Happens During Technical Due Diligence?",
    description:
      "Discovery, architecture review, code review, infrastructure review, risk assessment and executive summary.",
    published: "2026-07-10",
    modified: "2026-07-10",
  },
  {
    slug: "legal-due-diligence-vs-technical-due-diligence",
    title: "Legal Due Diligence vs Technical Due Diligence",
    description:
      "How the two disciplines differ, where they overlap and why you need both before you sign.",
    published: "2026-06-25",
    modified: "2026-07-09",
  },
  {
    slug: "verify-ai-claims-software-ma",
    title: "How to Verify AI Claims in Software M&A",
    description:
      "Separating real machine learning from a wrapper around someone else's API.",
    published: "2026-06-25",
    modified: "2026-07-09",
  },
];

export const INSIGHT_DATES: Record<
  string,
  { published: string; modified: string }
> = Object.fromEntries(
  INSIGHTS.map((insight) => [
    insight.slug,
    { published: insight.published, modified: insight.modified },
  ])
);
