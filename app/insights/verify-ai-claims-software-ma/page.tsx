import Link from "next/link";
import { Nav } from "@/components/nav";
import { ArticleJsonLd } from "@/components/structured-data";
import { INSIGHT_DATES } from "@/lib/insights";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL, SITE_URL } from "@/lib/constants";

const SLUG = "verify-ai-claims-software-ma";

export const metadata = {
  title: "How to verify AI claims in software M&A",
  description:
    "How buyers, law firms and advisers can verify AI claims during software M&A technical due diligence.",
  alternates: { canonical: `${SITE_URL}/insights/${SLUG}` },
};

export default function VerifyAiClaimsPage() {
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
                AI due diligence
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-8">
                How to verify AI claims in software M&amp;A
              </h1>
              <div className="prose prose-lg max-w-none">
                <p>
                  Many software businesses now describe themselves as AI-powered. Some are genuinely using proprietary models, domain-specific data and embedded AI workflows. Others are using a standard LLM API with a thin interface and ambitious marketing language.
                </p>
                <p>
                  AI technical due diligence should inspect the system behind the claim: model architecture, data sources, prompt strategy, evaluation process, inference costs, integration depth, customer usage, security controls and fallback behaviour.
                </p>
                <p>
                  The key question is defensibility. Does the company have something difficult to replicate, or is the AI capability easy for a competitor or acquirer to rebuild? The answer affects valuation, integration risk, product roadmap and legal negotiation points.
                </p>
                <p>
                  A good review separates genuine capability from useful automation, brittle prototypes and marketing wrappers. It gives the deal team evidence they can use before signing, not just after the first technical surprise.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/services/technical-due-diligence">AI capability verification</Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={BOOK_CALL_URL}>Discuss AI claims</a>
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
