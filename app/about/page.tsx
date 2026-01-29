import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "About | Daniel Molloy",
  description: "About Daniel Molloy - CEO of Misura.ai, fractional CTO, and tech leader with 20+ years of experience.",
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

              <div className="mb-12">
                <div className="relative overflow-hidden rounded-2xl bg-muted mx-auto w-1/2">
                  <Image
                    src="/images/portrait-bw-city.png"
                    alt="Portrait of Daniel Molloy"
                    width={1400}
                    height={900}
                    className="w-full h-auto object-cover"
                    priority={false}
                  />
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I build companies by turning complexity into clarity.
                </p>
                
                <p>
                  I work at the intersection of software, data, and decision-making—helping teams design systems that scale, endure, and actually get used. Software is complex by nature; my strength is holding the whole map in my head, understanding how the pieces connect, and then working methodically through each part until the solution is both elegant and practical.
                </p>
                
                <p>
                  I've spent over 20 years in software development and architecture, equally comfortable deep in code or shaping strategy with founders, clients, and stakeholders. I care about ownership, quality, and finishing what we start. I'm drawn to tools, processes, and ideas that reduce friction and raise standards—and I document and share what I learn along the way.
                </p>
                
                <p>
                  I'm endlessly curious. I learn best by surrounding myself with people smarter than me, tackling hard problems, and staying uncomfortable in the right ways. These days that curiosity spills beyond software into travel, reading, puzzles, photography, and music—anything that sharpens pattern recognition, perspective, or patience.
                </p>
                
                <p>
                  Creativity has always been part of my life. I've played in rock bands, written music, and spent time painting in oils and watercolours. Music remains a constant—both as a listener and a lifelong audio nerd—and photography has become my way of slowing down and noticing details most people miss.
                </p>
                
                <p>
                  Based in Cornwall, often near the sea. When I'm not travelling or reading something that makes my brain ache in a good way, I'm working with ambitious people to bridge vision and execution—and occasionally giving back through charity events when time allows.
                </p>
                
                <p>
                  I'm interested in thoughtful conversations, well-designed systems, and building things that last.
                </p>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-light mb-6">Previous Work</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      { name: "Misura AI", logo: "/images/logos/misura-ai.png" },
                      { name: "X4 Group", logo: "/images/logos/x4-group.png" },
                      { name: "VOTM", logo: "/images/logos/votm.png" },
                      { name: "Thought Quarter | B Corp™", logo: "/images/logos/thought-quarter.png" },
                      { name: "VesperaAI", logo: "/images/logos/vespera-systems.png" },
                      { name: "Zeit Online", logo: "/images/logos/zeit-online.png" },
                      { name: "BBC", logo: "/images/logos/bbc.png" },
                      { name: "BT Group", logo: "/images/logos/bt-group.png" },
                      { name: "Capita", logo: "/images/logos/capita.png" },
                      { name: "Snell Advanced Media", logo: "/images/logos/snell-advanced-media.png" },
                      { name: "LSI", logo: "/images/logos/lsi.png" },
                      { name: "Quantel", logo: "/images/logos/quantel.png" },
                    ].map((company, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors min-h-[100px]"
                      >
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={company.name}
                            width={120}
                            height={60}
                            className="h-auto w-full max-w-[120px] object-contain mb-2"
                            style={{ filter: "contrast(1.1)" }}
                          />
                        ) : (
                          <span className="text-sm text-muted-foreground text-center font-medium">
                            {company.name}
                          </span>
                        )}
                        {company.logo && (
                          <span className="text-xs text-muted-foreground text-center mt-2">
                            {company.name}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
