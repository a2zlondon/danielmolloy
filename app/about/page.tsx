import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "About",
  description:
    "About Daniel Molloy — technology due diligence advisor with 20+ years in software. Assessing complex systems for investors, PE firms, and corporate finance advisers.",
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
                  I reduce uncertainty before investors, acquirers, and deal teams commit capital — not by building software, but by telling people what is actually going on.
                </p>
                <p>
                  I lead technology due diligence for private equity firms, corporate finance advisers, and investors evaluating software businesses. A founder says &ldquo;We&apos;re worth £5 million.&rdquo; I say &ldquo;Show me the repo.&rdquo;
                </p>
                <p>
                  Over 20 years in software and architecture — equally comfortable deep in a codebase or presenting findings to an investment committee. I walk into messy systems, find hidden risks, and explain them clearly.
                </p>
                <p>
                  Based in Cornwall. I care about evidence, clarity, and well-designed systems that last.
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
