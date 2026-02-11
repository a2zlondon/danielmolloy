import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "Where I work",
  description:
    "Fractional CTO services remote or on-site. UK, Europe (London, Madrid, Berlin, Amsterdam, Paris), MENA (UAE, Saudi Arabia), and across the US. Daniel Molloy.",
};

export default function LocationsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Where I work
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                I work with scale-ups and Series A+ companies globally—remotely or on-site when it adds value. Based in the UK, with regular work across Europe, MENA, and the United States.
              </p>

              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-light mb-3">Remote</h2>
                  <p className="text-muted-foreground">
                    I work remotely with clients worldwide. Most engagements combine async work with regular video calls; time zones across UK, Europe, and US work well.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-light mb-3">Europe</h2>
                  <p className="text-muted-foreground mb-2">
                    I'm based in Reading, UK, and work on-site or hybrid with clients across Europe, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>United Kingdom — London, Reading, and nationwide</li>
                    <li>Spain — Madrid and major hubs</li>
                    <li>Germany — Berlin and beyond</li>
                    <li>Netherlands — Amsterdam</li>
                    <li>France — Paris</li>
                    <li>Switzerland — Zurich (when needed)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light mb-3">MENA</h2>
                  <p className="text-muted-foreground mb-2">
                    I work with clients in the Middle East and North Africa, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>United Arab Emirates — Dubai, Abu Dhabi</li>
                    <li>Saudi Arabia — Riyadh and major cities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-light mb-3">United States</h2>
                  <p className="text-muted-foreground mb-2">
                    I work with US-based scale-ups and enterprises across all 50 states—remotely and, when it makes sense, on-site. Major hubs include New York, San Francisco, Austin, Chicago, Boston, and LA.
                  </p>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-muted-foreground mb-6">
                  Ready to discuss engagement? Book a call and we can align on how we work together—remote, hybrid, or on-site.
                </p>
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a call</a>
                </Button>
                <p className="mt-4">
                  <Link href="/work-with-me" className="text-muted-foreground hover:text-foreground underline">
                    View engagement options
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
