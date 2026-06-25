"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BOOK_CALL_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "consultationPromptDismissedUntil:v2";
const DISMISS_FOR_DAYS = 14;
const APPEAR_DELAY_MS = 2500;
const SCROLL_THRESHOLD = 0.12;

function getDismissedUntil() {
  const storedValue = window.localStorage.getItem(DISMISS_KEY);
  return storedValue ? Number(storedValue) : 0;
}

export function ConsultationPrompt() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (getDismissedUntil() > Date.now()) {
      return;
    }

    const showPrompt = () => setIsVisible(true);
    const timer = window.setTimeout(showPrompt, APPEAR_DELAY_MS);

    const onScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      const scrollProgress = window.scrollY / scrollableHeight;
      if (scrollProgress >= SCROLL_THRESHOLD) {
        showPrompt();
        window.clearTimeout(timer);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    const dismissedUntil =
      Date.now() + DISMISS_FOR_DAYS * 24 * 60 * 60 * 1000;
    window.localStorage.setItem(DISMISS_KEY, String(dismissedUntil));
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Book a technology due diligence consultation"
      className={cn(
        "fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-out motion-reduce:transition-none sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[360px]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <div className="rounded-2xl border border-foreground/15 bg-foreground p-4 text-background shadow-2xl shadow-black/25">
        <div className="flex items-start gap-3">
          <div className="mt-1 hidden h-2.5 w-2.5 shrink-0 rounded-full bg-background sm:block" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-background">
              Need a technical second opinion?
            </p>
            <p className="mt-1 text-sm text-background/75">
              Book a 20-minute Technology Due Diligence consultation before
              you invest, acquire, or build.
            </p>
            <Button
              size="sm"
              variant="secondary"
              className="mt-3 w-full bg-background text-foreground hover:bg-background/90 sm:w-auto"
              asChild
            >
              <a href={BOOK_CALL_URL}>Book a call</a>
            </Button>
          </div>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full p-1 text-background/65 transition-colors hover:bg-background/10 hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/70"
            aria-label="Dismiss consultation prompt"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
