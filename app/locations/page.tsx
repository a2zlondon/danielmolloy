import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BOOK_CALL_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Location",
  description:
    "Technical due diligence, embedded technical leadership, and portfolio technical support from Reading, Dublin, and Amsterdam for investment firms.",
};

const locations = [
  {
    city: "Reading",
    country: "UK",
    note: "UK deal teams, founders, and investors",
  },
  {
    city: "Dublin",
    country: "Ireland",
    note: "Irish technology businesses and cross-border reviews",
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    note: "European software diligence and advisory work",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Location
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Reading, UK - Dublin, Ireland - Amsterdam, Netherlands
              </h1>
              <p className="text-xl text-muted-foreground mb-14 max-w-3xl">
                A compact European operating triangle for technology due diligence: close enough for hands-on work, distributed enough for fast cross-border review.
              </p>

              <div className="relative mb-16">
                <div className="hidden md:block absolute left-[16%] right-[16%] top-12 border-t border-border" aria-hidden />
                <div className="grid gap-4 md:grid-cols-3">
                  {locations.map((location, index) => (
                    <Card key={location.city} className="relative border-0 shadow-sm bg-card">
                      <CardContent className="p-6">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-sm text-muted-foreground">
                          0{index + 1}
                        </div>
                        <h2 className="text-3xl font-light mb-1">{location.city}</h2>
                        <p className="text-sm tracking-[0.18em] uppercase text-muted-foreground mb-5">
                          {location.country}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {location.note}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 border-t border-border pt-12 md:grid-cols-[1fr_auto] md:items-center">
                <p className="text-muted-foreground max-w-2xl">
                  Most work still happens through structured remote review: evidence rooms, source code access, architecture calls, and concise briefings. On-site sessions happen when they materially improve the review.
                </p>
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
