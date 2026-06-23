import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "Private equity firms, corporate finance advisers, M&A brokers, venture investors, and family offices evaluating software acquisitions or investments. We are often brought in by the buy-side or their advisers before a deal closes.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "For acquisition due diligence, we typically need two to three weeks with access to source code, cloud infrastructure, documentation, and key technical personnel. We deliver a written report and a management briefing. Rapid investor assessments can be completed in five to seven days.",
  },
  {
    question: "Can you assess whether the AI is real?",
    answer:
      "Yes. AI capability assessment is a core part of our work. We examine model architecture, training data, inference costs, integration depth, and whether claimed AI capabilities are genuine engineering or a ChatGPT wrapper in marketing clothing.",
  },
  {
    question: "Do you work under NDA and deal confidentiality?",
    answer:
      "Always. We operate under strict confidentiality for every engagement. We do not disclose client names, deal details, or findings to third parties without explicit permission.",
  },
  {
    question: "How is this different from a general IT consultant?",
    answer:
      "We specialise in technology risk for transactions — not building software. Our reports are structured for deal teams and investment committees: risk ratings, commercial implications, and questions to ask in negotiation. We have spent decades walking into messy systems and explaining what is actually going on.",
  },
  {
    question: "Can brokers and corporate finance advisers refer clients?",
    answer:
      "Yes. We work regularly with M&A brokers and corporate finance firms who need a technology specialist on their side of the table. Referral and partnership arrangements are available — see our For Partners page or book a call to discuss.",
  },
  {
    question: "What access do you need from the target company?",
    answer:
      "Typically: source code repository access, cloud console read-only access, CI/CD and deployment documentation, architecture diagrams if they exist, and 60–90 minute interviews with the CTO or lead engineer. We work with whatever access the deal timeline allows.",
  },
  {
    question: "Do you only work on acquisitions?",
    answer:
      "No. We also support pre-investment screening for VCs, portfolio company reviews for PE firms, and standalone AI capability assessments. If technology risk is the question, we can scope an engagement to fit.",
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
