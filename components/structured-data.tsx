import {
  COMPANIES_HOUSE_URL,
  COMPANY_NUMBER,
  LEGAL_COMPANY_NAME,
  REGISTERED_OFFICE_ADDRESS,
  SITE_URL,
  VAT_NUMBER,
} from "@/lib/constants";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PERSON_ID = `${SITE_URL}/about#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const AREA_SERVED = [
  "United Kingdom",
  "Ireland",
  "Netherlands",
  "Germany",
  "France",
  "Spain",
].map((name) => ({ "@type": "Country", name }));

const PERSON_JSON_LD = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Daniel Molloy",
  jobTitle: "Independent Technology Adviser",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/images/portrait-smile.png`,
  worksFor: { "@id": ORGANIZATION_ID },
  sameAs: [
    "https://www.linkedin.com/in/danielthomasmolloy/",
    "https://github.com/a2zlondon",
  ],
  knowsAbout: [
    "Technology Advisory",
    "Technical Due Diligence",
    "Technology Due Diligence",
    "Fractional CTO leadership",
    "AI Governance",
    "Technology Risk",
    "Software Architecture",
    "Cloud Transformation",
    "https://en.wikipedia.org/wiki/Due_diligence",
    "https://en.wikipedia.org/wiki/Private_equity",
    "https://en.wikipedia.org/wiki/Venture_capital",
    "https://en.wikipedia.org/wiki/Family_office",
    "https://en.wikipedia.org/wiki/Software_architecture",
    "https://en.wikipedia.org/wiki/Chief_technology_officer",
  ],
};

const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: LEGAL_COMPANY_NAME,
      alternateName: "Daniel Molloy",
      legalName: LEGAL_COMPANY_NAME,
      identifier: COMPANY_NUMBER,
      vatID: VAT_NUMBER,
      description:
        "Independent technology advisory practice. Technical due diligence, technology advisory, fractional CTO leadership, AI governance, and cloud and software delivery for investors, boards, and technology companies.",
      url: SITE_URL,
      founder: { "@id": PERSON_ID },
      areaServed: AREA_SERVED,
      address: {
        "@type": "PostalAddress",
        streetAddress: REGISTERED_OFFICE_ADDRESS,
        addressCountry: "GB",
      },
      sameAs: [COMPANIES_HOUSE_URL],
    },
    PERSON_JSON_LD,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: "Daniel Molloy",
      url: SITE_URL,
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: serviceType ?? name,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
    audience: {
      "@type": "Audience",
      audienceType:
        "Venture capital, private equity, family offices, boards, and technology companies",
    },
    areaServed: AREA_SERVED,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ProfilePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: PERSON_JSON_LD,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
      "@id": PERSON_ID,
      name: "Daniel Molloy",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: LEGAL_COMPANY_NAME,
    },
    mainEntityOfPage: url,
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
