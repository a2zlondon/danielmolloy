import Link from "next/link";
import { Mark } from "@/components/brand/logo";
import { CompanyLegalDetails } from "@/components/company-legal-details";
import { BRAND_NAME } from "@/lib/brand";
import { BOOK_CALL_URL, LINKEDIN_URL } from "@/lib/constants";

const serviceLinks = [
  { href: "/services/technical-due-diligence", label: "Technical due diligence" },
  { href: "/services/technology-advisory", label: "Technology advisory" },
  { href: "/services/fractional-cto", label: "Fractional CTO" },
  { href: "/services/ai-governance", label: "AI governance & strategy" },
  { href: "/services/cloud-software-delivery", label: "Cloud & software delivery" },
];

const practiceLinks = [
  { href: "/about", label: "About Daniel" },
  { href: "/who-we-are", label: "The practice" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4 flex items-center gap-2.5">
              <Mark className="size-6" />
              {BRAND_NAME}
            </h3>
            <p className="text-sm text-muted-foreground">
              Independent technology advisory. Daniel Molloy Ltd helps
              investors, boards, and technology companies make the right
              decisions.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Practice</h4>
            <ul className="space-y-2 text-sm">
              {practiceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:connect@danielmolloy.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={BOOK_CALL_URL}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground text-center">
          <p>
            &copy; {new Date().getFullYear()} Daniel Molloy Ltd. All rights reserved.
          </p>
          <div className="mt-4 text-xs">
            <CompanyLegalDetails compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
