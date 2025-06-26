
"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-provider";
import { getLanguagesSummary } from "@/services/languageService";
import type { LanguageSummary } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserLanguagesPage() {
  const { t } = useLanguage();
  const [languagesData, setLanguagesData] = useState<LanguageSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLanguages() {
      setIsLoading(true);
      const summary = await getLanguagesSummary();
      setLanguagesData(summary);
      setIsLoading(false);
    }
    fetchLanguages();
  }, []);

  return (
    <>
      <PageHeader
        title={t('choose_language')}
        description={t('select_language_journey')}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-center gap-4">
                <Skeleton className="h-16 w-16 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </CardHeader>
              <CardFooter>
                 <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))
        ) : (
          languagesData.map((lang) => (
            <Card key={lang.id} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                <Image src={lang.icon} alt={lang.name} width={64} height={64} className="rounded-lg" data-ai-hint={`${lang.name} logo`} />
                <div>
                  <CardTitle>{lang.name}</CardTitle>
                  <CardDescription>A popular programming language.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow" />
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/languages/${lang.id}`}>
                    {t('start_learning')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </>
  );
}
