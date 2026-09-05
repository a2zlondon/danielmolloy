import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    question: "Who does Daniel work with?",
    answer:
      "Investors first: venture capital partners, family offices, private equity, and angel investors. Then the CEOs, founders, boards, and CTOs facing the same decisions from the other side. The common thread is an important technology decision that needs an independent view.",
  },
  {
    question: "What does an engagement look like?",
    answer:
      "It starts with the decision in front of you. The scope, timeline, and access follow from that. It might be a due diligence review before a deal, a written opinion for a board, a fractional leadership role, or delivery work agreed after the advice. Engagements range from a few days to a standing arrangement.",
  },
  {
    question: "Can you tell whether the AI is real?",
    answer:
      "Yes. Daniel examines model architecture, training data, inference costs, integration depth, and telemetry, enough to say whether a claimed AI capability is genuine engineering or a thin layer over someone else's model.",
  },
  {
    question: "Do you work under NDA and confidentiality?",
    answer:
      "Always. Every engagement runs under strict confidentiality. Client names, deal details, and findings are not disclosed without explicit permission.",
  },
  {
    question: "Do you build software as well as advise?",
    answer:
      "Yes, when the advice calls for it. A small team of senior specialists delivers under the same standards as the advice. Advice leads; delivery follows. Most engagements end with a decision, not a proposal.",
  },
  {
    question: "Do you review intellectual property, code ownership, and open-source licences?",
    answer:
      "Yes. Every due diligence engagement checks that a company owns the code it depends on: contractor and employee IP assignment, open-source licence compliance and copyleft exposure, third-party dependencies, and the provenance of AI-generated code.",
  },
  {
    question: "How much does an engagement cost?",
    answer:
      "It is priced by scope: a short review, a full report, a retainer, or a fractional role. Say what the decision is and you will get a clear number before you commit to anything.",
  },
  {
    question: "How is this different from a consultancy?",
    answer:
      "There is no product to sell and no large team to keep busy. The advice is the engagement. When delivery happens, it is because the advice called for it, not the other way round.",
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
