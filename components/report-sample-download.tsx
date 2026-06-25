import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const REPORT_SAMPLE_URL = "/downloads/technical-due-diligence-report-coverage.pdf";

export function ReportSampleDownload() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto border-0 shadow-sm">
          <CardContent className="p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
                Sample scope
              </p>
              <h2 className="text-3xl font-light mb-3">
                Download what a report covers
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                A concise PDF showing the product, engineering, infrastructure, team, and commercial areas reviewed during technical due diligence.
              </p>
            </div>
            <Button asChild className="shrink-0">
              <a href={REPORT_SAMPLE_URL} download>
                Download PDF
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
