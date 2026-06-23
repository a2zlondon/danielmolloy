import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const activeStreams = [
  { label: "SaaS acquisition review", status: "In progress" },
  { label: "AI capability assessment", status: "In progress" },
  { label: "Infrastructure & cloud cost audit", status: "In progress" },
  { label: "CTO & team due diligence", status: "Reporting" },
  { label: "Investor technical review", status: "In progress" },
  { label: "Security & code quality review", status: "Reporting" },
];

const reportAreas = [
  "Product",
  "Engineering",
  "Infrastructure",
  "Team",
  "Commercial",
];

export function ActiveReviews() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Current capacity
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Multiple reviews running in parallel
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A dedicated team of infrastructure, security, and engineering specialists supports each engagement. Typical turnaround is two to three weeks for a full acquisition report.
            </p>
            <div className="flex flex-wrap gap-2">
              {reportAreas.map((area) => (
                <Badge key={area} variant="outline" className="text-sm px-3 py-1">
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {activeStreams.map((stream) => (
              <Card key={stream.label} className="border-0 shadow-sm">
                <CardContent className="py-4 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium">{stream.label}</span>
                  <Badge
                    variant={stream.status === "Reporting" ? "default" : "secondary"}
                    className="shrink-0 text-xs"
                  >
                    {stream.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
            <p className="text-xs text-muted-foreground pt-2">
              Representative active workstreams. Client details withheld under confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
