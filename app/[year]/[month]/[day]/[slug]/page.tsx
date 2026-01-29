import { getPostByDateAndSlug, getPosts } from "@/lib/wp";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { decodeHtmlEntities, getFeaturedImageUrl, stripHtml } from "@/lib/wp";

interface BlogPostPageProps {
  params: Promise<{
    year: string;
    month: string;
    day: string;
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";
export const revalidate = 3600;

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = await getPostByDateAndSlug(year, month, day, slug);
  
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  const title = decodeHtmlEntities(post.title.rendered);
  const description = stripHtml(post.excerpt.rendered || post.content.rendered).slice(0, 160);
  
  return {
    title,
    description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = await getPostByDateAndSlug(year, month, day, slug);
  
  if (!post) {
    notFound();
  }
  
  const date = new Date(post.date);
  const imageUrl = getFeaturedImageUrl(post);
  const title = decodeHtmlEntities(post.title.rendered);
  
  return (
    <>
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
                  {title}
                </h1>
                <time
                  dateTime={post.date}
                  className="text-muted-foreground"
                >
                  {date.toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </header>

              {imageUrl && (
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-10 bg-muted">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div
                className="prose prose-lg max-w-none prose-headings:font-light prose-p:text-muted-foreground prose-a:text-foreground prose-a:underline prose-strong:font-medium"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
