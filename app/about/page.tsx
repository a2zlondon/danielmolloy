import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ProfilePageJsonLd } from "@/components/structured-data";
import { BOOK_CALL_URL, LINKEDIN_URL, SITE_URL } from "@/lib/constants";

export const metadata = {
  title: { absolute: "Daniel Molloy | Independent Technology Adviser" },
  description:
    "Daniel Molloy is an independent technology adviser to investors, boards, and technology companies. Founder of Daniel Molloy Ltd, supported by a small senior team.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "Daniel Molloy | Independent Technology Adviser",
    description:
      "Daniel Molloy is an independent technology adviser to investors, boards, and technology companies. Founder of Daniel Molloy Ltd, supported by a small senior team.",
  },
};

type Person = {
  name: string;
  badge: string;
  focus: string;
  bio: string;
  initials: string;
  imageSrc: string;
  linkedInUrl: string;
};

const team: Person[] = [
  {
    name: "Sanaya Bachooali",
    badge: "Director",
    focus: "Sales & Business Development",
    bio: "Leads business development and partnerships for the practice. Often the first point of contact for investors, counsel, and deal teams. More than five years in strategy consulting at Accenture before this.",
    initials: "SB",
    imageSrc: "/images/team/sanaya-bachooali.png",
    linkedInUrl: "https://www.linkedin.com/in/sanaya-bachooali/",
  },
  {
    name: "Abdul Manan",
    badge: "Specialist",
    focus: "Scale & Reliability",
    bio: "Advises on scalable production systems across mobile, web, cloud, realtime datastores, distributed platforms, and reliability under real usage.",
    initials: "AM",
    imageSrc: "/images/team/abdul-manan.png",
    linkedInUrl: "https://www.linkedin.com/in/abdul-manan10/",
  },
  {
    name: "Selinay Yildirim",
    badge: "Specialist",
    focus: "UI/UX & Frontend",
    bio: "Reviews brand, interface quality, frontend execution, interaction speed, and user journeys that may slow trust, conversion, or sales.",
    initials: "SY",
    imageSrc: "/images/team/selinay-yildirim.png",
    linkedInUrl: "https://www.linkedin.com/in/selinayyildirim/",
  },
  {
    name: "Ray Mongey",
    badge: "Specialist",
    focus: "Product & AI",
    bio: "Evaluates product roadmaps, customer demand signals, AI capability claims, and whether the technology is defensible engineering.",
    initials: "RM",
    imageSrc: "/images/team/ray-mongey.png",
    linkedInUrl: "https://www.linkedin.com/in/raymongey/",
  },
  {
    name: "Gillian Fitzgibbon",
    badge: "Specialist",
    focus: "Technology Readiness & Reporting",
    bio: "Turns operational evidence into clear findings on whether a company has the systems, controls, and delivery maturity to support the plan.",
    initials: "GF",
    imageSrc: "/images/team/gillian-fitzgibbon.png",
    linkedInUrl: "https://www.linkedin.com/in/gillian-fitzgibbon-60252333/",
  },
];

const writing = [
  {
    title: "Software is no longer the scarce resource. Evidence is.",
    href: "/2026/07/03/software-is-no-longer-the-scarce-resource-evidence-is",
  },
  {
    title: "Technical due diligence checklist for investors",
    href: "/insights/technical-due-diligence-checklist-saas-acquisitions",
  },
];

export default function AboutPage() {
  return (
    <>
      <ProfilePageJsonLd />
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <img
                src="/images/portrait-linkedin.jpg"
                alt="Daniel Molloy"
                className="h-24 w-24 rounded-full object-cover mb-8"
              />
              <h1 className="text-5xl md:text-6xl font-light mb-4">
                Daniel Molloy
              </h1>
              <p className="text-xl text-muted-foreground mb-12">
                Independent technology adviser. Founder of Daniel Molloy Ltd.
              </p>

              <div className="prose prose-lg max-w-none space-y-4">
                <p>
                  Daniel advises investors, boards, and technology companies on
                  decisions that are hard to reverse: acquisitions, technology
                  strategy, AI adoption, and technical leadership.
                </p>
                <p>
                  The advice comes from more than 25 years building, rescuing,
                  and operating complex software systems. That background
                  shapes how he works. Start with the decision, examine the
                  evidence, and report in plain English.
                </p>
                <p>
                  The practice is independent. There is no software to sell and
                  no delivery target behind the advice. Every engagement is
                  confidential. The work is never spoken about.
                </p>
              </div>

              <h2 className="text-2xl font-light mt-14 mb-4">The practice</h2>
              <p className="text-muted-foreground mb-10">
                Daniel leads every engagement. Sanaya Bachooali runs business
                development. A small team of senior specialists supports
                delivery, under the same NDA, the same evidence standards, and
                Daniel&apos;s review.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {team.map((member) => (
                  <Card key={member.name} className="border-0 shadow-sm h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col">
                      <Avatar className="h-20 w-20 mb-5">
                        <AvatarImage
                          src={member.imageSrc}
                          alt={member.name}
                          className="object-cover grayscale"
                        />
                        <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="mb-3 text-xs w-fit">
                        {member.badge}
                      </Badge>
                      <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-1">
                        {member.focus}
                      </p>
                      <h3 className="text-xl font-medium mb-3">{member.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {member.bio}
                      </p>
                      <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                        <a
                          href={member.linkedInUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-light mt-14 mb-4">Writing</h2>
              <ul className="space-y-3">
                {writing.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground underline underline-offset-4 hover:no-underline"
                  >
                    All writing
                  </Link>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mt-14">
                <Button size="lg" asChild>
                  <a href={BOOK_CALL_URL}>Book a call</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:connect@danielmolloy.com">Email</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
