import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About",
  description:
    "About Daniel Molloy — a technical consultancy providing technical due diligence, embedded technical leadership, and portfolio technical support for investment firms.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-12">
                About
              </h1>

              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We give investment firms a clear technical view — of a deal, of their own operations, or of a company in the portfolio.
                </p>
                <p>
                  Our team works with venture capital, private equity, family offices, and asset managers — either embedded in your office or applied to a portfolio company. That might mean technical due diligence before a deal, hands-on technical leadership while a gap is filled, or ongoing oversight across a portfolio.
                </p>
                <p>
                  The work is led from a technical consulting background: hands-on software, architecture, delivery, infrastructure, and engineering leadership. We identify risks, value potential, mitigation actions, and the practical roadmap required to make the investment case hold up.
                </p>
                <p>
                  Engagements are evidence-led, structured, and designed for decision-makers who need clarity under time pressure.
                </p>
                <p>
                  Before you invest, acquire, or build anything significant — get clarity first.
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
