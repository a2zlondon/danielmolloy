import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

const service = {
  name: "Technical Due Diligence",
  price: "From £10,000",
  priceNote: "+ VAT",
  description:
    "An independent assessment of the technical value of a company — experience, tools, and specialists on one engagement.",
  features: [
    "Product, engineering & infrastructure review",
    "Code quality, security & technical debt",
    "AI capability verification — real, fragile, or marketing",
    "Team, bus factor & knowledge concentration",
    "Cloud cost profile & scalability",
    "Commercial technology defensibility",
    "Written report + executive briefing call",
    "Typical turnaround: 1–2 weeks, scoped to the deal",
  ],
  cta: "Start a review",
};

export function PricingTiers() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <Card className="border-2 border-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-light">{service.price}</span>
                <span className="text-muted-foreground ml-2">
                  {service.priceNote}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <a href={BOOK_CALL_URL}>{service.cta}</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
