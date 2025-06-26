
import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-provider";
import { getLanguagesSummary } from "@/services/languageService";

export default async function UserLanguagesPage() {
  // const { t } = useLanguage(); // useLanguage can only be used in client components
  const languagesData = await getLanguagesSummary();

  return (
    <>
      <PageHeader
        title="Choose a Language"
        description="Select a language to start your learning journey."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languagesData.map((lang) => (
          <Card key={lang.id} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Image src={lang.icon} alt={lang.name} width={64} height={64} className="rounded-lg" data-ai-hint={`${lang.name} logo`} />
              <div>
                <CardTitle>{lang.name}</CardTitle>
                {/* A placeholder description as it's not in the summary data */}
                <CardDescription>A popular programming language.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/languages/${lang.id}`}>
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
