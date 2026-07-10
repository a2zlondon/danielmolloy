import { getPosts } from "@/lib/wp";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { decodeHtmlEntities, extractDateParts, getFeaturedImageUrl, stripHtml } from "@/lib/wp";

const insightArticles = [
  {
    title: "Technical Due Diligence Checklist for Investors",
    href: "/insights/technical-due-diligence-checklist-saas-acquisitions",
    description:
      "Source code ownership, deployment, technical debt, security, AI claims, team risk and cloud costs.",
  },
  {
    title: "How to Evaluate an AI Startup Before Investing",
    href: "/insights/how-to-evaluate-ai-startup-before-investing",
    description:
      "A practical AI due diligence guide for VCs and investors.",
  },
  {
    title: "Red Flags in SaaS Acquisitions",
    href: "/insights/red-flags-saas-acquisitions",
    description:
      "One-person knowledge risk, no automated testing, no observability and excessive cloud spend.",
  },
  {
    title: "Why Telemetry Matters More Than Features",
    href: "/insights/why-telemetry-matters-more-than-features",
    description:
      "Why usage evidence and operating signals matter more than feature lists.",
  },
  {
    title: "What Happens During Technical Due Diligence?",
    href: "/insights/what-happens-during-technical-due-diligence",
    description:
      "Discovery, architecture review, code review, infrastructure review, risk assessment and executive summary.",
  },
];

export const metadata = {
  title: "Writing",
  description:
    "Articles on technology due diligence, technical strategy, product development, engineering leadership, and AI capability assessment.",
};

export const dynamic = "force-dynamic";
export const revalidate = 300; // 5 min — new WordPress posts show within a few minutes

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Writing
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Thoughts on technology strategy, product development, and building companies that last.
              </p>

              <div className="grid gap-4 md:grid-cols-2 mb-16">
                {insightArticles.map((article) => (
                  <Card key={article.href} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <Link href={article.href}>
                        <CardTitle className="text-xl hover:text-foreground/80 transition-colors">
                          {article.title}
                        </CardTitle>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{article.description}</p>
                      <Link
                        href={article.href}
                        className="inline-block mt-4 text-sm font-medium hover:text-foreground/80 transition-colors"
                      >
                        Read guide →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-8">
                {posts.map((post) => {
                  const dateParts = extractDateParts(post.date);
                  const href = `/${dateParts.year}/${dateParts.month}/${dateParts.day}/${post.slug}`;
                  const imageUrl = getFeaturedImageUrl(post);
                  const title = decodeHtmlEntities(post.title.rendered);
                  const excerptText = stripHtml(post.excerpt.rendered || post.content.rendered).slice(0, 220);
                  
                  return (
                    <Card key={post.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                      {imageUrl && (
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-muted">
                          <img
                            src={imageUrl}
                            alt={title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <Link href={href}>
                          <CardTitle className="text-2xl hover:text-foreground/80 transition-colors">
                            {title}
                          </CardTitle>
                        </Link>
                        <CardDescription>
                          {new Date(post.date).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          {excerptText}
                          {excerptText.length >= 220 ? "…" : ""}
                        </p>
                        <Link
                          href={href}
                          className="inline-block mt-4 text-sm font-medium hover:text-foreground/80 transition-colors"
                        >
                          Read more →
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
