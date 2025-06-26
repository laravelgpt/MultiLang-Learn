
"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/admin/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, FileText, Youtube, Code, Link as LinkIcon, BookOpen } from "lucide-react";
import Link from 'next/link';
import { useLanguage } from "@/context/language-provider";
import { getLanguageCurriculum } from "@/services/languageService";
import type { LanguageCurriculum, Attachment } from "@/lib/mock-data";
import { Skeleton } from "@/components/ui/skeleton";


const AttachmentIcon = ({ type }: { type: Attachment['type'] }) => {
  switch (type) {
    case 'pdf': return <FileText className="w-4 h-4 text-muted-foreground" />;
    case 'youtube': return <Youtube className="w-4 h-4 text-red-500" />;
    case 'code': return <Code className="w-4 h-4 text-blue-500" />;
    case 'link': return <LinkIcon className="w-4 h-4 text-muted-foreground" />;
    default: return null;
  }
};

export default function LanguageCurriculumPage({ params }: { params: { langId: string } }) {
  const { t } = useLanguage();
  const [language, setLanguage] = useState<LanguageCurriculum | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLanguage() {
      setIsLoading(true);
      const curriculum = await getLanguageCurriculum(params.langId);
      setLanguage(curriculum);
      setIsLoading(false);
    }
    fetchLanguage();
  }, [params.langId]);
  
  if (isLoading) {
    return (
      <>
        <PageHeader title="Loading..." />
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full" />
          </CardContent>
        </Card>
      </>
    )
  }

  if (!language) {
    return (
      <PageHeader title="Language Not Found">
        <Button variant="outline" asChild>
          <Link href="/languages"><ArrowLeft className="mr-2 h-4 w-4" /> {t('back_to_languages')}</Link>
        </Button>
      </PageHeader>
    )
  }
  
  return (
    <>
      <PageHeader title={t('language_curriculum', { language: language.name })}>
        <Button variant="outline" asChild>
          <Link href="/languages"><ArrowLeft className="mr-2 h-4 w-4" /> {t('back_to_languages')}</Link>
        </Button>
      </PageHeader>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('topics_lessons')}</CardTitle>
          <CardDescription>{t('master_language_path', { language: language.name })}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full" defaultValue={language.topics.length > 0 ? [language.topics[0].id] : []}>
            {language.topics.map((topic) => (
              <AccordionItem value={topic.id} key={topic.id}>
                <AccordionTrigger className="px-4 py-3 text-lg font-semibold hover:no-underline">
                  {topic.title}
                </AccordionTrigger>
                <AccordionContent className="border-t bg-background">
                  <div className="p-4 space-y-4">
                    {topic.lessons.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p>{t('lessons_coming_soon')}</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {topic.lessons.map(lesson => (
                          <div key={lesson.id} className="flex items-center justify-between p-3 rounded-md border bg-card hover:bg-muted/50">
                            <div className="flex items-center gap-4">
                              <BookOpen className="w-5 h-5 text-primary"/>
                              <div>
                                <p className="font-medium">{lesson.title}</p>
                                <div className="flex items-center gap-4 mt-1">
                                   <Badge variant={
                                      lesson.difficulty === 'Beginner' ? 'secondary' :
                                      lesson.difficulty === 'Intermediate' ? 'outline' : 'default'
                                    }>{lesson.difficulty}</Badge>
                                    {lesson.attachments.length > 0 && (
                                        <div className="flex items-center gap-2">
                                        {lesson.attachments.map((att, i) => (
                                            <a key={i} href={att.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
                                            <AttachmentIcon type={att.type} />
                                            </a>
                                        ))}
                                        </div>
                                    )}
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost" asChild>
                              <Link href={`/languages/${params.langId}/lessons/${lesson.id}`}>
                                {t('start_lesson')}
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
             {language.topics.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                  <p>{t('curriculum_coming_soon', { language: language.name })}</p>
              </div>
            )}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
