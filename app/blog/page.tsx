import { getPosts } from "@/lib/wp";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { decodeHtmlEntities, extractDateParts, getFeaturedImageUrl, stripHtml } from "@/lib/wp";

export const metadata = {
  title: "Writing",
  description:
    "Articles on technology strategy, product development, and leadership for scale-ups and enterprises. Daniel Molloy — fractional CTO.",
};

export const dynamic = "force-dynamic";
export const revalidate = 3600;

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
