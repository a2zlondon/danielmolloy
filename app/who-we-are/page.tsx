import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CTASection } from "@/components/cta-section";

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
};

const team: TeamMember[] = [
  {
    title: "Daniel Molloy",
    focus: "Founder & Lead Technical Advisor",
    bio: "Daniel has spent over 20 years walking into complex technical environments — figuring out how they work, finding hidden risks, and explaining them to management and investors. He has led architecture and delivery at scale for broadcast, media, fintech, and enterprise clients including the BBC, BT Group, and Capita. He leads every engagement and presents findings to deal teams and investment committees.",
    initials: "DM",
    imageSrc: "/images/portrait-smile.png",
    isLeader: true,
  },
  {
    title: "Infrastructure Specialist",
    focus: "Cloud & Cost Review",
    bio: "Reviews AWS, Azure, and hybrid cloud architectures. Assesses cost profiles, scalability limits, deployment maturity, and operational reliability — the dimensions that determine post-acquisition integration risk.",
    initials: "IS",
  },
  {
    title: "Security & Engineering Specialist",
    focus: "Code Quality & Security",
    bio: "Examines source code repositories, CI/CD pipelines, test coverage, vulnerability exposure, and technical debt. Quantifies engineering risk and contributor patterns for deal teams.",
    initials: "SE",
  },
  {
    title: "Product & AI Specialist",
    focus: "Capability Assessment",
    bio: "Evaluates product roadmaps, customer demand signals, and AI capability claims. Determines whether stated technology is defensible engineering or a ChatGPT wrapper in marketing clothing.",
    initials: "PA",
  },
];

const capacitySignals = [
  { value: "6+", label: "Active workstreams" },
  { value: "2–3 wks", label: "Typical full report" },
  { value: "5 areas", label: "Structured review dimensions" },
  { value: "100%", label: "Under NDA & confidentiality" },
];

export default function WhoWeArePage() {
  const leader = team.find((m) => m.isLeader)!;
  const members = team.filter((m) => !m.isLeader);

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
                Daniel Molloy Technology Due Diligence — a specialist team supporting investors, PE firms, and corporate finance advisers with structured technical reviews before capital is committed.
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

              <Card className="mb-16 overflow-hidden border-0 shadow-sm">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative min-h-[280px] bg-muted">
                      <Image
                        src={leader.imageSrc!}
                        alt={leader.title}
                        width={600}
                        height={800}
                        className="w-full h-full object-cover object-top grayscale"
                      />
                    </div>
                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                      <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-2">
                        {leader.focus}
                      </p>
                      <h2 className="text-3xl font-light mb-4">{leader.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {leader.bio}
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        &ldquo;Before we invested, acquired, or built anything significant — we got Daniel to look at it first.&rdquo;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-light mb-4">The team</h2>
              <p className="text-muted-foreground mb-10 max-w-2xl">
                Each engagement is supported by specialists who review infrastructure, security, and product dimensions in parallel — allowing multiple due diligence mandates to run concurrently without compromising depth.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {members.map((member) => (
                  <Card key={member.focus} className="border-0 shadow-sm">
                    <CardContent className="pt-8 pb-8">
                      <Avatar className="h-16 w-16 mb-4">
                        <AvatarFallback className="text-lg bg-muted text-muted-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant="outline" className="mb-3 text-xs">
                        Team member
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
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
