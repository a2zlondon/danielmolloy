import { SITE_URL } from "@/lib/constants";

const PERSON_AND_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Daniel Molloy",
      jobTitle: "Technical Due Diligence Advisor",
      description:
        "Technology due diligence for private equity, corporate finance advisers, and investors evaluating software businesses. 20+ years assessing complex technical environments and reducing uncertainty for deal teams.",
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/danielthomasmolloy/",
        "https://github.com/a2zlondon",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Daniel Molloy | Technology Due Diligence",
      description:
        "M&A technology due diligence, acquisition reviews, AI capability assessments, and investor technical reviews for PE firms, brokers, and corporate finance advisers.",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Spain" },
        { "@type": "Country", name: "Netherlands" },
      ],
      serviceType: [
        "Technical due diligence",
        "M&A technology review",
        "AI capability assessment",
        "Acquisition due diligence",
      ],
    },
  ],
};

export function PersonAndServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_AND_SERVICE_JSON_LD) }}
    />
  );
}

function buildFaqPageJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function FaqPageJsonLd({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildFaqPageJsonLd(faqs)),
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  description,
  datePublished,
  dateModified,
  imageUrl,
  url,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string | null;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      "@type": "Person",
      name: "Daniel Molloy",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Daniel Molloy",
      url: SITE_URL,
    },
    ...(imageUrl && { image: imageUrl }),
    url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
