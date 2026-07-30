import { BRAND_NAME, MARK } from "@/lib/brand";
import { MARK_PATH } from "@/lib/brand-mark.generated";
import { cn } from "@/lib/utils";

/**
 * The DM monogram, rendered inline rather than as an <img>.
 *
 * Inline SVG sidesteps the global `img { filter: grayscale(100%) }` rule in
 * app/globals.css, and lets the mark take its colours from the theme: the field
 * follows currentColor and the letterforms are knocked out in the page background,
 * so it stays correct wherever it sits.
 *
 * Decorative by default. Pass `label` only when the mark stands alone with no
 * accompanying text — beside the name it would just repeat it to screen readers.
 */
export function Mark({ className, label }: { className?: string; label?: string }) {
  return (
    <svg
      viewBox={`0 0 ${MARK.size} ${MARK.size}`}
      className={cn("size-8 shrink-0", className)}
      fill="none"
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <rect
        width={MARK.size}
        height={MARK.size}
        rx={MARK.size * MARK.radiusRatio}
        fill="currentColor"
      />
      <path d={MARK_PATH} fill="var(--background)" />
    </svg>
  );
}

/**
 * Mark plus the name. The name is live text, not outlined paths — Inter is already
 * loaded on the page, and live text stays selectable, searchable and crisp at any
 * zoom. The outlined public/brand/wordmark.svg exists for recipients without Inter.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Mark />
      <span className="text-xl font-medium tracking-tight">{BRAND_NAME}</span>
    </span>
  );
}
