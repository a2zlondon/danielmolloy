import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STRIPE_AUDIT_URL, STRIPE_FIX_OPTIMISE_URL } from "@/lib/constants";

export const metadata = {
  title: "Fix your tech fast",
  description:
    "Technical audit and rapid fixes for systems that are broken, slow, or fragile. Clear plan in 48 hours, with optional implementation.",
};

export default function FixYourTechFastPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Fix your tech. Fast.
              </h1>
              <p className="text-xl text-muted-foreground">
                I identify what’s broken, slow, or fragile in your system and
                give you a clear plan to fix it.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                I lead every engagement personally and bring in specialist
                expertise where needed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 max-w-5xl mx-auto md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    Technical Audit – £750
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">60–90 min Deep dive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">
                        Architecture / Performance / AI Review
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">1–2 page report, delivered in 48 hours</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href={STRIPE_AUDIT_URL}>Buy Audit</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    Fix &amp; Optimise – £1500
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">Audit + Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">
                        Performance / Infra / Architecture Fixes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">1–3 days Work</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={STRIPE_FIX_OPTIMISE_URL}>Buy Fix &amp; Optimise</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-5xl mx-auto pt-12 mt-12 border-t border-border">
              <p className="text-muted-foreground">
                20+ years in tech · Azure / AI / SaaS systems · Founder building
                AI healthcare platform
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

