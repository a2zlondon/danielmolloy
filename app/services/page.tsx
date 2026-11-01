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
      "Two ways to engage, one practice. Technical due diligence for transactions, and technology advisory for everything between them.",
  },
};

const services = [
  {
    title: "Technical due diligence",
    href: "/services/technical-due-diligence",
    description:
      "An independent view of the technology behind a deal, before the money is committed. Code, architecture, security, IP, and the people the product depends on. AI due diligence included wherever AI claims appear. Reported in plain English, at the speed of the deal.",
  },
  {
    title: "Technology advisory",
    href: "/services/technology-advisory",
    description:
      "Independent advice for investors, boards, and executive teams. Decisions, fractional CTO leadership, AI governance, post-deal planning, and delivery by a senior team when the advice calls for it. The advice is the product.",
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
                Two ways to engage. One practice. Every engagement starts with the
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
