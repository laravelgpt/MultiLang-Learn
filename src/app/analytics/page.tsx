import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { LanguagePopularityChart } from "@/components/admin/language-popularity-chart";
import { CompletionRateChart } from "@/components/admin/completion-rate-chart";
import { StrugglePointsAnalyzer } from "@/components/admin/struggle-points-analyzer";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics & Reports"
        description="Gain insights into your platform's performance and user behavior."
      >
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </PageHeader>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <LanguagePopularityChart />
        <CompletionRateChart />
        <StrugglePointsAnalyzer />
      </div>
    </>
  );
}
