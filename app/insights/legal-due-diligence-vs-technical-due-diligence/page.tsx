import Link from "next/link";
import { Nav } from "@/components/nav";
import { ArticleJsonLd } from "@/components/structured-data";
import { INSIGHT_DATES } from "@/lib/insights";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL, SITE_URL } from "@/lib/constants";

const SLUG = "legal-due-diligence-vs-technical-due-diligence";

export const metadata = {
  title: "Legal due diligence vs technical due diligence",
  description:
    "A short guide for lawyers, buyers and advisers on where legal due diligence stops and technical due diligence begins in software, SaaS and AI transactions.",
  alternates: { canonical: `${SITE_URL}/insights/${SLUG}` },
};

export default function LegalVsTechnicalDueDiligencePage() {
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
        <article className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Insight
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-8">
                Legal due diligence vs technical due diligence
              </h1>
              <div className="prose prose-lg max-w-none">
                <p>
                  Legal due diligence checks the legal position of a software business: contracts, IP ownership, licences, data protection, employment, warranties and disclosure. It is essential, but it does not tell a buyer whether the technology itself is healthy.
                </p>
                <p>
                  Technical due diligence answers a different question: can this product, platform and engineering team support the valuation, roadmap and post-completion plan? That requires a review of source code, architecture, deployment process, cloud spend, security, technical debt, AI claims, documentation and team dependency.
                </p>
                <p>
                  The gap matters most in SaaS and AI transactions. A legal report may confirm that IP is assigned correctly, while a technical review may find that the code is fragile, the cloud bill is unsustainable, the deployment process is manual, or the claimed AI is a thin wrapper around commodity tooling.
                </p>
                <p>
                  The best approach is collaborative. The legal team identifies transaction risks and disclosure points; the technical diligence team validates the engineering reality behind them. Together, that gives the buyer clearer negotiation points, better post-close planning and fewer surprises after completion.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/work-with-me">Technical due diligence services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={BOOK_CALL_URL}>Discuss a transaction</a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
