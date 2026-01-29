import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOK_CALL_URL } from "@/lib/constants";

export const metadata = {
  title: "Contact | Daniel Molloy",
  description: "Get in touch with Daniel Molloy for fractional CTO services and tech leadership.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-12">
                Get in touch
              </h1>
              
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h2 className="text-xl font-medium mb-2">Email</h2>
                    <a
                      href="mailto:connect@danielmolloy.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      connect@danielmolloy.com
                    </a>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-medium mb-2">Location</h2>
                    <p className="text-muted-foreground">
                      Reading, UK
                    </p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-medium mb-4">Book a call</h2>
                    <p className="text-muted-foreground mb-4">
                      Ready to discuss how we can work together? Book a free discovery call.
                    </p>
                    <Button size="lg" asChild>
                      <a href={BOOK_CALL_URL}>Book a call</a>
                    </Button>
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
