import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/clients";

export function ClientLogoBanner() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section
      className="py-14 border-y border-border bg-card overflow-hidden"
      aria-label="Previous work and clients"
    >
      <p className="text-center text-xs tracking-[0.25em] uppercase text-muted-foreground mb-10">
        Previous work
      </p>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent"
          aria-hidden
        />

        <div className="flex w-max animate-marquee items-center gap-16 px-8">
          {logos.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex shrink-0 items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={140}
                height={56}
                className="h-8 w-auto max-w-[140px] object-contain md:h-10"
                data-preserve-color
                style={{ filter: "contrast(1.05) opacity(0.85)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
