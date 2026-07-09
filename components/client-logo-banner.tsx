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
          width={192}
          height={80}
          className="h-12 w-auto max-w-[176px] object-contain grayscale contrast-125"
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
          className="inline-flex h-full w-full items-center justify-center hover:opacity-100 transition-opacity"
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
          <p className="text-center text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8">
            Experience includes
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((client) => (
              <div
                key={client.name}
                className="flex min-h-16 items-center justify-center opacity-70"
              >
                {renderLogo(client)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
