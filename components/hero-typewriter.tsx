"use client";

import { useEffect, useState } from "react";

const words = [
  "technical maturity",
  "debt",
  "scalability",
  "risk",
  "value potential",
];

export function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isWordComplete = characterCount === currentWord.length;
    const isWordDeleted = characterCount === 0;

    const delay = isWordComplete && !isDeleting ? 1300 : isDeleting ? 45 : 70;

    const timeout = window.setTimeout(() => {
      if (isWordComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setCharacterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, wordIndex]);

  const typedWord = words[wordIndex].slice(0, characterCount);

  return (
    <span
      className="inline-flex min-w-[13ch] items-baseline rounded-md bg-accent/10 px-2 text-foreground shadow-[inset_0_-0.45em_0_var(--muted)]"
      aria-live="polite"
      aria-label={words[wordIndex]}
    >
      <span>{typedWord || "\u00A0"}</span>
      <span className="ml-0.5 inline-block h-[1em] w-px translate-y-0.5 animate-pulse bg-foreground/70" />
    </span>
  );
}
