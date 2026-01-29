import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BOOK_CALL_URL } from "@/lib/constants";

const tiers = [
  {
    name: "Day Rate",
    price: "£1,000",
    priceNote: "+ VAT",
    description: "High-impact strategic sessions",
    features: [
      "Strategic decision-making sessions",
      "Architecture reviews",
      "Product roadmap planning",
      "Technical due diligence",
      "One-day intensive engagement",
    ],
    cta: "Book a session",
    popular: false,
  },
  {
    name: "Monthly Retainer",
    price: "£10,000",
    priceNote: "+ VAT",
    description: "Ongoing leadership and regular involvement",
    features: [
      "Regular strategy calls",
      "Team mentorship",
      "Hiring support",
      "Product–engineering alignment",
      "Set commitment of hours",
      "Ongoing decision-making support",
    ],
    cta: "Start retainer",
    popular: true,
  },
  {
    name: "Embedded Fractional CTO",
    price: "£20,000+",
    priceNote: "+ VAT",
    description: "Near co-founder level presence",
    features: [
      "Key leadership meetings",
      "Tech strategy ownership",
      "Board-level communication",
      "Full product strategy",
      "Team building & scaling",
      "Near co-founder presence",
    ],
    cta: "Discuss engagement",
    popular: false,
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Three levels of engagement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each step up provides more dedicated leadership and strategic depth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${tier.popular ? "border-2 border-foreground" : ""}`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-light">{tier.price}</span>
                  <span className="text-muted-foreground ml-2">
                    {tier.priceNote}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={BOOK_CALL_URL}>{tier.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
