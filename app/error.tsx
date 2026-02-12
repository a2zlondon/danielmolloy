"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mb-8 text-6xl" aria-hidden>
          🤷
        </div>
        <h1 className="text-4xl md:text-5xl font-light mb-3">
          Something went sideways
        </h1>
        <p className="text-muted-foreground mb-8">
          We hit a snag. It’s not you — try again or head back to safety.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
