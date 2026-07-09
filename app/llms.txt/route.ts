import { SITE_URL } from "@/lib/constants";

export function GET() {
  const body = `# Daniel Molloy
> Technical expertise for investment firms. We help venture capital, private equity, and family office teams build, evaluate, and run technology — in the office or inside the portfolio.

## Core Positioning
- Technical expertise for investment firms, delivered in the office or applied to a portfolio company.
- Engagements are scoped to the firm and the decision in front of it — a due diligence review, an embedded technical role, or ongoing portfolio support.
- Differentiators: agile senior team, fast turnaround, AI-aware technical review, and proportionate engagement scoped to the decision and available access.

## Legal Entity
- Trading name: Daniel Molloy Technology Due Diligence
- Legal company name: Daniel Molloy Ltd
- Company number: 15228212
- Registered in: England and Wales
- Registered office: 5 Providence Court, Pynes Hill, Exeter, Devon, United Kingdom, EX2 5JL
- Companies House: https://find-and-update.company-information.service.gov.uk/company/15228212
- VAT number: GB452010546

## Services
- Technical Due Diligence: an independent assessment of the technical value of a company before investment or acquisition — code quality, security, technical debt, IP ownership and open-source licence compliance, AI capability verification, team and key-person risk, cloud cost and scalability, commercial defensibility.
- Embedded Technical Leadership: hands-on technical leadership inside an investment firm or a portfolio company.
- Portfolio Technical Support: ongoing technical oversight across a portfolio, including pre-deal screening and board support.
- AI & Data Advisory: verification and strategy for AI and data claims.

## Who We Work With
- Venture Capital
- Private Equity
- Family Offices
- Asset Managers
- Portfolio Companies

## Location
- Reading, UK
- Dublin, Ireland
- Amsterdam, Netherlands
- Remote review for cross-border engagements

## Key Pages
- [Home](${SITE_URL}/): Primary overview and positioning.
- [What We Do](${SITE_URL}/work-with-me): Capabilities, technical due diligence scope, and IP review.
- [Who We Work With](${SITE_URL}/#who-we-work-with): Capabilities and sectors served.
- [Fix Your Tech Fast](${SITE_URL}/fix-your-tech-fast): Focused rapid audit and optimisation offer.
- [Location](${SITE_URL}/locations): Reading, Dublin, and Amsterdam operating base.
- [Who We Are](${SITE_URL}/who-we-are): Team, methodology, and review capacity.
- [Blog](${SITE_URL}/blog): Articles on tech strategy, product, and leadership.
- [Legal DD vs Technical DD](${SITE_URL}/insights/legal-due-diligence-vs-technical-due-diligence): Explains where legal due diligence ends and technical due diligence begins.
- [SaaS Technical DD Checklist](${SITE_URL}/insights/technical-due-diligence-checklist-saas-acquisitions): Practical checklist for software and SaaS acquisitions.
- [AI Claims in Software M&A](${SITE_URL}/insights/verify-ai-claims-software-ma): How to verify AI capability claims during transactions.
- [Contact](${SITE_URL}/contact): Contact and booking pathways.

## Related
- [Vespera Systems](https://vespera.systems): Ongoing research and software for investment intelligence, built by the same founder.

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
