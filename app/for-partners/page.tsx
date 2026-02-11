import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "For partners",
  description:
    "VCs, accelerators, advisory firms, and banks: refer portfolio companies and clients to Daniel Molloy for fractional CTO leadership. Scale-ups and Series A+.",
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
                If you're a VC, accelerator, advisory firm, or bank and you have portfolio companies or clients that need fractional CTO leadership—I'm a trusted referral partner. Here's who I serve, what I offer, and how to refer.
              </p>

              <div className="space-y-8 mb-16">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-light">Who I serve</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-2">
                    <p>
                      Scale-ups and Series A+ companies that need <strong className="text-foreground">first or upgrade CTO leadership</strong>. Founders and leadership teams who are scaling product and engineering and need strategic technical clarity without a full-time hire. I also work with banks, fintech, and enterprises where technical leadership or transformation is in scope.
                    </p>
                    <p>
                      If your portfolio company or client is pre-seed through growth stage and needs a fractional CTO—or is considering hiring their first CTO—I'm a good fit.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-light">What I offer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground space-y-2">
                    <p>
                      <strong className="text-foreground">Retainer-led fractional CTO</strong> is the core offer: ongoing leadership, regular involvement in decision-making, and a set commitment of hours. I also offer Day Rate sessions for high-impact strategic work and Embedded Fractional CTO for near co-founder level presence. All engagements are flexible—remote or on-site in UK, Europe, MENA, and US.
                    </p>
                    <p>
                      <Link href="/work-with-me" className="text-foreground underline hover:no-underline">
                        View engagement options and pricing
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
                      Introduce your portfolio company or client directly—email intro or share my Calendly. I'll take a discovery call, assess fit, and if it's right, propose an engagement. No formal referral agreement required; I treat every introduction with care and follow up quickly.
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
                  <Link href="/about" className="text-foreground underline hover:no-underline">
                    About Daniel Molloy
                  </Link>
                  {" · "}
                  <Link href="/locations" className="text-foreground underline hover:no-underline">
                    Where I work
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
