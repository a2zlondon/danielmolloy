import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { getListedPosts, metaDescription } from "@/lib/posts";
import { INSIGHTS } from "@/lib/insights";
import { SITE_URL } from "@/lib/constants";

const insightArticles = INSIGHTS.map((insight) => ({
  title: insight.title,
  href: `/insights/${insight.slug}`,
  description: insight.description,
}));

export const metadata = {
  title: "Writing",
  description:
    "Guides and articles by Daniel Molloy on technology due diligence, technology decisions, AI governance, and engineering leadership.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  const posts = getListedPosts();

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
                Notes on technology decisions: due diligence, advisory, AI,
                and what the evidence shows.
              </p>

              <h2 className="text-3xl font-light mb-6">Guides</h2>
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
              
              <h2 className="text-3xl font-light mb-6">Articles</h2>
              <div className="space-y-8">
                {posts.map((post) => {
                  const href = post.url;
                  const imageUrl = post.image;
                  const title = post.title;
                  const excerptText = metaDescription(post.excerpt, 220);

                  return (
                    <Card key={post.slug} className="border-0 shadow-sm hover:shadow-md transition-shadow">
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
                          {new Date(`${post.date}Z`).toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            timeZone: "UTC",
                          })}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{excerptText}</p>
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
