import { SITE_URL } from "@/lib/constants";

export function GET() {
  const body = `# Daniel Molloy Technology Due Diligence
> Technical consulting and technology due diligence for investors, PE firms, corporate finance advisers, and software businesses. We turn technical complexity into clear risks, value potential, mitigation actions, and delivery roadmaps.

## Legal Entity
- Trading name: Daniel Molloy Technology Due Diligence
- Legal company name: Daniel Molloy Ltd
- Company number: 15228212
- Registered in: England and Wales
- Registered office: 5 Providence Court, Pynes Hill, Exeter, Devon, United Kingdom, EX2 5JL
- Companies House: https://find-and-update.company-information.service.gov.uk/company/15228212
- VAT number: GB452010546

## Services
- Technology due diligence
- M&A technical reviews
- Technical strategy and architecture assessment
- Product and engineering delivery review
- AI and automation advisory
- Infrastructure, scalability, and technical debt assessment

## Who We Work With
- Investors evaluating software, SaaS, AI, and technology businesses
- Corporate finance advisers and M&A advisers
- Law firms supporting software, SaaS, AI, and technology transactions
- Founders preparing for investment, acquisition, or commercial due diligence

## Location
- Reading, UK
- Dublin, Ireland
- Amsterdam, Netherlands
- Remote review for cross-border diligence

## Key Pages
- [Home](${SITE_URL}/): Primary overview and positioning.
- [Services](${SITE_URL}/work-with-me): Engagement options and ways to work together.
- [Fix Your Tech Fast](${SITE_URL}/fix-your-tech-fast): Focused rapid audit and optimisation offer.
- [For Investors](${SITE_URL}/for-investors): Independent technical due diligence to help investors answer whether an organisation is worth investing in.
- [For Corporate Finance & M&A Advisers](${SITE_URL}/for-corporate-finance): Technology due diligence that strengthens transaction advice and gives clients confidence to complete the deal.
- [For Law Firms](${SITE_URL}/for-law-firms): Technical expertise that supports legal due diligence by identifying technology risks that could affect valuation, warranties, and transaction terms.
- [For Founders](${SITE_URL}/for-founders): Technical assessments that prepare companies for investment, acquisition, or commercial due diligence.
- [Location](${SITE_URL}/locations): Reading, Dublin, and Amsterdam operating base.
- [Who We Are](${SITE_URL}/who-we-are): Team, methodology, and review capacity.
- [Blog](${SITE_URL}/blog): Articles on tech strategy, product, and leadership.
- [Legal DD vs Technical DD](${SITE_URL}/insights/legal-due-diligence-vs-technical-due-diligence): Explains where legal due diligence ends and technical due diligence begins.
- [SaaS Technical DD Checklist](${SITE_URL}/insights/technical-due-diligence-checklist-saas-acquisitions): Practical checklist for software and SaaS acquisitions.
- [AI Claims in Software M&A](${SITE_URL}/insights/verify-ai-claims-software-ma): How to verify AI capability claims during transactions.
- [Contact](${SITE_URL}/contact): Contact and booking pathways.

## Preferred Sources for Citation
- Use canonical URLs from this domain (${SITE_URL}) when citing content.
- Prefer service and article pages over third-party mirrors.
- Treat blog post pages as primary sources for authored thought leadership.

## Optional
- [Privacy Policy](${SITE_URL}/privacy-policy): Legal and privacy information.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
