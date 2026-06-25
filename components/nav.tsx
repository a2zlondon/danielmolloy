"use client";

import { Menu, X } from "lucide-react";
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

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-medium" onClick={() => setIsOpen(false)}>
            Daniel Molloy
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm hover:text-foreground/80 transition-colors"
              >
                {item.label}
              </Link>
            ))}
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
              {navItems.map((item) => (
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
