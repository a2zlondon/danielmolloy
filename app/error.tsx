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
        <h1 className="text-4xl md:text-5xl font-light mb-3">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mb-8">
          An unexpected error occurred. Try again, or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            Try again
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
