import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/cta-section";
import { ExperienceIncludes } from "@/components/client-logo-banner";
import { LINKEDIN_URL, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: "The Practice",
  description:
    "Daniel Molloy leads every engagement. A small team of senior specialists supports delivery — infrastructure, product, frontend, and reporting — under the same standards.",
  alternates: { canonical: `${SITE_URL}/who-we-are` },
};

type Specialist = {
  name: string;
  focus: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  linkedInUrl?: string;
};

const specialists: Specialist[] = [
  {
    name: "Abdul Manan",
    focus: "Scale & Reliability",
    bio: "Advises on scalable production systems across mobile, web, cloud, realtime datastores, distributed platforms, and reliability under real usage.",
    initials: "AM",
    imageSrc: "/images/team/abdul-manan.png",
    linkedInUrl: "https://www.linkedin.com/in/abdul-manan10/",
  },
  {
    name: "Selinay Yildirim",
    focus: "UI/UX & Frontend",
    bio: "Reviews brand, interface quality, frontend execution, interaction speed, and user journeys that may slow trust, conversion, or sales.",
    initials: "SY",
    imageSrc: "/images/team/selinay-yildirim.png",
    linkedInUrl: "https://www.linkedin.com/in/selinayyildirim/",
  },
  {
    name: "Ray Mongey",
    focus: "Product & AI",
    bio: "Evaluates product roadmaps, customer demand signals, AI capability claims, and whether the technology is defensible engineering.",
    initials: "RM",
    imageSrc: "/images/team/ray-mongey.png",
    linkedInUrl: "https://www.linkedin.com/in/raymongey/",
  },
  {
    name: "Gillian Fitzgibbon",
    focus: "Technology Readiness & Reporting",
    bio: "Turns operational evidence into clear findings on whether a company has the systems, controls, and delivery maturity to support the plan.",
    initials: "GF",
    imageSrc: "/images/team/gillian-fitzgibbon.png",
    linkedInUrl: "https://www.linkedin.com/in/gillian-fitzgibbon-60252333/",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                The practice
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                Daniel advises every client directly. A small team of senior
                specialists supports delivery when an engagement needs hands-on
                work.
              </p>

              <Card className="border-0 shadow-sm mb-16">
                <CardContent className="pt-8 pb-8 md:flex md:items-start md:gap-8">
                  <Avatar className="h-28 w-28 mb-5 md:mb-0 shrink-0">
                    <AvatarImage
                      src="/images/portrait-smile.png"
                      alt="Daniel Molloy"
                      className="object-cover grayscale"
                    />
                    <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                      DM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      Founder
                    </Badge>
                    <h2 className="text-2xl font-medium mb-3">Daniel Molloy</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Founder and lead adviser. Daniel leads every engagement:
                      the scope, the evidence, the findings, and the advice
                      itself. He is the single point of accountability for the
                      work.
                    </p>
                    <div className="flex gap-3">
                      <Button asChild variant="outline" size="sm">
                        <Link href="/about">About Daniel</Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-light mb-4">The delivery team</h2>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                Senior specialists who carry out and review delivery work —
                infrastructure, product, frontend, and reporting — under
                Daniel&apos;s direction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {specialists.map((member) => (
                  <Card key={member.name} className="border-0 shadow-sm h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col">
                      <Avatar className="h-28 w-28 mb-5">
                        {member.imageSrc ? (
                          <AvatarImage
                            src={member.imageSrc}
                            alt={member.name}
                            className="object-cover grayscale"
                          />
                        ) : null}
                        <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="mb-3 text-xs">
                        Specialist
                      </Badge>
                      <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-1">
                        {member.focus}
                      </p>
                      <h3 className="text-xl font-medium mb-3">{member.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {member.bio}
                      </p>
                      {member.linkedInUrl ? (
                        <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                          <a
                            href={member.linkedInUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            LinkedIn
                          </a>
                        </Button>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <p className="text-muted-foreground mt-12 max-w-2xl">
                Everyone works under the same NDA, the same evidence standards,
                and Daniel&apos;s review.
              </p>
            </div>
          </div>
        </section>
        <ExperienceIncludes />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
