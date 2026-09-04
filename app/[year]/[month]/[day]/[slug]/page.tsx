import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  extractDateParts,
  getPostByDateAndSlug,
  getPosts,
  metaDescription,
} from "@/lib/posts";
import { ArticleJsonLd } from "@/components/structured-data";
import { SITE_URL } from "@/lib/constants";

interface BlogPostPageProps {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}

/** Prerender every post at build time — no runtime CMS to wait on. */
export function generateStaticParams() {
  return getPosts().map((post) => {
    const { year, month, day } = extractDateParts(post.date);
    return { year, month, day, slug: post.slug };
  });
}

/**
 * Format a post date without depending on the server's timezone: the stored
 * date is naive, so pin it to UTC and read it back in UTC.
 */
function formatDate(date: string): string {
  return new Date(`${date}Z`).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = getPostByDateAndSlug(year, month, day, slug);

  if (!post) {
    return { title: "Post not found" };
  }

  const description = metaDescription(post.excerpt);
  const postUrl = `${SITE_URL}${post.url}`;
  const ogImage = post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/opengraph-image`;

  return {
    title: post.title,
    description,
    alternates: { canonical: postUrl },
    // Unlisted posts keep working URLs but are excluded from search indexes.
    ...(post.unlisted && { robots: { index: false, follow: true } }),
    openGraph: {
      title: post.title,
      description,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = getPostByDateAndSlug(year, month, day, slug);

  if (!post) {
    notFound();
  }

  const description = metaDescription(post.excerpt);
  const postUrl = `${SITE_URL}${post.url}`;

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={description}
        datePublished={post.date}
        dateModified={post.modified}
        imageUrl={post.image ? `${SITE_URL}${post.image}` : null}
        url={postUrl}
      />
      <Nav />
      <main>
        <article className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
              >
                ← Back to Writing
              </Link>

              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-light mb-4">
                  {post.title}
                </h1>
                <p className="text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {" · By "}
                  <Link
                    href="/about"
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    Daniel Molloy
                  </Link>
                </p>
              </header>

              {post.image && (
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-10 bg-muted">
                  {/* Hero image is the LCP element, so it loads eagerly. */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              )}

              <div
                className="prose prose-lg max-w-none prose-headings:font-light prose-p:text-muted-foreground prose-a:text-foreground prose-a:underline prose-strong:font-medium"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
