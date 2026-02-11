import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "For enterprises",
  description:
    "Fractional CTO for banks, fintech, and enterprises. Technical leadership and strategy for regulated industries. UK, Europe, MENA, US. Daniel Molloy.",
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
                For enterprises
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Banks, fintech, and large enterprises need technical leadership that fits governance, compliance, and scale. I work with boards and leadership teams as a fractional CTO—turning complexity into clarity without the overhead of a full-time hire.
              </p>

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
                <p>
                  Whether you're building or upgrading digital platforms, navigating technical due diligence, or need a trusted advisor for product and engineering strategy, I bring 20+ years in software and architecture—including work with Snell, BBC, BT, and transformation-led organisations—so you get executive-level input without the full-time cost.
                </p>
                <p>
                  I work remotely or on-site in the UK, Europe, MENA, and the US. Engagements range from day-rate sessions to monthly retainers and embedded fractional CTO roles. All engagements are flexible to your governance and procurement requirements.
                </p>
                <p>
                  If you're an enterprise or institutional partner (VC, accelerator, advisory firm, or bank) and want to discuss how we work together, book a call or get in touch.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a call</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/work-with-me">View engagement options</Link>
                </Button>
              </div>

              <div className="mt-16 pt-12 border-t border-border text-sm text-muted-foreground">
                <Link href="/for-partners" className="text-foreground underline hover:no-underline">
                  For partners (VCs, accelerators, advisory, banks)
                </Link>
                {" · "}
                <Link href="/locations" className="text-foreground underline hover:no-underline">
                  Where I work
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
