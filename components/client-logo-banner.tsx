import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/clients";

export function ExperienceIncludes() {
  const logos = CLIENT_LOGOS.slice(0, 10);

  return (
    <section
      className="py-18 border-y border-border bg-card"
      aria-label="Representative prior experience"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
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
