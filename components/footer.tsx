import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium mb-4">Daniel Molloy</h3>
            <p className="text-sm text-muted-foreground">
              Building companies by turning complexity into clarity.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/work-with-me" className="text-muted-foreground hover:text-foreground">
                  Day Rate
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="text-muted-foreground hover:text-foreground">
                  Monthly Retainer
                </Link>
              </li>
              <li>
                <Link href="/work-with-me" className="text-muted-foreground hover:text-foreground">
                  Fractional CTO
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
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
                <Link href="/locations" className="text-muted-foreground hover:text-foreground">
                  Where I work
                </Link>
              </li>
              <li>
                <Link href="/for-partners" className="text-muted-foreground hover:text-foreground">
                  For partners
                </Link>
              </li>
              <li>
                <Link href="/for-enterprises" className="text-muted-foreground hover:text-foreground">
                  For enterprises
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
          <p>&copy; {new Date().getFullYear()} Daniel Molloy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
