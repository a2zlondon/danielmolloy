import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the pricing?",
    answer: "All prices are exclusive of VAT. Day Rate includes a full-day strategic session. Monthly Retainer includes a set number of hours per month with regular calls and ongoing support. Embedded Fractional CTO includes leadership meeting participation, tech strategy ownership, and near co-founder level involvement.",
  },
  {
    question: "How quickly can we start?",
    answer: "We can typically begin within days, not months. After an initial discovery call, we can have a tailored proposal ready within 24-48 hours and start the engagement immediately upon agreement.",
  },
  {
    question: "What makes this different from hiring a full-time CTO?",
    answer: "You get executive-level expertise without the full-time salary overhead (typically 60-70% cost savings), no equity dilution, immediate availability, and the flexibility to scale engagement up or down based on your needs. You also get access to proven frameworks and battle-tested experience from multiple startups.",
  },
  {
    question: "What stage companies do you work with?",
    answer: "I work with founders and startups at various stages—from pre-seed through Series A and beyond. Whether you're validating product-market fit, scaling your team, or navigating technical complexity, I adapt the engagement to your specific needs.",
  },
  {
    question: "Do you write code or just provide strategy?",
    answer: "I'm structural, not hands-off. While my primary role is strategic leadership, I'm equally comfortable deep in code or shaping strategy. I focus on systems thinking, architecture design, and ensuring the right technical decisions are made—whether that means writing code, reviewing it, or guiding the team.",
  },
  {
    question: "What's the minimum commitment?",
    answer: "Day Rate engagements are one-off. Monthly Retainer typically requires a 3-6 month minimum commitment for early-stage companies. Embedded Fractional CTO engagements are usually 6-12 months to deliver meaningful results and ROI.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Frequently asked questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
