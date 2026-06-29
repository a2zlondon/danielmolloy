"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work-with-me", label: "Services" },
  { href: "/who-we-are", label: "Who we are" },
  { href: "/blog", label: "Writing" },
];

const audienceItems = [
  { href: "/for-investors", label: "For investors" },
  { href: "/for-corporate-finance", label: "For corporate finance" },
  { href: "/for-law-firms", label: "For law firms" },
  { href: "/for-founders", label: "For founders" },
];

const mobileNavItems = [
  ...navItems,
  ...audienceItems,
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
            Daniel Molloy
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-foreground/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm hover:text-foreground/80 transition-colors"
              >
                Who we help
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-border bg-background p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {audienceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Button size="sm" asChild>
              <a href={BOOK_CALL_URL}>Book a call</a>
            </Button>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
        {isOpen ? (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-4">
              {mobileNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base hover:text-foreground/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button size="sm" className="w-fit" asChild>
                <a href={BOOK_CALL_URL}>Book a call</a>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
