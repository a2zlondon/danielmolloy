import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "Legal due diligence vs technical due diligence",
    href: "/insights/legal-due-diligence-vs-technical-due-diligence",
    description:
      "Where legal review stops, and where software, cloud, security, AI and technical debt review begins.",
  },
  {
    title: "Technical due diligence checklist for SaaS acquisitions",
    href: "/insights/technical-due-diligence-checklist-saas-acquisitions",
    description:
      "The practical questions buyers and advisers should ask before acquiring a software business.",
  },
  {
    title: "How to verify AI claims in software M&A",
    href: "/insights/verify-ai-claims-software-ma",
    description:
      "A concise guide to separating real AI capability from thin wrappers and marketing language.",
  },
];

export function FurtherReading() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Further reading
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {articles.map((article) => (
              <Card key={article.href} className="border-0 shadow-sm h-full">
                <CardContent className="p-5 h-full">
                  <Link href={article.href} className="group block h-full">
                    <h2 className="text-lg font-medium mb-3 group-hover:underline">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
