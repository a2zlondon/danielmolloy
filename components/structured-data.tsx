const PERSON_AND_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://danielmolloy.com/#person",
      name: "Daniel Molloy",
      jobTitle: "Fractional CTO",
      description:
        "Fractional CTO for scale-ups and Series A+ companies. I build companies by turning complexity into clarity. Technical leadership for banks, fintech, and enterprises. Remote or on-site in UK, Europe, UAE, Saudi Arabia and US.",
      url: "https://danielmolloy.com",
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://danielmolloy.com/#service",
      name: "Daniel Molloy | Fractional CTO",
      description:
        "Fractional CTO and technical leadership for scale-ups, Series A+ companies, banks, fintech and enterprises. Day rate, monthly retainer, or embedded engagement. Remote or on-site in UK, Europe, MENA and US.",
      url: "https://danielmolloy.com",
      provider: { "@id": "https://danielmolloy.com/#person" },
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
      serviceType: ["Fractional CTO", "Technical leadership", "CTO as a service"],
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
      url: "https://danielmolloy.com",
    },
    publisher: {
      "@type": "Person",
      name: "Daniel Molloy",
      url: "https://danielmolloy.com",
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
