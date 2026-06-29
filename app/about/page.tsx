import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About",
  description:
    "About Daniel Molloy Technology Due Diligence — a technical consulting team providing technology due diligence for investors, advisers, law firms, and founders.",
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
                  We reduce uncertainty before investors, acquirers, and deal teams commit capital by creating a clear technical view of the target company.
                </p>
                <p>
                  Our team provides technology due diligence for investors, corporate finance advisers, law firms, and founders evaluating or preparing software businesses. We look beyond the pitch deck to assess the codebase, architecture, infrastructure, product maturity, AI capability, delivery process, and technical organisation.
                </p>
                <p>
                  The work is led from a technical consulting background: hands-on software, architecture, delivery, infrastructure, and engineering leadership. We identify risks, value potential, mitigation actions, and the practical roadmap required to make the investment case hold up after close.
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
