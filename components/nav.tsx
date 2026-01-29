import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

export function Nav() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium">
            Daniel Molloy
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-foreground/80 transition-colors">
              Home
            </Link>
            <Link href="/work-with-me" className="text-sm hover:text-foreground/80 transition-colors">
              Work with me
            </Link>
            <Link href="/blog" className="text-sm hover:text-foreground/80 transition-colors">
              Writing
            </Link>
            <Link href="/about" className="text-sm hover:text-foreground/80 transition-colors">
              About
            </Link>
            <Button size="sm" asChild>
              <a href={BOOK_CALL_URL}>Book a call</a>
            </Button>
          </div>
          <div className="md:hidden">
            <Button size="sm">Menu</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
