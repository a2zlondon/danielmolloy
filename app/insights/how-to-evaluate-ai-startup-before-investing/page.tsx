import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { InsightArticle } from "@/components/insight-article";

export const metadata = {
  title: "How to Evaluate an AI Startup Before Investing",
  description:
    "A practical AI due diligence guide for VCs and investors covering proprietary AI, models, data ownership, telemetry and unit economics.",
};

const sections = [
  {
    title: "Is the AI proprietary?",
    body: "Start by separating the product claim from the defensible asset. Proprietary AI may come from owned data, domain-specific workflows, evaluation systems, fine-tuned models, embedded feedback loops or hard-to-copy integration depth. A thin wrapper around a public model can still be useful, but it should not be valued like a defensible AI platform.",
  },
  {
    title: "What models are used?",
    body: "Identify whether the company uses hosted frontier models, open-source models, fine-tuned variants, retrieval-augmented generation, classical machine learning or a hybrid approach. The answer affects cost, reliability, lock-in, security, latency, regulatory risk and how easily a competitor can reproduce the feature set.",
  },
  {
    title: "Who owns the data?",
    body: "AI diligence should trace what data is collected, where it came from, whether customers consented to its use, how it is stored, and whether it can legally be used for training, evaluation or product improvement. Data ambiguity is often a bigger risk than model choice.",
  },
  {
    title: "What telemetry proves usage?",
    body: "Investors should ask for evidence that AI features are being used in production and creating measurable value. Useful telemetry includes activation, repeated usage, error rates, human override rates, latency, customer outcomes and operational savings.",
  },
  {
    title: "Do the unit economics work?",
    body: "AI features can look impressive while quietly damaging gross margin. Review inference costs, prompt volume, model routing, caching, support workload, human review requirements and pricing power. The question is not only whether the AI works, but whether it works profitably at scale.",
  },
];

export default function EvaluateAiStartupPage() {
  return (
    <>
      <Nav />
      <main>
        <InsightArticle
          eyebrow="AI due diligence"
          title="How to Evaluate an AI Startup Before Investing"
          intro="VCs should perform AI due diligence by testing the commercial story against the technical evidence: what is genuinely proprietary, what depends on third-party models, what data rights exist, what telemetry proves usage, and whether the economics survive scale."
          sections={sections}
          ctaLabel="AI diligence for investors"
          ctaHref="/work-with-me"
        />
      </main>
      <Footer />
    </>
  );
}
