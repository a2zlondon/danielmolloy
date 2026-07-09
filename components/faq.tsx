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
      "Investors, corporate finance and M&A advisers, law firms, and founders. Sometimes the investor hires us directly. Sometimes a lawyer or adviser brings us in to add a technical report to the wider due diligence process. Sometimes a founder hires us before the buyer starts asking difficult technical questions.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "We agree the scope, inspect the available technology evidence, interview key people, then provide a written report and briefing that explains what is solid, what is risky, and what questions should be answered before money changes hands. For a first-time investor, the closest analogy is a property survey, but for a software business.",
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
      "A general IT consultant usually helps build, fix, or operate technology. We provide independent technical due diligence. That means assessing the technology behind a business so investors, founders, advisers, and lawyers understand what is being bought, what risks exist, and what may need attention after investment or acquisition.",
  },
  {
    question: "Can brokers and corporate finance advisers refer clients?",
    answer:
      "Yes. Corporate finance and M&A advisers often bring us in when a client needs independent technical due diligence on a software, SaaS, AI, or technology business. The aim is to give the client more confidence in the technology behind the transaction.",
  },
  {
    question: "What access do you need from the target company?",
    answer:
      "Usually: product access, source code repository access, cloud or infrastructure information, CI/CD and deployment documentation, architecture diagrams if they exist, security and data documentation, and focused interviews with the CTO, lead engineer, or founder. We work with whatever access the timeline allows.",
  },
  {
    question: "Do you only work on acquisitions?",
    answer:
      "No. We also support pre-investment screening for angels, VCs and family offices, founder readiness reviews before fundraising or sale, and standalone AI capability assessments. If technology risk is the question, we can scope an engagement to fit.",
  },
  {
    question: "Do you review intellectual property, code ownership, and open-source licences?",
    answer:
      "Yes. We check that the company actually owns the code it is selling: contractor and employee IP assignment, open-source licence compliance and copyleft exposure, third-party dependencies, and the provenance of AI-generated code. The findings give buyers and lawyers evidence to support IP warranties, disclosure, and transaction terms.",
  },
  {
    question: "How much does technical due diligence cost?",
    answer:
      "Technical due diligence starts from £10,000 + VAT, scoped to the deal — the size of the codebase, the level of access, and the decision the report needs to support. A rapid red-flag review sits at the smaller end; a full acquisition report with interviews and a management briefing sits at the larger end.",
  },
  {
    question: "Can founders get investment-ready before due diligence starts?",
    answer:
      "Yes. A readiness review makes your company investment-ready before a buyer's technical due diligence begins: we look at your code, architecture, security, documentation, and team dependency the way an acquirer's reviewer would, so you can fix, evidence, or explain the issues before they become negotiating points.",
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
