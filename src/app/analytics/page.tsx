
"use client";

import { PageHeader } from "@/components/admin/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { LanguagePopularityChart, languagePopularityData } from "@/components/admin/language-popularity-chart";
import { CompletionRateChart } from "@/components/admin/completion-rate-chart";
import { StrugglePointsAnalyzer } from "@/components/admin/struggle-points-analyzer";
import { TimeSpentChart } from "@/components/admin/time-spent-chart";
import { useToast } from "@/hooks/use-toast";

export default function AnalyticsPage() {
  const { toast } = useToast();

  const handleExportCsv = () => {
    const headers = ["language,users"];
    const rows = languagePopularityData.map(d => `${d.language},${d.users}`);
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "language_popularity.csv");
    document.body.appendChild(link);
    
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Export Successful",
      description: "Language popularity data has been exported as CSV.",
    });
  };

  const handleExportPdf = () => {
    toast({
        title: "Feature Not Implemented",
        description: "PDF export is not available yet.",
        variant: "destructive"
    });
  };

  return (
    <>
      <PageHeader
        title="Analytics & Reports"
        description="Gain insights into your platform's performance and user behavior."
      >
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportCsv}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button onClick={handleExportPdf}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
        </div>
      </PageHeader>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <LanguagePopularityChart />
        <CompletionRateChart />
        <TimeSpentChart />
        <StrugglePointsAnalyzer />
      </div>
    </>
  );
}
