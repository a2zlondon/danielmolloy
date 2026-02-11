import { PricingTiers } from "@/components/pricing-tiers";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Work with me",
  description:
    "Fractional CTO for scale-ups and Series A+. Day Rate, Monthly Retainer, or Embedded CTO. UK, Europe, MENA, US. Ongoing leadership and strategic depth for technical teams.",
};

export default function WorkWithMe() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Work with me
              </h1>
              <p className="text-xl text-muted-foreground">
                I work with scale-ups and Series A+ companies that need fractional CTO leadership. Three levels of engagement—Day Rate, Monthly Retainer (most popular for ongoing leadership), and Embedded CTO—across Europe, MENA and the US.
              </p>
            </div>
          </div>
        </section>
        
        <PricingTiers />
        
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light mb-8 text-center">
                What you get
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Clarity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Turn complex technical decisions into clear, actionable roadmaps aligned with your business goals.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Proven Frameworks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Access battle-tested processes for product development, team building, and scaling that avoid costly mistakes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Immediate Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Start within days, not months. No lengthy hiring process or onboarding delays—just expert leadership when you need it.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Flexible Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Scale your engagement up or down based on your needs. From one-day sessions to embedded leadership.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
