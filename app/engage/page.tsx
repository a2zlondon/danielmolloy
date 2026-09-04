import Script from "next/script";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_BUY_BUTTON_AUDIT_ID,
  STRIPE_BUY_BUTTON_FIX_OPTIMISE_ID,
} from "@/lib/constants";

// Deliberately unlisted: shared privately for pre-agreed engagements.
// Not linked from nav, footer, sitemap or llms.txt.
export const metadata = {
  title: "Engagements",
  description: "Payment for pre-agreed sessions and talks.",
  robots: { index: false, follow: false },
};

export default function EngagePage() {
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
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Engagements
              </h1>
              <p className="text-xl text-muted-foreground">
                Payment for pre-agreed sessions and talks. If Daniel sent you
                this link, choose the option you discussed.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 max-w-3xl mx-auto md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <div className="stripe-buy-button-wrapper flex justify-center">
                    {/* @ts-expect-error Stripe buy button web component */}
                    <stripe-buy-button
                      buy-button-id={STRIPE_BUY_BUTTON_AUDIT_ID}
                      publishable-key={STRIPE_PUBLISHABLE_KEY}
                    />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="stripe-buy-button-wrapper flex justify-center">
                    {/* @ts-expect-error Stripe buy button web component */}
                    <stripe-buy-button
                      buy-button-id={STRIPE_BUY_BUTTON_FIX_OPTIMISE_ID}
                      publishable-key={STRIPE_PUBLISHABLE_KEY}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="max-w-3xl mx-auto mt-12 text-xs text-muted-foreground text-center">
              Payment and receipts are handled by Stripe. VAT invoices are
              available on request.
            </p>
            <p className="max-w-3xl mx-auto mt-3 text-xs text-muted-foreground text-center">
              Not spoken with Daniel yet?{" "}
              <Link
                href="/contact"
                className="underline hover:no-underline text-foreground/80"
              >
                Start with an introductory call
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
