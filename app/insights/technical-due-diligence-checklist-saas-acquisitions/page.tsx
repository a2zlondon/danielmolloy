import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

export const metadata = {
  title: "Technical Due Diligence Checklist for Investors",
  description:
    "A practical technical due diligence checklist for investors covering source code ownership, deployment, technical debt, security, AI claims, team risk and cloud costs.",
};

const checks = [
  "Source code ownership: where the code lives, who owns it, who has access, and whether contractor or founder IP has been assigned correctly.",
  "Deployment process: how releases are tested, approved, deployed, monitored and rolled back when something goes wrong.",
  "Technical debt: what slows delivery, creates fragility, increases security exposure or raises the future cost of change.",
  "Security: authentication, access controls, secrets management, dependency risk, incident history and customer data exposure.",
  "AI claims: whether AI features are proprietary, defensible, measurable and actually used in production workflows.",
  "Team concentration risk: whether one engineer, founder or agency holds critical operational knowledge.",
  "Cloud costs: whether infrastructure spend is proportionate to revenue, usage, margins and the growth plan.",
  "What documentation exists for architecture, onboarding, incidents and operations?",
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
                Technical Due Diligence Checklist for Investors
              </h1>
              <div className="prose prose-lg max-w-none">
                <p>
                  Investors assess technical debt during acquisitions by asking whether the platform can support the commercial story. A polished demo is not enough; buyers need evidence from the codebase, infrastructure, deployment process, security posture, AI implementation and team.
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
                  This is especially important for AI, healthcare and venture-backed software companies, where valuation often depends on scalability, data quality, regulatory confidence and rapid product expansion after completion.
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
