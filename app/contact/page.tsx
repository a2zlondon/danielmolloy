import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CompanyLegalDetails } from "@/components/company-legal-details";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOK_CALL_URL, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Contact",
  description:
    "Contact Daniel Molloy Ltd about technology advisory, technical due diligence, fractional CTO, or AI governance work.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-12">
                Contact
              </h1>

              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-medium mb-2">Email</h2>
                    <a
                      href="mailto:connect@danielmolloy.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      connect@danielmolloy.com
                    </a>
                  </div>

                  <div>
                    <h2 className="text-xl font-medium mb-2">Location</h2>
                    <p className="text-muted-foreground">
                      London, UK. Working with investors and technology
                      companies across the UK and Europe.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-medium mb-4">Book a call</h2>
                    <p className="text-muted-foreground mb-4">
                      Bring the decision in front of you. An introductory call
                      is enough to say whether Daniel can help.
                    </p>
                    <Button size="lg" asChild>
                      <a href={BOOK_CALL_URL}>Book a call</a>
                    </Button>
                  </div>

                  <div className="border-t border-border pt-6 text-sm text-muted-foreground">
                    <h2 className="text-xl font-medium mb-2 text-foreground">
                      Legal details
                    </h2>
                    <CompanyLegalDetails />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
