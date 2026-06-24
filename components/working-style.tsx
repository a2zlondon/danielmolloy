import Image from "next/image";

const principles = [
  "Independent technical judgement",
  "Creative investigation",
  "Shared review standards",
];

export function WorkingStyle() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-muted min-h-[320px]">
            <Image
              src="/images/editorial/code-review.jpg"
              alt="Close-up of code under review"
              width={1800}
              height={1202}
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-125"
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              How we work
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Autonomous consultants, shared technical standards.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The best diligence work comes from people who can follow evidence, question assumptions, and think from first principles. Our consultants are trusted to work independently, then bring findings back into a structured review process.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
