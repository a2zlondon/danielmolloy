import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/clients";

const proofPoints = [
  { value: "20+ yrs", label: "Software, architecture, and delivery experience" },
  { value: "2-3 wks", label: "Typical full acquisition review timeline" },
  { value: "5 areas", label: "Product, engineering, infrastructure, team, commercial" },
  { value: "NDA", label: "Confidential by default, with read-only access where possible" },
];

export function ClientLogoBanner() {
  const logos = CLIENT_LOGOS.slice(0, 10);

  return (
    <section
      className="py-18 border-y border-border bg-card"
      aria-label="Credibility and prior experience"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start max-w-6xl mx-auto">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Evidence, not theatre
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-5">
              Built for deal teams that need a real technical view.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The work is grounded in hands-on technical consulting: reviewing code, architecture, infrastructure, delivery process, AI claims, and the people behind them. Client names and deal details stay confidential unless explicitly approved.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point.label} className="border border-border bg-background p-5">
                <p className="text-3xl font-light mb-2">{point.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Experience includes
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((client) => (
              <div key={client.name} className="flex items-center gap-3 opacity-70">
                <Image
                  src={client.logo}
                  alt=""
                  width={96}
                  height={40}
                  className="h-6 w-auto max-w-[88px] object-contain grayscale contrast-125"
                  data-preserve-color
                />
                <span className="sr-only">{client.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            Representative background and prior delivery experience. Current client and transaction details are not disclosed.
          </p>
        </div>
      </div>
    </section>
  );
}
