import Link from "next/link";
import { CompanyLegalDetails } from "@/components/company-legal-details";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">
              Daniel Molloy Technology Due Diligence
            </h3>
            <p className="text-sm text-muted-foreground">
              Independent technical due diligence — assessing the technical value of software, SaaS, and AI companies.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work-with-me" className="text-muted-foreground hover:text-foreground">
                  Technical due diligence
                </Link>
              </li>
              <li>
                <Link href="/#who-we-work-with" className="text-muted-foreground hover:text-foreground">
                  Who we work with
                </Link>
              </li>
              <li>
                <Link href="/fix-your-tech-fast" className="text-muted-foreground hover:text-foreground">
                  Fix your tech fast
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/who-we-are" className="text-muted-foreground hover:text-foreground">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:connect@danielmolloy.com" className="text-muted-foreground hover:text-foreground">
                  Email
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground text-center">
          <p>
            &copy; {new Date().getFullYear()} Daniel Molloy Technology Due
            Diligence. All rights reserved.
          </p>
          <div className="mt-4 text-xs">
            <CompanyLegalDetails compact />
          </div>
        </div>
      </div>
    </footer>
  );
}
