import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
} from "@/components/structured-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_URL } from "@/lib/constants";

export function servicePageUrl(slug: string) {
  return `${SITE_URL}/services/${slug}`;
}

export function ServicePage({
  slug,
  name,
  serviceType,
  schemaDescription,
  h1,
  intro,
  children,
}: {
  slug: string;
  name: string;
  serviceType?: string;
  schemaDescription: string;
  h1: string;
  intro: string;
  children: React.ReactNode;
}) {
  const url = servicePageUrl(slug);
  return (
    <>
      <ServiceJsonLd
        name={name}
        description={schemaDescription}
        url={url}
        serviceType={serviceType}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
          { name, url },
        ]}
      />
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Services
              </p>
              <h1 className="text-5xl md:text-6xl font-light mb-6">{h1}</h1>
              <p className="text-xl text-muted-foreground">{intro}</p>
            </div>
          </div>
        </section>
        {children}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export function ServiceSection({
  id,
  heading,
  lead,
  tone = "card",
  items,
  children,
}: {
  id?: string;
  heading: string;
  lead?: string;
  tone?: "card" | "background";
  items?: Array<{ title: string; description: string }>;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-24 ${tone === "card" ? "bg-card" : "bg-background"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center">{heading}</h2>
          {lead ? (
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              {lead}
            </p>
          ) : null}
          {items ? (
            <div className="grid md:grid-cols-2 gap-6">
              {items.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
