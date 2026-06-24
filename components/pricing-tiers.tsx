import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BOOK_CALL_URL } from "@/lib/constants";

const services = [
  {
    name: "Technical Assessment",
    price: "From £5,000",
    priceNote: "+ VAT",
    description: "Rapid review for investors and founders",
    features: [
      "Startup or pre-deal screening",
      "AI capability verification",
      "Key risk summary report",
      "Executive briefing call",
      "Typical turnaround: 5–7 days",
    ],
    cta: "Discuss an assessment",
    popular: false,
  },
  {
    name: "Acquisition Due Diligence",
    price: "From £15,000",
    priceNote: "+ VAT",
    description: "Full M&A technical report for PE and corporate finance",
    features: [
      "Product, engineering & infrastructure review",
      "Code quality, security & technical debt",
      "Team, bus factor & knowledge concentration",
      "Cloud cost profile & scalability",
      "Commercial technology defensibility",
      "Written report + management presentation",
    ],
    cta: "Start a review",
    popular: true,
  },
  {
    name: "Embedded Advisory",
    price: "From £10,000",
    priceNote: "+ VAT / month",
    description: "Ongoing technical counsel for deal teams",
    features: [
      "Portfolio-wide technology oversight",
      "Pre-deal screening on demand",
      "Broker and adviser partnership",
      "Board and investment committee support",
      "Repeat mandate pricing available",
    ],
    cta: "Discuss partnership",
    popular: false,
  },
];

export function PricingTiers() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.name}
              className={`relative ${service.popular ? "border-2 border-foreground" : ""}`}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Requested
                </Badge>
              )}
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
                <Button
                  className="w-full"
                  variant={service.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={BOOK_CALL_URL}>{service.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
