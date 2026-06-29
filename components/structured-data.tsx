import {
  COMPANIES_HOUSE_URL,
  COMPANY_NUMBER,
  LEGAL_COMPANY_NAME,
  REGISTERED_OFFICE_ADDRESS,
  SITE_URL,
  VAT_NUMBER,
} from "@/lib/constants";

const ORGANIZATION_AND_SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Daniel Molloy Technology Due Diligence",
      legalName: LEGAL_COMPANY_NAME,
      identifier: COMPANY_NUMBER,
      vatID: VAT_NUMBER,
      description:
        "Technology due diligence for software, SaaS and AI businesses: independent technical reviews for investors, corporate finance advisers, law firms, and founders.",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: REGISTERED_OFFICE_ADDRESS,
        addressCountry: "GB",
      },
      sameAs: [
        COMPANIES_HOUSE_URL,
        "https://www.linkedin.com/in/danielthomasmolloy/",
        "https://github.com/a2zlondon",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Daniel Molloy Technology Due Diligence",
      description:
        "Technology due diligence, acquisition reviews, AI capability assessments, and investor technical reviews for software, SaaS, AI, and technology businesses.",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
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

export function OrganizationAndServiceJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_AND_SERVICE_JSON_LD) }}
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
