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
      "Venture capital firms, private equity firms, family offices, and asset managers — either directly in your office, or applied to a company in your portfolio. Sometimes that means technical due diligence before a deal. Sometimes it means an embedded technical role, or ongoing support across the portfolio.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We agree the scope — a due diligence review, an embedded role, or portfolio support — then get into the detail, translate findings into plain English, and report back with clear next steps. Engagements range from a few days to an ongoing arrangement.",
  },
  {
    question: "Can you assess whether the AI is real?",
    answer:
      "Yes. AI capability assessment is a core part of our work. We examine model architecture, training data, inference costs, integration depth, and whether claimed AI capabilities are genuine engineering or a ChatGPT wrapper in marketing clothing.",
  },
  {
    question: "Do you work under NDA and confidentiality?",
    answer:
      "Always. We operate under strict confidentiality for every engagement. We do not disclose client names, deal details, or findings to third parties without explicit permission.",
  },
  {
    question: "How is this different from a general IT consultant?",
    answer:
      "A general IT consultant usually helps build, fix, or operate technology for one company. We work at the investor level — assessing or supporting the technology across a firm's own operations and its portfolio, so investment teams understand what they are backing and what may need attention.",
  },
  {
    question: "Do you review intellectual property, code ownership, and open-source licences?",
    answer:
      "Yes. We check that a company actually owns the code it depends on: contractor and employee IP assignment, open-source licence compliance and copyleft exposure, third-party dependencies, and the provenance of AI-generated code.",
  },
  {
    question: "How much does an engagement cost?",
    answer:
      "It depends on scope — a rapid technical review, a full due diligence report, or an embedded role are priced differently. Get in touch with the size of the firm, the portfolio, and the decision in front of you, and we'll scope it from there.",
  },
  {
    question: "Do you only work on deals?",
    answer:
      "No. We also support embedded technical leadership inside your firm, ongoing technical oversight across a portfolio, and founder readiness reviews before fundraising or sale. If technology is the question, we can scope an engagement to fit.",
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
