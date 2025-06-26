
"use client";

import { PageHeader } from "@/components/admin/page-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/language-provider";

const languagesData = [
  { id: 'py', name: 'Python', icon: 'https://placehold.co/64x64.png', description: 'A versatile language for web development, data science, and more.' },
  { id: 'js', name: 'JavaScript', icon: 'https://placehold.co/64x64.png', description: 'The language of the web, for building interactive front-ends.' },
  { id: 'java', name: 'Java', icon: 'https://placehold.co/64x64.png', description: 'A robust language for large-scale enterprise applications.' },
  { id: 'cpp', name: 'C++', icon: 'https://placehold.co/64x64.png', description: 'High-performance programming for systems and game development.' },
  { id: 'go', name: 'Go', icon: 'https://placehold.co/64x64.png', description: 'A modern language from Google for concurrent programming.' },
];

export default function UserLanguagesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t('choose_language')}
        description={t('select_language_journey')}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {languagesData.map((lang) => (
          <Card key={lang.id} className="flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
              <Image src={lang.icon} alt={lang.name} width={64} height={64} className="rounded-lg" data-ai-hint="language logo" />
              <div>
                <CardTitle>{lang.name}</CardTitle>
                <CardDescription>{lang.description}</CardDescription>
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
        ))}
      </div>
    </>
  );
}
