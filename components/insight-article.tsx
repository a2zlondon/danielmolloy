import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

type InsightSection = {
  title: string;
  body: string;
};

type InsightArticleProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: InsightSection[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function InsightArticle({
  eyebrow,
  title,
  intro,
  sections,
  ctaLabel = "Discuss technical due diligence",
  ctaHref = "/services/technical-due-diligence",
}: InsightArticleProps) {
  return (
    <article className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-light mb-8">{title}</h1>
          <div className="prose prose-lg max-w-none">
            <p>{intro}</p>
            {sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href={BOOK_CALL_URL}>Book a technical review call</a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
