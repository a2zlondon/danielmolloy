import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/cta-section";
import { ExperienceIncludes } from "@/components/client-logo-banner";

export const metadata = {
  title: "Who we are",
  description:
    "Daniel Molloy Technology Due Diligence — a specialist team supporting investors, PE firms, and corporate finance advisers with structured M&A technical reviews.",
};

type TeamMember = {
  title: string;
  focus: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  isLeader?: boolean;
  isHidden?: boolean;
};

const team: TeamMember[] = [
  {
    title: "Daniel Molloy",
    focus: "Founder & Lead Technical Advisor",
    bio: "Daniel leads the technical advisory team and brings over 20 years of software, architecture, delivery, and engineering leadership experience. His background spans broadcast, media, fintech, and enterprise clients including the BBC, BT Group, and Capita. He shapes the review methodology, supports specialist workstreams, and presents findings to deal teams and investment committees.",
    initials: "DM",
    imageSrc: "/images/portrait-smile.png",
    isLeader: true,
  },
  {
    title: "Infrastructure Specialist",
    focus: "Cloud & Cost Review",
    bio: "Reviews AWS, Azure, and hybrid cloud architectures. Assesses cost profiles, scalability limits, deployment maturity, and operational reliability — the dimensions that determine post-acquisition integration risk.",
    initials: "IS",
    isHidden: true,
  },
  {
    title: "Security & Engineering Specialist",
    focus: "Code Quality & Security",
    bio: "Examines source code repositories, CI/CD pipelines, test coverage, vulnerability exposure, and technical debt. Quantifies engineering risk and contributor patterns for deal teams.",
    initials: "SE",
    isHidden: true,
  },
  {
    title: "Abdul Manan",
    focus: "Scale & Reliability Consultant",
    bio: "Abdul advises on production systems that need to stay reliable under scale, complexity, and real-world usage. He supports reviews of mobile, web, cloud, realtime datastores, distributed systems, and AI-enabled platforms across fintech, healthcare, SaaS, and Web3 environments.",
    initials: "AM",
    imageSrc: "/images/team/abdul-manan.png",
  },
  {
    title: "Selinay Yildirim",
    focus: "UI/UX & Frontend Consultant",
    bio: "Selinay supports reviews of brand, interface quality, user journeys, and frontend execution. She helps identify where visual trust, interaction speed, confusing flows, or post-investment product work could affect conversion, sales velocity, and customer confidence.",
    initials: "SY",
    imageSrc: "/images/team/selinay-yildirim.png",
  },
  {
    title: "Ray Mongey",
    focus: "Product & AI Specialist",
    bio: "Ray supports product and AI workstreams across technical due diligence engagements. He evaluates product roadmaps, customer demand signals, AI capability claims, and whether stated technology is defensible engineering or a thin wrapper around commodity tooling.",
    initials: "RM",
    imageSrc: "/images/team/ray-mongey.png",
  },
];

const capacitySignals = [
  { value: "6+", label: "Active workstreams" },
  { value: "2–3 wks", label: "Typical full report" },
  { value: "5 areas", label: "Structured review dimensions" },
  { value: "100%", label: "Under NDA & confidentiality" },
];

export default function WhoWeArePage() {
  const members = team.filter((m) => !m.isHidden);

  return (
    <>
      <Nav />
      <main>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-light mb-6">
                Who we are
              </h1>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
                Daniel Molloy Technology Due Diligence is a specialist technical consulting team supporting investors, PE firms, and corporate finance advisers with structured reviews before capital is committed.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                {capacitySignals.map((signal) => (
                  <Card key={signal.label} className="border-0 shadow-sm text-center">
                    <CardContent className="py-6">
                      <p className="text-3xl font-light mb-1">{signal.value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        {signal.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="text-3xl font-light mb-4">The team</h2>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                Each engagement is supported by specialists who review infrastructure, security, and product dimensions in parallel — allowing multiple due diligence mandates to run concurrently without compromising depth.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {members.map((member) => (
                  <Card key={member.focus} className="border-0 shadow-sm h-full">
                    <CardContent className="pt-8 pb-8 h-full flex flex-col">
                      <Avatar className="h-28 w-28 mb-5">
                        {member.imageSrc ? (
                          <AvatarImage
                            src={member.imageSrc}
                            alt={member.title}
                            className="object-cover grayscale"
                          />
                        ) : null}
                        <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="mb-3 text-xs">
                        {member.isLeader ? "Founder · Consultant" : "Consultant"}
                      </Badge>
                      <p className="text-sm tracking-[0.1em] uppercase text-muted-foreground mb-1">
                        {member.focus}
                      </p>
                      <h3 className="text-xl font-medium mb-3">{member.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
