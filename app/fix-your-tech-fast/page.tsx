import Script from "next/script";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_BUY_BUTTON_AUDIT_ID,
  STRIPE_BUY_BUTTON_FIX_OPTIMISE_ID,
} from "@/lib/constants";

export const metadata = {
  title: "Fix your tech fast",
  description:
    "Technical audit and rapid fixes for systems that are broken, slow, or fragile. Clear plan in 48 hours, with optional implementation.",
};

export default function FixYourTechFastPage() {
  return (
    <>
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
        async
      />
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
                    Technical Audit – £900 (incl. VAT)
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
                  <div className="stripe-buy-button-wrapper">
                    {/* @ts-expect-error Stripe buy button web component */}
                    <stripe-buy-button
                      buy-button-id={STRIPE_BUY_BUTTON_AUDIT_ID}
                      publishable-key={STRIPE_PUBLISHABLE_KEY}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-light">
                    Fix &amp; Optimise – £1800 (incl. VAT)
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
                  <div className="stripe-buy-button-wrapper">
                    {/* @ts-expect-error Stripe buy button web component */}
                    <stripe-buy-button
                      buy-button-id={STRIPE_BUY_BUTTON_FIX_OPTIMISE_ID}
                      publishable-key={STRIPE_PUBLISHABLE_KEY}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="max-w-5xl mx-auto mt-12 text-xs text-muted-foreground text-center">
              All prices include VAT. Payment is taken at checkout via Stripe.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

