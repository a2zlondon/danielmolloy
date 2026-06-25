import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

export const metadata = {
  title: "Technical due diligence checklist for SaaS acquisitions",
  description:
    "A practical technical due diligence checklist for SaaS acquisitions covering code, architecture, cloud, security, AI, documentation and team risk.",
};

const checks = [
  "Where is the source code, who owns it, and how healthy is the repository history?",
  "How many active contributors are there, and where is knowledge concentrated?",
  "How are releases tested, approved, deployed and rolled back?",
  "What technical debt affects scalability, security or delivery speed?",
  "Is the cloud bill proportionate to customers, usage and revenue?",
  "What documentation exists for architecture, onboarding, incidents and operations?",
  "What would break if the CTO or lead engineer left after completion?",
  "Are AI claims backed by real data, models, workflows and defensible engineering?",
];

export default function SaasChecklistPage() {
  return (
    <>
      <Nav />
      <main>
        <article className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Checklist
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-8">
                Technical due diligence checklist for SaaS acquisitions
              </h1>
              <div className="prose prose-lg max-w-none">
                <p>
                  In a SaaS acquisition, the technical review should test whether the platform can support the commercial story. A polished demo is not enough; buyers need evidence from the codebase, infrastructure, delivery process and team.
                </p>
                <ul>
                  {checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
                <p>
                  The output should not be a generic IT report. It should translate engineering evidence into deal language: risk ratings, commercial implications, mitigation actions, questions for management and post-close priorities.
                </p>
                <p>
                  This is especially important when the valuation depends on scalability, AI capability, enterprise readiness or rapid product expansion after completion.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/downloads/technical-due-diligence-report-coverage.pdf">
                    Download sample scope
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <a href={BOOK_CALL_URL}>Book a technical review call</a>
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
