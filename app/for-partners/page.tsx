import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "For partners",
  description:
    "M&A brokers, corporate finance advisers, and PE firms: partner with Daniel Molloy for technology due diligence on software acquisitions and investments.",
};

export default function ForPartnersPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                For partners
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Most brokers know finance or sales. We know technology — and that&apos;s rarer on the buy-side. If you&apos;re an M&A broker, corporate finance adviser, or PE firm evaluating software businesses, we&apos;re a trusted technology specialist for your side of the table.
              </p>

              <div className="space-y-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Who we work with</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-2">
                    <p>
                      <strong className="text-foreground">M&A brokers and corporate finance advisers</strong> who need a technology specialist on software deals. <strong className="text-foreground">Private equity firms</strong> evaluating SaaS, fintech, and platform acquisitions. <strong className="text-foreground">VCs and family offices</strong> screening pre-investment technology risk.
                    </p>
                    <p>
                      If your client says &ldquo;We&apos;ve got an AI-powered SaaS platform&rdquo; and you need a technical team to validate the claim, assess the evidence, and explain the risk — that&apos;s us.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-light">What we offer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-2">
                    <p>
                      Structured technology due diligence — from rapid investor screens to full acquisition reports covering product, engineering, infrastructure, team, and commercial defensibility. AI capability verification included. Written reports and management briefings for deal teams.
                    </p>
                    <p>
                      <Link href="/work-with-me" className="text-foreground underline hover:no-underline">
                        View services and pricing
                      </Link>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-light">How to refer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-4">
                    <p>
                      Introduce your client or deal team directly — email intro or share our Calendly. We&apos;ll take a confidential discovery call, assess scope, and propose an engagement. No formal referral agreement required; every introduction is handled with care and we follow up quickly.
                    </p>
                    <Button asChild>
                      <a href={BOOK_CALL_URL}>Book a call (partner referral)</a>
                    </Button>
                    <p className="text-sm">
                      Or email:{" "}
                      <a href="mailto:connect@danielmolloy.com" className="text-foreground underline hover:no-underline">
                        connect@danielmolloy.com
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  <Link href="/who-we-are" className="text-foreground underline hover:no-underline">
                    Who we are
                  </Link>
                  {" · "}
                  <Link href="/locations" className="text-foreground underline hover:no-underline">
                    Where we work
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
