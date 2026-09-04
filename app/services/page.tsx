import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { HowItWorks } from "@/components/how-it-works";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "Technology Advisory Services",
  description:
    "Five services, one practice. Technical due diligence, technology advisory, fractional CTO, AI governance, and cloud and software delivery.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Technology Advisory Services | Daniel Molloy",
    description:
      "Five services, one practice. Technical due diligence, technology advisory, fractional CTO, AI governance, and cloud and software delivery.",
  },
};

const services = [
  {
    title: "Technical due diligence",
    href: "/services/technical-due-diligence",
    description:
      "An independent view of the technology behind a deal, before the money is committed. Code, architecture, security, IP, AI claims, and the people the product depends on. Reported in plain English, at the speed of the deal.",
  },
  {
    title: "Technology advisory",
    href: "/services/technology-advisory",
    description:
      "Independent advice for boards and executive teams. Build or buy. Replace or repair. Spend more or spend less. A clear answer, and the evidence behind it.",
  },
  {
    title: "Fractional CTO",
    href: "/services/fractional-cto",
    description:
      "Senior technical leadership through growth, change, or recovery — without the full-time hire. Defined days, defined outcomes, and an agreed end.",
  },
  {
    title: "AI governance & strategy",
    href: "/services/ai-governance",
    description:
      "Adopt AI where the evidence supports it. Decline it where it does not. Governance, risk, and a position your board can stand behind.",
  },
  {
    title: "Cloud & software delivery",
    href: "/services/cloud-software-delivery",
    description:
      "When the advice calls for building, a senior team does the work. Complex architecture, migration, and recovery — under the same standards as the advice. Delivery supports the advice. It never leads.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-light mb-6">Services</h1>
              <p className="text-xl text-muted-foreground">
                Independent technology advisory. Daniel Molloy Ltd helps
                investors and technology companies make the right decisions.
              </p>
              <p className="mt-4 text-muted-foreground">
                Five services. One practice. Every engagement starts with the
                decision in front of you.
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {services.map((service) => (
                <Card key={service.href} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-medium mb-3">
                      <Link
                        href={service.href}
                        className="hover:text-foreground/80 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="text-sm underline underline-offset-4 hover:no-underline"
                    >
                      About {service.title.toLowerCase()}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
