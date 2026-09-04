import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ProfilePageJsonLd } from "@/components/structured-data";
import { BOOK_CALL_URL, LINKEDIN_URL, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: { absolute: "Daniel Molloy — Independent Technology Adviser" },
  description:
    "Daniel Molloy is an independent technology adviser to investors, boards, and technology companies. Founder of Daniel Molloy Ltd.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "Daniel Molloy — Independent Technology Adviser",
    description:
      "Daniel Molloy is an independent technology adviser to investors, boards, and technology companies. Founder of Daniel Molloy Ltd.",
  },
};

const writing = [
  {
    title: "Software is no longer the scarce resource. Evidence is.",
    href: "/2026/07/03/software-is-no-longer-the-scarce-resource-evidence-is",
  },
  {
    title: "Technical due diligence checklist for investors",
    href: "/insights/technical-due-diligence-checklist-saas-acquisitions",
  },
];

export default function AboutPage() {
  return (
    <>
      <ProfilePageJsonLd />
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <img
                src="/images/portrait-smile.png"
                alt="Daniel Molloy"
                className="h-24 w-24 rounded-full object-cover mb-8"
              />
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                Daniel Molloy
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Independent technology adviser. Founder of Daniel Molloy Ltd.
              </p>

              <div className="prose prose-lg max-w-none space-y-4">
                <p>
                  Daniel advises investors, boards, and technology companies on
                  decisions that are expensive to get wrong: acquisitions,
                  technology strategy, AI adoption, and technical leadership.
                </p>
                <p>
                  The advice comes from experience building, rescuing, and
                  operating complex software systems. That background shapes how
                  he works: start with the decision, examine the evidence, and
                  report in plain English.
                </p>
                <p>
                  The practice is independent. There is no software to sell and
                  no delivery target behind the advice. Most engagements are
                  confidential, and most of the work is never spoken about.
                </p>
              </div>

              <h2 className="text-2xl font-light mt-14 mb-4">Writing</h2>
              <ul className="space-y-3">
                {writing.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground underline underline-offset-4 hover:no-underline"
                  >
                    All writing
                  </Link>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-14">
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a call</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:connect@danielmolloy.com">Email</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
