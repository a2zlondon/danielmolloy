import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "For PE & strategic acquirers",
  description:
    "Technology due diligence for private equity firms and strategic acquirers evaluating software businesses. Structured M&A tech reviews from a specialist technical team.",
};

export default function ForEnterprisesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                For PE &amp; strategic acquirers
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                When a founder says &ldquo;We&apos;ve got an AI-powered SaaS platform&rdquo; and the investment committee hears &ldquo;Money please&rdquo; — we arrive and reduce the uncertainty before you commit capital.
              </p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p>
                  We provide structured technology due diligence for private equity firms, corporate development teams, and strategic acquirers evaluating software businesses. Our reports cover product, engineering, infrastructure, team, and commercial defensibility — the dimensions that determine whether a deal holds up after close.
                </p>
                <p>
                  With 20+ years in software and architecture — including work with the BBC, BT Group, Capita, and transformation-led organisations — we bring the depth to walk into messy systems, figure out how they actually work, and explain findings clearly to deal teams and investment committees.
                </p>
                <p>
                  Engagements typically run two to three weeks for a full acquisition report. We operate under strict NDA and confidentiality. Multiple mandates can run in parallel through our specialist team.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a confidential call</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/work-with-me">View services</Link>
                </Button>
              </div>

              <div className="mt-16 pt-12 border-t border-border text-sm text-muted-foreground">
                <Link href="/for-partners" className="text-foreground underline hover:no-underline">
                  For brokers &amp; corporate finance advisers
                </Link>
                {" · "}
                <Link href="/who-we-are" className="text-foreground underline hover:no-underline">
                  Who we are
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
