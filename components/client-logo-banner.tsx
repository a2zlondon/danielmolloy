import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/clients";

export function ExperienceIncludes() {
  const logos = CLIENT_LOGOS.slice(0, 10);

  function renderLogo(client: (typeof logos)[number]) {
    const logo = (
      <>
        <Image
          src={client.logo}
          alt=""
          width={96}
          height={40}
          className="h-6 w-auto max-w-[88px] object-contain grayscale contrast-125"
          data-preserve-color
        />
        <span className="sr-only">{client.name}</span>
      </>
    );

    if ("url" in client && client.url) {
      return (
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 hover:opacity-100 transition-opacity"
        >
          {logo}
        </a>
      );
    }

    return logo;
  }

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
                {renderLogo(client)}
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
